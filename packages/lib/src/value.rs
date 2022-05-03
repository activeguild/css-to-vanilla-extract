use std::collections::BTreeMap;

use crate::{
    keyframes::get_keyframes,
    media::{get_all_media_conditions, get_without_or_media_conditions},
    supports::get_supports_rule,
    utils::{
        is_simple_pseudo_func, wrap_export_const, wrap_global_style_func, wrap_property_with_colon,
        wrap_property_with_comma, wrap_style_func,
    },
};
use convert_case::{Case, Casing};
#[derive(Debug)]
pub struct Rule {
    pub ve: String,
    pub key: String,
    pub selectors: BTreeMap<String, String>,

    pub is_global_style: bool,
    pub is_simple_pseudo: bool,
}

#[derive(Debug)]
pub struct Complex {
    pub pseudo: String,
    pub key: String,
    pub is_global_style: bool,
    pub is_simple_pseudo: bool,
}

#[derive(Debug, Clone)]
pub struct Component {
    pub ve: String,
    pub vars: Vec<String>,
    pub key: String,
    pub selectors: BTreeMap<String, String>,
    pub is_global_style: bool,
}

#[derive(Debug, Default, Clone)]

pub struct RuleMapValue {
    pub ve: String,
    pub selectors: BTreeMap<String, String>,
    pub selectors_in_media: BTreeMap<String, BTreeMap<String, String>>,
    pub selectors_in_supports: BTreeMap<String, BTreeMap<String, String>>,
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
                        _global_rule_map.ve.push_str(&rule.ve);
                        _global_rule_map.selectors.extend(rule.selectors);
                    } else {
                        let _rule_map = rule_map
                            .entry(rule.key)
                            .or_insert_with(RuleMapValue::default);
                        _rule_map.ve.push_str(&rule.ve);
                        _rule_map.selectors.extend(rule.selectors);
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
                swc_css_ast::AtRule::FontFace(_) => println!("Not implemented. (AtRule::FontFace)"),
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
                                _global_rule_map.media.push_str(&component.ve);

                                let selectors_map = _global_rule_map
                                    .selectors_in_media
                                    .entry(media_condition)
                                    .or_insert_with(BTreeMap::new);
                                selectors_map.extend(component.selectors);
                            } else {
                                let _rule_map = rule_map
                                    .entry(component.key)
                                    .or_insert_with(RuleMapValue::default);
                                _rule_map.media.push_str(&component.ve);

                                let selectors_map = _rule_map
                                    .selectors_in_media
                                    .entry(media_condition)
                                    .or_insert_with(BTreeMap::new);
                                selectors_map.extend(component.selectors);
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
                            _global_rule_map.supports.push_str(&component.ve);

                            let selectors_map = _global_rule_map
                                .selectors_in_supports
                                .entry(supports_condition)
                                .or_insert_with(BTreeMap::new);
                            selectors_map.extend(component.selectors);
                        } else {
                            let _rule_map = rule_map
                                .entry(component.key)
                                .or_insert_with(RuleMapValue::default);
                            _rule_map.supports.push_str(&component.ve);

                            let selectors_map = _rule_map
                                .selectors_in_supports
                                .entry(supports_condition)
                                .or_insert_with(BTreeMap::new);
                            selectors_map.extend(component.selectors);
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

    for (key, value) in global_rule_map.into_iter() {
        let mut properties = String::new();
        if !value.ve.is_empty() {
            properties.push_str(&value.ve);
        }
        if !value.media.is_empty() || !value.selectors_in_media.is_empty() {
            let mut rule = String::new();
            for (key, selectors_value) in value.selectors_in_media.into_iter() {
                let mut selectors_rule = String::new();
                for (key, _value) in selectors_value.into_iter() {
                    selectors_rule.push_str(&wrap_property_with_colon(format!("&{}", key), _value));
                }
                rule.push_str(&wrap_property_with_colon(
                    key,
                    format!(
                        "{}{}",
                        value.media,
                        &wrap_property_with_colon("selectors".to_string(), selectors_rule)
                    ),
                ));
            }
            properties.push_str(&wrap_property_with_colon(String::from("@media"), rule));
        }
        if !value.supports.is_empty() || !value.selectors_in_supports.is_empty() {
            let mut rule = String::new();
            for (key, selectors_value) in value.selectors_in_supports.into_iter() {
                let mut selectors_rule = String::new();
                for (key, _value) in selectors_value.into_iter() {
                    selectors_rule.push_str(&wrap_property_with_colon(format!("&{}", key), _value));
                }
                rule.push_str(&wrap_property_with_colon(
                    key,
                    format!(
                        "{}{}",
                        value.supports,
                        &wrap_property_with_colon("selectors".to_string(), selectors_rule)
                    ),
                ));
            }
            properties.push_str(&wrap_property_with_colon(String::from("@supports"), rule));
        }
        if !value.selectors.is_empty() {
            let mut selectors = String::new();

            for (key, value) in value.selectors.into_iter() {
                selectors.push_str(&wrap_property_with_colon(format!("&{}", key), value));
            }

            properties.push_str(&wrap_property_with_colon(
                "selectors".to_string(),
                selectors,
            ))
        }
        ve.push_str(&wrap_global_style_func(wrap_property_with_comma(
            key, properties,
        )));
    }

    for (key, value) in rule_map.into_iter() {
        let mut properties = String::new();
        if !value.ve.is_empty() {
            properties.push_str(&value.ve);
        }

        if !value.media.is_empty() || !value.selectors_in_media.is_empty() {
            let mut rule = String::new();
            for (key, selectors_value) in value.selectors_in_media.into_iter() {
                let mut selectors_rule = String::new();
                for (key, _value) in selectors_value.into_iter() {
                    selectors_rule.push_str(&wrap_property_with_colon(format!("&{}", key), _value));
                }
                rule.push_str(&wrap_property_with_colon(
                    key,
                    format!(
                        "{}{}",
                        value.media,
                        &wrap_property_with_colon("selectors".to_string(), selectors_rule)
                    ),
                ));
            }
            properties.push_str(&wrap_property_with_colon(String::from("@media"), rule));
        }
        if !value.supports.is_empty() || !value.selectors_in_supports.is_empty() {
            let mut rule = String::new();
            for (key, selectors_value) in value.selectors_in_supports.into_iter() {
                let mut selectors_rule = String::new();
                for (key, _value) in selectors_value.into_iter() {
                    selectors_rule.push_str(&wrap_property_with_colon(format!("&{}", key), _value));
                }
                rule.push_str(&wrap_property_with_colon(
                    key,
                    format!(
                        "{}{}",
                        value.supports,
                        &wrap_property_with_colon("selectors".to_string(), selectors_rule)
                    ),
                ));
            }
            properties.push_str(&wrap_property_with_colon(String::from("@supports"), rule));
        }
        if !value.selectors.is_empty() {
            let mut selectors = String::new();

            for (key, value) in value.selectors.into_iter() {
                selectors.push_str(&wrap_property_with_colon(format!("&{}", key), value));
            }

            properties.push_str(&wrap_property_with_colon(
                "selectors".to_string(),
                selectors,
            ))
        }

        ve.push_str(&wrap_export_const(key, wrap_style_func(properties)));
    }

    ve.insert_str(
        0,
        "import { globalStyle, globalKeyframes, style } from \"@vanilla-extract/css\"\n\n",
    );

    ve
}

