use std::collections::BTreeMap;

use crate::{
    keyframes::get_keyframes,
    media::{get_all_media_conditions, get_without_or_media_conditions},
    supports::get_supports_rule,
    utils::{
        is_simple_pseudo_func, wrap_export_const, wrap_fontface, wrap_global_style,
        wrap_properties_with_colon, wrap_properties_with_comma, wrap_property, wrap_style,
    },
};
use convert_case::{Case, Casing};
use swc_css_ast::{ClassSelector, ComplexSelectorChildren};

type KeyValuePair = BTreeMap<String, String>;
type KeyValuePairInPseudo = BTreeMap<String, KeyValuePair>;
type KeyValuePairInSelectors = BTreeMap<String, KeyValuePair>;

#[derive(Debug)]
pub struct Rule {
    pub key: String,
    pub key_value_pair: KeyValuePair,
    pub key_value_pair_in_vars: KeyValuePair,
    pub key_value_pair_in_pseudo: KeyValuePairInPseudo,
    pub key_value_pair_in_selectors: KeyValuePairInSelectors,
    pub is_global_style: bool,
    pub is_simple_pseudo: bool,
}

#[derive(Debug, Default)]
pub struct Complex {
    pub pseudo: String,
    pub key: String,
    pub is_global_style: bool,
    pub is_simple_pseudo: bool,
    pub has_component_value: bool,
}

#[derive(Debug, Default, Clone)]
pub struct Component {
    pub ve: String,
    pub key_value_pair: KeyValuePair,
    pub key_value_pair_in_vars: KeyValuePair,
    pub key_value_pair_in_pseudo: KeyValuePairInPseudo,
    pub key_value_pair_in_selectors: KeyValuePairInSelectors,
    pub key: String,
    pub is_global_style: bool,
}

#[derive(Debug, Default, Clone)]

pub struct RuleMapValue {
    pub key_value_pair: KeyValuePair,
    pub key_value_pair_in_vars: KeyValuePair,
    pub key_value_pair_in_media: KeyValuePair,
    pub key_value_pair_in_supports: KeyValuePair,
    pub key_value_pair_in_pseudo: KeyValuePairInPseudo,
    pub key_value_pair_in_selectors: KeyValuePairInSelectors,
    pub selectors_in_media: BTreeMap<String, KeyValuePairInSelectors>,
    pub selectors_in_supports: BTreeMap<String, KeyValuePairInSelectors>,
    pub media: String,
    pub supports: String,
}

pub fn ast_to_vanilla_extract(parsed_css: swc_css_ast::Stylesheet) -> String {
    let mut ve: String = String::new();
    let mut rule_map: BTreeMap<String, RuleMapValue> = BTreeMap::new();
    let mut global_rule_map: BTreeMap<String, RuleMapValue> = BTreeMap::new();

    for rule in &parsed_css.rules {
        match rule {
            swc_css_ast::Rule::QualifiedRule(qualfied_rule) => {
                let rules = get_qualified_rule(qualfied_rule);

                for rule in rules {
                    if rule.is_global_style {
                        let _global_rule_map = global_rule_map
                            .entry(rule.key)
                            .or_insert_with(RuleMapValue::default);
                        _global_rule_map.key_value_pair.extend(rule.key_value_pair);
                        _global_rule_map
                            .key_value_pair_in_vars
                            .extend(rule.key_value_pair_in_vars);
                        _global_rule_map
                            .key_value_pair_in_pseudo
                            .extend(rule.key_value_pair_in_pseudo);
                        _global_rule_map
                            .key_value_pair_in_selectors
                            .extend(rule.key_value_pair_in_selectors);
                    } else {
                        let _rule_map = rule_map
                            .entry(rule.key)
                            .or_insert_with(RuleMapValue::default);
                        _rule_map.key_value_pair.extend(rule.key_value_pair);
                        _rule_map
                            .key_value_pair_in_vars
                            .extend(rule.key_value_pair_in_vars);
                        _rule_map
                            .key_value_pair_in_pseudo
                            .extend(rule.key_value_pair_in_pseudo);

                        _rule_map
                            .key_value_pair_in_selectors
                            .extend(rule.key_value_pair_in_selectors);
                    }
                }
            }
            swc_css_ast::Rule::Invalid(_) => println!("Contains an invalid token."),
            swc_css_ast::Rule::AtRule(at_rule) => match at_rule {
                swc_css_ast::AtRule::Charset(_) => {
                    println!("Not supportted. (AtRule::Charset)")
                }
                swc_css_ast::AtRule::Import(_) => {
                    println!("Not supportted. (AtRule::Import)")
                }
                swc_css_ast::AtRule::FontFace(font_face) => {
                    // globalFontFace('MyGlobalFont', {
                    //   src: 'local("Comic Sans MS")'
                    // });
                    let mut block_values = String::new();
                    let mut fontface_key = String::new();
                    for block_value in &font_face.block.value {
                        let components = get_component_value(block_value);
                        for (key, value) in components[0].key_value_pair.clone().into_iter() {
                            if key == "fontFamily" {
                                fontface_key.push_str(&value);
                            } else {
                                block_values.push_str(&wrap_property(key, value, None));
                            }
                        }
                    }

                    ve.push_str(&wrap_fontface(wrap_properties_with_comma(
                        fontface_key,
                        block_values,
                    )));
                }
                swc_css_ast::AtRule::Keyframes(keyframes) => {
                    ve.push_str(&get_keyframes(keyframes));
                }
                swc_css_ast::AtRule::Layer(_) => {
                    println!("Not supportted. (AtRule::Layer)")
                }
                swc_css_ast::AtRule::Media(media) => {
                    let mut media_condition = String::new();
                    match &media.media {
                        Some(media) => {
                            for (index, media_query) in media.queries.iter().enumerate() {
                                if index > 0 {
                                    media_condition.push_str(&String::from(", "));
                                }
                                let modifier = match &media_query.modifier {
                                    Some(value) => format!("{} ", &value.value.to_string()),
                                    None => String::new(),
                                };
                                media_condition.push_str(&modifier);

                                let media_type = match &media_query.media_type {
                                    Some(value) => value.value.to_string(),
                                    None => String::new(),
                                };
                                media_condition.push_str(&media_type);

                                let condition = match &media_query.condition {
                                    Some(value) => match value {
                                        swc_css_ast::MediaConditionType::All(all) => {
                                            get_all_media_conditions(&all.conditions)
                                        }
                                        swc_css_ast::MediaConditionType::WithoutOr(without_or) => {
                                            get_without_or_media_conditions(&without_or.conditions)
                                        }
                                    },
                                    None => String::new(),
                                };

                                if !condition.is_empty() && !media_type.is_empty() {
                                    media_condition.push_str(&String::from(" and "));
                                }
                                media_condition.push_str(&condition);
                            }
                        }
                        None => (),
                    };

                    for component_value in &media.block.value {
                        let components = get_component_value(component_value);

                        for component in components {
                            let media_condition = media_condition.clone();
                            if component.is_global_style {
                                let _global_rule_map = global_rule_map
                                    .entry(component.key)
                                    .or_insert_with(RuleMapValue::default);
                                if _global_rule_map.media.is_empty() {
                                    _global_rule_map.media.push_str(&media_condition);
                                }
                                _global_rule_map
                                    .key_value_pair_in_media
                                    .extend(component.key_value_pair);
                                _global_rule_map
                                    .key_value_pair_in_pseudo
                                    .extend(component.key_value_pair_in_pseudo);

                                let selectors_map = _global_rule_map
                                    .selectors_in_media
                                    .entry(media_condition)
                                    .or_insert_with(BTreeMap::new);
                                selectors_map.extend(component.key_value_pair_in_selectors);
                            } else {
                                let _rule_map = rule_map
                                    .entry(component.key)
                                    .or_insert_with(RuleMapValue::default);
                                if _rule_map.media.is_empty() {
                                    _rule_map.media.push_str(&media_condition);
                                }
                                _rule_map
                                    .key_value_pair_in_media
                                    .extend(component.key_value_pair);
                                _rule_map
                                    .key_value_pair_in_pseudo
                                    .extend(component.key_value_pair_in_pseudo);

                                let selectors_map = _rule_map
                                    .selectors_in_media
                                    .entry(media_condition)
                                    .or_insert_with(BTreeMap::new);
                                selectors_map.extend(component.key_value_pair_in_selectors);
                            }
                        }
                    }
                }
                swc_css_ast::AtRule::Supports(supports) => {
                    let supports_rule = get_supports_rule(supports);
                    for component in supports_rule.1 {
                        let supports_condition = supports_rule.0.clone();

                        if component.is_global_style {
                            let _global_rule_map = global_rule_map
                                .entry(component.key)
                                .or_insert_with(RuleMapValue::default);
                            if _global_rule_map.supports.is_empty() {
                                _global_rule_map.supports.push_str(&supports_condition);
                            }
                            _global_rule_map
                                .key_value_pair_in_supports
                                .extend(component.key_value_pair);
                            _global_rule_map
                                .key_value_pair_in_pseudo
                                .extend(component.key_value_pair_in_pseudo);
                            let selectors_map = _global_rule_map
                                .selectors_in_supports
                                .entry(supports_condition)
                                .or_insert_with(BTreeMap::new);
                            selectors_map.extend(component.key_value_pair_in_selectors);
                        } else {
                            let _rule_map = rule_map
                                .entry(component.key)
                                .or_insert_with(RuleMapValue::default);
                            if _rule_map.supports.is_empty() {
                                _rule_map.supports.push_str(&supports_condition);
                            }
                            _rule_map
                                .key_value_pair_in_supports
                                .extend(component.key_value_pair);
                            _rule_map
                                .key_value_pair_in_pseudo
                                .extend(component.key_value_pair_in_pseudo);
                            let selectors_map = _rule_map
                                .selectors_in_supports
                                .entry(supports_condition)
                                .or_insert_with(BTreeMap::new);
                            selectors_map.extend(component.key_value_pair_in_selectors);
                        }
                    }
                }
                swc_css_ast::AtRule::Page(_) => {
                    println!("Not supportted. (AtRule::Page)")
                }
                swc_css_ast::AtRule::PageMargin(_) => {
                    println!("Not supportted. (AtRule::PageMargin)")
                }
                swc_css_ast::AtRule::Namespace(_) => {
                    println!("Not supportted. (AtRule::Namespace)")
                }
                swc_css_ast::AtRule::Nest(_) => {
                    println!("Not supportted. (AtRule::Nest)")
                }
                swc_css_ast::AtRule::Viewport(_) => {
                    println!("Not supportted. (AtRule::Viewport)")
                }
                swc_css_ast::AtRule::Document(_) => {
                    println!("Not supportted. (AtRule::Document)")
                }
                swc_css_ast::AtRule::ColorProfile(_) => {
                    println!("Not supportted. (AtRule::ColorProfile)")
                }
                swc_css_ast::AtRule::CounterStyle(_) => {
                    println!("Not supportted. (AtRule::LaCounterStyleyer)")
                }
                swc_css_ast::AtRule::Property(_) => {
                    println!("Not supportted. (AtRule::Property)")
                }
                swc_css_ast::AtRule::Unknown(_) => {
                    println!("Not supportted. (AtRule::Unknown)")
                }
            },
        }
    }

    ve.push_str(&finish_to_vanilla_extract(rule_map, false));
    ve.push_str(&finish_to_vanilla_extract(global_rule_map, true));

    ve.insert_str(
        0,
        "import { globalStyle, globalKeyframes, globalFontFace, style } from \"@vanilla-extract/css\"\n\n",
    );

    ve
}

