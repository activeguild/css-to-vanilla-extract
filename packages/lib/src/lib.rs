use std::fs::File;
use std::io::{BufWriter, Write};
use std::thread;

mod keyframes;
mod media;
mod path;
mod supports;
mod utils;
mod value;

use path::resolve_paths;
use utils::{is_css_request, parse_css};
use value::ast_to_vanilla_extract;

pub fn from_code(code: &str) -> Result<String, String> {
    let options = grass::Options::default();
    let code = match grass::from_string(code.to_string(), &options) {
        Ok(value) => value,
        Err(error) => return Err(error.to_string()),
    };

    match parse_css(&code) {
        Ok(value) => Ok(ast_to_vanilla_extract(value)),
        Err(error) => Err(format!("{:?}", error)),
    }
}

pub fn from_path(path: &str) {
    let resolved_paths = match resolve_paths(path.to_string()) {
        Ok(value) => value,
        Err(_) => return,
    };

    for resolved_path in resolved_paths {
        let handle = thread::spawn(|| {
            let output_path_as_str = match resolved_path.0 {
                Ok(value) => value,
                Err(_) => return,
            };
            let path_as_str = match resolved_path.1 {
                Ok(value) => value,
                Err(_) => return,
            };
            if !is_css_request(&path_as_str) {
                return;
            }

            let options = grass::Options::default();
            let code = match grass::from_path(&path_as_str, &options) {
                Ok(value) => value,
                Err(_) => return,
            };

            let parsed_css = match parse_css(&code) {
                Ok(value) => value,
                Err(_) => return,
            };

            let ve: String = ast_to_vanilla_extract(parsed_css);

            let file = match File::create(output_path_as_str) {
                Ok(value) => value,
                Err(_) => return,
            };

            let mut writer = BufWriter::new(file);
            let result = writer.write(ve.as_bytes());

            if result.is_err() {
                return;
            }
        });
        handle.join().unwrap();
    }
}
