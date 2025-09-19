use std::fs;
use std::path::PathBuf;

use anyhow::Context;
use rusqlite::{Connection, params};

use crate::mdict::mdx::Mdx;
use tracing::info;

/// indexing all mdx files into db
pub(crate) fn indexing(files: &[&str], reindex: bool) {
    for file in files {
        let db_file = format!("{}{}", file.to_string(), ".db");
        if PathBuf::from(&db_file).exists() {
            if reindex {
                fs::remove_file(&db_file).expect("remove old db file error");
                info!("old db file:{} removed", &db_file);
                mdx_to_sqlite(file).unwrap();
            }
        } else {
            mdx_to_sqlite(file).unwrap();
        }
    }
}

/// mdx entries and definition to sqlite table
pub(crate) fn mdx_to_sqlite(file: &str) -> anyhow::Result<()> {
    let db_file = format!("{}{}", file, ".db");
    let mut conn = Connection::open(&db_file)?;
    let mdx = Mdx::new(&fs::read(file)?);

    // 统计解析出的总条数
    let total_parsed_entries = mdx.items().count();
    info!("📊 MDX解析完成，总条目数: {}", total_parsed_entries);

    // 创建新的表结构：使用自增ID主键，允许重复的text
    conn.execute(
        "create table if not exists MDX_INDEX (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                text TEXT NOT NULL,
                def TEXT NOT NULL
         )",
        params![],
    )
    .with_context(|| "create table failed")?;
    
    // 创建索引优化查询性能
    conn.execute(
        "create index if not exists idx_text ON MDX_INDEX(text)",
        params![],
    )
    .with_context(|| "create index failed")?;
    info!("table crated for {:?}", &db_file);

    let tx = conn
        .transaction()
        .with_context(|| "get transaction from connection failed")?;

    let mut inserted_count = 0;
    
    for r in mdx.items() {
        // 直接插入，不再检查重复，保留所有条目
        tx.execute(
            "INSERT INTO MDX_INDEX (text, def) VALUES (?, ?)",
            params![r.text, r.definition],
        )
        .with_context(|| "insert MDX_INDEX table error")?;
        inserted_count += 1;
    }
    
    tx.commit().with_context(|| "transaction commit error")?;
    
    // 统计最终数据库中的条数
    let final_count: i64 = conn.query_row("SELECT COUNT(*) FROM MDX_INDEX", [], |row| row.get(0))?;
    
    info!("📊 数据库插入统计:");
    info!("   - MDX解析总条数: {}", total_parsed_entries);
    info!("   - 成功插入条数: {}", inserted_count);
    info!("   - 数据库最终条数: {}", final_count);
    
    if total_parsed_entries as i64 == final_count {
        info!("✅ 成功！所有MDX条目均已保存，无数据丢失");
    } else {
        info!("⚠️  警告: 数据不一致，可能存在问题");
    }
    
    conn.close().expect("close db connection failed");
    Ok(())
}