fn finish_to_vanilla_extract(
    rule_map: BTreeMap<String, RuleMapValue>,
    is_global_rule: bool,
) -> String {
    let mut ve = String::new();
    let mut ve_selectors = String::new();

    for (key, value) in rule_map.into_iter() {
        let mut properties = String::new();
        let has_selectors = !value.key_value_pair_in_selectors.is_empty()
            || !value.selectors_in_media.is_empty()
            || !value.selectors_in_supports.is_empty();

        for (key, value) in value.key_value_pair.into_iter() {
            properties.push_str(&wrap_property(key, value, Some(2)));
        }

        if !value.key_value_pair_in_vars.is_empty() {
            let mut var_rule = String::new();
            for (key, value) in value.key_value_pair_in_vars.into_iter() {
                var_rule.push_str(&wrap_property(format!("\"{}\"", key), value, Some(4)));
            }
            properties.push_str(&wrap_properties_with_colon("vars".to_string(), var_rule));
        }

        if !value.key_value_pair_in_pseudo.is_empty() {
            let mut pseudo_rule = String::new();
            for (key, value) in value.key_value_pair_in_pseudo.into_iter() {
                let mut properties = String::new();
                for (key, value) in value.into_iter() {
                    properties.push_str(&wrap_property(key, value, Some(4)));
                }
                pseudo_rule.push_str(&wrap_properties_with_colon(key, properties));
            }
            properties.push_str(&pseudo_rule);
        }

        if !value.media.is_empty() || !value.selectors_in_media.is_empty() {
            let mut rule = String::new();

            for (key, value) in value.key_value_pair_in_media.into_iter() {
                rule.push_str(&wrap_property(key, value, Some(4)));
            }

            for (_key, selectors_value) in value.selectors_in_media.into_iter() {
                let mut selectors_rule = String::new();
                for (key, value) in selectors_value.into_iter() {
                    let mut properties = String::new();
                    for (key, value) in value.into_iter() {
                        properties.push_str(&wrap_property(key, value, Some(4)));
                    }

                    if key.contains("${") {
                        selectors_rule
                            .push_str(&wrap_properties_with_colon(key.to_string(), properties));
                    } else {
                        selectors_rule
                            .push_str(&wrap_properties_with_colon(format!("&{}", key), properties));
                    }
                }

                if !selectors_rule.is_empty() {
                    rule.push_str(&wrap_properties_with_colon(
                        "selectors".to_string(),
                        selectors_rule,
                    ));
                }
            }

            properties.push_str(&wrap_properties_with_colon(
                String::from("@media"),
                wrap_properties_with_colon(value.media, rule),
            ));
        }
        if !value.supports.is_empty() || !value.selectors_in_supports.is_empty() {
            let mut rule = String::new();
            for (key, value) in value.key_value_pair_in_supports.into_iter() {
                rule.push_str(&wrap_property(key, value, Some(4)));
            }

            for (_key, selectors_value) in value.selectors_in_supports.into_iter() {
                let mut selectors_rule = String::new();
                for (key, value) in selectors_value.into_iter() {
                    let mut properties = String::new();
                    for (key, value) in value.into_iter() {
                        properties.push_str(&wrap_property(key, value, Some(6)));
                    }

                    if key.contains("${") {
                        selectors_rule
                            .push_str(&wrap_properties_with_colon(key.to_string(), properties));
                    } else {
                        selectors_rule
                            .push_str(&wrap_properties_with_colon(format!("&{}", key), properties));
                    }
                }

                if !selectors_rule.is_empty() {
                    rule.push_str(&wrap_properties_with_colon(
                        "selectors".to_string(),
                        selectors_rule,
                    ));
                }
            }

            properties.push_str(&wrap_properties_with_colon(
                String::from("@supports"),
                wrap_properties_with_colon(value.supports, rule),
            ));
        }

        if !value.key_value_pair_in_selectors.is_empty() {
            let mut selectors = String::new();

            for (key, value) in value.key_value_pair_in_selectors.into_iter() {
                let mut properties = String::new();
                for (key, value) in value.into_iter() {
                    properties.push_str(&wrap_property(key, value, Some(4)));
                }
                if key.contains("${") {
                    selectors.push_str(&wrap_properties_with_colon(key.to_string(), properties));
                } else {
                    selectors
                        .push_str(&wrap_properties_with_colon(format!("&{}", key), properties));
                }
            }

            properties.push_str(&wrap_properties_with_colon(
                "selectors".to_string(),
                selectors,
            ))
        }

        // No output for unsupported rules.
        if !key.is_empty() {
            if is_global_rule {
                ve.push_str(&wrap_global_style(wrap_properties_with_comma(
                    key, properties,
                )));
            } else if has_selectors {
                println!("key:{}", &format!("${{{}}}", key));
                if ve_selectors.contains(&format!("${{{}}}", key)) {
                    ve_selectors.insert_str(0, &wrap_export_const(key, wrap_style(properties)));
                } else {
                    ve_selectors.push_str(&wrap_export_const(key, wrap_style(properties)));
                }
            } else {
                ve.push_str(&wrap_export_const(key, wrap_style(properties)));
            }
        }
    }

    ve.push_str(&ve_selectors);
    ve
}

