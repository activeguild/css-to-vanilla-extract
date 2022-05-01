use wasm_bindgen::prelude::*;
extern crate css_to_vanilla_extract;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
pub fn from_code(code: &str) -> Result<String, String> {
    return css_to_vanilla_extract::from_code(code);
}
