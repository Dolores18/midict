use std::env;
use std::path::PathBuf;
/*
pub const MDX_FILES: &[&str] = &[
    "./resources/mdx/ja/明镜日汉双解辞典.mdx",
];
*/
pub const MDX_FILES: &[&str] = &[
    "./resources/mdx/en/朗文当代高级英语辞典6th.mdx",
];

pub fn static_path() -> anyhow::Result<PathBuf> {
    let mut path: PathBuf = env!("CARGO_MANIFEST_DIR").into();
    path.push("resources/static");
    Ok(path)
}
