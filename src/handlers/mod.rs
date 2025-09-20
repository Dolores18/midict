use crate::lucky;
use crate::query::query;
use serde::Deserialize;

use axum::{extract::Form, response::Response};

#[derive(Deserialize, Debug)]
pub struct QueryForm {
    word: String,
    #[serde(default = "default_lang")]
    lang: String,
}

fn default_lang() -> String {
    "en".to_string()
}

pub(crate) async fn handle_query(Form(params): Form<QueryForm>) -> Response {
    let result = query(params.word, Some(params.lang));
    axum::http::Response::builder()
        .header("Content-Type", "text/plain")
        .body(result.into())
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
