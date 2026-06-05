use crate::lucky;
use crate::query::query;
use serde::Deserialize;

use axum::{extract::{Form, Query}, response::Response};

#[derive(Deserialize, Debug)]
pub struct QueryForm {
    word: String,
    #[serde(default = "default_lang")]
    lang: String,
}

fn default_lang() -> String {
    "en".to_string()
}

pub(crate) async fn handle_query_post(Form(params): Form<QueryForm>) -> Response {
    let result = query(params.word, Some(params.lang));
    axum::http::Response::builder()
        .header("Content-Type", "text/plain")
        .body(result.into())
        .unwrap()
}

pub(crate) async fn handle_query_get(Query(params): Query<QueryForm>) -> Response {
    let result = query(params.word.clone(), Some(params.lang.clone()));
    
    // 构建完整的HTML页面
    let html = format!(
        r#"<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{word} - 词典查询</title>
    <link rel="stylesheet" href="/index.css">
    <link rel="stylesheet" href="/lm6.css">
</head>
<body>
    <div id="mdx-resp">
        {content}
    </div>
    <script src="/jquery.min.js"></script>
    <script src="/lm6.js"></script>
    <script>
        // 页面加载完成后初始化
        $(document).ready(function() {{
            if (typeof main === 'function') {{
                main();
            }}
        }});
    </script>
</body>
</html>"#,
        word = params.word,
        content = result
    );
    
    axum::http::Response::builder()
        .header("Content-Type", "text/html; charset=utf-8")
        .body(html.into())
        .unwrap()
}

pub(crate) async fn handle_lucky() -> Response {
    let word = lucky::lucky_word();
    let result = query(word, None); // 使用默认语言
    axum::http::Response::builder()
        .header("Content-Type", "text/plain")
        .body(result.into())
        .unwrap()
}
