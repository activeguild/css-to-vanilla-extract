pub fn get_all_media_conditions(conditions: &[swc_css_ast::MediaConditionAllType]) -> String {
    let mut ve = String::new();
    for condition in conditions {
        let condison_as_str = match condition {
            swc_css_ast::MediaConditionAllType::Not(not) => {
                format!(" not {}", &get_media_in_parens(&not.condition))
            }
            swc_css_ast::MediaConditionAllType::And(and) => {
                format!(" and {}", &get_media_in_parens(&and.condition))
            }
            swc_css_ast::MediaConditionAllType::Or(or) => {
                format!(" or {}", &get_media_in_parens(&or.condition))
            }
            swc_css_ast::MediaConditionAllType::MediaInParens(media_in_parens) => {
                get_media_in_parens(media_in_parens)
            }
        };
        println!("condison_as_str:{:?}", condison_as_str);
        ve.push_str(&condison_as_str);
    }
    println!("ve:{:?}", ve);
    ve
}

pub fn get_without_or_media_conditions(
    conditions: &[swc_css_ast::MediaConditionWithoutOrType],
) -> String {
    let mut ve = String::new();
    for condition in conditions {
        let condition_as_str = match condition {
            swc_css_ast::MediaConditionWithoutOrType::Not(not) => {
                format!(" not {}", &get_media_in_parens(&not.condition))
            }
            swc_css_ast::MediaConditionWithoutOrType::And(and) => {
                format!(" and {}", &get_media_in_parens(&and.condition))
            }
            swc_css_ast::MediaConditionWithoutOrType::MediaInParens(media_in_parens) => {
                match media_in_parens {
                    swc_css_ast::MediaInParens::MediaCondition(media_condition) => {
                        get_all_media_conditions(&media_condition.conditions)
                    }
                    swc_css_ast::MediaInParens::Feature(feature) => get_media_feature(feature),
                }
            }
        };
        ve.push_str(&condition_as_str);
    }

    ve
}

fn get_media_feature(feature: &swc_css_ast::MediaFeature) -> String {
    let mut ve = String::new();
    match feature {
        swc_css_ast::MediaFeature::Plain(plain) => {
            ve.push_str(&String::from('('));
            match &plain.name {
                swc_css_ast::MediaFeatureName::Ident(ident) => ve.push_str(ident.value.as_ref()),
            }
            ve.push_str(&String::from(": "));
            ve.push_str(&get_media_feature_value(&plain.value));
            ve.push_str(&String::from(')'));
        }
        swc_css_ast::MediaFeature::Boolean(boolean_value) => {
            ve.push_str(&String::from('('));
            match &boolean_value.name {
                swc_css_ast::MediaFeatureName::Ident(ident) => ve.push_str(ident.value.as_ref()),
            }
            ve.push_str(&String::from(')'));
        }
        swc_css_ast::MediaFeature::Range(range) => {
            ve.push_str(&get_media_feature_value(&range.left));
            ve.push_str(&format!(" {} ", range.comparison.as_str()));
            ve.push_str(&get_media_feature_value(&range.right));
        }
        swc_css_ast::MediaFeature::RangeInterval(_) => todo!(),
    }

    ve
}

fn get_media_feature_value(media_feature_value: &swc_css_ast::MediaFeatureValue) -> String {
    match &media_feature_value {
        swc_css_ast::MediaFeatureValue::Number(number) => number.value.to_string(),
        swc_css_ast::MediaFeatureValue::Dimension(dimension) => match dimension {
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
                format!(
                    "{}{}",
                    &time.value.value.to_string(),
                    time.unit.value.as_ref()
                )
            }
            swc_css_ast::Dimension::Frequency(frequency) => {
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
        },
        swc_css_ast::MediaFeatureValue::Ident(ident) => ident.value.to_string(),
        swc_css_ast::MediaFeatureValue::Ratio(ratio) => {
            if let Some(value) = &ratio.right {
                format!(
                    "{} / {}",
                    &ratio.left.value.to_string(),
                    &value.value.to_string()
                )
            } else {
                ratio.left.value.to_string()
            }
        }
    }
}

fn get_media_in_parens(media_in_parens: &swc_css_ast::MediaInParens) -> String {
    match media_in_parens {
        swc_css_ast::MediaInParens::MediaCondition(media_condition) => {
            get_all_media_conditions(&media_condition.conditions)
        }
        swc_css_ast::MediaInParens::Feature(feature) => get_media_feature(feature),
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    use swc_common::{Span, SyntaxContext};
    use swc_css_ast::{
        Dimension, Ident, Length, MediaConditionAllType, MediaConditionWithoutOrType, MediaFeature,
        MediaFeatureRange, MediaFeatureRangeComparison, MediaFeatureValue, MediaInParens, Number,
    };

    fn generate_span() -> swc_common::Span {
        return Span {
            lo: swc_common::BytePos(0),
            hi: swc_common::BytePos(0),
            ctxt: SyntaxContext::empty(),
        };
    }

    #[test]
    fn get_without_or_media_conditions_01() {
        // https://github.com/swc-project/swc/blob/75b0ed55f6c352ab2cd918ac746ceef99fa0f124/crates/swc_css_prefixer/src/prefixer.rs#L388
        let media_in_parens = MediaConditionWithoutOrType::MediaInParens(MediaInParens::Feature(
            MediaFeature::Range(MediaFeatureRange {
                span: generate_span(),
                left: MediaFeatureValue::Ident(Ident {
                    span: generate_span(),
                    value: "width".into(),
                    raw: Some("width".into()),
                }),
                comparison: MediaFeatureRangeComparison::Le,
                right: MediaFeatureValue::Dimension(Dimension::Length(Length {
                    span: generate_span(),
                    value: Number {
                        span: generate_span(),
                        value: 32.0,
                        raw: Some("32.0".into()),
                    },
                    unit: Ident {
                        span: generate_span(),
                        value: "em".into(),
                        raw: Some("em".into()),
                    },
                })),
            }),
        ));

        let result = get_without_or_media_conditions(&[media_in_parens]);
        assert_eq!(result, "width <= 32em");
    }

    #[test]
    fn get_all_media_conditions_01() {
        // https://github.com/swc-project/swc/blob/75b0ed55f6c352ab2cd918ac746ceef99fa0f124/crates/swc_css_prefixer/src/prefixer.rs#L388
        let media_in_parens = MediaConditionAllType::MediaInParens(MediaInParens::Feature(
            MediaFeature::Range(MediaFeatureRange {
                span: generate_span(),
                left: MediaFeatureValue::Ident(Ident {
                    span: generate_span(),
                    value: "width".into(),
                    raw: Some("width".into()),
                }),
                comparison: MediaFeatureRangeComparison::Le,
                right: MediaFeatureValue::Dimension(Dimension::Length(Length {
                    span: generate_span(),
                    value: Number {
                        span: generate_span(),
                        value: 32.0,
                        raw: Some("32.0".into()),
                    },
                    unit: Ident {
                        span: generate_span(),
                        value: "em".into(),
                        raw: Some("em".into()),
                    },
                })),
            }),
        ));

        let result = get_all_media_conditions(&[media_in_parens]);
        assert_eq!(result, "width <= 32em");
    }
}
