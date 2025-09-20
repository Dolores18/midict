use std::path::PathBuf;
use serde::{Deserialize, Serialize};
use once_cell::sync::Lazy;
use anyhow::{Context, Result};

#[derive(Debug, Clone, Deserialize, Serialize)]
pub struct MdxFile {
    pub path: String,
    #[serde(default = "default_enabled")]
    pub enabled: bool,
    #[serde(default)]
    pub language: Option<String>,
}

#[derive(Debug, Clone, Deserialize, Serialize)]
pub struct ServerConfig {
    #[serde(default = "default_port")]
    pub port: u16,
    #[serde(default = "default_host")]
    pub host: String,
}

#[derive(Debug, Clone, Deserialize, Serialize)]
pub struct StaticFilesConfig {
    #[serde(default = "default_static_path")]
    pub path: String,
}

#[derive(Debug, Clone, Deserialize, Serialize)]
pub struct Config {
    #[serde(default)]
    pub mdx_files: Vec<MdxFile>,
    #[serde(default)]
    pub server: ServerConfig,
    #[serde(default)]
    pub static_files: StaticFilesConfig,
}

fn default_enabled() -> bool {
    true
}

fn default_port() -> u16 {
    8181
}

fn default_host() -> String {
    "127.0.0.1".to_string()
}

fn default_static_path() -> String {
    "./resources/static".to_string()
}

impl Default for ServerConfig {
    fn default() -> Self {
        Self {
            port: default_port(),
            host: default_host(),
        }
    }
}

impl Default for StaticFilesConfig {
    fn default() -> Self {
        Self {
            path: default_static_path(),
        }
    }
}

impl Default for Config {
    fn default() -> Self {
        Self {
            mdx_files: vec![],
            server: ServerConfig::default(),
            static_files: StaticFilesConfig::default(),
        }
    }
}

pub static CONFIG: Lazy<Config> = Lazy::new(|| {
    load_config().unwrap_or_else(|e| {
        eprintln!("Failed to load config.toml: {}. Using defaults.", e);
        // Default fallback configuration
        Config {
            mdx_files: vec![MdxFile {
                path: "./resources/mdx/ja/明镜日汉双解辞典.mdx".to_string(),
                enabled: true,
                language: Some("ja".to_string()),
            }],
            ..Default::default()
        }
    })
});

fn load_config() -> Result<Config> {
    let config_path = PathBuf::from("config.toml");
    let config_content = std::fs::read_to_string(&config_path)
        .with_context(|| format!("Failed to read config file: {:?}", config_path))?;

    let config: Config = toml::from_str(&config_content)
        .with_context(|| "Failed to parse config.toml")?;

    Ok(config)
}

pub fn get_mdx_files() -> Vec<String> {
    CONFIG.mdx_files
        .iter()
        .filter(|f| f.enabled)
        .map(|f| f.path.clone())
        .collect()
}

pub fn get_mdx_files_by_language(lang: Option<&str>) -> Vec<String> {
    let target_lang = lang.unwrap_or("en"); // 默认英语
    
    CONFIG.mdx_files
        .iter()
        .filter(|f| f.enabled)
        .filter(|f| {
            match &f.language {
                Some(file_lang) => file_lang == target_lang,
                None => target_lang == "en", // 如果没有指定语言，默认为英语
            }
        })
        .map(|f| f.path.clone())
        .collect()
}

pub fn static_path() -> anyhow::Result<PathBuf> {
    Ok(PathBuf::from(&CONFIG.static_files.path))
}

pub fn server_address() -> String {
    format!("{}:{}", CONFIG.server.host, CONFIG.server.port)
}
