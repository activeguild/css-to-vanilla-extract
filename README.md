../packages/node/README.md

<h1 align="center">CSS-to-vanilla-extract ⚡ Welcome 😀</h1>

<p align="left">
  <a href="https://github.com/actions/setup-node"><img alt="GitHub Actions status" src="https://github.com/activeguild/css-to-vanilla-extract/workflows/automatic%20release/badge.svg" style="max-width:100%;"></a>
</p>

Generate [vanilla-extract](https://vanilla-extract.style/) typescript file from the CSS (SCSS/SASS) file.

[playground](https://css-to-vanilla-extract.netlify.app/)

The following APIs are covered.

- [styling-api/#style](https://vanilla-extract.style/documentation/styling-api/#style)
- [styling-api/#globalstyle](https://vanilla-extract.style/documentation/styling-api/#globalstyle)
- [styling-api/#globalfontface](https://vanilla-extract.style/documentation/styling-api/#globalfontface)
- [styling-api/#globalkeyframes](https://vanilla-extract.style/documentation/styling-api/#globalkeyframes)

## Motivation

- Generate style definitions received from designers without any errors.
- Cost-effective migration of existing projects using css modules.

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

### Input

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
@font-face {
  font-family: "Roboto";
  src: url("https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap");
}

@keyframes slidein {
  from {
    transform: translateX(0%);
  }

  to {
    transform: translateX(100%);
  }
}

.fizz .buzz {
  background-color: blue;
}

.fizz .buzz {
  font-size: 5rem;
}
```

### Output

```ts
import {
  globalFontFace,
  globalKeyframes,
  globalStyle,
  style,
} from "@vanilla-extract/css";

globalFontFace("Roboto", {
  src: "url(https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap)",
});

globalKeyframes("slidein", {
  from: {
    transform: "translateX(0%)",
  },
  to: {
    transform: "translateX(100%)",
  },
});

export const fizz = style({});

export const bar = style({
  "@media": {
    "(min-width: 1200px)": {
      fontSize: "10rem",
    },
  },
});

export const buzz = style({
  selectors: {
    [`${fizz} &`]: {
      backgroundColor: "blue",
      fontSize: "5rem",
    },
  },
});

export const foo = style({
  backgroundColor: "blue",
  "@media": {
    "(min-width: 1200px)": {
      color: "red",
      fontSize: "5rem",
    },
  },
});

globalStyle("input", {
  "@media": {
    "(min-width: 1200px)": {
      fontSize: "5rem",
    },
  },
});
```

## Principles of conduct

Please see [the principles of conduct](https://github.com/activeguild/css-to-vanilla-extract/blob/master/.github/CONTRIBUTING.md) when building a site.

## License

This library is licensed under the [MIT license](https://github.com/activeguild/css-to-vanilla-extract/blob/master/LICENSE).