pub fn get_qualified_rule(qualfied_rule: &swc_css_ast::QualifiedRule) -> Vec<Rule> {
    let mut result: Vec<Rule> = vec![];

    for complex in get_complex_selectors(&qualfied_rule.prelude.children) {
        let mut key_value_pair: KeyValuePair = KeyValuePair::default();
        let mut key_value_pair_in_vars: KeyValuePair = KeyValuePair::default();
        let mut key_value_pair_in_pseudo: KeyValuePairInPseudo = BTreeMap::default();
        let mut key_value_pair_in_selectors: KeyValuePairInSelectors =
            KeyValuePairInSelectors::default();

        // input > .btn
        // {
        //   position: absolute;
        // }
        if complex.has_component_value {
            for block_value in &qualfied_rule.block.value {
                let component_value = get_component_value(block_value);

                key_value_pair.extend(component_value[0].key_value_pair.clone());
                key_value_pair_in_vars.extend(component_value[0].key_value_pair_in_vars.clone());
            }

            if !complex.pseudo.is_empty() {
                if complex.is_simple_pseudo {
                    key_value_pair_in_pseudo.insert(complex.pseudo, key_value_pair.clone());
                } else {
                    key_value_pair_in_selectors.insert(complex.pseudo, key_value_pair.clone());
                }
            }
        }

        if !key_value_pair_in_pseudo.is_empty() || !key_value_pair_in_selectors.is_empty() {
            result.push(Rule {
                key: complex.key,
                key_value_pair: KeyValuePair::new(),
                key_value_pair_in_vars,
                key_value_pair_in_pseudo,
                key_value_pair_in_selectors,
                is_global_style: complex.is_global_style,
                is_simple_pseudo: complex.is_simple_pseudo,
            })
        } else {
            result.push(Rule {
                key: complex.key,
                key_value_pair,
                key_value_pair_in_vars,
                key_value_pair_in_pseudo,
                key_value_pair_in_selectors,
                is_global_style: complex.is_global_style,
                is_simple_pseudo: complex.is_simple_pseudo,
            })
        }
    }

    result
}

fn get_complex_selectors(comples_selectors: &[swc_css_ast::ComplexSelector]) -> Vec<Complex> {
    let mut complexes: Vec<Complex> = vec![];

    for complex_selector in comples_selectors {
        let mut pseudo = String::new();
        let mut key: String = String::new();
        let mut is_global_style: bool = false;
        let mut is_simple_pseudo: bool = false;
        let mut last_children_class: Option<ClassSelector> = None;

        if complex_selector.children.len() > 1 {
            if let Some(last_children) = complex_selector.children.last() {
                last_children_class = get_last_children_class(last_children);

                if let Some(value) = &last_children_class {
                    key.push_str(&value.text.value.to_string().to_case(Case::Camel));
                }
            }
        }

        for complex_selector_children in &complex_selector.children {
            match complex_selector_children {
                ComplexSelectorChildren::CompoundSelector(compound_selector) => {
                    for nesting_selector in &compound_selector.nesting_selector {
                        println!("nesting_selector: {:?}", nesting_selector)
                    }

                    for type_selector in &compound_selector.type_selector {
                        match type_selector {
                            swc_css_ast::TypeSelector::TagName(tag_name) => {
                                if key.is_empty() {
                                    is_global_style = true;
                                }

                                if !key.is_empty() && !is_global_style {
                                    pseudo.push_str(&tag_name.name.value.value.to_string());
                                } else {
                                    key.push_str(&tag_name.name.value.value.to_string());
                                }
                            }
                            swc_css_ast::TypeSelector::Universal(_) => {
                                if key.is_empty() {
                                    is_global_style = true;
                                }

                                if !key.is_empty() && !is_global_style {
                                    pseudo.push('*');
                                } else {
                                    key.push('*');
                                }
                            }
                        }
                    }

                    for subclass_selector in &compound_selector.subclass_selectors {
                        match subclass_selector {
                            swc_css_ast::SubclassSelector::Id(id) => {
                                if key.is_empty() {
                                    is_global_style = true;
                                }
                                key.push_str(&format!("#{}", &id.text.value));
                            }
                            swc_css_ast::SubclassSelector::Class(class) => {
                                if key.is_empty() {
                                    // The first class name is used as the variable name.
                                    key.push_str(
                                        &class.text.value.to_string().to_case(Case::Camel),
                                    );
                                } else if !key.is_empty() && !is_global_style {
                                    let formatted_text_value = if let Some(value) =
                                        &last_children_class
                                    {
                                        if value.text == class.text {
                                            "&".to_string()
                                        } else {
                                            format!(
                                                "${{{}}}",
                                                &class.text.value.to_string().to_case(Case::Camel)
                                            )
                                        }
                                    } else {
                                        format!(
                                            "${{{}}}",
                                            &class.text.value.to_string().to_case(Case::Camel)
                                        )
                                    };

                                    complexes.push(Complex {
                                        pseudo: String::new(),
                                        key: class.text.value.to_string().to_case(Case::Camel),
                                        is_global_style: false,
                                        is_simple_pseudo: false,
                                        has_component_value: false,
                                    });

                                    pseudo.push_str(&formatted_text_value);
                                }

                                if is_global_style {
                                    let formatted_text_value = format!(
                                        "${{{}}}",
                                        &class.text.value.to_string().to_case(Case::Camel)
                                    );

                                    if !key.is_empty() {
                                        complexes.push(Complex {
                                            pseudo: String::new(),
                                            key: class.text.value.to_string().to_case(Case::Camel),
                                            is_global_style: false,
                                            is_simple_pseudo: false,
                                            has_component_value: false,
                                        })
                                    }
                                    key.push_str(&formatted_text_value);
                                }
                            }
                            swc_css_ast::SubclassSelector::Attribute(attribute) => {
                                if key.is_empty() {
                                    // [type=\"button\"]{cursor: pointer;}
                                    is_global_style = true;
                                }

                                let mut attribute_as_str = String::new();
                                attribute_as_str.push('[');
                                attribute_as_str.push_str(&attribute.name.value.value);
                                if let Some(ns_prefix) = &attribute.name.prefix {
                                    if let Some(prefix) = &ns_prefix.prefix {
                                        attribute_as_str.push_str(&prefix.value);
                                    }
                                }
                                if let Some(matcher) = &attribute.matcher {
                                    attribute_as_str.push_str(&matcher.value.to_string())
                                }
                                if let Some(value) = &attribute.value {
                                    match value {
                                        swc_css_ast::AttributeSelectorValue::Str(str) => {
                                            attribute_as_str.push_str(&format!("'{}'", str.value));
                                        }
                                        swc_css_ast::AttributeSelectorValue::Ident(ident) => {
                                            attribute_as_str
                                                .push_str(&format!("'{}'", ident.value));
                                        }
                                    }
                                }
                                if let Some(modifier) = &attribute.modifier {
                                    attribute_as_str.push_str(&format!(" {}", modifier.value.value))
                                }
                                attribute_as_str.push(']');
                                if is_global_style {
                                    key.push_str(&attribute_as_str)
                                } else {
                                    pseudo.push_str(&attribute_as_str);
                                    is_simple_pseudo = is_simple_pseudo_func(&pseudo);
                                }
                            }
                            swc_css_ast::SubclassSelector::PseudoClass(pseudo_class) => {
                                let formatted_pseudo_class =
                                    format!(":{}", &pseudo_class.name.value.to_string());
                                if key.is_empty() & pseudo.is_empty() {
                                    is_global_style = true;
                                }
                                if is_global_style {
                                    key.push_str(&formatted_pseudo_class)
                                } else {
                                    pseudo.push_str(&formatted_pseudo_class);

                                    is_simple_pseudo = is_simple_pseudo_func(&pseudo);
                                }

                                if let Some(children) = &pseudo_class.children {
                                    let psudo_class_children =
                                        get_pseudo_class_children(children, is_global_style);
                                    key.push_str(&psudo_class_children.key);
                                    pseudo.push_str(&psudo_class_children.pseudo);
                                    is_simple_pseudo = psudo_class_children.is_simple_pseudo;
                                }
                            }
                            swc_css_ast::SubclassSelector::PseudoElement(pseudo_element) => {
                                let formatted_pseudo_element =
                                    format!("::{}", &pseudo_element.name.value.to_string());
                                if key.is_empty() & pseudo.is_empty() {
                                    is_global_style = true;
                                }
                                if is_global_style {
                                    key.push_str(&formatted_pseudo_element)
                                } else {
                                    pseudo.push_str(&formatted_pseudo_element);

                                    is_simple_pseudo = is_simple_pseudo_func(&pseudo);
                                }
                            }
                        }
                    }
                    // input,div,sapn...,*
                }
                ComplexSelectorChildren::Combinator(combinator) => {
                    if is_global_style {
                        key.push_str(&get_combinator(combinator));
                    } else {
                        pseudo.push_str(&get_combinator(combinator));
                    }
                }
            }
        }
        complexes.push(Complex {
            pseudo,
            key,
            is_global_style,
            is_simple_pseudo,
            has_component_value: true,
        })
    }

    complexes
}

