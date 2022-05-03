import { globalStyle, style } from "@vanilla-extract/css";

globalStyle("*", {
  boxSizing: "border-box",
});
globalStyle("*::after", {
  boxSizing: "border-box",
});
globalStyle("*::before", {
  boxSizing: "border-box",
});
globalStyle(":hover", {
  color: "red",
});
globalStyle("[type^='button' s]", {
  cursor: "pointer",
});
globalStyle("input", {
  "@media": {
    "(min-width: 1200px)": {
      fontSize: "5rem",
      fontSize: "5rem",
    },
  },
  "@supports": {
    "(position:-webkit-sticky) or (position:sticky)": {
      fontSize: "5rem",
      fontSize: "5rem",
    },
  },
});
globalStyle("input:not", {
  color: "red",
});
globalStyle("table*>*", {
  selectors: {
    "&:not(caption)": {
      padding: "0.5rem 0.5rem",
      backgroundColor: "var(--bs-table-bg)",
      borderBottomWidth: "1px",
      boxShadow: "inset 0 0 0 9999px var(--bs-table-accent-bg)",
    },
  },
});
export const accordionButton = style({
  "@media": {
    "(min-width: 1200px)": {
      selectors: {
        "&:not": {
          color: "0c63e4",
        },
        "&:not::after": {
          transform: "rotate(-180deg)",
        },
      },
    },
  },
});
export const bar = style({
  position: "absolute",
  ":hover": {
    boxSizing: "border-box",
  },
});
export const display1 = style({
  "@media": {
    "(min-width: 1200px)": {
      fontSize: "5rem",
      color: "red",
    },
  },
});
export const display2 = style({
  backgroundColor: "blue",
  "@media": {
    "(min-width: 1200px)": {
      fontSize: "5rem",
      color: "red",
    },
  },
});
export const display3 = style({
  "@supports": {
    "(position:-webkit-sticky) or (position:sticky)": {
      fontSize: "5rem",
    },
  },
});
export const display4 = style({
  "@supports": {
    "(position:-webkit-sticky) or (position:sticky)": {
      fontSize: "5rem",
      color: "red",
    },
  },
});
export const display5 = style({
  backgroundColor: "blue",
  "@supports": {
    "(position:-webkit-sticky) or (position:sticky)": {
      fontSize: "5rem",
      color: "red",
    },
  },
});
export const foo = style({
  position: "absolute",
});
export const toast = style({
  selectors: {
    "&:not(:last-child)": {
      marginBottom: "0.75rem",
    },
  },
});
