use crate::{
    utils::wrap_property_with_comma,
    value::{get_component_value, get_declaration, get_function, Component},
};

pub fn get_supports_rule(supports: &swc_css_ast::SupportsRule) -> (String, Vec<Component>) {
    let mut conditions = String::new();
    for condition in &supports.condition.conditions {
        conditions.push_str(&get_supports_condition(condition))
    }

    let mut components: Vec<Component> = vec![];
    for simple_block_value in &supports.block.value {
        components.push(get_component_value(simple_block_value)[0].clone());
    }

    (conditions, components)
}

fn get_supports_condition(condition: &swc_css_ast::SupportsConditionType) -> String {
    match condition {
        swc_css_ast::SupportsConditionType::Not(not) => {
            format!(" not {}", &get_supports_in_parens(&not.condition))
        }
        swc_css_ast::SupportsConditionType::And(and) => {
            format!(" and {}", &get_supports_in_parens(&and.condition))
        }
        swc_css_ast::SupportsConditionType::Or(or) => {
            format!(" or {}", &get_supports_in_parens(&or.condition))
        }
        swc_css_ast::SupportsConditionType::SupportsInParens(supports_in_parens) => {
            get_supports_in_parens(supports_in_parens)
        }
    }
}

fn get_supports_in_parens(supports_in_parens: &swc_css_ast::SupportsInParens) -> String {
    match supports_in_parens {
        swc_css_ast::SupportsInParens::SupportsCondition(supports_condition) => {
            let mut conditions = String::new();
            for condition in &supports_condition.conditions {
                conditions.push_str(&get_supports_condition(condition));
            }

            conditions
        }
        swc_css_ast::SupportsInParens::Feature(feature) => get_supports_feature(feature),
        swc_css_ast::SupportsInParens::GeneralEnclosed(general_enclosed) => {
            match general_enclosed {
                swc_css_ast::GeneralEnclosed::Function(function) => get_function(function),
                swc_css_ast::GeneralEnclosed::SimpleBlock(simple_block) => {
                    let mut simple_block_values = String::new();
                    for simple_block_value in &simple_block.value {
                        let component_value = get_component_value(simple_block_value);
                        simple_block_values.push_str(&component_value[0].ve);
                    }
                    wrap_property_with_comma(simple_block.name.to_string(), simple_block_values)
                }
            }
        }
    }
}

fn get_supports_feature(feature: &swc_css_ast::SupportsFeature) -> String {
    match feature {
        swc_css_ast::SupportsFeature::Declaration(declaration) => {
            get_declaration(declaration, true).0
        }
        swc_css_ast::SupportsFeature::Function(function) => get_function(function),
    }
}