fn get_last_children_class(last_children: &ComplexSelectorChildren) -> Option<ClassSelector> {
    match last_children {
        ComplexSelectorChildren::CompoundSelector(compound_selector) => {
            match compound_selector.subclass_selectors.last() {
                Some(swc_css_ast::SubclassSelector::Class(class)) => Some(class.clone()),
                _ => None,
            }
        }
        _ => None,
    }
}

fn get_combinator(combinator: &swc_css_ast::Combinator) -> String {
    match combinator.value {
        swc_css_ast::CombinatorValue::Descendant => ' '.to_string(),
        swc_css_ast::CombinatorValue::NextSibling => " + ".to_string(),
        swc_css_ast::CombinatorValue::Child => " > ".to_string(),
        swc_css_ast::CombinatorValue::LaterSibling => " ~ ".to_string(),
        swc_css_ast::CombinatorValue::Column => " || ".to_string(),
    }
}

fn get_pseudo_class_children(
    pseudo_class_children: &[swc_css_ast::PseudoClassSelectorChildren],
    is_global_style: bool,
) -> Complex {
    let mut ve = String::new();
    let mut pseudo = String::new();
    let mut key: String = String::new();
    let mut is_simple_pseudo: bool = false;

    for pseudo_class_children in pseudo_class_children {
        match pseudo_class_children {
            swc_css_ast::PseudoClassSelectorChildren::PreservedToken(_) => todo!(),
            swc_css_ast::PseudoClassSelectorChildren::AnPlusB(anplusb) => {
                let anplusb_as_str = match anplusb {
                    swc_css_ast::AnPlusB::Ident(ident) => format!("{}", ident.value),
                    swc_css_ast::AnPlusB::AnPlusBNotation(an_plus_b_notation) => {
                        let mut an_plus_b_notation_as_str = String::new();
                        if let Some(a_raw) = &an_plus_b_notation.a_raw {
                            an_plus_b_notation_as_str.push_str(a_raw);
                        }
                        if let Some(b_raw) = &an_plus_b_notation.b_raw {
                            an_plus_b_notation_as_str.push_str(b_raw);
                        }
                        an_plus_b_notation_as_str
                    }
                };
                ve.push_str(&anplusb_as_str);
            }
            swc_css_ast::PseudoClassSelectorChildren::Ident(ident) => ve.push_str(&ident.value),
            swc_css_ast::PseudoClassSelectorChildren::Str(str) => ve.push_str(&str.value),
            swc_css_ast::PseudoClassSelectorChildren::Delimiter(_) => todo!(),
            swc_css_ast::PseudoClassSelectorChildren::SelectorList(selector_list) => {
                let complex_selectors = get_complex_selectors(&selector_list.children);
                for complex_selector in &complex_selectors {
                    if complex_selector.is_global_style {
                        ve.push_str(&complex_selector.key)
                    } else {
                        ve.push_str(&complex_selector.pseudo)
                    }
                    is_simple_pseudo = complex_selector.is_simple_pseudo;
                }
            }
            swc_css_ast::PseudoClassSelectorChildren::CompoundSelectorList(_) => todo!(),
            swc_css_ast::PseudoClassSelectorChildren::RelativeSelectorList(_) => todo!(),
            swc_css_ast::PseudoClassSelectorChildren::CompoundSelector(_) => todo!(),
        }
    }

    if !ve.is_empty() {
        if is_global_style {
            key = format!("({})", ve);
        } else {
            pseudo = format!("({})", ve);
        }
    }

    Complex {
        pseudo,
        key,
        is_global_style,
        is_simple_pseudo,
        has_component_value: true,
    }
}

