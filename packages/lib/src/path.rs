use std::{env, path::Path};

type ResultPath = Result<String, std::ffi::OsString>;

pub fn resolve_paths(path: String) -> Result<Vec<(ResultPath, ResultPath)>, String> {
    let mut target = env::current_dir().unwrap();
    let mut _paths: Vec<(ResultPath, ResultPath)> = vec![];

    target.push(path);
    if !target.exists() {
        return Err(format!("The specified path does not exist.{:?}\n", target));
    }

    each_resolve_path(&mut _paths, &target)
}

pub fn each_resolve_path(
    paths: &mut Vec<(ResultPath, ResultPath)>,
    target: &Path,
) -> Result<Vec<(ResultPath, ResultPath)>, String> {
    if target.is_dir() {
        let files = match target.read_dir() {
            Ok(value) => value,
            Err(error) => return Err(format!("{:?}", error)),
        };
        for dir_entry in files {
            let path = match dir_entry {
                Ok(value) => value.path(),
                Err(error) => {
                    eprintln!("{:?}", &error);
                    continue;
                }
            };

            if path.is_dir() {
                if each_resolve_path(paths, &path).is_err() {
                    eprintln!("Unable to resolve path :{:?}", &path);
                }
                continue;
            }

            if resolve_path(&path, paths).is_err() {
                eprintln!("Unable to resolve path :{:?}", &path);
                continue;
            }
        }
        return Ok(paths.clone());
    }
    resolve_path(target, paths)
}

fn resolve_path(
    path: &Path,
    paths: &mut Vec<(ResultPath, ResultPath)>,
) -> Result<Vec<(ResultPath, ResultPath)>, String> {
    let mut output_path = path.to_path_buf();
    let mut output_file_name = String::new();

    if let Some(file_name) = output_path.file_name() {
        if let Some(file_name_as_str) = file_name.to_str() {
            // [Note] index.css => index.css.ts, index.scss => index.scss.ts
            let formatted_file_name_as_str = &format!("{}.ts", file_name_as_str);
            output_file_name.push_str(formatted_file_name_as_str);
        } else {
            return Err(String::new());
        }
    } else {
        return Err(String::new());
    }

    output_path.pop();
    output_path.push(output_file_name);
    let output_path_as_str = output_path.into_os_string().into_string();
    if let Err(error) = output_path_as_str {
        return Err(format!("{:?}", error));
    }

    let path_as_str = path.to_path_buf().into_os_string().into_string();
    if let Err(error) = path_as_str {
        return Err(format!("{:?}", error));
    }

    paths.push((output_path_as_str, path_as_str));

    Ok(paths.clone())
}
