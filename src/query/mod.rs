use rusqlite::{Connection, named_params};
use tracing::info;

use crate::config::MDX_FILES;

pub fn query(word: String) -> String {
    query_with_redirect_resolution(word, 0)
}

fn query_with_redirect_resolution(word: String, redirect_count: u8) -> String {
    // Prevent infinite redirect loops
    if redirect_count > 5 {
        info!("Too many redirects ({}), stopping redirect resolution for: {}", redirect_count, word);
        return "Error: Too many redirects".to_string();
    }
    
    let w = word.clone();
    for file in MDX_FILES {
        let db_file = format!("{file}.db");
        let conn = Connection::open(&db_file).unwrap();
        let mut stmt = conn
            .prepare("select * from MDX_INDEX WHERE text= :word limit 1;")
            .unwrap();
        info!("query params={}, dict={}, redirect_depth={}", &w, file, redirect_count);

        let mut rows = stmt.query(named_params! { ":word": w }).unwrap();
        let row = rows.next().unwrap();
        if let Some(row) = row {
            let def = row.get::<usize, String>(1).unwrap();
            
            // Check if this is a redirect link
            if def.starts_with("@@@LINK=") {
                let target_word = def.strip_prefix("@@@LINK=")
                    .unwrap_or(&def)
                    .trim()  // Remove whitespace
                    .trim_end_matches('\0')  // Remove null terminator
                    .trim();  // Trim again just in case
                info!("Found redirect: '{}' -> '{}', resolving...", word, target_word);
                
                // Recursively resolve the redirect
                return query_with_redirect_resolution(target_word.to_string(), redirect_count + 1);
            }
            
            // This is a regular definition, return it
            info!("Found definition for '{}'", word);
            
            // 不再逐字符打印，提高性能
            // println!("手动解析:");
            // let bytes = def.as_bytes();
            // for (i, &byte) in bytes.iter().enumerate() {
            //     if byte >= 32 && byte <= 126 {
            //         println!("  [{}]: 0x{:02x} = '{}'", i, byte, byte as char);
            //     } else {
            //         println!("  [{}]: 0x{:02x} = <控制字符>", i, byte);
            //     }
            // }
            
            return def;
        }
    }
    "not found".to_string()
}