pub fn get_component_value(component_value: &swc_css_ast::ComponentValue) -> Vec<Component> {
    let mut ve: String = String::new();
    let mut key_value_pair: KeyValuePair = KeyValuePair::new();
    let mut key_value_pair_in_vars: KeyValuePair = KeyValuePair::new();

    match component_value {
        swc_css_ast::ComponentValue::PreservedToken(preserved_token) => {
            match &preserved_token.token {
                swc_css_ast::Token::Ident { value, raw: _ } => ve.push_str(value),
                swc_css_ast::Token::Function { value, raw: _ } => ve.push_str(value),
                swc_css_ast::Token::AtKeyword { value: _, raw: _ } => {
                    todo!()
                }
                swc_css_ast::Token::Hash {
                    is_id: _,
                    value,
                    raw: _,
                } => {
                    ve.push_str(&String::from("#"));
                    ve.push_str(value);
                }
                swc_css_ast::Token::String { value, raw: _ } => ve.push_str(value),
                swc_css_ast::Token::BadString { value: _, raw: _ } => {
                    todo!()
                }
                swc_css_ast::Token::Url {
                    name: _,
                    raw_name: _,
                    before: _,
                    after: _,
                    value: _,
                    raw_value: _,
                } => todo!(),
                swc_css_ast::Token::BadUrl {
                    name: _,
                    raw_name: _,
                    value: _,
                    raw_value: _,
                } => todo!(),
                swc_css_ast::Token::Delim { value } => ve.push_str(&value.to_string()),
                swc_css_ast::Token::Number {
                    value,
                    raw: _,
                    type_flag: _,
                } => ve.push_str(&value.to_string()),
                swc_css_ast::Token::Percentage { value, raw: _ } => {
                    ve.push_str(&format!("{}%", value));
                }
                swc_css_ast::Token::Dimension {
                    value,
                    raw_value: _,
                    unit,
                    raw_unit: _,
                    type_flag: _,
                } => {
                    ve.push_str(&format!("{}{}", value, unit));
                }
                swc_css_ast::Token::WhiteSpace { value: _ } => ve.push(' '),
                swc_css_ast::Token::CDO | swc_css_ast::Token::CDC => (),
                swc_css_ast::Token::Colon => ve.push(':'),
                swc_css_ast::Token::Semi => ve.push(';'),
                swc_css_ast::Token::Comma => ve.push(','),
                swc_css_ast::Token::LBracket => ve.push('['),
                swc_css_ast::Token::RBracket => ve.push(']'),
                swc_css_ast::Token::LParen => ve.push('('),
                swc_css_ast::Token::RParen => ve.push(')'),
                swc_css_ast::Token::LBrace => ve.push('{'),
                swc_css_ast::Token::RBrace => ve.push('}'),
            }
        }
        swc_css_ast::ComponentValue::Function(function) => {
            ve.push_str(&get_function(function));
        }
        swc_css_ast::ComponentValue::SimpleBlock(_) => todo!(),
        swc_css_ast::ComponentValue::DeclarationOrAtRule(declaration_or_at_rule) => {
            match declaration_or_at_rule {
                swc_css_ast::DeclarationOrAtRule::Declaration(declaration) => {
                    let declaration_value = get_declaration(declaration);
                    key_value_pair.extend(declaration_value.0);
                    key_value_pair_in_vars.extend(declaration_value.1);
                }
                swc_css_ast::DeclarationOrAtRule::AtRule(_) => todo!(),
                swc_css_ast::DeclarationOrAtRule::Invalid(_) => {
                    println!("Contains an invalid token.")
                }
            }
        }
        swc_css_ast::ComponentValue::Rule(rule) => match rule {
            swc_css_ast::Rule::QualifiedRule(qualified_rule) => {
                let mut components: Vec<Component> = vec![];

                for rule in get_qualified_rule(qualified_rule) {
                    components.push(Component {
                        ve: String::new(),
                        key_value_pair: rule.key_value_pair,
                        key_value_pair_in_vars: rule.key_value_pair_in_vars,
                        key_value_pair_in_pseudo: rule.key_value_pair_in_pseudo,
                        key_value_pair_in_selectors: rule.key_value_pair_in_selectors,
                        key: rule.key,
                        is_global_style: rule.is_global_style,
                    })
                }

                return components;
            }
            swc_css_ast::Rule::Invalid(_) => {
                println!("Contains an invalid token.")
            }
            swc_css_ast::Rule::AtRule(_) => println!("Not supportted. (Rule::AtRule)"),
        },
        swc_css_ast::ComponentValue::StyleBlock(style_block) => match style_block {
            swc_css_ast::StyleBlock::AtRule(_) => todo!(),
            swc_css_ast::StyleBlock::Declaration(declaration) => {
                let declaration_value = get_declaration(declaration);
                key_value_pair.extend(declaration_value.0);
                key_value_pair_in_vars.extend(declaration_value.1);
            }
            swc_css_ast::StyleBlock::QualifiedRule(qualified_rule) => {
                for rule in get_qualified_rule(qualified_rule) {
                    key_value_pair.extend(rule.key_value_pair.clone());
                    key_value_pair_in_vars.extend(rule.key_value_pair_in_vars.clone());
                }
            }
            swc_css_ast::StyleBlock::Invalid(_) => {
                println!("Contains an invalid token.")
            }
        },
        swc_css_ast::ComponentValue::KeyframeBlock(keyframe_block) => {
            let mut keyframe_selector = String::new();

            for prelude in &keyframe_block.prelude {
                match prelude {
                    swc_css_ast::KeyframeSelector::Ident(ident) => {
                        keyframe_selector.push_str(ident.value.as_ref());
                    }
                    swc_css_ast::KeyframeSelector::Percentage(percentage) => {
                        if !keyframe_selector.is_empty() {
                            keyframe_selector.push(',');
                        }
                        keyframe_selector.push_str(&format!("{}%", percentage.value.value));
                    }
                }
            }

            ve.push_str(&keyframe_selector);

            for block_value in &keyframe_block.block.value {
                let component_value = get_component_value(block_value);
                key_value_pair.extend(component_value[0].key_value_pair.clone());
            }
        }
        swc_css_ast::ComponentValue::Ident(ident) => ve.push_str(&ident.value.to_string()),
        swc_css_ast::ComponentValue::DashedIdent(dashed_ident) => {
            ve.push_str(&dashed_ident.value.to_string())
        }
        swc_css_ast::ComponentValue::Str(str) => {
            // .foo {
            //     content: "-";
            // }
            ve.push_str(str.value.as_ref());
        }
        swc_css_ast::ComponentValue::Url(url) => {
            let url_value = match &url.value {
                Some(value) => match value {
                    swc_css_ast::UrlValue::Str(str) => str.value.as_ref(),
                    swc_css_ast::UrlValue::Raw(raw) => raw.value.as_ref(),
                },
                None => "",
            };

            ve.push_str(&format!("url({})", url_value));
        }
        swc_css_ast::ComponentValue::Integer(integer) => ve.push_str(&integer.value.to_string()),
        swc_css_ast::ComponentValue::Number(number) => {
            // .foo {
            //     color: rgba(34, 12, 64, 0.6);
            // }
            ve.push_str(&number.value.to_string());
        }
        swc_css_ast::ComponentValue::Percentage(percentage) => {
            // @keyframes identifier {
            //     0% { top: 0; left: 0; }
            //     30% { top: 50px; }
            //     68%, 72% { left: 50px; }
            //     100% { top: 100px; left: 100%; }
            //   }
            ve.push_str(&format!("{}%", percentage.value.value));
        }
        swc_css_ast::ComponentValue::Dimension(dimension) => {
            ve.push_str(&get_dimension(dimension));
        }
        swc_css_ast::ComponentValue::Ratio(_) => todo!(),
        swc_css_ast::ComponentValue::UnicodeRange(_) => todo!(),
        swc_css_ast::ComponentValue::Color(color) => match color {
            swc_css_ast::Color::HexColor(hex_color) => ve.push_str(&hex_color.value),
            swc_css_ast::Color::Function(function) => ve.push_str(&get_function(function)),
        },
        swc_css_ast::ComponentValue::AlphaValue(alpha_value) => match alpha_value {
            swc_css_ast::AlphaValue::Number(number) => ve.push_str(&number.value.to_string()),
            swc_css_ast::AlphaValue::Percentage(percentage) => {
                ve.push_str(&format!("{}%", percentage.value.value))
            }
        },
        swc_css_ast::ComponentValue::Hue(_) => todo!(),
        swc_css_ast::ComponentValue::CmykComponent(_) => todo!(),
        swc_css_ast::ComponentValue::Delimiter(delimiter) => {
            ve.push_str(&delimiter.value.to_string())
        }
        swc_css_ast::ComponentValue::CalcSum(calc_sum) => {
            // .foo {
            //     width: calc(var(--variable-width) + 20px);
            // }
            ve.push_str(&get_calc_sum(calc_sum));
        }
        swc_css_ast::ComponentValue::ComplexSelector(_) => todo!(),
    }

    [Component {
        ve,
        key_value_pair,
        key_value_pair_in_vars,
        key_value_pair_in_pseudo: BTreeMap::default(),
        key_value_pair_in_selectors: BTreeMap::default(),
        key: String::new(),
        is_global_style: false,
    }]
    .to_vec()
}

fn get_dimension(dimension: &swc_css_ast::Dimension) -> String {
    match dimension {
        swc_css_ast::Dimension::Length(length) => {
            format!(
                "{}{}",
                &length.value.value.to_string(),
                length.unit.value.as_ref()
            )
        }
        swc_css_ast::Dimension::Angle(angle) => {
            format!(
                "{}{}",
                &angle.value.value.to_string(),
                angle.unit.value.as_ref()
            )
        }
        swc_css_ast::Dimension::Time(time) => {
            // .foo {
            //     animation: slidein 4s infinite;
            // }
            format!(
                "{}{}",
                &time.value.value.to_string(),
                time.unit.value.as_ref()
            )
        }
        swc_css_ast::Dimension::Frequency(frequency) => {
            // * {
            //     voice-pitch: 250Hz;
            //   }
            format!(
                "{}{}",
                &frequency.value.value.to_string(),
                frequency.unit.value.as_ref()
            )
        }
        swc_css_ast::Dimension::Resolution(resolution) => {
            format!(
                "{}{}",
                &resolution.value.value.to_string(),
                resolution.unit.value.as_ref()
            )
        }
        swc_css_ast::Dimension::Flex(flex) => {
            format!(
                "{}{}",
                &flex.value.value.to_string(),
                flex.unit.value.as_ref()
            )
        }
        swc_css_ast::Dimension::UnknownDimension(_) => String::new(),
    }
}

