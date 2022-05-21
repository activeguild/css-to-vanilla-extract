<h1 align="center">CSS-to-vanilla-extract ⚡ Welcome 😀</h1>

Convert CSS (SCSS/SASS) to [vanilla-extract](https://vanilla-extract.style/).

[playground](https://grand-tapioca-e54f4f.netlify.app/)

## Install

```bash
npm i -D css-to-vanilla-extract
```

## Usage

Once installed, you can run it to convert css (scss/sass) files to vanilla-extract ts files.
For example:

```
npx css-to-vanilla-extract sample/test.css
```

<strong>Output:</strong>sample/test.css.ts

## Sample

### From

```css
.foo {
  background-color: blue;
}
@media (min-width: 1200px) {
  input {
    font-size: 5rem;
  }
  .foo {
    font-size: 5rem;
    color: red;
  }
  .bar {
    font-size: 10rem;
  }
}
```

### To

```ts
import { globalStyle, style } from "@vanilla-extract/css";

globalStyle("input", {
  "@media": {
    "(min-width: 1200px)": {
      fontSize: "5rem",
    },
  },
});
export const bar = style({
  "@media": {
    "(min-width: 1200px)": {
      fontSize: "10rem",
    },
  },
});
export const foo = style({
  backgroundColor: "blue",
  "@media": {
    "(min-width: 1200px)": {
      fontSize: "5rem",
      color: "red",
    },
  },
});
```

## Principles of conduct

Please see [the principles of conduct](https://github.com/activeguild/css-to-vanilla-extract/blob/master/.github/CONTRIBUTING.md) when building a site.

## License

This library is licensed under the [MIT license](https://github.com/activeguild/css-to-vanilla-extract/blob/master/LICENSE).
