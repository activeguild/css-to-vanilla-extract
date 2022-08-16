use crate::{
    utils::{
        wrap_keyframes, wrap_properties_with_colon, wrap_properties_with_comma, wrap_property,
    },
    value::get_component_value,
};

pub fn get_keyframes(
    keyframes_name: &swc_css_ast::KeyframesName,
    block: &Option<swc_css_ast::SimpleBlock>,
) -> String {
    // [sample]
    // globalKeyframes('rotate', {
    //     '0%': { transform: 'rotate(0deg)' },
    //     '100%': { transform: 'rotate(360deg)' }
    // });
    let keyframes_name = match &keyframes_name {
        swc_css_ast::KeyframesName::CustomIdent(custom_ident) => custom_ident.value.to_string(),
        swc_css_ast::KeyframesName::Str(str) => str.value.to_string(),
    };

    let mut component_values = String::new();

    if let Some(block) = &block {
        for component_value in &block.value {
            let component = get_component_value(component_value);

            let mut rule = String::new();
            for key_value in component[0].key_value_pair.clone().into_iter() {
                rule.push_str(&wrap_property(key_value.key, key_value.value, Some(4)));
            }

            component_values.push_str(&wrap_properties_with_colon(
                component[0].clone().ve,
                rule,
                Some(2),
            ));
        }
    }

    wrap_keyframes(wrap_properties_with_comma(
        keyframes_name,
        component_values,
        Some(0),
    ))
}
