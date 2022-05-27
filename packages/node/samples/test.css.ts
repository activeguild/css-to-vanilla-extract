import { globalStyle, globalKeyframes, globalFontFace, style } from "@vanilla-extract/css"

globalFontFace("Roboto", {
  src:"url(https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap)",
},
);
globalKeyframes("slidein", {
"from": {
  transform:"translateX(0%)",
},
"to": {
  transform:"translateX(100%)",
},
},
);
export const bar = style({
  position:"absolute",
":hover": {
  boxSizing:"border-box",
},
});
export const btn = style({
  width:"100%",
});
export const foo = style({
  position:"absolute",
});
export const accordionButton = style({
"@media": {
"(min-width: 1200px)": {
"selectors": {
"&:not": {
  color:"0c63e4",
},
"&:not::after": {
  transform:"rotate(-180deg)",
},
},
},
},
});
export const display1 = style({
"@media": {
"(min-width: 1200px)": {
  color:"red",
  fontSize:"5rem",
},
},
});
export const display2 = style({
  backgroundColor:"blue",
"@media": {
"(min-width: 1200px)": {
  color:"red",
  fontSize:"5rem",
},
},
});
export const display3 = style({
"@supports": {
"(position:-webkit-sticky) or (position:sticky)": {
  fontSize:"5rem",
},
},
});
export const display4 = style({
"@supports": {
"(position:-webkit-sticky) or (position:sticky)": {
  color:"red",
  fontSize:"5rem",
},
},
});
export const display5 = style({
  backgroundColor:"blue",
"@supports": {
"(position:-webkit-sticky) or (position:sticky)": {
  color:"red",
  fontSize:"5rem",
},
},
});
export const icon = style({
"selectors": {
[`input > ${btn} > &`]: {
  position:"absolute",
},
},
});
export const input = style({
"selectors": {
"&:invalid:focus": {
  boxShadow:"0 0 0 0.25rem rgba(220,53,69,0.25)",
},
},
});
export const toast = style({
"selectors": {
"&:not(:last-child)": {
  marginBottom:"0.75rem",
},
},
});
globalStyle("*", {
  boxSizing:"border-box",
},
);
globalStyle("*::after", {
  boxSizing:"border-box",
},
);
globalStyle("*::before", {
  boxSizing:"border-box",
},
);
globalStyle(":hover", {
  color:"red",
},
);
globalStyle("[type^='button' s]", {
  cursor:"pointer",
},
);
globalStyle("input", {
"@media": {
"(min-width: 1200px)": {
  fontSize:"5rem",
},
},
"@supports": {
"(position:-webkit-sticky) or (position:sticky)": {
  fontSize:"5rem",
},
},
},
);
