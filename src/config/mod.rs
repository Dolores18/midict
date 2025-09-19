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
    // 使用当前工作目录的相对路径，而不是编译时路径
    Ok(PathBuf::from("./resources/static"))
}
