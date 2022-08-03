import init, { from_code } from "../../wasm/dist/wasm_css_to_vanilla_extract";
import "../../wasm/dist/wasm_css_to_vanilla_extract_bg.wasm?init";

init()
  .then(() => {
    onmessage = (e) => {
      try {
        postMessage({ code: from_code(e.data) });
      } catch (error) {
        postMessage({ error });
      }
    };

    postMessage({ loaded: true });
  })
  .catch((e) => postMessage({ error: e }));
