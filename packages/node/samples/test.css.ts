import { style } from "@vanilla-extract/css"

export const container = style({
  display: "flex",
  "@media": {
    "(min-width: 768px)": {
      width: "750px",
      width: "970px",
    },
  },
});

