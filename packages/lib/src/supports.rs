use std::collections::BTreeMap;

use crate::value::{get_component_value, get_declaration, get_function, Component};

pub fn get_supports_rule(
    supports: &swc_css_ast::SupportsCondition,
    block: &Option<swc_css_ast::SimpleBlock>,
) -> (String, Vec<Component>) {
    let mut conditions = String::new();
    for condition in &supports.conditions {
        conditions.push_str(&get_supports_condition(condition).ve);
    }

    let mut components: Vec<Component> = vec![];
    if let Some(block) = &block {
        for simple_block_value in &block.value {
            components.push(get_component_value(simple_block_value)[0].clone());
        }
    }

    (conditions, components)
}

fn get_supports_condition(condition: &swc_css_ast::SupportsConditionType) -> Component {
    let mut component = Component::default();
    match condition {
        swc_css_ast::SupportsConditionType::Not(not) => {
            let supports_in_parens = &get_supports_in_parens(&not.condition);
            component.ve.push_str(&supports_in_parens.ve);
            for (key, value) in &supports_in_parens.key_value_pair {
                component
                    .ve
                    .push_str(&format!(" not {}", &format!("({}:{})", key, value)));
            }

            component
        }
        swc_css_ast::SupportsConditionType::And(and) => {
            let supports_in_parens = &get_supports_in_parens(&and.condition);
            component.ve.push_str(&supports_in_parens.ve);
            for (key, value) in &supports_in_parens.key_value_pair {
                component
                    .ve
                    .push_str(&format!(" and {}", &format!("({}:{})", key, value)));
            }

            component
        }
        swc_css_ast::SupportsConditionType::Or(or) => {
            let supports_in_parens = &get_supports_in_parens(&or.condition);
            component.ve.push_str(&supports_in_parens.ve);
            for (key, value) in &supports_in_parens.key_value_pair {
                component
                    .ve
                    .push_str(&format!(" or {}", &format!("({}:{})", key, value)));
            }

            component
        }
        swc_css_ast::SupportsConditionType::SupportsInParens(supports_in_parens) => {
            let supports_in_parens = get_supports_in_parens(supports_in_parens);
            component.ve.push_str(&supports_in_parens.ve);
            for (key, value) in &supports_in_parens.key_value_pair {
                component.ve.push_str(&format!("({}:{})", key, value));
            }

            component
        }
    }
}

fn get_supports_in_parens(supports_in_parens: &swc_css_ast::SupportsInParens) -> Component {
    let mut component = Component::default();
    match supports_in_parens {
        swc_css_ast::SupportsInParens::SupportsCondition(supports_condition) => {
            let mut condition_as_str = String::new();
            for condition in &supports_condition.conditions {
                condition_as_str.push_str(&get_supports_condition(condition).ve);
            }

            component.ve.push_str(&condition_as_str);
            component
        }
        swc_css_ast::SupportsInParens::Feature(feature) => {
            let supports_feature = get_supports_feature(feature);

            component.key_value_pair.extend(supports_feature.0);
            component.ve.push_str(&supports_feature.1);
            component
        }
        swc_css_ast::SupportsInParens::GeneralEnclosed(general_enclosed) => {
            match general_enclosed {
                swc_css_ast::GeneralEnclosed::Function(function) => {
                    let function = get_function(function);

                    component.ve.push_str(&function);
                    component
                }
                swc_css_ast::GeneralEnclosed::SimpleBlock(simple_block) => {
                    let mut simple_block_values = String::new();
                    let mut key_value_pair: BTreeMap<String, String> = BTreeMap::new();
                    for simple_block_value in &simple_block.value {
                        let component_value = get_component_value(simple_block_value);
                        simple_block_values.push_str(&component_value[0].ve);
                        key_value_pair.extend(component_value[0].key_value_pair.clone());
                    }

                    component.key_value_pair.extend(key_value_pair);
                    component.ve.push_str(&simple_block_values);
                    component.key.push_str(&simple_block.name.to_string());
                    component
                }
            }
        }
    }
}

fn get_supports_feature(
    feature: &swc_css_ast::SupportsFeature,
) -> (BTreeMap<String, String>, String) {
    match feature {
        swc_css_ast::SupportsFeature::Declaration(declaration) => {
            (get_declaration(declaration).0, String::new())
        }
        swc_css_ast::SupportsFeature::Function(function) => {
            (BTreeMap::new(), get_function(function))
        }
    }
}