pub fn get_qualified_rule(qualfied_rule: &swc_css_ast::QualifiedRule) -> Vec<Rule> {
    let mut result: Vec<Rule> = vec![];
    let complexes: Vec<Complex> = get_complex_selectors(&qualfied_rule.prelude.children);

    for complex in complexes {
        let mut ve: String = String::new();
        let mut vars: Vec<String> = vec![];
        let mut selectors: BTreeMap<String, String> = BTreeMap::default();

        let mut component_values = String::new();
        for block_value in &qualfied_rule.block.value {
            let component_value = get_component_value(block_value);

            component_values.push_str(&component_value[0].ve);

            for var in component_value[0].vars.clone() {
                vars.push(var);
            }
        }

        if !complex.pseudo.is_empty() {
            if complex.is_simple_pseudo {
                ve.push_str(&wrap_property_with_colon(complex.pseudo, component_values))
            } else {
                selectors.insert(complex.pseudo, component_values);
            }
        } else {
            ve.push_str(&component_values);
        }

        if !vars.is_empty() {
            ve.push_str(&wrap_property_with_colon(
                String::from("vars"),
                vars.concat(),
            ));
        }

        result.push(Rule {
            ve,
            key: complex.key,
            selectors,
            is_global_style: complex.is_global_style,
            is_simple_pseudo: complex.is_simple_pseudo,
        })
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

        for complex_selector_children in &complex_selector.children {
            match complex_selector_children {
                swc_css_ast::ComplexSelectorChildren::CompoundSelector(compound_selector) => {
                    for nesting_selector in &compound_selector.nesting_selector {
                        println!("nesting_selector: {:?}", nesting_selector)
                    }

                    for type_selector in &compound_selector.type_selector {
                        match type_selector {
                            swc_css_ast::TypeSelector::TagName(tag_name) => {
                                key.push_str(&tag_name.name.value.value.to_string());
                                is_global_style = true;
                            }
                            swc_css_ast::TypeSelector::Universal(_) => {
                                key.push('*');
                                is_global_style = true;
                            }
                        }
                    }

                    for subclass_selector in &compound_selector.subclass_selectors {
                        match subclass_selector {
                            swc_css_ast::SubclassSelector::Id(id) => {
                                key.push_str(&format!("#{}", &id.text.value));
                                is_global_style = true;
                            }
                            swc_css_ast::SubclassSelector::Class(class) => {
                                if key.is_empty() {
                                    // The first class name is used as the variable name.
                                    key.push_str(&class.text.value.to_string().to_case(Case::Camel))
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
                                    if pseudo.is_empty()
                                        & is_simple_pseudo_func(&formatted_pseudo_class)
                                    {
                                        is_simple_pseudo = true;
                                    }
                                    pseudo.push_str(&formatted_pseudo_class);
                                }

                                if let Some(children) = &pseudo_class.children {
                                    let psudo_class_children =
                                        get_pseudo_class_children(children, is_global_style);
                                    key.push_str(&psudo_class_children.key);
                                    pseudo.push_str(&psudo_class_children.pseudo);
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
                                    if pseudo.is_empty()
                                        & is_simple_pseudo_func(&formatted_pseudo_element)
                                    {
                                        is_simple_pseudo = true;
                                    }
                                    pseudo.push_str(&formatted_pseudo_element);
                                }
                            }
                        }
                    }
                    // input,div,sapn...,*
                }
                swc_css_ast::ComplexSelectorChildren::Combinator(combinator) => {
                    if is_global_style {
                        match combinator.value {
                            swc_css_ast::CombinatorValue::Descendant => {
                                key.push(' ');
                            }
                            swc_css_ast::CombinatorValue::NextSibling => {
                                key.push('+');
                            }
                            swc_css_ast::CombinatorValue::Child => {
                                key.push('>');
                            }
                            swc_css_ast::CombinatorValue::LaterSibling => {
                                key.push('~');
                            }
                            swc_css_ast::CombinatorValue::Column => {
                                key.push_str("||");
                            }
                        }
                    }
                }
            }
        }
        complexes.push(Complex {
            pseudo,
            key,
            is_global_style,
            is_simple_pseudo,
        })
    }

    complexes
}