fn get_calc_sum(calc_sum: &swc_css_ast::CalcSum) -> String {
    let mut ve: String = String::new();
    for calc_sum_expression in &calc_sum.expressions {
        let calc_sum_expression_as_str = match calc_sum_expression {
            swc_css_ast::CalcProductOrOperator::Product(product) => {
                let mut product_expression_as_str = String::new();
                for product_expression in &product.expressions {
                    product_expression_as_str
                        .push_str(&get_calc_value_or_operator(product_expression));
                }
                product_expression_as_str
            }
            swc_css_ast::CalcProductOrOperator::Operator(operator) => get_operator(operator),
        };

        ve.push_str(&calc_sum_expression_as_str)
    }

    ve
}

fn get_calc_value_or_operator(product_expression: &swc_css_ast::CalcValueOrOperator) -> String {
    match product_expression {
        swc_css_ast::CalcValueOrOperator::Value(value) => match value {
            swc_css_ast::CalcValue::Number(number) => number.value.to_string(),
            swc_css_ast::CalcValue::Dimension(dimension) => get_dimension(dimension),
            swc_css_ast::CalcValue::Percentage(percentage) => {
                format!("{}%", percentage.value.value)
            }
            swc_css_ast::CalcValue::Constant(constant) => constant.value.to_string(),
            swc_css_ast::CalcValue::Sum(calc_sum) => get_calc_sum(calc_sum),
            swc_css_ast::CalcValue::Function(function) => get_function(function),
        },
        swc_css_ast::CalcValueOrOperator::Operator(operator) => get_operator(operator),
    }
}

fn get_operator(operator: &swc_css_ast::CalcOperator) -> String {
    match operator.value {
        swc_css_ast::CalcOperatorType::Add => '+'.to_string(),
        swc_css_ast::CalcOperatorType::Sub => '-'.to_string(),
        swc_css_ast::CalcOperatorType::Mul => '*'.to_string(),
        swc_css_ast::CalcOperatorType::Div => '/'.to_string(),
    }
}

pub fn get_function(function: &swc_css_ast::Function) -> String {
    // .foo {
    //     color: rgba(34, 12, 64, 0.6);
    // }
    let mut component_values = String::new();
    for component_value in &function.value {
        let component_value_as_str = get_component_value(component_value);
        component_values.push_str(&component_value_as_str[0].ve);
    }

    format!(
        "{}({})",
        &function.name.value.to_string(),
        &component_values
    )
}

pub fn get_declaration(declaration: &swc_css_ast::Declaration) -> (KeyValuePair, KeyValuePair) {
    let mut key_value_pair: KeyValuePair = KeyValuePair::new();
    let mut key_value_pair_in_vars: KeyValuePair = KeyValuePair::new();
    let mut declaration_name = String::new();
    let mut declaration_value = String::new();
    let mut dashed_ident = String::new();
    match &declaration.name {
        swc_css_ast::DeclarationName::Ident(ident) => {
            declaration_name.push_str(&ident.raw.to_string())
        }
        swc_css_ast::DeclarationName::DashedIdent(_dashed_ident) => {
            dashed_ident = _dashed_ident.raw.to_string()
        }
    }
    for declaration_component_value in &declaration.value {
        let component_value = &get_component_value(declaration_component_value)[0].ve;

        if declaration_value.is_empty() {
            declaration_value.push_str(component_value)
        } else {
            declaration_value.push_str(&format!(" {}", component_value));
        }
    }

    if declaration_name.starts_with("--") {
        let formatted_declaration_name = format!("\"{}\"", &declaration_name);
        declaration_name = formatted_declaration_name
    } else if declaration_name.starts_with("-ms") {
        declaration_name = declaration_name.to_case(Case::Camel)
    } else if declaration_name.starts_with('-') {
        declaration_name = declaration_name.to_case(Case::Pascal)
    } else {
        declaration_name = declaration_name.to_case(Case::Camel)
    }

    if !dashed_ident.is_empty() {
        key_value_pair_in_vars.insert(dashed_ident, declaration_value);
    } else {
        key_value_pair.insert(declaration_name, declaration_value);
    }

    (key_value_pair, key_value_pair_in_vars)
}

#[cfg(test)]
mod tests {
    use swc_common::{BytePos, Span, SyntaxContext};
    use swc_css_ast::{ComponentValue, Dimension, Ident, Length, Number};

    use super::*;
    use crate::utils::parse_css;

    fn generate_span() -> Span {
        return Span {
            lo: BytePos(0),
            hi: BytePos(0),
            ctxt: SyntaxContext::empty(),
        };
    }

    #[test]
    fn get_component_value_01() {
        let component_value = ComponentValue::Dimension(Dimension::Length(Length {
            span: generate_span(),
            value: Number {
                span: generate_span(),
                value: 10.0,
                raw: "10.0".into(),
            },
            unit: Ident {
                span: generate_span(),
                value: "px".into(),
                raw: "px".into(),
            },
        }));

        let result = get_component_value(&component_value);
        assert_eq!(result[0].ve, "10px");
    }

    #[test]
    fn ast_to_vanilla_extract_01() {
        let parsed_css = parse_css(".foo,.b-a-r:hover {position: absolute;}").unwrap();

        let result = ast_to_vanilla_extract(parsed_css);

        assert_eq!(
            "import { globalStyle, globalKeyframes, globalFontFace, style } from \"@vanilla-extract/css\"\n\nexport const bAR = style({\n\":hover\": {\n  position:\"absolute\",\n},\n});\nexport const foo = style({\n  position:\"absolute\",\n});\n",
            result
        )
    }

    #[test]
    fn ast_to_vanilla_extract_02() {
        let parsed_css =
            parse_css("*,*::before,*::after,.b-a-r:hover {box-sizing: border-box;}").unwrap();

        let result = ast_to_vanilla_extract(parsed_css);

        assert_eq!(
            "import { globalStyle, globalKeyframes, globalFontFace, style } from \"@vanilla-extract/css\"\n\nexport const bAR = style({\n\":hover\": {\n  boxSizing:\"border-box\",\n},\n});\nglobalStyle(\"*\", {\n  boxSizing:\"border-box\",\n},\n);\nglobalStyle(\"*::after\", {\n  boxSizing:\"border-box\",\n},\n);\nglobalStyle(\"*::before\", {\n  boxSizing:\"border-box\",\n},\n);\n",
            result
        )
    }

    #[test]
    fn ast_to_vanilla_extract_03() {
        let parsed_css =
            parse_css("ol ol{margin-bottom: 0;-ms-overflow-style: scrollbar;}").unwrap();

        let result = ast_to_vanilla_extract(parsed_css);

        assert_eq!(
            "import { globalStyle, globalKeyframes, globalFontFace, style } from \"@vanilla-extract/css\"\n\nglobalStyle(\"ol ol\", {\n  marginBottom:\"0\",\n  msOverflowStyle:\"scrollbar\",\n},\n);\n",
            result
        )
    }

    #[test]
    fn ast_to_vanilla_extract_04() {
        let parsed_css = parse_css(
            "button:not(:disabled), [type^=\"button\" s]:not(:disabled){cursor: pointer;}",
        )
        .unwrap();
        let result = ast_to_vanilla_extract(parsed_css);

        assert_eq!(
            "import { globalStyle, globalKeyframes, globalFontFace, style } from \"@vanilla-extract/css\"\n\nglobalStyle(\"[type^='button' s]:not(:disabled)\", {\n  cursor:\"pointer\",\n},\n);\nglobalStyle(\"button:not(:disabled)\", {\n  cursor:\"pointer\",\n},\n);\n",
            result
        )
    }

