// eslint-disable-next-line @typescript-eslint/no-var-requires
const { vanillaExtractPlugin } = require("@vanilla-extract/esbuild-plugin");

// Style selectors must target the '&' character (along with any modifiers), e.g. `${parent} &` or `${parent} &:hover`.
// This is to ensure that each style block only affects the styling of a single class.
// If your selector is targeting another class, you should move it to the style definition for that class, e.g. given we have styles for 'parent' and 'child' elements, instead of adding a selector of `& ${child}`) to 'parent', you should add `${parent} &` to 'child').
// If your selector is targeting something global, use the 'globalStyle' function instead, e.g. if you wanted to write `& h1`, you should instead write 'globalStyle(`${parent} h1`, { ... })'

// eslint-disable-next-line @typescript-eslint/no-var-requires
require("esbuild")
  .build({
    entryPoints: ["./samples/test.css.ts"],
    bundle: true,
    plugins: [vanillaExtractPlugin()],
    outfile: "./samples/dist/index.js",
  })
  .catch(() => process.exit(1));