fn get_pseudo_class_children(
    pseudo_class_children: &[swc_css_ast::PseudoClassSelectorChildren],
    is_global_style: bool,
) -> Complex {
    let mut ve = String::new();
    let mut pseudo = String::new();
    let mut key: String = String::new();

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
        is_simple_pseudo: false,
    }
}

pub fn get_component_value(component_value: &swc_css_ast::ComponentValue) -> Vec<Component> {
    let mut ve: String = String::new();
    let mut vars: Vec<String> = vec![];
    let key: String = String::new();
    let is_global_style: bool = false;

    match component_value {
        swc_css_ast::ComponentValue::PreservedToken(preserved_token) => {
            match &preserved_token.token {
                swc_css_ast::Token::Ident { value, raw: _ } => ve.push_str(&value.to_string()),
                swc_css_ast::Token::Function { value, raw: _ } => ve.push_str(&value.to_string()),
                swc_css_ast::Token::AtKeyword { value: _, raw: _ } => {
                    todo!()
                }
                swc_css_ast::Token::Hash {
                    is_id: _,
                    value,
                    raw: _,
                } => {
                    ve.push_str(&String::from("#"));
                    ve.push_str(&value.to_string());
                }
                swc_css_ast::Token::String { value, raw: _ } => ve.push_str(&value.to_string()),
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
                    let declaration_value = get_declaration(declaration, false);
                    ve.push_str(declaration_value.0.as_ref());
                    for var in declaration_value.1 {
                        vars.push(var);
                    }
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
                    let mut _ve: String = String::new();
                    let mut _key: String = String::new();

                    components.push(Component {
                        ve: rule.ve,
                        key: rule.key,
                        vars: vec![],
                        selectors: rule.selectors,
                        is_global_style: rule.is_global_style,
                    })
                }

                return components;
            }
            swc_css_ast::Rule::Invalid(_) => {
                println!("Contains an invalid token.")
            }
            swc_css_ast::Rule::AtRule(at_rule) => println!("at_rule:{:?}", at_rule),
        },
        swc_css_ast::ComponentValue::StyleBlock(style_block) => match style_block {
            swc_css_ast::StyleBlock::AtRule(_) => todo!(),
            swc_css_ast::StyleBlock::Declaration(declaration) => {
                let declaration_value = get_declaration(declaration, false);
                ve.push_str(declaration_value.0.as_ref());
                for var in declaration_value.1 {
                    vars.push(var);
                }
            }
            swc_css_ast::StyleBlock::QualifiedRule(qualified_rule) => {
                for rule in get_qualified_rule(qualified_rule) {
                    ve.push_str(&rule.ve)
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

            ve.push_str(&format!("\"{}\": {{", &keyframe_selector));

            for block_value in &keyframe_block.block.value {
                let component_value = get_component_value(block_value);
                ve.push_str(&component_value[0].ve);
            }

            ve.push_str(&String::from("},"));
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
        vars,
        key,
        selectors: BTreeMap::default(),
        is_global_style,
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

pub fn get_declaration(
    declaration: &swc_css_ast::Declaration,
    is_supports: bool,
) -> (String, Vec<String>) {
    let mut ve = String::new();
    let mut vars: Vec<String> = vec![];
    let mut declaration_name = String::new();
    let mut declaration_value = String::new();
    let mut temp_dashed_ident = String::new();
    match &declaration.name {
        swc_css_ast::DeclarationName::Ident(ident) => {
            declaration_name.push_str(&ident.raw.to_string())
        }
        swc_css_ast::DeclarationName::DashedIdent(dashed_ident) => {
            temp_dashed_ident = dashed_ident.raw.to_string()
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
    } else if declaration_name.starts_with('-') {
        declaration_name = declaration_name.to_case(Case::Pascal)
    } else {
        declaration_name = declaration_name.to_case(Case::Camel)
    }
    if !temp_dashed_ident.is_empty() {
        let formatted_declaration =
            format!("  \"{}\":\"{}\",\n", temp_dashed_ident, declaration_value);
        vars.push(formatted_declaration);
    } else if is_supports {
        let formatted_declaration = format!("({}:{})", declaration_name, declaration_value);
        ve.push_str(&formatted_declaration);
    } else {
        let formatted_declaration = format!("  {}:\"{}\",\n", declaration_name, declaration_value);
        ve.push_str(&formatted_declaration);
    }

    (ve, vars)
}

#[cfg(test)]
mod tests {
    use swc_common::{BytePos, Span, SyntaxContext};
    use swc_css_ast::{ComponentValue, Dimension, Ident, Length, Number};

    use crate::{utils::parse_css, value::ast_to_vanilla_extract, value::get_component_value};

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
            "import { globalStyle, globalKeyframes, style } from \"@vanilla-extract/css\"\n\nexport const bAR = style({\n\":hover\": {\n  position:\"absolute\",\n},\n});\nexport const foo = style({\n  position:\"absolute\",\n});\n",
            result
        )
    }

    #[test]
    fn ast_to_vanilla_extract_02() {
        let parsed_css =
            parse_css("*,*::before,*::after,.b-a-r:hover {box-sizing: border-box;}").unwrap();

        let result = ast_to_vanilla_extract(parsed_css);

        assert_eq!(
            "import { globalStyle, globalKeyframes, style } from \"@vanilla-extract/css\"\n\nglobalStyle(\"*\", {\n  boxSizing:\"border-box\",\n},\n);\nglobalStyle(\"*::after\", {\n  boxSizing:\"border-box\",\n},\n);\nglobalStyle(\"*::before\", {\n  boxSizing:\"border-box\",\n},\n);\nexport const bAR = style({\n\":hover\": {\n  boxSizing:\"border-box\",\n},\n});\n",
            result
        )
    }

    #[test]
    fn ast_to_vanilla_extract_03() {
        let parsed_css = parse_css("ol ol{margin-bottom: 0;}").unwrap();

        let result = ast_to_vanilla_extract(parsed_css);

        assert_eq!(
            "import { globalStyle, globalKeyframes, style } from \"@vanilla-extract/css\"\n\nglobalStyle(\"ol ol\", {\n  marginBottom:\"0\",\n},\n);\n",
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
            "import { globalStyle, globalKeyframes, style } from \"@vanilla-extract/css\"\n\nglobalStyle(\"[type^='button' s]:not(:disabled)\", {\n  cursor:\"pointer\",\n},\n);\nglobalStyle(\"button:not(:disabled)\", {\n  cursor:\"pointer\",\n},\n);\n",
            result
        )
    }

    #[test]
    fn ast_to_vanilla_extract_05() {
        let parsed_css = parse_css(" :root{--blue: #007bff;}").unwrap();
        let result = ast_to_vanilla_extract(parsed_css);

        assert_eq!(
            "import { globalStyle, globalKeyframes, style } from \"@vanilla-extract/css\"\n\nglobalStyle(\":root\", {\n\"vars\": {\n  \"--blue\":\"#007bff\",\n},\n},\n);\n",
            result
        )
    }

    #[test]
    fn ast_to_vanilla_extract_06() {
        let parsed_css = parse_css("#foo {border: red 2px solid;}").unwrap();
        let result = ast_to_vanilla_extract(parsed_css);

        assert_eq!(
            "import { globalStyle, globalKeyframes, style } from \"@vanilla-extract/css\"\n\nglobalStyle(\"#foo\", {\n  border:\"red 2px solid\",\n},\n);\n",
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
            "import { globalStyle, globalKeyframes, style } from \"@vanilla-extract/css\"\n\nexport const display1 = style({\n\"@media\": {\n\"(min-width: 1200px)\": {\n  fontSize:\"5rem\",\n  color:\"red\",\n},\n},\n});\n",
            result
        )
    }

    #[test]
    fn ast_to_vanilla_extract_08() {
        let parsed_css = parse_css("@media(min-width: 1200px){input {font-size: 5rem;}}").unwrap();
        let result = ast_to_vanilla_extract(parsed_css);

        assert_eq!(
            "import { globalStyle, globalKeyframes, style } from \"@vanilla-extract/css\"\n\nglobalStyle(\"input\", {\n\"@media\": {\n\"(min-width: 1200px)\": {\n  fontSize:\"5rem\",\n},\n},\n},\n);\n",
            result
        )
    }

    #[test]
    fn ast_to_vanilla_extract_09() {
        let parsed_css = parse_css("@media(min-width: 1200px){input {font-size: 5rem;} .display-2 {font-size: 5rem;color:red}}").unwrap();
        let result = ast_to_vanilla_extract(parsed_css);

        assert_eq!(
            "import { globalStyle, globalKeyframes, style } from \"@vanilla-extract/css\"\n\nglobalStyle(\"input\", {\n\"@media\": {\n\"(min-width: 1200px)\": {\n  fontSize:\"5rem\",\n},\n},\n},\n);\nexport const display2 = style({\n\"@media\": {\n\"(min-width: 1200px)\": {\n  fontSize:\"5rem\",\n  color:\"red\",\n},\n},\n});\n",
            result
        )
    }

    #[test]
    fn ast_to_vanilla_extract_10() {
        let parsed_css = parse_css("@supports ((position: -webkit-sticky) or (position: sticky)) {.display-1 {font-size: 5rem;}}").unwrap();
        let result = ast_to_vanilla_extract(parsed_css);

        assert_eq!(
            "import { globalStyle, globalKeyframes, style } from \"@vanilla-extract/css\"\n\nexport const display1 = style({\n\"@supports\": {\n\"(position:-webkit-sticky) or (position:sticky)\": {\n  fontSize:\"5rem\",\n},\n},\n});\n",
            result
        )
    }

    #[test]
    fn ast_to_vanilla_extract_11() {
        let parsed_css = parse_css("@supports ((position: -webkit-sticky) or (position: sticky)) {input {font-size: 5rem;}}").unwrap();
        let result = ast_to_vanilla_extract(parsed_css);

        assert_eq!(
            "import { globalStyle, globalKeyframes, style } from \"@vanilla-extract/css\"\n\nglobalStyle(\"input\", {\n\"@supports\": {\n\"(position:-webkit-sticky) or (position:sticky)\": {\n  fontSize:\"5rem\",\n},\n},\n},\n);\n",
            result
        )
    }

    #[test]
    fn ast_to_vanilla_extract_12() {
        let parsed_css = parse_css("@supports ((position: -webkit-sticky) or (position: sticky)) {input {font-size: 5rem;} .display-2 {font-size: 5rem;color:red}}").unwrap();
        let result = ast_to_vanilla_extract(parsed_css);

        assert_eq!(
            "import { globalStyle, globalKeyframes, style } from \"@vanilla-extract/css\"\n\nglobalStyle(\"input\", {\n\"@supports\": {\n\"(position:-webkit-sticky) or (position:sticky)\": {\n  fontSize:\"5rem\",\n},\n},\n},\n);\nexport const display2 = style({\n\"@supports\": {\n\"(position:-webkit-sticky) or (position:sticky)\": {\n  fontSize:\"5rem\",\n  color:\"red\",\n},\n},\n});\n",
            result
        )
    }

    #[test]
    fn ast_to_vanilla_extract_13() {
        let parsed_css = parse_css(".toast:not(:last-child) {margin-bottom: 0.75rem;}").unwrap();
        let result = ast_to_vanilla_extract(parsed_css);

        assert_eq!(
            "import { globalStyle, globalKeyframes, style } from \"@vanilla-extract/css\"\n\nexport const toast = style({\n\"selectors\": {\n\"&:not(:last-child)\": {\n  marginBottom:\"0.75rem\",\n},\n},\n});\n",

            result
        )
    }

    #[test]
    fn ast_to_vanilla_extract_14() {
        let parsed_css =
            parse_css(".tooltip[data-popper-placement^=top] {padding: 0.4rem 0;").unwrap();
        let result = ast_to_vanilla_extract(parsed_css);

        assert_eq!(
            "import { globalStyle, globalKeyframes, style } from \"@vanilla-extract/css\"\n\nexport const tooltip = style({\n\"selectors\": {\n\"&[data-popper-placement^='top']\": {\n  padding:\"0.4rem 0\",\n},\n},\n});\n",
            result
        )
    }

    #[test]
    fn ast_to_vanilla_extract_15() {
        let parsed_css = parse_css(".foo,.foo:hover {position: absolute;}").unwrap();
        let result = ast_to_vanilla_extract(parsed_css);

        assert_eq!(
            "import { globalStyle, globalKeyframes, style } from \"@vanilla-extract/css\"\n\nexport const foo = style({\n  position:\"absolute\",\n\":hover\": {\n  position:\"absolute\",\n},\n});\n",
            result
        )
    }

    #[test]
    fn ast_to_vanilla_extract_16() {
        let parsed_css =
            parse_css("@media (min-width: 1200px) {h4, .h4 {font-size: 1.5rem;}}").unwrap();
        let result = ast_to_vanilla_extract(parsed_css);

        assert_eq!(
            "import { globalStyle, globalKeyframes, style } from \"@vanilla-extract/css\"\n\nglobalStyle(\"h4\", {\n\"@media\": {\n\"(min-width: 1200px)\": {\n  fontSize:\"1.5rem\",\n},\n},\n},\n);\nexport const h4 = style({\n\"@media\": {\n\"(min-width: 1200px)\": {\n  fontSize:\"1.5rem\",\n},\n},\n});\n",
            result
        )
    }

    #[test]
    fn ast_to_vanilla_extract_17() {
        let parsed_css =
            parse_css(".display-1 {background-color: blue;} @media (min-width: 1200px) {.display-1 {font-size: 5rem;color: red;}}").unwrap();
        let result = ast_to_vanilla_extract(parsed_css);

        assert_eq!(
            "import { globalStyle, globalKeyframes, style } from \"@vanilla-extract/css\"\n\nexport const display1 = style({\n  backgroundColor:\"blue\",\n\"@media\": {\n\"(min-width: 1200px)\": {\n  fontSize:\"5rem\",\n  color:\"red\",\n},\n},\n});\n",
            result
        )
    }

    #[test]
    fn ast_to_vanilla_extract_18() {
        let parsed_css =
            parse_css(".display-1 {background-color: blue;} @supports((position: -webkit-sticky) or (position: sticky)) {.display-1 {font-size: 5rem;color: red;}}").unwrap();
        let result = ast_to_vanilla_extract(parsed_css);

        assert_eq!(
            "import { globalStyle, globalKeyframes, style } from \"@vanilla-extract/css\"\n\nexport const display1 = style({\n  backgroundColor:\"blue\",\n\"@supports\": {\n\"(position:-webkit-sticky) or (position:sticky)\": {\n  fontSize:\"5rem\",\n  color:\"red\",\n},\n},\n});\n",
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
            "import { globalStyle, globalKeyframes, style } from \"@vanilla-extract/css\"\n\nglobalKeyframes(\"progress-bar-stripes\", {\n\"from\": {  backgroundPosition:\"1rem 0\",\n},\"to\": {  backgroundPosition:\"0 0\",\n},},\n);\n",
            result
        )
    }

    #[test]
    fn ast_to_vanilla_extract_20() {
        let parsed_css = parse_css(".accordion-button:not(.collapsed) {color: #0c63e4;}.accordion-button:not(.collapsed)::after {transform: rotate(-180deg);}")
        .unwrap();
        let result = ast_to_vanilla_extract(parsed_css);

        assert_eq!(
            "import { globalStyle, globalKeyframes, style } from \"@vanilla-extract/css\"\n\nexport const accordionButton = style({\n\"selectors\": {\n\"&:not\": {\n  color:\"0c63e4\",\n},\n\"&:not::after\": {\n  transform:\"rotate(-180deg)\",\n},\n},\n});\n",
            result
        )
    }

    #[test]
    fn ast_to_vanilla_extract_21() {
        let parsed_css = parse_css("@supports((position: -webkit-sticky) or (position: sticky)) {.accordion-button:not(.collapsed) {color: #0c63e4;}.accordion-button:not(.collapsed)::after {transform: rotate(-180deg);}}")
        .unwrap();
        let result = ast_to_vanilla_extract(parsed_css);

        assert_eq!(
            "import { globalStyle, globalKeyframes, style } from \"@vanilla-extract/css\"\n\nexport const accordionButton = style({\n\"@supports\": {\n\"(position:-webkit-sticky) or (position:sticky)\": {\n\"selectors\": {\n\"&:not\": {\n  color:\"0c63e4\",\n},\n\"&:not::after\": {\n  transform:\"rotate(-180deg)\",\n},\n},\n},\n},\n});\n",
            result
        )
    }

    #[test]
    fn ast_to_vanilla_extract_22() {
        let parsed_css = parse_css("@media (min-width: 1200px){.accordion-button:not(.collapsed) {color: #0c63e4;}.accordion-button:not(.collapsed)::after {transform: rotate(-180deg);}}")
        .unwrap();
        let result = ast_to_vanilla_extract(parsed_css);

        assert_eq!(
            "import { globalStyle, globalKeyframes, style } from \"@vanilla-extract/css\"\n\nexport const accordionButton = style({\n\"@media\": {\n\"(min-width: 1200px)\": {\n\"selectors\": {\n\"&:not\": {\n  color:\"0c63e4\",\n},\n\"&:not::after\": {\n  transform:\"rotate(-180deg)\",\n},\n},\n},\n},\n});\n",
            result
        )
    }
}