    #[test]
    fn ast_to_vanilla_extract_05() {
        let parsed_css = parse_css(" :root{--blue: #007bff;}").unwrap();
        let result = ast_to_vanilla_extract(parsed_css);

        assert_eq!(
            "import { globalStyle, globalKeyframes, globalFontFace, style } from \"@vanilla-extract/css\"\n\nglobalStyle(\":root\", {\n\"vars\": {\n  \"--blue\":\"#007bff\",\n},\n},\n);\n",
            result
        )
    }

    #[test]
    fn ast_to_vanilla_extract_06() {
        let parsed_css = parse_css("#foo {border: red 2px solid;}").unwrap();
        let result = ast_to_vanilla_extract(parsed_css);

        assert_eq!(
            "import { globalStyle, globalKeyframes, globalFontFace, style } from \"@vanilla-extract/css\"\n\nglobalStyle(\"#foo\", {\n  border:\"red 2px solid\",\n},\n);\n",
            result
        )
    }

    #[test]
    fn ast_to_vanilla_extract_07() {
        let parsed_css =
            parse_css("@media(min-width: 1200px){.display-1 {font-size: 5rem; color:red;}}")
                .unwrap();
        let result = ast_to_vanilla_extract(parsed_css);

        assert_eq!(
            "import { globalStyle, globalKeyframes, globalFontFace, style } from \"@vanilla-extract/css\"\n\nexport const display1 = style({\n\"@media\": {\n\"(min-width: 1200px)\": {\n  color:\"red\",\n  fontSize:\"5rem\",\n},\n},\n});\n",
            result
        )
    }

    #[test]
    fn ast_to_vanilla_extract_08() {
        let parsed_css = parse_css("@media(min-width: 1200px){input {font-size: 5rem;}}").unwrap();
        let result = ast_to_vanilla_extract(parsed_css);

        assert_eq!(
            "import { globalStyle, globalKeyframes, globalFontFace, style } from \"@vanilla-extract/css\"\n\nglobalStyle(\"input\", {\n\"@media\": {\n\"(min-width: 1200px)\": {\n  fontSize:\"5rem\",\n},\n},\n},\n);\n",
            result
        )
    }

    #[test]
    fn ast_to_vanilla_extract_09() {
        let parsed_css = parse_css("@media(min-width: 1200px){input {font-size: 5rem;} .display-2 {font-size: 5rem;color:red}}").unwrap();
        let result = ast_to_vanilla_extract(parsed_css);

        assert_eq!(
            "import { globalStyle, globalKeyframes, globalFontFace, style } from \"@vanilla-extract/css\"\n\nexport const display2 = style({\n\"@media\": {\n\"(min-width: 1200px)\": {\n  color:\"red\",\n  fontSize:\"5rem\",\n},\n},\n});\nglobalStyle(\"input\", {\n\"@media\": {\n\"(min-width: 1200px)\": {\n  fontSize:\"5rem\",\n},\n},\n},\n);\n",
            result
        )
    }

    #[test]
    fn ast_to_vanilla_extract_10() {
        let parsed_css = parse_css("@supports ((position: -webkit-sticky) or (position: sticky)) {.display-1 {font-size: 5rem;}}").unwrap();
        let result = ast_to_vanilla_extract(parsed_css);

        assert_eq!(
            "import { globalStyle, globalKeyframes, globalFontFace, style } from \"@vanilla-extract/css\"\n\nexport const display1 = style({\n\"@supports\": {\n\"(position:-webkit-sticky) or (position:sticky)\": {\n  fontSize:\"5rem\",\n},\n},\n});\n",
            result
        )
    }

    #[test]
    fn ast_to_vanilla_extract_11() {
        let parsed_css = parse_css("@supports ((position: -webkit-sticky) or (position: sticky)) {input {font-size: 5rem;}}").unwrap();
        let result = ast_to_vanilla_extract(parsed_css);

        assert_eq!(
            "import { globalStyle, globalKeyframes, globalFontFace, style } from \"@vanilla-extract/css\"\n\nglobalStyle(\"input\", {\n\"@supports\": {\n\"(position:-webkit-sticky) or (position:sticky)\": {\n  fontSize:\"5rem\",\n},\n},\n},\n);\n",
            result
        )
    }

    #[test]
    fn ast_to_vanilla_extract_12() {
        let parsed_css = parse_css("@supports ((position: -webkit-sticky) or (position: sticky)) {input {font-size: 5rem;} .display-2 {font-size: 5rem;color:red}}").unwrap();
        let result = ast_to_vanilla_extract(parsed_css);

        assert_eq!(
            "import { globalStyle, globalKeyframes, globalFontFace, style } from \"@vanilla-extract/css\"\n\nexport const display2 = style({\n\"@supports\": {\n\"(position:-webkit-sticky) or (position:sticky)\": {\n  color:\"red\",\n  fontSize:\"5rem\",\n},\n},\n});\nglobalStyle(\"input\", {\n\"@supports\": {\n\"(position:-webkit-sticky) or (position:sticky)\": {\n  fontSize:\"5rem\",\n},\n},\n},\n);\n",
            result
        )
    }

    #[test]
    fn ast_to_vanilla_extract_13() {
        let parsed_css = parse_css(".toast:not(:last-child) {margin-bottom: 0.75rem;}").unwrap();
        let result = ast_to_vanilla_extract(parsed_css);

        assert_eq!(
            "import { globalStyle, globalKeyframes, globalFontFace, style } from \"@vanilla-extract/css\"\n\nexport const toast = style({\n\"selectors\": {\n\"&:not(:last-child)\": {\n  marginBottom:\"0.75rem\",\n},\n},\n});\n",

            result
        )
    }

    #[test]
    fn ast_to_vanilla_extract_14() {
        let parsed_css =
            parse_css(".tooltip[data-popper-placement^=top] {padding: 0.4rem 0;").unwrap();
        let result = ast_to_vanilla_extract(parsed_css);

        assert_eq!(
            "import { globalStyle, globalKeyframes, globalFontFace, style } from \"@vanilla-extract/css\"\n\nexport const tooltip = style({\n\"selectors\": {\n\"&[data-popper-placement^='top']\": {\n  padding:\"0.4rem 0\",\n},\n},\n});\n",
            result
        )
    }

    #[test]
    fn ast_to_vanilla_extract_15() {
        let parsed_css = parse_css(".foo,.foo:hover {position: absolute;}").unwrap();
        let result = ast_to_vanilla_extract(parsed_css);

        assert_eq!(
            "import { globalStyle, globalKeyframes, globalFontFace, style } from \"@vanilla-extract/css\"\n\nexport const foo = style({\n  position:\"absolute\",\n\":hover\": {\n  position:\"absolute\",\n},\n});\n",
            result
        )
    }

    #[test]
    fn ast_to_vanilla_extract_16() {
        let parsed_css =
            parse_css("@media (min-width: 1200px) {h4, .h4 {font-size: 1.5rem;}}").unwrap();
        let result = ast_to_vanilla_extract(parsed_css);

        assert_eq!(
            "import { globalStyle, globalKeyframes, globalFontFace, style } from \"@vanilla-extract/css\"\n\nexport const h4 = style({\n\"@media\": {\n\"(min-width: 1200px)\": {\n  fontSize:\"1.5rem\",\n},\n},\n});\nglobalStyle(\"h4\", {\n\"@media\": {\n\"(min-width: 1200px)\": {\n  fontSize:\"1.5rem\",\n},\n},\n},\n);\n",
            result
        )
    }

    #[test]
    fn ast_to_vanilla_extract_17() {
        let parsed_css =
            parse_css(".display-1 {background-color: blue;} @media (min-width: 1200px) {.display-1 {font-size: 5rem;color: red;}}").unwrap();
        let result = ast_to_vanilla_extract(parsed_css);

        assert_eq!(
            "import { globalStyle, globalKeyframes, globalFontFace, style } from \"@vanilla-extract/css\"\n\nexport const display1 = style({\n  backgroundColor:\"blue\",\n\"@media\": {\n\"(min-width: 1200px)\": {\n  color:\"red\",\n  fontSize:\"5rem\",\n},\n},\n});\n",
            result
        )
    }

