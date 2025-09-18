use rusqlite::{Connection, named_params};
use tracing::info;

use crate::config::MDX_FILES;

pub fn query(word: String) -> String {
    let w = word;
    for file in MDX_FILES {
        let db_file = format!("{file}.db");
        let conn = Connection::open(&db_file).unwrap();
        let mut stmt = conn
            .prepare("select * from MDX_INDEX WHERE text= :word limit 1;")
            .unwrap();
        info!("query params={}, dict={}", &w, file);

        let mut rows = stmt.query(named_params! { ":word": w }).unwrap();
        let row = rows.next().unwrap();
        if let Some(row) = row {
            let def = row.get::<usize, String>(1).unwrap();
            println!("找到词条，完整定义内容:");
            println!("{}", def);
            
            // 十六进制分析
            println!("十六进制字节:");
            let hex_str: String = def.as_bytes().iter().map(|b| format!("{:02x}", b)).collect();
            println!("{}", hex_str);
            
            // 手动解析十六进制看看内容
            println!("手动解析:");
            let bytes = def.as_bytes();
            for (i, &byte) in bytes.iter().enumerate() {
                if byte >= 32 && byte <= 126 {
                    println!("  [{}]: 0x{:02x} = '{}'", i, byte, byte as char);
                } else {
                    println!("  [{}]: 0x{:02x} = <控制字符>", i, byte);
                }
            }
            
            println!("--- 定义内容结束 ---");
            return def;
        }
    }
    "not found".to_string()
}
