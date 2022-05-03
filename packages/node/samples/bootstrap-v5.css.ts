import { globalStyle, globalKeyframes, style } from "@vanilla-extract/css"

globalKeyframes("progress-bar-stripes", {
'0%': {  backgroundPositionX:"1rem",
},},
);
globalKeyframes("progress-bar-stripes", {
'0%': {  backgroundPositionX:"1rem",
},},
);
globalKeyframes("spinner-border", {
'to': {  transform:"rotate(360deg)",
},},
);
globalKeyframes("spinner-border", {
'to': {  transform:"rotate(360deg)",
},},
);
globalKeyframes("spinner-grow", {
'0%': {  transform:"scale(0)",
},'50%': {  opacity:"1",
  transform:"none",
},},
);
globalKeyframes("spinner-grow", {
'0%': {  transform:"scale(0)",
},'50%': {  opacity:"1",
  transform:"none",
},},
);
globalKeyframes("placeholder-glow", {
'50%': {  opacity:"0.2",
},},
);
globalKeyframes("placeholder-glow", {
'50%': {  opacity:"0.2",
},},
);
globalKeyframes("placeholder-wave", {
'100%': {  WebkitMaskPosition:"-200% 0%",
  maskPosition:"-200% 0%",
},},
);
globalKeyframes("placeholder-wave", {
'100%': {  WebkitMaskPosition:"-200% 0%",
  maskPosition:"-200% 0%",
},},
);
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
globalStyle("::-moz-focus-inner", {
  padding:"0",
  borderStyle:"none",
},
);
globalStyle("::-webkit-color-swatch-wrapper", {
  padding:"0",
},
);
globalStyle("::-webkit-datetime-edit-day-field", {
  padding:"0",
},
);
globalStyle("::-webkit-datetime-edit-fields-wrapper", {
  padding:"0",
},
);
globalStyle("::-webkit-datetime-edit-hour-field", {
  padding:"0",
},
);
globalStyle("::-webkit-datetime-edit-minute", {
  padding:"0",
},
);
globalStyle("::-webkit-datetime-edit-month-field", {
  padding:"0",
},
);
globalStyle("::-webkit-datetime-edit-text", {
  padding:"0",
},
);
globalStyle("::-webkit-datetime-edit-year-field", {
  padding:"0",
},
);
globalStyle("::-webkit-file-upload-button", {
  font:"inherit",
  font:"inherit",
  WebkitAppearance:"button",
},
);
globalStyle("::-webkit-inner-spin-button", {
  height:"auto",
},
);
globalStyle("::-webkit-search-decoration", {
  WebkitAppearance:"none",
},
);
globalStyle("::file-selector-button", {
  font:"inherit",
},
);
globalStyle(":root", {
"vars": {
  "--bs-blue":"#0d6efd",
  "--bs-indigo":"#6610f2",
  "--bs-purple":"#6f42c1",
  "--bs-pink":"#d63384",
  "--bs-red":"#dc3545",
  "--bs-orange":"#fd7e14",
  "--bs-yellow":"#ffc107",
  "--bs-green":"#198754",
  "--bs-teal":"#20c997",
  "--bs-cyan":"#0dcaf0",
  "--bs-white":"#fff",
  "--bs-gray":"#6c757d",
  "--bs-gray-dark":"#343a40",
  "--bs-gray-100":"#f8f9fa",
  "--bs-gray-200":"#e9ecef",
  "--bs-gray-300":"#dee2e6",
  "--bs-gray-400":"#ced4da",
  "--bs-gray-500":"#adb5bd",
  "--bs-gray-600":"#6c757d",
  "--bs-gray-700":"#495057",
  "--bs-gray-800":"#343a40",
  "--bs-gray-900":"#212529",
  "--bs-primary":"#0d6efd",
  "--bs-secondary":"#6c757d",
  "--bs-success":"#198754",
  "--bs-info":"#0dcaf0",
  "--bs-warning":"#ffc107",
  "--bs-danger":"#dc3545",
  "--bs-light":"#f8f9fa",
  "--bs-dark":"#212529",
  "--bs-primary-rgb":"13 ,   110 ,   253",
  "--bs-secondary-rgb":"108 ,   117 ,   125",
  "--bs-success-rgb":"25 ,   135 ,   84",
  "--bs-info-rgb":"13 ,   202 ,   240",
  "--bs-warning-rgb":"255 ,   193 ,   7",
  "--bs-danger-rgb":"220 ,   53 ,   69",
  "--bs-light-rgb":"248 ,   249 ,   250",
  "--bs-dark-rgb":"33 ,   37 ,   41",
  "--bs-white-rgb":"255 ,   255 ,   255",
  "--bs-black-rgb":"0 ,   0 ,   0",
  "--bs-body-color-rgb":"33 ,   37 ,   41",
  "--bs-body-bg-rgb":"255 ,   255 ,   255",
  "--bs-font-sans-serif":"system-ui ,   -apple-system ,   Segoe UI ,   Roboto ,   Helvetica Neue ,   Arial ,   Noto Sans ,   Liberation Sans ,   sans-serif ,   Apple Color Emoji ,   Segoe UI Emoji ,   Segoe UI Symbol ,   Noto Color Emoji",
  "--bs-font-monospace":"SFMono-Regular ,   Menlo ,   Monaco ,   Consolas ,   Liberation Mono ,   Courier New ,   monospace",
  "--bs-gradient":"linear-gradient 180deg ,   rgba 255 ,   255 ,   255 ,   0.15 ) ,   rgba 255 ,   255 ,   255 ,   0 ) )",
  "--bs-body-font-family":"var --bs-font-sans-serif )",
  "--bs-body-font-size":"1rem",
  "--bs-body-font-weight":"400",
  "--bs-body-line-height":"1.5",
  "--bs-body-color":"#212529",
  "--bs-body-bg":"#fff",
},
"@media": {
"(prefers-reduced-motion: no-preference)": {
  scrollBehavior:"smooth",
},
},
},
);
globalStyle("[hidden]", {
  display:"none",
},
);
globalStyle("[list]::-webkit-calendar-picker-indicator", {
  display:"none",
},
);
globalStyle("[role='button']", {
  cursor:"pointer",
},
);
globalStyle("[type='button']", {
  WebkitAppearance:"button",
},
);
globalStyle("[type='button']:not(:disabled)", {
  cursor:"pointer",
},
);
globalStyle("[type='reset']", {
  WebkitAppearance:"button",
},
);
globalStyle("[type='reset']:not(:disabled)", {
  cursor:"pointer",
},
);
globalStyle("[type='search']", {
  outlineOffset:"-2px",
  WebkitAppearance:"textfield",
},
);
globalStyle("[type='submit']", {
  WebkitAppearance:"button",
},
);
globalStyle("[type='submit']:not(:disabled)", {
  cursor:"pointer",
},
);
globalStyle("a", {
  color:"0d6efd",
  textDecoration:"underline",
},
);
globalStyle("a:hover", {
  color:"0a58ca",
},
);
globalStyle("a:not([href]):not([class])", {
  color:"inherit",
  textDecoration:"none",
},
);
globalStyle("a:not([href]):not([class]):hover", {
  color:"inherit",
  textDecoration:"none",
},
);
globalStyle("a>code", {
  color:"inherit",
},
);
globalStyle("abbr[data-bs-original-title]", {
  WebkitTextDecoration:"underline dotted",
  textDecoration:"underline dotted",
  cursor:"help",
  WebkitTextDecorationSkipInk:"none",
  textDecorationSkipInk:"none",
},
);
globalStyle("abbr[title]", {
  WebkitTextDecoration:"underline dotted",
  textDecoration:"underline dotted",
  cursor:"help",
  WebkitTextDecorationSkipInk:"none",
  textDecorationSkipInk:"none",
},
);
globalStyle("address", {
  marginBottom:"1rem",
  fontStyle:"normal",
  lineHeight:"inherit",
},
);
globalStyle("b", {
  fontWeight:"bolder",
},
);
globalStyle("blockquote", {
  margin:"0 0 1rem",
},
);
globalStyle("body", {
  margin:"0",
  fontFamily:"var(--bs-body-font-family)",
  fontSize:"var(--bs-body-font-size)",
  fontWeight:"var(--bs-body-font-weight)",
  lineHeight:"var(--bs-body-line-height)",
  color:"var(--bs-body-color)",
  textAlign:"var(--bs-body-text-align)",
  backgroundColor:"var(--bs-body-bg)",
  WebkitTextSizeAdjust:"100%",
  WebkitTapHighlightColor:"rgba(0,0,0,0)",
},
);
globalStyle("button", {
  borderRadius:"0",
  margin:"0",
  fontFamily:"inherit",
  fontSize:"inherit",
  lineHeight:"inherit",
  textTransform:"none",
  WebkitAppearance:"button",
},
);
globalStyle("button:focus:not(:focus-visible)", {
  outline:"0",
},
);
globalStyle("button:not(:disabled)", {
  cursor:"pointer",
},
);
globalStyle("caption", {
  paddingTop:"0.5rem",
  paddingBottom:"0.5rem",
  color:"6c757d",
  textAlign:"left",
},
);
globalStyle("cardhr", {
  marginRight:"0",
  marginLeft:"0",
},
);
globalStyle("code", {
  fontFamily:"var(--bs-font-monospace)",
  fontSize:"1em",
  direction:"ltr",
  unicodeBidi:"bidi-override",
  fontSize:"0.875em",
  color:"d63384",
  wordWrap:"break-word",
},
);
globalStyle("dd", {
  marginBottom:"0.5rem",
  marginLeft:"0",
},
);
globalStyle("dl", {
  marginTop:"0",
  marginBottom:"1rem",
},
);
globalStyle("dt", {
  fontWeight:"700",
},
);
globalStyle("fieldset", {
  minWidth:"0",
  padding:"0",
  margin:"0",
  border:"0",
},
);
globalStyle("fieldset:disabled ", {
  pointerEvents:"none",
  opacity:"0.65",
},
);
globalStyle("figure", {
  margin:"0 0 1rem",
},
);
globalStyle("formFloatinglabel", {
  position:"absolute",
  top:"0",
  left:"0",
  height:"100%",
  padding:"1rem 0.75rem",
  pointerEvents:"none",
  border:"1px solid transparent",
  transformOrigin:"0 0",
  transition:"opacity 0.1s ease-in-out , transform 0.1s ease-in-out",
"selectors": {
"&:not(:-moz-placeholder-shown)": {
  opacity:"0.65",
  transform:"scale(0.85) translateY(-0.5rem) translateX(0.15rem)",
},
},
":focus": {
  opacity:"0.65",
  transform:"scale(0.85) translateY(-0.5rem) translateX(0.15rem)",
},
"selectors": {
"&:not(:placeholder-shown)": {
  opacity:"0.65",
  transform:"scale(0.85) translateY(-0.5rem) translateX(0.15rem)",
},
},
  opacity:"0.65",
  transform:"scale(0.85) translateY(-0.5rem) translateX(0.15rem)",
"selectors": {
"&:-webkit-autofill": {
  opacity:"0.65",
  transform:"scale(0.85) translateY(-0.5rem) translateX(0.15rem)",
},
},
"@media": {
"(prefers-reduced-motion: reduce)": {
  transition:"none",
},
},
},
);
globalStyle("h1", {
  marginTop:"0",
  marginBottom:"0.5rem",
  fontWeight:"500",
  lineHeight:"1.2",
  fontSize:"calc(1.375rem+1.5vw)",
"@media": {
"(min-width: 1200px)": {
  fontSize:"2.5rem",
},
},
},
);
globalStyle("h2", {
  marginTop:"0",
  marginBottom:"0.5rem",
  fontWeight:"500",
  lineHeight:"1.2",
  fontSize:"calc(1.325rem+0.9vw)",
"@media": {
"(min-width: 1200px)": {
  fontSize:"2rem",
},
},
},
);
globalStyle("h3", {
  marginTop:"0",
  marginBottom:"0.5rem",
  fontWeight:"500",
  lineHeight:"1.2",
  fontSize:"calc(1.3rem+0.6vw)",
"@media": {
"(min-width: 1200px)": {
  fontSize:"1.75rem",
},
},
},
);
globalStyle("h4", {
  marginTop:"0",
  marginBottom:"0.5rem",
  fontWeight:"500",
  lineHeight:"1.2",
  fontSize:"calc(1.275rem+0.3vw)",
"@media": {
"(min-width: 1200px)": {
  fontSize:"1.5rem",
},
},
},
);
globalStyle("h5", {
  marginTop:"0",
  marginBottom:"0.5rem",
  fontWeight:"500",
  lineHeight:"1.2",
  fontSize:"1.25rem",
},
);
globalStyle("h6", {
  marginTop:"0",
  marginBottom:"0.5rem",
  fontWeight:"500",
  lineHeight:"1.2",
  fontSize:"1rem",
},
);
globalStyle("hr", {
  margin:"1rem 0",
  color:"inherit",
  backgroundColor:"currentColor",
  border:"0",
  opacity:"0.25",
},
);
globalStyle("hr:not([size])", {
  height:"1px",
},
);
globalStyle("iframe", {
  border:"0",
},
);
globalStyle("img", {
  verticalAlign:"middle",
},
);
globalStyle("input", {
  margin:"0",
  fontFamily:"inherit",
  fontSize:"inherit",
  lineHeight:"inherit",
},
);
globalStyle("kbd", {
  fontFamily:"var(--bs-font-monospace)",
  fontSize:"1em",
  direction:"ltr",
  unicodeBidi:"bidi-override",
  padding:"0.2rem 0.4rem",
  fontSize:"0.875em",
  color:"fff",
  backgroundColor:"212529",
  borderRadius:"0.2rem",
},
);
globalStyle("kbd kbd", {
  padding:"0",
  fontSize:"1em",
  fontWeight:"700",
},
);
globalStyle("label", {
  display:"inline-block",
},
);
globalStyle("legend", {
  float:"left",
  width:"100%",
  padding:"0",
  marginBottom:"0.5rem",
  fontSize:"calc(1.275rem+0.3vw)",
  lineHeight:"inherit",
"@media": {
"(min-width: 1200px)": {
  fontSize:"1.5rem",
},
},
},
);
globalStyle("legend+*", {
  clear:"left",
},
);
globalStyle("listGroupNumberedli::before", {
  content:"counters(section,.) . ",
  counterIncrement:"section",
},
);
globalStyle("mark", {
  padding:"0.2em",
  backgroundColor:"fcf8e3",
},
);
globalStyle("modalFooter*", {
  margin:"0.25rem",
},
);
globalStyle("navbarDarka", {
  color:"fff",
},
);
globalStyle("navbarDarka:focus", {
  color:"fff",
},
);
globalStyle("navbarDarka:hover", {
  color:"fff",
},
);
globalStyle("navbarLighta", {
  color:"rgba(0,0,0,0.9)",
},
);
globalStyle("navbarLighta:focus", {
  color:"rgba(0,0,0,0.9)",
},
);
globalStyle("navbarLighta:hover", {
  color:"rgba(0,0,0,0.9)",
},
);
globalStyle("ol", {
  paddingLeft:"2rem",
  marginTop:"0",
  marginBottom:"1rem",
},
);
globalStyle("ol ol", {
  marginBottom:"0",
},
);
globalStyle("ol ul", {
  marginBottom:"0",
},
);
globalStyle("optgroup", {
  margin:"0",
  fontFamily:"inherit",
  fontSize:"inherit",
  lineHeight:"inherit",
},
);
globalStyle("output", {
  display:"inline-block",
},
);
globalStyle("p", {
  marginTop:"0",
  marginBottom:"1rem",
},
);
globalStyle("pre", {
  fontFamily:"var(--bs-font-monospace)",
  fontSize:"1em",
  direction:"ltr",
  unicodeBidi:"bidi-override",
  display:"block",
  marginTop:"0",
  marginBottom:"1rem",
  overflow:"auto",
  fontSize:"0.875em",
},
);
globalStyle("pre code", {
  fontSize:"inherit",
  color:"inherit",
  wordBreak:"normal",
},
);
globalStyle("progress", {
  verticalAlign:"baseline",
},
);
globalStyle("ratio*", {
  position:"absolute",
  top:"0",
  left:"0",
  width:"100%",
  height:"100%",
},
);
globalStyle("row*", {
  flexShrink:"0",
  width:"100%",
  maxWidth:"100%",
  paddingRight:"calc(var(--bs-gutter-x)*0.5)",
  paddingLeft:"calc(var(--bs-gutter-x)*0.5)",
  marginTop:"var(--bs-gutter-y)",
},
);
globalStyle("rowCols1*", {
  flex:"0 0 auto",
  width:"100%",
},
);
globalStyle("rowCols2*", {
  flex:"0 0 auto",
  width:"50%",
},
);
globalStyle("rowCols3*", {
  flex:"0 0 auto",
  width:"33.3333333333%",
},
);
globalStyle("rowCols4*", {
  flex:"0 0 auto",
  width:"25%",
},
);
globalStyle("rowCols5*", {
  flex:"0 0 auto",
  width:"20%",
},
);
globalStyle("rowCols6*", {
  flex:"0 0 auto",
  width:"16.6666666667%",
},
);
globalStyle("rowColsAuto*", {
  flex:"0 0 auto",
  width:"auto",
},
);
globalStyle("rowColsLg1*", {
"@media": {
"(min-width: 992px)": {
  flex:"0 0 auto",
  width:"100%",
},
},
},
);
globalStyle("rowColsLg2*", {
"@media": {
"(min-width: 992px)": {
  flex:"0 0 auto",
  width:"50%",
},
},
},
);
globalStyle("rowColsLg3*", {
"@media": {
"(min-width: 992px)": {
  flex:"0 0 auto",
  width:"33.3333333333%",
},
},
},
);
globalStyle("rowColsLg4*", {
"@media": {
"(min-width: 992px)": {
  flex:"0 0 auto",
  width:"25%",
},
},
},
);
globalStyle("rowColsLg5*", {
"@media": {
"(min-width: 992px)": {
  flex:"0 0 auto",
  width:"20%",
},
},
},
);
globalStyle("rowColsLg6*", {
"@media": {
"(min-width: 992px)": {
  flex:"0 0 auto",
  width:"16.6666666667%",
},
},
},
);
globalStyle("rowColsLgAuto*", {
"@media": {
"(min-width: 992px)": {
  flex:"0 0 auto",
  width:"auto",
},
},
},
);
globalStyle("rowColsMd1*", {
"@media": {
"(min-width: 768px)": {
  flex:"0 0 auto",
  width:"100%",
},
},
},
);
globalStyle("rowColsMd2*", {
"@media": {
"(min-width: 768px)": {
  flex:"0 0 auto",
  width:"50%",
},
},
},
);
globalStyle("rowColsMd3*", {
"@media": {
"(min-width: 768px)": {
  flex:"0 0 auto",
  width:"33.3333333333%",
},
},
},
);
globalStyle("rowColsMd4*", {
"@media": {
"(min-width: 768px)": {
  flex:"0 0 auto",
  width:"25%",
},
},
},
);
globalStyle("rowColsMd5*", {
"@media": {
"(min-width: 768px)": {
  flex:"0 0 auto",
  width:"20%",
},
},
},
);
globalStyle("rowColsMd6*", {
"@media": {
"(min-width: 768px)": {
  flex:"0 0 auto",
  width:"16.6666666667%",
},
},
},
);
globalStyle("rowColsMdAuto*", {
"@media": {
"(min-width: 768px)": {
  flex:"0 0 auto",
  width:"auto",
},
},
},
);
globalStyle("rowColsSm1*", {
"@media": {
"(min-width: 576px)": {
  flex:"0 0 auto",
  width:"100%",
},
},
},
);
globalStyle("rowColsSm2*", {
"@media": {
"(min-width: 576px)": {
  flex:"0 0 auto",
  width:"50%",
},
},
},
);
globalStyle("rowColsSm3*", {
"@media": {
"(min-width: 576px)": {
  flex:"0 0 auto",
  width:"33.3333333333%",
},
},
},
);
globalStyle("rowColsSm4*", {
"@media": {
"(min-width: 576px)": {
  flex:"0 0 auto",
  width:"25%",
},
},
},
);
globalStyle("rowColsSm5*", {
"@media": {
"(min-width: 576px)": {
  flex:"0 0 auto",
  width:"20%",
},
},
},
);
globalStyle("rowColsSm6*", {
"@media": {
"(min-width: 576px)": {
  flex:"0 0 auto",
  width:"16.6666666667%",
},
},
},
);
globalStyle("rowColsSmAuto*", {
"@media": {
"(min-width: 576px)": {
  flex:"0 0 auto",
  width:"auto",
},
},
},
);
globalStyle("rowColsXl1*", {
"@media": {
"(min-width: 1200px)": {
  flex:"0 0 auto",
  width:"100%",
},
},
},
);
globalStyle("rowColsXl2*", {
"@media": {
"(min-width: 1200px)": {
  flex:"0 0 auto",
  width:"50%",
},
},
},
);
globalStyle("rowColsXl3*", {
"@media": {
"(min-width: 1200px)": {
  flex:"0 0 auto",
  width:"33.3333333333%",
},
},
},
);
globalStyle("rowColsXl4*", {
"@media": {
"(min-width: 1200px)": {
  flex:"0 0 auto",
  width:"25%",
},
},
},
);
globalStyle("rowColsXl5*", {
"@media": {
"(min-width: 1200px)": {
  flex:"0 0 auto",
  width:"20%",
},
},
},
);
globalStyle("rowColsXl6*", {
"@media": {
"(min-width: 1200px)": {
  flex:"0 0 auto",
  width:"16.6666666667%",
},
},
},
);
globalStyle("rowColsXlAuto*", {
"@media": {
"(min-width: 1200px)": {
  flex:"0 0 auto",
  width:"auto",
},
},
},
);
globalStyle("rowColsXxl1*", {
"@media": {
"(min-width: 1400px)": {
  flex:"0 0 auto",
  width:"100%",
},
},
},
);
globalStyle("rowColsXxl2*", {
"@media": {
"(min-width: 1400px)": {
  flex:"0 0 auto",
  width:"50%",
},
},
},
);
globalStyle("rowColsXxl3*", {
"@media": {
"(min-width: 1400px)": {
  flex:"0 0 auto",
  width:"33.3333333333%",
},
},
},
);
globalStyle("rowColsXxl4*", {
"@media": {
"(min-width: 1400px)": {
  flex:"0 0 auto",
  width:"25%",
},
},
},
);
globalStyle("rowColsXxl5*", {
"@media": {
"(min-width: 1400px)": {
  flex:"0 0 auto",
  width:"20%",
},
},
},
);
globalStyle("rowColsXxl6*", {
"@media": {
"(min-width: 1400px)": {
  flex:"0 0 auto",
  width:"16.6666666667%",
},
},
},
);
globalStyle("rowColsXxlAuto*", {
"@media": {
"(min-width: 1400px)": {
  flex:"0 0 auto",
  width:"auto",
},
},
},
);
globalStyle("samp", {
  fontFamily:"var(--bs-font-monospace)",
  fontSize:"1em",
  direction:"ltr",
  unicodeBidi:"bidi-override",
},
);
globalStyle("select", {
  margin:"0",
  fontFamily:"inherit",
  fontSize:"inherit",
  lineHeight:"inherit",
  textTransform:"none",
  wordWrap:"normal",
},
);
globalStyle("select:disabled", {
  opacity:"1",
},
);
globalStyle("small", {
  fontSize:"0.875em",
},
);
globalStyle("strong", {
  fontWeight:"bolder",
},
);
globalStyle("sub", {
  position:"relative",
  fontSize:"0.75em",
  lineHeight:"0",
  verticalAlign:"baseline",
  bottom:"-0.25em",
},
);
globalStyle("summary", {
  display:"list-item",
  cursor:"pointer",
},
);
globalStyle("sup", {
  position:"relative",
  fontSize:"0.75em",
  lineHeight:"0",
  verticalAlign:"baseline",
  top:"-0.5em",
},
);
globalStyle("svg", {
  verticalAlign:"middle",
},
);
globalStyle("table", {
  captionSide:"bottom",
  borderCollapse:"collapse",
},
);
globalStyle("table*>*", {
"selectors": {
"&:not(caption)": {
  padding:"0.5rem 0.5rem",
  backgroundColor:"var(--bs-table-bg)",
  borderBottomWidth:"1px",
  boxShadow:"inset 0 0 0 9999px var(--bs-table-accent-bg)",
},
},
},
);
globalStyle("tableBordered*", {
"selectors": {
"&:not(caption)": {
  borderWidth:"1px 0",
},
},
},
);
globalStyle("tableBordered*>*", {
"selectors": {
"&:not(caption)": {
  borderWidth:"0 1px",
},
},
},
);
globalStyle("tableBorderless*>*", {
"selectors": {
"&:not(caption)": {
  borderBottomWidth:"0",
},
},
},
);
globalStyle("tableHovertbody>tr:hover>*", {
  color:"var(--bs-table-hover-color)",
"vars": {
  "--bs-table-accent-bg":"var --bs-table-hover-bg )",
},
},
);
globalStyle("tableSm*>*", {
"selectors": {
"&:not(caption)": {
  padding:"0.25rem 0.25rem",
},
},
},
);
globalStyle("tableStripedtbody>tr:nth-of-type(odd)>*", {
  color:"var(--bs-table-striped-color)",
"vars": {
  "--bs-table-accent-bg":"var --bs-table-striped-bg )",
},
},
);
globalStyle("tabletbody", {
  verticalAlign:"inherit",
},
);
globalStyle("tablethead", {
  verticalAlign:"bottom",
},
);
globalStyle("tbody", {
  borderColor:"inherit",
  borderStyle:"solid",
  borderWidth:"0",
},
);
globalStyle("td", {
  borderColor:"inherit",
  borderStyle:"solid",
  borderWidth:"0",
},
);
globalStyle("textarea", {
  margin:"0",
  fontFamily:"inherit",
  fontSize:"inherit",
  lineHeight:"inherit",
  resize:"vertical",
  minHeight:"calc(1.5em+0.75rem+2px)",
  minHeight:"calc(1.5em+0.5rem+2px)",
  minHeight:"calc(1.5em+1rem+2px)",
  paddingRight:"calc(1.5em+0.75rem)",
  backgroundPosition:"top calc(0.375em+0.1875rem) right calc(0.375em+0.1875rem)",
  paddingRight:"calc(1.5em+0.75rem)",
  backgroundPosition:"top calc(0.375em+0.1875rem) right calc(0.375em+0.1875rem)",
},
);
globalStyle("tfoot", {
  borderColor:"inherit",
  borderStyle:"solid",
  borderWidth:"0",
},
);
globalStyle("th", {
  textAlign:"inherit",
  textAlign:"-webkit-match-parent",
  borderColor:"inherit",
  borderStyle:"solid",
  borderWidth:"0",
},
);
globalStyle("thead", {
  borderColor:"inherit",
  borderStyle:"solid",
  borderWidth:"0",
},
);
globalStyle("tr", {
  borderColor:"inherit",
  borderStyle:"solid",
  borderWidth:"0",
},
);
globalStyle("ul", {
  paddingLeft:"2rem",
  marginTop:"0",
  marginBottom:"1rem",
},
);
globalStyle("ul ol", {
  marginBottom:"0",
},
);
globalStyle("ul ul", {
  marginBottom:"0",
},
);
globalStyle("wasValidatedtextarea:invalid", {
  paddingRight:"calc(1.5em+0.75rem)",
  backgroundPosition:"top calc(0.375em+0.1875rem) right calc(0.375em+0.1875rem)",
},
);
globalStyle("wasValidatedtextarea:valid", {
  paddingRight:"calc(1.5em+0.75rem)",
  backgroundPosition:"top calc(0.375em+0.1875rem) right calc(0.375em+0.1875rem)",
},
);
export const accordionBody = style({
  padding:"1rem 1.25rem",
});
export const accordionButton = style({
  position:"relative",
  display:"flex",
  alignItems:"center",
  width:"100%",
  padding:"1rem 1.25rem",
  fontSize:"1rem",
  color:"212529",
  textAlign:"left",
  backgroundColor:"fff",
  border:"0",
  borderRadius:"0",
  overflowAnchor:"none",
  transition:"color 0.15s ease-in-out , background-color 0.15s ease-in-out , border-color 0.15s ease-in-out , box-shadow 0.15s ease-in-out , border-radius 0.15s ease",
"selectors": {
"&:not": {
  color:"0c63e4",
  backgroundColor:"e7f1ff",
  boxShadow:"inset 0 -1px 0 rgba(0,0,0,0.125)",
},
},
"selectors": {
"&:not::after": {
  backgroundImage:"url(data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%230c63e4'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e)",
  transform:"rotate(-180deg)",
},
},
"::after": {
  flexShrink:"0",
  width:"1.25rem",
  height:"1.25rem",
  marginLeft:"auto",
  content:"",
  backgroundImage:"url(data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e)",
  backgroundRepeat:"no-repeat",
  backgroundSize:"1.25rem",
  transition:"transform 0.2s ease-in-out",
},
":hover": {
  zIndex:"2",
},
":focus": {
  zIndex:"3",
  borderColor:"86b7fe",
  outline:"0",
  boxShadow:"0 0 0 0.25rem rgba(13,110,253,0.25)",
},
"@media": {
"(prefers-reduced-motion: reduce)": {
  transition:"none",
},
"(prefers-reduced-motion: reduce)": {
"::after": {
  transition:"none",
},
},
},
});
export const accordionFlush = style({
  borderWidth:"0",
  borderRight:"0",
  borderLeft:"0",
  borderRadius:"0",
":first-child": {
  borderTop:"0",
},
":last-child": {
  borderBottom:"0",
},
  borderRadius:"0",
});
export const accordionHeader = style({
  marginBottom:"0",
});
export const accordionItem = style({
  backgroundColor:"fff",
  border:"1px solid rgba(0,0,0,0.125)",
":first-of-type": {
  borderTopLeftRadius:"0.25rem",
  borderTopRightRadius:"0.25rem",
},
":first-of-type": {
  borderTopLeftRadius:"calc(0.25rem-1px)",
  borderTopRightRadius:"calc(0.25rem-1px)",
},
"selectors": {
"&:not(:first-of-type)": {
  borderTop:"0",
},
},
":last-of-type": {
  borderBottomRightRadius:"0.25rem",
  borderBottomLeftRadius:"0.25rem",
},
":last-of-type": {
  borderBottomRightRadius:"calc(0.25rem-1px)",
  borderBottomLeftRadius:"calc(0.25rem-1px)",
},
":last-of-type": {
  borderBottomRightRadius:"0.25rem",
  borderBottomLeftRadius:"0.25rem",
},
});
export const active = style({
  transform:"translateX(100%)",
  transform:"translateX(-100%)",
});
export const alert = style({
  position:"relative",
  padding:"1rem 1rem",
  marginBottom:"1rem",
  border:"1px solid transparent",
  borderRadius:"0.25rem",
});
export const alertDanger = style({
  color:"842029",
  backgroundColor:"f8d7da",
  borderColor:"f5c2c7",
  color:"6a1a21",
});
export const alertDark = style({
  color:"141619",
  backgroundColor:"d3d3d4",
  borderColor:"bcbebf",
  color:"101214",
});
export const alertDismissible = style({
  paddingRight:"3rem",
  position:"absolute",
  top:"0",
  right:"0",
  zIndex:"2",
  padding:"1.25rem 1rem",
});
export const alertHeading = style({
  color:"inherit",
});
export const alertInfo = style({
  color:"055160",
  backgroundColor:"cff4fc",
  borderColor:"b6effb",
  color:"04414d",
});
export const alertLight = style({
  color:"636464",
  backgroundColor:"fefefe",
  borderColor:"fdfdfe",
  color:"4f5050",
});
export const alertLink = style({
  fontWeight:"700",
});
export const alertPrimary = style({
  color:"084298",
  backgroundColor:"cfe2ff",
  borderColor:"b6d4fe",
  color:"06357a",
});
export const alertSecondary = style({
  color:"41464b",
  backgroundColor:"e2e3e5",
  borderColor:"d3d6d8",
  color:"34383c",
});
export const alertSuccess = style({
  color:"0f5132",
  backgroundColor:"d1e7dd",
  borderColor:"badbcc",
  color:"0c4128",
});
export const alertWarning = style({
  color:"664d03",
  backgroundColor:"fff3cd",
  borderColor:"ffecb5",
  color:"523e02",
});
export const alignBaseline = style({
  verticalAlign:"baseline",
});
export const alignBottom = style({
  verticalAlign:"bottom",
});
export const alignContentAround = style({
  alignContent:"space-around",
});
export const alignContentBetween = style({
  alignContent:"space-between",
});
export const alignContentCenter = style({
  alignContent:"center",
});
export const alignContentEnd = style({
  alignContent:"flex-end",
});
export const alignContentLgAround = style({
"@media": {
"(min-width: 992px)": {
  alignContent:"space-around",
},
},
});
export const alignContentLgBetween = style({
"@media": {
"(min-width: 992px)": {
  alignContent:"space-between",
},
},
});
export const alignContentLgCenter = style({
"@media": {
"(min-width: 992px)": {
  alignContent:"center",
},
},
});
export const alignContentLgEnd = style({
"@media": {
"(min-width: 992px)": {
  alignContent:"flex-end",
},
},
});
export const alignContentLgStart = style({
"@media": {
"(min-width: 992px)": {
  alignContent:"flex-start",
},
},
});
export const alignContentLgStretch = style({
"@media": {
"(min-width: 992px)": {
  alignContent:"stretch",
},
},
});
export const alignContentMdAround = style({
"@media": {
"(min-width: 768px)": {
  alignContent:"space-around",
},
},
});
export const alignContentMdBetween = style({
"@media": {
"(min-width: 768px)": {
  alignContent:"space-between",
},
},
});
export const alignContentMdCenter = style({
"@media": {
"(min-width: 768px)": {
  alignContent:"center",
},
},
});
export const alignContentMdEnd = style({
"@media": {
"(min-width: 768px)": {
  alignContent:"flex-end",
},
},
});
export const alignContentMdStart = style({
"@media": {
"(min-width: 768px)": {
  alignContent:"flex-start",
},
},
});
export const alignContentMdStretch = style({
"@media": {
"(min-width: 768px)": {
  alignContent:"stretch",
},
},
});
export const alignContentSmAround = style({
"@media": {
"(min-width: 576px)": {
  alignContent:"space-around",
},
},
});
export const alignContentSmBetween = style({
"@media": {
"(min-width: 576px)": {
  alignContent:"space-between",
},
},
});
export const alignContentSmCenter = style({
"@media": {
"(min-width: 576px)": {
  alignContent:"center",
},
},
});
export const alignContentSmEnd = style({
"@media": {
"(min-width: 576px)": {
  alignContent:"flex-end",
},
},
});
export const alignContentSmStart = style({
"@media": {
"(min-width: 576px)": {
  alignContent:"flex-start",
},
},
});
export const alignContentSmStretch = style({
"@media": {
"(min-width: 576px)": {
  alignContent:"stretch",
},
},
});
export const alignContentStart = style({
  alignContent:"flex-start",
});
export const alignContentStretch = style({
  alignContent:"stretch",
});
export const alignContentXlAround = style({
"@media": {
"(min-width: 1200px)": {
  alignContent:"space-around",
},
},
});
export const alignContentXlBetween = style({
"@media": {
"(min-width: 1200px)": {
  alignContent:"space-between",
},
},
});
export const alignContentXlCenter = style({
"@media": {
"(min-width: 1200px)": {
  alignContent:"center",
},
},
});
export const alignContentXlEnd = style({
"@media": {
"(min-width: 1200px)": {
  alignContent:"flex-end",
},
},
});
export const alignContentXlStart = style({
"@media": {
"(min-width: 1200px)": {
  alignContent:"flex-start",
},
},
});
export const alignContentXlStretch = style({
"@media": {
"(min-width: 1200px)": {
  alignContent:"stretch",
},
},
});
export const alignContentXxlAround = style({
"@media": {
"(min-width: 1400px)": {
  alignContent:"space-around",
},
},
});
export const alignContentXxlBetween = style({
"@media": {
"(min-width: 1400px)": {
  alignContent:"space-between",
},
},
});
export const alignContentXxlCenter = style({
"@media": {
"(min-width: 1400px)": {
  alignContent:"center",
},
},
});
export const alignContentXxlEnd = style({
"@media": {
"(min-width: 1400px)": {
  alignContent:"flex-end",
},
},
});
export const alignContentXxlStart = style({
"@media": {
"(min-width: 1400px)": {
  alignContent:"flex-start",
},
},
});
export const alignContentXxlStretch = style({
"@media": {
"(min-width: 1400px)": {
  alignContent:"stretch",
},
},
});
export const alignItemsBaseline = style({
  alignItems:"baseline",
});
export const alignItemsCenter = style({
  alignItems:"center",
});
export const alignItemsEnd = style({
  alignItems:"flex-end",
});
export const alignItemsLgBaseline = style({
"@media": {
"(min-width: 992px)": {
  alignItems:"baseline",
},
},
});
export const alignItemsLgCenter = style({
"@media": {
"(min-width: 992px)": {
  alignItems:"center",
},
},
});
export const alignItemsLgEnd = style({
"@media": {
"(min-width: 992px)": {
  alignItems:"flex-end",
},
},
});
export const alignItemsLgStart = style({
"@media": {
"(min-width: 992px)": {
  alignItems:"flex-start",
},
},
});
export const alignItemsLgStretch = style({
"@media": {
"(min-width: 992px)": {
  alignItems:"stretch",
},
},
});
export const alignItemsMdBaseline = style({
"@media": {
"(min-width: 768px)": {
  alignItems:"baseline",
},
},
});
export const alignItemsMdCenter = style({
"@media": {
"(min-width: 768px)": {
  alignItems:"center",
},
},
});
export const alignItemsMdEnd = style({
"@media": {
"(min-width: 768px)": {
  alignItems:"flex-end",
},
},
});
export const alignItemsMdStart = style({
"@media": {
"(min-width: 768px)": {
  alignItems:"flex-start",
},
},
});
export const alignItemsMdStretch = style({
"@media": {
"(min-width: 768px)": {
  alignItems:"stretch",
},
},
});
export const alignItemsSmBaseline = style({
"@media": {
"(min-width: 576px)": {
  alignItems:"baseline",
},
},
});
export const alignItemsSmCenter = style({
"@media": {
"(min-width: 576px)": {
  alignItems:"center",
},
},
});
export const alignItemsSmEnd = style({
"@media": {
"(min-width: 576px)": {
  alignItems:"flex-end",
},
},
});
export const alignItemsSmStart = style({
"@media": {
"(min-width: 576px)": {
  alignItems:"flex-start",
},
},
});
export const alignItemsSmStretch = style({
"@media": {
"(min-width: 576px)": {
  alignItems:"stretch",
},
},
});
export const alignItemsStart = style({
  alignItems:"flex-start",
});
export const alignItemsStretch = style({
  alignItems:"stretch",
});
export const alignItemsXlBaseline = style({
"@media": {
"(min-width: 1200px)": {
  alignItems:"baseline",
},
},
});
export const alignItemsXlCenter = style({
"@media": {
"(min-width: 1200px)": {
  alignItems:"center",
},
},
});
export const alignItemsXlEnd = style({
"@media": {
"(min-width: 1200px)": {
  alignItems:"flex-end",
},
},
});
export const alignItemsXlStart = style({
"@media": {
"(min-width: 1200px)": {
  alignItems:"flex-start",
},
},
});
export const alignItemsXlStretch = style({
"@media": {
"(min-width: 1200px)": {
  alignItems:"stretch",
},
},
});
export const alignItemsXxlBaseline = style({
"@media": {
"(min-width: 1400px)": {
  alignItems:"baseline",
},
},
});
export const alignItemsXxlCenter = style({
"@media": {
"(min-width: 1400px)": {
  alignItems:"center",
},
},
});
export const alignItemsXxlEnd = style({
"@media": {
"(min-width: 1400px)": {
  alignItems:"flex-end",
},
},
});
export const alignItemsXxlStart = style({
"@media": {
"(min-width: 1400px)": {
  alignItems:"flex-start",
},
},
});
export const alignItemsXxlStretch = style({
"@media": {
"(min-width: 1400px)": {
  alignItems:"stretch",
},
},
});
export const alignMiddle = style({
  verticalAlign:"middle",
});
export const alignSelfAuto = style({
  alignSelf:"auto",
});
export const alignSelfBaseline = style({
  alignSelf:"baseline",
});
export const alignSelfCenter = style({
  alignSelf:"center",
});
export const alignSelfEnd = style({
  alignSelf:"flex-end",
});
export const alignSelfLgAuto = style({
"@media": {
"(min-width: 992px)": {
  alignSelf:"auto",
},
},
});
export const alignSelfLgBaseline = style({
"@media": {
"(min-width: 992px)": {
  alignSelf:"baseline",
},
},
});
export const alignSelfLgCenter = style({
"@media": {
"(min-width: 992px)": {
  alignSelf:"center",
},
},
});
export const alignSelfLgEnd = style({
"@media": {
"(min-width: 992px)": {
  alignSelf:"flex-end",
},
},
});
export const alignSelfLgStart = style({
"@media": {
"(min-width: 992px)": {
  alignSelf:"flex-start",
},
},
});
export const alignSelfLgStretch = style({
"@media": {
"(min-width: 992px)": {
  alignSelf:"stretch",
},
},
});
export const alignSelfMdAuto = style({
"@media": {
"(min-width: 768px)": {
  alignSelf:"auto",
},
},
});
export const alignSelfMdBaseline = style({
"@media": {
"(min-width: 768px)": {
  alignSelf:"baseline",
},
},
});
export const alignSelfMdCenter = style({
"@media": {
"(min-width: 768px)": {
  alignSelf:"center",
},
},
});
export const alignSelfMdEnd = style({
"@media": {
"(min-width: 768px)": {
  alignSelf:"flex-end",
},
},
});
export const alignSelfMdStart = style({
"@media": {
"(min-width: 768px)": {
  alignSelf:"flex-start",
},
},
});
export const alignSelfMdStretch = style({
"@media": {
"(min-width: 768px)": {
  alignSelf:"stretch",
},
},
});
export const alignSelfSmAuto = style({
"@media": {
"(min-width: 576px)": {
  alignSelf:"auto",
},
},
});
export const alignSelfSmBaseline = style({
"@media": {
"(min-width: 576px)": {
  alignSelf:"baseline",
},
},
});
export const alignSelfSmCenter = style({
"@media": {
"(min-width: 576px)": {
  alignSelf:"center",
},
},
});
export const alignSelfSmEnd = style({
"@media": {
"(min-width: 576px)": {
  alignSelf:"flex-end",
},
},
});
export const alignSelfSmStart = style({
"@media": {
"(min-width: 576px)": {
  alignSelf:"flex-start",
},
},
});
export const alignSelfSmStretch = style({
"@media": {
"(min-width: 576px)": {
  alignSelf:"stretch",
},
},
});
export const alignSelfStart = style({
  alignSelf:"flex-start",
});
export const alignSelfStretch = style({
  alignSelf:"stretch",
});
export const alignSelfXlAuto = style({
"@media": {
"(min-width: 1200px)": {
  alignSelf:"auto",
},
},
});
export const alignSelfXlBaseline = style({
"@media": {
"(min-width: 1200px)": {
  alignSelf:"baseline",
},
},
});
export const alignSelfXlCenter = style({
"@media": {
"(min-width: 1200px)": {
  alignSelf:"center",
},
},
});
export const alignSelfXlEnd = style({
"@media": {
"(min-width: 1200px)": {
  alignSelf:"flex-end",
},
},
});
export const alignSelfXlStart = style({
"@media": {
"(min-width: 1200px)": {
  alignSelf:"flex-start",
},
},
});
export const alignSelfXlStretch = style({
"@media": {
"(min-width: 1200px)": {
  alignSelf:"stretch",
},
},
});
export const alignSelfXxlAuto = style({
"@media": {
"(min-width: 1400px)": {
  alignSelf:"auto",
},
},
});
export const alignSelfXxlBaseline = style({
"@media": {
"(min-width: 1400px)": {
  alignSelf:"baseline",
},
},
});
export const alignSelfXxlCenter = style({
"@media": {
"(min-width: 1400px)": {
  alignSelf:"center",
},
},
});
export const alignSelfXxlEnd = style({
"@media": {
"(min-width: 1400px)": {
  alignSelf:"flex-end",
},
},
});
export const alignSelfXxlStart = style({
"@media": {
"(min-width: 1400px)": {
  alignSelf:"flex-start",
},
},
});
export const alignSelfXxlStretch = style({
"@media": {
"(min-width: 1400px)": {
  alignSelf:"stretch",
},
},
});
export const alignTextBottom = style({
  verticalAlign:"text-bottom",
});
export const alignTextTop = style({
  verticalAlign:"text-top",
});
export const alignTop = style({
  verticalAlign:"top",
});
export const badge = style({
  display:"inline-block",
  padding:"0.35em 0.65em",
  fontSize:"0.75em",
  fontWeight:"700",
  lineHeight:"1",
  color:"fff",
  textAlign:"center",
  whiteSpace:"nowrap",
  verticalAlign:"baseline",
  borderRadius:"0.25rem",
":empty": {
  display:"none",
},
});
export const bgBlack = style({
  backgroundColor:"rgba(var(--bs-black-rgb),var(--bs-bg-opacity))",
"vars": {
  "--bs-bg-opacity":"1",
},
});
export const bgBody = style({
  backgroundColor:"rgba(var(--bs-body-bg-rgb),var(--bs-bg-opacity))",
"vars": {
  "--bs-bg-opacity":"1",
},
});
export const bgDanger = style({
  backgroundColor:"rgba(var(--bs-danger-rgb),var(--bs-bg-opacity))",
"vars": {
  "--bs-bg-opacity":"1",
},
});
export const bgDark = style({
  backgroundColor:"rgba(var(--bs-dark-rgb),var(--bs-bg-opacity))",
"vars": {
  "--bs-bg-opacity":"1",
},
});
export const bgGradient = style({
  backgroundImage:"var(--bs-gradient)",
});
export const bgInfo = style({
  backgroundColor:"rgba(var(--bs-info-rgb),var(--bs-bg-opacity))",
"vars": {
  "--bs-bg-opacity":"1",
},
});
export const bgLight = style({
  backgroundColor:"rgba(var(--bs-light-rgb),var(--bs-bg-opacity))",
"vars": {
  "--bs-bg-opacity":"1",
},
});
export const bgOpacity10 = style({
"vars": {
  "--bs-bg-opacity":"0.1",
},
});
export const bgOpacity100 = style({
"vars": {
  "--bs-bg-opacity":"1",
},
});
export const bgOpacity25 = style({
"vars": {
  "--bs-bg-opacity":"0.25",
},
});
export const bgOpacity50 = style({
"vars": {
  "--bs-bg-opacity":"0.5",
},
});
export const bgOpacity75 = style({
"vars": {
  "--bs-bg-opacity":"0.75",
},
});
export const bgPrimary = style({
  backgroundColor:"rgba(var(--bs-primary-rgb),var(--bs-bg-opacity))",
"vars": {
  "--bs-bg-opacity":"1",
},
});
export const bgSecondary = style({
  backgroundColor:"rgba(var(--bs-secondary-rgb),var(--bs-bg-opacity))",
"vars": {
  "--bs-bg-opacity":"1",
},
});
export const bgSuccess = style({
  backgroundColor:"rgba(var(--bs-success-rgb),var(--bs-bg-opacity))",
"vars": {
  "--bs-bg-opacity":"1",
},
});
export const bgTransparent = style({
  backgroundColor:"transparent",
"vars": {
  "--bs-bg-opacity":"1",
},
});
export const bgWarning = style({
  backgroundColor:"rgba(var(--bs-warning-rgb),var(--bs-bg-opacity))",
"vars": {
  "--bs-bg-opacity":"1",
},
});
export const bgWhite = style({
  backgroundColor:"rgba(var(--bs-white-rgb),var(--bs-bg-opacity))",
"vars": {
  "--bs-bg-opacity":"1",
},
});
export const blockquote = style({
  marginBottom:"1rem",
  fontSize:"1.25rem",
":last-child": {
  marginBottom:"0",
},
});
export const blockquoteFooter = style({
  marginTop:"-1rem",
  marginBottom:"1rem",
  fontSize:"0.875em",
  color:"6c757d",
"::before": {
  content:"— ",
},
});
export const border = style({
  border:"1px solid dee2e6",
});
export const border0 = style({
  border:"0",
});
export const border1 = style({
  borderWidth:"1px",
});
export const border2 = style({
  borderWidth:"2px",
});
export const border3 = style({
  borderWidth:"3px",
});
export const border4 = style({
  borderWidth:"4px",
});
export const border5 = style({
  borderWidth:"5px",
});
export const borderBottom = style({
  borderBottom:"1px solid dee2e6",
});
export const borderBottom0 = style({
  borderBottom:"0",
});
export const borderDanger = style({
  borderColor:"dc3545",
});
export const borderDark = style({
  borderColor:"212529",
});
export const borderEnd = style({
  borderRight:"1px solid dee2e6",
});
export const borderEnd0 = style({
  borderRight:"0",
});
export const borderInfo = style({
  borderColor:"0dcaf0",
});
export const borderLight = style({
  borderColor:"f8f9fa",
});
export const borderPrimary = style({
  borderColor:"0d6efd",
});
export const borderSecondary = style({
  borderColor:"6c757d",
});
export const borderStart = style({
  borderLeft:"1px solid dee2e6",
});
export const borderStart0 = style({
  borderLeft:"0",
});
export const borderSuccess = style({
  borderColor:"198754",
});
export const borderTop = style({
  borderTop:"1px solid dee2e6",
});
export const borderTop0 = style({
  borderTop:"0",
});
export const borderWarning = style({
  borderColor:"ffc107",
});
export const borderWhite = style({
  borderColor:"fff",
});
export const bottom0 = style({
  bottom:"0",
});
export const bottom100 = style({
  bottom:"100%",
});
export const bottom50 = style({
  bottom:"50%",
});
export const breadcrumb = style({
  display:"flex",
  flexWrap:"wrap",
  padding:"0 0",
  marginBottom:"1rem",
  listStyle:"none",
});
export const breadcrumbItem = style({
  paddingLeft:"0.5rem",
"::before": {
  float:"left",
  paddingRight:"0.5rem",
  color:"6c757d",
  content:"var(--bs-breadcrumb-divider,/)",
},
  color:"6c757d",
});
export const bsPopoverAuto = style({
"selectors": {
"&[data-popper-placement^='top']": {
  bottom:"calc(-0.5rem-1px)",
},
},
"selectors": {
"&[data-popper-placement^='top']::before": {
  bottom:"0",
  borderWidth:"0.5rem 0.5rem 0",
  borderTopColor:"rgba(0,0,0,0.25)",
},
},
"selectors": {
"&[data-popper-placement^='top']::after": {
  bottom:"1px",
  borderWidth:"0.5rem 0.5rem 0",
  borderTopColor:"fff",
},
},
"selectors": {
"&[data-popper-placement^='right']": {
  left:"calc(-0.5rem-1px)",
  width:"0.5rem",
  height:"1rem",
},
},
"selectors": {
"&[data-popper-placement^='right']::before": {
  left:"0",
  borderWidth:"0.5rem 0.5rem 0.5rem 0",
  borderRightColor:"rgba(0,0,0,0.25)",
},
},
"selectors": {
"&[data-popper-placement^='right']::after": {
  left:"1px",
  borderWidth:"0.5rem 0.5rem 0.5rem 0",
  borderRightColor:"fff",
},
},
"selectors": {
"&[data-popper-placement^='bottom']": {
  top:"calc(-0.5rem-1px)",
},
},
"selectors": {
"&[data-popper-placement^='bottom']::before": {
  top:"0",
  borderWidth:"0 0.5rem 0.5rem 0.5rem",
  borderBottomColor:"rgba(0,0,0,0.25)",
},
},
"selectors": {
"&[data-popper-placement^='bottom']::after": {
  top:"1px",
  borderWidth:"0 0.5rem 0.5rem 0.5rem",
  borderBottomColor:"fff",
},
},
"selectors": {
"&[data-popper-placement^='bottom']::before": {
  position:"absolute",
  top:"0",
  left:"50%",
  display:"block",
  width:"1rem",
  marginLeft:"-0.5rem",
  content:"",
  borderBottom:"1px solid f0f0f0",
},
},
"selectors": {
"&[data-popper-placement^='left']": {
  right:"calc(-0.5rem-1px)",
  width:"0.5rem",
  height:"1rem",
},
},
"selectors": {
"&[data-popper-placement^='left']::before": {
  right:"0",
  borderWidth:"0.5rem 0 0.5rem 0.5rem",
  borderLeftColor:"rgba(0,0,0,0.25)",
},
},
"selectors": {
"&[data-popper-placement^='left']::after": {
  right:"1px",
  borderWidth:"0.5rem 0 0.5rem 0.5rem",
  borderLeftColor:"fff",
},
},
});
export const bsPopoverBottom = style({
  top:"calc(-0.5rem-1px)",
"::before": {
  top:"0",
  borderWidth:"0 0.5rem 0.5rem 0.5rem",
  borderBottomColor:"rgba(0,0,0,0.25)",
},
"::after": {
  top:"1px",
  borderWidth:"0 0.5rem 0.5rem 0.5rem",
  borderBottomColor:"fff",
},
"::before": {
  position:"absolute",
  top:"0",
  left:"50%",
  display:"block",
  width:"1rem",
  marginLeft:"-0.5rem",
  content:"",
  borderBottom:"1px solid f0f0f0",
},
});
export const bsPopoverEnd = style({
  left:"calc(-0.5rem-1px)",
  width:"0.5rem",
  height:"1rem",
"::before": {
  left:"0",
  borderWidth:"0.5rem 0.5rem 0.5rem 0",
  borderRightColor:"rgba(0,0,0,0.25)",
},
"::after": {
  left:"1px",
  borderWidth:"0.5rem 0.5rem 0.5rem 0",
  borderRightColor:"fff",
},
});
export const bsPopoverStart = style({
  right:"calc(-0.5rem-1px)",
  width:"0.5rem",
  height:"1rem",
"::before": {
  right:"0",
  borderWidth:"0.5rem 0 0.5rem 0.5rem",
  borderLeftColor:"rgba(0,0,0,0.25)",
},
"::after": {
  right:"1px",
  borderWidth:"0.5rem 0 0.5rem 0.5rem",
  borderLeftColor:"fff",
},
});
export const bsPopoverTop = style({
  bottom:"calc(-0.5rem-1px)",
"::before": {
  bottom:"0",
  borderWidth:"0.5rem 0.5rem 0",
  borderTopColor:"rgba(0,0,0,0.25)",
},
"::after": {
  bottom:"1px",
  borderWidth:"0.5rem 0.5rem 0",
  borderTopColor:"fff",
},
});
export const bsTooltipAuto = style({
"selectors": {
"&[data-popper-placement^='top']": {
  padding:"0.4rem 0",
},
},
"selectors": {
"&[data-popper-placement^='top']": {
  bottom:"0",
},
},
"selectors": {
"&[data-popper-placement^='top']::before": {
  top:"-1px",
  borderWidth:"0.4rem 0.4rem 0",
  borderTopColor:"000",
},
},
"selectors": {
"&[data-popper-placement^='right']": {
  padding:"0 0.4rem",
},
},
"selectors": {
"&[data-popper-placement^='right']": {
  left:"0",
  width:"0.4rem",
  height:"0.8rem",
},
},
"selectors": {
"&[data-popper-placement^='right']::before": {
  right:"-1px",
  borderWidth:"0.4rem 0.4rem 0.4rem 0",
  borderRightColor:"000",
},
},
"selectors": {
"&[data-popper-placement^='bottom']": {
  padding:"0.4rem 0",
},
},
"selectors": {
"&[data-popper-placement^='bottom']": {
  top:"0",
},
},
"selectors": {
"&[data-popper-placement^='bottom']::before": {
  bottom:"-1px",
  borderWidth:"0 0.4rem 0.4rem",
  borderBottomColor:"000",
},
},
"selectors": {
"&[data-popper-placement^='left']": {
  padding:"0 0.4rem",
},
},
"selectors": {
"&[data-popper-placement^='left']": {
  right:"0",
  width:"0.4rem",
  height:"0.8rem",
},
},
"selectors": {
"&[data-popper-placement^='left']::before": {
  left:"-1px",
  borderWidth:"0.4rem 0 0.4rem 0.4rem",
  borderLeftColor:"000",
},
},
});
export const bsTooltipBottom = style({
  padding:"0.4rem 0",
  top:"0",
"::before": {
  bottom:"-1px",
  borderWidth:"0 0.4rem 0.4rem",
  borderBottomColor:"000",
},
});
export const bsTooltipEnd = style({
  padding:"0 0.4rem",
  left:"0",
  width:"0.4rem",
  height:"0.8rem",
"::before": {
  right:"-1px",
  borderWidth:"0.4rem 0.4rem 0.4rem 0",
  borderRightColor:"000",
},
});
export const bsTooltipStart = style({
  padding:"0 0.4rem",
  right:"0",
  width:"0.4rem",
  height:"0.8rem",
"::before": {
  left:"-1px",
  borderWidth:"0.4rem 0 0.4rem 0.4rem",
  borderLeftColor:"000",
},
});
export const bsTooltipTop = style({
  padding:"0.4rem 0",
  bottom:"0",
"::before": {
  top:"-1px",
  borderWidth:"0.4rem 0.4rem 0",
  borderTopColor:"000",
},
});
export const btn = style({
  display:"inline-block",
  fontWeight:"400",
  lineHeight:"1.5",
  color:"212529",
  textAlign:"center",
  textDecoration:"none",
  verticalAlign:"middle",
  cursor:"pointer",
  WebkitUserSelect:"none",
  MozUserSelect:"none",
  userSelect:"none",
  backgroundColor:"transparent",
  border:"1px solid transparent",
  padding:"0.375rem 0.75rem",
  fontSize:"1rem",
  borderRadius:"0.25rem",
  transition:"color 0.15s ease-in-out , background-color 0.15s ease-in-out , border-color 0.15s ease-in-out , box-shadow 0.15s ease-in-out",
":hover": {
  color:"212529",
},
":focus": {
  outline:"0",
  boxShadow:"0 0 0 0.25rem rgba(13,110,253,0.25)",
},
":disabled": {
  pointerEvents:"none",
  opacity:"0.65",
},
  pointerEvents:"none",
  opacity:"0.65",
  position:"relative",
  top:"-1px",
"@media": {
"(prefers-reduced-motion: reduce)": {
  transition:"none",
},
},
});
export const btnCheck = style({
  position:"absolute",
  clip:"rect(0,0,0,0)",
  pointerEvents:"none",
"selectors": {
"&[disabled]": {
  pointerEvents:"none",
  filter:"none",
  opacity:"0.65",
},
},
":disabled": {
  pointerEvents:"none",
  filter:"none",
  opacity:"0.65",
},
":focus": {
  outline:"0",
  boxShadow:"0 0 0 0.25rem rgba(13,110,253,0.25)",
},
":focus": {
  color:"fff",
  backgroundColor:"0b5ed7",
  borderColor:"0a58ca",
  boxShadow:"0 0 0 0.25rem rgba(49,132,253,0.5)",
},
":checked": {
  color:"fff",
  backgroundColor:"0a58ca",
  borderColor:"0a53be",
},
":active": {
  color:"fff",
  backgroundColor:"0a58ca",
  borderColor:"0a53be",
},
":checked:focus": {
  boxShadow:"0 0 0 0.25rem rgba(49,132,253,0.5)",
},
":active:focus": {
  boxShadow:"0 0 0 0.25rem rgba(49,132,253,0.5)",
},
":focus": {
  color:"fff",
  backgroundColor:"5c636a",
  borderColor:"565e64",
  boxShadow:"0 0 0 0.25rem rgba(130,138,145,0.5)",
},
":checked": {
  color:"fff",
  backgroundColor:"565e64",
  borderColor:"51585e",
},
":active": {
  color:"fff",
  backgroundColor:"565e64",
  borderColor:"51585e",
},
":checked:focus": {
  boxShadow:"0 0 0 0.25rem rgba(130,138,145,0.5)",
},
":active:focus": {
  boxShadow:"0 0 0 0.25rem rgba(130,138,145,0.5)",
},
":focus": {
  color:"fff",
  backgroundColor:"157347",
  borderColor:"146c43",
  boxShadow:"0 0 0 0.25rem rgba(60,153,110,0.5)",
},
":checked": {
  color:"fff",
  backgroundColor:"146c43",
  borderColor:"13653f",
},
":active": {
  color:"fff",
  backgroundColor:"146c43",
  borderColor:"13653f",
},
":checked:focus": {
  boxShadow:"0 0 0 0.25rem rgba(60,153,110,0.5)",
},
":active:focus": {
  boxShadow:"0 0 0 0.25rem rgba(60,153,110,0.5)",
},
":focus": {
  color:"000",
  backgroundColor:"31d2f2",
  borderColor:"25cff2",
  boxShadow:"0 0 0 0.25rem rgba(11,172,204,0.5)",
},
":checked": {
  color:"000",
  backgroundColor:"3dd5f3",
  borderColor:"25cff2",
},
":active": {
  color:"000",
  backgroundColor:"3dd5f3",
  borderColor:"25cff2",
},
":checked:focus": {
  boxShadow:"0 0 0 0.25rem rgba(11,172,204,0.5)",
},
":active:focus": {
  boxShadow:"0 0 0 0.25rem rgba(11,172,204,0.5)",
},
":focus": {
  color:"000",
  backgroundColor:"ffca2c",
  borderColor:"ffc720",
  boxShadow:"0 0 0 0.25rem rgba(217,164,6,0.5)",
},
":checked": {
  color:"000",
  backgroundColor:"ffcd39",
  borderColor:"ffc720",
},
":active": {
  color:"000",
  backgroundColor:"ffcd39",
  borderColor:"ffc720",
},
":checked:focus": {
  boxShadow:"0 0 0 0.25rem rgba(217,164,6,0.5)",
},
":active:focus": {
  boxShadow:"0 0 0 0.25rem rgba(217,164,6,0.5)",
},
":focus": {
  color:"fff",
  backgroundColor:"bb2d3b",
  borderColor:"b02a37",
  boxShadow:"0 0 0 0.25rem rgba(225,83,97,0.5)",
},
":checked": {
  color:"fff",
  backgroundColor:"b02a37",
  borderColor:"a52834",
},
":active": {
  color:"fff",
  backgroundColor:"b02a37",
  borderColor:"a52834",
},
":checked:focus": {
  boxShadow:"0 0 0 0.25rem rgba(225,83,97,0.5)",
},
":active:focus": {
  boxShadow:"0 0 0 0.25rem rgba(225,83,97,0.5)",
},
":focus": {
  color:"000",
  backgroundColor:"f9fafb",
  borderColor:"f9fafb",
  boxShadow:"0 0 0 0.25rem rgba(211,212,213,0.5)",
},
":checked": {
  color:"000",
  backgroundColor:"f9fafb",
  borderColor:"f9fafb",
},
":active": {
  color:"000",
  backgroundColor:"f9fafb",
  borderColor:"f9fafb",
},
":checked:focus": {
  boxShadow:"0 0 0 0.25rem rgba(211,212,213,0.5)",
},
":active:focus": {
  boxShadow:"0 0 0 0.25rem rgba(211,212,213,0.5)",
},
":focus": {
  color:"fff",
  backgroundColor:"1c1f23",
  borderColor:"1a1e21",
  boxShadow:"0 0 0 0.25rem rgba(66,70,73,0.5)",
},
":checked": {
  color:"fff",
  backgroundColor:"1a1e21",
  borderColor:"191c1f",
},
":active": {
  color:"fff",
  backgroundColor:"1a1e21",
  borderColor:"191c1f",
},
":checked:focus": {
  boxShadow:"0 0 0 0.25rem rgba(66,70,73,0.5)",
},
":active:focus": {
  boxShadow:"0 0 0 0.25rem rgba(66,70,73,0.5)",
},
":focus": {
  boxShadow:"0 0 0 0.25rem rgba(13,110,253,0.5)",
},
":checked": {
  color:"fff",
  backgroundColor:"0d6efd",
  borderColor:"0d6efd",
},
":active": {
  color:"fff",
  backgroundColor:"0d6efd",
  borderColor:"0d6efd",
},
":checked:focus": {
  boxShadow:"0 0 0 0.25rem rgba(13,110,253,0.5)",
},
":active:focus": {
  boxShadow:"0 0 0 0.25rem rgba(13,110,253,0.5)",
},
":focus": {
  boxShadow:"0 0 0 0.25rem rgba(108,117,125,0.5)",
},
":checked": {
  color:"fff",
  backgroundColor:"6c757d",
  borderColor:"6c757d",
},
":active": {
  color:"fff",
  backgroundColor:"6c757d",
  borderColor:"6c757d",
},
":checked:focus": {
  boxShadow:"0 0 0 0.25rem rgba(108,117,125,0.5)",
},
":active:focus": {
  boxShadow:"0 0 0 0.25rem rgba(108,117,125,0.5)",
},
":focus": {
  boxShadow:"0 0 0 0.25rem rgba(25,135,84,0.5)",
},
":checked": {
  color:"fff",
  backgroundColor:"198754",
  borderColor:"198754",
},
":active": {
  color:"fff",
  backgroundColor:"198754",
  borderColor:"198754",
},
":checked:focus": {
  boxShadow:"0 0 0 0.25rem rgba(25,135,84,0.5)",
},
":active:focus": {
  boxShadow:"0 0 0 0.25rem rgba(25,135,84,0.5)",
},
":focus": {
  boxShadow:"0 0 0 0.25rem rgba(13,202,240,0.5)",
},
":checked": {
  color:"000",
  backgroundColor:"0dcaf0",
  borderColor:"0dcaf0",
},
":active": {
  color:"000",
  backgroundColor:"0dcaf0",
  borderColor:"0dcaf0",
},
":checked:focus": {
  boxShadow:"0 0 0 0.25rem rgba(13,202,240,0.5)",
},
":active:focus": {
  boxShadow:"0 0 0 0.25rem rgba(13,202,240,0.5)",
},
":focus": {
  boxShadow:"0 0 0 0.25rem rgba(255,193,7,0.5)",
},
":checked": {
  color:"000",
  backgroundColor:"ffc107",
  borderColor:"ffc107",
},
":active": {
  color:"000",
  backgroundColor:"ffc107",
  borderColor:"ffc107",
},
":checked:focus": {
  boxShadow:"0 0 0 0.25rem rgba(255,193,7,0.5)",
},
":active:focus": {
  boxShadow:"0 0 0 0.25rem rgba(255,193,7,0.5)",
},
":focus": {
  boxShadow:"0 0 0 0.25rem rgba(220,53,69,0.5)",
},
":checked": {
  color:"fff",
  backgroundColor:"dc3545",
  borderColor:"dc3545",
},
":active": {
  color:"fff",
  backgroundColor:"dc3545",
  borderColor:"dc3545",
},
":checked:focus": {
  boxShadow:"0 0 0 0.25rem rgba(220,53,69,0.5)",
},
":active:focus": {
  boxShadow:"0 0 0 0.25rem rgba(220,53,69,0.5)",
},
":focus": {
  boxShadow:"0 0 0 0.25rem rgba(248,249,250,0.5)",
},
":checked": {
  color:"000",
  backgroundColor:"f8f9fa",
  borderColor:"f8f9fa",
},
":active": {
  color:"000",
  backgroundColor:"f8f9fa",
  borderColor:"f8f9fa",
},
":checked:focus": {
  boxShadow:"0 0 0 0.25rem rgba(248,249,250,0.5)",
},
":active:focus": {
  boxShadow:"0 0 0 0.25rem rgba(248,249,250,0.5)",
},
":focus": {
  boxShadow:"0 0 0 0.25rem rgba(33,37,41,0.5)",
},
":checked": {
  color:"fff",
  backgroundColor:"212529",
  borderColor:"212529",
},
":active": {
  color:"fff",
  backgroundColor:"212529",
  borderColor:"212529",
},
":checked:focus": {
  boxShadow:"0 0 0 0.25rem rgba(33,37,41,0.5)",
},
":active:focus": {
  boxShadow:"0 0 0 0.25rem rgba(33,37,41,0.5)",
},
});
export const btnClose = style({
  boxSizing:"content-box",
  width:"1em",
  height:"1em",
  padding:"0.25em 0.25em",
  color:"000",
  background:"transparent url(data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/%3e%3c/svg%3e) center / 1em auto no-repeat",
  border:"0",
  borderRadius:"0.25rem",
  opacity:"0.5",
":hover": {
  color:"000",
  textDecoration:"none",
  opacity:"0.75",
},
":focus": {
  outline:"0",
  boxShadow:"0 0 0 0.25rem rgba(13,110,253,0.25)",
  opacity:"1",
},
":disabled": {
  pointerEvents:"none",
  WebkitUserSelect:"none",
  MozUserSelect:"none",
  userSelect:"none",
  opacity:"0.25",
},
  pointerEvents:"none",
  WebkitUserSelect:"none",
  MozUserSelect:"none",
  userSelect:"none",
  opacity:"0.25",
});
export const btnCloseWhite = style({
  filter:"invert(1) grayscale(100%) brightness(200%)",
});
export const btnDanger = style({
  color:"fff",
  backgroundColor:"dc3545",
  borderColor:"dc3545",
":hover": {
  color:"fff",
  backgroundColor:"bb2d3b",
  borderColor:"b02a37",
},
":focus": {
  color:"fff",
  backgroundColor:"bb2d3b",
  borderColor:"b02a37",
  boxShadow:"0 0 0 0.25rem rgba(225,83,97,0.5)",
},
":active": {
  color:"fff",
  backgroundColor:"b02a37",
  borderColor:"a52834",
},
  color:"fff",
  backgroundColor:"b02a37",
  borderColor:"a52834",
":active:focus": {
  boxShadow:"0 0 0 0.25rem rgba(225,83,97,0.5)",
},
":focus": {
  boxShadow:"0 0 0 0.25rem rgba(225,83,97,0.5)",
},
":disabled": {
  color:"fff",
  backgroundColor:"dc3545",
  borderColor:"dc3545",
},
  color:"fff",
  backgroundColor:"dc3545",
  borderColor:"dc3545",
});
export const btnDark = style({
  color:"fff",
  backgroundColor:"212529",
  borderColor:"212529",
":hover": {
  color:"fff",
  backgroundColor:"1c1f23",
  borderColor:"1a1e21",
},
":focus": {
  color:"fff",
  backgroundColor:"1c1f23",
  borderColor:"1a1e21",
  boxShadow:"0 0 0 0.25rem rgba(66,70,73,0.5)",
},
":active": {
  color:"fff",
  backgroundColor:"1a1e21",
  borderColor:"191c1f",
},
  color:"fff",
  backgroundColor:"1a1e21",
  borderColor:"191c1f",
":active:focus": {
  boxShadow:"0 0 0 0.25rem rgba(66,70,73,0.5)",
},
":focus": {
  boxShadow:"0 0 0 0.25rem rgba(66,70,73,0.5)",
},
":disabled": {
  color:"fff",
  backgroundColor:"212529",
  borderColor:"212529",
},
  color:"fff",
  backgroundColor:"212529",
  borderColor:"212529",
});
export const btnGroup = style({
  position:"relative",
  display:"inline-flex",
  verticalAlign:"middle",
  position:"relative",
  flex:"1 1 auto",
":checked": {
  zIndex:"1",
},
":focus": {
  zIndex:"1",
},
":hover": {
  zIndex:"1",
},
":focus": {
  zIndex:"1",
},
":active": {
  zIndex:"1",
},
  zIndex:"1",
"selectors": {
"&:not(:first-child)": {
  marginLeft:"-1px",
},
},
"selectors": {
"&:not(:first-child)": {
  marginLeft:"-1px",
},
},
"selectors": {
"&:not(:last-child):not": {
  borderTopRightRadius:"0",
  borderBottomRightRadius:"0",
},
},
"selectors": {
"&:not(:last-child)": {
  borderTopRightRadius:"0",
  borderBottomRightRadius:"0",
},
},
"selectors": {
"&:nth-child(+3)": {
  borderTopLeftRadius:"0",
  borderBottomLeftRadius:"0",
},
},
"selectors": {
"&:not": {
  borderTopLeftRadius:"0",
  borderBottomLeftRadius:"0",
},
},
"selectors": {
"&:not(:first-child)": {
  borderTopLeftRadius:"0",
  borderBottomLeftRadius:"0",
},
},
});
export const btnGroupLg = style({
  padding:"0.5rem 1rem",
  fontSize:"1.25rem",
  borderRadius:"0.3rem",
  paddingRight:"0.75rem",
  paddingLeft:"0.75rem",
});
export const btnGroupSm = style({
  padding:"0.25rem 0.5rem",
  fontSize:"0.875rem",
  borderRadius:"0.2rem",
  paddingRight:"0.375rem",
  paddingLeft:"0.375rem",
});
export const btnGroupVertical = style({
  position:"relative",
  display:"inline-flex",
  verticalAlign:"middle",
  position:"relative",
  flex:"1 1 auto",
":checked": {
  zIndex:"1",
},
":focus": {
  zIndex:"1",
},
":hover": {
  zIndex:"1",
},
":focus": {
  zIndex:"1",
},
":active": {
  zIndex:"1",
},
  zIndex:"1",
  flexDirection:"column",
  alignItems:"flex-start",
  justifyContent:"center",
  width:"100%",
  width:"100%",
"selectors": {
"&:not(:first-child)": {
  marginTop:"-1px",
},
},
"selectors": {
"&:not(:first-child)": {
  marginTop:"-1px",
},
},
"selectors": {
"&:not(:last-child):not": {
  borderBottomRightRadius:"0",
  borderBottomLeftRadius:"0",
},
},
"selectors": {
"&:not(:last-child)": {
  borderBottomRightRadius:"0",
  borderBottomLeftRadius:"0",
},
},
  borderTopLeftRadius:"0",
  borderTopRightRadius:"0",
"selectors": {
"&:not(:first-child)": {
  borderTopLeftRadius:"0",
  borderTopRightRadius:"0",
},
},
});
export const btnInfo = style({
  color:"000",
  backgroundColor:"0dcaf0",
  borderColor:"0dcaf0",
":hover": {
  color:"000",
  backgroundColor:"31d2f2",
  borderColor:"25cff2",
},
":focus": {
  color:"000",
  backgroundColor:"31d2f2",
  borderColor:"25cff2",
  boxShadow:"0 0 0 0.25rem rgba(11,172,204,0.5)",
},
":active": {
  color:"000",
  backgroundColor:"3dd5f3",
  borderColor:"25cff2",
},
  color:"000",
  backgroundColor:"3dd5f3",
  borderColor:"25cff2",
":active:focus": {
  boxShadow:"0 0 0 0.25rem rgba(11,172,204,0.5)",
},
":focus": {
  boxShadow:"0 0 0 0.25rem rgba(11,172,204,0.5)",
},
":disabled": {
  color:"000",
  backgroundColor:"0dcaf0",
  borderColor:"0dcaf0",
},
  color:"000",
  backgroundColor:"0dcaf0",
  borderColor:"0dcaf0",
});
export const btnLg = style({
  padding:"0.5rem 1rem",
  fontSize:"1.25rem",
  borderRadius:"0.3rem",
  paddingRight:"0.75rem",
  paddingLeft:"0.75rem",
});
export const btnLight = style({
  color:"000",
  backgroundColor:"f8f9fa",
  borderColor:"f8f9fa",
":hover": {
  color:"000",
  backgroundColor:"f9fafb",
  borderColor:"f9fafb",
},
":focus": {
  color:"000",
  backgroundColor:"f9fafb",
  borderColor:"f9fafb",
  boxShadow:"0 0 0 0.25rem rgba(211,212,213,0.5)",
},
":active": {
  color:"000",
  backgroundColor:"f9fafb",
  borderColor:"f9fafb",
},
  color:"000",
  backgroundColor:"f9fafb",
  borderColor:"f9fafb",
":active:focus": {
  boxShadow:"0 0 0 0.25rem rgba(211,212,213,0.5)",
},
":focus": {
  boxShadow:"0 0 0 0.25rem rgba(211,212,213,0.5)",
},
":disabled": {
  color:"000",
  backgroundColor:"f8f9fa",
  borderColor:"f8f9fa",
},
  color:"000",
  backgroundColor:"f8f9fa",
  borderColor:"f8f9fa",
});
export const btnLink = style({
  fontWeight:"400",
  color:"0d6efd",
  textDecoration:"underline",
":hover": {
  color:"0a58ca",
},
":disabled": {
  color:"6c757d",
},
  color:"6c757d",
});
export const btnOutlineDanger = style({
  color:"dc3545",
  borderColor:"dc3545",
":hover": {
  color:"fff",
  backgroundColor:"dc3545",
  borderColor:"dc3545",
},
":focus": {
  boxShadow:"0 0 0 0.25rem rgba(220,53,69,0.5)",
},
":active": {
  color:"fff",
  backgroundColor:"dc3545",
  borderColor:"dc3545",
},
  color:"fff",
  backgroundColor:"dc3545",
  borderColor:"dc3545",
  color:"fff",
  backgroundColor:"dc3545",
  borderColor:"dc3545",
":active:focus": {
  boxShadow:"0 0 0 0.25rem rgba(220,53,69,0.5)",
},
":focus": {
  boxShadow:"0 0 0 0.25rem rgba(220,53,69,0.5)",
},
":focus": {
  boxShadow:"0 0 0 0.25rem rgba(220,53,69,0.5)",
},
":disabled": {
  color:"dc3545",
  backgroundColor:"transparent",
},
  color:"dc3545",
  backgroundColor:"transparent",
});
export const btnOutlineDark = style({
  color:"212529",
  borderColor:"212529",
":hover": {
  color:"fff",
  backgroundColor:"212529",
  borderColor:"212529",
},
":focus": {
  boxShadow:"0 0 0 0.25rem rgba(33,37,41,0.5)",
},
":active": {
  color:"fff",
  backgroundColor:"212529",
  borderColor:"212529",
},
  color:"fff",
  backgroundColor:"212529",
  borderColor:"212529",
  color:"fff",
  backgroundColor:"212529",
  borderColor:"212529",
":active:focus": {
  boxShadow:"0 0 0 0.25rem rgba(33,37,41,0.5)",
},
":focus": {
  boxShadow:"0 0 0 0.25rem rgba(33,37,41,0.5)",
},
":focus": {
  boxShadow:"0 0 0 0.25rem rgba(33,37,41,0.5)",
},
":disabled": {
  color:"212529",
  backgroundColor:"transparent",
},
  color:"212529",
  backgroundColor:"transparent",
});
export const btnOutlineInfo = style({
  color:"0dcaf0",
  borderColor:"0dcaf0",
":hover": {
  color:"000",
  backgroundColor:"0dcaf0",
  borderColor:"0dcaf0",
},
":focus": {
  boxShadow:"0 0 0 0.25rem rgba(13,202,240,0.5)",
},
":active": {
  color:"000",
  backgroundColor:"0dcaf0",
  borderColor:"0dcaf0",
},
  color:"000",
  backgroundColor:"0dcaf0",
  borderColor:"0dcaf0",
  color:"000",
  backgroundColor:"0dcaf0",
  borderColor:"0dcaf0",
":active:focus": {
  boxShadow:"0 0 0 0.25rem rgba(13,202,240,0.5)",
},
":focus": {
  boxShadow:"0 0 0 0.25rem rgba(13,202,240,0.5)",
},
":focus": {
  boxShadow:"0 0 0 0.25rem rgba(13,202,240,0.5)",
},
":disabled": {
  color:"0dcaf0",
  backgroundColor:"transparent",
},
  color:"0dcaf0",
  backgroundColor:"transparent",
});
export const btnOutlineLight = style({
  color:"f8f9fa",
  borderColor:"f8f9fa",
":hover": {
  color:"000",
  backgroundColor:"f8f9fa",
  borderColor:"f8f9fa",
},
":focus": {
  boxShadow:"0 0 0 0.25rem rgba(248,249,250,0.5)",
},
":active": {
  color:"000",
  backgroundColor:"f8f9fa",
  borderColor:"f8f9fa",
},
  color:"000",
  backgroundColor:"f8f9fa",
  borderColor:"f8f9fa",
  color:"000",
  backgroundColor:"f8f9fa",
  borderColor:"f8f9fa",
":active:focus": {
  boxShadow:"0 0 0 0.25rem rgba(248,249,250,0.5)",
},
":focus": {
  boxShadow:"0 0 0 0.25rem rgba(248,249,250,0.5)",
},
":focus": {
  boxShadow:"0 0 0 0.25rem rgba(248,249,250,0.5)",
},
":disabled": {
  color:"f8f9fa",
  backgroundColor:"transparent",
},
  color:"f8f9fa",
  backgroundColor:"transparent",
});
export const btnOutlinePrimary = style({
  color:"0d6efd",
  borderColor:"0d6efd",
":hover": {
  color:"fff",
  backgroundColor:"0d6efd",
  borderColor:"0d6efd",
},
":focus": {
  boxShadow:"0 0 0 0.25rem rgba(13,110,253,0.5)",
},
":active": {
  color:"fff",
  backgroundColor:"0d6efd",
  borderColor:"0d6efd",
},
  color:"fff",
  backgroundColor:"0d6efd",
  borderColor:"0d6efd",
  color:"fff",
  backgroundColor:"0d6efd",
  borderColor:"0d6efd",
":active:focus": {
  boxShadow:"0 0 0 0.25rem rgba(13,110,253,0.5)",
},
":focus": {
  boxShadow:"0 0 0 0.25rem rgba(13,110,253,0.5)",
},
":focus": {
  boxShadow:"0 0 0 0.25rem rgba(13,110,253,0.5)",
},
":disabled": {
  color:"0d6efd",
  backgroundColor:"transparent",
},
  color:"0d6efd",
  backgroundColor:"transparent",
});
export const btnOutlineSecondary = style({
  color:"6c757d",
  borderColor:"6c757d",
":hover": {
  color:"fff",
  backgroundColor:"6c757d",
  borderColor:"6c757d",
},
":focus": {
  boxShadow:"0 0 0 0.25rem rgba(108,117,125,0.5)",
},
":active": {
  color:"fff",
  backgroundColor:"6c757d",
  borderColor:"6c757d",
},
  color:"fff",
  backgroundColor:"6c757d",
  borderColor:"6c757d",
  color:"fff",
  backgroundColor:"6c757d",
  borderColor:"6c757d",
":active:focus": {
  boxShadow:"0 0 0 0.25rem rgba(108,117,125,0.5)",
},
":focus": {
  boxShadow:"0 0 0 0.25rem rgba(108,117,125,0.5)",
},
":focus": {
  boxShadow:"0 0 0 0.25rem rgba(108,117,125,0.5)",
},
":disabled": {
  color:"6c757d",
  backgroundColor:"transparent",
},
  color:"6c757d",
  backgroundColor:"transparent",
});
export const btnOutlineSuccess = style({
  color:"198754",
  borderColor:"198754",
":hover": {
  color:"fff",
  backgroundColor:"198754",
  borderColor:"198754",
},
":focus": {
  boxShadow:"0 0 0 0.25rem rgba(25,135,84,0.5)",
},
":active": {
  color:"fff",
  backgroundColor:"198754",
  borderColor:"198754",
},
  color:"fff",
  backgroundColor:"198754",
  borderColor:"198754",
  color:"fff",
  backgroundColor:"198754",
  borderColor:"198754",
":active:focus": {
  boxShadow:"0 0 0 0.25rem rgba(25,135,84,0.5)",
},
":focus": {
  boxShadow:"0 0 0 0.25rem rgba(25,135,84,0.5)",
},
":focus": {
  boxShadow:"0 0 0 0.25rem rgba(25,135,84,0.5)",
},
":disabled": {
  color:"198754",
  backgroundColor:"transparent",
},
  color:"198754",
  backgroundColor:"transparent",
});
export const btnOutlineWarning = style({
  color:"ffc107",
  borderColor:"ffc107",
":hover": {
  color:"000",
  backgroundColor:"ffc107",
  borderColor:"ffc107",
},
":focus": {
  boxShadow:"0 0 0 0.25rem rgba(255,193,7,0.5)",
},
":active": {
  color:"000",
  backgroundColor:"ffc107",
  borderColor:"ffc107",
},
  color:"000",
  backgroundColor:"ffc107",
  borderColor:"ffc107",
  color:"000",
  backgroundColor:"ffc107",
  borderColor:"ffc107",
":active:focus": {
  boxShadow:"0 0 0 0.25rem rgba(255,193,7,0.5)",
},
":focus": {
  boxShadow:"0 0 0 0.25rem rgba(255,193,7,0.5)",
},
":focus": {
  boxShadow:"0 0 0 0.25rem rgba(255,193,7,0.5)",
},
":disabled": {
  color:"ffc107",
  backgroundColor:"transparent",
},
  color:"ffc107",
  backgroundColor:"transparent",
});
export const btnPrimary = style({
  color:"fff",
  backgroundColor:"0d6efd",
  borderColor:"0d6efd",
":hover": {
  color:"fff",
  backgroundColor:"0b5ed7",
  borderColor:"0a58ca",
},
":focus": {
  color:"fff",
  backgroundColor:"0b5ed7",
  borderColor:"0a58ca",
  boxShadow:"0 0 0 0.25rem rgba(49,132,253,0.5)",
},
":active": {
  color:"fff",
  backgroundColor:"0a58ca",
  borderColor:"0a53be",
},
  color:"fff",
  backgroundColor:"0a58ca",
  borderColor:"0a53be",
":active:focus": {
  boxShadow:"0 0 0 0.25rem rgba(49,132,253,0.5)",
},
":focus": {
  boxShadow:"0 0 0 0.25rem rgba(49,132,253,0.5)",
},
":disabled": {
  color:"fff",
  backgroundColor:"0d6efd",
  borderColor:"0d6efd",
},
  color:"fff",
  backgroundColor:"0d6efd",
  borderColor:"0d6efd",
});
export const btnSecondary = style({
  color:"fff",
  backgroundColor:"6c757d",
  borderColor:"6c757d",
":hover": {
  color:"fff",
  backgroundColor:"5c636a",
  borderColor:"565e64",
},
":focus": {
  color:"fff",
  backgroundColor:"5c636a",
  borderColor:"565e64",
  boxShadow:"0 0 0 0.25rem rgba(130,138,145,0.5)",
},
":active": {
  color:"fff",
  backgroundColor:"565e64",
  borderColor:"51585e",
},
  color:"fff",
  backgroundColor:"565e64",
  borderColor:"51585e",
":active:focus": {
  boxShadow:"0 0 0 0.25rem rgba(130,138,145,0.5)",
},
":focus": {
  boxShadow:"0 0 0 0.25rem rgba(130,138,145,0.5)",
},
":disabled": {
  color:"fff",
  backgroundColor:"6c757d",
  borderColor:"6c757d",
},
  color:"fff",
  backgroundColor:"6c757d",
  borderColor:"6c757d",
});
export const btnSm = style({
  padding:"0.25rem 0.5rem",
  fontSize:"0.875rem",
  borderRadius:"0.2rem",
  paddingRight:"0.375rem",
  paddingLeft:"0.375rem",
});
export const btnSuccess = style({
  color:"fff",
  backgroundColor:"198754",
  borderColor:"198754",
":hover": {
  color:"fff",
  backgroundColor:"157347",
  borderColor:"146c43",
},
":focus": {
  color:"fff",
  backgroundColor:"157347",
  borderColor:"146c43",
  boxShadow:"0 0 0 0.25rem rgba(60,153,110,0.5)",
},
":active": {
  color:"fff",
  backgroundColor:"146c43",
  borderColor:"13653f",
},
  color:"fff",
  backgroundColor:"146c43",
  borderColor:"13653f",
":active:focus": {
  boxShadow:"0 0 0 0.25rem rgba(60,153,110,0.5)",
},
":focus": {
  boxShadow:"0 0 0 0.25rem rgba(60,153,110,0.5)",
},
":disabled": {
  color:"fff",
  backgroundColor:"198754",
  borderColor:"198754",
},
  color:"fff",
  backgroundColor:"198754",
  borderColor:"198754",
});
export const btnToolbar = style({
  display:"flex",
  flexWrap:"wrap",
  justifyContent:"flex-start",
  width:"auto",
});
export const btnWarning = style({
  color:"000",
  backgroundColor:"ffc107",
  borderColor:"ffc107",
":hover": {
  color:"000",
  backgroundColor:"ffca2c",
  borderColor:"ffc720",
},
":focus": {
  color:"000",
  backgroundColor:"ffca2c",
  borderColor:"ffc720",
  boxShadow:"0 0 0 0.25rem rgba(217,164,6,0.5)",
},
":active": {
  color:"000",
  backgroundColor:"ffcd39",
  borderColor:"ffc720",
},
  color:"000",
  backgroundColor:"ffcd39",
  borderColor:"ffc720",
":active:focus": {
  boxShadow:"0 0 0 0.25rem rgba(217,164,6,0.5)",
},
":focus": {
  boxShadow:"0 0 0 0.25rem rgba(217,164,6,0.5)",
},
":disabled": {
  color:"000",
  backgroundColor:"ffc107",
  borderColor:"ffc107",
},
  color:"000",
  backgroundColor:"ffc107",
  borderColor:"ffc107",
});
export const captionTop = style({
  captionSide:"top",
});
export const card = style({
  position:"relative",
  display:"flex",
  flexDirection:"column",
  minWidth:"0",
  wordWrap:"break-word",
  backgroundColor:"fff",
  backgroundClip:"border-box",
  border:"1px solid rgba(0,0,0,0.125)",
  borderRadius:"0.25rem",
  borderTop:"inherit",
  borderBottom:"inherit",
":first-child": {
  borderTopWidth:"0",
  borderTopLeftRadius:"calc(0.25rem-1px)",
  borderTopRightRadius:"calc(0.25rem-1px)",
},
":last-child": {
  borderBottomWidth:"0",
  borderBottomRightRadius:"calc(0.25rem-1px)",
  borderBottomLeftRadius:"calc(0.25rem-1px)",
},
  borderTop:"0",
  borderTop:"0",
});
export const cardBody = style({
  flex:"1 1 auto",
  padding:"1rem 1rem",
});
export const cardFooter = style({
  padding:"0.5rem 1rem",
  backgroundColor:"rgba(0,0,0,0.03)",
  borderTop:"1px solid rgba(0,0,0,0.125)",
":last-child": {
  borderRadius:"0 0 calc(0.25rem-1px) calc(0.25rem-1px)",
},
});
export const cardGroup = style({
  marginBottom:"0.75rem",
"@media": {
"(min-width: 576px)": {
  display:"flex",
  flexFlow:"row wrap",
},
"(min-width: 576px)": {
  flex:"1 0 0%",
  marginBottom:"0",
},
"(min-width: 576px)": {
  marginLeft:"0",
  borderLeft:"0",
},
"(min-width: 576px)": {
"selectors": {
"&:not(:last-child)": {
  borderTopRightRadius:"0",
  borderBottomRightRadius:"0",
},
},
},
"(min-width: 576px)": {
"selectors": {
"&:not(:last-child)": {
  borderTopRightRadius:"0",
},
},
},
"(min-width: 576px)": {
"selectors": {
"&:not(:last-child)": {
  borderTopRightRadius:"0",
},
},
},
"(min-width: 576px)": {
"selectors": {
"&:not(:last-child)": {
  borderBottomRightRadius:"0",
},
},
},
"(min-width: 576px)": {
"selectors": {
"&:not(:last-child)": {
  borderBottomRightRadius:"0",
},
},
},
"(min-width: 576px)": {
"selectors": {
"&:not(:first-child)": {
  borderTopLeftRadius:"0",
  borderBottomLeftRadius:"0",
},
},
},
"(min-width: 576px)": {
"selectors": {
"&:not(:first-child)": {
  borderTopLeftRadius:"0",
},
},
},
"(min-width: 576px)": {
"selectors": {
"&:not(:first-child)": {
  borderTopLeftRadius:"0",
},
},
},
"(min-width: 576px)": {
"selectors": {
"&:not(:first-child)": {
  borderBottomLeftRadius:"0",
},
},
},
"(min-width: 576px)": {
"selectors": {
"&:not(:first-child)": {
  borderBottomLeftRadius:"0",
},
},
},
},
});
export const cardHeader = style({
  padding:"0.5rem 1rem",
  marginBottom:"0",
  backgroundColor:"rgba(0,0,0,0.03)",
  borderBottom:"1px solid rgba(0,0,0,0.125)",
":first-child": {
  borderRadius:"calc(0.25rem-1px) calc(0.25rem-1px) 0 0",
},
});
export const cardHeaderPills = style({
  marginRight:"-0.5rem",
  marginLeft:"-0.5rem",
});
export const cardHeaderTabs = style({
  marginRight:"-0.5rem",
  marginBottom:"-0.5rem",
  marginLeft:"-0.5rem",
  borderBottom:"0",
});
export const cardImg = style({
  width:"100%",
  borderTopLeftRadius:"calc(0.25rem-1px)",
  borderTopRightRadius:"calc(0.25rem-1px)",
  borderBottomRightRadius:"calc(0.25rem-1px)",
  borderBottomLeftRadius:"calc(0.25rem-1px)",
});
export const cardImgBottom = style({
  width:"100%",
  borderBottomRightRadius:"calc(0.25rem-1px)",
  borderBottomLeftRadius:"calc(0.25rem-1px)",
});
export const cardImgOverlay = style({
  position:"absolute",
  top:"0",
  right:"0",
  bottom:"0",
  left:"0",
  padding:"1rem",
  borderRadius:"calc(0.25rem-1px)",
});
export const cardImgTop = style({
  width:"100%",
  borderTopLeftRadius:"calc(0.25rem-1px)",
  borderTopRightRadius:"calc(0.25rem-1px)",
});
export const cardLink = style({
  marginLeft:"1rem",
});
export const cardSubtitle = style({
  marginTop:"-0.25rem",
  marginBottom:"0",
});
export const cardText = style({
":last-child": {
  marginBottom:"0",
},
});
export const cardTitle = style({
  marginBottom:"0.5rem",
});
export const carousel = style({
  position:"relative",
  touchAction:"pan-y",
});
export const carouselCaption = style({
  position:"absolute",
  right:"15%",
  bottom:"1.25rem",
  left:"15%",
  paddingTop:"1.25rem",
  paddingBottom:"1.25rem",
  color:"fff",
  textAlign:"center",
});
export const carouselControlNext = style({
  position:"absolute",
  top:"0",
  bottom:"0",
  zIndex:"1",
  display:"flex",
  alignItems:"center",
  justifyContent:"center",
  width:"15%",
  padding:"0",
  color:"fff",
  textAlign:"center",
  background:"none",
  border:"0",
  opacity:"0.5",
  transition:"opacity 0.15s ease",
":hover": {
  color:"fff",
  textDecoration:"none",
  outline:"0",
  opacity:"0.9",
},
":focus": {
  color:"fff",
  textDecoration:"none",
  outline:"0",
  opacity:"0.9",
},
  right:"0",
"@media": {
"(prefers-reduced-motion: reduce)": {
  transition:"none",
},
},
});
export const carouselControlNextIcon = style({
  display:"inline-block",
  width:"2rem",
  height:"2rem",
  backgroundRepeat:"no-repeat",
  backgroundPosition:"50%",
  backgroundSize:"100% 100%",
  backgroundImage:"url(data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e)",
});
export const carouselControlPrev = style({
  position:"absolute",
  top:"0",
  bottom:"0",
  zIndex:"1",
  display:"flex",
  alignItems:"center",
  justifyContent:"center",
  width:"15%",
  padding:"0",
  color:"fff",
  textAlign:"center",
  background:"none",
  border:"0",
  opacity:"0.5",
  transition:"opacity 0.15s ease",
":hover": {
  color:"fff",
  textDecoration:"none",
  outline:"0",
  opacity:"0.9",
},
":focus": {
  color:"fff",
  textDecoration:"none",
  outline:"0",
  opacity:"0.9",
},
  left:"0",
"@media": {
"(prefers-reduced-motion: reduce)": {
  transition:"none",
},
},
});
export const carouselControlPrevIcon = style({
  display:"inline-block",
  width:"2rem",
  height:"2rem",
  backgroundRepeat:"no-repeat",
  backgroundPosition:"50%",
  backgroundSize:"100% 100%",
  backgroundImage:"url(data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'/%3e%3c/svg%3e)",
});
export const carouselDark = style({
  filter:"invert(1) grayscale(100)",
  filter:"invert(1) grayscale(100)",
"selectors": {
"&[data-bs-target]": {
  backgroundColor:"000",
},
},
  color:"000",
});
export const carouselFade = style({
  opacity:"0",
  transitionProperty:"opacity",
  transform:"none",
  zIndex:"1",
  opacity:"1",
  zIndex:"1",
  opacity:"1",
  zIndex:"1",
  opacity:"1",
  zIndex:"0",
  opacity:"0",
  transition:"opacity 0s 0.6s",
  zIndex:"0",
  opacity:"0",
  transition:"opacity 0s 0.6s",
"@media": {
"(prefers-reduced-motion: reduce)": {
  transition:"none",
},
"(prefers-reduced-motion: reduce)": {
  transition:"none",
},
},
});
export const carouselIndicators = style({
  position:"absolute",
  right:"0",
  bottom:"0",
  left:"0",
  zIndex:"2",
  display:"flex",
  justifyContent:"center",
  padding:"0",
  marginRight:"15%",
  marginBottom:"1rem",
  marginLeft:"15%",
  listStyle:"none",
"selectors": {
"&[data-bs-target]": {
  boxSizing:"content-box",
  flex:"0 1 auto",
  width:"30px",
  height:"3px",
  padding:"0",
  marginRight:"3px",
  marginLeft:"3px",
  textIndent:"-999px",
  cursor:"pointer",
  backgroundColor:"fff",
  backgroundClip:"padding-box",
  border:"0",
  borderTop:"10px solid transparent",
  borderBottom:"10px solid transparent",
  opacity:"0.5",
  transition:"opacity 0.6s ease",
},
},
  opacity:"1",
"@media": {
"(prefers-reduced-motion: reduce)": {
"selectors": {
"&[data-bs-target]": {
  transition:"none",
},
},
},
},
});
export const carouselInner = style({
  position:"relative",
  width:"100%",
  overflow:"hidden",
"::after": {
  display:"block",
  clear:"both",
  content:"",
},
});
export const carouselItem = style({
  position:"relative",
  display:"none",
  float:"left",
  width:"100%",
  marginRight:"-100%",
  WebkitBackfaceVisibility:"hidden",
  backfaceVisibility:"hidden",
  transition:"transform 0.6s ease-in-out",
  display:"block",
"@media": {
"(prefers-reduced-motion: reduce)": {
  transition:"none",
},
},
});
export const carouselItemNext = style({
  display:"block",
"selectors": {
"&:not": {
  transform:"translateX(100%)",
},
},
});
export const carouselItemPrev = style({
  display:"block",
"selectors": {
"&:not": {
  transform:"translateX(-100%)",
},
},
});
export const clearfix = style({
"::after": {
  display:"block",
  clear:"both",
  content:"",
},
});
export const col = style({
  flex:"1 0 0%",
});
export const col1 = style({
  flex:"0 0 auto",
  width:"8.33333333%",
});
export const col10 = style({
  flex:"0 0 auto",
  width:"83.33333333%",
});
export const col11 = style({
  flex:"0 0 auto",
  width:"91.66666667%",
});
export const col12 = style({
  flex:"0 0 auto",
  width:"100%",
});
export const col2 = style({
  flex:"0 0 auto",
  width:"16.66666667%",
});
export const col3 = style({
  flex:"0 0 auto",
  width:"25%",
});
export const col4 = style({
  flex:"0 0 auto",
  width:"33.33333333%",
});
export const col5 = style({
  flex:"0 0 auto",
  width:"41.66666667%",
});
export const col6 = style({
  flex:"0 0 auto",
  width:"50%",
});
export const col7 = style({
  flex:"0 0 auto",
  width:"58.33333333%",
});
export const col8 = style({
  flex:"0 0 auto",
  width:"66.66666667%",
});
export const col9 = style({
  flex:"0 0 auto",
  width:"75%",
});
export const colAuto = style({
  flex:"0 0 auto",
  width:"auto",
});
export const colFormLabel = style({
  paddingTop:"calc(0.375rem+1px)",
  paddingBottom:"calc(0.375rem+1px)",
  marginBottom:"0",
  fontSize:"inherit",
  lineHeight:"1.5",
});
export const colFormLabelLg = style({
  paddingTop:"calc(0.5rem+1px)",
  paddingBottom:"calc(0.5rem+1px)",
  fontSize:"1.25rem",
});
export const colFormLabelSm = style({
  paddingTop:"calc(0.25rem+1px)",
  paddingBottom:"calc(0.25rem+1px)",
  fontSize:"0.875rem",
});
export const colLg = style({
"@media": {
"(min-width: 992px)": {
  flex:"1 0 0%",
},
},
});
export const colLg1 = style({
"@media": {
"(min-width: 992px)": {
  flex:"0 0 auto",
  width:"8.33333333%",
},
},
});
export const colLg10 = style({
"@media": {
"(min-width: 992px)": {
  flex:"0 0 auto",
  width:"83.33333333%",
},
},
});
export const colLg11 = style({
"@media": {
"(min-width: 992px)": {
  flex:"0 0 auto",
  width:"91.66666667%",
},
},
});
export const colLg12 = style({
"@media": {
"(min-width: 992px)": {
  flex:"0 0 auto",
  width:"100%",
},
},
});
export const colLg2 = style({
"@media": {
"(min-width: 992px)": {
  flex:"0 0 auto",
  width:"16.66666667%",
},
},
});
export const colLg3 = style({
"@media": {
"(min-width: 992px)": {
  flex:"0 0 auto",
  width:"25%",
},
},
});
export const colLg4 = style({
"@media": {
"(min-width: 992px)": {
  flex:"0 0 auto",
  width:"33.33333333%",
},
},
});
export const colLg5 = style({
"@media": {
"(min-width: 992px)": {
  flex:"0 0 auto",
  width:"41.66666667%",
},
},
});
export const colLg6 = style({
"@media": {
"(min-width: 992px)": {
  flex:"0 0 auto",
  width:"50%",
},
},
});
export const colLg7 = style({
"@media": {
"(min-width: 992px)": {
  flex:"0 0 auto",
  width:"58.33333333%",
},
},
});
export const colLg8 = style({
"@media": {
"(min-width: 992px)": {
  flex:"0 0 auto",
  width:"66.66666667%",
},
},
});
export const colLg9 = style({
"@media": {
"(min-width: 992px)": {
  flex:"0 0 auto",
  width:"75%",
},
},
});
export const colLgAuto = style({
"@media": {
"(min-width: 992px)": {
  flex:"0 0 auto",
  width:"auto",
},
},
});
export const colMd = style({
"@media": {
"(min-width: 768px)": {
  flex:"1 0 0%",
},
},
});
export const colMd1 = style({
"@media": {
"(min-width: 768px)": {
  flex:"0 0 auto",
  width:"8.33333333%",
},
},
});
export const colMd10 = style({
"@media": {
"(min-width: 768px)": {
  flex:"0 0 auto",
  width:"83.33333333%",
},
},
});
export const colMd11 = style({
"@media": {
"(min-width: 768px)": {
  flex:"0 0 auto",
  width:"91.66666667%",
},
},
});
export const colMd12 = style({
"@media": {
"(min-width: 768px)": {
  flex:"0 0 auto",
  width:"100%",
},
},
});
export const colMd2 = style({
"@media": {
"(min-width: 768px)": {
  flex:"0 0 auto",
  width:"16.66666667%",
},
},
});
export const colMd3 = style({
"@media": {
"(min-width: 768px)": {
  flex:"0 0 auto",
  width:"25%",
},
},
});
export const colMd4 = style({
"@media": {
"(min-width: 768px)": {
  flex:"0 0 auto",
  width:"33.33333333%",
},
},
});
export const colMd5 = style({
"@media": {
"(min-width: 768px)": {
  flex:"0 0 auto",
  width:"41.66666667%",
},
},
});
export const colMd6 = style({
"@media": {
"(min-width: 768px)": {
  flex:"0 0 auto",
  width:"50%",
},
},
});
export const colMd7 = style({
"@media": {
"(min-width: 768px)": {
  flex:"0 0 auto",
  width:"58.33333333%",
},
},
});
export const colMd8 = style({
"@media": {
"(min-width: 768px)": {
  flex:"0 0 auto",
  width:"66.66666667%",
},
},
});
export const colMd9 = style({
"@media": {
"(min-width: 768px)": {
  flex:"0 0 auto",
  width:"75%",
},
},
});
export const colMdAuto = style({
"@media": {
"(min-width: 768px)": {
  flex:"0 0 auto",
  width:"auto",
},
},
});
export const colSm = style({
"@media": {
"(min-width: 576px)": {
  flex:"1 0 0%",
},
},
});
export const colSm1 = style({
"@media": {
"(min-width: 576px)": {
  flex:"0 0 auto",
  width:"8.33333333%",
},
},
});
export const colSm10 = style({
"@media": {
"(min-width: 576px)": {
  flex:"0 0 auto",
  width:"83.33333333%",
},
},
});
export const colSm11 = style({
"@media": {
"(min-width: 576px)": {
  flex:"0 0 auto",
  width:"91.66666667%",
},
},
});
export const colSm12 = style({
"@media": {
"(min-width: 576px)": {
  flex:"0 0 auto",
  width:"100%",
},
},
});
export const colSm2 = style({
"@media": {
"(min-width: 576px)": {
  flex:"0 0 auto",
  width:"16.66666667%",
},
},
});
export const colSm3 = style({
"@media": {
"(min-width: 576px)": {
  flex:"0 0 auto",
  width:"25%",
},
},
});
export const colSm4 = style({
"@media": {
"(min-width: 576px)": {
  flex:"0 0 auto",
  width:"33.33333333%",
},
},
});
export const colSm5 = style({
"@media": {
"(min-width: 576px)": {
  flex:"0 0 auto",
  width:"41.66666667%",
},
},
});
export const colSm6 = style({
"@media": {
"(min-width: 576px)": {
  flex:"0 0 auto",
  width:"50%",
},
},
});
export const colSm7 = style({
"@media": {
"(min-width: 576px)": {
  flex:"0 0 auto",
  width:"58.33333333%",
},
},
});
export const colSm8 = style({
"@media": {
"(min-width: 576px)": {
  flex:"0 0 auto",
  width:"66.66666667%",
},
},
});
export const colSm9 = style({
"@media": {
"(min-width: 576px)": {
  flex:"0 0 auto",
  width:"75%",
},
},
});
export const colSmAuto = style({
"@media": {
"(min-width: 576px)": {
  flex:"0 0 auto",
  width:"auto",
},
},
});
export const colXl = style({
"@media": {
"(min-width: 1200px)": {
  flex:"1 0 0%",
},
},
});
export const colXl1 = style({
"@media": {
"(min-width: 1200px)": {
  flex:"0 0 auto",
  width:"8.33333333%",
},
},
});
export const colXl10 = style({
"@media": {
"(min-width: 1200px)": {
  flex:"0 0 auto",
  width:"83.33333333%",
},
},
});
export const colXl11 = style({
"@media": {
"(min-width: 1200px)": {
  flex:"0 0 auto",
  width:"91.66666667%",
},
},
});
export const colXl12 = style({
"@media": {
"(min-width: 1200px)": {
  flex:"0 0 auto",
  width:"100%",
},
},
});
export const colXl2 = style({
"@media": {
"(min-width: 1200px)": {
  flex:"0 0 auto",
  width:"16.66666667%",
},
},
});
export const colXl3 = style({
"@media": {
"(min-width: 1200px)": {
  flex:"0 0 auto",
  width:"25%",
},
},
});
export const colXl4 = style({
"@media": {
"(min-width: 1200px)": {
  flex:"0 0 auto",
  width:"33.33333333%",
},
},
});
export const colXl5 = style({
"@media": {
"(min-width: 1200px)": {
  flex:"0 0 auto",
  width:"41.66666667%",
},
},
});
export const colXl6 = style({
"@media": {
"(min-width: 1200px)": {
  flex:"0 0 auto",
  width:"50%",
},
},
});
export const colXl7 = style({
"@media": {
"(min-width: 1200px)": {
  flex:"0 0 auto",
  width:"58.33333333%",
},
},
});
export const colXl8 = style({
"@media": {
"(min-width: 1200px)": {
  flex:"0 0 auto",
  width:"66.66666667%",
},
},
});
export const colXl9 = style({
"@media": {
"(min-width: 1200px)": {
  flex:"0 0 auto",
  width:"75%",
},
},
});
export const colXlAuto = style({
"@media": {
"(min-width: 1200px)": {
  flex:"0 0 auto",
  width:"auto",
},
},
});
export const colXxl = style({
"@media": {
"(min-width: 1400px)": {
  flex:"1 0 0%",
},
},
});
export const colXxl1 = style({
"@media": {
"(min-width: 1400px)": {
  flex:"0 0 auto",
  width:"8.33333333%",
},
},
});
export const colXxl10 = style({
"@media": {
"(min-width: 1400px)": {
  flex:"0 0 auto",
  width:"83.33333333%",
},
},
});
export const colXxl11 = style({
"@media": {
"(min-width: 1400px)": {
  flex:"0 0 auto",
  width:"91.66666667%",
},
},
});
export const colXxl12 = style({
"@media": {
"(min-width: 1400px)": {
  flex:"0 0 auto",
  width:"100%",
},
},
});
export const colXxl2 = style({
"@media": {
"(min-width: 1400px)": {
  flex:"0 0 auto",
  width:"16.66666667%",
},
},
});
export const colXxl3 = style({
"@media": {
"(min-width: 1400px)": {
  flex:"0 0 auto",
  width:"25%",
},
},
});
export const colXxl4 = style({
"@media": {
"(min-width: 1400px)": {
  flex:"0 0 auto",
  width:"33.33333333%",
},
},
});
export const colXxl5 = style({
"@media": {
"(min-width: 1400px)": {
  flex:"0 0 auto",
  width:"41.66666667%",
},
},
});
export const colXxl6 = style({
"@media": {
"(min-width: 1400px)": {
  flex:"0 0 auto",
  width:"50%",
},
},
});
export const colXxl7 = style({
"@media": {
"(min-width: 1400px)": {
  flex:"0 0 auto",
  width:"58.33333333%",
},
},
});
export const colXxl8 = style({
"@media": {
"(min-width: 1400px)": {
  flex:"0 0 auto",
  width:"66.66666667%",
},
},
});
export const colXxl9 = style({
"@media": {
"(min-width: 1400px)": {
  flex:"0 0 auto",
  width:"75%",
},
},
});
export const colXxlAuto = style({
"@media": {
"(min-width: 1400px)": {
  flex:"0 0 auto",
  width:"auto",
},
},
});
export const collapse = style({
"selectors": {
"&:not": {
  display:"none",
},
},
});
export const collapsing = style({
  height:"0",
  overflow:"hidden",
  transition:"height 0.35s ease",
  width:"0",
  height:"auto",
  transition:"width 0.35s ease",
"@media": {
"(prefers-reduced-motion: reduce)": {
  transition:"none",
},
"(prefers-reduced-motion: reduce)": {
  transition:"none",
},
},
});
export const container = style({
  width:"100%",
  paddingRight:"var(--bs-gutter-x,0.75rem)",
  paddingLeft:"var(--bs-gutter-x,0.75rem)",
  marginRight:"auto",
  marginLeft:"auto",
"@media": {
"(min-width: 576px)": {
  maxWidth:"540px",
},
"(min-width: 768px)": {
  maxWidth:"720px",
},
"(min-width: 992px)": {
  maxWidth:"960px",
},
"(min-width: 1200px)": {
  maxWidth:"1140px",
},
"(min-width: 1400px)": {
  maxWidth:"1320px",
},
},
});
export const containerFluid = style({
  width:"100%",
  paddingRight:"var(--bs-gutter-x,0.75rem)",
  paddingLeft:"var(--bs-gutter-x,0.75rem)",
  marginRight:"auto",
  marginLeft:"auto",
});
export const containerLg = style({
  width:"100%",
  paddingRight:"var(--bs-gutter-x,0.75rem)",
  paddingLeft:"var(--bs-gutter-x,0.75rem)",
  marginRight:"auto",
  marginLeft:"auto",
"@media": {
"(min-width: 992px)": {
  maxWidth:"960px",
},
"(min-width: 1200px)": {
  maxWidth:"1140px",
},
"(min-width: 1400px)": {
  maxWidth:"1320px",
},
},
});
export const containerMd = style({
  width:"100%",
  paddingRight:"var(--bs-gutter-x,0.75rem)",
  paddingLeft:"var(--bs-gutter-x,0.75rem)",
  marginRight:"auto",
  marginLeft:"auto",
"@media": {
"(min-width: 768px)": {
  maxWidth:"720px",
},
"(min-width: 992px)": {
  maxWidth:"960px",
},
"(min-width: 1200px)": {
  maxWidth:"1140px",
},
"(min-width: 1400px)": {
  maxWidth:"1320px",
},
},
});
export const containerSm = style({
  width:"100%",
  paddingRight:"var(--bs-gutter-x,0.75rem)",
  paddingLeft:"var(--bs-gutter-x,0.75rem)",
  marginRight:"auto",
  marginLeft:"auto",
"@media": {
"(min-width: 576px)": {
  maxWidth:"540px",
},
"(min-width: 768px)": {
  maxWidth:"720px",
},
"(min-width: 992px)": {
  maxWidth:"960px",
},
"(min-width: 1200px)": {
  maxWidth:"1140px",
},
"(min-width: 1400px)": {
  maxWidth:"1320px",
},
},
});
export const containerXl = style({
  width:"100%",
  paddingRight:"var(--bs-gutter-x,0.75rem)",
  paddingLeft:"var(--bs-gutter-x,0.75rem)",
  marginRight:"auto",
  marginLeft:"auto",
"@media": {
"(min-width: 1200px)": {
  maxWidth:"1140px",
},
"(min-width: 1400px)": {
  maxWidth:"1320px",
},
},
});
export const containerXxl = style({
  width:"100%",
  paddingRight:"var(--bs-gutter-x,0.75rem)",
  paddingLeft:"var(--bs-gutter-x,0.75rem)",
  marginRight:"auto",
  marginLeft:"auto",
"@media": {
"(min-width: 1400px)": {
  maxWidth:"1320px",
},
},
});
export const dBlock = style({
  display:"block",
});
export const dFlex = style({
  display:"flex",
});
export const dGrid = style({
  display:"grid",
});
export const dInline = style({
  display:"inline",
});
export const dInlineBlock = style({
  display:"inline-block",
});
export const dInlineFlex = style({
  display:"inline-flex",
});
export const dLgBlock = style({
"@media": {
"(min-width: 992px)": {
  display:"block",
},
},
});
export const dLgFlex = style({
"@media": {
"(min-width: 992px)": {
  display:"flex",
},
},
});
export const dLgGrid = style({
"@media": {
"(min-width: 992px)": {
  display:"grid",
},
},
});
export const dLgInline = style({
"@media": {
"(min-width: 992px)": {
  display:"inline",
},
},
});
export const dLgInlineBlock = style({
"@media": {
"(min-width: 992px)": {
  display:"inline-block",
},
},
});
export const dLgInlineFlex = style({
"@media": {
"(min-width: 992px)": {
  display:"inline-flex",
},
},
});
export const dLgNone = style({
"@media": {
"(min-width: 992px)": {
  display:"none",
},
},
});
export const dLgTable = style({
"@media": {
"(min-width: 992px)": {
  display:"table",
},
},
});
export const dLgTableCell = style({
"@media": {
"(min-width: 992px)": {
  display:"table-cell",
},
},
});
export const dLgTableRow = style({
"@media": {
"(min-width: 992px)": {
  display:"table-row",
},
},
});
export const dMdBlock = style({
"@media": {
"(min-width: 768px)": {
  display:"block",
},
},
});
export const dMdFlex = style({
"@media": {
"(min-width: 768px)": {
  display:"flex",
},
},
});
export const dMdGrid = style({
"@media": {
"(min-width: 768px)": {
  display:"grid",
},
},
});
export const dMdInline = style({
"@media": {
"(min-width: 768px)": {
  display:"inline",
},
},
});
export const dMdInlineBlock = style({
"@media": {
"(min-width: 768px)": {
  display:"inline-block",
},
},
});
export const dMdInlineFlex = style({
"@media": {
"(min-width: 768px)": {
  display:"inline-flex",
},
},
});
export const dMdNone = style({
"@media": {
"(min-width: 768px)": {
  display:"none",
},
},
});
export const dMdTable = style({
"@media": {
"(min-width: 768px)": {
  display:"table",
},
},
});
export const dMdTableCell = style({
"@media": {
"(min-width: 768px)": {
  display:"table-cell",
},
},
});
export const dMdTableRow = style({
"@media": {
"(min-width: 768px)": {
  display:"table-row",
},
},
});
export const dNone = style({
  display:"none",
});
export const dPrintBlock = style({
"@media": {
"print": {
  display:"block",
},
},
});
export const dPrintFlex = style({
"@media": {
"print": {
  display:"flex",
},
},
});
export const dPrintGrid = style({
"@media": {
"print": {
  display:"grid",
},
},
});
export const dPrintInline = style({
"@media": {
"print": {
  display:"inline",
},
},
});
export const dPrintInlineBlock = style({
"@media": {
"print": {
  display:"inline-block",
},
},
});
export const dPrintInlineFlex = style({
"@media": {
"print": {
  display:"inline-flex",
},
},
});
export const dPrintNone = style({
"@media": {
"print": {
  display:"none",
},
},
});
export const dPrintTable = style({
"@media": {
"print": {
  display:"table",
},
},
});
export const dPrintTableCell = style({
"@media": {
"print": {
  display:"table-cell",
},
},
});
export const dPrintTableRow = style({
"@media": {
"print": {
  display:"table-row",
},
},
});
export const dSmBlock = style({
"@media": {
"(min-width: 576px)": {
  display:"block",
},
},
});
export const dSmFlex = style({
"@media": {
"(min-width: 576px)": {
  display:"flex",
},
},
});
export const dSmGrid = style({
"@media": {
"(min-width: 576px)": {
  display:"grid",
},
},
});
export const dSmInline = style({
"@media": {
"(min-width: 576px)": {
  display:"inline",
},
},
});
export const dSmInlineBlock = style({
"@media": {
"(min-width: 576px)": {
  display:"inline-block",
},
},
});
export const dSmInlineFlex = style({
"@media": {
"(min-width: 576px)": {
  display:"inline-flex",
},
},
});
export const dSmNone = style({
"@media": {
"(min-width: 576px)": {
  display:"none",
},
},
});
export const dSmTable = style({
"@media": {
"(min-width: 576px)": {
  display:"table",
},
},
});
export const dSmTableCell = style({
"@media": {
"(min-width: 576px)": {
  display:"table-cell",
},
},
});
export const dSmTableRow = style({
"@media": {
"(min-width: 576px)": {
  display:"table-row",
},
},
});
export const dTable = style({
  display:"table",
});
export const dTableCell = style({
  display:"table-cell",
});
export const dTableRow = style({
  display:"table-row",
});
export const dXlBlock = style({
"@media": {
"(min-width: 1200px)": {
  display:"block",
},
},
});
export const dXlFlex = style({
"@media": {
"(min-width: 1200px)": {
  display:"flex",
},
},
});
export const dXlGrid = style({
"@media": {
"(min-width: 1200px)": {
  display:"grid",
},
},
});
export const dXlInline = style({
"@media": {
"(min-width: 1200px)": {
  display:"inline",
},
},
});
export const dXlInlineBlock = style({
"@media": {
"(min-width: 1200px)": {
  display:"inline-block",
},
},
});
export const dXlInlineFlex = style({
"@media": {
"(min-width: 1200px)": {
  display:"inline-flex",
},
},
});
export const dXlNone = style({
"@media": {
"(min-width: 1200px)": {
  display:"none",
},
},
});
export const dXlTable = style({
"@media": {
"(min-width: 1200px)": {
  display:"table",
},
},
});
export const dXlTableCell = style({
"@media": {
"(min-width: 1200px)": {
  display:"table-cell",
},
},
});
export const dXlTableRow = style({
"@media": {
"(min-width: 1200px)": {
  display:"table-row",
},
},
});
export const dXxlBlock = style({
"@media": {
"(min-width: 1400px)": {
  display:"block",
},
},
});
export const dXxlFlex = style({
"@media": {
"(min-width: 1400px)": {
  display:"flex",
},
},
});
export const dXxlGrid = style({
"@media": {
"(min-width: 1400px)": {
  display:"grid",
},
},
});
export const dXxlInline = style({
"@media": {
"(min-width: 1400px)": {
  display:"inline",
},
},
});
export const dXxlInlineBlock = style({
"@media": {
"(min-width: 1400px)": {
  display:"inline-block",
},
},
});
export const dXxlInlineFlex = style({
"@media": {
"(min-width: 1400px)": {
  display:"inline-flex",
},
},
});
export const dXxlNone = style({
"@media": {
"(min-width: 1400px)": {
  display:"none",
},
},
});
export const dXxlTable = style({
"@media": {
"(min-width: 1400px)": {
  display:"table",
},
},
});
export const dXxlTableCell = style({
"@media": {
"(min-width: 1400px)": {
  display:"table-cell",
},
},
});
export const dXxlTableRow = style({
"@media": {
"(min-width: 1400px)": {
  display:"table-row",
},
},
});
export const display1 = style({
  fontSize:"calc(1.625rem+4.5vw)",
  fontWeight:"300",
  lineHeight:"1.2",
"@media": {
"(min-width: 1200px)": {
  fontSize:"5rem",
},
},
});
export const display2 = style({
  fontSize:"calc(1.575rem+3.9vw)",
  fontWeight:"300",
  lineHeight:"1.2",
"@media": {
"(min-width: 1200px)": {
  fontSize:"4.5rem",
},
},
});
export const display3 = style({
  fontSize:"calc(1.525rem+3.3vw)",
  fontWeight:"300",
  lineHeight:"1.2",
"@media": {
"(min-width: 1200px)": {
  fontSize:"4rem",
},
},
});
export const display4 = style({
  fontSize:"calc(1.475rem+2.7vw)",
  fontWeight:"300",
  lineHeight:"1.2",
"@media": {
"(min-width: 1200px)": {
  fontSize:"3.5rem",
},
},
});
export const display5 = style({
  fontSize:"calc(1.425rem+2.1vw)",
  fontWeight:"300",
  lineHeight:"1.2",
"@media": {
"(min-width: 1200px)": {
  fontSize:"3rem",
},
},
});
export const display6 = style({
  fontSize:"calc(1.375rem+1.5vw)",
  fontWeight:"300",
  lineHeight:"1.2",
"@media": {
"(min-width: 1200px)": {
  fontSize:"2.5rem",
},
},
});
export const dropdown = style({
  position:"relative",
});
export const dropdownDivider = style({
  height:"0",
  margin:"0.5rem 0",
  overflow:"hidden",
  borderTop:"1px solid rgba(0,0,0,0.15)",
});
export const dropdownHeader = style({
  display:"block",
  padding:"0.5rem 1rem",
  marginBottom:"0",
  fontSize:"0.875rem",
  color:"6c757d",
  whiteSpace:"nowrap",
});
export const dropdownItem = style({
  display:"block",
  width:"100%",
  padding:"0.25rem 1rem",
  clear:"both",
  fontWeight:"400",
  color:"212529",
  textAlign:"inherit",
  textDecoration:"none",
  whiteSpace:"nowrap",
  backgroundColor:"transparent",
  border:"0",
":hover": {
  color:"1e2125",
  backgroundColor:"e9ecef",
},
":focus": {
  color:"1e2125",
  backgroundColor:"e9ecef",
},
  color:"fff",
  textDecoration:"none",
  backgroundColor:"0d6efd",
":active": {
  color:"fff",
  textDecoration:"none",
  backgroundColor:"0d6efd",
},
  color:"adb5bd",
  pointerEvents:"none",
  backgroundColor:"transparent",
":disabled": {
  color:"adb5bd",
  pointerEvents:"none",
  backgroundColor:"transparent",
},
});
export const dropdownItemText = style({
  display:"block",
  padding:"0.25rem 1rem",
  color:"212529",
});
export const dropdownMenu = style({
  position:"absolute",
  zIndex:"1000",
  display:"none",
  minWidth:"10rem",
  padding:"0.5rem 0",
  margin:"0",
  fontSize:"1rem",
  color:"212529",
  textAlign:"left",
  listStyle:"none",
  backgroundColor:"fff",
  backgroundClip:"padding-box",
  border:"1px solid rgba(0,0,0,0.15)",
  borderRadius:"0.25rem",
"selectors": {
"&[data-bs-popper]": {
  top:"100%",
  left:"0",
  marginTop:"0.125rem",
},
},
  display:"block",
});
export const dropdownMenuDark = style({
  color:"dee2e6",
  backgroundColor:"343a40",
  borderColor:"rgba(0,0,0,0.15)",
  color:"dee2e6",
":hover": {
  color:"fff",
  backgroundColor:"rgba(255,255,255,0.15)",
},
":focus": {
  color:"fff",
  backgroundColor:"rgba(255,255,255,0.15)",
},
  color:"fff",
  backgroundColor:"0d6efd",
":active": {
  color:"fff",
  backgroundColor:"0d6efd",
},
  color:"adb5bd",
":disabled": {
  color:"adb5bd",
},
  borderColor:"rgba(0,0,0,0.15)",
  color:"dee2e6",
  color:"adb5bd",
});
export const dropdownMenuEnd = style({
"vars": {
  "--bs-position":"end",
},
"selectors": {
"&[data-bs-popper]": {
  right:"0",
  left:"auto",
},
},
});
export const dropdownMenuLgEnd = style({
"@media": {
"(min-width: 992px)": {
"vars": {
  "--bs-position":"end",
},
},
"(min-width: 992px)": {
"selectors": {
"&[data-bs-popper]": {
  right:"0",
  left:"auto",
},
},
},
},
});
export const dropdownMenuLgStart = style({
"@media": {
"(min-width: 992px)": {
"vars": {
  "--bs-position":"start",
},
},
"(min-width: 992px)": {
"selectors": {
"&[data-bs-popper]": {
  right:"auto",
  left:"0",
},
},
},
},
});
export const dropdownMenuMdEnd = style({
"@media": {
"(min-width: 768px)": {
"vars": {
  "--bs-position":"end",
},
},
"(min-width: 768px)": {
"selectors": {
"&[data-bs-popper]": {
  right:"0",
  left:"auto",
},
},
},
},
});
export const dropdownMenuMdStart = style({
"@media": {
"(min-width: 768px)": {
"vars": {
  "--bs-position":"start",
},
},
"(min-width: 768px)": {
"selectors": {
"&[data-bs-popper]": {
  right:"auto",
  left:"0",
},
},
},
},
});
export const dropdownMenuSmEnd = style({
"@media": {
"(min-width: 576px)": {
"vars": {
  "--bs-position":"end",
},
},
"(min-width: 576px)": {
"selectors": {
"&[data-bs-popper]": {
  right:"0",
  left:"auto",
},
},
},
},
});
export const dropdownMenuSmStart = style({
"@media": {
"(min-width: 576px)": {
"vars": {
  "--bs-position":"start",
},
},
"(min-width: 576px)": {
"selectors": {
"&[data-bs-popper]": {
  right:"auto",
  left:"0",
},
},
},
},
});
export const dropdownMenuStart = style({
"vars": {
  "--bs-position":"start",
},
"selectors": {
"&[data-bs-popper]": {
  right:"auto",
  left:"0",
},
},
});
export const dropdownMenuXlEnd = style({
"@media": {
"(min-width: 1200px)": {
"vars": {
  "--bs-position":"end",
},
},
"(min-width: 1200px)": {
"selectors": {
"&[data-bs-popper]": {
  right:"0",
  left:"auto",
},
},
},
},
});
export const dropdownMenuXlStart = style({
"@media": {
"(min-width: 1200px)": {
"vars": {
  "--bs-position":"start",
},
},
"(min-width: 1200px)": {
"selectors": {
"&[data-bs-popper]": {
  right:"auto",
  left:"0",
},
},
},
},
});
export const dropdownMenuXxlEnd = style({
"@media": {
"(min-width: 1400px)": {
"vars": {
  "--bs-position":"end",
},
},
"(min-width: 1400px)": {
"selectors": {
"&[data-bs-popper]": {
  right:"0",
  left:"auto",
},
},
},
},
});
export const dropdownMenuXxlStart = style({
"@media": {
"(min-width: 1400px)": {
"vars": {
  "--bs-position":"start",
},
},
"(min-width: 1400px)": {
"selectors": {
"&[data-bs-popper]": {
  right:"auto",
  left:"0",
},
},
},
},
});
export const dropdownToggle = style({
  whiteSpace:"nowrap",
"::after": {
  display:"inline-block",
  marginLeft:"0.255em",
  verticalAlign:"0.255em",
  content:"",
  borderTop:"0.3em solid",
  borderRight:"0.3em solid transparent",
  borderBottom:"0",
  borderLeft:"0.3em solid transparent",
},
":empty::after": {
  marginLeft:"0",
},
});
export const dropdownToggleSplit = style({
  paddingRight:"0.5625rem",
  paddingLeft:"0.5625rem",
"::after": {
  marginLeft:"0",
},
});
export const dropend = style({
  position:"relative",
"selectors": {
"&[data-bs-popper]": {
  top:"0",
  right:"auto",
  left:"100%",
  marginTop:"0",
  marginLeft:"0.125rem",
},
},
"::after": {
  display:"inline-block",
  marginLeft:"0.255em",
  verticalAlign:"0.255em",
  content:"",
  borderTop:"0.3em solid transparent",
  borderRight:"0",
  borderBottom:"0.3em solid transparent",
  borderLeft:"0.3em solid",
},
":empty::after": {
  marginLeft:"0",
},
"::after": {
  verticalAlign:"0",
},
"::after": {
  marginLeft:"0",
},
});
export const dropstart = style({
  position:"relative",
"selectors": {
"&[data-bs-popper]": {
  top:"0",
  right:"100%",
  left:"auto",
  marginTop:"0",
  marginRight:"0.125rem",
},
},
"::after": {
  display:"inline-block",
  marginLeft:"0.255em",
  verticalAlign:"0.255em",
  content:"",
},
"::after": {
  display:"none",
},
"::before": {
  display:"inline-block",
  marginRight:"0.255em",
  verticalAlign:"0.255em",
  content:"",
  borderTop:"0.3em solid transparent",
  borderRight:"0.3em solid",
  borderBottom:"0.3em solid transparent",
},
":empty::after": {
  marginLeft:"0",
},
"::before": {
  verticalAlign:"0",
},
"::before": {
  marginRight:"0",
},
});
export const dropup = style({
  position:"relative",
"selectors": {
"&[data-bs-popper]": {
  top:"auto",
  bottom:"100%",
  marginTop:"0",
  marginBottom:"0.125rem",
},
},
"::after": {
  display:"inline-block",
  marginLeft:"0.255em",
  verticalAlign:"0.255em",
  content:"",
  borderTop:"0",
  borderRight:"0.3em solid transparent",
  borderBottom:"0.3em solid",
  borderLeft:"0.3em solid transparent",
},
":empty::after": {
  marginLeft:"0",
},
"::after": {
  marginLeft:"0",
},
});
export const end0 = style({
  right:"0",
});
export const end100 = style({
  right:"100%",
});
export const end50 = style({
  right:"50%",
});
export const fade = style({
  transition:"opacity 0.15s linear",
"selectors": {
"&:not": {
  opacity:"0",
},
},
"@media": {
"(prefers-reduced-motion: reduce)": {
  transition:"none",
},
},
});
export const figure = style({
  display:"inline-block",
});
export const figureCaption = style({
  fontSize:"0.875em",
  color:"6c757d",
});
export const figureImg = style({
  marginBottom:"0.5rem",
  lineHeight:"1",
});
export const fixedBottom = style({
  position:"fixed",
  right:"0",
  bottom:"0",
  left:"0",
  zIndex:"1030",
});
export const fixedTop = style({
  position:"fixed",
  top:"0",
  right:"0",
  left:"0",
  zIndex:"1030",
});
export const flexColumn = style({
  flexDirection:"column",
});
export const flexColumnReverse = style({
  flexDirection:"column-reverse",
});
export const flexFill = style({
  flex:"1 1 auto",
});
export const flexGrow0 = style({
  flexGrow:"0",
});
export const flexGrow1 = style({
  flexGrow:"1",
});
export const flexLgColumn = style({
"@media": {
"(min-width: 992px)": {
  flexDirection:"column",
},
},
});
export const flexLgColumnReverse = style({
"@media": {
"(min-width: 992px)": {
  flexDirection:"column-reverse",
},
},
});
export const flexLgFill = style({
"@media": {
"(min-width: 992px)": {
  flex:"1 1 auto",
},
},
});
export const flexLgGrow0 = style({
"@media": {
"(min-width: 992px)": {
  flexGrow:"0",
},
},
});
export const flexLgGrow1 = style({
"@media": {
"(min-width: 992px)": {
  flexGrow:"1",
},
},
});
export const flexLgNowrap = style({
"@media": {
"(min-width: 992px)": {
  flexWrap:"nowrap",
},
},
});
export const flexLgRow = style({
"@media": {
"(min-width: 992px)": {
  flexDirection:"row",
},
},
});
export const flexLgRowReverse = style({
"@media": {
"(min-width: 992px)": {
  flexDirection:"row-reverse",
},
},
});
export const flexLgShrink0 = style({
"@media": {
"(min-width: 992px)": {
  flexShrink:"0",
},
},
});
export const flexLgShrink1 = style({
"@media": {
"(min-width: 992px)": {
  flexShrink:"1",
},
},
});
export const flexLgWrap = style({
"@media": {
"(min-width: 992px)": {
  flexWrap:"wrap",
},
},
});
export const flexLgWrapReverse = style({
"@media": {
"(min-width: 992px)": {
  flexWrap:"wrap-reverse",
},
},
});
export const flexMdColumn = style({
"@media": {
"(min-width: 768px)": {
  flexDirection:"column",
},
},
});
export const flexMdColumnReverse = style({
"@media": {
"(min-width: 768px)": {
  flexDirection:"column-reverse",
},
},
});
export const flexMdFill = style({
"@media": {
"(min-width: 768px)": {
  flex:"1 1 auto",
},
},
});
export const flexMdGrow0 = style({
"@media": {
"(min-width: 768px)": {
  flexGrow:"0",
},
},
});
export const flexMdGrow1 = style({
"@media": {
"(min-width: 768px)": {
  flexGrow:"1",
},
},
});
export const flexMdNowrap = style({
"@media": {
"(min-width: 768px)": {
  flexWrap:"nowrap",
},
},
});
export const flexMdRow = style({
"@media": {
"(min-width: 768px)": {
  flexDirection:"row",
},
},
});
export const flexMdRowReverse = style({
"@media": {
"(min-width: 768px)": {
  flexDirection:"row-reverse",
},
},
});
export const flexMdShrink0 = style({
"@media": {
"(min-width: 768px)": {
  flexShrink:"0",
},
},
});
export const flexMdShrink1 = style({
"@media": {
"(min-width: 768px)": {
  flexShrink:"1",
},
},
});
export const flexMdWrap = style({
"@media": {
"(min-width: 768px)": {
  flexWrap:"wrap",
},
},
});
export const flexMdWrapReverse = style({
"@media": {
"(min-width: 768px)": {
  flexWrap:"wrap-reverse",
},
},
});
export const flexNowrap = style({
  flexWrap:"nowrap",
});
export const flexRow = style({
  flexDirection:"row",
});
export const flexRowReverse = style({
  flexDirection:"row-reverse",
});
export const flexShrink0 = style({
  flexShrink:"0",
});
export const flexShrink1 = style({
  flexShrink:"1",
});
export const flexSmColumn = style({
"@media": {
"(min-width: 576px)": {
  flexDirection:"column",
},
},
});
export const flexSmColumnReverse = style({
"@media": {
"(min-width: 576px)": {
  flexDirection:"column-reverse",
},
},
});
export const flexSmFill = style({
"@media": {
"(min-width: 576px)": {
  flex:"1 1 auto",
},
},
});
export const flexSmGrow0 = style({
"@media": {
"(min-width: 576px)": {
  flexGrow:"0",
},
},
});
export const flexSmGrow1 = style({
"@media": {
"(min-width: 576px)": {
  flexGrow:"1",
},
},
});
export const flexSmNowrap = style({
"@media": {
"(min-width: 576px)": {
  flexWrap:"nowrap",
},
},
});
export const flexSmRow = style({
"@media": {
"(min-width: 576px)": {
  flexDirection:"row",
},
},
});
export const flexSmRowReverse = style({
"@media": {
"(min-width: 576px)": {
  flexDirection:"row-reverse",
},
},
});
export const flexSmShrink0 = style({
"@media": {
"(min-width: 576px)": {
  flexShrink:"0",
},
},
});
export const flexSmShrink1 = style({
"@media": {
"(min-width: 576px)": {
  flexShrink:"1",
},
},
});
export const flexSmWrap = style({
"@media": {
"(min-width: 576px)": {
  flexWrap:"wrap",
},
},
});
export const flexSmWrapReverse = style({
"@media": {
"(min-width: 576px)": {
  flexWrap:"wrap-reverse",
},
},
});
export const flexWrap = style({
  flexWrap:"wrap",
});
export const flexWrapReverse = style({
  flexWrap:"wrap-reverse",
});
export const flexXlColumn = style({
"@media": {
"(min-width: 1200px)": {
  flexDirection:"column",
},
},
});
export const flexXlColumnReverse = style({
"@media": {
"(min-width: 1200px)": {
  flexDirection:"column-reverse",
},
},
});
export const flexXlFill = style({
"@media": {
"(min-width: 1200px)": {
  flex:"1 1 auto",
},
},
});
export const flexXlGrow0 = style({
"@media": {
"(min-width: 1200px)": {
  flexGrow:"0",
},
},
});
export const flexXlGrow1 = style({
"@media": {
"(min-width: 1200px)": {
  flexGrow:"1",
},
},
});
export const flexXlNowrap = style({
"@media": {
"(min-width: 1200px)": {
  flexWrap:"nowrap",
},
},
});
export const flexXlRow = style({
"@media": {
"(min-width: 1200px)": {
  flexDirection:"row",
},
},
});
export const flexXlRowReverse = style({
"@media": {
"(min-width: 1200px)": {
  flexDirection:"row-reverse",
},
},
});
export const flexXlShrink0 = style({
"@media": {
"(min-width: 1200px)": {
  flexShrink:"0",
},
},
});
export const flexXlShrink1 = style({
"@media": {
"(min-width: 1200px)": {
  flexShrink:"1",
},
},
});
export const flexXlWrap = style({
"@media": {
"(min-width: 1200px)": {
  flexWrap:"wrap",
},
},
});
export const flexXlWrapReverse = style({
"@media": {
"(min-width: 1200px)": {
  flexWrap:"wrap-reverse",
},
},
});
export const flexXxlColumn = style({
"@media": {
"(min-width: 1400px)": {
  flexDirection:"column",
},
},
});
export const flexXxlColumnReverse = style({
"@media": {
"(min-width: 1400px)": {
  flexDirection:"column-reverse",
},
},
});
export const flexXxlFill = style({
"@media": {
"(min-width: 1400px)": {
  flex:"1 1 auto",
},
},
});
export const flexXxlGrow0 = style({
"@media": {
"(min-width: 1400px)": {
  flexGrow:"0",
},
},
});
export const flexXxlGrow1 = style({
"@media": {
"(min-width: 1400px)": {
  flexGrow:"1",
},
},
});
export const flexXxlNowrap = style({
"@media": {
"(min-width: 1400px)": {
  flexWrap:"nowrap",
},
},
});
export const flexXxlRow = style({
"@media": {
"(min-width: 1400px)": {
  flexDirection:"row",
},
},
});
export const flexXxlRowReverse = style({
"@media": {
"(min-width: 1400px)": {
  flexDirection:"row-reverse",
},
},
});
export const flexXxlShrink0 = style({
"@media": {
"(min-width: 1400px)": {
  flexShrink:"0",
},
},
});
export const flexXxlShrink1 = style({
"@media": {
"(min-width: 1400px)": {
  flexShrink:"1",
},
},
});
export const flexXxlWrap = style({
"@media": {
"(min-width: 1400px)": {
  flexWrap:"wrap",
},
},
});
export const flexXxlWrapReverse = style({
"@media": {
"(min-width: 1400px)": {
  flexWrap:"wrap-reverse",
},
},
});
export const floatEnd = style({
  float:"right",
});
export const floatLgEnd = style({
"@media": {
"(min-width: 992px)": {
  float:"right",
},
},
});
export const floatLgNone = style({
"@media": {
"(min-width: 992px)": {
  float:"none",
},
},
});
export const floatLgStart = style({
"@media": {
"(min-width: 992px)": {
  float:"left",
},
},
});
export const floatMdEnd = style({
"@media": {
"(min-width: 768px)": {
  float:"right",
},
},
});
export const floatMdNone = style({
"@media": {
"(min-width: 768px)": {
  float:"none",
},
},
});
export const floatMdStart = style({
"@media": {
"(min-width: 768px)": {
  float:"left",
},
},
});
export const floatNone = style({
  float:"none",
});
export const floatSmEnd = style({
"@media": {
"(min-width: 576px)": {
  float:"right",
},
},
});
export const floatSmNone = style({
"@media": {
"(min-width: 576px)": {
  float:"none",
},
},
});
export const floatSmStart = style({
"@media": {
"(min-width: 576px)": {
  float:"left",
},
},
});
export const floatStart = style({
  float:"left",
});
export const floatXlEnd = style({
"@media": {
"(min-width: 1200px)": {
  float:"right",
},
},
});
export const floatXlNone = style({
"@media": {
"(min-width: 1200px)": {
  float:"none",
},
},
});
export const floatXlStart = style({
"@media": {
"(min-width: 1200px)": {
  float:"left",
},
},
});
export const floatXxlEnd = style({
"@media": {
"(min-width: 1400px)": {
  float:"right",
},
},
});
export const floatXxlNone = style({
"@media": {
"(min-width: 1400px)": {
  float:"none",
},
},
});
export const floatXxlStart = style({
"@media": {
"(min-width: 1400px)": {
  float:"left",
},
},
});
export const fontMonospace = style({
  fontFamily:"var(--bs-font-monospace)",
});
export const formCheck = style({
  display:"block",
  minHeight:"1.5rem",
  paddingLeft:"1.5em",
  marginBottom:"0.125rem",
  float:"left",
  marginLeft:"-1.5em",
});
export const formCheckInline = style({
  display:"inline-block",
  marginRight:"1rem",
  marginLeft:"0.5em",
  marginLeft:"0.5em",
});
export const formCheckInput = style({
  width:"1em",
  height:"1em",
  marginTop:"0.25em",
  verticalAlign:"top",
  backgroundColor:"fff",
  backgroundRepeat:"no-repeat",
  backgroundPosition:"center",
  backgroundSize:"contain",
  border:"1px solid rgba(0,0,0,0.25)",
  WebkitAppearance:"none",
  MozAppearance:"none",
  appearance:"none",
  WebkitPrintColorAdjust:"exact",
  colorAdjust:"exact",
"selectors": {
"&[type='checkbox']": {
  borderRadius:"0.25em",
},
},
"selectors": {
"&[type='radio']": {
  borderRadius:"50%",
},
},
":active": {
  filter:"brightness(90%)",
},
":focus": {
  borderColor:"86b7fe",
  outline:"0",
  boxShadow:"0 0 0 0.25rem rgba(13,110,253,0.25)",
},
":checked": {
  backgroundColor:"0d6efd",
  borderColor:"0d6efd",
},
":checked[type='checkbox']": {
  backgroundImage:"url(data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10l3 3l6-6'/%3e%3c/svg%3e)",
},
":checked[type='radio']": {
  backgroundImage:"url(data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='%23fff'/%3e%3c/svg%3e)",
},
"selectors": {
"&[type='checkbox']:indeterminate": {
  backgroundColor:"0d6efd",
  borderColor:"0d6efd",
  backgroundImage:"url(data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/%3e%3c/svg%3e)",
},
},
":disabled": {
  pointerEvents:"none",
  filter:"none",
  opacity:"0.5",
},
"selectors": {
"&[disabled]": {
  opacity:"0.5",
},
},
":disabled": {
  opacity:"0.5",
},
  borderColor:"198754",
":checked": {
  backgroundColor:"198754",
},
":focus": {
  boxShadow:"0 0 0 0.25rem rgba(25,135,84,0.25)",
},
  color:"198754",
  borderColor:"dc3545",
":checked": {
  backgroundColor:"dc3545",
},
":focus": {
  boxShadow:"0 0 0 0.25rem rgba(220,53,69,0.25)",
},
  color:"dc3545",
});
export const formControl = style({
  display:"block",
  width:"100%",
  padding:"0.375rem 0.75rem",
  fontSize:"1rem",
  fontWeight:"400",
  lineHeight:"1.5",
  color:"212529",
  backgroundColor:"fff",
  backgroundClip:"padding-box",
  border:"1px solid ced4da",
  WebkitAppearance:"none",
  MozAppearance:"none",
  appearance:"none",
  borderRadius:"0.25rem",
  transition:"border-color 0.15s ease-in-out , box-shadow 0.15s ease-in-out",
"selectors": {
"&[type='file']": {
  overflow:"hidden",
},
},
"selectors": {
"&[type='file']:not(:disabled):not([readonly])": {
  cursor:"pointer",
},
},
":focus": {
  color:"212529",
  backgroundColor:"fff",
  borderColor:"86b7fe",
  outline:"0",
  boxShadow:"0 0 0 0.25rem rgba(13,110,253,0.25)",
},
"selectors": {
"&::-webkit-date-and-time-value": {
  height:"1.5em",
},
},
"::-moz-placeholder": {
  color:"6c757d",
  opacity:"1",
},
"::placeholder": {
  color:"6c757d",
  opacity:"1",
},
":disabled": {
  backgroundColor:"e9ecef",
  opacity:"1",
},
"selectors": {
"&[readonly]": {
  backgroundColor:"e9ecef",
  opacity:"1",
},
},
"selectors": {
"&::-webkit-file-upload-button": {
  padding:"0.375rem 0.75rem",
  margin:"-0.375rem -0.75rem",
  WebkitMarginEnd:"0.75rem",
  marginInlineEnd:"0.75rem",
  color:"212529",
  backgroundColor:"e9ecef",
  pointerEvents:"none",
  borderColor:"inherit",
  borderStyle:"solid",
  borderWidth:"0",
  borderInlineEndWidth:"1px",
  borderRadius:"0",
  WebkitTransition:"color 0.15s ease-in-out , background-color 0.15s ease-in-out , border-color 0.15s ease-in-out , box-shadow 0.15s ease-in-out",
  transition:"color 0.15s ease-in-out , background-color 0.15s ease-in-out , border-color 0.15s ease-in-out , box-shadow 0.15s ease-in-out",
},
},
"selectors": {
"&::file-selector-button": {
  padding:"0.375rem 0.75rem",
  margin:"-0.375rem -0.75rem",
  WebkitMarginEnd:"0.75rem",
  marginInlineEnd:"0.75rem",
  color:"212529",
  backgroundColor:"e9ecef",
  pointerEvents:"none",
  borderColor:"inherit",
  borderStyle:"solid",
  borderWidth:"0",
  borderInlineEndWidth:"1px",
  borderRadius:"0",
  transition:"color 0.15s ease-in-out , background-color 0.15s ease-in-out , border-color 0.15s ease-in-out , box-shadow 0.15s ease-in-out",
},
},
":hover:not(:disabled):not([readonly])::-webkit-file-upload-button": {
  backgroundColor:"dde0e3",
},
":hover:not(:disabled):not([readonly])::file-selector-button": {
  backgroundColor:"dde0e3",
},
"selectors": {
"&::-webkit-file-upload-button": {
  padding:"0.375rem 0.75rem",
  margin:"-0.375rem -0.75rem",
  WebkitMarginEnd:"0.75rem",
  marginInlineEnd:"0.75rem",
  color:"212529",
  backgroundColor:"e9ecef",
  pointerEvents:"none",
  borderColor:"inherit",
  borderStyle:"solid",
  borderWidth:"0",
  borderInlineEndWidth:"1px",
  borderRadius:"0",
  WebkitTransition:"color 0.15s ease-in-out , background-color 0.15s ease-in-out , border-color 0.15s ease-in-out , box-shadow 0.15s ease-in-out",
  transition:"color 0.15s ease-in-out , background-color 0.15s ease-in-out , border-color 0.15s ease-in-out , box-shadow 0.15s ease-in-out",
},
},
":hover:not(:disabled):not([readonly])::-webkit-file-upload-button": {
  backgroundColor:"dde0e3",
},
  borderColor:"198754",
  paddingRight:"calc(1.5em+0.75rem)",
  backgroundImage:"url(data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e)",
  backgroundRepeat:"no-repeat",
  backgroundPosition:"right calc(0.375em+0.1875rem) center",
  backgroundSize:"calc(0.75em+0.375rem) calc(0.75em+0.375rem)",
":focus": {
  borderColor:"198754",
  boxShadow:"0 0 0 0.25rem rgba(25,135,84,0.25)",
},
  borderColor:"dc3545",
  paddingRight:"calc(1.5em+0.75rem)",
  backgroundImage:"url(data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e)",
  backgroundRepeat:"no-repeat",
  backgroundPosition:"right calc(0.375em+0.1875rem) center",
  backgroundSize:"calc(0.75em+0.375rem) calc(0.75em+0.375rem)",
":focus": {
  borderColor:"dc3545",
  boxShadow:"0 0 0 0.25rem rgba(220,53,69,0.25)",
},
"@media": {
"(prefers-reduced-motion: reduce)": {
  transition:"none",
},
"(prefers-reduced-motion: reduce)": {
"selectors": {
"&::-webkit-file-upload-button": {
  WebkitTransition:"none",
  transition:"none",
},
},
},
"(prefers-reduced-motion: reduce)": {
"selectors": {
"&::file-selector-button": {
  transition:"none",
},
},
},
"(prefers-reduced-motion: reduce)": {
"selectors": {
"&::-webkit-file-upload-button": {
  WebkitTransition:"none",
  transition:"none",
},
},
},
},
});
export const formControlColor = style({
  width:"3rem",
  height:"auto",
  padding:"0.375rem",
"selectors": {
"&:not(:disabled):not([readonly])": {
  cursor:"pointer",
},
},
"selectors": {
"&::-moz-color-swatch": {
  height:"1.5em",
  borderRadius:"0.25rem",
},
},
"selectors": {
"&::-webkit-color-swatch": {
  height:"1.5em",
  borderRadius:"0.25rem",
},
},
});
export const formControlLg = style({
  minHeight:"calc(1.5em+1rem+2px)",
  padding:"0.5rem 1rem",
  fontSize:"1.25rem",
  borderRadius:"0.3rem",
"selectors": {
"&::-webkit-file-upload-button": {
  padding:"0.5rem 1rem",
  margin:"-0.5rem -1rem",
  WebkitMarginEnd:"1rem",
  marginInlineEnd:"1rem",
},
},
"selectors": {
"&::file-selector-button": {
  padding:"0.5rem 1rem",
  margin:"-0.5rem -1rem",
  WebkitMarginEnd:"1rem",
  marginInlineEnd:"1rem",
},
},
"selectors": {
"&::-webkit-file-upload-button": {
  padding:"0.5rem 1rem",
  margin:"-0.5rem -1rem",
  WebkitMarginEnd:"1rem",
  marginInlineEnd:"1rem",
},
},
});
export const formControlPlaintext = style({
  display:"block",
  width:"100%",
  padding:"0.375rem 0",
  marginBottom:"0",
  lineHeight:"1.5",
  color:"212529",
  backgroundColor:"transparent",
  border:"solid transparent",
  borderWidth:"1px 0",
  paddingRight:"0",
  paddingLeft:"0",
  paddingRight:"0",
  paddingLeft:"0",
});
export const formControlSm = style({
  minHeight:"calc(1.5em+0.5rem+2px)",
  padding:"0.25rem 0.5rem",
  fontSize:"0.875rem",
  borderRadius:"0.2rem",
"selectors": {
"&::-webkit-file-upload-button": {
  padding:"0.25rem 0.5rem",
  margin:"-0.25rem -0.5rem",
  WebkitMarginEnd:"0.5rem",
  marginInlineEnd:"0.5rem",
},
},
"selectors": {
"&::file-selector-button": {
  padding:"0.25rem 0.5rem",
  margin:"-0.25rem -0.5rem",
  WebkitMarginEnd:"0.5rem",
  marginInlineEnd:"0.5rem",
},
},
"selectors": {
"&::-webkit-file-upload-button": {
  padding:"0.25rem 0.5rem",
  margin:"-0.25rem -0.5rem",
  WebkitMarginEnd:"0.5rem",
  marginInlineEnd:"0.5rem",
},
},
});
export const formFloating = style({
  position:"relative",
  height:"calc(3.5rem+2px)",
  lineHeight:"1.25",
  height:"calc(3.5rem+2px)",
  lineHeight:"1.25",
  padding:"1rem 0.75rem",
"::-moz-placeholder": {
  color:"transparent",
},
"::placeholder": {
  color:"transparent",
},
"selectors": {
"&:not(:-moz-placeholder-shown)": {
  paddingTop:"1.625rem",
  paddingBottom:"0.625rem",
},
},
":focus": {
  paddingTop:"1.625rem",
  paddingBottom:"0.625rem",
},
"selectors": {
"&:not(:placeholder-shown)": {
  paddingTop:"1.625rem",
  paddingBottom:"0.625rem",
},
},
"selectors": {
"&:-webkit-autofill": {
  paddingTop:"1.625rem",
  paddingBottom:"0.625rem",
},
},
  paddingTop:"1.625rem",
  paddingBottom:"0.625rem",
});
export const formLabel = style({
  marginBottom:"0.5rem",
});
export const formRange = style({
  width:"100%",
  height:"1.5rem",
  padding:"0",
  backgroundColor:"transparent",
  WebkitAppearance:"none",
  MozAppearance:"none",
  appearance:"none",
":focus": {
  outline:"0",
},
":focus::-webkit-slider-thumb": {
  boxShadow:"0 0 0 1px fff , 0 0 0 0.25rem rgba(13,110,253,0.25)",
},
":focus::-moz-range-thumb": {
  boxShadow:"0 0 0 1px fff , 0 0 0 0.25rem rgba(13,110,253,0.25)",
},
"selectors": {
"&::-moz-focus-outer": {
  border:"0",
},
},
"::-webkit-slider-thumb": {
  width:"1rem",
  height:"1rem",
  marginTop:"-0.25rem",
  backgroundColor:"0d6efd",
  border:"0",
  borderRadius:"1rem",
  WebkitTransition:"background-color 0.15s ease-in-out , border-color 0.15s ease-in-out , box-shadow 0.15s ease-in-out",
  transition:"background-color 0.15s ease-in-out , border-color 0.15s ease-in-out , box-shadow 0.15s ease-in-out",
  WebkitAppearance:"none",
  appearance:"none",
},
"::-webkit-slider-thumb:active": {
  backgroundColor:"b6d4fe",
},
"::-webkit-slider-runnable-track": {
  width:"100%",
  height:"0.5rem",
  color:"transparent",
  cursor:"pointer",
  backgroundColor:"dee2e6",
  borderColor:"transparent",
  borderRadius:"1rem",
},
"::-moz-range-thumb": {
  width:"1rem",
  height:"1rem",
  backgroundColor:"0d6efd",
  border:"0",
  borderRadius:"1rem",
  MozTransition:"background-color 0.15s ease-in-out , border-color 0.15s ease-in-out , box-shadow 0.15s ease-in-out",
  transition:"background-color 0.15s ease-in-out , border-color 0.15s ease-in-out , box-shadow 0.15s ease-in-out",
  MozAppearance:"none",
  appearance:"none",
},
"::-moz-range-thumb:active": {
  backgroundColor:"b6d4fe",
},
"::-moz-range-track": {
  width:"100%",
  height:"0.5rem",
  color:"transparent",
  cursor:"pointer",
  backgroundColor:"dee2e6",
  borderColor:"transparent",
  borderRadius:"1rem",
},
":disabled": {
  pointerEvents:"none",
},
":disabled::-webkit-slider-thumb": {
  backgroundColor:"adb5bd",
},
":disabled::-moz-range-thumb": {
  backgroundColor:"adb5bd",
},
"@media": {
"(prefers-reduced-motion: reduce)": {
"::-webkit-slider-thumb": {
  WebkitTransition:"none",
  transition:"none",
},
},
"(prefers-reduced-motion: reduce)": {
"::-moz-range-thumb": {
  MozTransition:"none",
  transition:"none",
},
},
},
});
export const formSelect = style({
  display:"block",
  width:"100%",
  padding:"0.375rem 2.25rem 0.375rem 0.75rem",
  MozPaddingStart:"calc(0.75rem-3px)",
  fontSize:"1rem",
  fontWeight:"400",
  lineHeight:"1.5",
  color:"212529",
  backgroundColor:"fff",
  backgroundImage:"url(data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e)",
  backgroundRepeat:"no-repeat",
  backgroundPosition:"right 0.75rem center",
  backgroundSize:"16px 12px",
  border:"1px solid ced4da",
  borderRadius:"0.25rem",
  transition:"border-color 0.15s ease-in-out , box-shadow 0.15s ease-in-out",
  WebkitAppearance:"none",
  MozAppearance:"none",
  appearance:"none",
":focus": {
  borderColor:"86b7fe",
  outline:"0",
  boxShadow:"0 0 0 0.25rem rgba(13,110,253,0.25)",
},
"selectors": {
"&[multiple]": {
  paddingRight:"0.75rem",
  backgroundImage:"none",
},
},
"selectors": {
"&[size]:not([size='1'])": {
  paddingRight:"0.75rem",
  backgroundImage:"none",
},
},
":disabled": {
  backgroundColor:"e9ecef",
},
"selectors": {
"&:-moz-focusring": {
  color:"transparent",
  textShadow:"0 0 0 212529",
},
},
  borderColor:"198754",
"selectors": {
"&:not([multiple]):not([size])": {
  paddingRight:"4.125rem",
  backgroundImage:"url(data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e) , url(data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e)",
  backgroundPosition:"right 0.75rem center , center right 2.25rem",
  backgroundSize:"16px 12px , calc(0.75em+0.375rem) calc(0.75em+0.375rem)",
},
},
"selectors": {
"&:not([multiple])[size='1']": {
  paddingRight:"4.125rem",
  backgroundImage:"url(data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e) , url(data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e)",
  backgroundPosition:"right 0.75rem center , center right 2.25rem",
  backgroundSize:"16px 12px , calc(0.75em+0.375rem) calc(0.75em+0.375rem)",
},
},
":focus": {
  borderColor:"198754",
  boxShadow:"0 0 0 0.25rem rgba(25,135,84,0.25)",
},
  borderColor:"dc3545",
"selectors": {
"&:not([multiple]):not([size])": {
  paddingRight:"4.125rem",
  backgroundImage:"url(data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e) , url(data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e)",
  backgroundPosition:"right 0.75rem center , center right 2.25rem",
  backgroundSize:"16px 12px , calc(0.75em+0.375rem) calc(0.75em+0.375rem)",
},
},
"selectors": {
"&:not([multiple])[size='1']": {
  paddingRight:"4.125rem",
  backgroundImage:"url(data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e) , url(data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e)",
  backgroundPosition:"right 0.75rem center , center right 2.25rem",
  backgroundSize:"16px 12px , calc(0.75em+0.375rem) calc(0.75em+0.375rem)",
},
},
":focus": {
  borderColor:"dc3545",
  boxShadow:"0 0 0 0.25rem rgba(220,53,69,0.25)",
},
"@media": {
"(prefers-reduced-motion: reduce)": {
  transition:"none",
},
},
});
export const formSelectLg = style({
  paddingTop:"0.5rem",
  paddingBottom:"0.5rem",
  paddingLeft:"1rem",
  fontSize:"1.25rem",
  borderRadius:"0.3rem",
});
export const formSelectSm = style({
  paddingTop:"0.25rem",
  paddingBottom:"0.25rem",
  paddingLeft:"0.5rem",
  fontSize:"0.875rem",
  borderRadius:"0.2rem",
});
export const formSwitch = style({
  paddingLeft:"2.5em",
  width:"2em",
  marginLeft:"-2.5em",
  backgroundImage:"url(data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba%280, 0, 0, 0.25%29'/%3e%3c/svg%3e)",
  backgroundPosition:"left center",
  borderRadius:"2em",
  transition:"background-position 0.15s ease-in-out",
":focus": {
  backgroundImage:"url(data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%2386b7fe'/%3e%3c/svg%3e)",
},
":checked": {
  backgroundPosition:"right center",
  backgroundImage:"url(data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e)",
},
"@media": {
"(prefers-reduced-motion: reduce)": {
  transition:"none",
},
},
});
export const formText = style({
  marginTop:"0.25rem",
  fontSize:"0.875em",
  color:"6c757d",
});
export const fs1 = style({
  fontSize:"calc(1.375rem+1.5vw)",
"@media": {
"(min-width: 1200px)": {
  fontSize:"2.5rem",
},
},
});
export const fs2 = style({
  fontSize:"calc(1.325rem+0.9vw)",
"@media": {
"(min-width: 1200px)": {
  fontSize:"2rem",
},
},
});
export const fs3 = style({
  fontSize:"calc(1.3rem+0.6vw)",
"@media": {
"(min-width: 1200px)": {
  fontSize:"1.75rem",
},
},
});
export const fs4 = style({
  fontSize:"calc(1.275rem+0.3vw)",
"@media": {
"(min-width: 1200px)": {
  fontSize:"1.5rem",
},
},
});
export const fs5 = style({
  fontSize:"1.25rem",
});
export const fs6 = style({
  fontSize:"1rem",
});
export const fstItalic = style({
  fontStyle:"italic",
});
export const fstNormal = style({
  fontStyle:"normal",
});
export const fwBold = style({
  fontWeight:"700",
});
export const fwBolder = style({
  fontWeight:"bolder",
});
export const fwLight = style({
  fontWeight:"300",
});
export const fwLighter = style({
  fontWeight:"lighter",
});
export const fwNormal = style({
  fontWeight:"400",
});
export const g0 = style({
"vars": {
  "--bs-gutter-x":"0",
},
"vars": {
  "--bs-gutter-y":"0",
},
});
export const g1 = style({
"vars": {
  "--bs-gutter-x":"0.25rem",
},
"vars": {
  "--bs-gutter-y":"0.25rem",
},
});
export const g2 = style({
"vars": {
  "--bs-gutter-x":"0.5rem",
},
"vars": {
  "--bs-gutter-y":"0.5rem",
},
});
export const g3 = style({
"vars": {
  "--bs-gutter-x":"1rem",
},
"vars": {
  "--bs-gutter-y":"1rem",
},
});
export const g4 = style({
"vars": {
  "--bs-gutter-x":"1.5rem",
},
"vars": {
  "--bs-gutter-y":"1.5rem",
},
});
export const g5 = style({
"vars": {
  "--bs-gutter-x":"3rem",
},
"vars": {
  "--bs-gutter-y":"3rem",
},
});
export const gLg0 = style({
"@media": {
"(min-width: 992px)": {
"vars": {
  "--bs-gutter-x":"0",
},
},
"(min-width: 992px)": {
"vars": {
  "--bs-gutter-y":"0",
},
},
},
});
export const gLg1 = style({
"@media": {
"(min-width: 992px)": {
"vars": {
  "--bs-gutter-x":"0.25rem",
},
},
"(min-width: 992px)": {
"vars": {
  "--bs-gutter-y":"0.25rem",
},
},
},
});
export const gLg2 = style({
"@media": {
"(min-width: 992px)": {
"vars": {
  "--bs-gutter-x":"0.5rem",
},
},
"(min-width: 992px)": {
"vars": {
  "--bs-gutter-y":"0.5rem",
},
},
},
});
export const gLg3 = style({
"@media": {
"(min-width: 992px)": {
"vars": {
  "--bs-gutter-x":"1rem",
},
},
"(min-width: 992px)": {
"vars": {
  "--bs-gutter-y":"1rem",
},
},
},
});
export const gLg4 = style({
"@media": {
"(min-width: 992px)": {
"vars": {
  "--bs-gutter-x":"1.5rem",
},
},
"(min-width: 992px)": {
"vars": {
  "--bs-gutter-y":"1.5rem",
},
},
},
});
export const gLg5 = style({
"@media": {
"(min-width: 992px)": {
"vars": {
  "--bs-gutter-x":"3rem",
},
},
"(min-width: 992px)": {
"vars": {
  "--bs-gutter-y":"3rem",
},
},
},
});
export const gMd0 = style({
"@media": {
"(min-width: 768px)": {
"vars": {
  "--bs-gutter-x":"0",
},
},
"(min-width: 768px)": {
"vars": {
  "--bs-gutter-y":"0",
},
},
},
});
export const gMd1 = style({
"@media": {
"(min-width: 768px)": {
"vars": {
  "--bs-gutter-x":"0.25rem",
},
},
"(min-width: 768px)": {
"vars": {
  "--bs-gutter-y":"0.25rem",
},
},
},
});
export const gMd2 = style({
"@media": {
"(min-width: 768px)": {
"vars": {
  "--bs-gutter-x":"0.5rem",
},
},
"(min-width: 768px)": {
"vars": {
  "--bs-gutter-y":"0.5rem",
},
},
},
});
export const gMd3 = style({
"@media": {
"(min-width: 768px)": {
"vars": {
  "--bs-gutter-x":"1rem",
},
},
"(min-width: 768px)": {
"vars": {
  "--bs-gutter-y":"1rem",
},
},
},
});
export const gMd4 = style({
"@media": {
"(min-width: 768px)": {
"vars": {
  "--bs-gutter-x":"1.5rem",
},
},
"(min-width: 768px)": {
"vars": {
  "--bs-gutter-y":"1.5rem",
},
},
},
});
export const gMd5 = style({
"@media": {
"(min-width: 768px)": {
"vars": {
  "--bs-gutter-x":"3rem",
},
},
"(min-width: 768px)": {
"vars": {
  "--bs-gutter-y":"3rem",
},
},
},
});
export const gSm0 = style({
"@media": {
"(min-width: 576px)": {
"vars": {
  "--bs-gutter-x":"0",
},
},
"(min-width: 576px)": {
"vars": {
  "--bs-gutter-y":"0",
},
},
},
});
export const gSm1 = style({
"@media": {
"(min-width: 576px)": {
"vars": {
  "--bs-gutter-x":"0.25rem",
},
},
"(min-width: 576px)": {
"vars": {
  "--bs-gutter-y":"0.25rem",
},
},
},
});
export const gSm2 = style({
"@media": {
"(min-width: 576px)": {
"vars": {
  "--bs-gutter-x":"0.5rem",
},
},
"(min-width: 576px)": {
"vars": {
  "--bs-gutter-y":"0.5rem",
},
},
},
});
export const gSm3 = style({
"@media": {
"(min-width: 576px)": {
"vars": {
  "--bs-gutter-x":"1rem",
},
},
"(min-width: 576px)": {
"vars": {
  "--bs-gutter-y":"1rem",
},
},
},
});
export const gSm4 = style({
"@media": {
"(min-width: 576px)": {
"vars": {
  "--bs-gutter-x":"1.5rem",
},
},
"(min-width: 576px)": {
"vars": {
  "--bs-gutter-y":"1.5rem",
},
},
},
});
export const gSm5 = style({
"@media": {
"(min-width: 576px)": {
"vars": {
  "--bs-gutter-x":"3rem",
},
},
"(min-width: 576px)": {
"vars": {
  "--bs-gutter-y":"3rem",
},
},
},
});
export const gXl0 = style({
"@media": {
"(min-width: 1200px)": {
"vars": {
  "--bs-gutter-x":"0",
},
},
"(min-width: 1200px)": {
"vars": {
  "--bs-gutter-y":"0",
},
},
},
});
export const gXl1 = style({
"@media": {
"(min-width: 1200px)": {
"vars": {
  "--bs-gutter-x":"0.25rem",
},
},
"(min-width: 1200px)": {
"vars": {
  "--bs-gutter-y":"0.25rem",
},
},
},
});
export const gXl2 = style({
"@media": {
"(min-width: 1200px)": {
"vars": {
  "--bs-gutter-x":"0.5rem",
},
},
"(min-width: 1200px)": {
"vars": {
  "--bs-gutter-y":"0.5rem",
},
},
},
});
export const gXl3 = style({
"@media": {
"(min-width: 1200px)": {
"vars": {
  "--bs-gutter-x":"1rem",
},
},
"(min-width: 1200px)": {
"vars": {
  "--bs-gutter-y":"1rem",
},
},
},
});
export const gXl4 = style({
"@media": {
"(min-width: 1200px)": {
"vars": {
  "--bs-gutter-x":"1.5rem",
},
},
"(min-width: 1200px)": {
"vars": {
  "--bs-gutter-y":"1.5rem",
},
},
},
});
export const gXl5 = style({
"@media": {
"(min-width: 1200px)": {
"vars": {
  "--bs-gutter-x":"3rem",
},
},
"(min-width: 1200px)": {
"vars": {
  "--bs-gutter-y":"3rem",
},
},
},
});
export const gXxl0 = style({
"@media": {
"(min-width: 1400px)": {
"vars": {
  "--bs-gutter-x":"0",
},
},
"(min-width: 1400px)": {
"vars": {
  "--bs-gutter-y":"0",
},
},
},
});
export const gXxl1 = style({
"@media": {
"(min-width: 1400px)": {
"vars": {
  "--bs-gutter-x":"0.25rem",
},
},
"(min-width: 1400px)": {
"vars": {
  "--bs-gutter-y":"0.25rem",
},
},
},
});
export const gXxl2 = style({
"@media": {
"(min-width: 1400px)": {
"vars": {
  "--bs-gutter-x":"0.5rem",
},
},
"(min-width: 1400px)": {
"vars": {
  "--bs-gutter-y":"0.5rem",
},
},
},
});
export const gXxl3 = style({
"@media": {
"(min-width: 1400px)": {
"vars": {
  "--bs-gutter-x":"1rem",
},
},
"(min-width: 1400px)": {
"vars": {
  "--bs-gutter-y":"1rem",
},
},
},
});
export const gXxl4 = style({
"@media": {
"(min-width: 1400px)": {
"vars": {
  "--bs-gutter-x":"1.5rem",
},
},
"(min-width: 1400px)": {
"vars": {
  "--bs-gutter-y":"1.5rem",
},
},
},
});
export const gXxl5 = style({
"@media": {
"(min-width: 1400px)": {
"vars": {
  "--bs-gutter-x":"3rem",
},
},
"(min-width: 1400px)": {
"vars": {
  "--bs-gutter-y":"3rem",
},
},
},
});
export const gap0 = style({
  gap:"0",
});
export const gap1 = style({
  gap:"0.25rem",
});
export const gap2 = style({
  gap:"0.5rem",
});
export const gap3 = style({
  gap:"1rem",
});
export const gap4 = style({
  gap:"1.5rem",
});
export const gap5 = style({
  gap:"3rem",
});
export const gapLg0 = style({
"@media": {
"(min-width: 992px)": {
  gap:"0",
},
},
});
export const gapLg1 = style({
"@media": {
"(min-width: 992px)": {
  gap:"0.25rem",
},
},
});
export const gapLg2 = style({
"@media": {
"(min-width: 992px)": {
  gap:"0.5rem",
},
},
});
export const gapLg3 = style({
"@media": {
"(min-width: 992px)": {
  gap:"1rem",
},
},
});
export const gapLg4 = style({
"@media": {
"(min-width: 992px)": {
  gap:"1.5rem",
},
},
});
export const gapLg5 = style({
"@media": {
"(min-width: 992px)": {
  gap:"3rem",
},
},
});
export const gapMd0 = style({
"@media": {
"(min-width: 768px)": {
  gap:"0",
},
},
});
export const gapMd1 = style({
"@media": {
"(min-width: 768px)": {
  gap:"0.25rem",
},
},
});
export const gapMd2 = style({
"@media": {
"(min-width: 768px)": {
  gap:"0.5rem",
},
},
});
export const gapMd3 = style({
"@media": {
"(min-width: 768px)": {
  gap:"1rem",
},
},
});
export const gapMd4 = style({
"@media": {
"(min-width: 768px)": {
  gap:"1.5rem",
},
},
});
export const gapMd5 = style({
"@media": {
"(min-width: 768px)": {
  gap:"3rem",
},
},
});
export const gapSm0 = style({
"@media": {
"(min-width: 576px)": {
  gap:"0",
},
},
});
export const gapSm1 = style({
"@media": {
"(min-width: 576px)": {
  gap:"0.25rem",
},
},
});
export const gapSm2 = style({
"@media": {
"(min-width: 576px)": {
  gap:"0.5rem",
},
},
});
export const gapSm3 = style({
"@media": {
"(min-width: 576px)": {
  gap:"1rem",
},
},
});
export const gapSm4 = style({
"@media": {
"(min-width: 576px)": {
  gap:"1.5rem",
},
},
});
export const gapSm5 = style({
"@media": {
"(min-width: 576px)": {
  gap:"3rem",
},
},
});
export const gapXl0 = style({
"@media": {
"(min-width: 1200px)": {
  gap:"0",
},
},
});
export const gapXl1 = style({
"@media": {
"(min-width: 1200px)": {
  gap:"0.25rem",
},
},
});
export const gapXl2 = style({
"@media": {
"(min-width: 1200px)": {
  gap:"0.5rem",
},
},
});
export const gapXl3 = style({
"@media": {
"(min-width: 1200px)": {
  gap:"1rem",
},
},
});
export const gapXl4 = style({
"@media": {
"(min-width: 1200px)": {
  gap:"1.5rem",
},
},
});
export const gapXl5 = style({
"@media": {
"(min-width: 1200px)": {
  gap:"3rem",
},
},
});
export const gapXxl0 = style({
"@media": {
"(min-width: 1400px)": {
  gap:"0",
},
},
});
export const gapXxl1 = style({
"@media": {
"(min-width: 1400px)": {
  gap:"0.25rem",
},
},
});
export const gapXxl2 = style({
"@media": {
"(min-width: 1400px)": {
  gap:"0.5rem",
},
},
});
export const gapXxl3 = style({
"@media": {
"(min-width: 1400px)": {
  gap:"1rem",
},
},
});
export const gapXxl4 = style({
"@media": {
"(min-width: 1400px)": {
  gap:"1.5rem",
},
},
});
export const gapXxl5 = style({
"@media": {
"(min-width: 1400px)": {
  gap:"3rem",
},
},
});
export const gx0 = style({
"vars": {
  "--bs-gutter-x":"0",
},
});
export const gx1 = style({
"vars": {
  "--bs-gutter-x":"0.25rem",
},
});
export const gx2 = style({
"vars": {
  "--bs-gutter-x":"0.5rem",
},
});
export const gx3 = style({
"vars": {
  "--bs-gutter-x":"1rem",
},
});
export const gx4 = style({
"vars": {
  "--bs-gutter-x":"1.5rem",
},
});
export const gx5 = style({
"vars": {
  "--bs-gutter-x":"3rem",
},
});
export const gxLg0 = style({
"@media": {
"(min-width: 992px)": {
"vars": {
  "--bs-gutter-x":"0",
},
},
},
});
export const gxLg1 = style({
"@media": {
"(min-width: 992px)": {
"vars": {
  "--bs-gutter-x":"0.25rem",
},
},
},
});
export const gxLg2 = style({
"@media": {
"(min-width: 992px)": {
"vars": {
  "--bs-gutter-x":"0.5rem",
},
},
},
});
export const gxLg3 = style({
"@media": {
"(min-width: 992px)": {
"vars": {
  "--bs-gutter-x":"1rem",
},
},
},
});
export const gxLg4 = style({
"@media": {
"(min-width: 992px)": {
"vars": {
  "--bs-gutter-x":"1.5rem",
},
},
},
});
export const gxLg5 = style({
"@media": {
"(min-width: 992px)": {
"vars": {
  "--bs-gutter-x":"3rem",
},
},
},
});
export const gxMd0 = style({
"@media": {
"(min-width: 768px)": {
"vars": {
  "--bs-gutter-x":"0",
},
},
},
});
export const gxMd1 = style({
"@media": {
"(min-width: 768px)": {
"vars": {
  "--bs-gutter-x":"0.25rem",
},
},
},
});
export const gxMd2 = style({
"@media": {
"(min-width: 768px)": {
"vars": {
  "--bs-gutter-x":"0.5rem",
},
},
},
});
export const gxMd3 = style({
"@media": {
"(min-width: 768px)": {
"vars": {
  "--bs-gutter-x":"1rem",
},
},
},
});
export const gxMd4 = style({
"@media": {
"(min-width: 768px)": {
"vars": {
  "--bs-gutter-x":"1.5rem",
},
},
},
});
export const gxMd5 = style({
"@media": {
"(min-width: 768px)": {
"vars": {
  "--bs-gutter-x":"3rem",
},
},
},
});
export const gxSm0 = style({
"@media": {
"(min-width: 576px)": {
"vars": {
  "--bs-gutter-x":"0",
},
},
},
});
export const gxSm1 = style({
"@media": {
"(min-width: 576px)": {
"vars": {
  "--bs-gutter-x":"0.25rem",
},
},
},
});
export const gxSm2 = style({
"@media": {
"(min-width: 576px)": {
"vars": {
  "--bs-gutter-x":"0.5rem",
},
},
},
});
export const gxSm3 = style({
"@media": {
"(min-width: 576px)": {
"vars": {
  "--bs-gutter-x":"1rem",
},
},
},
});
export const gxSm4 = style({
"@media": {
"(min-width: 576px)": {
"vars": {
  "--bs-gutter-x":"1.5rem",
},
},
},
});
export const gxSm5 = style({
"@media": {
"(min-width: 576px)": {
"vars": {
  "--bs-gutter-x":"3rem",
},
},
},
});
export const gxXl0 = style({
"@media": {
"(min-width: 1200px)": {
"vars": {
  "--bs-gutter-x":"0",
},
},
},
});
export const gxXl1 = style({
"@media": {
"(min-width: 1200px)": {
"vars": {
  "--bs-gutter-x":"0.25rem",
},
},
},
});
export const gxXl2 = style({
"@media": {
"(min-width: 1200px)": {
"vars": {
  "--bs-gutter-x":"0.5rem",
},
},
},
});
export const gxXl3 = style({
"@media": {
"(min-width: 1200px)": {
"vars": {
  "--bs-gutter-x":"1rem",
},
},
},
});
export const gxXl4 = style({
"@media": {
"(min-width: 1200px)": {
"vars": {
  "--bs-gutter-x":"1.5rem",
},
},
},
});
export const gxXl5 = style({
"@media": {
"(min-width: 1200px)": {
"vars": {
  "--bs-gutter-x":"3rem",
},
},
},
});
export const gxXxl0 = style({
"@media": {
"(min-width: 1400px)": {
"vars": {
  "--bs-gutter-x":"0",
},
},
},
});
export const gxXxl1 = style({
"@media": {
"(min-width: 1400px)": {
"vars": {
  "--bs-gutter-x":"0.25rem",
},
},
},
});
export const gxXxl2 = style({
"@media": {
"(min-width: 1400px)": {
"vars": {
  "--bs-gutter-x":"0.5rem",
},
},
},
});
export const gxXxl3 = style({
"@media": {
"(min-width: 1400px)": {
"vars": {
  "--bs-gutter-x":"1rem",
},
},
},
});
export const gxXxl4 = style({
"@media": {
"(min-width: 1400px)": {
"vars": {
  "--bs-gutter-x":"1.5rem",
},
},
},
});
export const gxXxl5 = style({
"@media": {
"(min-width: 1400px)": {
"vars": {
  "--bs-gutter-x":"3rem",
},
},
},
});
export const gy0 = style({
"vars": {
  "--bs-gutter-y":"0",
},
});
export const gy1 = style({
"vars": {
  "--bs-gutter-y":"0.25rem",
},
});
export const gy2 = style({
"vars": {
  "--bs-gutter-y":"0.5rem",
},
});
export const gy3 = style({
"vars": {
  "--bs-gutter-y":"1rem",
},
});
export const gy4 = style({
"vars": {
  "--bs-gutter-y":"1.5rem",
},
});
export const gy5 = style({
"vars": {
  "--bs-gutter-y":"3rem",
},
});
export const gyLg0 = style({
"@media": {
"(min-width: 992px)": {
"vars": {
  "--bs-gutter-y":"0",
},
},
},
});
export const gyLg1 = style({
"@media": {
"(min-width: 992px)": {
"vars": {
  "--bs-gutter-y":"0.25rem",
},
},
},
});
export const gyLg2 = style({
"@media": {
"(min-width: 992px)": {
"vars": {
  "--bs-gutter-y":"0.5rem",
},
},
},
});
export const gyLg3 = style({
"@media": {
"(min-width: 992px)": {
"vars": {
  "--bs-gutter-y":"1rem",
},
},
},
});
export const gyLg4 = style({
"@media": {
"(min-width: 992px)": {
"vars": {
  "--bs-gutter-y":"1.5rem",
},
},
},
});
export const gyLg5 = style({
"@media": {
"(min-width: 992px)": {
"vars": {
  "--bs-gutter-y":"3rem",
},
},
},
});
export const gyMd0 = style({
"@media": {
"(min-width: 768px)": {
"vars": {
  "--bs-gutter-y":"0",
},
},
},
});
export const gyMd1 = style({
"@media": {
"(min-width: 768px)": {
"vars": {
  "--bs-gutter-y":"0.25rem",
},
},
},
});
export const gyMd2 = style({
"@media": {
"(min-width: 768px)": {
"vars": {
  "--bs-gutter-y":"0.5rem",
},
},
},
});
export const gyMd3 = style({
"@media": {
"(min-width: 768px)": {
"vars": {
  "--bs-gutter-y":"1rem",
},
},
},
});
export const gyMd4 = style({
"@media": {
"(min-width: 768px)": {
"vars": {
  "--bs-gutter-y":"1.5rem",
},
},
},
});
export const gyMd5 = style({
"@media": {
"(min-width: 768px)": {
"vars": {
  "--bs-gutter-y":"3rem",
},
},
},
});
export const gySm0 = style({
"@media": {
"(min-width: 576px)": {
"vars": {
  "--bs-gutter-y":"0",
},
},
},
});
export const gySm1 = style({
"@media": {
"(min-width: 576px)": {
"vars": {
  "--bs-gutter-y":"0.25rem",
},
},
},
});
export const gySm2 = style({
"@media": {
"(min-width: 576px)": {
"vars": {
  "--bs-gutter-y":"0.5rem",
},
},
},
});
export const gySm3 = style({
"@media": {
"(min-width: 576px)": {
"vars": {
  "--bs-gutter-y":"1rem",
},
},
},
});
export const gySm4 = style({
"@media": {
"(min-width: 576px)": {
"vars": {
  "--bs-gutter-y":"1.5rem",
},
},
},
});
export const gySm5 = style({
"@media": {
"(min-width: 576px)": {
"vars": {
  "--bs-gutter-y":"3rem",
},
},
},
});
export const gyXl0 = style({
"@media": {
"(min-width: 1200px)": {
"vars": {
  "--bs-gutter-y":"0",
},
},
},
});
export const gyXl1 = style({
"@media": {
"(min-width: 1200px)": {
"vars": {
  "--bs-gutter-y":"0.25rem",
},
},
},
});
export const gyXl2 = style({
"@media": {
"(min-width: 1200px)": {
"vars": {
  "--bs-gutter-y":"0.5rem",
},
},
},
});
export const gyXl3 = style({
"@media": {
"(min-width: 1200px)": {
"vars": {
  "--bs-gutter-y":"1rem",
},
},
},
});
export const gyXl4 = style({
"@media": {
"(min-width: 1200px)": {
"vars": {
  "--bs-gutter-y":"1.5rem",
},
},
},
});
export const gyXl5 = style({
"@media": {
"(min-width: 1200px)": {
"vars": {
  "--bs-gutter-y":"3rem",
},
},
},
});
export const gyXxl0 = style({
"@media": {
"(min-width: 1400px)": {
"vars": {
  "--bs-gutter-y":"0",
},
},
},
});
export const gyXxl1 = style({
"@media": {
"(min-width: 1400px)": {
"vars": {
  "--bs-gutter-y":"0.25rem",
},
},
},
});
export const gyXxl2 = style({
"@media": {
"(min-width: 1400px)": {
"vars": {
  "--bs-gutter-y":"0.5rem",
},
},
},
});
export const gyXxl3 = style({
"@media": {
"(min-width: 1400px)": {
"vars": {
  "--bs-gutter-y":"1rem",
},
},
},
});
export const gyXxl4 = style({
"@media": {
"(min-width: 1400px)": {
"vars": {
  "--bs-gutter-y":"1.5rem",
},
},
},
});
export const gyXxl5 = style({
"@media": {
"(min-width: 1400px)": {
"vars": {
  "--bs-gutter-y":"3rem",
},
},
},
});
export const h1 = style({
  marginTop:"0",
  marginBottom:"0.5rem",
  fontWeight:"500",
  lineHeight:"1.2",
  fontSize:"calc(1.375rem+1.5vw)",
"@media": {
"(min-width: 1200px)": {
  fontSize:"2.5rem",
},
},
});
export const h100 = style({
  height:"100%",
});
export const h2 = style({
  marginTop:"0",
  marginBottom:"0.5rem",
  fontWeight:"500",
  lineHeight:"1.2",
  fontSize:"calc(1.325rem+0.9vw)",
"@media": {
"(min-width: 1200px)": {
  fontSize:"2rem",
},
},
});
export const h25 = style({
  height:"25%",
});
export const h3 = style({
  marginTop:"0",
  marginBottom:"0.5rem",
  fontWeight:"500",
  lineHeight:"1.2",
  fontSize:"calc(1.3rem+0.6vw)",
"@media": {
"(min-width: 1200px)": {
  fontSize:"1.75rem",
},
},
});
export const h4 = style({
  marginTop:"0",
  marginBottom:"0.5rem",
  fontWeight:"500",
  lineHeight:"1.2",
  fontSize:"calc(1.275rem+0.3vw)",
"@media": {
"(min-width: 1200px)": {
  fontSize:"1.5rem",
},
},
});
export const h5 = style({
  marginTop:"0",
  marginBottom:"0.5rem",
  fontWeight:"500",
  lineHeight:"1.2",
  fontSize:"1.25rem",
});
export const h50 = style({
  height:"50%",
});
export const h6 = style({
  marginTop:"0",
  marginBottom:"0.5rem",
  fontWeight:"500",
  lineHeight:"1.2",
  fontSize:"1rem",
});
export const h75 = style({
  height:"75%",
});
export const hAuto = style({
  height:"auto",
});
export const hstack = style({
  display:"flex",
  flexDirection:"row",
  alignItems:"center",
  alignSelf:"stretch",
});
export const imgFluid = style({
  maxWidth:"100%",
  height:"auto",
});
export const imgThumbnail = style({
  padding:"0.25rem",
  backgroundColor:"fff",
  border:"1px solid dee2e6",
  borderRadius:"0.25rem",
  maxWidth:"100%",
  height:"auto",
});
export const initialism = style({
  fontSize:"0.875em",
  textTransform:"uppercase",
});
export const inputGroup = style({
  position:"relative",
  display:"flex",
  flexWrap:"wrap",
  alignItems:"stretch",
  width:"100%",
  position:"relative",
  flex:"1 1 auto",
  width:"1%",
  minWidth:"0",
  position:"relative",
  flex:"1 1 auto",
  width:"1%",
  minWidth:"0",
":focus": {
  zIndex:"3",
},
":focus": {
  zIndex:"3",
},
  position:"relative",
  zIndex:"2",
":focus": {
  zIndex:"3",
},
"selectors": {
"&:not:not(:last-child):not:not": {
  borderTopRightRadius:"0",
  borderBottomRightRadius:"0",
},
},
"selectors": {
"&:not:nth-last-child(+3)": {
  borderTopRightRadius:"0",
  borderBottomRightRadius:"0",
},
},
"selectors": {
"&:nth-last-child(+3):not:not": {
  borderTopRightRadius:"0",
  borderBottomRightRadius:"0",
},
},
"selectors": {
"&:nth-last-child(+4)": {
  borderTopRightRadius:"0",
  borderBottomRightRadius:"0",
},
},
"selectors": {
"&:not(:first-child):not:not:not:not:not": {
  marginLeft:"-1px",
  borderTopLeftRadius:"0",
  borderBottomLeftRadius:"0",
},
},
  zIndex:"1",
  zIndex:"1",
":focus": {
  zIndex:"3",
},
":focus": {
  zIndex:"3",
},
  zIndex:"2",
  zIndex:"2",
":focus": {
  zIndex:"3",
},
":focus": {
  zIndex:"3",
},
});
export const inputGroupLg = style({
  padding:"0.5rem 1rem",
  fontSize:"1.25rem",
  borderRadius:"0.3rem",
  padding:"0.5rem 1rem",
  fontSize:"1.25rem",
  borderRadius:"0.3rem",
  padding:"0.5rem 1rem",
  fontSize:"1.25rem",
  borderRadius:"0.3rem",
  padding:"0.5rem 1rem",
  fontSize:"1.25rem",
  borderRadius:"0.3rem",
  paddingRight:"3rem",
});
export const inputGroupSm = style({
  padding:"0.25rem 0.5rem",
  fontSize:"0.875rem",
  borderRadius:"0.2rem",
  padding:"0.25rem 0.5rem",
  fontSize:"0.875rem",
  borderRadius:"0.2rem",
  padding:"0.25rem 0.5rem",
  fontSize:"0.875rem",
  borderRadius:"0.2rem",
  padding:"0.25rem 0.5rem",
  fontSize:"0.875rem",
  borderRadius:"0.2rem",
  paddingRight:"3rem",
});
export const inputGroupText = style({
  display:"flex",
  alignItems:"center",
  padding:"0.375rem 0.75rem",
  fontSize:"1rem",
  fontWeight:"400",
  lineHeight:"1.5",
  color:"212529",
  textAlign:"center",
  whiteSpace:"nowrap",
  backgroundColor:"e9ecef",
  border:"1px solid ced4da",
  borderRadius:"0.25rem",
});
export const invalidFeedback = style({
  display:"none",
  width:"100%",
  marginTop:"0.25rem",
  fontSize:"0.875em",
  color:"dc3545",
});
export const invalidTooltip = style({
  position:"absolute",
  top:"100%",
  zIndex:"5",
  display:"none",
  maxWidth:"100%",
  padding:"0.25rem 0.5rem",
  marginTop:"0.1rem",
  fontSize:"0.875rem",
  color:"fff",
  backgroundColor:"rgba(220,53,69,0.9)",
  borderRadius:"0.25rem",
});
export const invisible = style({
  visibility:"hidden",
});
export const isInvalid = style({
  display:"block",
  display:"block",
});
export const isValid = style({
  display:"block",
  display:"block",
});
export const justifyContentAround = style({
  justifyContent:"space-around",
});
export const justifyContentBetween = style({
  justifyContent:"space-between",
});
export const justifyContentCenter = style({
  justifyContent:"center",
});
export const justifyContentEnd = style({
  justifyContent:"flex-end",
});
export const justifyContentEvenly = style({
  justifyContent:"space-evenly",
});
export const justifyContentLgAround = style({
"@media": {
"(min-width: 992px)": {
  justifyContent:"space-around",
},
},
});
export const justifyContentLgBetween = style({
"@media": {
"(min-width: 992px)": {
  justifyContent:"space-between",
},
},
});
export const justifyContentLgCenter = style({
"@media": {
"(min-width: 992px)": {
  justifyContent:"center",
},
},
});
export const justifyContentLgEnd = style({
"@media": {
"(min-width: 992px)": {
  justifyContent:"flex-end",
},
},
});
export const justifyContentLgEvenly = style({
"@media": {
"(min-width: 992px)": {
  justifyContent:"space-evenly",
},
},
});
export const justifyContentLgStart = style({
"@media": {
"(min-width: 992px)": {
  justifyContent:"flex-start",
},
},
});
export const justifyContentMdAround = style({
"@media": {
"(min-width: 768px)": {
  justifyContent:"space-around",
},
},
});
export const justifyContentMdBetween = style({
"@media": {
"(min-width: 768px)": {
  justifyContent:"space-between",
},
},
});
export const justifyContentMdCenter = style({
"@media": {
"(min-width: 768px)": {
  justifyContent:"center",
},
},
});
export const justifyContentMdEnd = style({
"@media": {
"(min-width: 768px)": {
  justifyContent:"flex-end",
},
},
});
export const justifyContentMdEvenly = style({
"@media": {
"(min-width: 768px)": {
  justifyContent:"space-evenly",
},
},
});
export const justifyContentMdStart = style({
"@media": {
"(min-width: 768px)": {
  justifyContent:"flex-start",
},
},
});
export const justifyContentSmAround = style({
"@media": {
"(min-width: 576px)": {
  justifyContent:"space-around",
},
},
});
export const justifyContentSmBetween = style({
"@media": {
"(min-width: 576px)": {
  justifyContent:"space-between",
},
},
});
export const justifyContentSmCenter = style({
"@media": {
"(min-width: 576px)": {
  justifyContent:"center",
},
},
});
export const justifyContentSmEnd = style({
"@media": {
"(min-width: 576px)": {
  justifyContent:"flex-end",
},
},
});
export const justifyContentSmEvenly = style({
"@media": {
"(min-width: 576px)": {
  justifyContent:"space-evenly",
},
},
});
export const justifyContentSmStart = style({
"@media": {
"(min-width: 576px)": {
  justifyContent:"flex-start",
},
},
});
export const justifyContentStart = style({
  justifyContent:"flex-start",
});
export const justifyContentXlAround = style({
"@media": {
"(min-width: 1200px)": {
  justifyContent:"space-around",
},
},
});
export const justifyContentXlBetween = style({
"@media": {
"(min-width: 1200px)": {
  justifyContent:"space-between",
},
},
});
export const justifyContentXlCenter = style({
"@media": {
"(min-width: 1200px)": {
  justifyContent:"center",
},
},
});
export const justifyContentXlEnd = style({
"@media": {
"(min-width: 1200px)": {
  justifyContent:"flex-end",
},
},
});
export const justifyContentXlEvenly = style({
"@media": {
"(min-width: 1200px)": {
  justifyContent:"space-evenly",
},
},
});
export const justifyContentXlStart = style({
"@media": {
"(min-width: 1200px)": {
  justifyContent:"flex-start",
},
},
});
export const justifyContentXxlAround = style({
"@media": {
"(min-width: 1400px)": {
  justifyContent:"space-around",
},
},
});
export const justifyContentXxlBetween = style({
"@media": {
"(min-width: 1400px)": {
  justifyContent:"space-between",
},
},
});
export const justifyContentXxlCenter = style({
"@media": {
"(min-width: 1400px)": {
  justifyContent:"center",
},
},
});
export const justifyContentXxlEnd = style({
"@media": {
"(min-width: 1400px)": {
  justifyContent:"flex-end",
},
},
});
export const justifyContentXxlEvenly = style({
"@media": {
"(min-width: 1400px)": {
  justifyContent:"space-evenly",
},
},
});
export const justifyContentXxlStart = style({
"@media": {
"(min-width: 1400px)": {
  justifyContent:"flex-start",
},
},
});
export const lead = style({
  fontSize:"1.25rem",
  fontWeight:"300",
});
export const lh1 = style({
  lineHeight:"1",
});
export const lhBase = style({
  lineHeight:"1.5",
});
export const lhLg = style({
  lineHeight:"2",
});
export const lhSm = style({
  lineHeight:"1.25",
});
export const linkDanger = style({
  color:"dc3545",
":hover": {
  color:"b02a37",
},
":focus": {
  color:"b02a37",
},
});
export const linkDark = style({
  color:"212529",
":hover": {
  color:"1a1e21",
},
":focus": {
  color:"1a1e21",
},
});
export const linkInfo = style({
  color:"0dcaf0",
":hover": {
  color:"3dd5f3",
},
":focus": {
  color:"3dd5f3",
},
});
export const linkLight = style({
  color:"f8f9fa",
":hover": {
  color:"f9fafb",
},
":focus": {
  color:"f9fafb",
},
});
export const linkPrimary = style({
  color:"0d6efd",
":hover": {
  color:"0a58ca",
},
":focus": {
  color:"0a58ca",
},
});
export const linkSecondary = style({
  color:"6c757d",
":hover": {
  color:"565e64",
},
":focus": {
  color:"565e64",
},
});
export const linkSuccess = style({
  color:"198754",
":hover": {
  color:"146c43",
},
":focus": {
  color:"146c43",
},
});
export const linkWarning = style({
  color:"ffc107",
":hover": {
  color:"ffcd39",
},
":focus": {
  color:"ffcd39",
},
});
export const listGroup = style({
  display:"flex",
  flexDirection:"column",
  paddingLeft:"0",
  marginBottom:"0",
  borderRadius:"0.25rem",
});
export const listGroupFlush = style({
  borderRadius:"0",
  borderWidth:"0 0 1px",
":last-child": {
  borderBottomWidth:"0",
},
});
export const listGroupHorizontal = style({
  flexDirection:"row",
":first-child": {
  borderBottomLeftRadius:"0.25rem",
  borderTopRightRadius:"0",
},
":last-child": {
  borderTopRightRadius:"0.25rem",
  borderBottomLeftRadius:"0",
},
  marginTop:"0",
  borderTopWidth:"1px",
  borderLeftWidth:"0",
  marginLeft:"-1px",
  borderLeftWidth:"1px",
});
export const listGroupHorizontalLg = style({
"@media": {
"(min-width: 992px)": {
  flexDirection:"row",
},
"(min-width: 992px)": {
":first-child": {
  borderBottomLeftRadius:"0.25rem",
  borderTopRightRadius:"0",
},
},
"(min-width: 992px)": {
":last-child": {
  borderTopRightRadius:"0.25rem",
  borderBottomLeftRadius:"0",
},
},
"(min-width: 992px)": {
  marginTop:"0",
},
"(min-width: 992px)": {
  borderTopWidth:"1px",
  borderLeftWidth:"0",
},
"(min-width: 992px)": {
  marginLeft:"-1px",
  borderLeftWidth:"1px",
},
},
});
export const listGroupHorizontalMd = style({
"@media": {
"(min-width: 768px)": {
  flexDirection:"row",
},
"(min-width: 768px)": {
":first-child": {
  borderBottomLeftRadius:"0.25rem",
  borderTopRightRadius:"0",
},
},
"(min-width: 768px)": {
":last-child": {
  borderTopRightRadius:"0.25rem",
  borderBottomLeftRadius:"0",
},
},
"(min-width: 768px)": {
  marginTop:"0",
},
"(min-width: 768px)": {
  borderTopWidth:"1px",
  borderLeftWidth:"0",
},
"(min-width: 768px)": {
  marginLeft:"-1px",
  borderLeftWidth:"1px",
},
},
});
export const listGroupHorizontalSm = style({
"@media": {
"(min-width: 576px)": {
  flexDirection:"row",
},
"(min-width: 576px)": {
":first-child": {
  borderBottomLeftRadius:"0.25rem",
  borderTopRightRadius:"0",
},
},
"(min-width: 576px)": {
":last-child": {
  borderTopRightRadius:"0.25rem",
  borderBottomLeftRadius:"0",
},
},
"(min-width: 576px)": {
  marginTop:"0",
},
"(min-width: 576px)": {
  borderTopWidth:"1px",
  borderLeftWidth:"0",
},
"(min-width: 576px)": {
  marginLeft:"-1px",
  borderLeftWidth:"1px",
},
},
});
export const listGroupHorizontalXl = style({
"@media": {
"(min-width: 1200px)": {
  flexDirection:"row",
},
"(min-width: 1200px)": {
":first-child": {
  borderBottomLeftRadius:"0.25rem",
  borderTopRightRadius:"0",
},
},
"(min-width: 1200px)": {
":last-child": {
  borderTopRightRadius:"0.25rem",
  borderBottomLeftRadius:"0",
},
},
"(min-width: 1200px)": {
  marginTop:"0",
},
"(min-width: 1200px)": {
  borderTopWidth:"1px",
  borderLeftWidth:"0",
},
"(min-width: 1200px)": {
  marginLeft:"-1px",
  borderLeftWidth:"1px",
},
},
});
export const listGroupHorizontalXxl = style({
"@media": {
"(min-width: 1400px)": {
  flexDirection:"row",
},
"(min-width: 1400px)": {
":first-child": {
  borderBottomLeftRadius:"0.25rem",
  borderTopRightRadius:"0",
},
},
"(min-width: 1400px)": {
":last-child": {
  borderTopRightRadius:"0.25rem",
  borderBottomLeftRadius:"0",
},
},
"(min-width: 1400px)": {
  marginTop:"0",
},
"(min-width: 1400px)": {
  borderTopWidth:"1px",
  borderLeftWidth:"0",
},
"(min-width: 1400px)": {
  marginLeft:"-1px",
  borderLeftWidth:"1px",
},
},
});
export const listGroupItem = style({
  position:"relative",
  display:"block",
  padding:"0.5rem 1rem",
  color:"212529",
  textDecoration:"none",
  backgroundColor:"fff",
  border:"1px solid rgba(0,0,0,0.125)",
":first-child": {
  borderTopLeftRadius:"inherit",
  borderTopRightRadius:"inherit",
},
":last-child": {
  borderBottomRightRadius:"inherit",
  borderBottomLeftRadius:"inherit",
},
  color:"6c757d",
  pointerEvents:"none",
  backgroundColor:"fff",
":disabled": {
  color:"6c757d",
  pointerEvents:"none",
  backgroundColor:"fff",
},
  zIndex:"2",
  color:"fff",
  backgroundColor:"0d6efd",
  borderColor:"0d6efd",
  borderTopWidth:"0",
  marginTop:"-1px",
  borderTopWidth:"1px",
});
export const listGroupItemAction = style({
  width:"100%",
  color:"495057",
  textAlign:"inherit",
":hover": {
  zIndex:"1",
  color:"495057",
  textDecoration:"none",
  backgroundColor:"f8f9fa",
},
":focus": {
  zIndex:"1",
  color:"495057",
  textDecoration:"none",
  backgroundColor:"f8f9fa",
},
":active": {
  color:"212529",
  backgroundColor:"e9ecef",
},
});
export const listGroupItemDanger = style({
  color:"842029",
  backgroundColor:"f8d7da",
":hover": {
  color:"842029",
  backgroundColor:"dfc2c4",
},
":focus": {
  color:"842029",
  backgroundColor:"dfc2c4",
},
  color:"fff",
  backgroundColor:"842029",
  borderColor:"842029",
});
export const listGroupItemDark = style({
  color:"141619",
  backgroundColor:"d3d3d4",
":hover": {
  color:"141619",
  backgroundColor:"bebebf",
},
":focus": {
  color:"141619",
  backgroundColor:"bebebf",
},
  color:"fff",
  backgroundColor:"141619",
  borderColor:"141619",
});
export const listGroupItemInfo = style({
  color:"055160",
  backgroundColor:"cff4fc",
":hover": {
  color:"055160",
  backgroundColor:"badce3",
},
":focus": {
  color:"055160",
  backgroundColor:"badce3",
},
  color:"fff",
  backgroundColor:"055160",
  borderColor:"055160",
});
export const listGroupItemLight = style({
  color:"636464",
  backgroundColor:"fefefe",
":hover": {
  color:"636464",
  backgroundColor:"e5e5e5",
},
":focus": {
  color:"636464",
  backgroundColor:"e5e5e5",
},
  color:"fff",
  backgroundColor:"636464",
  borderColor:"636464",
});
export const listGroupItemPrimary = style({
  color:"084298",
  backgroundColor:"cfe2ff",
":hover": {
  color:"084298",
  backgroundColor:"bacbe6",
},
":focus": {
  color:"084298",
  backgroundColor:"bacbe6",
},
  color:"fff",
  backgroundColor:"084298",
  borderColor:"084298",
});
export const listGroupItemSecondary = style({
  color:"41464b",
  backgroundColor:"e2e3e5",
":hover": {
  color:"41464b",
  backgroundColor:"cbccce",
},
":focus": {
  color:"41464b",
  backgroundColor:"cbccce",
},
  color:"fff",
  backgroundColor:"41464b",
  borderColor:"41464b",
});
export const listGroupItemSuccess = style({
  color:"0f5132",
  backgroundColor:"d1e7dd",
":hover": {
  color:"0f5132",
  backgroundColor:"bcd0c7",
},
":focus": {
  color:"0f5132",
  backgroundColor:"bcd0c7",
},
  color:"fff",
  backgroundColor:"0f5132",
  borderColor:"0f5132",
});
export const listGroupItemWarning = style({
  color:"664d03",
  backgroundColor:"fff3cd",
":hover": {
  color:"664d03",
  backgroundColor:"e6dbb9",
},
":focus": {
  color:"664d03",
  backgroundColor:"e6dbb9",
},
  color:"fff",
  backgroundColor:"664d03",
  borderColor:"664d03",
});
export const listGroupNumbered = style({
  listStyleType:"none",
  counterReset:"section",
});
export const listInline = style({
  paddingLeft:"0",
  listStyle:"none",
});
export const listInlineItem = style({
  display:"inline-block",
"selectors": {
"&:not(:last-child)": {
  marginRight:"0.5rem",
},
},
});
export const listUnstyled = style({
  paddingLeft:"0",
  listStyle:"none",
});
export const m0 = style({
  margin:"0",
});
export const m1 = style({
  margin:"0.25rem",
});
export const m2 = style({
  margin:"0.5rem",
});
export const m3 = style({
  margin:"1rem",
});
export const m4 = style({
  margin:"1.5rem",
});
export const m5 = style({
  margin:"3rem",
});
export const mAuto = style({
  margin:"auto",
});
export const mLg0 = style({
"@media": {
"(min-width: 992px)": {
  margin:"0",
},
},
});
export const mLg1 = style({
"@media": {
"(min-width: 992px)": {
  margin:"0.25rem",
},
},
});
export const mLg2 = style({
"@media": {
"(min-width: 992px)": {
  margin:"0.5rem",
},
},
});
export const mLg3 = style({
"@media": {
"(min-width: 992px)": {
  margin:"1rem",
},
},
});
export const mLg4 = style({
"@media": {
"(min-width: 992px)": {
  margin:"1.5rem",
},
},
});
export const mLg5 = style({
"@media": {
"(min-width: 992px)": {
  margin:"3rem",
},
},
});
export const mLgAuto = style({
"@media": {
"(min-width: 992px)": {
  margin:"auto",
},
},
});
export const mMd0 = style({
"@media": {
"(min-width: 768px)": {
  margin:"0",
},
},
});
export const mMd1 = style({
"@media": {
"(min-width: 768px)": {
  margin:"0.25rem",
},
},
});
export const mMd2 = style({
"@media": {
"(min-width: 768px)": {
  margin:"0.5rem",
},
},
});
export const mMd3 = style({
"@media": {
"(min-width: 768px)": {
  margin:"1rem",
},
},
});
export const mMd4 = style({
"@media": {
"(min-width: 768px)": {
  margin:"1.5rem",
},
},
});
export const mMd5 = style({
"@media": {
"(min-width: 768px)": {
  margin:"3rem",
},
},
});
export const mMdAuto = style({
"@media": {
"(min-width: 768px)": {
  margin:"auto",
},
},
});
export const mSm0 = style({
"@media": {
"(min-width: 576px)": {
  margin:"0",
},
},
});
export const mSm1 = style({
"@media": {
"(min-width: 576px)": {
  margin:"0.25rem",
},
},
});
export const mSm2 = style({
"@media": {
"(min-width: 576px)": {
  margin:"0.5rem",
},
},
});
export const mSm3 = style({
"@media": {
"(min-width: 576px)": {
  margin:"1rem",
},
},
});
export const mSm4 = style({
"@media": {
"(min-width: 576px)": {
  margin:"1.5rem",
},
},
});
export const mSm5 = style({
"@media": {
"(min-width: 576px)": {
  margin:"3rem",
},
},
});
export const mSmAuto = style({
"@media": {
"(min-width: 576px)": {
  margin:"auto",
},
},
});
export const mXl0 = style({
"@media": {
"(min-width: 1200px)": {
  margin:"0",
},
},
});
export const mXl1 = style({
"@media": {
"(min-width: 1200px)": {
  margin:"0.25rem",
},
},
});
export const mXl2 = style({
"@media": {
"(min-width: 1200px)": {
  margin:"0.5rem",
},
},
});
export const mXl3 = style({
"@media": {
"(min-width: 1200px)": {
  margin:"1rem",
},
},
});
export const mXl4 = style({
"@media": {
"(min-width: 1200px)": {
  margin:"1.5rem",
},
},
});
export const mXl5 = style({
"@media": {
"(min-width: 1200px)": {
  margin:"3rem",
},
},
});
export const mXlAuto = style({
"@media": {
"(min-width: 1200px)": {
  margin:"auto",
},
},
});
export const mXxl0 = style({
"@media": {
"(min-width: 1400px)": {
  margin:"0",
},
},
});
export const mXxl1 = style({
"@media": {
"(min-width: 1400px)": {
  margin:"0.25rem",
},
},
});
export const mXxl2 = style({
"@media": {
"(min-width: 1400px)": {
  margin:"0.5rem",
},
},
});
export const mXxl3 = style({
"@media": {
"(min-width: 1400px)": {
  margin:"1rem",
},
},
});
export const mXxl4 = style({
"@media": {
"(min-width: 1400px)": {
  margin:"1.5rem",
},
},
});
export const mXxl5 = style({
"@media": {
"(min-width: 1400px)": {
  margin:"3rem",
},
},
});
export const mXxlAuto = style({
"@media": {
"(min-width: 1400px)": {
  margin:"auto",
},
},
});
export const mark = style({
  padding:"0.2em",
  backgroundColor:"fcf8e3",
});
export const mb0 = style({
  marginBottom:"0",
});
export const mb1 = style({
  marginBottom:"0.25rem",
});
export const mb2 = style({
  marginBottom:"0.5rem",
});
export const mb3 = style({
  marginBottom:"1rem",
});
export const mb4 = style({
  marginBottom:"1.5rem",
});
export const mb5 = style({
  marginBottom:"3rem",
});
export const mbAuto = style({
  marginBottom:"auto",
});
export const mbLg0 = style({
"@media": {
"(min-width: 992px)": {
  marginBottom:"0",
},
},
});
export const mbLg1 = style({
"@media": {
"(min-width: 992px)": {
  marginBottom:"0.25rem",
},
},
});
export const mbLg2 = style({
"@media": {
"(min-width: 992px)": {
  marginBottom:"0.5rem",
},
},
});
export const mbLg3 = style({
"@media": {
"(min-width: 992px)": {
  marginBottom:"1rem",
},
},
});
export const mbLg4 = style({
"@media": {
"(min-width: 992px)": {
  marginBottom:"1.5rem",
},
},
});
export const mbLg5 = style({
"@media": {
"(min-width: 992px)": {
  marginBottom:"3rem",
},
},
});
export const mbLgAuto = style({
"@media": {
"(min-width: 992px)": {
  marginBottom:"auto",
},
},
});
export const mbMd0 = style({
"@media": {
"(min-width: 768px)": {
  marginBottom:"0",
},
},
});
export const mbMd1 = style({
"@media": {
"(min-width: 768px)": {
  marginBottom:"0.25rem",
},
},
});
export const mbMd2 = style({
"@media": {
"(min-width: 768px)": {
  marginBottom:"0.5rem",
},
},
});
export const mbMd3 = style({
"@media": {
"(min-width: 768px)": {
  marginBottom:"1rem",
},
},
});
export const mbMd4 = style({
"@media": {
"(min-width: 768px)": {
  marginBottom:"1.5rem",
},
},
});
export const mbMd5 = style({
"@media": {
"(min-width: 768px)": {
  marginBottom:"3rem",
},
},
});
export const mbMdAuto = style({
"@media": {
"(min-width: 768px)": {
  marginBottom:"auto",
},
},
});
export const mbSm0 = style({
"@media": {
"(min-width: 576px)": {
  marginBottom:"0",
},
},
});
export const mbSm1 = style({
"@media": {
"(min-width: 576px)": {
  marginBottom:"0.25rem",
},
},
});
export const mbSm2 = style({
"@media": {
"(min-width: 576px)": {
  marginBottom:"0.5rem",
},
},
});
export const mbSm3 = style({
"@media": {
"(min-width: 576px)": {
  marginBottom:"1rem",
},
},
});
export const mbSm4 = style({
"@media": {
"(min-width: 576px)": {
  marginBottom:"1.5rem",
},
},
});
export const mbSm5 = style({
"@media": {
"(min-width: 576px)": {
  marginBottom:"3rem",
},
},
});
export const mbSmAuto = style({
"@media": {
"(min-width: 576px)": {
  marginBottom:"auto",
},
},
});
export const mbXl0 = style({
"@media": {
"(min-width: 1200px)": {
  marginBottom:"0",
},
},
});
export const mbXl1 = style({
"@media": {
"(min-width: 1200px)": {
  marginBottom:"0.25rem",
},
},
});
export const mbXl2 = style({
"@media": {
"(min-width: 1200px)": {
  marginBottom:"0.5rem",
},
},
});
export const mbXl3 = style({
"@media": {
"(min-width: 1200px)": {
  marginBottom:"1rem",
},
},
});
export const mbXl4 = style({
"@media": {
"(min-width: 1200px)": {
  marginBottom:"1.5rem",
},
},
});
export const mbXl5 = style({
"@media": {
"(min-width: 1200px)": {
  marginBottom:"3rem",
},
},
});
export const mbXlAuto = style({
"@media": {
"(min-width: 1200px)": {
  marginBottom:"auto",
},
},
});
export const mbXxl0 = style({
"@media": {
"(min-width: 1400px)": {
  marginBottom:"0",
},
},
});
export const mbXxl1 = style({
"@media": {
"(min-width: 1400px)": {
  marginBottom:"0.25rem",
},
},
});
export const mbXxl2 = style({
"@media": {
"(min-width: 1400px)": {
  marginBottom:"0.5rem",
},
},
});
export const mbXxl3 = style({
"@media": {
"(min-width: 1400px)": {
  marginBottom:"1rem",
},
},
});
export const mbXxl4 = style({
"@media": {
"(min-width: 1400px)": {
  marginBottom:"1.5rem",
},
},
});
export const mbXxl5 = style({
"@media": {
"(min-width: 1400px)": {
  marginBottom:"3rem",
},
},
});
export const mbXxlAuto = style({
"@media": {
"(min-width: 1400px)": {
  marginBottom:"auto",
},
},
});
export const me0 = style({
  marginRight:"0",
});
export const me1 = style({
  marginRight:"0.25rem",
});
export const me2 = style({
  marginRight:"0.5rem",
});
export const me3 = style({
  marginRight:"1rem",
});
export const me4 = style({
  marginRight:"1.5rem",
});
export const me5 = style({
  marginRight:"3rem",
});
export const meAuto = style({
  marginRight:"auto",
});
export const meLg0 = style({
"@media": {
"(min-width: 992px)": {
  marginRight:"0",
},
},
});
export const meLg1 = style({
"@media": {
"(min-width: 992px)": {
  marginRight:"0.25rem",
},
},
});
export const meLg2 = style({
"@media": {
"(min-width: 992px)": {
  marginRight:"0.5rem",
},
},
});
export const meLg3 = style({
"@media": {
"(min-width: 992px)": {
  marginRight:"1rem",
},
},
});
export const meLg4 = style({
"@media": {
"(min-width: 992px)": {
  marginRight:"1.5rem",
},
},
});
export const meLg5 = style({
"@media": {
"(min-width: 992px)": {
  marginRight:"3rem",
},
},
});
export const meLgAuto = style({
"@media": {
"(min-width: 992px)": {
  marginRight:"auto",
},
},
});
export const meMd0 = style({
"@media": {
"(min-width: 768px)": {
  marginRight:"0",
},
},
});
export const meMd1 = style({
"@media": {
"(min-width: 768px)": {
  marginRight:"0.25rem",
},
},
});
export const meMd2 = style({
"@media": {
"(min-width: 768px)": {
  marginRight:"0.5rem",
},
},
});
export const meMd3 = style({
"@media": {
"(min-width: 768px)": {
  marginRight:"1rem",
},
},
});
export const meMd4 = style({
"@media": {
"(min-width: 768px)": {
  marginRight:"1.5rem",
},
},
});
export const meMd5 = style({
"@media": {
"(min-width: 768px)": {
  marginRight:"3rem",
},
},
});
export const meMdAuto = style({
"@media": {
"(min-width: 768px)": {
  marginRight:"auto",
},
},
});
export const meSm0 = style({
"@media": {
"(min-width: 576px)": {
  marginRight:"0",
},
},
});
export const meSm1 = style({
"@media": {
"(min-width: 576px)": {
  marginRight:"0.25rem",
},
},
});
export const meSm2 = style({
"@media": {
"(min-width: 576px)": {
  marginRight:"0.5rem",
},
},
});
export const meSm3 = style({
"@media": {
"(min-width: 576px)": {
  marginRight:"1rem",
},
},
});
export const meSm4 = style({
"@media": {
"(min-width: 576px)": {
  marginRight:"1.5rem",
},
},
});
export const meSm5 = style({
"@media": {
"(min-width: 576px)": {
  marginRight:"3rem",
},
},
});
export const meSmAuto = style({
"@media": {
"(min-width: 576px)": {
  marginRight:"auto",
},
},
});
export const meXl0 = style({
"@media": {
"(min-width: 1200px)": {
  marginRight:"0",
},
},
});
export const meXl1 = style({
"@media": {
"(min-width: 1200px)": {
  marginRight:"0.25rem",
},
},
});
export const meXl2 = style({
"@media": {
"(min-width: 1200px)": {
  marginRight:"0.5rem",
},
},
});
export const meXl3 = style({
"@media": {
"(min-width: 1200px)": {
  marginRight:"1rem",
},
},
});
export const meXl4 = style({
"@media": {
"(min-width: 1200px)": {
  marginRight:"1.5rem",
},
},
});
export const meXl5 = style({
"@media": {
"(min-width: 1200px)": {
  marginRight:"3rem",
},
},
});
export const meXlAuto = style({
"@media": {
"(min-width: 1200px)": {
  marginRight:"auto",
},
},
});
export const meXxl0 = style({
"@media": {
"(min-width: 1400px)": {
  marginRight:"0",
},
},
});
export const meXxl1 = style({
"@media": {
"(min-width: 1400px)": {
  marginRight:"0.25rem",
},
},
});
export const meXxl2 = style({
"@media": {
"(min-width: 1400px)": {
  marginRight:"0.5rem",
},
},
});
export const meXxl3 = style({
"@media": {
"(min-width: 1400px)": {
  marginRight:"1rem",
},
},
});
export const meXxl4 = style({
"@media": {
"(min-width: 1400px)": {
  marginRight:"1.5rem",
},
},
});
export const meXxl5 = style({
"@media": {
"(min-width: 1400px)": {
  marginRight:"3rem",
},
},
});
export const meXxlAuto = style({
"@media": {
"(min-width: 1400px)": {
  marginRight:"auto",
},
},
});
export const mh100 = style({
  maxHeight:"100%",
});
export const minVh100 = style({
  minHeight:"100vh",
});
export const minVw100 = style({
  minWidth:"100vw",
});
export const modal = style({
  position:"fixed",
  top:"0",
  left:"0",
  zIndex:"1055",
  display:"none",
  width:"100%",
  height:"100%",
  overflowX:"hidden",
  overflowY:"auto",
  outline:"0",
  transition:"transform 0.3s ease-out",
  transform:"translate(0,-50px)",
  transform:"none",
  transform:"scale(1.02)",
"@media": {
"(prefers-reduced-motion: reduce)": {
  transition:"none",
},
},
});
export const modalBackdrop = style({
  position:"fixed",
  top:"0",
  left:"0",
  zIndex:"1050",
  width:"100vw",
  height:"100vh",
  backgroundColor:"000",
  opacity:"0",
  opacity:"0.5",
});
export const modalBody = style({
  position:"relative",
  flex:"1 1 auto",
  padding:"1rem",
});
export const modalContent = style({
  position:"relative",
  display:"flex",
  flexDirection:"column",
  width:"100%",
  pointerEvents:"auto",
  backgroundColor:"fff",
  backgroundClip:"padding-box",
  border:"1px solid rgba(0,0,0,0.2)",
  borderRadius:"0.3rem",
  outline:"0",
});
export const modalDialog = style({
  position:"relative",
  width:"auto",
  margin:"0.5rem",
  pointerEvents:"none",
"@media": {
"(min-width: 576px)": {
  maxWidth:"500px",
  margin:"1.75rem auto",
},
},
});
export const modalDialogCentered = style({
  display:"flex",
  alignItems:"center",
  minHeight:"calc(100%-1rem)",
"@media": {
"(min-width: 576px)": {
  minHeight:"calc(100%-3.5rem)",
},
},
});
export const modalDialogScrollable = style({
  height:"calc(100%-1rem)",
  maxHeight:"100%",
  overflow:"hidden",
  overflowY:"auto",
"@media": {
"(min-width: 576px)": {
  height:"calc(100%-3.5rem)",
},
},
});
export const modalFooter = style({
  display:"flex",
  flexWrap:"wrap",
  flexShrink:"0",
  alignItems:"center",
  justifyContent:"flex-end",
  padding:"0.75rem",
  borderTop:"1px solid dee2e6",
  borderBottomRightRadius:"calc(0.3rem-1px)",
  borderBottomLeftRadius:"calc(0.3rem-1px)",
});
export const modalFullscreen = style({
  width:"100vw",
  maxWidth:"none",
  height:"100%",
  margin:"0",
  height:"100%",
  border:"0",
  borderRadius:"0",
  borderRadius:"0",
  overflowY:"auto",
  borderRadius:"0",
});
export const modalFullscreenLgDown = style({
"@media": {
"(max-width: 991.98px)": {
  width:"100vw",
  maxWidth:"none",
  height:"100%",
  margin:"0",
},
"(max-width: 991.98px)": {
  height:"100%",
  border:"0",
  borderRadius:"0",
},
"(max-width: 991.98px)": {
  borderRadius:"0",
},
"(max-width: 991.98px)": {
  overflowY:"auto",
},
"(max-width: 991.98px)": {
  borderRadius:"0",
},
},
});
export const modalFullscreenMdDown = style({
"@media": {
"(max-width: 767.98px)": {
  width:"100vw",
  maxWidth:"none",
  height:"100%",
  margin:"0",
},
"(max-width: 767.98px)": {
  height:"100%",
  border:"0",
  borderRadius:"0",
},
"(max-width: 767.98px)": {
  borderRadius:"0",
},
"(max-width: 767.98px)": {
  overflowY:"auto",
},
"(max-width: 767.98px)": {
  borderRadius:"0",
},
},
});
export const modalFullscreenSmDown = style({
"@media": {
"(max-width: 575.98px)": {
  width:"100vw",
  maxWidth:"none",
  height:"100%",
  margin:"0",
},
"(max-width: 575.98px)": {
  height:"100%",
  border:"0",
  borderRadius:"0",
},
"(max-width: 575.98px)": {
  borderRadius:"0",
},
"(max-width: 575.98px)": {
  overflowY:"auto",
},
"(max-width: 575.98px)": {
  borderRadius:"0",
},
},
});
export const modalFullscreenXlDown = style({
"@media": {
"(max-width: 1199.98px)": {
  width:"100vw",
  maxWidth:"none",
  height:"100%",
  margin:"0",
},
"(max-width: 1199.98px)": {
  height:"100%",
  border:"0",
  borderRadius:"0",
},
"(max-width: 1199.98px)": {
  borderRadius:"0",
},
"(max-width: 1199.98px)": {
  overflowY:"auto",
},
"(max-width: 1199.98px)": {
  borderRadius:"0",
},
},
});
export const modalFullscreenXxlDown = style({
"@media": {
"(max-width: 1399.98px)": {
  width:"100vw",
  maxWidth:"none",
  height:"100%",
  margin:"0",
},
"(max-width: 1399.98px)": {
  height:"100%",
  border:"0",
  borderRadius:"0",
},
"(max-width: 1399.98px)": {
  borderRadius:"0",
},
"(max-width: 1399.98px)": {
  overflowY:"auto",
},
"(max-width: 1399.98px)": {
  borderRadius:"0",
},
},
});
export const modalHeader = style({
  display:"flex",
  flexShrink:"0",
  alignItems:"center",
  justifyContent:"space-between",
  padding:"1rem 1rem",
  borderBottom:"1px solid dee2e6",
  borderTopLeftRadius:"calc(0.3rem-1px)",
  borderTopRightRadius:"calc(0.3rem-1px)",
  padding:"0.5rem 0.5rem",
  margin:"-0.5rem -0.5rem -0.5rem auto",
});
export const modalLg = style({
"@media": {
"(min-width: 992px)": {
  maxWidth:"800px",
},
},
});
export const modalSm = style({
"@media": {
"(min-width: 576px)": {
  maxWidth:"300px",
},
},
});
export const modalTitle = style({
  marginBottom:"0",
  lineHeight:"1.5",
});
export const modalXl = style({
"@media": {
"(min-width: 992px)": {
  maxWidth:"800px",
},
"(min-width: 1200px)": {
  maxWidth:"1140px",
},
},
});
export const ms0 = style({
  marginLeft:"0",
});
export const ms1 = style({
  marginLeft:"0.25rem",
});
export const ms2 = style({
  marginLeft:"0.5rem",
});
export const ms3 = style({
  marginLeft:"1rem",
});
export const ms4 = style({
  marginLeft:"1.5rem",
});
export const ms5 = style({
  marginLeft:"3rem",
});
export const msAuto = style({
  marginLeft:"auto",
});
export const msLg0 = style({
"@media": {
"(min-width: 992px)": {
  marginLeft:"0",
},
},
});
export const msLg1 = style({
"@media": {
"(min-width: 992px)": {
  marginLeft:"0.25rem",
},
},
});
export const msLg2 = style({
"@media": {
"(min-width: 992px)": {
  marginLeft:"0.5rem",
},
},
});
export const msLg3 = style({
"@media": {
"(min-width: 992px)": {
  marginLeft:"1rem",
},
},
});
export const msLg4 = style({
"@media": {
"(min-width: 992px)": {
  marginLeft:"1.5rem",
},
},
});
export const msLg5 = style({
"@media": {
"(min-width: 992px)": {
  marginLeft:"3rem",
},
},
});
export const msLgAuto = style({
"@media": {
"(min-width: 992px)": {
  marginLeft:"auto",
},
},
});
export const msMd0 = style({
"@media": {
"(min-width: 768px)": {
  marginLeft:"0",
},
},
});
export const msMd1 = style({
"@media": {
"(min-width: 768px)": {
  marginLeft:"0.25rem",
},
},
});
export const msMd2 = style({
"@media": {
"(min-width: 768px)": {
  marginLeft:"0.5rem",
},
},
});
export const msMd3 = style({
"@media": {
"(min-width: 768px)": {
  marginLeft:"1rem",
},
},
});
export const msMd4 = style({
"@media": {
"(min-width: 768px)": {
  marginLeft:"1.5rem",
},
},
});
export const msMd5 = style({
"@media": {
"(min-width: 768px)": {
  marginLeft:"3rem",
},
},
});
export const msMdAuto = style({
"@media": {
"(min-width: 768px)": {
  marginLeft:"auto",
},
},
});
export const msSm0 = style({
"@media": {
"(min-width: 576px)": {
  marginLeft:"0",
},
},
});
export const msSm1 = style({
"@media": {
"(min-width: 576px)": {
  marginLeft:"0.25rem",
},
},
});
export const msSm2 = style({
"@media": {
"(min-width: 576px)": {
  marginLeft:"0.5rem",
},
},
});
export const msSm3 = style({
"@media": {
"(min-width: 576px)": {
  marginLeft:"1rem",
},
},
});
export const msSm4 = style({
"@media": {
"(min-width: 576px)": {
  marginLeft:"1.5rem",
},
},
});
export const msSm5 = style({
"@media": {
"(min-width: 576px)": {
  marginLeft:"3rem",
},
},
});
export const msSmAuto = style({
"@media": {
"(min-width: 576px)": {
  marginLeft:"auto",
},
},
});
export const msXl0 = style({
"@media": {
"(min-width: 1200px)": {
  marginLeft:"0",
},
},
});
export const msXl1 = style({
"@media": {
"(min-width: 1200px)": {
  marginLeft:"0.25rem",
},
},
});
export const msXl2 = style({
"@media": {
"(min-width: 1200px)": {
  marginLeft:"0.5rem",
},
},
});
export const msXl3 = style({
"@media": {
"(min-width: 1200px)": {
  marginLeft:"1rem",
},
},
});
export const msXl4 = style({
"@media": {
"(min-width: 1200px)": {
  marginLeft:"1.5rem",
},
},
});
export const msXl5 = style({
"@media": {
"(min-width: 1200px)": {
  marginLeft:"3rem",
},
},
});
export const msXlAuto = style({
"@media": {
"(min-width: 1200px)": {
  marginLeft:"auto",
},
},
});
export const msXxl0 = style({
"@media": {
"(min-width: 1400px)": {
  marginLeft:"0",
},
},
});
export const msXxl1 = style({
"@media": {
"(min-width: 1400px)": {
  marginLeft:"0.25rem",
},
},
});
export const msXxl2 = style({
"@media": {
"(min-width: 1400px)": {
  marginLeft:"0.5rem",
},
},
});
export const msXxl3 = style({
"@media": {
"(min-width: 1400px)": {
  marginLeft:"1rem",
},
},
});
export const msXxl4 = style({
"@media": {
"(min-width: 1400px)": {
  marginLeft:"1.5rem",
},
},
});
export const msXxl5 = style({
"@media": {
"(min-width: 1400px)": {
  marginLeft:"3rem",
},
},
});
export const msXxlAuto = style({
"@media": {
"(min-width: 1400px)": {
  marginLeft:"auto",
},
},
});
export const mt0 = style({
  marginTop:"0",
});
export const mt1 = style({
  marginTop:"0.25rem",
});
export const mt2 = style({
  marginTop:"0.5rem",
});
export const mt3 = style({
  marginTop:"1rem",
});
export const mt4 = style({
  marginTop:"1.5rem",
});
export const mt5 = style({
  marginTop:"3rem",
});
export const mtAuto = style({
  marginTop:"auto",
});
export const mtLg0 = style({
"@media": {
"(min-width: 992px)": {
  marginTop:"0",
},
},
});
export const mtLg1 = style({
"@media": {
"(min-width: 992px)": {
  marginTop:"0.25rem",
},
},
});
export const mtLg2 = style({
"@media": {
"(min-width: 992px)": {
  marginTop:"0.5rem",
},
},
});
export const mtLg3 = style({
"@media": {
"(min-width: 992px)": {
  marginTop:"1rem",
},
},
});
export const mtLg4 = style({
"@media": {
"(min-width: 992px)": {
  marginTop:"1.5rem",
},
},
});
export const mtLg5 = style({
"@media": {
"(min-width: 992px)": {
  marginTop:"3rem",
},
},
});
export const mtLgAuto = style({
"@media": {
"(min-width: 992px)": {
  marginTop:"auto",
},
},
});
export const mtMd0 = style({
"@media": {
"(min-width: 768px)": {
  marginTop:"0",
},
},
});
export const mtMd1 = style({
"@media": {
"(min-width: 768px)": {
  marginTop:"0.25rem",
},
},
});
export const mtMd2 = style({
"@media": {
"(min-width: 768px)": {
  marginTop:"0.5rem",
},
},
});
export const mtMd3 = style({
"@media": {
"(min-width: 768px)": {
  marginTop:"1rem",
},
},
});
export const mtMd4 = style({
"@media": {
"(min-width: 768px)": {
  marginTop:"1.5rem",
},
},
});
export const mtMd5 = style({
"@media": {
"(min-width: 768px)": {
  marginTop:"3rem",
},
},
});
export const mtMdAuto = style({
"@media": {
"(min-width: 768px)": {
  marginTop:"auto",
},
},
});
export const mtSm0 = style({
"@media": {
"(min-width: 576px)": {
  marginTop:"0",
},
},
});
export const mtSm1 = style({
"@media": {
"(min-width: 576px)": {
  marginTop:"0.25rem",
},
},
});
export const mtSm2 = style({
"@media": {
"(min-width: 576px)": {
  marginTop:"0.5rem",
},
},
});
export const mtSm3 = style({
"@media": {
"(min-width: 576px)": {
  marginTop:"1rem",
},
},
});
export const mtSm4 = style({
"@media": {
"(min-width: 576px)": {
  marginTop:"1.5rem",
},
},
});
export const mtSm5 = style({
"@media": {
"(min-width: 576px)": {
  marginTop:"3rem",
},
},
});
export const mtSmAuto = style({
"@media": {
"(min-width: 576px)": {
  marginTop:"auto",
},
},
});
export const mtXl0 = style({
"@media": {
"(min-width: 1200px)": {
  marginTop:"0",
},
},
});
export const mtXl1 = style({
"@media": {
"(min-width: 1200px)": {
  marginTop:"0.25rem",
},
},
});
export const mtXl2 = style({
"@media": {
"(min-width: 1200px)": {
  marginTop:"0.5rem",
},
},
});
export const mtXl3 = style({
"@media": {
"(min-width: 1200px)": {
  marginTop:"1rem",
},
},
});
export const mtXl4 = style({
"@media": {
"(min-width: 1200px)": {
  marginTop:"1.5rem",
},
},
});
export const mtXl5 = style({
"@media": {
"(min-width: 1200px)": {
  marginTop:"3rem",
},
},
});
export const mtXlAuto = style({
"@media": {
"(min-width: 1200px)": {
  marginTop:"auto",
},
},
});
export const mtXxl0 = style({
"@media": {
"(min-width: 1400px)": {
  marginTop:"0",
},
},
});
export const mtXxl1 = style({
"@media": {
"(min-width: 1400px)": {
  marginTop:"0.25rem",
},
},
});
export const mtXxl2 = style({
"@media": {
"(min-width: 1400px)": {
  marginTop:"0.5rem",
},
},
});
export const mtXxl3 = style({
"@media": {
"(min-width: 1400px)": {
  marginTop:"1rem",
},
},
});
export const mtXxl4 = style({
"@media": {
"(min-width: 1400px)": {
  marginTop:"1.5rem",
},
},
});
export const mtXxl5 = style({
"@media": {
"(min-width: 1400px)": {
  marginTop:"3rem",
},
},
});
export const mtXxlAuto = style({
"@media": {
"(min-width: 1400px)": {
  marginTop:"auto",
},
},
});
export const mw100 = style({
  maxWidth:"100%",
});
export const mx0 = style({
  marginRight:"0",
  marginLeft:"0",
});
export const mx1 = style({
  marginRight:"0.25rem",
  marginLeft:"0.25rem",
});
export const mx2 = style({
  marginRight:"0.5rem",
  marginLeft:"0.5rem",
});
export const mx3 = style({
  marginRight:"1rem",
  marginLeft:"1rem",
});
export const mx4 = style({
  marginRight:"1.5rem",
  marginLeft:"1.5rem",
});
export const mx5 = style({
  marginRight:"3rem",
  marginLeft:"3rem",
});
export const mxAuto = style({
  marginRight:"auto",
  marginLeft:"auto",
});
export const mxLg0 = style({
"@media": {
"(min-width: 992px)": {
  marginRight:"0",
  marginLeft:"0",
},
},
});
export const mxLg1 = style({
"@media": {
"(min-width: 992px)": {
  marginRight:"0.25rem",
  marginLeft:"0.25rem",
},
},
});
export const mxLg2 = style({
"@media": {
"(min-width: 992px)": {
  marginRight:"0.5rem",
  marginLeft:"0.5rem",
},
},
});
export const mxLg3 = style({
"@media": {
"(min-width: 992px)": {
  marginRight:"1rem",
  marginLeft:"1rem",
},
},
});
export const mxLg4 = style({
"@media": {
"(min-width: 992px)": {
  marginRight:"1.5rem",
  marginLeft:"1.5rem",
},
},
});
export const mxLg5 = style({
"@media": {
"(min-width: 992px)": {
  marginRight:"3rem",
  marginLeft:"3rem",
},
},
});
export const mxLgAuto = style({
"@media": {
"(min-width: 992px)": {
  marginRight:"auto",
  marginLeft:"auto",
},
},
});
export const mxMd0 = style({
"@media": {
"(min-width: 768px)": {
  marginRight:"0",
  marginLeft:"0",
},
},
});
export const mxMd1 = style({
"@media": {
"(min-width: 768px)": {
  marginRight:"0.25rem",
  marginLeft:"0.25rem",
},
},
});
export const mxMd2 = style({
"@media": {
"(min-width: 768px)": {
  marginRight:"0.5rem",
  marginLeft:"0.5rem",
},
},
});
export const mxMd3 = style({
"@media": {
"(min-width: 768px)": {
  marginRight:"1rem",
  marginLeft:"1rem",
},
},
});
export const mxMd4 = style({
"@media": {
"(min-width: 768px)": {
  marginRight:"1.5rem",
  marginLeft:"1.5rem",
},
},
});
export const mxMd5 = style({
"@media": {
"(min-width: 768px)": {
  marginRight:"3rem",
  marginLeft:"3rem",
},
},
});
export const mxMdAuto = style({
"@media": {
"(min-width: 768px)": {
  marginRight:"auto",
  marginLeft:"auto",
},
},
});
export const mxSm0 = style({
"@media": {
"(min-width: 576px)": {
  marginRight:"0",
  marginLeft:"0",
},
},
});
export const mxSm1 = style({
"@media": {
"(min-width: 576px)": {
  marginRight:"0.25rem",
  marginLeft:"0.25rem",
},
},
});
export const mxSm2 = style({
"@media": {
"(min-width: 576px)": {
  marginRight:"0.5rem",
  marginLeft:"0.5rem",
},
},
});
export const mxSm3 = style({
"@media": {
"(min-width: 576px)": {
  marginRight:"1rem",
  marginLeft:"1rem",
},
},
});
export const mxSm4 = style({
"@media": {
"(min-width: 576px)": {
  marginRight:"1.5rem",
  marginLeft:"1.5rem",
},
},
});
export const mxSm5 = style({
"@media": {
"(min-width: 576px)": {
  marginRight:"3rem",
  marginLeft:"3rem",
},
},
});
export const mxSmAuto = style({
"@media": {
"(min-width: 576px)": {
  marginRight:"auto",
  marginLeft:"auto",
},
},
});
export const mxXl0 = style({
"@media": {
"(min-width: 1200px)": {
  marginRight:"0",
  marginLeft:"0",
},
},
});
export const mxXl1 = style({
"@media": {
"(min-width: 1200px)": {
  marginRight:"0.25rem",
  marginLeft:"0.25rem",
},
},
});
export const mxXl2 = style({
"@media": {
"(min-width: 1200px)": {
  marginRight:"0.5rem",
  marginLeft:"0.5rem",
},
},
});
export const mxXl3 = style({
"@media": {
"(min-width: 1200px)": {
  marginRight:"1rem",
  marginLeft:"1rem",
},
},
});
export const mxXl4 = style({
"@media": {
"(min-width: 1200px)": {
  marginRight:"1.5rem",
  marginLeft:"1.5rem",
},
},
});
export const mxXl5 = style({
"@media": {
"(min-width: 1200px)": {
  marginRight:"3rem",
  marginLeft:"3rem",
},
},
});
export const mxXlAuto = style({
"@media": {
"(min-width: 1200px)": {
  marginRight:"auto",
  marginLeft:"auto",
},
},
});
export const mxXxl0 = style({
"@media": {
"(min-width: 1400px)": {
  marginRight:"0",
  marginLeft:"0",
},
},
});
export const mxXxl1 = style({
"@media": {
"(min-width: 1400px)": {
  marginRight:"0.25rem",
  marginLeft:"0.25rem",
},
},
});
export const mxXxl2 = style({
"@media": {
"(min-width: 1400px)": {
  marginRight:"0.5rem",
  marginLeft:"0.5rem",
},
},
});
export const mxXxl3 = style({
"@media": {
"(min-width: 1400px)": {
  marginRight:"1rem",
  marginLeft:"1rem",
},
},
});
export const mxXxl4 = style({
"@media": {
"(min-width: 1400px)": {
  marginRight:"1.5rem",
  marginLeft:"1.5rem",
},
},
});
export const mxXxl5 = style({
"@media": {
"(min-width: 1400px)": {
  marginRight:"3rem",
  marginLeft:"3rem",
},
},
});
export const mxXxlAuto = style({
"@media": {
"(min-width: 1400px)": {
  marginRight:"auto",
  marginLeft:"auto",
},
},
});
export const my0 = style({
  marginTop:"0",
  marginBottom:"0",
});
export const my1 = style({
  marginTop:"0.25rem",
  marginBottom:"0.25rem",
});
export const my2 = style({
  marginTop:"0.5rem",
  marginBottom:"0.5rem",
});
export const my3 = style({
  marginTop:"1rem",
  marginBottom:"1rem",
});
export const my4 = style({
  marginTop:"1.5rem",
  marginBottom:"1.5rem",
});
export const my5 = style({
  marginTop:"3rem",
  marginBottom:"3rem",
});
export const myAuto = style({
  marginTop:"auto",
  marginBottom:"auto",
});
export const myLg0 = style({
"@media": {
"(min-width: 992px)": {
  marginTop:"0",
  marginBottom:"0",
},
},
});
export const myLg1 = style({
"@media": {
"(min-width: 992px)": {
  marginTop:"0.25rem",
  marginBottom:"0.25rem",
},
},
});
export const myLg2 = style({
"@media": {
"(min-width: 992px)": {
  marginTop:"0.5rem",
  marginBottom:"0.5rem",
},
},
});
export const myLg3 = style({
"@media": {
"(min-width: 992px)": {
  marginTop:"1rem",
  marginBottom:"1rem",
},
},
});
export const myLg4 = style({
"@media": {
"(min-width: 992px)": {
  marginTop:"1.5rem",
  marginBottom:"1.5rem",
},
},
});
export const myLg5 = style({
"@media": {
"(min-width: 992px)": {
  marginTop:"3rem",
  marginBottom:"3rem",
},
},
});
export const myLgAuto = style({
"@media": {
"(min-width: 992px)": {
  marginTop:"auto",
  marginBottom:"auto",
},
},
});
export const myMd0 = style({
"@media": {
"(min-width: 768px)": {
  marginTop:"0",
  marginBottom:"0",
},
},
});
export const myMd1 = style({
"@media": {
"(min-width: 768px)": {
  marginTop:"0.25rem",
  marginBottom:"0.25rem",
},
},
});
export const myMd2 = style({
"@media": {
"(min-width: 768px)": {
  marginTop:"0.5rem",
  marginBottom:"0.5rem",
},
},
});
export const myMd3 = style({
"@media": {
"(min-width: 768px)": {
  marginTop:"1rem",
  marginBottom:"1rem",
},
},
});
export const myMd4 = style({
"@media": {
"(min-width: 768px)": {
  marginTop:"1.5rem",
  marginBottom:"1.5rem",
},
},
});
export const myMd5 = style({
"@media": {
"(min-width: 768px)": {
  marginTop:"3rem",
  marginBottom:"3rem",
},
},
});
export const myMdAuto = style({
"@media": {
"(min-width: 768px)": {
  marginTop:"auto",
  marginBottom:"auto",
},
},
});
export const mySm0 = style({
"@media": {
"(min-width: 576px)": {
  marginTop:"0",
  marginBottom:"0",
},
},
});
export const mySm1 = style({
"@media": {
"(min-width: 576px)": {
  marginTop:"0.25rem",
  marginBottom:"0.25rem",
},
},
});
export const mySm2 = style({
"@media": {
"(min-width: 576px)": {
  marginTop:"0.5rem",
  marginBottom:"0.5rem",
},
},
});
export const mySm3 = style({
"@media": {
"(min-width: 576px)": {
  marginTop:"1rem",
  marginBottom:"1rem",
},
},
});
export const mySm4 = style({
"@media": {
"(min-width: 576px)": {
  marginTop:"1.5rem",
  marginBottom:"1.5rem",
},
},
});
export const mySm5 = style({
"@media": {
"(min-width: 576px)": {
  marginTop:"3rem",
  marginBottom:"3rem",
},
},
});
export const mySmAuto = style({
"@media": {
"(min-width: 576px)": {
  marginTop:"auto",
  marginBottom:"auto",
},
},
});
export const myXl0 = style({
"@media": {
"(min-width: 1200px)": {
  marginTop:"0",
  marginBottom:"0",
},
},
});
export const myXl1 = style({
"@media": {
"(min-width: 1200px)": {
  marginTop:"0.25rem",
  marginBottom:"0.25rem",
},
},
});
export const myXl2 = style({
"@media": {
"(min-width: 1200px)": {
  marginTop:"0.5rem",
  marginBottom:"0.5rem",
},
},
});
export const myXl3 = style({
"@media": {
"(min-width: 1200px)": {
  marginTop:"1rem",
  marginBottom:"1rem",
},
},
});
export const myXl4 = style({
"@media": {
"(min-width: 1200px)": {
  marginTop:"1.5rem",
  marginBottom:"1.5rem",
},
},
});
export const myXl5 = style({
"@media": {
"(min-width: 1200px)": {
  marginTop:"3rem",
  marginBottom:"3rem",
},
},
});
export const myXlAuto = style({
"@media": {
"(min-width: 1200px)": {
  marginTop:"auto",
  marginBottom:"auto",
},
},
});
export const myXxl0 = style({
"@media": {
"(min-width: 1400px)": {
  marginTop:"0",
  marginBottom:"0",
},
},
});
export const myXxl1 = style({
"@media": {
"(min-width: 1400px)": {
  marginTop:"0.25rem",
  marginBottom:"0.25rem",
},
},
});
export const myXxl2 = style({
"@media": {
"(min-width: 1400px)": {
  marginTop:"0.5rem",
  marginBottom:"0.5rem",
},
},
});
export const myXxl3 = style({
"@media": {
"(min-width: 1400px)": {
  marginTop:"1rem",
  marginBottom:"1rem",
},
},
});
export const myXxl4 = style({
"@media": {
"(min-width: 1400px)": {
  marginTop:"1.5rem",
  marginBottom:"1.5rem",
},
},
});
export const myXxl5 = style({
"@media": {
"(min-width: 1400px)": {
  marginTop:"3rem",
  marginBottom:"3rem",
},
},
});
export const myXxlAuto = style({
"@media": {
"(min-width: 1400px)": {
  marginTop:"auto",
  marginBottom:"auto",
},
},
});
export const nav = style({
  display:"flex",
  flexWrap:"wrap",
  paddingLeft:"0",
  marginBottom:"0",
  listStyle:"none",
});
export const navFill = style({
  flex:"1 1 auto",
  textAlign:"center",
  flex:"1 1 auto",
  textAlign:"center",
  width:"100%",
});
export const navJustified = style({
  flexBasis:"0",
  flexGrow:"1",
  textAlign:"center",
  flexBasis:"0",
  flexGrow:"1",
  textAlign:"center",
  width:"100%",
});
export const navLink = style({
  display:"block",
  padding:"0.5rem 1rem",
  color:"0d6efd",
  textDecoration:"none",
  transition:"color 0.15s ease-in-out , background-color 0.15s ease-in-out , border-color 0.15s ease-in-out",
":hover": {
  color:"0a58ca",
},
":focus": {
  color:"0a58ca",
},
  color:"6c757d",
  pointerEvents:"none",
  cursor:"default",
"@media": {
"(prefers-reduced-motion: reduce)": {
  transition:"none",
},
},
});
export const navPills = style({
  background:"none",
  border:"0",
  borderRadius:"0.25rem",
  color:"fff",
  backgroundColor:"0d6efd",
  color:"fff",
  backgroundColor:"0d6efd",
});
export const navTabs = style({
  borderBottom:"1px solid dee2e6",
  marginBottom:"-1px",
  background:"none",
  border:"1px solid transparent",
  borderTopLeftRadius:"0.25rem",
  borderTopRightRadius:"0.25rem",
":hover": {
  borderColor:"e9ecef e9ecef dee2e6",
  isolation:"isolate",
},
":focus": {
  borderColor:"e9ecef e9ecef dee2e6",
  isolation:"isolate",
},
  color:"6c757d",
  backgroundColor:"transparent",
  borderColor:"transparent",
  color:"495057",
  backgroundColor:"fff",
  borderColor:"dee2e6 dee2e6 fff",
  color:"495057",
  backgroundColor:"fff",
  borderColor:"dee2e6 dee2e6 fff",
  marginTop:"-1px",
  borderTopLeftRadius:"0",
  borderTopRightRadius:"0",
});
export const navbar = style({
  position:"relative",
  display:"flex",
  flexWrap:"wrap",
  alignItems:"center",
  justifyContent:"space-between",
  paddingTop:"0.5rem",
  paddingBottom:"0.5rem",
  display:"flex",
  flexWrap:"inherit",
  alignItems:"center",
  justifyContent:"space-between",
  display:"flex",
  flexWrap:"inherit",
  alignItems:"center",
  justifyContent:"space-between",
  display:"flex",
  flexWrap:"inherit",
  alignItems:"center",
  justifyContent:"space-between",
  display:"flex",
  flexWrap:"inherit",
  alignItems:"center",
  justifyContent:"space-between",
  display:"flex",
  flexWrap:"inherit",
  alignItems:"center",
  justifyContent:"space-between",
  display:"flex",
  flexWrap:"inherit",
  alignItems:"center",
  justifyContent:"space-between",
  display:"flex",
  flexWrap:"inherit",
  alignItems:"center",
  justifyContent:"space-between",
});
export const navbarBrand = style({
  paddingTop:"0.3125rem",
  paddingBottom:"0.3125rem",
  marginRight:"1rem",
  fontSize:"1.25rem",
  textDecoration:"none",
  whiteSpace:"nowrap",
});
export const navbarCollapse = style({
  flexBasis:"100%",
  flexGrow:"1",
  alignItems:"center",
});
export const navbarDark = style({
  color:"fff",
":hover": {
  color:"fff",
},
":focus": {
  color:"fff",
},
  color:"rgba(255,255,255,0.55)",
":hover": {
  color:"rgba(255,255,255,0.75)",
},
":focus": {
  color:"rgba(255,255,255,0.75)",
},
  color:"rgba(255,255,255,0.25)",
  color:"fff",
  color:"fff",
  color:"rgba(255,255,255,0.55)",
  borderColor:"rgba(255,255,255,0.1)",
  backgroundImage:"url(data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e)",
  color:"rgba(255,255,255,0.55)",
});
export const navbarExpand = style({
  flexWrap:"nowrap",
  justifyContent:"flex-start",
  flexDirection:"row",
  position:"absolute",
  paddingRight:"0.5rem",
  paddingLeft:"0.5rem",
  overflow:"visible",
  display:"flex",
  flexBasis:"auto",
  display:"none",
  display:"none",
  position:"inherit",
  bottom:"0",
  zIndex:"1000",
  flexGrow:"1",
  visibility:"visible",
  backgroundColor:"transparent",
  borderRight:"0",
  borderLeft:"0",
  transition:"none",
  transform:"none",
  height:"auto",
  borderTop:"0",
  borderBottom:"0",
  height:"auto",
  borderTop:"0",
  borderBottom:"0",
  display:"flex",
  flexGrow:"0",
  padding:"0",
  overflowY:"visible",
});
export const navbarExpandLg = style({
"@media": {
"(min-width: 992px)": {
  flexWrap:"nowrap",
  justifyContent:"flex-start",
},
"(min-width: 992px)": {
  flexDirection:"row",
},
"(min-width: 992px)": {
  position:"absolute",
},
"(min-width: 992px)": {
  paddingRight:"0.5rem",
  paddingLeft:"0.5rem",
},
"(min-width: 992px)": {
  overflow:"visible",
},
"(min-width: 992px)": {
  display:"flex",
  flexBasis:"auto",
},
"(min-width: 992px)": {
  display:"none",
},
"(min-width: 992px)": {
  display:"none",
},
"(min-width: 992px)": {
  position:"inherit",
  bottom:"0",
  zIndex:"1000",
  flexGrow:"1",
  visibility:"visible",
  backgroundColor:"transparent",
  borderRight:"0",
  borderLeft:"0",
  transition:"none",
  transform:"none",
},
"(min-width: 992px)": {
  height:"auto",
  borderTop:"0",
  borderBottom:"0",
},
"(min-width: 992px)": {
  height:"auto",
  borderTop:"0",
  borderBottom:"0",
},
"(min-width: 992px)": {
  display:"flex",
  flexGrow:"0",
  padding:"0",
  overflowY:"visible",
},
},
});
export const navbarExpandMd = style({
"@media": {
"(min-width: 768px)": {
  flexWrap:"nowrap",
  justifyContent:"flex-start",
},
"(min-width: 768px)": {
  flexDirection:"row",
},
"(min-width: 768px)": {
  position:"absolute",
},
"(min-width: 768px)": {
  paddingRight:"0.5rem",
  paddingLeft:"0.5rem",
},
"(min-width: 768px)": {
  overflow:"visible",
},
"(min-width: 768px)": {
  display:"flex",
  flexBasis:"auto",
},
"(min-width: 768px)": {
  display:"none",
},
"(min-width: 768px)": {
  display:"none",
},
"(min-width: 768px)": {
  position:"inherit",
  bottom:"0",
  zIndex:"1000",
  flexGrow:"1",
  visibility:"visible",
  backgroundColor:"transparent",
  borderRight:"0",
  borderLeft:"0",
  transition:"none",
  transform:"none",
},
"(min-width: 768px)": {
  height:"auto",
  borderTop:"0",
  borderBottom:"0",
},
"(min-width: 768px)": {
  height:"auto",
  borderTop:"0",
  borderBottom:"0",
},
"(min-width: 768px)": {
  display:"flex",
  flexGrow:"0",
  padding:"0",
  overflowY:"visible",
},
},
});
export const navbarExpandSm = style({
"@media": {
"(min-width: 576px)": {
  flexWrap:"nowrap",
  justifyContent:"flex-start",
},
"(min-width: 576px)": {
  flexDirection:"row",
},
"(min-width: 576px)": {
  position:"absolute",
},
"(min-width: 576px)": {
  paddingRight:"0.5rem",
  paddingLeft:"0.5rem",
},
"(min-width: 576px)": {
  overflow:"visible",
},
"(min-width: 576px)": {
  display:"flex",
  flexBasis:"auto",
},
"(min-width: 576px)": {
  display:"none",
},
"(min-width: 576px)": {
  display:"none",
},
"(min-width: 576px)": {
  position:"inherit",
  bottom:"0",
  zIndex:"1000",
  flexGrow:"1",
  visibility:"visible",
  backgroundColor:"transparent",
  borderRight:"0",
  borderLeft:"0",
  transition:"none",
  transform:"none",
},
"(min-width: 576px)": {
  height:"auto",
  borderTop:"0",
  borderBottom:"0",
},
"(min-width: 576px)": {
  height:"auto",
  borderTop:"0",
  borderBottom:"0",
},
"(min-width: 576px)": {
  display:"flex",
  flexGrow:"0",
  padding:"0",
  overflowY:"visible",
},
},
});
export const navbarExpandXl = style({
"@media": {
"(min-width: 1200px)": {
  flexWrap:"nowrap",
  justifyContent:"flex-start",
},
"(min-width: 1200px)": {
  flexDirection:"row",
},
"(min-width: 1200px)": {
  position:"absolute",
},
"(min-width: 1200px)": {
  paddingRight:"0.5rem",
  paddingLeft:"0.5rem",
},
"(min-width: 1200px)": {
  overflow:"visible",
},
"(min-width: 1200px)": {
  display:"flex",
  flexBasis:"auto",
},
"(min-width: 1200px)": {
  display:"none",
},
"(min-width: 1200px)": {
  display:"none",
},
"(min-width: 1200px)": {
  position:"inherit",
  bottom:"0",
  zIndex:"1000",
  flexGrow:"1",
  visibility:"visible",
  backgroundColor:"transparent",
  borderRight:"0",
  borderLeft:"0",
  transition:"none",
  transform:"none",
},
"(min-width: 1200px)": {
  height:"auto",
  borderTop:"0",
  borderBottom:"0",
},
"(min-width: 1200px)": {
  height:"auto",
  borderTop:"0",
  borderBottom:"0",
},
"(min-width: 1200px)": {
  display:"flex",
  flexGrow:"0",
  padding:"0",
  overflowY:"visible",
},
},
});
export const navbarExpandXxl = style({
"@media": {
"(min-width: 1400px)": {
  flexWrap:"nowrap",
  justifyContent:"flex-start",
},
"(min-width: 1400px)": {
  flexDirection:"row",
},
"(min-width: 1400px)": {
  position:"absolute",
},
"(min-width: 1400px)": {
  paddingRight:"0.5rem",
  paddingLeft:"0.5rem",
},
"(min-width: 1400px)": {
  overflow:"visible",
},
"(min-width: 1400px)": {
  display:"flex",
  flexBasis:"auto",
},
"(min-width: 1400px)": {
  display:"none",
},
"(min-width: 1400px)": {
  display:"none",
},
"(min-width: 1400px)": {
  position:"inherit",
  bottom:"0",
  zIndex:"1000",
  flexGrow:"1",
  visibility:"visible",
  backgroundColor:"transparent",
  borderRight:"0",
  borderLeft:"0",
  transition:"none",
  transform:"none",
},
"(min-width: 1400px)": {
  height:"auto",
  borderTop:"0",
  borderBottom:"0",
},
"(min-width: 1400px)": {
  height:"auto",
  borderTop:"0",
  borderBottom:"0",
},
"(min-width: 1400px)": {
  display:"flex",
  flexGrow:"0",
  padding:"0",
  overflowY:"visible",
},
},
});
export const navbarLight = style({
  color:"rgba(0,0,0,0.9)",
":hover": {
  color:"rgba(0,0,0,0.9)",
},
":focus": {
  color:"rgba(0,0,0,0.9)",
},
  color:"rgba(0,0,0,0.55)",
":hover": {
  color:"rgba(0,0,0,0.7)",
},
":focus": {
  color:"rgba(0,0,0,0.7)",
},
  color:"rgba(0,0,0,0.3)",
  color:"rgba(0,0,0,0.9)",
  color:"rgba(0,0,0,0.9)",
  color:"rgba(0,0,0,0.55)",
  borderColor:"rgba(0,0,0,0.1)",
  backgroundImage:"url(data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 0, 0, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e)",
  color:"rgba(0,0,0,0.55)",
});
export const navbarNav = style({
  display:"flex",
  flexDirection:"column",
  paddingLeft:"0",
  marginBottom:"0",
  listStyle:"none",
  paddingRight:"0",
  paddingLeft:"0",
  position:"static",
});
export const navbarNavScroll = style({
  maxHeight:"var(--bs-scroll-height,75vh)",
  overflowY:"auto",
});
export const navbarText = style({
  paddingTop:"0.5rem",
  paddingBottom:"0.5rem",
});
export const navbarToggler = style({
  padding:"0.25rem 0.75rem",
  fontSize:"1.25rem",
  lineHeight:"1",
  backgroundColor:"transparent",
  border:"1px solid transparent",
  borderRadius:"0.25rem",
  transition:"box-shadow 0.15s ease-in-out",
":hover": {
  textDecoration:"none",
},
":focus": {
  textDecoration:"none",
  outline:"0",
  boxShadow:"0 0 0 0.25rem",
},
"@media": {
"(prefers-reduced-motion: reduce)": {
  transition:"none",
},
},
});
export const navbarTogglerIcon = style({
  display:"inline-block",
  width:"1.5em",
  height:"1.5em",
  verticalAlign:"middle",
  backgroundRepeat:"no-repeat",
  backgroundPosition:"center",
  backgroundSize:"100%",
});
export const offcanvas = style({
  position:"fixed",
  bottom:"0",
  zIndex:"1045",
  display:"flex",
  flexDirection:"column",
  maxWidth:"100%",
  visibility:"hidden",
  backgroundColor:"fff",
  backgroundClip:"padding-box",
  outline:"0",
  transition:"transform 0.3s ease-in-out",
  transform:"none",
"@media": {
"(prefers-reduced-motion: reduce)": {
  transition:"none",
},
},
});
export const offcanvasBackdrop = style({
  position:"fixed",
  top:"0",
  left:"0",
  zIndex:"1040",
  width:"100vw",
  height:"100vh",
  backgroundColor:"000",
  opacity:"0",
  opacity:"0.5",
});
export const offcanvasBody = style({
  flexGrow:"1",
  padding:"1rem 1rem",
  overflowY:"auto",
});
export const offcanvasBottom = style({
  right:"0",
  left:"0",
  height:"30vh",
  maxHeight:"100%",
  borderTop:"1px solid rgba(0,0,0,0.2)",
  transform:"translateY(100%)",
});
export const offcanvasEnd = style({
  top:"0",
  right:"0",
  width:"400px",
  borderLeft:"1px solid rgba(0,0,0,0.2)",
  transform:"translateX(100%)",
});
export const offcanvasHeader = style({
  display:"flex",
  alignItems:"center",
  justifyContent:"space-between",
  padding:"1rem 1rem",
  padding:"0.5rem 0.5rem",
  marginTop:"-0.5rem",
  marginRight:"-0.5rem",
  marginBottom:"-0.5rem",
});
export const offcanvasStart = style({
  top:"0",
  left:"0",
  width:"400px",
  borderRight:"1px solid rgba(0,0,0,0.2)",
  transform:"translateX(-100%)",
});
export const offcanvasTitle = style({
  marginBottom:"0",
  lineHeight:"1.5",
});
export const offcanvasTop = style({
  top:"0",
  right:"0",
  left:"0",
  height:"30vh",
  maxHeight:"100%",
  borderBottom:"1px solid rgba(0,0,0,0.2)",
  transform:"translateY(-100%)",
});
export const offset1 = style({
  marginLeft:"8.33333333%",
});
export const offset10 = style({
  marginLeft:"83.33333333%",
});
export const offset11 = style({
  marginLeft:"91.66666667%",
});
export const offset2 = style({
  marginLeft:"16.66666667%",
});
export const offset3 = style({
  marginLeft:"25%",
});
export const offset4 = style({
  marginLeft:"33.33333333%",
});
export const offset5 = style({
  marginLeft:"41.66666667%",
});
export const offset6 = style({
  marginLeft:"50%",
});
export const offset7 = style({
  marginLeft:"58.33333333%",
});
export const offset8 = style({
  marginLeft:"66.66666667%",
});
export const offset9 = style({
  marginLeft:"75%",
});
export const offsetLg0 = style({
"@media": {
"(min-width: 992px)": {
  marginLeft:"0",
},
},
});
export const offsetLg1 = style({
"@media": {
"(min-width: 992px)": {
  marginLeft:"8.33333333%",
},
},
});
export const offsetLg10 = style({
"@media": {
"(min-width: 992px)": {
  marginLeft:"83.33333333%",
},
},
});
export const offsetLg11 = style({
"@media": {
"(min-width: 992px)": {
  marginLeft:"91.66666667%",
},
},
});
export const offsetLg2 = style({
"@media": {
"(min-width: 992px)": {
  marginLeft:"16.66666667%",
},
},
});
export const offsetLg3 = style({
"@media": {
"(min-width: 992px)": {
  marginLeft:"25%",
},
},
});
export const offsetLg4 = style({
"@media": {
"(min-width: 992px)": {
  marginLeft:"33.33333333%",
},
},
});
export const offsetLg5 = style({
"@media": {
"(min-width: 992px)": {
  marginLeft:"41.66666667%",
},
},
});
export const offsetLg6 = style({
"@media": {
"(min-width: 992px)": {
  marginLeft:"50%",
},
},
});
export const offsetLg7 = style({
"@media": {
"(min-width: 992px)": {
  marginLeft:"58.33333333%",
},
},
});
export const offsetLg8 = style({
"@media": {
"(min-width: 992px)": {
  marginLeft:"66.66666667%",
},
},
});
export const offsetLg9 = style({
"@media": {
"(min-width: 992px)": {
  marginLeft:"75%",
},
},
});
export const offsetMd0 = style({
"@media": {
"(min-width: 768px)": {
  marginLeft:"0",
},
},
});
export const offsetMd1 = style({
"@media": {
"(min-width: 768px)": {
  marginLeft:"8.33333333%",
},
},
});
export const offsetMd10 = style({
"@media": {
"(min-width: 768px)": {
  marginLeft:"83.33333333%",
},
},
});
export const offsetMd11 = style({
"@media": {
"(min-width: 768px)": {
  marginLeft:"91.66666667%",
},
},
});
export const offsetMd2 = style({
"@media": {
"(min-width: 768px)": {
  marginLeft:"16.66666667%",
},
},
});
export const offsetMd3 = style({
"@media": {
"(min-width: 768px)": {
  marginLeft:"25%",
},
},
});
export const offsetMd4 = style({
"@media": {
"(min-width: 768px)": {
  marginLeft:"33.33333333%",
},
},
});
export const offsetMd5 = style({
"@media": {
"(min-width: 768px)": {
  marginLeft:"41.66666667%",
},
},
});
export const offsetMd6 = style({
"@media": {
"(min-width: 768px)": {
  marginLeft:"50%",
},
},
});
export const offsetMd7 = style({
"@media": {
"(min-width: 768px)": {
  marginLeft:"58.33333333%",
},
},
});
export const offsetMd8 = style({
"@media": {
"(min-width: 768px)": {
  marginLeft:"66.66666667%",
},
},
});
export const offsetMd9 = style({
"@media": {
"(min-width: 768px)": {
  marginLeft:"75%",
},
},
});
export const offsetSm0 = style({
"@media": {
"(min-width: 576px)": {
  marginLeft:"0",
},
},
});
export const offsetSm1 = style({
"@media": {
"(min-width: 576px)": {
  marginLeft:"8.33333333%",
},
},
});
export const offsetSm10 = style({
"@media": {
"(min-width: 576px)": {
  marginLeft:"83.33333333%",
},
},
});
export const offsetSm11 = style({
"@media": {
"(min-width: 576px)": {
  marginLeft:"91.66666667%",
},
},
});
export const offsetSm2 = style({
"@media": {
"(min-width: 576px)": {
  marginLeft:"16.66666667%",
},
},
});
export const offsetSm3 = style({
"@media": {
"(min-width: 576px)": {
  marginLeft:"25%",
},
},
});
export const offsetSm4 = style({
"@media": {
"(min-width: 576px)": {
  marginLeft:"33.33333333%",
},
},
});
export const offsetSm5 = style({
"@media": {
"(min-width: 576px)": {
  marginLeft:"41.66666667%",
},
},
});
export const offsetSm6 = style({
"@media": {
"(min-width: 576px)": {
  marginLeft:"50%",
},
},
});
export const offsetSm7 = style({
"@media": {
"(min-width: 576px)": {
  marginLeft:"58.33333333%",
},
},
});
export const offsetSm8 = style({
"@media": {
"(min-width: 576px)": {
  marginLeft:"66.66666667%",
},
},
});
export const offsetSm9 = style({
"@media": {
"(min-width: 576px)": {
  marginLeft:"75%",
},
},
});
export const offsetXl0 = style({
"@media": {
"(min-width: 1200px)": {
  marginLeft:"0",
},
},
});
export const offsetXl1 = style({
"@media": {
"(min-width: 1200px)": {
  marginLeft:"8.33333333%",
},
},
});
export const offsetXl10 = style({
"@media": {
"(min-width: 1200px)": {
  marginLeft:"83.33333333%",
},
},
});
export const offsetXl11 = style({
"@media": {
"(min-width: 1200px)": {
  marginLeft:"91.66666667%",
},
},
});
export const offsetXl2 = style({
"@media": {
"(min-width: 1200px)": {
  marginLeft:"16.66666667%",
},
},
});
export const offsetXl3 = style({
"@media": {
"(min-width: 1200px)": {
  marginLeft:"25%",
},
},
});
export const offsetXl4 = style({
"@media": {
"(min-width: 1200px)": {
  marginLeft:"33.33333333%",
},
},
});
export const offsetXl5 = style({
"@media": {
"(min-width: 1200px)": {
  marginLeft:"41.66666667%",
},
},
});
export const offsetXl6 = style({
"@media": {
"(min-width: 1200px)": {
  marginLeft:"50%",
},
},
});
export const offsetXl7 = style({
"@media": {
"(min-width: 1200px)": {
  marginLeft:"58.33333333%",
},
},
});
export const offsetXl8 = style({
"@media": {
"(min-width: 1200px)": {
  marginLeft:"66.66666667%",
},
},
});
export const offsetXl9 = style({
"@media": {
"(min-width: 1200px)": {
  marginLeft:"75%",
},
},
});
export const offsetXxl0 = style({
"@media": {
"(min-width: 1400px)": {
  marginLeft:"0",
},
},
});
export const offsetXxl1 = style({
"@media": {
"(min-width: 1400px)": {
  marginLeft:"8.33333333%",
},
},
});
export const offsetXxl10 = style({
"@media": {
"(min-width: 1400px)": {
  marginLeft:"83.33333333%",
},
},
});
export const offsetXxl11 = style({
"@media": {
"(min-width: 1400px)": {
  marginLeft:"91.66666667%",
},
},
});
export const offsetXxl2 = style({
"@media": {
"(min-width: 1400px)": {
  marginLeft:"16.66666667%",
},
},
});
export const offsetXxl3 = style({
"@media": {
"(min-width: 1400px)": {
  marginLeft:"25%",
},
},
});
export const offsetXxl4 = style({
"@media": {
"(min-width: 1400px)": {
  marginLeft:"33.33333333%",
},
},
});
export const offsetXxl5 = style({
"@media": {
"(min-width: 1400px)": {
  marginLeft:"41.66666667%",
},
},
});
export const offsetXxl6 = style({
"@media": {
"(min-width: 1400px)": {
  marginLeft:"50%",
},
},
});
export const offsetXxl7 = style({
"@media": {
"(min-width: 1400px)": {
  marginLeft:"58.33333333%",
},
},
});
export const offsetXxl8 = style({
"@media": {
"(min-width: 1400px)": {
  marginLeft:"66.66666667%",
},
},
});
export const offsetXxl9 = style({
"@media": {
"(min-width: 1400px)": {
  marginLeft:"75%",
},
},
});
export const opacity0 = style({
  opacity:"0",
});
export const opacity100 = style({
  opacity:"1",
});
export const opacity25 = style({
  opacity:"0.25",
});
export const opacity50 = style({
  opacity:"0.5",
});
export const opacity75 = style({
  opacity:"0.75",
});
export const order0 = style({
  order:"0",
});
export const order1 = style({
  order:"1",
});
export const order2 = style({
  order:"2",
});
export const order3 = style({
  order:"3",
});
export const order4 = style({
  order:"4",
});
export const order5 = style({
  order:"5",
});
export const orderFirst = style({
  order:"-1",
});
export const orderLast = style({
  order:"6",
});
export const orderLg0 = style({
"@media": {
"(min-width: 992px)": {
  order:"0",
},
},
});
export const orderLg1 = style({
"@media": {
"(min-width: 992px)": {
  order:"1",
},
},
});
export const orderLg2 = style({
"@media": {
"(min-width: 992px)": {
  order:"2",
},
},
});
export const orderLg3 = style({
"@media": {
"(min-width: 992px)": {
  order:"3",
},
},
});
export const orderLg4 = style({
"@media": {
"(min-width: 992px)": {
  order:"4",
},
},
});
export const orderLg5 = style({
"@media": {
"(min-width: 992px)": {
  order:"5",
},
},
});
export const orderLgFirst = style({
"@media": {
"(min-width: 992px)": {
  order:"-1",
},
},
});
export const orderLgLast = style({
"@media": {
"(min-width: 992px)": {
  order:"6",
},
},
});
export const orderMd0 = style({
"@media": {
"(min-width: 768px)": {
  order:"0",
},
},
});
export const orderMd1 = style({
"@media": {
"(min-width: 768px)": {
  order:"1",
},
},
});
export const orderMd2 = style({
"@media": {
"(min-width: 768px)": {
  order:"2",
},
},
});
export const orderMd3 = style({
"@media": {
"(min-width: 768px)": {
  order:"3",
},
},
});
export const orderMd4 = style({
"@media": {
"(min-width: 768px)": {
  order:"4",
},
},
});
export const orderMd5 = style({
"@media": {
"(min-width: 768px)": {
  order:"5",
},
},
});
export const orderMdFirst = style({
"@media": {
"(min-width: 768px)": {
  order:"-1",
},
},
});
export const orderMdLast = style({
"@media": {
"(min-width: 768px)": {
  order:"6",
},
},
});
export const orderSm0 = style({
"@media": {
"(min-width: 576px)": {
  order:"0",
},
},
});
export const orderSm1 = style({
"@media": {
"(min-width: 576px)": {
  order:"1",
},
},
});
export const orderSm2 = style({
"@media": {
"(min-width: 576px)": {
  order:"2",
},
},
});
export const orderSm3 = style({
"@media": {
"(min-width: 576px)": {
  order:"3",
},
},
});
export const orderSm4 = style({
"@media": {
"(min-width: 576px)": {
  order:"4",
},
},
});
export const orderSm5 = style({
"@media": {
"(min-width: 576px)": {
  order:"5",
},
},
});
export const orderSmFirst = style({
"@media": {
"(min-width: 576px)": {
  order:"-1",
},
},
});
export const orderSmLast = style({
"@media": {
"(min-width: 576px)": {
  order:"6",
},
},
});
export const orderXl0 = style({
"@media": {
"(min-width: 1200px)": {
  order:"0",
},
},
});
export const orderXl1 = style({
"@media": {
"(min-width: 1200px)": {
  order:"1",
},
},
});
export const orderXl2 = style({
"@media": {
"(min-width: 1200px)": {
  order:"2",
},
},
});
export const orderXl3 = style({
"@media": {
"(min-width: 1200px)": {
  order:"3",
},
},
});
export const orderXl4 = style({
"@media": {
"(min-width: 1200px)": {
  order:"4",
},
},
});
export const orderXl5 = style({
"@media": {
"(min-width: 1200px)": {
  order:"5",
},
},
});
export const orderXlFirst = style({
"@media": {
"(min-width: 1200px)": {
  order:"-1",
},
},
});
export const orderXlLast = style({
"@media": {
"(min-width: 1200px)": {
  order:"6",
},
},
});
export const orderXxl0 = style({
"@media": {
"(min-width: 1400px)": {
  order:"0",
},
},
});
export const orderXxl1 = style({
"@media": {
"(min-width: 1400px)": {
  order:"1",
},
},
});
export const orderXxl2 = style({
"@media": {
"(min-width: 1400px)": {
  order:"2",
},
},
});
export const orderXxl3 = style({
"@media": {
"(min-width: 1400px)": {
  order:"3",
},
},
});
export const orderXxl4 = style({
"@media": {
"(min-width: 1400px)": {
  order:"4",
},
},
});
export const orderXxl5 = style({
"@media": {
"(min-width: 1400px)": {
  order:"5",
},
},
});
export const orderXxlFirst = style({
"@media": {
"(min-width: 1400px)": {
  order:"-1",
},
},
});
export const orderXxlLast = style({
"@media": {
"(min-width: 1400px)": {
  order:"6",
},
},
});
export const overflowAuto = style({
  overflow:"auto",
});
export const overflowHidden = style({
  overflow:"hidden",
});
export const overflowScroll = style({
  overflow:"scroll",
});
export const overflowVisible = style({
  overflow:"visible",
});
export const p0 = style({
  padding:"0",
});
export const p1 = style({
  padding:"0.25rem",
});
export const p2 = style({
  padding:"0.5rem",
});
export const p3 = style({
  padding:"1rem",
});
export const p4 = style({
  padding:"1.5rem",
});
export const p5 = style({
  padding:"3rem",
});
export const pLg0 = style({
"@media": {
"(min-width: 992px)": {
  padding:"0",
},
},
});
export const pLg1 = style({
"@media": {
"(min-width: 992px)": {
  padding:"0.25rem",
},
},
});
export const pLg2 = style({
"@media": {
"(min-width: 992px)": {
  padding:"0.5rem",
},
},
});
export const pLg3 = style({
"@media": {
"(min-width: 992px)": {
  padding:"1rem",
},
},
});
export const pLg4 = style({
"@media": {
"(min-width: 992px)": {
  padding:"1.5rem",
},
},
});
export const pLg5 = style({
"@media": {
"(min-width: 992px)": {
  padding:"3rem",
},
},
});
export const pMd0 = style({
"@media": {
"(min-width: 768px)": {
  padding:"0",
},
},
});
export const pMd1 = style({
"@media": {
"(min-width: 768px)": {
  padding:"0.25rem",
},
},
});
export const pMd2 = style({
"@media": {
"(min-width: 768px)": {
  padding:"0.5rem",
},
},
});
export const pMd3 = style({
"@media": {
"(min-width: 768px)": {
  padding:"1rem",
},
},
});
export const pMd4 = style({
"@media": {
"(min-width: 768px)": {
  padding:"1.5rem",
},
},
});
export const pMd5 = style({
"@media": {
"(min-width: 768px)": {
  padding:"3rem",
},
},
});
export const pSm0 = style({
"@media": {
"(min-width: 576px)": {
  padding:"0",
},
},
});
export const pSm1 = style({
"@media": {
"(min-width: 576px)": {
  padding:"0.25rem",
},
},
});
export const pSm2 = style({
"@media": {
"(min-width: 576px)": {
  padding:"0.5rem",
},
},
});
export const pSm3 = style({
"@media": {
"(min-width: 576px)": {
  padding:"1rem",
},
},
});
export const pSm4 = style({
"@media": {
"(min-width: 576px)": {
  padding:"1.5rem",
},
},
});
export const pSm5 = style({
"@media": {
"(min-width: 576px)": {
  padding:"3rem",
},
},
});
export const pXl0 = style({
"@media": {
"(min-width: 1200px)": {
  padding:"0",
},
},
});
export const pXl1 = style({
"@media": {
"(min-width: 1200px)": {
  padding:"0.25rem",
},
},
});
export const pXl2 = style({
"@media": {
"(min-width: 1200px)": {
  padding:"0.5rem",
},
},
});
export const pXl3 = style({
"@media": {
"(min-width: 1200px)": {
  padding:"1rem",
},
},
});
export const pXl4 = style({
"@media": {
"(min-width: 1200px)": {
  padding:"1.5rem",
},
},
});
export const pXl5 = style({
"@media": {
"(min-width: 1200px)": {
  padding:"3rem",
},
},
});
export const pXxl0 = style({
"@media": {
"(min-width: 1400px)": {
  padding:"0",
},
},
});
export const pXxl1 = style({
"@media": {
"(min-width: 1400px)": {
  padding:"0.25rem",
},
},
});
export const pXxl2 = style({
"@media": {
"(min-width: 1400px)": {
  padding:"0.5rem",
},
},
});
export const pXxl3 = style({
"@media": {
"(min-width: 1400px)": {
  padding:"1rem",
},
},
});
export const pXxl4 = style({
"@media": {
"(min-width: 1400px)": {
  padding:"1.5rem",
},
},
});
export const pXxl5 = style({
"@media": {
"(min-width: 1400px)": {
  padding:"3rem",
},
},
});
export const pageItem = style({
"selectors": {
"&:not(:first-child)": {
  marginLeft:"-1px",
},
},
  zIndex:"3",
  color:"fff",
  backgroundColor:"0d6efd",
  borderColor:"0d6efd",
  color:"6c757d",
  pointerEvents:"none",
  backgroundColor:"fff",
  borderColor:"dee2e6",
":first-child": {
  borderTopLeftRadius:"0.25rem",
  borderBottomLeftRadius:"0.25rem",
},
":last-child": {
  borderTopRightRadius:"0.25rem",
  borderBottomRightRadius:"0.25rem",
},
});
export const pageLink = style({
  position:"relative",
  display:"block",
  color:"0d6efd",
  textDecoration:"none",
  backgroundColor:"fff",
  border:"1px solid dee2e6",
  transition:"color 0.15s ease-in-out , background-color 0.15s ease-in-out , border-color 0.15s ease-in-out , box-shadow 0.15s ease-in-out",
":hover": {
  zIndex:"2",
  color:"0a58ca",
  backgroundColor:"e9ecef",
  borderColor:"dee2e6",
},
":focus": {
  zIndex:"3",
  color:"0a58ca",
  backgroundColor:"e9ecef",
  outline:"0",
  boxShadow:"0 0 0 0.25rem rgba(13,110,253,0.25)",
},
  padding:"0.375rem 0.75rem",
"@media": {
"(prefers-reduced-motion: reduce)": {
  transition:"none",
},
},
});
export const pagination = style({
  display:"flex",
  paddingLeft:"0",
  listStyle:"none",
});
export const paginationLg = style({
  padding:"0.75rem 1.5rem",
  fontSize:"1.25rem",
":first-child": {
  borderTopLeftRadius:"0.3rem",
  borderBottomLeftRadius:"0.3rem",
},
":last-child": {
  borderTopRightRadius:"0.3rem",
  borderBottomRightRadius:"0.3rem",
},
});
export const paginationSm = style({
  padding:"0.25rem 0.5rem",
  fontSize:"0.875rem",
":first-child": {
  borderTopLeftRadius:"0.2rem",
  borderBottomLeftRadius:"0.2rem",
},
":last-child": {
  borderTopRightRadius:"0.2rem",
  borderBottomRightRadius:"0.2rem",
},
});
export const pb0 = style({
  paddingBottom:"0",
});
export const pb1 = style({
  paddingBottom:"0.25rem",
});
export const pb2 = style({
  paddingBottom:"0.5rem",
});
export const pb3 = style({
  paddingBottom:"1rem",
});
export const pb4 = style({
  paddingBottom:"1.5rem",
});
export const pb5 = style({
  paddingBottom:"3rem",
});
export const pbLg0 = style({
"@media": {
"(min-width: 992px)": {
  paddingBottom:"0",
},
},
});
export const pbLg1 = style({
"@media": {
"(min-width: 992px)": {
  paddingBottom:"0.25rem",
},
},
});
export const pbLg2 = style({
"@media": {
"(min-width: 992px)": {
  paddingBottom:"0.5rem",
},
},
});
export const pbLg3 = style({
"@media": {
"(min-width: 992px)": {
  paddingBottom:"1rem",
},
},
});
export const pbLg4 = style({
"@media": {
"(min-width: 992px)": {
  paddingBottom:"1.5rem",
},
},
});
export const pbLg5 = style({
"@media": {
"(min-width: 992px)": {
  paddingBottom:"3rem",
},
},
});
export const pbMd0 = style({
"@media": {
"(min-width: 768px)": {
  paddingBottom:"0",
},
},
});
export const pbMd1 = style({
"@media": {
"(min-width: 768px)": {
  paddingBottom:"0.25rem",
},
},
});
export const pbMd2 = style({
"@media": {
"(min-width: 768px)": {
  paddingBottom:"0.5rem",
},
},
});
export const pbMd3 = style({
"@media": {
"(min-width: 768px)": {
  paddingBottom:"1rem",
},
},
});
export const pbMd4 = style({
"@media": {
"(min-width: 768px)": {
  paddingBottom:"1.5rem",
},
},
});
export const pbMd5 = style({
"@media": {
"(min-width: 768px)": {
  paddingBottom:"3rem",
},
},
});
export const pbSm0 = style({
"@media": {
"(min-width: 576px)": {
  paddingBottom:"0",
},
},
});
export const pbSm1 = style({
"@media": {
"(min-width: 576px)": {
  paddingBottom:"0.25rem",
},
},
});
export const pbSm2 = style({
"@media": {
"(min-width: 576px)": {
  paddingBottom:"0.5rem",
},
},
});
export const pbSm3 = style({
"@media": {
"(min-width: 576px)": {
  paddingBottom:"1rem",
},
},
});
export const pbSm4 = style({
"@media": {
"(min-width: 576px)": {
  paddingBottom:"1.5rem",
},
},
});
export const pbSm5 = style({
"@media": {
"(min-width: 576px)": {
  paddingBottom:"3rem",
},
},
});
export const pbXl0 = style({
"@media": {
"(min-width: 1200px)": {
  paddingBottom:"0",
},
},
});
export const pbXl1 = style({
"@media": {
"(min-width: 1200px)": {
  paddingBottom:"0.25rem",
},
},
});
export const pbXl2 = style({
"@media": {
"(min-width: 1200px)": {
  paddingBottom:"0.5rem",
},
},
});
export const pbXl3 = style({
"@media": {
"(min-width: 1200px)": {
  paddingBottom:"1rem",
},
},
});
export const pbXl4 = style({
"@media": {
"(min-width: 1200px)": {
  paddingBottom:"1.5rem",
},
},
});
export const pbXl5 = style({
"@media": {
"(min-width: 1200px)": {
  paddingBottom:"3rem",
},
},
});
export const pbXxl0 = style({
"@media": {
"(min-width: 1400px)": {
  paddingBottom:"0",
},
},
});
export const pbXxl1 = style({
"@media": {
"(min-width: 1400px)": {
  paddingBottom:"0.25rem",
},
},
});
export const pbXxl2 = style({
"@media": {
"(min-width: 1400px)": {
  paddingBottom:"0.5rem",
},
},
});
export const pbXxl3 = style({
"@media": {
"(min-width: 1400px)": {
  paddingBottom:"1rem",
},
},
});
export const pbXxl4 = style({
"@media": {
"(min-width: 1400px)": {
  paddingBottom:"1.5rem",
},
},
});
export const pbXxl5 = style({
"@media": {
"(min-width: 1400px)": {
  paddingBottom:"3rem",
},
},
});
export const pe0 = style({
  paddingRight:"0",
});
export const pe1 = style({
  paddingRight:"0.25rem",
});
export const pe2 = style({
  paddingRight:"0.5rem",
});
export const pe3 = style({
  paddingRight:"1rem",
});
export const pe4 = style({
  paddingRight:"1.5rem",
});
export const pe5 = style({
  paddingRight:"3rem",
});
export const peAuto = style({
  pointerEvents:"auto",
});
export const peLg0 = style({
"@media": {
"(min-width: 992px)": {
  paddingRight:"0",
},
},
});
export const peLg1 = style({
"@media": {
"(min-width: 992px)": {
  paddingRight:"0.25rem",
},
},
});
export const peLg2 = style({
"@media": {
"(min-width: 992px)": {
  paddingRight:"0.5rem",
},
},
});
export const peLg3 = style({
"@media": {
"(min-width: 992px)": {
  paddingRight:"1rem",
},
},
});
export const peLg4 = style({
"@media": {
"(min-width: 992px)": {
  paddingRight:"1.5rem",
},
},
});
export const peLg5 = style({
"@media": {
"(min-width: 992px)": {
  paddingRight:"3rem",
},
},
});
export const peMd0 = style({
"@media": {
"(min-width: 768px)": {
  paddingRight:"0",
},
},
});
export const peMd1 = style({
"@media": {
"(min-width: 768px)": {
  paddingRight:"0.25rem",
},
},
});
export const peMd2 = style({
"@media": {
"(min-width: 768px)": {
  paddingRight:"0.5rem",
},
},
});
export const peMd3 = style({
"@media": {
"(min-width: 768px)": {
  paddingRight:"1rem",
},
},
});
export const peMd4 = style({
"@media": {
"(min-width: 768px)": {
  paddingRight:"1.5rem",
},
},
});
export const peMd5 = style({
"@media": {
"(min-width: 768px)": {
  paddingRight:"3rem",
},
},
});
export const peNone = style({
  pointerEvents:"none",
});
export const peSm0 = style({
"@media": {
"(min-width: 576px)": {
  paddingRight:"0",
},
},
});
export const peSm1 = style({
"@media": {
"(min-width: 576px)": {
  paddingRight:"0.25rem",
},
},
});
export const peSm2 = style({
"@media": {
"(min-width: 576px)": {
  paddingRight:"0.5rem",
},
},
});
export const peSm3 = style({
"@media": {
"(min-width: 576px)": {
  paddingRight:"1rem",
},
},
});
export const peSm4 = style({
"@media": {
"(min-width: 576px)": {
  paddingRight:"1.5rem",
},
},
});
export const peSm5 = style({
"@media": {
"(min-width: 576px)": {
  paddingRight:"3rem",
},
},
});
export const peXl0 = style({
"@media": {
"(min-width: 1200px)": {
  paddingRight:"0",
},
},
});
export const peXl1 = style({
"@media": {
"(min-width: 1200px)": {
  paddingRight:"0.25rem",
},
},
});
export const peXl2 = style({
"@media": {
"(min-width: 1200px)": {
  paddingRight:"0.5rem",
},
},
});
export const peXl3 = style({
"@media": {
"(min-width: 1200px)": {
  paddingRight:"1rem",
},
},
});
export const peXl4 = style({
"@media": {
"(min-width: 1200px)": {
  paddingRight:"1.5rem",
},
},
});
export const peXl5 = style({
"@media": {
"(min-width: 1200px)": {
  paddingRight:"3rem",
},
},
});
export const peXxl0 = style({
"@media": {
"(min-width: 1400px)": {
  paddingRight:"0",
},
},
});
export const peXxl1 = style({
"@media": {
"(min-width: 1400px)": {
  paddingRight:"0.25rem",
},
},
});
export const peXxl2 = style({
"@media": {
"(min-width: 1400px)": {
  paddingRight:"0.5rem",
},
},
});
export const peXxl3 = style({
"@media": {
"(min-width: 1400px)": {
  paddingRight:"1rem",
},
},
});
export const peXxl4 = style({
"@media": {
"(min-width: 1400px)": {
  paddingRight:"1.5rem",
},
},
});
export const peXxl5 = style({
"@media": {
"(min-width: 1400px)": {
  paddingRight:"3rem",
},
},
});
export const placeholder = style({
  display:"inline-block",
  minHeight:"1em",
  verticalAlign:"middle",
  cursor:"wait",
  backgroundColor:"currentColor",
  opacity:"0.5",
"::before": {
  display:"inline-block",
  content:"",
},
});
export const placeholderGlow = style({
  WebkitAnimation:"placeholder-glow 2s ease-in-out infinite",
  animation:"placeholder-glow 2s ease-in-out infinite",
});
export const placeholderLg = style({
  minHeight:"1.2em",
});
export const placeholderSm = style({
  minHeight:"0.8em",
});
export const placeholderWave = style({
  WebkitMaskImage:"linear-gradient(130deg,00055%,rgba(0,0,0,0.8)75%,00095%)",
  maskImage:"linear-gradient(130deg,00055%,rgba(0,0,0,0.8)75%,00095%)",
  WebkitMaskSize:"200% 100%",
  maskSize:"200% 100%",
  WebkitAnimation:"placeholder-wave 2s linear infinite",
  animation:"placeholder-wave 2s linear infinite",
});
export const placeholderXs = style({
  minHeight:"0.6em",
});
export const popover = style({
  position:"absolute",
  top:"0",
  left:"0",
  zIndex:"1070",
  display:"block",
  maxWidth:"276px",
  fontFamily:"var(--bs-font-sans-serif)",
  fontStyle:"normal",
  fontWeight:"400",
  lineHeight:"1.5",
  textAlign:"left",
  textAlign:"start",
  textDecoration:"none",
  textShadow:"none",
  textTransform:"none",
  letterSpacing:"normal",
  wordBreak:"normal",
  wordSpacing:"normal",
  whiteSpace:"normal",
  lineBreak:"auto",
  fontSize:"0.875rem",
  wordWrap:"break-word",
  backgroundColor:"fff",
  backgroundClip:"padding-box",
  border:"1px solid rgba(0,0,0,0.2)",
  borderRadius:"0.3rem",
  position:"absolute",
  display:"block",
  width:"1rem",
  height:"0.5rem",
"::before": {
  position:"absolute",
  display:"block",
  content:"",
  borderColor:"transparent",
  borderStyle:"solid",
},
"::after": {
  position:"absolute",
  display:"block",
  content:"",
  borderColor:"transparent",
  borderStyle:"solid",
},
});
export const popoverBody = style({
  padding:"1rem 1rem",
  color:"212529",
});
export const popoverHeader = style({
  padding:"0.5rem 1rem",
  marginBottom:"0",
  fontSize:"1rem",
  backgroundColor:"f0f0f0",
  borderBottom:"1px solid rgba(0,0,0,0.2)",
  borderTopLeftRadius:"calc(0.3rem-1px)",
  borderTopRightRadius:"calc(0.3rem-1px)",
":empty": {
  display:"none",
},
});
export const positionAbsolute = style({
  position:"absolute",
});
export const positionFixed = style({
  position:"fixed",
});
export const positionRelative = style({
  position:"relative",
});
export const positionStatic = style({
  position:"static",
});
export const positionSticky = style({
  position:"-webkit-sticky",
  position:"sticky",
});
export const progress = style({
  display:"flex",
  height:"1rem",
  overflow:"hidden",
  fontSize:"0.75rem",
  backgroundColor:"e9ecef",
  borderRadius:"0.25rem",
});
export const progressBar = style({
  display:"flex",
  flexDirection:"column",
  justifyContent:"center",
  overflow:"hidden",
  color:"fff",
  textAlign:"center",
  whiteSpace:"nowrap",
  backgroundColor:"0d6efd",
  transition:"width 0.6s ease",
"@media": {
"(prefers-reduced-motion: reduce)": {
  transition:"none",
},
},
});
export const progressBarAnimated = style({
  WebkitAnimation:"1s linear infinite progress-bar-stripes",
  animation:"1s linear infinite progress-bar-stripes",
"@media": {
"(prefers-reduced-motion: reduce)": {
  WebkitAnimation:"none",
  animation:"none",
},
},
});
export const progressBarStriped = style({
  backgroundImage:"linear-gradient(45deg,rgba(255,255,255,0.15)25%,transparent25%,transparent50%,rgba(255,255,255,0.15)50%,rgba(255,255,255,0.15)75%,transparent75%,transparent)",
  backgroundSize:"1rem 1rem",
});
export const ps0 = style({
  paddingLeft:"0",
});
export const ps1 = style({
  paddingLeft:"0.25rem",
});
export const ps2 = style({
  paddingLeft:"0.5rem",
});
export const ps3 = style({
  paddingLeft:"1rem",
});
export const ps4 = style({
  paddingLeft:"1.5rem",
});
export const ps5 = style({
  paddingLeft:"3rem",
});
export const psLg0 = style({
"@media": {
"(min-width: 992px)": {
  paddingLeft:"0",
},
},
});
export const psLg1 = style({
"@media": {
"(min-width: 992px)": {
  paddingLeft:"0.25rem",
},
},
});
export const psLg2 = style({
"@media": {
"(min-width: 992px)": {
  paddingLeft:"0.5rem",
},
},
});
export const psLg3 = style({
"@media": {
"(min-width: 992px)": {
  paddingLeft:"1rem",
},
},
});
export const psLg4 = style({
"@media": {
"(min-width: 992px)": {
  paddingLeft:"1.5rem",
},
},
});
export const psLg5 = style({
"@media": {
"(min-width: 992px)": {
  paddingLeft:"3rem",
},
},
});
export const psMd0 = style({
"@media": {
"(min-width: 768px)": {
  paddingLeft:"0",
},
},
});
export const psMd1 = style({
"@media": {
"(min-width: 768px)": {
  paddingLeft:"0.25rem",
},
},
});
export const psMd2 = style({
"@media": {
"(min-width: 768px)": {
  paddingLeft:"0.5rem",
},
},
});
export const psMd3 = style({
"@media": {
"(min-width: 768px)": {
  paddingLeft:"1rem",
},
},
});
export const psMd4 = style({
"@media": {
"(min-width: 768px)": {
  paddingLeft:"1.5rem",
},
},
});
export const psMd5 = style({
"@media": {
"(min-width: 768px)": {
  paddingLeft:"3rem",
},
},
});
export const psSm0 = style({
"@media": {
"(min-width: 576px)": {
  paddingLeft:"0",
},
},
});
export const psSm1 = style({
"@media": {
"(min-width: 576px)": {
  paddingLeft:"0.25rem",
},
},
});
export const psSm2 = style({
"@media": {
"(min-width: 576px)": {
  paddingLeft:"0.5rem",
},
},
});
export const psSm3 = style({
"@media": {
"(min-width: 576px)": {
  paddingLeft:"1rem",
},
},
});
export const psSm4 = style({
"@media": {
"(min-width: 576px)": {
  paddingLeft:"1.5rem",
},
},
});
export const psSm5 = style({
"@media": {
"(min-width: 576px)": {
  paddingLeft:"3rem",
},
},
});
export const psXl0 = style({
"@media": {
"(min-width: 1200px)": {
  paddingLeft:"0",
},
},
});
export const psXl1 = style({
"@media": {
"(min-width: 1200px)": {
  paddingLeft:"0.25rem",
},
},
});
export const psXl2 = style({
"@media": {
"(min-width: 1200px)": {
  paddingLeft:"0.5rem",
},
},
});
export const psXl3 = style({
"@media": {
"(min-width: 1200px)": {
  paddingLeft:"1rem",
},
},
});
export const psXl4 = style({
"@media": {
"(min-width: 1200px)": {
  paddingLeft:"1.5rem",
},
},
});
export const psXl5 = style({
"@media": {
"(min-width: 1200px)": {
  paddingLeft:"3rem",
},
},
});
export const psXxl0 = style({
"@media": {
"(min-width: 1400px)": {
  paddingLeft:"0",
},
},
});
export const psXxl1 = style({
"@media": {
"(min-width: 1400px)": {
  paddingLeft:"0.25rem",
},
},
});
export const psXxl2 = style({
"@media": {
"(min-width: 1400px)": {
  paddingLeft:"0.5rem",
},
},
});
export const psXxl3 = style({
"@media": {
"(min-width: 1400px)": {
  paddingLeft:"1rem",
},
},
});
export const psXxl4 = style({
"@media": {
"(min-width: 1400px)": {
  paddingLeft:"1.5rem",
},
},
});
export const psXxl5 = style({
"@media": {
"(min-width: 1400px)": {
  paddingLeft:"3rem",
},
},
});
export const pt0 = style({
  paddingTop:"0",
});
export const pt1 = style({
  paddingTop:"0.25rem",
});
export const pt2 = style({
  paddingTop:"0.5rem",
});
export const pt3 = style({
  paddingTop:"1rem",
});
export const pt4 = style({
  paddingTop:"1.5rem",
});
export const pt5 = style({
  paddingTop:"3rem",
});
export const ptLg0 = style({
"@media": {
"(min-width: 992px)": {
  paddingTop:"0",
},
},
});
export const ptLg1 = style({
"@media": {
"(min-width: 992px)": {
  paddingTop:"0.25rem",
},
},
});
export const ptLg2 = style({
"@media": {
"(min-width: 992px)": {
  paddingTop:"0.5rem",
},
},
});
export const ptLg3 = style({
"@media": {
"(min-width: 992px)": {
  paddingTop:"1rem",
},
},
});
export const ptLg4 = style({
"@media": {
"(min-width: 992px)": {
  paddingTop:"1.5rem",
},
},
});
export const ptLg5 = style({
"@media": {
"(min-width: 992px)": {
  paddingTop:"3rem",
},
},
});
export const ptMd0 = style({
"@media": {
"(min-width: 768px)": {
  paddingTop:"0",
},
},
});
export const ptMd1 = style({
"@media": {
"(min-width: 768px)": {
  paddingTop:"0.25rem",
},
},
});
export const ptMd2 = style({
"@media": {
"(min-width: 768px)": {
  paddingTop:"0.5rem",
},
},
});
export const ptMd3 = style({
"@media": {
"(min-width: 768px)": {
  paddingTop:"1rem",
},
},
});
export const ptMd4 = style({
"@media": {
"(min-width: 768px)": {
  paddingTop:"1.5rem",
},
},
});
export const ptMd5 = style({
"@media": {
"(min-width: 768px)": {
  paddingTop:"3rem",
},
},
});
export const ptSm0 = style({
"@media": {
"(min-width: 576px)": {
  paddingTop:"0",
},
},
});
export const ptSm1 = style({
"@media": {
"(min-width: 576px)": {
  paddingTop:"0.25rem",
},
},
});
export const ptSm2 = style({
"@media": {
"(min-width: 576px)": {
  paddingTop:"0.5rem",
},
},
});
export const ptSm3 = style({
"@media": {
"(min-width: 576px)": {
  paddingTop:"1rem",
},
},
});
export const ptSm4 = style({
"@media": {
"(min-width: 576px)": {
  paddingTop:"1.5rem",
},
},
});
export const ptSm5 = style({
"@media": {
"(min-width: 576px)": {
  paddingTop:"3rem",
},
},
});
export const ptXl0 = style({
"@media": {
"(min-width: 1200px)": {
  paddingTop:"0",
},
},
});
export const ptXl1 = style({
"@media": {
"(min-width: 1200px)": {
  paddingTop:"0.25rem",
},
},
});
export const ptXl2 = style({
"@media": {
"(min-width: 1200px)": {
  paddingTop:"0.5rem",
},
},
});
export const ptXl3 = style({
"@media": {
"(min-width: 1200px)": {
  paddingTop:"1rem",
},
},
});
export const ptXl4 = style({
"@media": {
"(min-width: 1200px)": {
  paddingTop:"1.5rem",
},
},
});
export const ptXl5 = style({
"@media": {
"(min-width: 1200px)": {
  paddingTop:"3rem",
},
},
});
export const ptXxl0 = style({
"@media": {
"(min-width: 1400px)": {
  paddingTop:"0",
},
},
});
export const ptXxl1 = style({
"@media": {
"(min-width: 1400px)": {
  paddingTop:"0.25rem",
},
},
});
export const ptXxl2 = style({
"@media": {
"(min-width: 1400px)": {
  paddingTop:"0.5rem",
},
},
});
export const ptXxl3 = style({
"@media": {
"(min-width: 1400px)": {
  paddingTop:"1rem",
},
},
});
export const ptXxl4 = style({
"@media": {
"(min-width: 1400px)": {
  paddingTop:"1.5rem",
},
},
});
export const ptXxl5 = style({
"@media": {
"(min-width: 1400px)": {
  paddingTop:"3rem",
},
},
});
export const px0 = style({
  paddingRight:"0",
  paddingLeft:"0",
});
export const px1 = style({
  paddingRight:"0.25rem",
  paddingLeft:"0.25rem",
});
export const px2 = style({
  paddingRight:"0.5rem",
  paddingLeft:"0.5rem",
});
export const px3 = style({
  paddingRight:"1rem",
  paddingLeft:"1rem",
});
export const px4 = style({
  paddingRight:"1.5rem",
  paddingLeft:"1.5rem",
});
export const px5 = style({
  paddingRight:"3rem",
  paddingLeft:"3rem",
});
export const pxLg0 = style({
"@media": {
"(min-width: 992px)": {
  paddingRight:"0",
  paddingLeft:"0",
},
},
});
export const pxLg1 = style({
"@media": {
"(min-width: 992px)": {
  paddingRight:"0.25rem",
  paddingLeft:"0.25rem",
},
},
});
export const pxLg2 = style({
"@media": {
"(min-width: 992px)": {
  paddingRight:"0.5rem",
  paddingLeft:"0.5rem",
},
},
});
export const pxLg3 = style({
"@media": {
"(min-width: 992px)": {
  paddingRight:"1rem",
  paddingLeft:"1rem",
},
},
});
export const pxLg4 = style({
"@media": {
"(min-width: 992px)": {
  paddingRight:"1.5rem",
  paddingLeft:"1.5rem",
},
},
});
export const pxLg5 = style({
"@media": {
"(min-width: 992px)": {
  paddingRight:"3rem",
  paddingLeft:"3rem",
},
},
});
export const pxMd0 = style({
"@media": {
"(min-width: 768px)": {
  paddingRight:"0",
  paddingLeft:"0",
},
},
});
export const pxMd1 = style({
"@media": {
"(min-width: 768px)": {
  paddingRight:"0.25rem",
  paddingLeft:"0.25rem",
},
},
});
export const pxMd2 = style({
"@media": {
"(min-width: 768px)": {
  paddingRight:"0.5rem",
  paddingLeft:"0.5rem",
},
},
});
export const pxMd3 = style({
"@media": {
"(min-width: 768px)": {
  paddingRight:"1rem",
  paddingLeft:"1rem",
},
},
});
export const pxMd4 = style({
"@media": {
"(min-width: 768px)": {
  paddingRight:"1.5rem",
  paddingLeft:"1.5rem",
},
},
});
export const pxMd5 = style({
"@media": {
"(min-width: 768px)": {
  paddingRight:"3rem",
  paddingLeft:"3rem",
},
},
});
export const pxSm0 = style({
"@media": {
"(min-width: 576px)": {
  paddingRight:"0",
  paddingLeft:"0",
},
},
});
export const pxSm1 = style({
"@media": {
"(min-width: 576px)": {
  paddingRight:"0.25rem",
  paddingLeft:"0.25rem",
},
},
});
export const pxSm2 = style({
"@media": {
"(min-width: 576px)": {
  paddingRight:"0.5rem",
  paddingLeft:"0.5rem",
},
},
});
export const pxSm3 = style({
"@media": {
"(min-width: 576px)": {
  paddingRight:"1rem",
  paddingLeft:"1rem",
},
},
});
export const pxSm4 = style({
"@media": {
"(min-width: 576px)": {
  paddingRight:"1.5rem",
  paddingLeft:"1.5rem",
},
},
});
export const pxSm5 = style({
"@media": {
"(min-width: 576px)": {
  paddingRight:"3rem",
  paddingLeft:"3rem",
},
},
});
export const pxXl0 = style({
"@media": {
"(min-width: 1200px)": {
  paddingRight:"0",
  paddingLeft:"0",
},
},
});
export const pxXl1 = style({
"@media": {
"(min-width: 1200px)": {
  paddingRight:"0.25rem",
  paddingLeft:"0.25rem",
},
},
});
export const pxXl2 = style({
"@media": {
"(min-width: 1200px)": {
  paddingRight:"0.5rem",
  paddingLeft:"0.5rem",
},
},
});
export const pxXl3 = style({
"@media": {
"(min-width: 1200px)": {
  paddingRight:"1rem",
  paddingLeft:"1rem",
},
},
});
export const pxXl4 = style({
"@media": {
"(min-width: 1200px)": {
  paddingRight:"1.5rem",
  paddingLeft:"1.5rem",
},
},
});
export const pxXl5 = style({
"@media": {
"(min-width: 1200px)": {
  paddingRight:"3rem",
  paddingLeft:"3rem",
},
},
});
export const pxXxl0 = style({
"@media": {
"(min-width: 1400px)": {
  paddingRight:"0",
  paddingLeft:"0",
},
},
});
export const pxXxl1 = style({
"@media": {
"(min-width: 1400px)": {
  paddingRight:"0.25rem",
  paddingLeft:"0.25rem",
},
},
});
export const pxXxl2 = style({
"@media": {
"(min-width: 1400px)": {
  paddingRight:"0.5rem",
  paddingLeft:"0.5rem",
},
},
});
export const pxXxl3 = style({
"@media": {
"(min-width: 1400px)": {
  paddingRight:"1rem",
  paddingLeft:"1rem",
},
},
});
export const pxXxl4 = style({
"@media": {
"(min-width: 1400px)": {
  paddingRight:"1.5rem",
  paddingLeft:"1.5rem",
},
},
});
export const pxXxl5 = style({
"@media": {
"(min-width: 1400px)": {
  paddingRight:"3rem",
  paddingLeft:"3rem",
},
},
});
export const py0 = style({
  paddingTop:"0",
  paddingBottom:"0",
});
export const py1 = style({
  paddingTop:"0.25rem",
  paddingBottom:"0.25rem",
});
export const py2 = style({
  paddingTop:"0.5rem",
  paddingBottom:"0.5rem",
});
export const py3 = style({
  paddingTop:"1rem",
  paddingBottom:"1rem",
});
export const py4 = style({
  paddingTop:"1.5rem",
  paddingBottom:"1.5rem",
});
export const py5 = style({
  paddingTop:"3rem",
  paddingBottom:"3rem",
});
export const pyLg0 = style({
"@media": {
"(min-width: 992px)": {
  paddingTop:"0",
  paddingBottom:"0",
},
},
});
export const pyLg1 = style({
"@media": {
"(min-width: 992px)": {
  paddingTop:"0.25rem",
  paddingBottom:"0.25rem",
},
},
});
export const pyLg2 = style({
"@media": {
"(min-width: 992px)": {
  paddingTop:"0.5rem",
  paddingBottom:"0.5rem",
},
},
});
export const pyLg3 = style({
"@media": {
"(min-width: 992px)": {
  paddingTop:"1rem",
  paddingBottom:"1rem",
},
},
});
export const pyLg4 = style({
"@media": {
"(min-width: 992px)": {
  paddingTop:"1.5rem",
  paddingBottom:"1.5rem",
},
},
});
export const pyLg5 = style({
"@media": {
"(min-width: 992px)": {
  paddingTop:"3rem",
  paddingBottom:"3rem",
},
},
});
export const pyMd0 = style({
"@media": {
"(min-width: 768px)": {
  paddingTop:"0",
  paddingBottom:"0",
},
},
});
export const pyMd1 = style({
"@media": {
"(min-width: 768px)": {
  paddingTop:"0.25rem",
  paddingBottom:"0.25rem",
},
},
});
export const pyMd2 = style({
"@media": {
"(min-width: 768px)": {
  paddingTop:"0.5rem",
  paddingBottom:"0.5rem",
},
},
});
export const pyMd3 = style({
"@media": {
"(min-width: 768px)": {
  paddingTop:"1rem",
  paddingBottom:"1rem",
},
},
});
export const pyMd4 = style({
"@media": {
"(min-width: 768px)": {
  paddingTop:"1.5rem",
  paddingBottom:"1.5rem",
},
},
});
export const pyMd5 = style({
"@media": {
"(min-width: 768px)": {
  paddingTop:"3rem",
  paddingBottom:"3rem",
},
},
});
export const pySm0 = style({
"@media": {
"(min-width: 576px)": {
  paddingTop:"0",
  paddingBottom:"0",
},
},
});
export const pySm1 = style({
"@media": {
"(min-width: 576px)": {
  paddingTop:"0.25rem",
  paddingBottom:"0.25rem",
},
},
});
export const pySm2 = style({
"@media": {
"(min-width: 576px)": {
  paddingTop:"0.5rem",
  paddingBottom:"0.5rem",
},
},
});
export const pySm3 = style({
"@media": {
"(min-width: 576px)": {
  paddingTop:"1rem",
  paddingBottom:"1rem",
},
},
});
export const pySm4 = style({
"@media": {
"(min-width: 576px)": {
  paddingTop:"1.5rem",
  paddingBottom:"1.5rem",
},
},
});
export const pySm5 = style({
"@media": {
"(min-width: 576px)": {
  paddingTop:"3rem",
  paddingBottom:"3rem",
},
},
});
export const pyXl0 = style({
"@media": {
"(min-width: 1200px)": {
  paddingTop:"0",
  paddingBottom:"0",
},
},
});
export const pyXl1 = style({
"@media": {
"(min-width: 1200px)": {
  paddingTop:"0.25rem",
  paddingBottom:"0.25rem",
},
},
});
export const pyXl2 = style({
"@media": {
"(min-width: 1200px)": {
  paddingTop:"0.5rem",
  paddingBottom:"0.5rem",
},
},
});
export const pyXl3 = style({
"@media": {
"(min-width: 1200px)": {
  paddingTop:"1rem",
  paddingBottom:"1rem",
},
},
});
export const pyXl4 = style({
"@media": {
"(min-width: 1200px)": {
  paddingTop:"1.5rem",
  paddingBottom:"1.5rem",
},
},
});
export const pyXl5 = style({
"@media": {
"(min-width: 1200px)": {
  paddingTop:"3rem",
  paddingBottom:"3rem",
},
},
});
export const pyXxl0 = style({
"@media": {
"(min-width: 1400px)": {
  paddingTop:"0",
  paddingBottom:"0",
},
},
});
export const pyXxl1 = style({
"@media": {
"(min-width: 1400px)": {
  paddingTop:"0.25rem",
  paddingBottom:"0.25rem",
},
},
});
export const pyXxl2 = style({
"@media": {
"(min-width: 1400px)": {
  paddingTop:"0.5rem",
  paddingBottom:"0.5rem",
},
},
});
export const pyXxl3 = style({
"@media": {
"(min-width: 1400px)": {
  paddingTop:"1rem",
  paddingBottom:"1rem",
},
},
});
export const pyXxl4 = style({
"@media": {
"(min-width: 1400px)": {
  paddingTop:"1.5rem",
  paddingBottom:"1.5rem",
},
},
});
export const pyXxl5 = style({
"@media": {
"(min-width: 1400px)": {
  paddingTop:"3rem",
  paddingBottom:"3rem",
},
},
});
export const ratio = style({
  position:"relative",
  width:"100%",
"::before": {
  display:"block",
  paddingTop:"var(--bs-aspect-ratio)",
  content:"",
},
});
export const ratio16X9 = style({
"vars": {
  "--bs-aspect-ratio":"56.25%",
},
});
export const ratio1X1 = style({
"vars": {
  "--bs-aspect-ratio":"100%",
},
});
export const ratio21X9 = style({
"vars": {
  "--bs-aspect-ratio":"42.8571428571%",
},
});
export const ratio4X3 = style({
"vars": {
  "--bs-aspect-ratio":"75%",
},
});
export const rounded = style({
  borderRadius:"0.25rem",
});
export const rounded0 = style({
  borderRadius:"0",
});
export const rounded1 = style({
  borderRadius:"0.2rem",
});
export const rounded2 = style({
  borderRadius:"0.25rem",
});
export const rounded3 = style({
  borderRadius:"0.3rem",
});
export const roundedBottom = style({
  borderBottomRightRadius:"0.25rem",
  borderBottomLeftRadius:"0.25rem",
});
export const roundedCircle = style({
  borderRadius:"50%",
});
export const roundedEnd = style({
  borderTopRightRadius:"0.25rem",
  borderBottomRightRadius:"0.25rem",
});
export const roundedPill = style({
  borderRadius:"50rem",
});
export const roundedStart = style({
  borderBottomLeftRadius:"0.25rem",
  borderTopLeftRadius:"0.25rem",
});
export const roundedTop = style({
  borderTopLeftRadius:"0.25rem",
  borderTopRightRadius:"0.25rem",
});
export const row = style({
  display:"flex",
  flexWrap:"wrap",
  marginTop:"calc(-1*var(--bs-gutter-y))",
  marginRight:"calc(-0.5*var(--bs-gutter-x))",
  marginLeft:"calc(-0.5*var(--bs-gutter-x))",
"vars": {
  "--bs-gutter-x":"1.5rem",
  "--bs-gutter-y":"0",
},
});
export const shadow = style({
  boxShadow:"0 0.5rem 1rem rgba(0,0,0,0.15)",
});
export const shadowLg = style({
  boxShadow:"0 1rem 3rem rgba(0,0,0,0.175)",
});
export const shadowNone = style({
  boxShadow:"none",
});
export const shadowSm = style({
  boxShadow:"0 0.125rem 0.25rem rgba(0,0,0,0.075)",
});
export const show = style({
  color:"fff",
  backgroundColor:"0a58ca",
  borderColor:"0a53be",
":focus": {
  boxShadow:"0 0 0 0.25rem rgba(49,132,253,0.5)",
},
  color:"fff",
  backgroundColor:"565e64",
  borderColor:"51585e",
":focus": {
  boxShadow:"0 0 0 0.25rem rgba(130,138,145,0.5)",
},
  color:"fff",
  backgroundColor:"146c43",
  borderColor:"13653f",
":focus": {
  boxShadow:"0 0 0 0.25rem rgba(60,153,110,0.5)",
},
  color:"000",
  backgroundColor:"3dd5f3",
  borderColor:"25cff2",
":focus": {
  boxShadow:"0 0 0 0.25rem rgba(11,172,204,0.5)",
},
  color:"000",
  backgroundColor:"ffcd39",
  borderColor:"ffc720",
":focus": {
  boxShadow:"0 0 0 0.25rem rgba(217,164,6,0.5)",
},
  color:"fff",
  backgroundColor:"b02a37",
  borderColor:"a52834",
":focus": {
  boxShadow:"0 0 0 0.25rem rgba(225,83,97,0.5)",
},
  color:"000",
  backgroundColor:"f9fafb",
  borderColor:"f9fafb",
":focus": {
  boxShadow:"0 0 0 0.25rem rgba(211,212,213,0.5)",
},
  color:"fff",
  backgroundColor:"1a1e21",
  borderColor:"191c1f",
":focus": {
  boxShadow:"0 0 0 0.25rem rgba(66,70,73,0.5)",
},
});
export const small = style({
  fontSize:"0.875em",
});
export const spinnerBorder = style({
  display:"inline-block",
  width:"2rem",
  height:"2rem",
  verticalAlign:"-0.125em",
  border:"0.25em solid currentColor",
  borderRightColor:"transparent",
  borderRadius:"50%",
  WebkitAnimation:"0.75s linear infinite spinner-border",
  animation:"0.75s linear infinite spinner-border",
"@media": {
"(prefers-reduced-motion: reduce)": {
  WebkitAnimationDuration:"1.5s",
  animationDuration:"1.5s",
},
},
});
export const spinnerBorderSm = style({
  width:"1rem",
  height:"1rem",
  borderWidth:"0.2em",
});
export const spinnerGrow = style({
  display:"inline-block",
  width:"2rem",
  height:"2rem",
  verticalAlign:"-0.125em",
  backgroundColor:"currentColor",
  borderRadius:"50%",
  opacity:"0",
  WebkitAnimation:"0.75s linear infinite spinner-grow",
  animation:"0.75s linear infinite spinner-grow",
"@media": {
"(prefers-reduced-motion: reduce)": {
  WebkitAnimationDuration:"1.5s",
  animationDuration:"1.5s",
},
},
});
export const spinnerGrowSm = style({
  width:"1rem",
  height:"1rem",
});
export const start0 = style({
  left:"0",
});
export const start100 = style({
  left:"100%",
});
export const start50 = style({
  left:"50%",
});
export const stickyLgTop = style({
"@media": {
"(min-width: 992px)": {
  position:"-webkit-sticky",
  position:"sticky",
  top:"0",
  zIndex:"1020",
},
},
});
export const stickyMdTop = style({
"@media": {
"(min-width: 768px)": {
  position:"-webkit-sticky",
  position:"sticky",
  top:"0",
  zIndex:"1020",
},
},
});
export const stickySmTop = style({
"@media": {
"(min-width: 576px)": {
  position:"-webkit-sticky",
  position:"sticky",
  top:"0",
  zIndex:"1020",
},
},
});
export const stickyTop = style({
  position:"-webkit-sticky",
  position:"sticky",
  top:"0",
  zIndex:"1020",
});
export const stickyXlTop = style({
"@media": {
"(min-width: 1200px)": {
  position:"-webkit-sticky",
  position:"sticky",
  top:"0",
  zIndex:"1020",
},
},
});
export const stickyXxlTop = style({
"@media": {
"(min-width: 1400px)": {
  position:"-webkit-sticky",
  position:"sticky",
  top:"0",
  zIndex:"1020",
},
},
});
export const stretchedLink = style({
"::after": {
  position:"absolute",
  top:"0",
  right:"0",
  bottom:"0",
  left:"0",
  zIndex:"1",
  content:"",
},
});
export const tabContent = style({
  display:"none",
  display:"block",
});
export const table = style({
  width:"100%",
  marginBottom:"1rem",
  color:"212529",
  verticalAlign:"top",
  borderColor:"dee2e6",
"vars": {
  "--bs-table-bg":"transparent",
  "--bs-table-accent-bg":"transparent",
  "--bs-table-striped-color":"#212529",
  "--bs-table-striped-bg":"rgba 0 ,   0 ,   0 ,   0.05 )",
  "--bs-table-active-color":"#212529",
  "--bs-table-active-bg":"rgba 0 ,   0 ,   0 ,   0.1 )",
  "--bs-table-hover-color":"#212529",
  "--bs-table-hover-bg":"rgba 0 ,   0 ,   0 ,   0.075 )",
},
"selectors": {
"&:not(:first-child)": {
  borderTop:"2px solid currentColor",
},
},
});
export const tableActive = style({
  color:"var(--bs-table-active-color)",
"vars": {
  "--bs-table-accent-bg":"var --bs-table-active-bg )",
},
});
export const tableBorderless = style({
"selectors": {
"&:not(:first-child)": {
  borderTopWidth:"0",
},
},
});
export const tableDanger = style({
  color:"000",
  borderColor:"dfc2c4",
"vars": {
  "--bs-table-bg":"#f8d7da",
  "--bs-table-striped-bg":"#eccccf",
  "--bs-table-striped-color":"#000",
  "--bs-table-active-bg":"#dfc2c4",
  "--bs-table-active-color":"#000",
  "--bs-table-hover-bg":"#e5c7ca",
  "--bs-table-hover-color":"#000",
},
});
export const tableDark = style({
  color:"fff",
  borderColor:"373b3e",
"vars": {
  "--bs-table-bg":"#212529",
  "--bs-table-striped-bg":"#2c3034",
  "--bs-table-striped-color":"#fff",
  "--bs-table-active-bg":"#373b3e",
  "--bs-table-active-color":"#fff",
  "--bs-table-hover-bg":"#323539",
  "--bs-table-hover-color":"#fff",
},
});
export const tableInfo = style({
  color:"000",
  borderColor:"badce3",
"vars": {
  "--bs-table-bg":"#cff4fc",
  "--bs-table-striped-bg":"#c5e8ef",
  "--bs-table-striped-color":"#000",
  "--bs-table-active-bg":"#badce3",
  "--bs-table-active-color":"#000",
  "--bs-table-hover-bg":"#bfe2e9",
  "--bs-table-hover-color":"#000",
},
});
export const tableLight = style({
  color:"000",
  borderColor:"dfe0e1",
"vars": {
  "--bs-table-bg":"#f8f9fa",
  "--bs-table-striped-bg":"#ecedee",
  "--bs-table-striped-color":"#000",
  "--bs-table-active-bg":"#dfe0e1",
  "--bs-table-active-color":"#000",
  "--bs-table-hover-bg":"#e5e6e7",
  "--bs-table-hover-color":"#000",
},
});
export const tablePrimary = style({
  color:"000",
  borderColor:"bacbe6",
"vars": {
  "--bs-table-bg":"#cfe2ff",
  "--bs-table-striped-bg":"#c5d7f2",
  "--bs-table-striped-color":"#000",
  "--bs-table-active-bg":"#bacbe6",
  "--bs-table-active-color":"#000",
  "--bs-table-hover-bg":"#bfd1ec",
  "--bs-table-hover-color":"#000",
},
});
export const tableResponsive = style({
  overflowX:"auto",
  WebkitOverflowScrolling:"touch",
});
export const tableResponsiveLg = style({
"@media": {
"(max-width: 991.98px)": {
  overflowX:"auto",
  WebkitOverflowScrolling:"touch",
},
},
});
export const tableResponsiveMd = style({
"@media": {
"(max-width: 767.98px)": {
  overflowX:"auto",
  WebkitOverflowScrolling:"touch",
},
},
});
export const tableResponsiveSm = style({
"@media": {
"(max-width: 575.98px)": {
  overflowX:"auto",
  WebkitOverflowScrolling:"touch",
},
},
});
export const tableResponsiveXl = style({
"@media": {
"(max-width: 1199.98px)": {
  overflowX:"auto",
  WebkitOverflowScrolling:"touch",
},
},
});
export const tableResponsiveXxl = style({
"@media": {
"(max-width: 1399.98px)": {
  overflowX:"auto",
  WebkitOverflowScrolling:"touch",
},
},
});
export const tableSecondary = style({
  color:"000",
  borderColor:"cbccce",
"vars": {
  "--bs-table-bg":"#e2e3e5",
  "--bs-table-striped-bg":"#d7d8da",
  "--bs-table-striped-color":"#000",
  "--bs-table-active-bg":"#cbccce",
  "--bs-table-active-color":"#000",
  "--bs-table-hover-bg":"#d1d2d4",
  "--bs-table-hover-color":"#000",
},
});
export const tableSuccess = style({
  color:"000",
  borderColor:"bcd0c7",
"vars": {
  "--bs-table-bg":"#d1e7dd",
  "--bs-table-striped-bg":"#c7dbd2",
  "--bs-table-striped-color":"#000",
  "--bs-table-active-bg":"#bcd0c7",
  "--bs-table-active-color":"#000",
  "--bs-table-hover-bg":"#c1d6cc",
  "--bs-table-hover-color":"#000",
},
});
export const tableWarning = style({
  color:"000",
  borderColor:"e6dbb9",
"vars": {
  "--bs-table-bg":"#fff3cd",
  "--bs-table-striped-bg":"#f2e7c3",
  "--bs-table-striped-color":"#000",
  "--bs-table-active-bg":"#e6dbb9",
  "--bs-table-active-color":"#000",
  "--bs-table-hover-bg":"#ece1be",
  "--bs-table-hover-color":"#000",
},
});
export const textBlack = style({
  color:"rgba(var(--bs-black-rgb),var(--bs-text-opacity))",
"vars": {
  "--bs-text-opacity":"1",
},
});
export const textBlack50 = style({
  color:"rgba(0,0,0,0.5)",
"vars": {
  "--bs-text-opacity":"1",
},
});
export const textBody = style({
  color:"rgba(var(--bs-body-color-rgb),var(--bs-text-opacity))",
"vars": {
  "--bs-text-opacity":"1",
},
});
export const textBreak = style({
  wordWrap:"break-word",
  wordBreak:"break-word",
});
export const textCapitalize = style({
  textTransform:"capitalize",
});
export const textCenter = style({
  textAlign:"center",
});
export const textDanger = style({
  color:"rgba(var(--bs-danger-rgb),var(--bs-text-opacity))",
"vars": {
  "--bs-text-opacity":"1",
},
});
export const textDark = style({
  color:"rgba(var(--bs-dark-rgb),var(--bs-text-opacity))",
"vars": {
  "--bs-text-opacity":"1",
},
});
export const textDecorationLineThrough = style({
  textDecoration:"line-through",
});
export const textDecorationNone = style({
  textDecoration:"none",
});
export const textDecorationUnderline = style({
  textDecoration:"underline",
});
export const textEnd = style({
  textAlign:"right",
});
export const textInfo = style({
  color:"rgba(var(--bs-info-rgb),var(--bs-text-opacity))",
"vars": {
  "--bs-text-opacity":"1",
},
});
export const textLgCenter = style({
"@media": {
"(min-width: 992px)": {
  textAlign:"center",
},
},
});
export const textLgEnd = style({
"@media": {
"(min-width: 992px)": {
  textAlign:"right",
},
},
});
export const textLgStart = style({
"@media": {
"(min-width: 992px)": {
  textAlign:"left",
},
},
});
export const textLight = style({
  color:"rgba(var(--bs-light-rgb),var(--bs-text-opacity))",
"vars": {
  "--bs-text-opacity":"1",
},
});
export const textLowercase = style({
  textTransform:"lowercase",
});
export const textMdCenter = style({
"@media": {
"(min-width: 768px)": {
  textAlign:"center",
},
},
});
export const textMdEnd = style({
"@media": {
"(min-width: 768px)": {
  textAlign:"right",
},
},
});
export const textMdStart = style({
"@media": {
"(min-width: 768px)": {
  textAlign:"left",
},
},
});
export const textMuted = style({
  color:"6c757d",
"vars": {
  "--bs-text-opacity":"1",
},
});
export const textNowrap = style({
  whiteSpace:"nowrap",
});
export const textOpacity100 = style({
"vars": {
  "--bs-text-opacity":"1",
},
});
export const textOpacity25 = style({
"vars": {
  "--bs-text-opacity":"0.25",
},
});
export const textOpacity50 = style({
"vars": {
  "--bs-text-opacity":"0.5",
},
});
export const textOpacity75 = style({
"vars": {
  "--bs-text-opacity":"0.75",
},
});
export const textPrimary = style({
  color:"rgba(var(--bs-primary-rgb),var(--bs-text-opacity))",
"vars": {
  "--bs-text-opacity":"1",
},
});
export const textReset = style({
  color:"inherit",
"vars": {
  "--bs-text-opacity":"1",
},
});
export const textSecondary = style({
  color:"rgba(var(--bs-secondary-rgb),var(--bs-text-opacity))",
"vars": {
  "--bs-text-opacity":"1",
},
});
export const textSmCenter = style({
"@media": {
"(min-width: 576px)": {
  textAlign:"center",
},
},
});
export const textSmEnd = style({
"@media": {
"(min-width: 576px)": {
  textAlign:"right",
},
},
});
export const textSmStart = style({
"@media": {
"(min-width: 576px)": {
  textAlign:"left",
},
},
});
export const textStart = style({
  textAlign:"left",
});
export const textSuccess = style({
  color:"rgba(var(--bs-success-rgb),var(--bs-text-opacity))",
"vars": {
  "--bs-text-opacity":"1",
},
});
export const textTruncate = style({
  overflow:"hidden",
  textOverflow:"ellipsis",
  whiteSpace:"nowrap",
});
export const textUppercase = style({
  textTransform:"uppercase",
});
export const textWarning = style({
  color:"rgba(var(--bs-warning-rgb),var(--bs-text-opacity))",
"vars": {
  "--bs-text-opacity":"1",
},
});
export const textWhite = style({
  color:"rgba(var(--bs-white-rgb),var(--bs-text-opacity))",
"vars": {
  "--bs-text-opacity":"1",
},
});
export const textWhite50 = style({
  color:"rgba(255,255,255,0.5)",
"vars": {
  "--bs-text-opacity":"1",
},
});
export const textWrap = style({
  whiteSpace:"normal",
});
export const textXlCenter = style({
"@media": {
"(min-width: 1200px)": {
  textAlign:"center",
},
},
});
export const textXlEnd = style({
"@media": {
"(min-width: 1200px)": {
  textAlign:"right",
},
},
});
export const textXlStart = style({
"@media": {
"(min-width: 1200px)": {
  textAlign:"left",
},
},
});
export const textXxlCenter = style({
"@media": {
"(min-width: 1400px)": {
  textAlign:"center",
},
},
});
export const textXxlEnd = style({
"@media": {
"(min-width: 1400px)": {
  textAlign:"right",
},
},
});
export const textXxlStart = style({
"@media": {
"(min-width: 1400px)": {
  textAlign:"left",
},
},
});
export const toast = style({
  width:"350px",
  maxWidth:"100%",
  fontSize:"0.875rem",
  pointerEvents:"auto",
  backgroundColor:"rgba(255,255,255,0.85)",
  backgroundClip:"padding-box",
  border:"1px solid rgba(0,0,0,0.1)",
  boxShadow:"0 0.5rem 1rem rgba(0,0,0,0.15)",
  borderRadius:"0.25rem",
  opacity:"0",
"selectors": {
"&:not": {
  display:"none",
},
},
});
export const toastBody = style({
  padding:"0.75rem",
  wordWrap:"break-word",
});
export const toastContainer = style({
  width:"-webkit-max-content",
  width:"-moz-max-content",
  width:"max-content",
  maxWidth:"100%",
  pointerEvents:"none",
"selectors": {
"&:not(:last-child)": {
  marginBottom:"0.75rem",
},
},
});
export const toastHeader = style({
  display:"flex",
  alignItems:"center",
  padding:"0.5rem 0.75rem",
  color:"6c757d",
  backgroundColor:"rgba(255,255,255,0.85)",
  backgroundClip:"padding-box",
  borderBottom:"1px solid rgba(0,0,0,0.05)",
  borderTopLeftRadius:"calc(0.25rem-1px)",
  borderTopRightRadius:"calc(0.25rem-1px)",
  marginRight:"-0.375rem",
  marginLeft:"0.75rem",
});
export const tooltip = style({
  position:"absolute",
  zIndex:"1080",
  display:"block",
  margin:"0",
  fontFamily:"var(--bs-font-sans-serif)",
  fontStyle:"normal",
  fontWeight:"400",
  lineHeight:"1.5",
  textAlign:"left",
  textAlign:"start",
  textDecoration:"none",
  textShadow:"none",
  textTransform:"none",
  letterSpacing:"normal",
  wordBreak:"normal",
  wordSpacing:"normal",
  whiteSpace:"normal",
  lineBreak:"auto",
  fontSize:"0.875rem",
  wordWrap:"break-word",
  opacity:"0",
  opacity:"0.9",
  position:"absolute",
  display:"block",
  width:"0.8rem",
  height:"0.4rem",
"::before": {
  position:"absolute",
  content:"",
  borderColor:"transparent",
  borderStyle:"solid",
},
});
export const tooltipInner = style({
  maxWidth:"200px",
  padding:"0.25rem 0.5rem",
  color:"fff",
  textAlign:"center",
  backgroundColor:"000",
  borderRadius:"0.25rem",
});
export const top0 = style({
  top:"0",
});
export const top100 = style({
  top:"100%",
});
export const top50 = style({
  top:"50%",
});
export const translateMiddle = style({
  transform:"translate(-50%,-50%)",
});
export const translateMiddleX = style({
  transform:"translateX(-50%)",
});
export const translateMiddleY = style({
  transform:"translateY(-50%)",
});
export const userSelectAll = style({
  WebkitUserSelect:"all",
  MozUserSelect:"all",
  userSelect:"all",
});
export const userSelectAuto = style({
  WebkitUserSelect:"auto",
  MozUserSelect:"auto",
  userSelect:"auto",
});
export const userSelectNone = style({
  WebkitUserSelect:"none",
  MozUserSelect:"none",
  userSelect:"none",
});
export const validFeedback = style({
  display:"none",
  width:"100%",
  marginTop:"0.25rem",
  fontSize:"0.875em",
  color:"198754",
});
export const validTooltip = style({
  position:"absolute",
  top:"100%",
  zIndex:"5",
  display:"none",
  maxWidth:"100%",
  padding:"0.25rem 0.5rem",
  marginTop:"0.1rem",
  fontSize:"0.875rem",
  color:"fff",
  backgroundColor:"rgba(25,135,84,0.9)",
  borderRadius:"0.25rem",
});
export const vh100 = style({
  height:"100vh",
});
export const visible = style({
  visibility:"visible",
});
export const visuallyHidden = style({
  position:"absolute",
  width:"1px",
  height:"1px",
  padding:"0",
  margin:"-1px",
  overflow:"hidden",
  clip:"rect(0,0,0,0)",
  whiteSpace:"nowrap",
  border:"0",
});
export const visuallyHiddenFocusable = style({
"selectors": {
"&:not(:focus):not(:focus-within)": {
  position:"absolute",
  width:"1px",
  height:"1px",
  padding:"0",
  margin:"-1px",
  overflow:"hidden",
  clip:"rect(0,0,0,0)",
  whiteSpace:"nowrap",
  border:"0",
},
},
});
export const vr = style({
  display:"inline-block",
  alignSelf:"stretch",
  width:"1px",
  minHeight:"1em",
  backgroundColor:"currentColor",
  opacity:"0.25",
});
export const vstack = style({
  display:"flex",
  flex:"1 1 auto",
  flexDirection:"column",
  alignSelf:"stretch",
});
export const vw100 = style({
  width:"100vw",
});
export const w100 = style({
  width:"100%",
});
export const w25 = style({
  width:"25%",
});
export const w50 = style({
  width:"50%",
});
export const w75 = style({
  width:"75%",
});
export const wAuto = style({
  width:"auto",
});
export const wasValidated = style({
":valid": {
  display:"block",
},
":valid": {
  display:"block",
},
":valid": {
  borderColor:"198754",
  paddingRight:"calc(1.5em+0.75rem)",
  backgroundImage:"url(data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e)",
  backgroundRepeat:"no-repeat",
  backgroundPosition:"right calc(0.375em+0.1875rem) center",
  backgroundSize:"calc(0.75em+0.375rem) calc(0.75em+0.375rem)",
},
":valid:focus": {
  borderColor:"198754",
  boxShadow:"0 0 0 0.25rem rgba(25,135,84,0.25)",
},
":valid": {
  borderColor:"198754",
},
":valid:not([multiple]):not([size])": {
  paddingRight:"4.125rem",
  backgroundImage:"url(data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e) , url(data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e)",
  backgroundPosition:"right 0.75rem center , center right 2.25rem",
  backgroundSize:"16px 12px , calc(0.75em+0.375rem) calc(0.75em+0.375rem)",
},
":valid:not([multiple])[size='1']": {
  paddingRight:"4.125rem",
  backgroundImage:"url(data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e) , url(data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e)",
  backgroundPosition:"right 0.75rem center , center right 2.25rem",
  backgroundSize:"16px 12px , calc(0.75em+0.375rem) calc(0.75em+0.375rem)",
},
":valid:focus": {
  borderColor:"198754",
  boxShadow:"0 0 0 0.25rem rgba(25,135,84,0.25)",
},
":valid": {
  borderColor:"198754",
},
":valid:checked": {
  backgroundColor:"198754",
},
":valid:focus": {
  boxShadow:"0 0 0 0.25rem rgba(25,135,84,0.25)",
},
":valid": {
  color:"198754",
},
":valid": {
  zIndex:"1",
},
":valid": {
  zIndex:"1",
},
":valid:focus": {
  zIndex:"3",
},
":valid:focus": {
  zIndex:"3",
},
":invalid": {
  display:"block",
},
":invalid": {
  display:"block",
},
":invalid": {
  borderColor:"dc3545",
  paddingRight:"calc(1.5em+0.75rem)",
  backgroundImage:"url(data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e)",
  backgroundRepeat:"no-repeat",
  backgroundPosition:"right calc(0.375em+0.1875rem) center",
  backgroundSize:"calc(0.75em+0.375rem) calc(0.75em+0.375rem)",
},
":invalid:focus": {
  borderColor:"dc3545",
  boxShadow:"0 0 0 0.25rem rgba(220,53,69,0.25)",
},
":invalid": {
  borderColor:"dc3545",
},
":invalid:not([multiple]):not([size])": {
  paddingRight:"4.125rem",
  backgroundImage:"url(data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e) , url(data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e)",
  backgroundPosition:"right 0.75rem center , center right 2.25rem",
  backgroundSize:"16px 12px , calc(0.75em+0.375rem) calc(0.75em+0.375rem)",
},
":invalid:not([multiple])[size='1']": {
  paddingRight:"4.125rem",
  backgroundImage:"url(data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e) , url(data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e)",
  backgroundPosition:"right 0.75rem center , center right 2.25rem",
  backgroundSize:"16px 12px , calc(0.75em+0.375rem) calc(0.75em+0.375rem)",
},
":invalid:focus": {
  borderColor:"dc3545",
  boxShadow:"0 0 0 0.25rem rgba(220,53,69,0.25)",
},
":invalid": {
  borderColor:"dc3545",
},
":invalid:checked": {
  backgroundColor:"dc3545",
},
":invalid:focus": {
  boxShadow:"0 0 0 0.25rem rgba(220,53,69,0.25)",
},
":invalid": {
  color:"dc3545",
},
":invalid": {
  zIndex:"2",
},
":invalid": {
  zIndex:"2",
},
":invalid:focus": {
  zIndex:"3",
},
":invalid:focus": {
  zIndex:"3",
},
});
