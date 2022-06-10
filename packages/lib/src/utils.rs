use regex::Regex;

static CSSLANGS: &str = ".(css|sass|scss)$";

pub fn parse_css(css: &str) -> Result<swc_css_ast::Stylesheet, swc_css_parser::error::Error> {
    let start_pos = swc_common::BytePos(0);
    let end_pos = swc_common::BytePos(1);
    let errors: &mut Vec<swc_css_parser::error::Error> = &mut Vec::new();

    swc_css_parser::parse_str::<swc_css_ast::Stylesheet>(
        css,
        start_pos,
        end_pos,
        swc_css_parser::parser::ParserConfig::default(),
        errors,
    )
}

pub fn is_css_request(rquest: &str) -> bool {
    match Regex::new(CSSLANGS) {
        Ok(regex) => regex.is_match(rquest),
        Err(_) => false,
    }
}

pub fn wrap_export_const(key: String, rule: String) -> String {
    format!("export const {} = {}", key, rule)
}

pub fn wrap_style(rule: String) -> String {
    remove_superfluou_line_breaks(format!("style({{\n{}}});\n\n", rule))
}

pub fn wrap_global_style(rule: String) -> String {
    // globalStyle(`input *`, {
    //   boxSizing: 'border-box'
    // });
    remove_superfluou_line_breaks(format!("globalStyle({});\n\n", rule))
}

pub fn wrap_keyframes(rule: String) -> String {
    remove_superfluou_line_breaks(format!("globalKeyframes({});\n\n", rule))
}

pub fn wrap_fontface(rule: String) -> String {
    remove_superfluou_line_breaks(format!("globalFontFace({});\n\n", rule))
}

pub fn wrap_property(key: String, rule: String, spacer: Option<i8>) -> String {
    format!("{}{}:\"{}\",\n", generate_spaces(spacer), key, rule)
}

fn wrap_properties(
    key: String,
    rule: String,
    separator: char,
    with_square_brackets: bool,
) -> String {
    if rule.is_empty() {
        String::new()
    } else if key.contains("${") {
        if with_square_brackets {
            format!("[`{}`]{} {{\n{}}},\n", key, separator, rule)
        } else {
            format!("`{}`{} {{\n{}}},\n", key, separator, rule)
        }
    } else {
        format!("\"{}\"{} {{\n{}}},\n", key, separator, rule)
    }
}

pub fn wrap_properties_with_colon(key: String, rule: String) -> String {
    wrap_properties(key, rule, ':', true)
}

pub fn wrap_properties_with_comma(key: String, rule: String) -> String {
    wrap_properties(key, rule, ',', false)
}

pub fn generate_spaces(spacer: Option<i8>) -> String {
    let mut spaces: Vec<String> = vec![];
    for _i in 0..spacer.unwrap_or(2).try_into().unwrap() {
        spaces.push(" ".to_string());
    }
    spaces.join("")
}

pub fn remove_superfluou_line_breaks(value: String) -> String {
    let re = Regex::new(r"},\n").unwrap();
    re.replace_all(&value, "},").to_string()
}

const PSEUDO_MAPCONST: [&str; 95] = [
    ":-moz-any-link",
    ":-moz-full-screen",
    ":-moz-placeholder",
    ":-moz-read-only",
    ":-moz-read-write",
    ":-ms-fullscreen",
    ":-ms-input-placeholder",
    ":-webkit-any-link",
    ":-webkit-full-screen",
    "::-moz-placeholder",
    "::-moz-progress-bar",
    "::-moz-range-progress",
    "::-moz-range-thumb",
    "::-moz-range-track",
    "::-moz-selection",
    "::-ms-backdrop",
    "::-ms-browse",
    "::-ms-check",
    "::-ms-clear",
    "::-ms-fill",
    "::-ms-fill-lower",
    "::-ms-fill-upper",
    "::-ms-reveal",
    "::-ms-thumb",
    "::-ms-ticks-after",
    "::-ms-ticks-before",
    "::-ms-tooltip",
    "::-ms-track",
    "::-ms-value",
    "::-webkit-backdrop",
    "::-webkit-input-placeholder",
    "::-webkit-progress-bar",
    "::-webkit-progress-inner-value",
    "::-webkit-progress-value",
    "::-webkit-resizer",
    "::-webkit-scrollbar-button",
    "::-webkit-scrollbar-corner",
    "::-webkit-scrollbar-thumb",
    "::-webkit-scrollbar-track-piece",
    "::-webkit-scrollbar-track",
    "::-webkit-scrollbar",
    "::-webkit-slider-runnable-track",
    "::-webkit-slider-thumb",
    "::after",
    "::backdrop",
    "::before",
    "::cue",
    "::first-letter",
    "::first-line",
    "::grammar-error",
    "::placeholder",
    "::selection",
    "::spelling-error",
    ":active",
    ":after",
    ":any-link",
    ":before",
    ":blank",
    ":checked",
    ":default",
    ":defined",
    ":disabled",
    ":empty",
    ":enabled",
    ":first",
    ":first-child",
    ":first-letter",
    ":first-line",
    ":first-of-type",
    ":focus",
    ":focus-visible",
    ":focus-within",
    ":fullscreen",
    ":hover",
    ":in-range",
    ":indeterminate",
    ":invalid",
    ":last-child",
    ":last-of-type",
    ":left",
    ":link",
    ":only-child",
    ":only-of-type",
    ":optional",
    ":out-of-range",
    ":placeholder-shown",
    ":read-only",
    ":read-write",
    ":required",
    ":right",
    ":root",
    ":scope",
    ":target",
    ":valid",
    ":visited",
];

pub fn is_simple_pseudo_func(key: &str) -> bool {
    PSEUDO_MAPCONST.contains(&key)
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn is_css_request_01() {
        assert!(is_css_request(".css"));
    }

    #[test]
    fn is_css_request_02() {
        assert!(is_css_request(".scss"));
    }

    #[test]
    fn is_css_request_03() {
        assert!(is_css_request(".sass"));
    }

    #[test]
    fn is_css_request_04() {
        assert!(!is_css_request(".soss"));
    }
}
