use neon::prelude::*;

extern crate css_to_vanilla_extract;

#[neon::main]
fn main(mut cx: ModuleContext) -> NeonResult<()> {
    cx.export_function("css_to_vanilla_extract", css_to_vanilla_extract)?;
    Ok(())
}

fn css_to_vanilla_extract(mut cx: FunctionContext) -> JsResult<JsBoolean> {
    let file = cx.argument::<JsString>(0).unwrap();
    let path = file.value(&mut cx);
    css_to_vanilla_extract::from_path(&path);

    return Ok(cx.boolean(true));
}
