use rusqlite::{Connection, named_params};
use tracing::info;

use crate::config::get_mdx_files_by_language;

pub fn query(word: String, lang: Option<String>) -> String {
    query_with_redirect_resolution(word, 0, lang)
}

fn query_with_redirect_resolution(word: String, redirect_count: u8, lang: Option<String>) -> String {
    // Prevent infinite redirect loops
    if redirect_count > 5 {
        info!("Too many redirects ({}), stopping redirect resolution for: {}", redirect_count, word);
        return "Error: Too many redirects".to_string();
    }
    
    let w = word.clone();
    let mut all_definitions = Vec::new();
    let mut redirect_targets = Vec::new();
    
    let mdx_files = get_mdx_files_by_language(lang.as_deref());
    for file in &mdx_files {
        let db_file = format!("{file}.db");
        let conn = Connection::open(&db_file).unwrap();
        
        // 搜索所有匹配的条目（现在可以有多个相同的text）
        let mut stmt = conn
            .prepare("SELECT id, text, def FROM MDX_INDEX WHERE text = :word ORDER BY id;")
            .unwrap();
        info!("Searching for all entries: {} in dict: {}, redirect_depth: {}", &w, file, redirect_count);
        
        let mut rows = stmt.query(named_params! { ":word": w }).unwrap();
        let mut found_entries = 0;
        
        while let Ok(Some(row)) = rows.next() {
            found_entries += 1;
            let _id = row.get::<usize, i64>(0).unwrap();  // id 列
            let _text = row.get::<usize, String>(1).unwrap(); // text 列  
            let def = row.get::<usize, String>(2).unwrap();   // def 列
            
            // Check if this is a redirect link
            if def.starts_with("@@@LINK=") {
                let target_word = def.strip_prefix("@@@LINK=")
                    .unwrap_or(&def)
                    .trim()
                    .trim_end_matches('\0')
                    .trim();
                info!("Found redirect: '{}' -> '{}' (entry {}), resolving...", word, target_word, found_entries);
                
                // 收集所有跳转目标，而不是立即返回第一个
                redirect_targets.push(target_word.to_string());
            } else {
                // 直接的定义内容
                all_definitions.push(def);
            }
        }
        
        info!("Found {} entries for '{}', {} redirects, {} direct definitions", 
              found_entries, word, redirect_targets.len(), all_definitions.len());
        
        // 如果没有精确匹配，尝试模式匹配
        if found_entries == 0 {
            let pattern = format!("%【{}】%", w);
            let mut stmt = conn
                .prepare("SELECT id, text, def FROM MDX_INDEX WHERE text LIKE :pattern ORDER BY id;")
                .unwrap();
            info!("Trying pattern match for: {} in dict: {}", &pattern, file);
            
            let mut rows = stmt.query(named_params! { ":pattern": pattern }).unwrap();
            
            while let Ok(Some(row)) = rows.next() {
                let def = row.get::<usize, String>(2).unwrap();   // def 列
                
                if def.starts_with("@@@LINK=") {
                    let target_word = def.strip_prefix("@@@LINK=")
                        .unwrap_or(&def)
                        .trim()
                        .trim_end_matches('\0')
                        .trim();
                    info!("Found pattern redirect: '{}' -> '{}', resolving...", word, target_word);
                    redirect_targets.push(target_word.to_string());
                } else {
                    all_definitions.push(def);
                }
            }
        }
    }
    
    // 递归解析所有跳转目标
    for target in redirect_targets {
        let resolved_def = query_with_redirect_resolution(target, redirect_count + 1, lang.clone());
        if resolved_def != "not found" {
            all_definitions.push(resolved_def);
        }
    }
    
    if !all_definitions.is_empty() {
        info!("Found {} total definitions for '{}'", all_definitions.len(), word);
        // 合并所有定义
        return all_definitions.join("\n\n=== Next Entry ===\n\n");
    }
    
    "not found".to_string()
}
