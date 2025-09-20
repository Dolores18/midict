use crate::config::{get_mdx_files, static_path, server_address};
use crate::handlers::{handle_lucky, handle_query};
use crate::indexing::indexing;

use axum::{
    Router,
    routing::{get, post},
};
use std::error::Error;
use tower_http::{services::ServeDir, trace::TraceLayer};
use tracing::info;
use tracing_subscriber::{EnvFilter, layer::SubscriberExt, util::SubscriberInitExt};

mod config;
mod handlers;
mod indexing;
mod lucky;
mod mdict;
mod query;
mod util;

#[tokio::main]
async fn main() -> Result<(), Box<dyn Error>> {
    // 初始化日志系统
    tracing_subscriber::registry()
        .with(EnvFilter::new("info"))
        .with(tracing_subscriber::fmt::layer())
        .init();

    let mdx_files = get_mdx_files();
    let mdx_file_refs: Vec<&str> = mdx_files.iter().map(|s| s.as_str()).collect();
    indexing(&mdx_file_refs, false);

    let static_dir = ServeDir::new(static_path()?);

    let app = Router::new()
        .route("/query", post(handle_query))
        .route("/lucky", get(handle_lucky))
        .fallback_service(static_dir)
        .layer(TraceLayer::new_for_http());

    let server_addr = server_address();
    let listener = tokio::net::TcpListener::bind(&server_addr).await.unwrap();

    info!("app serve on http://{}", server_addr);

    axum::serve(listener, app).await?;

    Ok(())
}