    #[test]
    fn ast_to_vanilla_extract_18() {
        let parsed_css =
            parse_css(".display-1 {background-color: blue;} @supports((position: -webkit-sticky) or (position: sticky)) {.display-1 {font-size: 5rem;color: red;}}").unwrap();
        let result = ast_to_vanilla_extract(parsed_css);

        assert_eq!(
            "import { globalStyle, globalKeyframes, globalFontFace, style } from \"@vanilla-extract/css\"\n\nexport const display1 = style({\n  backgroundColor:\"blue\",\n\"@supports\": {\n\"(position:-webkit-sticky) or (position:sticky)\": {\n  color:\"red\",\n  fontSize:\"5rem\",\n},\n},\n});\n",
            result
        )
    }

    #[test]
    fn ast_to_vanilla_extract_19() {
        let parsed_css = parse_css(
            "@keyframes progress-bar-stripes {from {background-position: 1rem 0;}to {background-position: 0 0;}}",
        )
        .unwrap();
        let result = ast_to_vanilla_extract(parsed_css);

        assert_eq!(
            "import { globalStyle, globalKeyframes, globalFontFace, style } from \"@vanilla-extract/css\"\n\nglobalKeyframes(\"progress-bar-stripes\", {\n\"from\": {\n  backgroundPosition:\"1rem 0\",\n},\n\"to\": {\n  backgroundPosition:\"0 0\",\n},\n},\n);\n",
            result
        )
    }

    #[test]
    fn ast_to_vanilla_extract_20() {
        let parsed_css = parse_css(".accordion-button:not(.collapsed) {color: #0c63e4;}.accordion-button:not(.collapsed)::after {transform: rotate(-180deg);}")
        .unwrap();
        let result = ast_to_vanilla_extract(parsed_css);

        assert_eq!(
            "import { globalStyle, globalKeyframes, globalFontFace, style } from \"@vanilla-extract/css\"\n\nexport const accordionButton = style({\n\"selectors\": {\n\"&:not\": {\n  color:\"0c63e4\",\n},\n\"&:not::after\": {\n  transform:\"rotate(-180deg)\",\n},\n},\n});\n",
            result
        )
    }

    #[test]
    fn ast_to_vanilla_extract_21() {
        let parsed_css = parse_css("@supports((position: -webkit-sticky) or (position: sticky)) {.accordion-button:not(.collapsed) {color: #0c63e4;}.accordion-button:not(.collapsed)::after {transform: rotate(-180deg);}}")
        .unwrap();
        let result = ast_to_vanilla_extract(parsed_css);

        assert_eq!(
            "import { globalStyle, globalKeyframes, globalFontFace, style } from \"@vanilla-extract/css\"\n\nexport const accordionButton = style({\n\"@supports\": {\n\"(position:-webkit-sticky) or (position:sticky)\": {\n\"selectors\": {\n\"&:not\": {\n  color:\"0c63e4\",\n},\n\"&:not::after\": {\n  transform:\"rotate(-180deg)\",\n},\n},\n},\n},\n});\n",
            result
        )
    }

    #[test]
    fn ast_to_vanilla_extract_22() {
        let parsed_css = parse_css("@media (min-width: 1200px){.accordion-button:not(.collapsed) {color: #0c63e4;}.accordion-button:not(.collapsed)::after {transform: rotate(-180deg);}}")
        .unwrap();
        let result = ast_to_vanilla_extract(parsed_css);

        assert_eq!(
            "import { globalStyle, globalKeyframes, globalFontFace, style } from \"@vanilla-extract/css\"\n\nexport const accordionButton = style({\n\"@media\": {\n\"(min-width: 1200px)\": {\n\"selectors\": {\n\"&:not\": {\n  color:\"0c63e4\",\n},\n\"&:not::after\": {\n  transform:\"rotate(-180deg)\",\n},\n},\n},\n},\n});\n",
            result
        )
    }

    #[test]
    fn ast_to_vanilla_extract_23() {
        let parsed_css = parse_css("@font-face {font-family: \"Open Sans\";src: url(\"/fonts/OpenSans-Regular-webfont.woff2\") format(\"woff2\"),url(\"/fonts/OpenSans-Regular-webfont.woff\") format(\"woff\");}")
        .unwrap();
        let result = ast_to_vanilla_extract(parsed_css);

        assert_eq!(
            "import { globalStyle, globalKeyframes, globalFontFace, style } from \"@vanilla-extract/css\"\n\nglobalFontFace(\"Open Sans\", {\n  src:\"url(/fonts/OpenSans-Regular-webfont.woff2) format(woff2) , url(/fonts/OpenSans-Regular-webfont.woff) format(woff)\",\n},\n);\n",
            result
        )
    }

    #[test]
    fn ast_to_vanilla_extract_24() {
        let parsed_css =
            parse_css(".input:invalid:focus { box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.25);}")
                .unwrap();
        let result = ast_to_vanilla_extract(parsed_css);

        assert_eq!(
            "import { globalStyle, globalKeyframes, globalFontFace, style } from \"@vanilla-extract/css\"\n\nexport const input = style({\n\"selectors\": {\n\"&:invalid:focus\": {\n  boxShadow:\"0 0 0 0.25rem rgba(220,53,69,0.25)\",\n},\n},\n});\n",
            result
        )
    }

    #[test]
    fn ast_to_vanilla_extract_25() {
        let parsed_css =
            parse_css(".form:active::-moz-range-thumb {background-color: #b6d4fe;}").unwrap();
        let result = ast_to_vanilla_extract(parsed_css);

        assert_eq!(
            "import { globalStyle, globalKeyframes, globalFontFace, style } from \"@vanilla-extract/css\"\n\nexport const form = style({\n\"selectors\": {\n\"&:active::-moz-range-thumb\": {\n  backgroundColor:\"b6d4fe\",\n},\n},\n});\n",
            result
        )
    }

    #[test]
    fn ast_to_vanilla_extract_26() {
        let parsed_css =
            parse_css(".input:checked[type=\"checkbox\"] {background-color: red;}").unwrap();
        let result = ast_to_vanilla_extract(parsed_css);

        assert_eq!(
            "import { globalStyle, globalKeyframes, globalFontFace, style } from \"@vanilla-extract/css\"\n\nexport const input = style({\n\"selectors\": {\n\"&:checked[type='checkbox']\": {\n  backgroundColor:\"red\",\n},\n},\n});\n",
            result
        )
    }

    #[test]
    fn ast_to_vanilla_extract_027() {
        let parsed_css =
            parse_css("input > .btn > .icon {position: absolute;} .btn {width: 100%;}").unwrap();

        let result = ast_to_vanilla_extract(parsed_css);

        assert_eq!(
            "import { globalStyle, globalKeyframes, globalFontFace, style } from \"@vanilla-extract/css\"\n\nexport const btn = style({\n  width:\"100%\",\n});\nexport const icon = style({\n\"selectors\": {\n[`input > ${btn} > &`]: {\n  position:\"absolute\",\n},\n},\n});\n",
            result
        )
    }

    #[test]
    fn ast_to_vanilla_extract_028() {
        let parsed_css =
            parse_css(".input > input > .btn > .icon {position: absolute;} .btn {width: 100%;}")
                .unwrap();

        let result = ast_to_vanilla_extract(parsed_css);

        assert_eq!(
            "import { globalStyle, globalKeyframes, globalFontFace, style } from \"@vanilla-extract/css\"\n\nexport const btn = style({\n  width:\"100%\",\n});\nexport const input = style({\n});\nexport const icon = style({\n\"selectors\": {\n[`${input} > input > ${btn} > &`]: {\n  position:\"absolute\",\n},\n},\n});\n",
            result
        )
    }
}
