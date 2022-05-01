use crate::{
    utils::{wrap_keyframes, wrap_property_with_comma},
    value::get_component_value,
};

pub fn get_keyframes(keyframes: &swc_css_ast::KeyframesRule) -> String {
    // [sample]
    // globalKeyframes('rotate', {
    //     '0%': { transform: 'rotate(0deg)' },
    //     '100%': { transform: 'rotate(360deg)' }
    // });
    let keyframes_name = match &keyframes.name {
        swc_css_ast::KeyframesName::CustomIdent(custom_ident) => custom_ident.value.to_string(),
        swc_css_ast::KeyframesName::Str(str) => str.value.to_string(),
    };

    let mut component_values = String::new();
    for component_value in &keyframes.block.value {
        let component_value_as_str = get_component_value(component_value);
        component_values.push_str(&component_value_as_str[0].ve.to_string());
    }

    wrap_keyframes(wrap_property_with_comma(keyframes_name, component_values))
}
