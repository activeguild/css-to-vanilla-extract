import { globalKeyframes, globalStyle, style } from "@vanilla-extract/css";

globalKeyframes("progress-bar-stripes", {
  from: {
    backgroundPosition: "1rem 0",
  },
  to: {
    backgroundPosition: "0 0",
  },
});
globalKeyframes("progress-bar-stripes", {
  from: {
    backgroundPosition: "1rem 0",
  },
  to: {
    backgroundPosition: "0 0",
  },
});
globalKeyframes("spinner-border", {
  to: {
    WebkitTransform: "rotate(360deg)",
    transform: "rotate(360deg)",
  },
});
globalKeyframes("spinner-border", {
  to: {
    WebkitTransform: "rotate(360deg)",
    transform: "rotate(360deg)",
  },
});
globalKeyframes("spinner-grow", {
  "0%": {
    WebkitTransform: "scale(0)",
    transform: "scale(0)",
  },
  "50%": {
    WebkitTransform: "none",
    opacity: "1",
    transform: "none",
  },
});
globalKeyframes("spinner-grow", {
  "0%": {
    WebkitTransform: "scale(0)",
    transform: "scale(0)",
  },
  "50%": {
    WebkitTransform: "none",
    opacity: "1",
    transform: "none",
  },
});
globalStyle("*", {
  boxSizing: "border-box",
  "@media": {
    print: {
      boxShadow: "none",
      textShadow: "none",
    },
  },
});
globalStyle("*::after", {
  boxSizing: "border-box",
  "@media": {
    print: {
      boxShadow: "none",
      textShadow: "none",
    },
  },
});
globalStyle("*::before", {
  boxSizing: "border-box",
  "@media": {
    print: {
      boxShadow: "none",
      textShadow: "none",
    },
  },
});
globalStyle("::-webkit-file-upload-button", {
  WebkitAppearance: "button",
  font: "inherit",
});
globalStyle(":root", {
  vars: {
    "--blue": "#007bff",
    "--indigo": "#6610f2",
    "--purple": "#6f42c1",
    "--pink": "#e83e8c",
    "--red": "#dc3545",
    "--orange": "#fd7e14",
    "--yellow": "#ffc107",
    "--green": "#28a745",
    "--teal": "#20c997",
    "--cyan": "#17a2b8",
    "--white": "#fff",
    "--gray": "#6c757d",
    "--gray-dark": "#343a40",
    "--primary": "#007bff",
    "--secondary": "#6c757d",
    "--success": "#28a745",
    "--info": "#17a2b8",
    "--warning": "#ffc107",
    "--danger": "#dc3545",
    "--light": "#f8f9fa",
    "--dark": "#343a40",
    "--breakpoint-xs": "0",
    "--breakpoint-sm": "576px",
    "--breakpoint-md": "768px",
    "--breakpoint-lg": "992px",
    "--breakpoint-xl": "1200px",
    "--font-family-sans-serif":
      "-apple-system ,   BlinkMacSystemFont ,   Segoe UI ,   Roboto ,   Helvetica Neue ,   Arial ,   Noto Sans ,   Liberation Sans ,   sans-serif ,   Apple Color Emoji ,   Segoe UI Emoji ,   Segoe UI Symbol ,   Noto Color Emoji",
    "--font-family-monospace":
      "SFMono-Regular ,   Menlo ,   Monaco ,   Consolas ,   Liberation Mono ,   Courier New ,   monospace",
  },
});
globalStyle("[hidden]", {
  display: "none",
});
globalStyle("[role='button']", {
  cursor: "pointer",
});
globalStyle("[tabindex='-1']:focus:not(:focus-visible)", {
  outline: "0",
});
globalStyle("[type='button']", {
  WebkitAppearance: "button",
});
globalStyle("[type='button']::-moz-focus-inner", {
  borderStyle: "none",
  padding: "0",
});
globalStyle("[type='button']:not(:disabled)", {
  cursor: "pointer",
});
globalStyle("[type='number']::-webkit-inner-spin-button", {
  height: "auto",
});
globalStyle("[type='number']::-webkit-outer-spin-button", {
  height: "auto",
});
globalStyle("[type='reset']", {
  WebkitAppearance: "button",
});
globalStyle("[type='reset']::-moz-focus-inner", {
  borderStyle: "none",
  padding: "0",
});
globalStyle("[type='reset']:not(:disabled)", {
  cursor: "pointer",
});
globalStyle("[type='search']", {
  WebkitAppearance: "none",
  outlineOffset: "-2px",
});
globalStyle("[type='search']::-webkit-search-decoration", {
  WebkitAppearance: "none",
});
globalStyle("[type='submit']", {
  WebkitAppearance: "button",
});
globalStyle("[type='submit']::-moz-focus-inner", {
  borderStyle: "none",
  padding: "0",
});
globalStyle("[type='submit']:not(:disabled)", {
  cursor: "pointer",
});
globalStyle("a", {
  backgroundColor: "transparent",
  boxShadow: "0 0 0 0.2rem rgba(52,58,64,0.5)",
  color: "007bff",
  outline: "0",
  pointerEvents: "none",
  textDecoration: "none",
});
globalStyle("a:focus", {
  backgroundColor: "1d2124",
  boxShadow: "0 0 0 0.2rem rgba(52,58,64,0.5)",
  color: "121416",
  outline: "0",
  textDecoration: "none",
});
globalStyle("a:hover", {
  backgroundColor: "1d2124",
  color: "121416",
  textDecoration: "none",
});
globalStyle("a:not", {
  "@media": {
    print: {
      textDecoration: "underline",
    },
  },
});
globalStyle("a:not([href]):not([class])", {
  color: "inherit",
  textDecoration: "none",
});
globalStyle("a:not([href]):not([class]):hover", {
  color: "inherit",
  textDecoration: "none",
});
globalStyle("a>code", {
  color: "inherit",
});
globalStyle("abbr[data-original-title]", {
  WebkitTextDecoration: "underline dotted",
  WebkitTextDecorationSkipInk: "none",
  borderBottom: "0",
  cursor: "help",
  textDecoration: "underline dotted",
  textDecorationSkipInk: "none",
});
globalStyle("abbr[title]", {
  WebkitTextDecoration: "underline dotted",
  WebkitTextDecorationSkipInk: "none",
  borderBottom: "0",
  cursor: "help",
  textDecoration: "underline dotted",
  textDecorationSkipInk: "none",
});
globalStyle("abbr[title]::after", {
  "@media": {
    print: {
      content: " ( attr(title) )",
    },
  },
});
globalStyle("address", {
  fontStyle: "normal",
  lineHeight: "inherit",
  marginBottom: "1rem",
});
globalStyle("alertDangerhr", {
  borderTopColor: "f1b0b7",
});
globalStyle("alertDarkhr", {
  borderTopColor: "b9bbbe",
});
globalStyle("alertInfohr", {
  borderTopColor: "abdde5",
});
globalStyle("alertLighthr", {
  borderTopColor: "ececf6",
});
globalStyle("alertPrimaryhr", {
  borderTopColor: "9fcdff",
});
globalStyle("alertSecondaryhr", {
  borderTopColor: "c8cbcf",
});
globalStyle("alertSuccesshr", {
  borderTopColor: "b1dfbb",
});
globalStyle("alertWarninghr", {
  borderTopColor: "ffe8a1",
});
globalStyle("article", {
  display: "block",
});
globalStyle("aside", {
  display: "block",
});
globalStyle("b", {
  fontWeight: "bolder",
});
globalStyle("blockquote", {
  margin: "0 0 1rem",
  "@media": {
    print: {
      border: "1px solid adb5bd",
      pageBreakInside: "avoid",
    },
  },
});
globalStyle("body", {
  backgroundColor: "fff",
  color: "212529",
  fontFamily:
    "-apple-system , BlinkMacSystemFont , Segoe UI , Roboto , Helvetica Neue , Arial , Noto Sans , Liberation Sans , sans-serif , Apple Color Emoji , Segoe UI Emoji , Segoe UI Symbol , Noto Color Emoji",
  fontSize: "1rem",
  fontWeight: "400",
  lineHeight: "1.5",
  margin: "0",
  textAlign: "left",
  "@media": {
    print: {
      minWidth: "992px",
    },
  },
});
globalStyle("btnGroupToggleinput[type='checkbox']", {
  clip: "rect(0,0,0,0)",
  pointerEvents: "none",
  position: "absolute",
});
globalStyle("btnGroupToggleinput[type='radio']", {
  clip: "rect(0,0,0,0)",
  pointerEvents: "none",
  position: "absolute",
});
globalStyle("button", {
  WebkitAppearance: "button",
  backgroundColor: "transparent",
  border: "0",
  borderRadius: "0",
  fontFamily: "inherit",
  fontSize: "inherit",
  lineHeight: "inherit",
  margin: "0",
  overflow: "visible",
  padding: "0",
  textTransform: "none",
});
globalStyle("button::-moz-focus-inner", {
  borderStyle: "none",
  padding: "0",
});
globalStyle("button:focus", {
  backgroundColor: "1d2124",
});
globalStyle("button:focus:not(:focus-visible)", {
  outline: "0",
});
globalStyle("button:hover", {
  backgroundColor: "1d2124",
});
globalStyle("button:not(:disabled)", {
  cursor: "pointer",
});
globalStyle("caption", {
  captionSide: "bottom",
  color: "6c757d",
  paddingBottom: "0.75rem",
  paddingTop: "0.75rem",
  textAlign: "left",
});
globalStyle("cardhr", {
  marginLeft: "0",
  marginRight: "0",
});
globalStyle("carouselIndicatorsli", {
  backgroundClip: "padding-box",
  backgroundColor: "fff",
  borderBottom: "10px solid transparent",
  borderTop: "10px solid transparent",
  boxSizing: "content-box",
  cursor: "pointer",
  flex: "0 1 auto",
  height: "3px",
  marginLeft: "3px",
  marginRight: "3px",
  msFlex: "0 1 auto",
  opacity: "0.5",
  textIndent: "-999px",
  transition: "opacity 0.6s ease",
  width: "30px",
  "@media": {
    "(prefers-reduced-motion: reduce)": {
      transition: "none",
    },
  },
});
globalStyle("code", {
  color: "e83e8c",
  fontFamily:
    "SFMono-Regular , Menlo , Monaco , Consolas , Liberation Mono , Courier New , monospace",
  fontSize: "87.5%",
  wordWrap: "break-word",
});
globalStyle("dd", {
  marginBottom: "0.5rem",
  marginLeft: "0",
});
globalStyle("dl", {
  marginBottom: "1rem",
  marginTop: "0",
});
globalStyle("dt", {
  fontWeight: "700",
});
globalStyle("embedResponsiveembed", {
  border: "0",
  bottom: "0",
  height: "100%",
  left: "0",
  position: "absolute",
  top: "0",
  width: "100%",
});
globalStyle("embedResponsiveiframe", {
  border: "0",
  bottom: "0",
  height: "100%",
  left: "0",
  position: "absolute",
  top: "0",
  width: "100%",
});
globalStyle("embedResponsiveobject", {
  border: "0",
  bottom: "0",
  height: "100%",
  left: "0",
  position: "absolute",
  top: "0",
  width: "100%",
});
globalStyle("embedResponsivevideo", {
  border: "0",
  bottom: "0",
  height: "100%",
  left: "0",
  position: "absolute",
  top: "0",
  width: "100%",
});
globalStyle("fieldset", {
  border: "0",
  margin: "0",
  minWidth: "0",
  padding: "0",
});
globalStyle("fieldset:disabled a", {
  pointerEvents: "none",
});
globalStyle("figcaption", {
  display: "block",
});
globalStyle("figure", {
  display: "block",
  margin: "0 0 1rem",
});
globalStyle("footer", {
  display: "block",
});
globalStyle("formInlinelabel", {
  "@media": {
    "(min-width: 576px)": {
      alignItems: "center",
      display: "flex",
      justifyContent: "center",
      marginBottom: "0",
      msFlexAlign: "center",
      msFlexPack: "center",
    },
  },
});
globalStyle("h1", {
  fontSize: "2.5rem",
  fontWeight: "500",
  lineHeight: "1.2",
  marginBottom: "0.5rem",
  marginTop: "0",
});
globalStyle("h2", {
  fontSize: "2rem",
  fontWeight: "500",
  lineHeight: "1.2",
  marginBottom: "0.5rem",
  marginTop: "0",
  "@media": {
    print: {
      orphans: "3",
      pageBreakAfter: "avoid",
      widows: "3",
    },
  },
});
globalStyle("h3", {
  fontSize: "1.75rem",
  fontWeight: "500",
  lineHeight: "1.2",
  marginBottom: "0.5rem",
  marginTop: "0",
  "@media": {
    print: {
      orphans: "3",
      pageBreakAfter: "avoid",
      widows: "3",
    },
  },
});
globalStyle("h4", {
  fontSize: "1.5rem",
  fontWeight: "500",
  lineHeight: "1.2",
  marginBottom: "0.5rem",
  marginTop: "0",
});
globalStyle("h5", {
  fontSize: "1.25rem",
  fontWeight: "500",
  lineHeight: "1.2",
  marginBottom: "0.5rem",
  marginTop: "0",
});
globalStyle("h6", {
  fontSize: "1rem",
  fontWeight: "500",
  lineHeight: "1.2",
  marginBottom: "0.5rem",
  marginTop: "0",
});
globalStyle("header", {
  display: "block",
});
globalStyle("hgroup", {
  display: "block",
});
globalStyle("hr", {
  border: "0",
  borderTop: "1px solid rgba(0,0,0,0.1)",
  boxSizing: "content-box",
  height: "0",
  marginBottom: "1rem",
  marginTop: "1rem",
  overflow: "visible",
});
globalStyle("html", {
  WebkitTapHighlightColor: "rgba(0,0,0,0)",
  WebkitTextSizeAdjust: "100%",
  fontFamily: "sans-serif",
  lineHeight: "1.15",
});
globalStyle("img", {
  borderStyle: "none",
  verticalAlign: "middle",
  "@media": {
    print: {
      pageBreakInside: "avoid",
    },
  },
});
globalStyle("input", {
  fontFamily: "inherit",
  fontSize: "inherit",
  lineHeight: "inherit",
  margin: "0",
  overflow: "visible",
});
globalStyle("inputGroupTextinput[type='checkbox']", {
  marginTop: "0",
});
globalStyle("inputGroupTextinput[type='radio']", {
  marginTop: "0",
});
globalStyle("input[type='button']", {
  width: "100%",
});
globalStyle("input[type='checkbox']", {
  boxSizing: "border-box",
  padding: "0",
});
globalStyle("input[type='date']", {
  MozAppearance: "none",
  WebkitAppearance: "none",
  appearance: "none",
});
globalStyle("input[type='datetime-local']", {
  MozAppearance: "none",
  WebkitAppearance: "none",
  appearance: "none",
});
globalStyle("input[type='month']", {
  MozAppearance: "none",
  WebkitAppearance: "none",
  appearance: "none",
});
globalStyle("input[type='radio']", {
  boxSizing: "border-box",
  padding: "0",
});
globalStyle("input[type='reset']", {
  width: "100%",
});
globalStyle("input[type='submit']", {
  width: "100%",
});
globalStyle("input[type='time']", {
  MozAppearance: "none",
  WebkitAppearance: "none",
  appearance: "none",
});
globalStyle("kbd", {
  backgroundColor: "212529",
  borderRadius: "0.2rem",
  color: "fff",
  fontFamily:
    "SFMono-Regular , Menlo , Monaco , Consolas , Liberation Mono , Courier New , monospace",
  fontSize: "87.5%",
  padding: "0.2rem 0.4rem",
});
globalStyle("kbd kbd", {
  fontSize: "100%",
  fontWeight: "700",
  padding: "0",
});
globalStyle("label", {
  display: "inline-block",
  marginBottom: "0.5rem",
});
globalStyle("legend", {
  color: "inherit",
  display: "block",
  fontSize: "1.5rem",
  lineHeight: "inherit",
  marginBottom: "0.5rem",
  maxWidth: "100%",
  padding: "0",
  whiteSpace: "normal",
  width: "100%",
});
globalStyle("main", {
  display: "block",
});
globalStyle("mark", {
  backgroundColor: "fcf8e3",
  padding: "0.2em",
});
globalStyle("modalFooter*", {
  margin: "0.25rem",
});
globalStyle("nav", {
  display: "block",
});
globalStyle("navbarDarka", {
  color: "fff",
});
globalStyle("navbarDarka:focus", {
  color: "fff",
});
globalStyle("navbarDarka:hover", {
  color: "fff",
});
globalStyle("navbarLighta", {
  color: "rgba(0,0,0,0.9)",
});
globalStyle("navbarLighta:focus", {
  color: "rgba(0,0,0,0.9)",
});
globalStyle("navbarLighta:hover", {
  color: "rgba(0,0,0,0.9)",
});
globalStyle("ol", {
  marginBottom: "1rem",
  marginTop: "0",
});
globalStyle("ol ol", {
  marginBottom: "0",
});
globalStyle("ol ul", {
  marginBottom: "0",
});
globalStyle("optgroup", {
  fontFamily: "inherit",
  fontSize: "inherit",
  lineHeight: "inherit",
  margin: "0",
});
globalStyle("output", {
  display: "inline-block",
});
globalStyle("p", {
  marginBottom: "1rem",
  marginTop: "0",
  "@media": {
    print: {
      orphans: "3",
      widows: "3",
    },
  },
});
globalStyle("pre", {
  color: "212529",
  display: "block",
  fontFamily:
    "SFMono-Regular , Menlo , Monaco , Consolas , Liberation Mono , Courier New , monospace",
  fontSize: "87.5%",
  marginBottom: "1rem",
  marginTop: "0",
  msOverflowStyle: "scrollbar",
  overflow: "auto",
  "@media": {
    print: {
      border: "1px solid adb5bd",
      pageBreakInside: "avoid",
      whiteSpace: "pre-wrap",
    },
  },
});
globalStyle("pre code", {
  color: "inherit",
  fontSize: "inherit",
  wordBreak: "normal",
});
globalStyle("progress", {
  verticalAlign: "baseline",
});
globalStyle("rowCols1*", {
  flex: "0 0 100%",
  maxWidth: "100%",
  msFlex: "0 0 100%",
});
globalStyle("rowCols2*", {
  flex: "0 0 50%",
  maxWidth: "50%",
  msFlex: "0 0 50%",
});
globalStyle("rowCols3*", {
  flex: "0 0 33.333333%",
  maxWidth: "33.333333%",
  msFlex: "0 0 33.333333%",
});
globalStyle("rowCols4*", {
  flex: "0 0 25%",
  maxWidth: "25%",
  msFlex: "0 0 25%",
});
globalStyle("rowCols5*", {
  flex: "0 0 20%",
  maxWidth: "20%",
  msFlex: "0 0 20%",
});
globalStyle("rowCols6*", {
  flex: "0 0 16.666667%",
  maxWidth: "16.666667%",
  msFlex: "0 0 16.666667%",
});
globalStyle("rowColsLg1*", {
  "@media": {
    "(min-width: 992px)": {
      flex: "0 0 100%",
      maxWidth: "100%",
      msFlex: "0 0 100%",
    },
  },
});
globalStyle("rowColsLg2*", {
  "@media": {
    "(min-width: 992px)": {
      flex: "0 0 50%",
      maxWidth: "50%",
      msFlex: "0 0 50%",
    },
  },
});
globalStyle("rowColsLg3*", {
  "@media": {
    "(min-width: 992px)": {
      flex: "0 0 33.333333%",
      maxWidth: "33.333333%",
      msFlex: "0 0 33.333333%",
    },
  },
});
globalStyle("rowColsLg4*", {
  "@media": {
    "(min-width: 992px)": {
      flex: "0 0 25%",
      maxWidth: "25%",
      msFlex: "0 0 25%",
    },
  },
});
globalStyle("rowColsLg5*", {
  "@media": {
    "(min-width: 992px)": {
      flex: "0 0 20%",
      maxWidth: "20%",
      msFlex: "0 0 20%",
    },
  },
});
globalStyle("rowColsLg6*", {
  "@media": {
    "(min-width: 992px)": {
      flex: "0 0 16.666667%",
      maxWidth: "16.666667%",
      msFlex: "0 0 16.666667%",
    },
  },
});
globalStyle("rowColsMd1*", {
  "@media": {
    "(min-width: 768px)": {
      flex: "0 0 100%",
      maxWidth: "100%",
      msFlex: "0 0 100%",
    },
  },
});
globalStyle("rowColsMd2*", {
  "@media": {
    "(min-width: 768px)": {
      flex: "0 0 50%",
      maxWidth: "50%",
      msFlex: "0 0 50%",
    },
  },
});
globalStyle("rowColsMd3*", {
  "@media": {
    "(min-width: 768px)": {
      flex: "0 0 33.333333%",
      maxWidth: "33.333333%",
      msFlex: "0 0 33.333333%",
    },
  },
});
globalStyle("rowColsMd4*", {
  "@media": {
    "(min-width: 768px)": {
      flex: "0 0 25%",
      maxWidth: "25%",
      msFlex: "0 0 25%",
    },
  },
});
globalStyle("rowColsMd5*", {
  "@media": {
    "(min-width: 768px)": {
      flex: "0 0 20%",
      maxWidth: "20%",
      msFlex: "0 0 20%",
    },
  },
});
globalStyle("rowColsMd6*", {
  "@media": {
    "(min-width: 768px)": {
      flex: "0 0 16.666667%",
      maxWidth: "16.666667%",
      msFlex: "0 0 16.666667%",
    },
  },
});
globalStyle("rowColsSm1*", {
  "@media": {
    "(min-width: 576px)": {
      flex: "0 0 100%",
      maxWidth: "100%",
      msFlex: "0 0 100%",
    },
  },
});
globalStyle("rowColsSm2*", {
  "@media": {
    "(min-width: 576px)": {
      flex: "0 0 50%",
      maxWidth: "50%",
      msFlex: "0 0 50%",
    },
  },
});
globalStyle("rowColsSm3*", {
  "@media": {
    "(min-width: 576px)": {
      flex: "0 0 33.333333%",
      maxWidth: "33.333333%",
      msFlex: "0 0 33.333333%",
    },
  },
});
globalStyle("rowColsSm4*", {
  "@media": {
    "(min-width: 576px)": {
      flex: "0 0 25%",
      maxWidth: "25%",
      msFlex: "0 0 25%",
    },
  },
});
globalStyle("rowColsSm5*", {
  "@media": {
    "(min-width: 576px)": {
      flex: "0 0 20%",
      maxWidth: "20%",
      msFlex: "0 0 20%",
    },
  },
});
globalStyle("rowColsSm6*", {
  "@media": {
    "(min-width: 576px)": {
      flex: "0 0 16.666667%",
      maxWidth: "16.666667%",
      msFlex: "0 0 16.666667%",
    },
  },
});
globalStyle("rowColsXl1*", {
  "@media": {
    "(min-width: 1200px)": {
      flex: "0 0 100%",
      maxWidth: "100%",
      msFlex: "0 0 100%",
    },
  },
});
globalStyle("rowColsXl2*", {
  "@media": {
    "(min-width: 1200px)": {
      flex: "0 0 50%",
      maxWidth: "50%",
      msFlex: "0 0 50%",
    },
  },
});
globalStyle("rowColsXl3*", {
  "@media": {
    "(min-width: 1200px)": {
      flex: "0 0 33.333333%",
      maxWidth: "33.333333%",
      msFlex: "0 0 33.333333%",
    },
  },
});
globalStyle("rowColsXl4*", {
  "@media": {
    "(min-width: 1200px)": {
      flex: "0 0 25%",
      maxWidth: "25%",
      msFlex: "0 0 25%",
    },
  },
});
globalStyle("rowColsXl5*", {
  "@media": {
    "(min-width: 1200px)": {
      flex: "0 0 20%",
      maxWidth: "20%",
      msFlex: "0 0 20%",
    },
  },
});
globalStyle("rowColsXl6*", {
  "@media": {
    "(min-width: 1200px)": {
      flex: "0 0 16.666667%",
      maxWidth: "16.666667%",
      msFlex: "0 0 16.666667%",
    },
  },
});
globalStyle("samp", {
  fontFamily:
    "SFMono-Regular , Menlo , Monaco , Consolas , Liberation Mono , Courier New , monospace",
  fontSize: "1em",
});
globalStyle("section", {
  display: "block",
});
globalStyle("select", {
  backgroundPosition: "right 1.5rem center",
  fontFamily: "inherit",
  fontSize: "inherit",
  lineHeight: "inherit",
  margin: "0",
  paddingRight: "3rem",
  textTransform: "none",
  wordWrap: "normal",
});
globalStyle("select:-moz-focusring", {
  color: "transparent",
  textShadow: "0 0 0 495057",
});
globalStyle("select:focus::-ms-value", {
  backgroundColor: "fff",
  color: "495057",
});
globalStyle("select[multiple]", {
  height: "auto",
});
globalStyle("select[size]", {
  height: "auto",
});
globalStyle("small", {
  fontSize: "80%",
  fontWeight: "400",
});
globalStyle("strong", {
  fontWeight: "bolder",
});
globalStyle("sub", {
  bottom: "-0.25em",
  fontSize: "75%",
  lineHeight: "0",
  position: "relative",
  verticalAlign: "baseline",
});
globalStyle("summary", {
  cursor: "pointer",
  display: "list-item",
});
globalStyle("sup", {
  fontSize: "75%",
  lineHeight: "0",
  position: "relative",
  top: "-0.5em",
  verticalAlign: "baseline",
});
globalStyle("svg", {
  overflow: "hidden",
  verticalAlign: "middle",
});
globalStyle("table", {
  borderCollapse: "collapse",
});
globalStyle("tableActivetd", {
  backgroundColor: "rgba(0,0,0,0.075)",
});
globalStyle("tableActiveth", {
  backgroundColor: "rgba(0,0,0,0.075)",
});
globalStyle("tableBorderedtd", {
  border: "1px solid dee2e6",
  "@media": {
    print: {
      border: "1px solid dee2e6",
    },
  },
});
globalStyle("tableBorderedth", {
  border: "1px solid dee2e6",
  "@media": {
    print: {
      border: "1px solid dee2e6",
    },
  },
});
globalStyle("tableBorderedthead td", {
  borderBottomWidth: "2px",
});
globalStyle("tableBorderedthead th", {
  borderBottomWidth: "2px",
});
globalStyle("tableBorderlesstbody+tbody", {
  border: "0",
});
globalStyle("tableBorderlesstd", {
  border: "0",
});
globalStyle("tableBorderlessth", {
  border: "0",
});
globalStyle("tableBorderlessthead th", {
  border: "0",
});
globalStyle("tableDangertbody+tbody", {
  borderColor: "ed969e",
});
globalStyle("tableDangertd", {
  backgroundColor: "f5c6cb",
  borderColor: "ed969e",
});
globalStyle("tableDangerth", {
  backgroundColor: "f5c6cb",
  borderColor: "ed969e",
});
globalStyle("tableDangerthead th", {
  borderColor: "ed969e",
});
globalStyle("tableDarktbody tr:hover", {
  backgroundColor: "rgba(255,255,255,0.075)",
  color: "fff",
});
globalStyle("tableDarktbody tr:nth-of-type(odd)", {
  backgroundColor: "rgba(255,255,255,0.05)",
});
globalStyle("tableDarktbody+tbody", {
  borderColor: "95999c",
  "@media": {
    print: {
      borderColor: "dee2e6",
    },
  },
});
globalStyle("tableDarktd", {
  backgroundColor: "c6c8ca",
  borderColor: "454d55",
  "@media": {
    print: {
      borderColor: "dee2e6",
    },
  },
});
globalStyle("tableDarkth", {
  backgroundColor: "c6c8ca",
  borderColor: "454d55",
  "@media": {
    print: {
      borderColor: "dee2e6",
    },
  },
});
globalStyle("tableDarkthead th", {
  borderColor: "454d55",
  "@media": {
    print: {
      borderColor: "dee2e6",
    },
  },
});
globalStyle("tableHovertbody tr:hover", {
  backgroundColor: "rgba(0,0,0,0.075)",
  color: "212529",
});
globalStyle("tableHovertd", {
  ":hover": {
    backgroundColor: "rgba(0,0,0,0.075)",
  },
});
globalStyle("tableHoverth", {
  ":hover": {
    backgroundColor: "rgba(0,0,0,0.075)",
  },
});
globalStyle("tableInfotbody+tbody", {
  borderColor: "86cfda",
});
globalStyle("tableInfotd", {
  backgroundColor: "bee5eb",
  borderColor: "86cfda",
});
globalStyle("tableInfoth", {
  backgroundColor: "bee5eb",
  borderColor: "86cfda",
});
globalStyle("tableInfothead th", {
  borderColor: "86cfda",
});
globalStyle("tableLighttbody+tbody", {
  borderColor: "fbfcfc",
});
globalStyle("tableLighttd", {
  backgroundColor: "fdfdfe",
  borderColor: "fbfcfc",
});
globalStyle("tableLightth", {
  backgroundColor: "fdfdfe",
  borderColor: "fbfcfc",
});
globalStyle("tableLightthead th", {
  borderColor: "fbfcfc",
});
globalStyle("tablePrimarytbody+tbody", {
  borderColor: "7abaff",
});
globalStyle("tablePrimarytd", {
  backgroundColor: "b8daff",
  borderColor: "7abaff",
});
globalStyle("tablePrimaryth", {
  backgroundColor: "b8daff",
  borderColor: "7abaff",
});
globalStyle("tablePrimarythead th", {
  borderColor: "7abaff",
});
globalStyle("tableSecondarytbody+tbody", {
  borderColor: "b3b7bb",
});
globalStyle("tableSecondarytd", {
  backgroundColor: "d6d8db",
  borderColor: "b3b7bb",
});
globalStyle("tableSecondaryth", {
  backgroundColor: "d6d8db",
  borderColor: "b3b7bb",
});
globalStyle("tableSecondarythead th", {
  borderColor: "b3b7bb",
});
globalStyle("tableSmtd", {
  padding: "0.3rem",
});
globalStyle("tableSmth", {
  padding: "0.3rem",
});
globalStyle("tableStripedtbody tr:nth-of-type(odd)", {
  backgroundColor: "rgba(0,0,0,0.05)",
});
globalStyle("tableSuccesstbody+tbody", {
  borderColor: "8fd19e",
});
globalStyle("tableSuccesstd", {
  backgroundColor: "c3e6cb",
  borderColor: "8fd19e",
});
globalStyle("tableSuccessth", {
  backgroundColor: "c3e6cb",
  borderColor: "8fd19e",
});
globalStyle("tableSuccessthead th", {
  borderColor: "8fd19e",
});
globalStyle("tableWarningtbody+tbody", {
  borderColor: "ffdf7e",
});
globalStyle("tableWarningtd", {
  backgroundColor: "ffeeba",
  borderColor: "ffdf7e",
});
globalStyle("tableWarningth", {
  backgroundColor: "ffeeba",
  borderColor: "ffdf7e",
});
globalStyle("tableWarningthead th", {
  borderColor: "ffdf7e",
});
globalStyle("tabletbody+tbody", {
  borderTop: "2px solid dee2e6",
});
globalStyle("tabletd", {
  borderTop: "1px solid dee2e6",
  padding: "0.75rem",
  verticalAlign: "top",
  "@media": {
    print: {
      backgroundColor: "fff",
    },
  },
});
globalStyle("tableth", {
  backgroundColor: "e9ecef",
  borderColor: "dee2e6",
  borderTop: "1px solid dee2e6",
  color: "495057",
  padding: "0.75rem",
  verticalAlign: "top",
  "@media": {
    print: {
      backgroundColor: "fff",
      borderColor: "dee2e6",
      color: "inherit",
    },
  },
});
globalStyle("tablethead th", {
  borderBottom: "2px solid dee2e6",
  verticalAlign: "bottom",
});
globalStyle("template", {
  display: "none",
});
globalStyle("textarea", {
  backgroundPosition:
    "top calc(0.375em+0.1875rem) right calc(0.375em+0.1875rem)",
  fontFamily: "inherit",
  fontSize: "inherit",
  height: "auto",
  lineHeight: "inherit",
  margin: "0",
  overflow: "auto",
  paddingRight: "calc(1.5em+0.75rem)",
  resize: "vertical",
});
globalStyle("th", {
  textAlign: "-webkit-match-parent",
});
globalStyle("tr", {
  "@media": {
    print: {
      pageBreakInside: "avoid",
    },
  },
});
globalStyle("ul", {
  marginBottom: "1rem",
  marginTop: "0",
});
globalStyle("ul ol", {
  marginBottom: "0",
});
globalStyle("ul ul", {
  marginBottom: "0",
});
globalStyle("wasValidatedselect:invalid", {
  backgroundPosition: "right 1.5rem center",
  paddingRight: "3rem",
});
globalStyle("wasValidatedselect:valid", {
  backgroundPosition: "right 1.5rem center",
  paddingRight: "3rem",
});
globalStyle("wasValidatedtextarea:invalid", {
  backgroundPosition:
    "top calc(0.375em+0.1875rem) right calc(0.375em+0.1875rem)",
  paddingRight: "calc(1.5em+0.75rem)",
});
globalStyle("wasValidatedtextarea:valid", {
  backgroundPosition:
    "top calc(0.375em+0.1875rem) right calc(0.375em+0.1875rem)",
  paddingRight: "calc(1.5em+0.75rem)",
});
export const accordion = style({
  borderRadius: "0",
  marginBottom: "-1px",
  overflow: "hidden",
  overflowAnchor: "none",
  selectors: {
    "&:not(:first-of-type)": {
      borderTopLeftRadius: "0",
      borderTopRightRadius: "0",
    },
    "&:not(:last-of-type)": {
      borderBottom: "0",
      borderBottomLeftRadius: "0",
      borderBottomRightRadius: "0",
    },
  },
});
export const active = style({
  WebkitTransform: "translateX(-100%)",
  transform: "translateX(-100%)",
});
export const alert = style({
  border: "1px solid transparent",
  borderRadius: "0.25rem",
  marginBottom: "1rem",
  padding: "0.75rem 1.25rem",
  position: "relative",
});
export const alertDanger = style({
  backgroundColor: "f8d7da",
  borderColor: "f5c6cb",
  color: "491217",
});
export const alertDark = style({
  backgroundColor: "d6d8d9",
  borderColor: "c6c8ca",
  color: "040505",
});
export const alertDismissible = style({
  color: "inherit",
  padding: "0.75rem 1.25rem",
  paddingRight: "4rem",
  position: "absolute",
  right: "0",
  top: "0",
  zIndex: "2",
});
export const alertHeading = style({
  color: "inherit",
});
export const alertInfo = style({
  backgroundColor: "d1ecf1",
  borderColor: "bee5eb",
  color: "062c33",
});
export const alertLight = style({
  backgroundColor: "fefefe",
  borderColor: "fdfdfe",
  color: "686868",
});
export const alertLink = style({
  fontWeight: "700",
});
export const alertPrimary = style({
  backgroundColor: "cce5ff",
  borderColor: "b8daff",
  color: "002752",
});
export const alertSecondary = style({
  backgroundColor: "e2e3e5",
  borderColor: "d6d8db",
  color: "202326",
});
export const alertSuccess = style({
  backgroundColor: "d4edda",
  borderColor: "c3e6cb",
  color: "0b2e13",
});
export const alertWarning = style({
  backgroundColor: "fff3cd",
  borderColor: "ffeeba",
  color: "533f03",
});
export const alignBaseline = style({
  verticalAlign: "baseline",
});
export const alignBottom = style({
  verticalAlign: "bottom",
});
export const alignContentAround = style({
  alignContent: "space-around",
  msFlexLinePack: "distribute",
});
export const alignContentBetween = style({
  alignContent: "space-between",
  msFlexLinePack: "justify",
});
export const alignContentCenter = style({
  alignContent: "center",
  msFlexLinePack: "center",
});
export const alignContentEnd = style({
  alignContent: "flex-end",
  msFlexLinePack: "end",
});
export const alignContentLgAround = style({
  "@media": {
    "(min-width: 992px)": {
      alignContent: "space-around",
      msFlexLinePack: "distribute",
    },
  },
});
export const alignContentLgBetween = style({
  "@media": {
    "(min-width: 992px)": {
      alignContent: "space-between",
      msFlexLinePack: "justify",
    },
  },
});
export const alignContentLgCenter = style({
  "@media": {
    "(min-width: 992px)": {
      alignContent: "center",
      msFlexLinePack: "center",
    },
  },
});
export const alignContentLgEnd = style({
  "@media": {
    "(min-width: 992px)": {
      alignContent: "flex-end",
      msFlexLinePack: "end",
    },
  },
});
export const alignContentLgStart = style({
  "@media": {
    "(min-width: 992px)": {
      alignContent: "flex-start",
      msFlexLinePack: "start",
    },
  },
});
export const alignContentLgStretch = style({
  "@media": {
    "(min-width: 992px)": {
      alignContent: "stretch",
      msFlexLinePack: "stretch",
    },
  },
});
export const alignContentMdAround = style({
  "@media": {
    "(min-width: 768px)": {
      alignContent: "space-around",
      msFlexLinePack: "distribute",
    },
  },
});
export const alignContentMdBetween = style({
  "@media": {
    "(min-width: 768px)": {
      alignContent: "space-between",
      msFlexLinePack: "justify",
    },
  },
});
export const alignContentMdCenter = style({
  "@media": {
    "(min-width: 768px)": {
      alignContent: "center",
      msFlexLinePack: "center",
    },
  },
});
export const alignContentMdEnd = style({
  "@media": {
    "(min-width: 768px)": {
      alignContent: "flex-end",
      msFlexLinePack: "end",
    },
  },
});
export const alignContentMdStart = style({
  "@media": {
    "(min-width: 768px)": {
      alignContent: "flex-start",
      msFlexLinePack: "start",
    },
  },
});
export const alignContentMdStretch = style({
  "@media": {
    "(min-width: 768px)": {
      alignContent: "stretch",
      msFlexLinePack: "stretch",
    },
  },
});
export const alignContentSmAround = style({
  "@media": {
    "(min-width: 576px)": {
      alignContent: "space-around",
      msFlexLinePack: "distribute",
    },
  },
});
export const alignContentSmBetween = style({
  "@media": {
    "(min-width: 576px)": {
      alignContent: "space-between",
      msFlexLinePack: "justify",
    },
  },
});
export const alignContentSmCenter = style({
  "@media": {
    "(min-width: 576px)": {
      alignContent: "center",
      msFlexLinePack: "center",
    },
  },
});
export const alignContentSmEnd = style({
  "@media": {
    "(min-width: 576px)": {
      alignContent: "flex-end",
      msFlexLinePack: "end",
    },
  },
});
export const alignContentSmStart = style({
  "@media": {
    "(min-width: 576px)": {
      alignContent: "flex-start",
      msFlexLinePack: "start",
    },
  },
});
export const alignContentSmStretch = style({
  "@media": {
    "(min-width: 576px)": {
      alignContent: "stretch",
      msFlexLinePack: "stretch",
    },
  },
});
export const alignContentStart = style({
  alignContent: "flex-start",
  msFlexLinePack: "start",
});
export const alignContentStretch = style({
  alignContent: "stretch",
  msFlexLinePack: "stretch",
});
export const alignContentXlAround = style({
  "@media": {
    "(min-width: 1200px)": {
      alignContent: "space-around",
      msFlexLinePack: "distribute",
    },
  },
});
export const alignContentXlBetween = style({
  "@media": {
    "(min-width: 1200px)": {
      alignContent: "space-between",
      msFlexLinePack: "justify",
    },
  },
});
export const alignContentXlCenter = style({
  "@media": {
    "(min-width: 1200px)": {
      alignContent: "center",
      msFlexLinePack: "center",
    },
  },
});
export const alignContentXlEnd = style({
  "@media": {
    "(min-width: 1200px)": {
      alignContent: "flex-end",
      msFlexLinePack: "end",
    },
  },
});
export const alignContentXlStart = style({
  "@media": {
    "(min-width: 1200px)": {
      alignContent: "flex-start",
      msFlexLinePack: "start",
    },
  },
});
export const alignContentXlStretch = style({
  "@media": {
    "(min-width: 1200px)": {
      alignContent: "stretch",
      msFlexLinePack: "stretch",
    },
  },
});
export const alignItemsBaseline = style({
  alignItems: "baseline",
  msFlexAlign: "baseline",
});
export const alignItemsCenter = style({
  alignItems: "center",
  msFlexAlign: "center",
});
export const alignItemsEnd = style({
  alignItems: "flex-end",
  msFlexAlign: "end",
});
export const alignItemsLgBaseline = style({
  "@media": {
    "(min-width: 992px)": {
      alignItems: "baseline",
      msFlexAlign: "baseline",
    },
  },
});
export const alignItemsLgCenter = style({
  "@media": {
    "(min-width: 992px)": {
      alignItems: "center",
      msFlexAlign: "center",
    },
  },
});
export const alignItemsLgEnd = style({
  "@media": {
    "(min-width: 992px)": {
      alignItems: "flex-end",
      msFlexAlign: "end",
    },
  },
});
export const alignItemsLgStart = style({
  "@media": {
    "(min-width: 992px)": {
      alignItems: "flex-start",
      msFlexAlign: "start",
    },
  },
});
export const alignItemsLgStretch = style({
  "@media": {
    "(min-width: 992px)": {
      alignItems: "stretch",
      msFlexAlign: "stretch",
    },
  },
});
export const alignItemsMdBaseline = style({
  "@media": {
    "(min-width: 768px)": {
      alignItems: "baseline",
      msFlexAlign: "baseline",
    },
  },
});
export const alignItemsMdCenter = style({
  "@media": {
    "(min-width: 768px)": {
      alignItems: "center",
      msFlexAlign: "center",
    },
  },
});
export const alignItemsMdEnd = style({
  "@media": {
    "(min-width: 768px)": {
      alignItems: "flex-end",
      msFlexAlign: "end",
    },
  },
});
export const alignItemsMdStart = style({
  "@media": {
    "(min-width: 768px)": {
      alignItems: "flex-start",
      msFlexAlign: "start",
    },
  },
});
export const alignItemsMdStretch = style({
  "@media": {
    "(min-width: 768px)": {
      alignItems: "stretch",
      msFlexAlign: "stretch",
    },
  },
});
export const alignItemsSmBaseline = style({
  "@media": {
    "(min-width: 576px)": {
      alignItems: "baseline",
      msFlexAlign: "baseline",
    },
  },
});
export const alignItemsSmCenter = style({
  "@media": {
    "(min-width: 576px)": {
      alignItems: "center",
      msFlexAlign: "center",
    },
  },
});
export const alignItemsSmEnd = style({
  "@media": {
    "(min-width: 576px)": {
      alignItems: "flex-end",
      msFlexAlign: "end",
    },
  },
});
export const alignItemsSmStart = style({
  "@media": {
    "(min-width: 576px)": {
      alignItems: "flex-start",
      msFlexAlign: "start",
    },
  },
});
export const alignItemsSmStretch = style({
  "@media": {
    "(min-width: 576px)": {
      alignItems: "stretch",
      msFlexAlign: "stretch",
    },
  },
});
export const alignItemsStart = style({
  alignItems: "flex-start",
  msFlexAlign: "start",
});
export const alignItemsStretch = style({
  alignItems: "stretch",
  msFlexAlign: "stretch",
});
export const alignItemsXlBaseline = style({
  "@media": {
    "(min-width: 1200px)": {
      alignItems: "baseline",
      msFlexAlign: "baseline",
    },
  },
});
export const alignItemsXlCenter = style({
  "@media": {
    "(min-width: 1200px)": {
      alignItems: "center",
      msFlexAlign: "center",
    },
  },
});
export const alignItemsXlEnd = style({
  "@media": {
    "(min-width: 1200px)": {
      alignItems: "flex-end",
      msFlexAlign: "end",
    },
  },
});
export const alignItemsXlStart = style({
  "@media": {
    "(min-width: 1200px)": {
      alignItems: "flex-start",
      msFlexAlign: "start",
    },
  },
});
export const alignItemsXlStretch = style({
  "@media": {
    "(min-width: 1200px)": {
      alignItems: "stretch",
      msFlexAlign: "stretch",
    },
  },
});
export const alignMiddle = style({
  verticalAlign: "middle",
});
export const alignSelfAuto = style({
  alignSelf: "auto",
  msFlexItemAlign: "auto",
});
export const alignSelfBaseline = style({
  alignSelf: "baseline",
  msFlexItemAlign: "baseline",
});
export const alignSelfCenter = style({
  alignSelf: "center",
  msFlexItemAlign: "center",
});
export const alignSelfEnd = style({
  alignSelf: "flex-end",
  msFlexItemAlign: "end",
});
export const alignSelfLgAuto = style({
  "@media": {
    "(min-width: 992px)": {
      alignSelf: "auto",
      msFlexItemAlign: "auto",
    },
  },
});
export const alignSelfLgBaseline = style({
  "@media": {
    "(min-width: 992px)": {
      alignSelf: "baseline",
      msFlexItemAlign: "baseline",
    },
  },
});
export const alignSelfLgCenter = style({
  "@media": {
    "(min-width: 992px)": {
      alignSelf: "center",
      msFlexItemAlign: "center",
    },
  },
});
export const alignSelfLgEnd = style({
  "@media": {
    "(min-width: 992px)": {
      alignSelf: "flex-end",
      msFlexItemAlign: "end",
    },
  },
});
export const alignSelfLgStart = style({
  "@media": {
    "(min-width: 992px)": {
      alignSelf: "flex-start",
      msFlexItemAlign: "start",
    },
  },
});
export const alignSelfLgStretch = style({
  "@media": {
    "(min-width: 992px)": {
      alignSelf: "stretch",
      msFlexItemAlign: "stretch",
    },
  },
});
export const alignSelfMdAuto = style({
  "@media": {
    "(min-width: 768px)": {
      alignSelf: "auto",
      msFlexItemAlign: "auto",
    },
  },
});
export const alignSelfMdBaseline = style({
  "@media": {
    "(min-width: 768px)": {
      alignSelf: "baseline",
      msFlexItemAlign: "baseline",
    },
  },
});
export const alignSelfMdCenter = style({
  "@media": {
    "(min-width: 768px)": {
      alignSelf: "center",
      msFlexItemAlign: "center",
    },
  },
});
export const alignSelfMdEnd = style({
  "@media": {
    "(min-width: 768px)": {
      alignSelf: "flex-end",
      msFlexItemAlign: "end",
    },
  },
});
export const alignSelfMdStart = style({
  "@media": {
    "(min-width: 768px)": {
      alignSelf: "flex-start",
      msFlexItemAlign: "start",
    },
  },
});
export const alignSelfMdStretch = style({
  "@media": {
    "(min-width: 768px)": {
      alignSelf: "stretch",
      msFlexItemAlign: "stretch",
    },
  },
});
export const alignSelfSmAuto = style({
  "@media": {
    "(min-width: 576px)": {
      alignSelf: "auto",
      msFlexItemAlign: "auto",
    },
  },
});
export const alignSelfSmBaseline = style({
  "@media": {
    "(min-width: 576px)": {
      alignSelf: "baseline",
      msFlexItemAlign: "baseline",
    },
  },
});
export const alignSelfSmCenter = style({
  "@media": {
    "(min-width: 576px)": {
      alignSelf: "center",
      msFlexItemAlign: "center",
    },
  },
});
export const alignSelfSmEnd = style({
  "@media": {
    "(min-width: 576px)": {
      alignSelf: "flex-end",
      msFlexItemAlign: "end",
    },
  },
});
export const alignSelfSmStart = style({
  "@media": {
    "(min-width: 576px)": {
      alignSelf: "flex-start",
      msFlexItemAlign: "start",
    },
  },
});
export const alignSelfSmStretch = style({
  "@media": {
    "(min-width: 576px)": {
      alignSelf: "stretch",
      msFlexItemAlign: "stretch",
    },
  },
});
export const alignSelfStart = style({
  alignSelf: "flex-start",
  msFlexItemAlign: "start",
});
export const alignSelfStretch = style({
  alignSelf: "stretch",
  msFlexItemAlign: "stretch",
});
export const alignSelfXlAuto = style({
  "@media": {
    "(min-width: 1200px)": {
      alignSelf: "auto",
      msFlexItemAlign: "auto",
    },
  },
});
export const alignSelfXlBaseline = style({
  "@media": {
    "(min-width: 1200px)": {
      alignSelf: "baseline",
      msFlexItemAlign: "baseline",
    },
  },
});
export const alignSelfXlCenter = style({
  "@media": {
    "(min-width: 1200px)": {
      alignSelf: "center",
      msFlexItemAlign: "center",
    },
  },
});
export const alignSelfXlEnd = style({
  "@media": {
    "(min-width: 1200px)": {
      alignSelf: "flex-end",
      msFlexItemAlign: "end",
    },
  },
});
export const alignSelfXlStart = style({
  "@media": {
    "(min-width: 1200px)": {
      alignSelf: "flex-start",
      msFlexItemAlign: "start",
    },
  },
});
export const alignSelfXlStretch = style({
  "@media": {
    "(min-width: 1200px)": {
      alignSelf: "stretch",
      msFlexItemAlign: "stretch",
    },
  },
});
export const alignTextBottom = style({
  verticalAlign: "text-bottom",
});
export const alignTextTop = style({
  verticalAlign: "text-top",
});
export const alignTop = style({
  verticalAlign: "top",
});
export const badge = style({
  borderRadius: "0.25rem",
  display: "inline-block",
  fontSize: "75%",
  fontWeight: "700",
  lineHeight: "1",
  padding: "0.25em 0.4em",
  textAlign: "center",
  transition:
    "color 0.15s ease-in-out , background-color 0.15s ease-in-out , border-color 0.15s ease-in-out , box-shadow 0.15s ease-in-out",
  verticalAlign: "baseline",
  whiteSpace: "nowrap",
  ":empty": {
    display: "none",
  },
  "@media": {
    "(prefers-reduced-motion: reduce)": {
      border: "1px solid 000",
      transition: "none",
    },
  },
});
export const badgeDanger = style({
  backgroundColor: "dc3545",
  color: "fff",
});
export const badgeDark = style({
  backgroundColor: "343a40",
  color: "fff",
});
export const badgeInfo = style({
  backgroundColor: "17a2b8",
  color: "fff",
});
export const badgeLight = style({
  backgroundColor: "f8f9fa",
  color: "212529",
});
export const badgePill = style({
  borderRadius: "10rem",
  paddingLeft: "0.6em",
  paddingRight: "0.6em",
});
export const badgePrimary = style({
  backgroundColor: "007bff",
  color: "fff",
});
export const badgeSecondary = style({
  backgroundColor: "6c757d",
  color: "fff",
});
export const badgeSuccess = style({
  backgroundColor: "28a745",
  color: "fff",
});
export const badgeWarning = style({
  backgroundColor: "ffc107",
  color: "212529",
});
export const bgDanger = style({
  backgroundColor: "dc3545",
});
export const bgDark = style({
  backgroundColor: "343a40",
});
export const bgInfo = style({
  backgroundColor: "17a2b8",
});
export const bgLight = style({
  backgroundColor: "f8f9fa",
});
export const bgPrimary = style({
  backgroundColor: "007bff",
});
export const bgSecondary = style({
  backgroundColor: "6c757d",
});
export const bgSuccess = style({
  backgroundColor: "28a745",
});
export const bgTransparent = style({
  backgroundColor: "transparent",
});
export const bgWarning = style({
  backgroundColor: "ffc107",
});
export const bgWhite = style({
  backgroundColor: "fff",
});
export const blockquote = style({
  fontSize: "1.25rem",
  marginBottom: "1rem",
});
export const blockquoteFooter = style({
  color: "6c757d",
  display: "block",
  fontSize: "80%",
  "::before": {
    content: "— ",
  },
});
export const border = style({
  border: "1px solid dee2e6",
});
export const border0 = style({
  border: "0",
});
export const borderBottom = style({
  borderBottom: "1px solid dee2e6",
});
export const borderBottom0 = style({
  borderBottom: "0",
});
export const borderDanger = style({
  borderColor: "dc3545",
});
export const borderDark = style({
  borderColor: "343a40",
});
export const borderInfo = style({
  borderColor: "17a2b8",
});
export const borderLeft = style({
  borderLeft: "1px solid dee2e6",
});
export const borderLeft0 = style({
  borderLeft: "0",
});
export const borderLight = style({
  borderColor: "f8f9fa",
});
export const borderPrimary = style({
  borderColor: "007bff",
});
export const borderRight = style({
  borderRight: "1px solid dee2e6",
});
export const borderRight0 = style({
  borderRight: "0",
});
export const borderSecondary = style({
  borderColor: "6c757d",
});
export const borderSuccess = style({
  borderColor: "28a745",
});
export const borderTop = style({
  borderTop: "1px solid dee2e6",
});
export const borderTop0 = style({
  borderTop: "0",
});
export const borderWarning = style({
  borderColor: "ffc107",
});
export const borderWhite = style({
  borderColor: "fff",
});
export const breadcrumb = style({
  backgroundColor: "e9ecef",
  borderRadius: "0.25rem",
  display: "flex",
  flexWrap: "wrap",
  listStyle: "none",
  marginBottom: "1rem",
  msFlexWrap: "wrap",
  padding: "0.75rem 1rem",
});
export const breadcrumbItem = style({
  color: "6c757d",
  paddingLeft: "0.5rem",
  "::before": {
    color: "6c757d",
    content: "/",
    float: "left",
    paddingRight: "0.5rem",
  },
  selectors: {
    "&:hover::before": {
      textDecoration: "none",
    },
  },
});
export const bsPopoverAuto = style({
  selectors: {
    "&[x-placement^='bottom']": {
      top: "calc(-0.5rem-1px)",
    },
    "&[x-placement^='bottom']::after": {
      borderBottomColor: "fff",
      borderWidth: "0 0.5rem 0.5rem 0.5rem",
      top: "1px",
    },
    "&[x-placement^='bottom']::before": {
      borderBottom: "1px solid f7f7f7",
      content: "",
      display: "block",
      left: "50%",
      marginLeft: "-0.5rem",
      position: "absolute",
      top: "0",
      width: "1rem",
    },
    "&[x-placement^='left']": {
      height: "1rem",
      margin: "0.3rem 0",
      right: "calc(-0.5rem-1px)",
      width: "0.5rem",
    },
    "&[x-placement^='left']::after": {
      borderLeftColor: "fff",
      borderWidth: "0.5rem 0 0.5rem 0.5rem",
      right: "1px",
    },
    "&[x-placement^='left']::before": {
      borderLeftColor: "rgba(0,0,0,0.25)",
      borderWidth: "0.5rem 0 0.5rem 0.5rem",
      right: "0",
    },
    "&[x-placement^='right']": {
      height: "1rem",
      left: "calc(-0.5rem-1px)",
      margin: "0.3rem 0",
      width: "0.5rem",
    },
    "&[x-placement^='right']::after": {
      borderRightColor: "fff",
      borderWidth: "0.5rem 0.5rem 0.5rem 0",
      left: "1px",
    },
    "&[x-placement^='right']::before": {
      borderRightColor: "rgba(0,0,0,0.25)",
      borderWidth: "0.5rem 0.5rem 0.5rem 0",
      left: "0",
    },
    "&[x-placement^='top']": {
      bottom: "calc(-0.5rem-1px)",
    },
    "&[x-placement^='top']::after": {
      borderTopColor: "fff",
      borderWidth: "0.5rem 0.5rem 0",
      bottom: "1px",
    },
    "&[x-placement^='top']::before": {
      borderTopColor: "rgba(0,0,0,0.25)",
      borderWidth: "0.5rem 0.5rem 0",
      bottom: "0",
    },
  },
});
export const bsPopoverBottom = style({
  marginTop: "0.5rem",
  top: "calc(-0.5rem-1px)",
  "::after": {
    borderBottomColor: "fff",
    borderWidth: "0 0.5rem 0.5rem 0.5rem",
    top: "1px",
  },
  "::before": {
    borderBottom: "1px solid f7f7f7",
    content: "",
    display: "block",
    left: "50%",
    marginLeft: "-0.5rem",
    position: "absolute",
    top: "0",
    width: "1rem",
  },
});
export const bsPopoverLeft = style({
  height: "1rem",
  margin: "0.3rem 0",
  marginRight: "0.5rem",
  right: "calc(-0.5rem-1px)",
  width: "0.5rem",
  "::after": {
    borderLeftColor: "fff",
    borderWidth: "0.5rem 0 0.5rem 0.5rem",
    right: "1px",
  },
  "::before": {
    borderLeftColor: "rgba(0,0,0,0.25)",
    borderWidth: "0.5rem 0 0.5rem 0.5rem",
    right: "0",
  },
});
export const bsPopoverRight = style({
  height: "1rem",
  left: "calc(-0.5rem-1px)",
  margin: "0.3rem 0",
  marginLeft: "0.5rem",
  width: "0.5rem",
  "::after": {
    borderRightColor: "fff",
    borderWidth: "0.5rem 0.5rem 0.5rem 0",
    left: "1px",
  },
  "::before": {
    borderRightColor: "rgba(0,0,0,0.25)",
    borderWidth: "0.5rem 0.5rem 0.5rem 0",
    left: "0",
  },
});
export const bsPopoverTop = style({
  bottom: "calc(-0.5rem-1px)",
  marginBottom: "0.5rem",
  "::after": {
    borderTopColor: "fff",
    borderWidth: "0.5rem 0.5rem 0",
    bottom: "1px",
  },
  "::before": {
    borderTopColor: "rgba(0,0,0,0.25)",
    borderWidth: "0.5rem 0.5rem 0",
    bottom: "0",
  },
});
export const bsTooltipAuto = style({
  selectors: {
    "&[x-placement^='bottom']": {
      top: "0",
    },
    "&[x-placement^='bottom']::before": {
      borderBottomColor: "000",
      borderWidth: "0 0.4rem 0.4rem",
      bottom: "0",
    },
    "&[x-placement^='left']": {
      height: "0.8rem",
      right: "0",
      width: "0.4rem",
    },
    "&[x-placement^='left']::before": {
      borderLeftColor: "000",
      borderWidth: "0.4rem 0 0.4rem 0.4rem",
      left: "0",
    },
    "&[x-placement^='right']": {
      height: "0.8rem",
      left: "0",
      width: "0.4rem",
    },
    "&[x-placement^='right']::before": {
      borderRightColor: "000",
      borderWidth: "0.4rem 0.4rem 0.4rem 0",
      right: "0",
    },
    "&[x-placement^='top']": {
      bottom: "0",
    },
    "&[x-placement^='top']::before": {
      borderTopColor: "000",
      borderWidth: "0.4rem 0.4rem 0",
      top: "0",
    },
  },
});
export const bsTooltipBottom = style({
  padding: "0.4rem 0",
  top: "0",
  "::before": {
    borderBottomColor: "000",
    borderWidth: "0 0.4rem 0.4rem",
    bottom: "0",
  },
});
export const bsTooltipLeft = style({
  height: "0.8rem",
  padding: "0 0.4rem",
  right: "0",
  width: "0.4rem",
  "::before": {
    borderLeftColor: "000",
    borderWidth: "0.4rem 0 0.4rem 0.4rem",
    left: "0",
  },
});
export const bsTooltipRight = style({
  height: "0.8rem",
  left: "0",
  padding: "0 0.4rem",
  width: "0.4rem",
  "::before": {
    borderRightColor: "000",
    borderWidth: "0.4rem 0.4rem 0.4rem 0",
    right: "0",
  },
});
export const bsTooltipTop = style({
  bottom: "0",
  padding: "0.4rem 0",
  "::before": {
    borderTopColor: "000",
    borderWidth: "0.4rem 0.4rem 0",
    top: "0",
  },
});
export const btn = style({
  MozUserSelect: "none",
  WebkitUserSelect: "none",
  backgroundColor: "transparent",
  border: "1px solid transparent",
  borderRadius: "0.25rem",
  boxShadow: "0 0 0 0.2rem rgba(0,123,255,0.25)",
  color: "212529",
  display: "inline-block",
  fontSize: "1rem",
  fontWeight: "400",
  lineHeight: "1.5",
  msUserSelect: "none",
  opacity: "0.65",
  outline: "0",
  padding: "0.375rem 0.75rem",
  position: "relative",
  textAlign: "center",
  top: "-1px",
  transition:
    "color 0.15s ease-in-out , background-color 0.15s ease-in-out , border-color 0.15s ease-in-out , box-shadow 0.15s ease-in-out",
  userSelect: "none",
  verticalAlign: "middle",
  ":disabled": {
    opacity: "0.65",
  },
  ":focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,0.25)",
    outline: "0",
  },
  ":hover": {
    color: "212529",
    textDecoration: "none",
  },
  "@media": {
    "(prefers-reduced-motion: reduce)": {
      transition: "none",
    },
  },
  selectors: {
    "&:not(:disabled):not": {
      cursor: "pointer",
    },
  },
});
export const btnBlock = style({
  display: "block",
  marginTop: "0.5rem",
  width: "100%",
});
export const btnDanger = style({
  backgroundColor: "dc3545",
  borderColor: "dc3545",
  boxShadow: "0 0 0 0.2rem rgba(225,83,97,0.5)",
  color: "fff",
  ":disabled": {
    backgroundColor: "dc3545",
    borderColor: "dc3545",
    color: "fff",
  },
  ":focus": {
    backgroundColor: "c82333",
    borderColor: "bd2130",
    boxShadow: "0 0 0 0.2rem rgba(225,83,97,0.5)",
    color: "fff",
  },
  ":hover": {
    backgroundColor: "c82333",
    borderColor: "bd2130",
    color: "fff",
  },
  selectors: {
    "&:not(:disabled):not": {
      backgroundColor: "bd2130",
      borderColor: "b21f2d",
      color: "fff",
    },
    "&:not(:disabled):not:active": {
      backgroundColor: "bd2130",
      borderColor: "b21f2d",
      color: "fff",
    },
    "&:not(:disabled):not:active:focus": {
      boxShadow: "0 0 0 0.2rem rgba(225,83,97,0.5)",
    },
    "&:not(:disabled):not:focus": {
      boxShadow: "0 0 0 0.2rem rgba(225,83,97,0.5)",
    },
  },
});
export const btnDark = style({
  backgroundColor: "343a40",
  borderColor: "343a40",
  boxShadow: "0 0 0 0.2rem rgba(82,88,93,0.5)",
  color: "fff",
  ":disabled": {
    backgroundColor: "343a40",
    borderColor: "343a40",
    color: "fff",
  },
  ":focus": {
    backgroundColor: "23272b",
    borderColor: "1d2124",
    boxShadow: "0 0 0 0.2rem rgba(82,88,93,0.5)",
    color: "fff",
  },
  ":hover": {
    backgroundColor: "23272b",
    borderColor: "1d2124",
    color: "fff",
  },
  selectors: {
    "&:not(:disabled):not": {
      backgroundColor: "1d2124",
      borderColor: "171a1d",
      color: "fff",
    },
    "&:not(:disabled):not:active": {
      backgroundColor: "1d2124",
      borderColor: "171a1d",
      color: "fff",
    },
    "&:not(:disabled):not:active:focus": {
      boxShadow: "0 0 0 0.2rem rgba(82,88,93,0.5)",
    },
    "&:not(:disabled):not:focus": {
      boxShadow: "0 0 0 0.2rem rgba(82,88,93,0.5)",
    },
  },
});
export const btnGroup = style({
  display: "inline-flex",
  flex: "1 1 auto",
  msFlex: "1 1 auto",
  position: "relative",
  verticalAlign: "middle",
  zIndex: "1",
  ":active": {
    zIndex: "1",
  },
  ":focus": {
    zIndex: "1",
  },
  ":hover": {
    zIndex: "1",
  },
  selectors: {
    "&:not(:first-child)": {
      borderBottomLeftRadius: "0",
      borderTopLeftRadius: "0",
    },
    "&:not(:last-child)": {
      borderBottomRightRadius: "0",
      borderTopRightRadius: "0",
    },
    "&:not(:last-child):not": {
      borderBottomRightRadius: "0",
      borderTopRightRadius: "0",
    },
  },
});
export const btnGroupLg = style({
  borderRadius: "0.3rem",
  fontSize: "1.25rem",
  lineHeight: "1.5",
  padding: "0.5rem 1rem",
  paddingLeft: "0.75rem",
  paddingRight: "0.75rem",
});
export const btnGroupSm = style({
  borderRadius: "0.2rem",
  fontSize: "0.875rem",
  lineHeight: "1.5",
  padding: "0.25rem 0.5rem",
  paddingLeft: "0.375rem",
  paddingRight: "0.375rem",
});
export const btnGroupToggle = style({
  marginBottom: "0",
});
export const btnGroupVertical = style({
  alignItems: "flex-start",
  display: "inline-flex",
  flex: "1 1 auto",
  flexDirection: "column",
  justifyContent: "center",
  msFlex: "1 1 auto",
  msFlexAlign: "start",
  msFlexDirection: "column",
  msFlexPack: "center",
  position: "relative",
  verticalAlign: "middle",
  width: "100%",
  zIndex: "1",
  ":active": {
    zIndex: "1",
  },
  ":focus": {
    zIndex: "1",
  },
  ":hover": {
    zIndex: "1",
  },
  selectors: {
    "&:not(:first-child)": {
      borderTopLeftRadius: "0",
      borderTopRightRadius: "0",
    },
    "&:not(:last-child)": {
      borderBottomLeftRadius: "0",
      borderBottomRightRadius: "0",
    },
    "&:not(:last-child):not": {
      borderBottomLeftRadius: "0",
      borderBottomRightRadius: "0",
    },
  },
});
export const btnInfo = style({
  backgroundColor: "17a2b8",
  borderColor: "17a2b8",
  boxShadow: "0 0 0 0.2rem rgba(58,176,195,0.5)",
  color: "fff",
  ":disabled": {
    backgroundColor: "17a2b8",
    borderColor: "17a2b8",
    color: "fff",
  },
  ":focus": {
    backgroundColor: "138496",
    borderColor: "117a8b",
    boxShadow: "0 0 0 0.2rem rgba(58,176,195,0.5)",
    color: "fff",
  },
  ":hover": {
    backgroundColor: "138496",
    borderColor: "117a8b",
    color: "fff",
  },
  selectors: {
    "&:not(:disabled):not": {
      backgroundColor: "117a8b",
      borderColor: "10707f",
      color: "fff",
    },
    "&:not(:disabled):not:active": {
      backgroundColor: "117a8b",
      borderColor: "10707f",
      color: "fff",
    },
    "&:not(:disabled):not:active:focus": {
      boxShadow: "0 0 0 0.2rem rgba(58,176,195,0.5)",
    },
    "&:not(:disabled):not:focus": {
      boxShadow: "0 0 0 0.2rem rgba(58,176,195,0.5)",
    },
  },
});
export const btnLg = style({
  borderRadius: "0.3rem",
  fontSize: "1.25rem",
  lineHeight: "1.5",
  padding: "0.5rem 1rem",
  paddingLeft: "0.75rem",
  paddingRight: "0.75rem",
});
export const btnLight = style({
  backgroundColor: "f8f9fa",
  borderColor: "f8f9fa",
  boxShadow: "0 0 0 0.2rem rgba(216,217,219,0.5)",
  color: "212529",
  ":disabled": {
    backgroundColor: "f8f9fa",
    borderColor: "f8f9fa",
    color: "212529",
  },
  ":focus": {
    backgroundColor: "e2e6ea",
    borderColor: "dae0e5",
    boxShadow: "0 0 0 0.2rem rgba(216,217,219,0.5)",
    color: "212529",
  },
  ":hover": {
    backgroundColor: "e2e6ea",
    borderColor: "dae0e5",
    color: "212529",
  },
  selectors: {
    "&:not(:disabled):not": {
      backgroundColor: "dae0e5",
      borderColor: "d3d9df",
      color: "212529",
    },
    "&:not(:disabled):not:active": {
      backgroundColor: "dae0e5",
      borderColor: "d3d9df",
      color: "212529",
    },
    "&:not(:disabled):not:active:focus": {
      boxShadow: "0 0 0 0.2rem rgba(216,217,219,0.5)",
    },
    "&:not(:disabled):not:focus": {
      boxShadow: "0 0 0 0.2rem rgba(216,217,219,0.5)",
    },
  },
});
export const btnLink = style({
  color: "6c757d",
  fontWeight: "400",
  pointerEvents: "none",
  textDecoration: "underline",
  ":disabled": {
    color: "6c757d",
    pointerEvents: "none",
  },
  ":focus": {
    textDecoration: "underline",
  },
  ":hover": {
    color: "0056b3",
    textDecoration: "underline",
  },
});
export const btnOutlineDanger = style({
  backgroundColor: "transparent",
  borderColor: "dc3545",
  boxShadow: "0 0 0 0.2rem rgba(220,53,69,0.5)",
  color: "dc3545",
  ":disabled": {
    backgroundColor: "transparent",
    color: "dc3545",
  },
  ":focus": {
    boxShadow: "0 0 0 0.2rem rgba(220,53,69,0.5)",
  },
  ":hover": {
    backgroundColor: "dc3545",
    borderColor: "dc3545",
    color: "fff",
  },
  selectors: {
    "&:not(:disabled):not": {
      backgroundColor: "dc3545",
      borderColor: "dc3545",
      color: "fff",
    },
    "&:not(:disabled):not:active": {
      backgroundColor: "dc3545",
      borderColor: "dc3545",
      color: "fff",
    },
    "&:not(:disabled):not:active:focus": {
      boxShadow: "0 0 0 0.2rem rgba(220,53,69,0.5)",
    },
    "&:not(:disabled):not:focus": {
      boxShadow: "0 0 0 0.2rem rgba(220,53,69,0.5)",
    },
  },
});
export const btnOutlineDark = style({
  backgroundColor: "transparent",
  borderColor: "343a40",
  boxShadow: "0 0 0 0.2rem rgba(52,58,64,0.5)",
  color: "343a40",
  ":disabled": {
    backgroundColor: "transparent",
    color: "343a40",
  },
  ":focus": {
    boxShadow: "0 0 0 0.2rem rgba(52,58,64,0.5)",
  },
  ":hover": {
    backgroundColor: "343a40",
    borderColor: "343a40",
    color: "fff",
  },
  selectors: {
    "&:not(:disabled):not": {
      backgroundColor: "343a40",
      borderColor: "343a40",
      color: "fff",
    },
    "&:not(:disabled):not:active": {
      backgroundColor: "343a40",
      borderColor: "343a40",
      color: "fff",
    },
    "&:not(:disabled):not:active:focus": {
      boxShadow: "0 0 0 0.2rem rgba(52,58,64,0.5)",
    },
    "&:not(:disabled):not:focus": {
      boxShadow: "0 0 0 0.2rem rgba(52,58,64,0.5)",
    },
  },
});
export const btnOutlineInfo = style({
  backgroundColor: "transparent",
  borderColor: "17a2b8",
  boxShadow: "0 0 0 0.2rem rgba(23,162,184,0.5)",
  color: "17a2b8",
  ":disabled": {
    backgroundColor: "transparent",
    color: "17a2b8",
  },
  ":focus": {
    boxShadow: "0 0 0 0.2rem rgba(23,162,184,0.5)",
  },
  ":hover": {
    backgroundColor: "17a2b8",
    borderColor: "17a2b8",
    color: "fff",
  },
  selectors: {
    "&:not(:disabled):not": {
      backgroundColor: "17a2b8",
      borderColor: "17a2b8",
      color: "fff",
    },
    "&:not(:disabled):not:active": {
      backgroundColor: "17a2b8",
      borderColor: "17a2b8",
      color: "fff",
    },
    "&:not(:disabled):not:active:focus": {
      boxShadow: "0 0 0 0.2rem rgba(23,162,184,0.5)",
    },
    "&:not(:disabled):not:focus": {
      boxShadow: "0 0 0 0.2rem rgba(23,162,184,0.5)",
    },
  },
});
export const btnOutlineLight = style({
  backgroundColor: "transparent",
  borderColor: "f8f9fa",
  boxShadow: "0 0 0 0.2rem rgba(248,249,250,0.5)",
  color: "f8f9fa",
  ":disabled": {
    backgroundColor: "transparent",
    color: "f8f9fa",
  },
  ":focus": {
    boxShadow: "0 0 0 0.2rem rgba(248,249,250,0.5)",
  },
  ":hover": {
    backgroundColor: "f8f9fa",
    borderColor: "f8f9fa",
    color: "212529",
  },
  selectors: {
    "&:not(:disabled):not": {
      backgroundColor: "f8f9fa",
      borderColor: "f8f9fa",
      color: "212529",
    },
    "&:not(:disabled):not:active": {
      backgroundColor: "f8f9fa",
      borderColor: "f8f9fa",
      color: "212529",
    },
    "&:not(:disabled):not:active:focus": {
      boxShadow: "0 0 0 0.2rem rgba(248,249,250,0.5)",
    },
    "&:not(:disabled):not:focus": {
      boxShadow: "0 0 0 0.2rem rgba(248,249,250,0.5)",
    },
  },
});
export const btnOutlinePrimary = style({
  backgroundColor: "transparent",
  borderColor: "007bff",
  boxShadow: "0 0 0 0.2rem rgba(0,123,255,0.5)",
  color: "007bff",
  ":disabled": {
    backgroundColor: "transparent",
    color: "007bff",
  },
  ":focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,0.5)",
  },
  ":hover": {
    backgroundColor: "007bff",
    borderColor: "007bff",
    color: "fff",
  },
  selectors: {
    "&:not(:disabled):not": {
      backgroundColor: "007bff",
      borderColor: "007bff",
      color: "fff",
    },
    "&:not(:disabled):not:active": {
      backgroundColor: "007bff",
      borderColor: "007bff",
      color: "fff",
    },
    "&:not(:disabled):not:active:focus": {
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,0.5)",
    },
    "&:not(:disabled):not:focus": {
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,0.5)",
    },
  },
});
export const btnOutlineSecondary = style({
  backgroundColor: "transparent",
  borderColor: "6c757d",
  boxShadow: "0 0 0 0.2rem rgba(108,117,125,0.5)",
  color: "6c757d",
  ":disabled": {
    backgroundColor: "transparent",
    color: "6c757d",
  },
  ":focus": {
    boxShadow: "0 0 0 0.2rem rgba(108,117,125,0.5)",
  },
  ":hover": {
    backgroundColor: "6c757d",
    borderColor: "6c757d",
    color: "fff",
  },
  selectors: {
    "&:not(:disabled):not": {
      backgroundColor: "6c757d",
      borderColor: "6c757d",
      color: "fff",
    },
    "&:not(:disabled):not:active": {
      backgroundColor: "6c757d",
      borderColor: "6c757d",
      color: "fff",
    },
    "&:not(:disabled):not:active:focus": {
      boxShadow: "0 0 0 0.2rem rgba(108,117,125,0.5)",
    },
    "&:not(:disabled):not:focus": {
      boxShadow: "0 0 0 0.2rem rgba(108,117,125,0.5)",
    },
  },
});
export const btnOutlineSuccess = style({
  backgroundColor: "transparent",
  borderColor: "28a745",
  boxShadow: "0 0 0 0.2rem rgba(40,167,69,0.5)",
  color: "28a745",
  ":disabled": {
    backgroundColor: "transparent",
    color: "28a745",
  },
  ":focus": {
    boxShadow: "0 0 0 0.2rem rgba(40,167,69,0.5)",
  },
  ":hover": {
    backgroundColor: "28a745",
    borderColor: "28a745",
    color: "fff",
  },
  selectors: {
    "&:not(:disabled):not": {
      backgroundColor: "28a745",
      borderColor: "28a745",
      color: "fff",
    },
    "&:not(:disabled):not:active": {
      backgroundColor: "28a745",
      borderColor: "28a745",
      color: "fff",
    },
    "&:not(:disabled):not:active:focus": {
      boxShadow: "0 0 0 0.2rem rgba(40,167,69,0.5)",
    },
    "&:not(:disabled):not:focus": {
      boxShadow: "0 0 0 0.2rem rgba(40,167,69,0.5)",
    },
  },
});
export const btnOutlineWarning = style({
  backgroundColor: "transparent",
  borderColor: "ffc107",
  boxShadow: "0 0 0 0.2rem rgba(255,193,7,0.5)",
  color: "ffc107",
  ":disabled": {
    backgroundColor: "transparent",
    color: "ffc107",
  },
  ":focus": {
    boxShadow: "0 0 0 0.2rem rgba(255,193,7,0.5)",
  },
  ":hover": {
    backgroundColor: "ffc107",
    borderColor: "ffc107",
    color: "212529",
  },
  selectors: {
    "&:not(:disabled):not": {
      backgroundColor: "ffc107",
      borderColor: "ffc107",
      color: "212529",
    },
    "&:not(:disabled):not:active": {
      backgroundColor: "ffc107",
      borderColor: "ffc107",
      color: "212529",
    },
    "&:not(:disabled):not:active:focus": {
      boxShadow: "0 0 0 0.2rem rgba(255,193,7,0.5)",
    },
    "&:not(:disabled):not:focus": {
      boxShadow: "0 0 0 0.2rem rgba(255,193,7,0.5)",
    },
  },
});
export const btnPrimary = style({
  backgroundColor: "007bff",
  borderColor: "007bff",
  boxShadow: "0 0 0 0.2rem rgba(38,143,255,0.5)",
  color: "fff",
  ":disabled": {
    backgroundColor: "007bff",
    borderColor: "007bff",
    color: "fff",
  },
  ":focus": {
    backgroundColor: "0069d9",
    borderColor: "0062cc",
    boxShadow: "0 0 0 0.2rem rgba(38,143,255,0.5)",
    color: "fff",
  },
  ":hover": {
    backgroundColor: "0069d9",
    borderColor: "0062cc",
    color: "fff",
  },
  selectors: {
    "&:not(:disabled):not": {
      backgroundColor: "0062cc",
      borderColor: "005cbf",
      color: "fff",
    },
    "&:not(:disabled):not:active": {
      backgroundColor: "0062cc",
      borderColor: "005cbf",
      color: "fff",
    },
    "&:not(:disabled):not:active:focus": {
      boxShadow: "0 0 0 0.2rem rgba(38,143,255,0.5)",
    },
    "&:not(:disabled):not:focus": {
      boxShadow: "0 0 0 0.2rem rgba(38,143,255,0.5)",
    },
  },
});
export const btnSecondary = style({
  backgroundColor: "6c757d",
  borderColor: "6c757d",
  boxShadow: "0 0 0 0.2rem rgba(130,138,145,0.5)",
  color: "fff",
  ":disabled": {
    backgroundColor: "6c757d",
    borderColor: "6c757d",
    color: "fff",
  },
  ":focus": {
    backgroundColor: "5a6268",
    borderColor: "545b62",
    boxShadow: "0 0 0 0.2rem rgba(130,138,145,0.5)",
    color: "fff",
  },
  ":hover": {
    backgroundColor: "5a6268",
    borderColor: "545b62",
    color: "fff",
  },
  selectors: {
    "&:not(:disabled):not": {
      backgroundColor: "545b62",
      borderColor: "4e555b",
      color: "fff",
    },
    "&:not(:disabled):not:active": {
      backgroundColor: "545b62",
      borderColor: "4e555b",
      color: "fff",
    },
    "&:not(:disabled):not:active:focus": {
      boxShadow: "0 0 0 0.2rem rgba(130,138,145,0.5)",
    },
    "&:not(:disabled):not:focus": {
      boxShadow: "0 0 0 0.2rem rgba(130,138,145,0.5)",
    },
  },
});
export const btnSm = style({
  borderRadius: "0.2rem",
  fontSize: "0.875rem",
  lineHeight: "1.5",
  padding: "0.25rem 0.5rem",
  paddingLeft: "0.375rem",
  paddingRight: "0.375rem",
});
export const btnSuccess = style({
  backgroundColor: "28a745",
  borderColor: "28a745",
  boxShadow: "0 0 0 0.2rem rgba(72,180,97,0.5)",
  color: "fff",
  ":disabled": {
    backgroundColor: "28a745",
    borderColor: "28a745",
    color: "fff",
  },
  ":focus": {
    backgroundColor: "218838",
    borderColor: "1e7e34",
    boxShadow: "0 0 0 0.2rem rgba(72,180,97,0.5)",
    color: "fff",
  },
  ":hover": {
    backgroundColor: "218838",
    borderColor: "1e7e34",
    color: "fff",
  },
  selectors: {
    "&:not(:disabled):not": {
      backgroundColor: "1e7e34",
      borderColor: "1c7430",
      color: "fff",
    },
    "&:not(:disabled):not:active": {
      backgroundColor: "1e7e34",
      borderColor: "1c7430",
      color: "fff",
    },
    "&:not(:disabled):not:active:focus": {
      boxShadow: "0 0 0 0.2rem rgba(72,180,97,0.5)",
    },
    "&:not(:disabled):not:focus": {
      boxShadow: "0 0 0 0.2rem rgba(72,180,97,0.5)",
    },
  },
});
export const btnToolbar = style({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "flex-start",
  msFlexPack: "start",
  msFlexWrap: "wrap",
  width: "auto",
});
export const btnWarning = style({
  backgroundColor: "ffc107",
  borderColor: "ffc107",
  boxShadow: "0 0 0 0.2rem rgba(222,170,12,0.5)",
  color: "212529",
  ":disabled": {
    backgroundColor: "ffc107",
    borderColor: "ffc107",
    color: "212529",
  },
  ":focus": {
    backgroundColor: "e0a800",
    borderColor: "d39e00",
    boxShadow: "0 0 0 0.2rem rgba(222,170,12,0.5)",
    color: "212529",
  },
  ":hover": {
    backgroundColor: "e0a800",
    borderColor: "d39e00",
    color: "212529",
  },
  selectors: {
    "&:not(:disabled):not": {
      backgroundColor: "d39e00",
      borderColor: "c69500",
      color: "212529",
    },
    "&:not(:disabled):not:active": {
      backgroundColor: "d39e00",
      borderColor: "c69500",
      color: "212529",
    },
    "&:not(:disabled):not:active:focus": {
      boxShadow: "0 0 0 0.2rem rgba(222,170,12,0.5)",
    },
    "&:not(:disabled):not:focus": {
      boxShadow: "0 0 0 0.2rem rgba(222,170,12,0.5)",
    },
  },
});
export const card = style({
  backgroundClip: "border-box",
  backgroundColor: "fff",
  border: "1px solid rgba(0,0,0,0.125)",
  borderBottom: "inherit",
  borderRadius: "0.25rem",
  borderTop: "0",
  display: "flex",
  flexDirection: "column",
  minWidth: "0",
  msFlexDirection: "column",
  position: "relative",
  wordWrap: "break-word",
  ":first-child": {
    borderTopLeftRadius: "calc(0.25rem-1px)",
    borderTopRightRadius: "calc(0.25rem-1px)",
    borderTopWidth: "0",
  },
  ":last-child": {
    borderBottomLeftRadius: "calc(0.25rem-1px)",
    borderBottomRightRadius: "calc(0.25rem-1px)",
    borderBottomWidth: "0",
  },
});
export const cardBody = style({
  flex: "1 1 auto",
  minHeight: "1px",
  msFlex: "1 1 auto",
  padding: "1.25rem",
});
export const cardColumns = style({
  marginBottom: "0.75rem",
  "@media": {
    "(min-width: 576px)": {
      MozColumnCount: "3",
      MozColumnGap: "1.25rem",
      WebkitColumnCount: "3",
      WebkitColumnGap: "1.25rem",
      columnCount: "3",
      columnGap: "1.25rem",
      display: "inline-block",
      orphans: "1",
      widows: "1",
      width: "100%",
    },
  },
});
export const cardDeck = style({
  marginBottom: "15px",
  "@media": {
    "(min-width: 576px)": {
      display: "flex",
      flex: "1 0 0%",
      flexFlow: "row wrap",
      marginBottom: "0",
      marginLeft: "15px",
      marginRight: "15px",
      msFlex: "1 0 0%",
      msFlexFlow: "row wrap",
    },
  },
});
export const cardFooter = style({
  backgroundColor: "rgba(0,0,0,0.03)",
  borderTop: "1px solid rgba(0,0,0,0.125)",
  padding: "0.75rem 1.25rem",
  ":last-child": {
    borderRadius: "0 0 calc(0.25rem-1px) calc(0.25rem-1px)",
  },
});
export const cardGroup = style({
  marginBottom: "15px",
  "@media": {
    "(min-width: 576px)": {
      borderLeft: "0",
      display: "flex",
      flex: "1 0 0%",
      flexFlow: "row wrap",
      marginBottom: "0",
      marginLeft: "0",
      msFlex: "1 0 0%",
      msFlexFlow: "row wrap",
      selectors: {
        "&:not(:first-child)": {
          borderBottomLeftRadius: "0",
        },
        "&:not(:last-child)": {
          borderBottomRightRadius: "0",
        },
      },
    },
  },
});
export const cardHeader = style({
  backgroundColor: "rgba(0,0,0,0.03)",
  borderBottom: "1px solid rgba(0,0,0,0.125)",
  marginBottom: "0",
  padding: "0.75rem 1.25rem",
  ":first-child": {
    borderRadius: "calc(0.25rem-1px) calc(0.25rem-1px) 0 0",
  },
});
export const cardHeaderPills = style({
  marginLeft: "-0.625rem",
  marginRight: "-0.625rem",
});
export const cardHeaderTabs = style({
  borderBottom: "0",
  marginBottom: "-0.75rem",
  marginLeft: "-0.625rem",
  marginRight: "-0.625rem",
});
export const cardImg = style({
  borderBottomLeftRadius: "calc(0.25rem-1px)",
  borderBottomRightRadius: "calc(0.25rem-1px)",
  borderTopLeftRadius: "calc(0.25rem-1px)",
  borderTopRightRadius: "calc(0.25rem-1px)",
  flexShrink: "0",
  msFlexNegative: "0",
  width: "100%",
});
export const cardImgBottom = style({
  borderBottomLeftRadius: "calc(0.25rem-1px)",
  borderBottomRightRadius: "calc(0.25rem-1px)",
  flexShrink: "0",
  msFlexNegative: "0",
  width: "100%",
});
export const cardImgOverlay = style({
  borderRadius: "calc(0.25rem-1px)",
  bottom: "0",
  left: "0",
  padding: "1.25rem",
  position: "absolute",
  right: "0",
  top: "0",
});
export const cardImgTop = style({
  borderTopLeftRadius: "calc(0.25rem-1px)",
  borderTopRightRadius: "calc(0.25rem-1px)",
  flexShrink: "0",
  msFlexNegative: "0",
  width: "100%",
});
export const cardLink = style({
  marginLeft: "1.25rem",
  ":hover": {
    textDecoration: "none",
  },
});
export const cardSubtitle = style({
  marginBottom: "0",
  marginTop: "-0.375rem",
});
export const cardText = style({
  ":last-child": {
    marginBottom: "0",
  },
});
export const cardTitle = style({
  marginBottom: "0.75rem",
});
export const carousel = style({
  msTouchAction: "pan-y",
  position: "relative",
  touchAction: "pan-y",
});
export const carouselCaption = style({
  bottom: "20px",
  color: "fff",
  left: "15%",
  paddingBottom: "20px",
  paddingTop: "20px",
  position: "absolute",
  right: "15%",
  textAlign: "center",
  zIndex: "10",
});
export const carouselControlNext = style({
  alignItems: "center",
  background: "none",
  border: "0",
  bottom: "0",
  color: "fff",
  display: "flex",
  justifyContent: "center",
  msFlexAlign: "center",
  msFlexPack: "center",
  opacity: "0.5",
  padding: "0",
  position: "absolute",
  right: "0",
  textAlign: "center",
  top: "0",
  transition: "opacity 0.15s ease",
  width: "15%",
  zIndex: "1",
  ":focus": {
    color: "fff",
    opacity: "0.9",
    outline: "0",
    textDecoration: "none",
  },
  ":hover": {
    color: "fff",
    opacity: "0.9",
    outline: "0",
    textDecoration: "none",
  },
  "@media": {
    "(prefers-reduced-motion: reduce)": {
      transition: "none",
    },
  },
});
export const carouselControlNextIcon = style({
  background: "50% / 100% 100% no-repeat",
  backgroundImage:
    "url(data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M2.75 0l-1.5 1.5L3.75 4l-2.5 2.5L2.75 8l4-4-4-4z'/%3e%3c/svg%3e)",
  display: "inline-block",
  height: "20px",
  width: "20px",
});
export const carouselControlPrev = style({
  alignItems: "center",
  background: "none",
  border: "0",
  bottom: "0",
  color: "fff",
  display: "flex",
  justifyContent: "center",
  left: "0",
  msFlexAlign: "center",
  msFlexPack: "center",
  opacity: "0.5",
  padding: "0",
  position: "absolute",
  textAlign: "center",
  top: "0",
  transition: "opacity 0.15s ease",
  width: "15%",
  zIndex: "1",
  ":focus": {
    color: "fff",
    opacity: "0.9",
    outline: "0",
    textDecoration: "none",
  },
  ":hover": {
    color: "fff",
    opacity: "0.9",
    outline: "0",
    textDecoration: "none",
  },
  "@media": {
    "(prefers-reduced-motion: reduce)": {
      transition: "none",
    },
  },
});
export const carouselControlPrevIcon = style({
  background: "50% / 100% 100% no-repeat",
  backgroundImage:
    "url(data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M5.25 0l-4 4 4 4 1.5-1.5L4.25 4l2.5-2.5L5.25 0z'/%3e%3c/svg%3e)",
  display: "inline-block",
  height: "20px",
  width: "20px",
});
export const carouselFade = style({
  WebkitTransform: "none",
  opacity: "0",
  transform: "none",
  transition: "opacity 0s 0.6s",
  transitionProperty: "opacity",
  zIndex: "0",
  "@media": {
    "(prefers-reduced-motion: reduce)": {
      transition: "none",
    },
  },
});
export const carouselIndicators = style({
  bottom: "0",
  display: "flex",
  justifyContent: "center",
  left: "0",
  listStyle: "none",
  marginLeft: "15%",
  marginRight: "15%",
  msFlexPack: "center",
  opacity: "1",
  paddingLeft: "0",
  position: "absolute",
  right: "0",
  zIndex: "15",
});
export const carouselInner = style({
  overflow: "hidden",
  position: "relative",
  width: "100%",
  "::after": {
    clear: "both",
    content: "",
    display: "block",
  },
});
export const carouselItem = style({
  WebkitBackfaceVisibility: "hidden",
  backfaceVisibility: "hidden",
  display: "block",
  float: "left",
  marginRight: "-100%",
  position: "relative",
  transition: "transform 0.6s ease-in-out , -webkit-transform 0.6s ease-in-out",
  width: "100%",
  "@media": {
    "(prefers-reduced-motion: reduce)": {
      transition: "none",
    },
  },
});
export const carouselItemNext = style({
  display: "block",
  selectors: {
    "&:not": {
      WebkitTransform: "translateX(100%)",
      transform: "translateX(100%)",
    },
  },
});
export const carouselItemPrev = style({
  display: "block",
  selectors: {
    "&:not": {
      WebkitTransform: "translateX(-100%)",
      transform: "translateX(-100%)",
    },
  },
});
export const clearfix = style({
  "::after": {
    clear: "both",
    content: "",
    display: "block",
  },
});
export const close = style({
  color: "000",
  float: "right",
  fontSize: "1.5rem",
  fontWeight: "700",
  lineHeight: "1",
  opacity: "0.5",
  textShadow: "0 1px 0 fff",
  ":hover": {
    color: "000",
    textDecoration: "none",
  },
  selectors: {
    "&:not(:disabled):not:focus": {
      opacity: "0.75",
    },
    "&:not(:disabled):not:hover": {
      opacity: "0.75",
    },
  },
});
export const col = style({
  flexBasis: "0",
  flexGrow: "1",
  maxWidth: "100%",
  msFlexPositive: "1",
  msFlexPreferredSize: "0",
  paddingLeft: "15px",
  paddingRight: "15px",
  position: "relative",
  width: "100%",
});
export const col1 = style({
  flex: "0 0 8.333333%",
  maxWidth: "8.333333%",
  msFlex: "0 0 8.333333%",
  paddingLeft: "15px",
  paddingRight: "15px",
  position: "relative",
  width: "100%",
});
export const col10 = style({
  flex: "0 0 83.333333%",
  maxWidth: "83.333333%",
  msFlex: "0 0 83.333333%",
  paddingLeft: "15px",
  paddingRight: "15px",
  position: "relative",
  width: "100%",
});
export const col11 = style({
  flex: "0 0 91.666667%",
  maxWidth: "91.666667%",
  msFlex: "0 0 91.666667%",
  paddingLeft: "15px",
  paddingRight: "15px",
  position: "relative",
  width: "100%",
});
export const col12 = style({
  flex: "0 0 100%",
  maxWidth: "100%",
  msFlex: "0 0 100%",
  paddingLeft: "15px",
  paddingRight: "15px",
  position: "relative",
  width: "100%",
});
export const col2 = style({
  flex: "0 0 16.666667%",
  maxWidth: "16.666667%",
  msFlex: "0 0 16.666667%",
  paddingLeft: "15px",
  paddingRight: "15px",
  position: "relative",
  width: "100%",
});
export const col3 = style({
  flex: "0 0 25%",
  maxWidth: "25%",
  msFlex: "0 0 25%",
  paddingLeft: "15px",
  paddingRight: "15px",
  position: "relative",
  width: "100%",
});
export const col4 = style({
  flex: "0 0 33.333333%",
  maxWidth: "33.333333%",
  msFlex: "0 0 33.333333%",
  paddingLeft: "15px",
  paddingRight: "15px",
  position: "relative",
  width: "100%",
});
export const col5 = style({
  flex: "0 0 41.666667%",
  maxWidth: "41.666667%",
  msFlex: "0 0 41.666667%",
  paddingLeft: "15px",
  paddingRight: "15px",
  position: "relative",
  width: "100%",
});
export const col6 = style({
  flex: "0 0 50%",
  maxWidth: "50%",
  msFlex: "0 0 50%",
  paddingLeft: "15px",
  paddingRight: "15px",
  position: "relative",
  width: "100%",
});
export const col7 = style({
  flex: "0 0 58.333333%",
  maxWidth: "58.333333%",
  msFlex: "0 0 58.333333%",
  paddingLeft: "15px",
  paddingRight: "15px",
  position: "relative",
  width: "100%",
});
export const col8 = style({
  flex: "0 0 66.666667%",
  maxWidth: "66.666667%",
  msFlex: "0 0 66.666667%",
  paddingLeft: "15px",
  paddingRight: "15px",
  position: "relative",
  width: "100%",
});
export const col9 = style({
  flex: "0 0 75%",
  maxWidth: "75%",
  msFlex: "0 0 75%",
  paddingLeft: "15px",
  paddingRight: "15px",
  position: "relative",
  width: "100%",
});
export const colAuto = style({
  flex: "0 0 auto",
  maxWidth: "100%",
  msFlex: "0 0 auto",
  paddingLeft: "15px",
  paddingRight: "15px",
  position: "relative",
  width: "auto",
});
export const colFormLabel = style({
  fontSize: "inherit",
  lineHeight: "1.5",
  marginBottom: "0",
  paddingBottom: "calc(0.375rem+1px)",
  paddingTop: "calc(0.375rem+1px)",
});
export const colFormLabelLg = style({
  fontSize: "1.25rem",
  lineHeight: "1.5",
  paddingBottom: "calc(0.5rem+1px)",
  paddingTop: "calc(0.5rem+1px)",
});
export const colFormLabelSm = style({
  fontSize: "0.875rem",
  lineHeight: "1.5",
  paddingBottom: "calc(0.25rem+1px)",
  paddingTop: "calc(0.25rem+1px)",
});
export const colLg = style({
  paddingLeft: "15px",
  paddingRight: "15px",
  position: "relative",
  width: "100%",
  "@media": {
    "(min-width: 992px)": {
      flexBasis: "0",
      flexGrow: "1",
      maxWidth: "100%",
      msFlexPositive: "1",
      msFlexPreferredSize: "0",
    },
  },
});
export const colLg1 = style({
  paddingLeft: "15px",
  paddingRight: "15px",
  position: "relative",
  width: "100%",
  "@media": {
    "(min-width: 992px)": {
      flex: "0 0 8.333333%",
      maxWidth: "8.333333%",
      msFlex: "0 0 8.333333%",
    },
  },
});
export const colLg10 = style({
  paddingLeft: "15px",
  paddingRight: "15px",
  position: "relative",
  width: "100%",
  "@media": {
    "(min-width: 992px)": {
      flex: "0 0 83.333333%",
      maxWidth: "83.333333%",
      msFlex: "0 0 83.333333%",
    },
  },
});
export const colLg11 = style({
  paddingLeft: "15px",
  paddingRight: "15px",
  position: "relative",
  width: "100%",
  "@media": {
    "(min-width: 992px)": {
      flex: "0 0 91.666667%",
      maxWidth: "91.666667%",
      msFlex: "0 0 91.666667%",
    },
  },
});
export const colLg12 = style({
  paddingLeft: "15px",
  paddingRight: "15px",
  position: "relative",
  width: "100%",
  "@media": {
    "(min-width: 992px)": {
      flex: "0 0 100%",
      maxWidth: "100%",
      msFlex: "0 0 100%",
    },
  },
});
export const colLg2 = style({
  paddingLeft: "15px",
  paddingRight: "15px",
  position: "relative",
  width: "100%",
  "@media": {
    "(min-width: 992px)": {
      flex: "0 0 16.666667%",
      maxWidth: "16.666667%",
      msFlex: "0 0 16.666667%",
    },
  },
});
export const colLg3 = style({
  paddingLeft: "15px",
  paddingRight: "15px",
  position: "relative",
  width: "100%",
  "@media": {
    "(min-width: 992px)": {
      flex: "0 0 25%",
      maxWidth: "25%",
      msFlex: "0 0 25%",
    },
  },
});
export const colLg4 = style({
  paddingLeft: "15px",
  paddingRight: "15px",
  position: "relative",
  width: "100%",
  "@media": {
    "(min-width: 992px)": {
      flex: "0 0 33.333333%",
      maxWidth: "33.333333%",
      msFlex: "0 0 33.333333%",
    },
  },
});
export const colLg5 = style({
  paddingLeft: "15px",
  paddingRight: "15px",
  position: "relative",
  width: "100%",
  "@media": {
    "(min-width: 992px)": {
      flex: "0 0 41.666667%",
      maxWidth: "41.666667%",
      msFlex: "0 0 41.666667%",
    },
  },
});
export const colLg6 = style({
  paddingLeft: "15px",
  paddingRight: "15px",
  position: "relative",
  width: "100%",
  "@media": {
    "(min-width: 992px)": {
      flex: "0 0 50%",
      maxWidth: "50%",
      msFlex: "0 0 50%",
    },
  },
});
export const colLg7 = style({
  paddingLeft: "15px",
  paddingRight: "15px",
  position: "relative",
  width: "100%",
  "@media": {
    "(min-width: 992px)": {
      flex: "0 0 58.333333%",
      maxWidth: "58.333333%",
      msFlex: "0 0 58.333333%",
    },
  },
});
export const colLg8 = style({
  paddingLeft: "15px",
  paddingRight: "15px",
  position: "relative",
  width: "100%",
  "@media": {
    "(min-width: 992px)": {
      flex: "0 0 66.666667%",
      maxWidth: "66.666667%",
      msFlex: "0 0 66.666667%",
    },
  },
});
export const colLg9 = style({
  paddingLeft: "15px",
  paddingRight: "15px",
  position: "relative",
  width: "100%",
  "@media": {
    "(min-width: 992px)": {
      flex: "0 0 75%",
      maxWidth: "75%",
      msFlex: "0 0 75%",
    },
  },
});
export const colLgAuto = style({
  paddingLeft: "15px",
  paddingRight: "15px",
  position: "relative",
  width: "100%",
  "@media": {
    "(min-width: 992px)": {
      flex: "0 0 auto",
      maxWidth: "100%",
      msFlex: "0 0 auto",
      width: "auto",
    },
  },
});
export const colMd = style({
  paddingLeft: "15px",
  paddingRight: "15px",
  position: "relative",
  width: "100%",
  "@media": {
    "(min-width: 768px)": {
      flexBasis: "0",
      flexGrow: "1",
      maxWidth: "100%",
      msFlexPositive: "1",
      msFlexPreferredSize: "0",
    },
  },
});
export const colMd1 = style({
  paddingLeft: "15px",
  paddingRight: "15px",
  position: "relative",
  width: "100%",
  "@media": {
    "(min-width: 768px)": {
      flex: "0 0 8.333333%",
      maxWidth: "8.333333%",
      msFlex: "0 0 8.333333%",
    },
  },
});
export const colMd10 = style({
  paddingLeft: "15px",
  paddingRight: "15px",
  position: "relative",
  width: "100%",
  "@media": {
    "(min-width: 768px)": {
      flex: "0 0 83.333333%",
      maxWidth: "83.333333%",
      msFlex: "0 0 83.333333%",
    },
  },
});
export const colMd11 = style({
  paddingLeft: "15px",
  paddingRight: "15px",
  position: "relative",
  width: "100%",
  "@media": {
    "(min-width: 768px)": {
      flex: "0 0 91.666667%",
      maxWidth: "91.666667%",
      msFlex: "0 0 91.666667%",
    },
  },
});
export const colMd12 = style({
  paddingLeft: "15px",
  paddingRight: "15px",
  position: "relative",
  width: "100%",
  "@media": {
    "(min-width: 768px)": {
      flex: "0 0 100%",
      maxWidth: "100%",
      msFlex: "0 0 100%",
    },
  },
});
export const colMd2 = style({
  paddingLeft: "15px",
  paddingRight: "15px",
  position: "relative",
  width: "100%",
  "@media": {
    "(min-width: 768px)": {
      flex: "0 0 16.666667%",
      maxWidth: "16.666667%",
      msFlex: "0 0 16.666667%",
    },
  },
});
export const colMd3 = style({
  paddingLeft: "15px",
  paddingRight: "15px",
  position: "relative",
  width: "100%",
  "@media": {
    "(min-width: 768px)": {
      flex: "0 0 25%",
      maxWidth: "25%",
      msFlex: "0 0 25%",
    },
  },
});
export const colMd4 = style({
  paddingLeft: "15px",
  paddingRight: "15px",
  position: "relative",
  width: "100%",
  "@media": {
    "(min-width: 768px)": {
      flex: "0 0 33.333333%",
      maxWidth: "33.333333%",
      msFlex: "0 0 33.333333%",
    },
  },
});
export const colMd5 = style({
  paddingLeft: "15px",
  paddingRight: "15px",
  position: "relative",
  width: "100%",
  "@media": {
    "(min-width: 768px)": {
      flex: "0 0 41.666667%",
      maxWidth: "41.666667%",
      msFlex: "0 0 41.666667%",
    },
  },
});
export const colMd6 = style({
  paddingLeft: "15px",
  paddingRight: "15px",
  position: "relative",
  width: "100%",
  "@media": {
    "(min-width: 768px)": {
      flex: "0 0 50%",
      maxWidth: "50%",
      msFlex: "0 0 50%",
    },
  },
});
export const colMd7 = style({
  paddingLeft: "15px",
  paddingRight: "15px",
  position: "relative",
  width: "100%",
  "@media": {
    "(min-width: 768px)": {
      flex: "0 0 58.333333%",
      maxWidth: "58.333333%",
      msFlex: "0 0 58.333333%",
    },
  },
});
export const colMd8 = style({
  paddingLeft: "15px",
  paddingRight: "15px",
  position: "relative",
  width: "100%",
  "@media": {
    "(min-width: 768px)": {
      flex: "0 0 66.666667%",
      maxWidth: "66.666667%",
      msFlex: "0 0 66.666667%",
    },
  },
});
export const colMd9 = style({
  paddingLeft: "15px",
  paddingRight: "15px",
  position: "relative",
  width: "100%",
  "@media": {
    "(min-width: 768px)": {
      flex: "0 0 75%",
      maxWidth: "75%",
      msFlex: "0 0 75%",
    },
  },
});
export const colMdAuto = style({
  paddingLeft: "15px",
  paddingRight: "15px",
  position: "relative",
  width: "100%",
  "@media": {
    "(min-width: 768px)": {
      flex: "0 0 auto",
      maxWidth: "100%",
      msFlex: "0 0 auto",
      width: "auto",
    },
  },
});
export const colSm = style({
  paddingLeft: "15px",
  paddingRight: "15px",
  position: "relative",
  width: "100%",
  "@media": {
    "(min-width: 576px)": {
      flexBasis: "0",
      flexGrow: "1",
      maxWidth: "100%",
      msFlexPositive: "1",
      msFlexPreferredSize: "0",
    },
  },
});
export const colSm1 = style({
  paddingLeft: "15px",
  paddingRight: "15px",
  position: "relative",
  width: "100%",
  "@media": {
    "(min-width: 576px)": {
      flex: "0 0 8.333333%",
      maxWidth: "8.333333%",
      msFlex: "0 0 8.333333%",
    },
  },
});
export const colSm10 = style({
  paddingLeft: "15px",
  paddingRight: "15px",
  position: "relative",
  width: "100%",
  "@media": {
    "(min-width: 576px)": {
      flex: "0 0 83.333333%",
      maxWidth: "83.333333%",
      msFlex: "0 0 83.333333%",
    },
  },
});
export const colSm11 = style({
  paddingLeft: "15px",
  paddingRight: "15px",
  position: "relative",
  width: "100%",
  "@media": {
    "(min-width: 576px)": {
      flex: "0 0 91.666667%",
      maxWidth: "91.666667%",
      msFlex: "0 0 91.666667%",
    },
  },
});
export const colSm12 = style({
  paddingLeft: "15px",
  paddingRight: "15px",
  position: "relative",
  width: "100%",
  "@media": {
    "(min-width: 576px)": {
      flex: "0 0 100%",
      maxWidth: "100%",
      msFlex: "0 0 100%",
    },
  },
});
export const colSm2 = style({
  paddingLeft: "15px",
  paddingRight: "15px",
  position: "relative",
  width: "100%",
  "@media": {
    "(min-width: 576px)": {
      flex: "0 0 16.666667%",
      maxWidth: "16.666667%",
      msFlex: "0 0 16.666667%",
    },
  },
});
export const colSm3 = style({
  paddingLeft: "15px",
  paddingRight: "15px",
  position: "relative",
  width: "100%",
  "@media": {
    "(min-width: 576px)": {
      flex: "0 0 25%",
      maxWidth: "25%",
      msFlex: "0 0 25%",
    },
  },
});
export const colSm4 = style({
  paddingLeft: "15px",
  paddingRight: "15px",
  position: "relative",
  width: "100%",
  "@media": {
    "(min-width: 576px)": {
      flex: "0 0 33.333333%",
      maxWidth: "33.333333%",
      msFlex: "0 0 33.333333%",
    },
  },
});
export const colSm5 = style({
  paddingLeft: "15px",
  paddingRight: "15px",
  position: "relative",
  width: "100%",
  "@media": {
    "(min-width: 576px)": {
      flex: "0 0 41.666667%",
      maxWidth: "41.666667%",
      msFlex: "0 0 41.666667%",
    },
  },
});
export const colSm6 = style({
  paddingLeft: "15px",
  paddingRight: "15px",
  position: "relative",
  width: "100%",
  "@media": {
    "(min-width: 576px)": {
      flex: "0 0 50%",
      maxWidth: "50%",
      msFlex: "0 0 50%",
    },
  },
});
export const colSm7 = style({
  paddingLeft: "15px",
  paddingRight: "15px",
  position: "relative",
  width: "100%",
  "@media": {
    "(min-width: 576px)": {
      flex: "0 0 58.333333%",
      maxWidth: "58.333333%",
      msFlex: "0 0 58.333333%",
    },
  },
});
export const colSm8 = style({
  paddingLeft: "15px",
  paddingRight: "15px",
  position: "relative",
  width: "100%",
  "@media": {
    "(min-width: 576px)": {
      flex: "0 0 66.666667%",
      maxWidth: "66.666667%",
      msFlex: "0 0 66.666667%",
    },
  },
});
export const colSm9 = style({
  paddingLeft: "15px",
  paddingRight: "15px",
  position: "relative",
  width: "100%",
  "@media": {
    "(min-width: 576px)": {
      flex: "0 0 75%",
      maxWidth: "75%",
      msFlex: "0 0 75%",
    },
  },
});
export const colSmAuto = style({
  paddingLeft: "15px",
  paddingRight: "15px",
  position: "relative",
  width: "100%",
  "@media": {
    "(min-width: 576px)": {
      flex: "0 0 auto",
      maxWidth: "100%",
      msFlex: "0 0 auto",
      width: "auto",
    },
  },
});
export const colXl = style({
  paddingLeft: "15px",
  paddingRight: "15px",
  position: "relative",
  width: "100%",
  "@media": {
    "(min-width: 1200px)": {
      flexBasis: "0",
      flexGrow: "1",
      maxWidth: "100%",
      msFlexPositive: "1",
      msFlexPreferredSize: "0",
    },
  },
});
export const colXl1 = style({
  paddingLeft: "15px",
  paddingRight: "15px",
  position: "relative",
  width: "100%",
  "@media": {
    "(min-width: 1200px)": {
      flex: "0 0 8.333333%",
      maxWidth: "8.333333%",
      msFlex: "0 0 8.333333%",
    },
  },
});
export const colXl10 = style({
  paddingLeft: "15px",
  paddingRight: "15px",
  position: "relative",
  width: "100%",
  "@media": {
    "(min-width: 1200px)": {
      flex: "0 0 83.333333%",
      maxWidth: "83.333333%",
      msFlex: "0 0 83.333333%",
    },
  },
});
export const colXl11 = style({
  paddingLeft: "15px",
  paddingRight: "15px",
  position: "relative",
  width: "100%",
  "@media": {
    "(min-width: 1200px)": {
      flex: "0 0 91.666667%",
      maxWidth: "91.666667%",
      msFlex: "0 0 91.666667%",
    },
  },
});
export const colXl12 = style({
  paddingLeft: "15px",
  paddingRight: "15px",
  position: "relative",
  width: "100%",
  "@media": {
    "(min-width: 1200px)": {
      flex: "0 0 100%",
      maxWidth: "100%",
      msFlex: "0 0 100%",
    },
  },
});
export const colXl2 = style({
  paddingLeft: "15px",
  paddingRight: "15px",
  position: "relative",
  width: "100%",
  "@media": {
    "(min-width: 1200px)": {
      flex: "0 0 16.666667%",
      maxWidth: "16.666667%",
      msFlex: "0 0 16.666667%",
    },
  },
});
export const colXl3 = style({
  paddingLeft: "15px",
  paddingRight: "15px",
  position: "relative",
  width: "100%",
  "@media": {
    "(min-width: 1200px)": {
      flex: "0 0 25%",
      maxWidth: "25%",
      msFlex: "0 0 25%",
    },
  },
});
export const colXl4 = style({
  paddingLeft: "15px",
  paddingRight: "15px",
  position: "relative",
  width: "100%",
  "@media": {
    "(min-width: 1200px)": {
      flex: "0 0 33.333333%",
      maxWidth: "33.333333%",
      msFlex: "0 0 33.333333%",
    },
  },
});
export const colXl5 = style({
  paddingLeft: "15px",
  paddingRight: "15px",
  position: "relative",
  width: "100%",
  "@media": {
    "(min-width: 1200px)": {
      flex: "0 0 41.666667%",
      maxWidth: "41.666667%",
      msFlex: "0 0 41.666667%",
    },
  },
});
export const colXl6 = style({
  paddingLeft: "15px",
  paddingRight: "15px",
  position: "relative",
  width: "100%",
  "@media": {
    "(min-width: 1200px)": {
      flex: "0 0 50%",
      maxWidth: "50%",
      msFlex: "0 0 50%",
    },
  },
});
export const colXl7 = style({
  paddingLeft: "15px",
  paddingRight: "15px",
  position: "relative",
  width: "100%",
  "@media": {
    "(min-width: 1200px)": {
      flex: "0 0 58.333333%",
      maxWidth: "58.333333%",
      msFlex: "0 0 58.333333%",
    },
  },
});
export const colXl8 = style({
  paddingLeft: "15px",
  paddingRight: "15px",
  position: "relative",
  width: "100%",
  "@media": {
    "(min-width: 1200px)": {
      flex: "0 0 66.666667%",
      maxWidth: "66.666667%",
      msFlex: "0 0 66.666667%",
    },
  },
});
export const colXl9 = style({
  paddingLeft: "15px",
  paddingRight: "15px",
  position: "relative",
  width: "100%",
  "@media": {
    "(min-width: 1200px)": {
      flex: "0 0 75%",
      maxWidth: "75%",
      msFlex: "0 0 75%",
    },
  },
});
export const colXlAuto = style({
  paddingLeft: "15px",
  paddingRight: "15px",
  position: "relative",
  width: "100%",
  "@media": {
    "(min-width: 1200px)": {
      flex: "0 0 auto",
      maxWidth: "100%",
      msFlex: "0 0 auto",
      width: "auto",
    },
  },
});
export const collapse = style({
  selectors: {
    "&:not": {
      display: "none",
    },
  },
});
export const collapsing = style({
  height: "0",
  overflow: "hidden",
  position: "relative",
  transition: "height 0.35s ease",
  "@media": {
    "(prefers-reduced-motion: reduce)": {
      transition: "none",
    },
  },
});
export const container = style({
  marginLeft: "auto",
  marginRight: "auto",
  paddingLeft: "15px",
  paddingRight: "15px",
  width: "100%",
  "@media": {
    "(min-width: 576px)": {
      maxWidth: "1140px",
      minWidth: "992px",
    },
  },
});
export const containerFluid = style({
  marginLeft: "auto",
  marginRight: "auto",
  paddingLeft: "15px",
  paddingRight: "15px",
  width: "100%",
});
export const containerLg = style({
  marginLeft: "auto",
  marginRight: "auto",
  paddingLeft: "15px",
  paddingRight: "15px",
  width: "100%",
  "@media": {
    "(min-width: 992px)": {
      maxWidth: "1140px",
    },
  },
});
export const containerMd = style({
  marginLeft: "auto",
  marginRight: "auto",
  paddingLeft: "15px",
  paddingRight: "15px",
  width: "100%",
  "@media": {
    "(min-width: 768px)": {
      maxWidth: "1140px",
    },
  },
});
export const containerSm = style({
  marginLeft: "auto",
  marginRight: "auto",
  paddingLeft: "15px",
  paddingRight: "15px",
  width: "100%",
  "@media": {
    "(min-width: 576px)": {
      maxWidth: "1140px",
    },
  },
});
export const containerXl = style({
  marginLeft: "auto",
  marginRight: "auto",
  paddingLeft: "15px",
  paddingRight: "15px",
  width: "100%",
  "@media": {
    "(min-width: 1200px)": {
      maxWidth: "1140px",
    },
  },
});
export const customCheckbox = style({
  "::before": {
    borderRadius: "0.25rem",
  },
  selectors: {
    "&:checked::after": {
      backgroundImage:
        "url(data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26l2.974 2.99L8 2.193z'/%3e%3c/svg%3e)",
    },
    "&:disabled:checked::before": {
      backgroundColor: "rgba(0,123,255,0.5)",
    },
    "&:disabled:indeterminate::before": {
      backgroundColor: "rgba(0,123,255,0.5)",
    },
    "&:indeterminate::after": {
      backgroundImage:
        "url(data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3e%3cpath stroke='%23fff' d='M0 2h4'/%3e%3c/svg%3e)",
    },
    "&:indeterminate::before": {
      backgroundColor: "007bff",
      borderColor: "007bff",
    },
  },
});
export const customControl = style({
  WebkitPrintColorAdjust: "exact",
  colorAdjust: "exact",
  display: "block",
  minHeight: "1.5rem",
  paddingLeft: "1.5rem",
  position: "relative",
  zIndex: "1",
});
export const customControlInline = style({
  display: "inline-flex",
  marginRight: "1rem",
});
export const customControlInput = style({
  color: "dc3545",
  height: "1.25rem",
  left: "0",
  opacity: "0",
  position: "absolute",
  width: "1rem",
  zIndex: "-1",
  "::before": {
    borderColor: "dc3545",
  },
  ":disabled": {
    color: "6c757d",
  },
  selectors: {
    "&:checked::before": {
      backgroundColor: "007bff",
      borderColor: "007bff",
      color: "fff",
    },
    "&:disabled::before": {
      backgroundColor: "e9ecef",
    },
    "&:focus::before": {
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,0.25)",
    },
    "&:focus:not(:checked)::before": {
      borderColor: "80bdff",
    },
    "&:not(:disabled):active::before": {
      backgroundColor: "b3d7ff",
      borderColor: "b3d7ff",
      color: "fff",
    },
    "&[disabled]": {
      color: "6c757d",
    },
    "&[disabled]::before": {
      backgroundColor: "e9ecef",
    },
  },
});
export const customControlLabel = style({
  marginBottom: "0",
  position: "relative",
  verticalAlign: "top",
  "::after": {
    background: "50% / 50% 50% no-repeat",
    content: "",
    display: "block",
    height: "1rem",
    left: "-1.5rem",
    position: "absolute",
    top: "0.25rem",
    width: "1rem",
  },
  "::before": {
    transition: "none",
  },
});
export const customFile = style({
  display: "inline-block",
  height: "calc(1.5em+0.75rem+2px)",
  marginBottom: "0",
  position: "relative",
  width: "100%",
});
export const customFileInput = style({
  borderColor: "dc3545",
  height: "calc(1.5em+0.75rem+2px)",
  margin: "0",
  opacity: "0",
  overflow: "hidden",
  position: "relative",
  width: "100%",
  zIndex: "2",
  ":disabled": {
    backgroundColor: "e9ecef",
  },
  ":focus": {
    borderColor: "80bdff",
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,0.25)",
  },
  selectors: {
    "&:lang(en)::after": {
      content: "Browse",
    },
    "&[data-browse]::after": {
      content: "attr(data-browse)",
    },
    "&[disabled]": {
      backgroundColor: "e9ecef",
    },
  },
});
export const customFileLabel = style({
  backgroundColor: "fff",
  border: "1px solid ced4da",
  borderRadius: "0.25rem",
  color: "495057",
  fontWeight: "400",
  height: "calc(1.5em+0.75rem+2px)",
  left: "0",
  lineHeight: "1.5",
  overflow: "hidden",
  padding: "0.375rem 0.75rem",
  position: "absolute",
  right: "0",
  top: "0",
  transition:
    "background-color 0.15s ease-in-out , border-color 0.15s ease-in-out , box-shadow 0.15s ease-in-out",
  zIndex: "1",
  "::after": {
    backgroundColor: "e9ecef",
    borderLeft: "inherit",
    borderRadius: "0 0.25rem 0.25rem 0",
    bottom: "0",
    color: "495057",
    content: "Browse",
    display: "block",
    height: "calc(1.5em+0.75rem)",
    lineHeight: "1.5",
    padding: "0.375rem 0.75rem",
    position: "absolute",
    right: "0",
    top: "0",
    zIndex: "3",
  },
  "@media": {
    "(prefers-reduced-motion: reduce)": {
      transition: "none",
    },
  },
});
export const customRadio = style({
  "::before": {
    borderRadius: "50%",
  },
  selectors: {
    "&:checked::after": {
      backgroundImage:
        "url(data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e)",
    },
    "&:disabled:checked::before": {
      backgroundColor: "rgba(0,123,255,0.5)",
    },
  },
});
export const customRange = style({
  MozAppearance: "none",
  WebkitAppearance: "none",
  appearance: "none",
  backgroundColor: "transparent",
  height: "1.4rem",
  padding: "0",
  width: "100%",
  "::-moz-range-thumb": {
    MozTransition: "none",
    transition: "none",
  },
  "::-moz-range-track": {
    backgroundColor: "dee2e6",
    borderColor: "transparent",
    borderRadius: "1rem",
    color: "transparent",
    cursor: "pointer",
    height: "0.5rem",
    width: "100%",
  },
  "::-ms-fill-lower": {
    backgroundColor: "dee2e6",
    borderRadius: "1rem",
  },
  "::-ms-fill-upper": {
    backgroundColor: "dee2e6",
    borderRadius: "1rem",
    marginRight: "15px",
  },
  "::-ms-thumb": {
    msTransition: "none",
    transition: "none",
  },
  "::-ms-track": {
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderWidth: "0.5rem",
    color: "transparent",
    cursor: "pointer",
    height: "0.5rem",
    width: "100%",
  },
  "::-webkit-slider-runnable-track": {
    backgroundColor: "dee2e6",
    borderColor: "transparent",
    borderRadius: "1rem",
    color: "transparent",
    cursor: "pointer",
    height: "0.5rem",
    width: "100%",
  },
  "::-webkit-slider-thumb": {
    WebkitTransition: "none",
    transition: "none",
  },
  ":focus": {
    outline: "0",
  },
  selectors: {
    "&::-moz-focus-outer": {
      border: "0",
    },
    "&::-moz-range-thumb:active": {
      backgroundColor: "b3d7ff",
    },
    "&::-ms-thumb:active": {
      backgroundColor: "b3d7ff",
    },
    "&::-webkit-slider-thumb:active": {
      backgroundColor: "b3d7ff",
    },
    "&:disabled::-moz-range-thumb": {
      backgroundColor: "adb5bd",
    },
    "&:disabled::-moz-range-track": {
      cursor: "default",
    },
    "&:disabled::-ms-thumb": {
      backgroundColor: "adb5bd",
    },
    "&:disabled::-webkit-slider-runnable-track": {
      cursor: "default",
    },
    "&:disabled::-webkit-slider-thumb": {
      backgroundColor: "adb5bd",
    },
    "&:focus::-moz-range-thumb": {
      boxShadow: "0 0 0 1px fff , 0 0 0 0.2rem rgba(0,123,255,0.25)",
    },
    "&:focus::-ms-thumb": {
      boxShadow: "0 0 0 1px fff , 0 0 0 0.2rem rgba(0,123,255,0.25)",
    },
    "&:focus::-webkit-slider-thumb": {
      boxShadow: "0 0 0 1px fff , 0 0 0 0.2rem rgba(0,123,255,0.25)",
    },
  },
});
export const customSelect = style({
  MozAppearance: "none",
  WebkitAppearance: "none",
  appearance: "none",
  background:
    "fff url(data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e) right 0.75rem center / 8px 10px no-repeat",
  border: "1px solid ced4da",
  borderColor: "dc3545",
  borderRadius: "0.25rem",
  color: "495057",
  display: "inline-block",
  fontSize: "1rem",
  fontWeight: "400",
  height: "calc(1.5em+0.75rem+2px)",
  lineHeight: "1.5",
  padding: "0.375rem 1.75rem 0.375rem 0.75rem",
  paddingRight: "calc(0.75em+2.3125rem)",
  transition:
    "background-color 0.15s ease-in-out , border-color 0.15s ease-in-out , box-shadow 0.15s ease-in-out",
  verticalAlign: "middle",
  width: "100%",
  ":disabled": {
    backgroundColor: "e9ecef",
    color: "6c757d",
  },
  ":focus": {
    borderColor: "80bdff",
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,0.25)",
    outline: "0",
  },
  "@media": {
    "(prefers-reduced-motion: reduce)": {
      transition: "none",
    },
  },
  selectors: {
    "&:-moz-focusring": {
      color: "transparent",
      textShadow: "0 0 0 495057",
    },
    "&::-ms-expand": {
      display: "none",
    },
    "&:focus::-ms-value": {
      backgroundColor: "fff",
      color: "495057",
    },
    "&[multiple]": {
      backgroundImage: "none",
      height: "auto",
      paddingRight: "0.75rem",
    },
    "&[size]:not([size='1'])": {
      backgroundImage: "none",
      height: "auto",
      paddingRight: "0.75rem",
    },
  },
});
export const customSelectLg = style({
  fontSize: "1.25rem",
  height: "calc(1.5em+1rem+2px)",
  paddingBottom: "0.5rem",
  paddingLeft: "1rem",
  paddingTop: "0.5rem",
});
export const customSelectSm = style({
  fontSize: "0.875rem",
  height: "calc(1.5em+0.5rem+2px)",
  paddingBottom: "0.25rem",
  paddingLeft: "0.5rem",
  paddingTop: "0.25rem",
});
export const customSwitch = style({
  paddingLeft: "2.25rem",
  "::after": {
    transition: "none",
  },
  "::before": {
    borderRadius: "0.5rem",
    left: "-2.25rem",
    pointerEvents: "all",
    width: "1.75rem",
  },
  selectors: {
    "&:checked::after": {
      WebkitTransform: "translateX(0.75rem)",
      backgroundColor: "fff",
      transform: "translateX(0.75rem)",
    },
    "&:disabled:checked::before": {
      backgroundColor: "rgba(0,123,255,0.5)",
    },
  },
});
export const dBlock = style({
  display: "block",
});
export const dFlex = style({
  display: "flex",
});
export const dInline = style({
  display: "inline",
});
export const dInlineBlock = style({
  display: "inline-block",
});
export const dInlineFlex = style({
  display: "inline-flex",
});
export const dLgBlock = style({
  "@media": {
    "(min-width: 992px)": {
      display: "block",
    },
  },
});
export const dLgFlex = style({
  "@media": {
    "(min-width: 992px)": {
      display: "flex",
    },
  },
});
export const dLgInline = style({
  "@media": {
    "(min-width: 992px)": {
      display: "inline",
    },
  },
});
export const dLgInlineBlock = style({
  "@media": {
    "(min-width: 992px)": {
      display: "inline-block",
    },
  },
});
export const dLgInlineFlex = style({
  "@media": {
    "(min-width: 992px)": {
      display: "inline-flex",
    },
  },
});
export const dLgNone = style({
  "@media": {
    "(min-width: 992px)": {
      display: "none",
    },
  },
});
export const dLgTable = style({
  "@media": {
    "(min-width: 992px)": {
      display: "table",
    },
  },
});
export const dLgTableCell = style({
  "@media": {
    "(min-width: 992px)": {
      display: "table-cell",
    },
  },
});
export const dLgTableRow = style({
  "@media": {
    "(min-width: 992px)": {
      display: "table-row",
    },
  },
});
export const dMdBlock = style({
  "@media": {
    "(min-width: 768px)": {
      display: "block",
    },
  },
});
export const dMdFlex = style({
  "@media": {
    "(min-width: 768px)": {
      display: "flex",
    },
  },
});
export const dMdInline = style({
  "@media": {
    "(min-width: 768px)": {
      display: "inline",
    },
  },
});
export const dMdInlineBlock = style({
  "@media": {
    "(min-width: 768px)": {
      display: "inline-block",
    },
  },
});
export const dMdInlineFlex = style({
  "@media": {
    "(min-width: 768px)": {
      display: "inline-flex",
    },
  },
});
export const dMdNone = style({
  "@media": {
    "(min-width: 768px)": {
      display: "none",
    },
  },
});
export const dMdTable = style({
  "@media": {
    "(min-width: 768px)": {
      display: "table",
    },
  },
});
export const dMdTableCell = style({
  "@media": {
    "(min-width: 768px)": {
      display: "table-cell",
    },
  },
});
export const dMdTableRow = style({
  "@media": {
    "(min-width: 768px)": {
      display: "table-row",
    },
  },
});
export const dNone = style({
  display: "none",
});
export const dPrintBlock = style({
  "@media": {
    print: {
      display: "block",
    },
  },
});
export const dPrintFlex = style({
  "@media": {
    print: {
      display: "flex",
    },
  },
});
export const dPrintInline = style({
  "@media": {
    print: {
      display: "inline",
    },
  },
});
export const dPrintInlineBlock = style({
  "@media": {
    print: {
      display: "inline-block",
    },
  },
});
export const dPrintInlineFlex = style({
  "@media": {
    print: {
      display: "inline-flex",
    },
  },
});
export const dPrintNone = style({
  "@media": {
    print: {
      display: "none",
    },
  },
});
export const dPrintTable = style({
  "@media": {
    print: {
      display: "table",
    },
  },
});
export const dPrintTableCell = style({
  "@media": {
    print: {
      display: "table-cell",
    },
  },
});
export const dPrintTableRow = style({
  "@media": {
    print: {
      display: "table-row",
    },
  },
});
export const dSmBlock = style({
  "@media": {
    "(min-width: 576px)": {
      display: "block",
    },
  },
});
export const dSmFlex = style({
  "@media": {
    "(min-width: 576px)": {
      display: "flex",
    },
  },
});
export const dSmInline = style({
  "@media": {
    "(min-width: 576px)": {
      display: "inline",
    },
  },
});
export const dSmInlineBlock = style({
  "@media": {
    "(min-width: 576px)": {
      display: "inline-block",
    },
  },
});
export const dSmInlineFlex = style({
  "@media": {
    "(min-width: 576px)": {
      display: "inline-flex",
    },
  },
});
export const dSmNone = style({
  "@media": {
    "(min-width: 576px)": {
      display: "none",
    },
  },
});
export const dSmTable = style({
  "@media": {
    "(min-width: 576px)": {
      display: "table",
    },
  },
});
export const dSmTableCell = style({
  "@media": {
    "(min-width: 576px)": {
      display: "table-cell",
    },
  },
});
export const dSmTableRow = style({
  "@media": {
    "(min-width: 576px)": {
      display: "table-row",
    },
  },
});
export const dTable = style({
  display: "table",
});
export const dTableCell = style({
  display: "table-cell",
});
export const dTableRow = style({
  display: "table-row",
});
export const dXlBlock = style({
  "@media": {
    "(min-width: 1200px)": {
      display: "block",
    },
  },
});
export const dXlFlex = style({
  "@media": {
    "(min-width: 1200px)": {
      display: "flex",
    },
  },
});
export const dXlInline = style({
  "@media": {
    "(min-width: 1200px)": {
      display: "inline",
    },
  },
});
export const dXlInlineBlock = style({
  "@media": {
    "(min-width: 1200px)": {
      display: "inline-block",
    },
  },
});
export const dXlInlineFlex = style({
  "@media": {
    "(min-width: 1200px)": {
      display: "inline-flex",
    },
  },
});
export const dXlNone = style({
  "@media": {
    "(min-width: 1200px)": {
      display: "none",
    },
  },
});
export const dXlTable = style({
  "@media": {
    "(min-width: 1200px)": {
      display: "table",
    },
  },
});
export const dXlTableCell = style({
  "@media": {
    "(min-width: 1200px)": {
      display: "table-cell",
    },
  },
});
export const dXlTableRow = style({
  "@media": {
    "(min-width: 1200px)": {
      display: "table-row",
    },
  },
});
export const display1 = style({
  fontSize: "6rem",
  fontWeight: "300",
  lineHeight: "1.2",
});
export const display2 = style({
  fontSize: "5.5rem",
  fontWeight: "300",
  lineHeight: "1.2",
});
export const display3 = style({
  fontSize: "4.5rem",
  fontWeight: "300",
  lineHeight: "1.2",
});
export const display4 = style({
  fontSize: "3.5rem",
  fontWeight: "300",
  lineHeight: "1.2",
});
export const dropdown = style({
  position: "relative",
});
export const dropdownDivider = style({
  borderTop: "1px solid e9ecef",
  height: "0",
  margin: "0.5rem 0",
  overflow: "hidden",
});
export const dropdownHeader = style({
  color: "6c757d",
  display: "block",
  fontSize: "0.875rem",
  marginBottom: "0",
  padding: "0.5rem 1.5rem",
  whiteSpace: "nowrap",
});
export const dropdownItem = style({
  backgroundColor: "transparent",
  border: "0",
  clear: "both",
  color: "adb5bd",
  display: "block",
  fontWeight: "400",
  padding: "0.25rem 1.5rem",
  pointerEvents: "none",
  textAlign: "inherit",
  textDecoration: "none",
  whiteSpace: "nowrap",
  width: "100%",
  ":active": {
    backgroundColor: "007bff",
    color: "fff",
    textDecoration: "none",
  },
  ":disabled": {
    backgroundColor: "transparent",
    color: "adb5bd",
    pointerEvents: "none",
  },
  ":focus": {
    backgroundColor: "e9ecef",
    color: "16181b",
    textDecoration: "none",
  },
  ":hover": {
    backgroundColor: "e9ecef",
    color: "16181b",
    textDecoration: "none",
  },
});
export const dropdownItemText = style({
  color: "212529",
  display: "block",
  padding: "0.25rem 1.5rem",
});
export const dropdownMenu = style({
  backgroundClip: "padding-box",
  backgroundColor: "fff",
  border: "1px solid rgba(0,0,0,0.15)",
  borderRadius: "0.25rem",
  color: "212529",
  display: "block",
  float: "left",
  fontSize: "1rem",
  left: "0",
  listStyle: "none",
  margin: "0.125rem 0 0",
  minWidth: "10rem",
  padding: "0.5rem 0",
  position: "absolute",
  textAlign: "left",
  top: "100%",
  zIndex: "1000",
  selectors: {
    "&[x-placement^='bottom']": {
      bottom: "auto",
      right: "auto",
    },
    "&[x-placement^='left']": {
      bottom: "auto",
      right: "auto",
    },
    "&[x-placement^='right']": {
      bottom: "auto",
      right: "auto",
    },
    "&[x-placement^='top']": {
      bottom: "auto",
      right: "auto",
    },
  },
});
export const dropdownMenuLeft = style({
  left: "0",
  right: "auto",
});
export const dropdownMenuLgLeft = style({
  "@media": {
    "(min-width: 992px)": {
      left: "0",
      right: "auto",
    },
  },
});
export const dropdownMenuLgRight = style({
  "@media": {
    "(min-width: 992px)": {
      left: "auto",
      right: "0",
    },
  },
});
export const dropdownMenuMdLeft = style({
  "@media": {
    "(min-width: 768px)": {
      left: "0",
      right: "auto",
    },
  },
});
export const dropdownMenuMdRight = style({
  "@media": {
    "(min-width: 768px)": {
      left: "auto",
      right: "0",
    },
  },
});
export const dropdownMenuRight = style({
  left: "auto",
  right: "0",
});
export const dropdownMenuSmLeft = style({
  "@media": {
    "(min-width: 576px)": {
      left: "0",
      right: "auto",
    },
  },
});
export const dropdownMenuSmRight = style({
  "@media": {
    "(min-width: 576px)": {
      left: "auto",
      right: "0",
    },
  },
});
export const dropdownMenuXlLeft = style({
  "@media": {
    "(min-width: 1200px)": {
      left: "0",
      right: "auto",
    },
  },
});
export const dropdownMenuXlRight = style({
  "@media": {
    "(min-width: 1200px)": {
      left: "auto",
      right: "0",
    },
  },
});
export const dropdownToggle = style({
  whiteSpace: "nowrap",
  "::after": {
    borderBottom: "0",
    borderLeft: "0.3em solid transparent",
    borderRight: "0.3em solid transparent",
    borderTop: "0.3em solid",
    content: "",
    display: "inline-block",
    marginLeft: "0.255em",
    verticalAlign: "0.255em",
  },
  selectors: {
    "&:empty::after": {
      marginLeft: "0",
    },
  },
});
export const dropdownToggleSplit = style({
  paddingLeft: "0.5625rem",
  paddingRight: "0.5625rem",
  "::after": {
    marginLeft: "0",
  },
});
export const dropleft = style({
  left: "auto",
  marginRight: "0.125rem",
  marginTop: "0",
  position: "relative",
  right: "100%",
  top: "0",
  "::after": {
    display: "none",
  },
  "::before": {
    marginRight: "0",
  },
  selectors: {
    "&:empty::after": {
      marginLeft: "0",
    },
  },
});
export const dropright = style({
  left: "100%",
  marginLeft: "0.125rem",
  marginTop: "0",
  position: "relative",
  right: "auto",
  top: "0",
  "::after": {
    marginLeft: "0",
  },
  selectors: {
    "&:empty::after": {
      marginLeft: "0",
    },
  },
});
export const dropup = style({
  bottom: "100%",
  marginBottom: "0.125rem",
  marginTop: "0",
  position: "relative",
  top: "auto",
  "::after": {
    marginLeft: "0",
  },
  selectors: {
    "&:empty::after": {
      marginLeft: "0",
    },
  },
});
export const embedResponsive = style({
  border: "0",
  bottom: "0",
  display: "block",
  height: "100%",
  left: "0",
  overflow: "hidden",
  padding: "0",
  position: "absolute",
  top: "0",
  width: "100%",
  "::before": {
    content: "",
    display: "block",
  },
});
export const embedResponsive16By9 = style({
  "::before": {
    paddingTop: "56.25%",
  },
});
export const embedResponsive1By1 = style({
  "::before": {
    paddingTop: "100%",
  },
});
export const embedResponsive21By9 = style({
  "::before": {
    paddingTop: "42.857143%",
  },
});
export const embedResponsive4By3 = style({
  "::before": {
    paddingTop: "75%",
  },
});
export const fade = style({
  transition: "opacity 0.15s linear",
  "@media": {
    "(prefers-reduced-motion: reduce)": {
      transition: "none",
    },
  },
  selectors: {
    "&:not": {
      opacity: "0",
    },
  },
});
export const figure = style({
  display: "inline-block",
});
export const figureCaption = style({
  color: "6c757d",
  fontSize: "90%",
});
export const figureImg = style({
  lineHeight: "1",
  marginBottom: "0.5rem",
});
export const fixedBottom = style({
  bottom: "0",
  left: "0",
  position: "fixed",
  right: "0",
  zIndex: "1030",
});
export const fixedTop = style({
  left: "0",
  position: "fixed",
  right: "0",
  top: "0",
  zIndex: "1030",
});
export const flexColumn = style({
  flexDirection: "column",
  msFlexDirection: "column",
});
export const flexColumnReverse = style({
  flexDirection: "column-reverse",
  msFlexDirection: "column-reverse",
});
export const flexFill = style({
  flex: "1 1 auto",
  msFlex: "1 1 auto",
});
export const flexGrow0 = style({
  flexGrow: "0",
  msFlexPositive: "0",
});
export const flexGrow1 = style({
  flexGrow: "1",
  msFlexPositive: "1",
});
export const flexLgColumn = style({
  "@media": {
    "(min-width: 992px)": {
      flexDirection: "column",
      msFlexDirection: "column",
    },
  },
});
export const flexLgColumnReverse = style({
  "@media": {
    "(min-width: 992px)": {
      flexDirection: "column-reverse",
      msFlexDirection: "column-reverse",
    },
  },
});
export const flexLgFill = style({
  "@media": {
    "(min-width: 992px)": {
      flex: "1 1 auto",
      msFlex: "1 1 auto",
    },
  },
});
export const flexLgGrow0 = style({
  "@media": {
    "(min-width: 992px)": {
      flexGrow: "0",
      msFlexPositive: "0",
    },
  },
});
export const flexLgGrow1 = style({
  "@media": {
    "(min-width: 992px)": {
      flexGrow: "1",
      msFlexPositive: "1",
    },
  },
});
export const flexLgNowrap = style({
  "@media": {
    "(min-width: 992px)": {
      flexWrap: "nowrap",
      msFlexWrap: "nowrap",
    },
  },
});
export const flexLgRow = style({
  "@media": {
    "(min-width: 992px)": {
      flexDirection: "row",
      msFlexDirection: "row",
    },
  },
});
export const flexLgRowReverse = style({
  "@media": {
    "(min-width: 992px)": {
      flexDirection: "row-reverse",
      msFlexDirection: "row-reverse",
    },
  },
});
export const flexLgShrink0 = style({
  "@media": {
    "(min-width: 992px)": {
      flexShrink: "0",
      msFlexNegative: "0",
    },
  },
});
export const flexLgShrink1 = style({
  "@media": {
    "(min-width: 992px)": {
      flexShrink: "1",
      msFlexNegative: "1",
    },
  },
});
export const flexLgWrap = style({
  "@media": {
    "(min-width: 992px)": {
      flexWrap: "wrap",
      msFlexWrap: "wrap",
    },
  },
});
export const flexLgWrapReverse = style({
  "@media": {
    "(min-width: 992px)": {
      flexWrap: "wrap-reverse",
      msFlexWrap: "wrap-reverse",
    },
  },
});
export const flexMdColumn = style({
  "@media": {
    "(min-width: 768px)": {
      flexDirection: "column",
      msFlexDirection: "column",
    },
  },
});
export const flexMdColumnReverse = style({
  "@media": {
    "(min-width: 768px)": {
      flexDirection: "column-reverse",
      msFlexDirection: "column-reverse",
    },
  },
});
export const flexMdFill = style({
  "@media": {
    "(min-width: 768px)": {
      flex: "1 1 auto",
      msFlex: "1 1 auto",
    },
  },
});
export const flexMdGrow0 = style({
  "@media": {
    "(min-width: 768px)": {
      flexGrow: "0",
      msFlexPositive: "0",
    },
  },
});
export const flexMdGrow1 = style({
  "@media": {
    "(min-width: 768px)": {
      flexGrow: "1",
      msFlexPositive: "1",
    },
  },
});
export const flexMdNowrap = style({
  "@media": {
    "(min-width: 768px)": {
      flexWrap: "nowrap",
      msFlexWrap: "nowrap",
    },
  },
});
export const flexMdRow = style({
  "@media": {
    "(min-width: 768px)": {
      flexDirection: "row",
      msFlexDirection: "row",
    },
  },
});
export const flexMdRowReverse = style({
  "@media": {
    "(min-width: 768px)": {
      flexDirection: "row-reverse",
      msFlexDirection: "row-reverse",
    },
  },
});
export const flexMdShrink0 = style({
  "@media": {
    "(min-width: 768px)": {
      flexShrink: "0",
      msFlexNegative: "0",
    },
  },
});
export const flexMdShrink1 = style({
  "@media": {
    "(min-width: 768px)": {
      flexShrink: "1",
      msFlexNegative: "1",
    },
  },
});
export const flexMdWrap = style({
  "@media": {
    "(min-width: 768px)": {
      flexWrap: "wrap",
      msFlexWrap: "wrap",
    },
  },
});
export const flexMdWrapReverse = style({
  "@media": {
    "(min-width: 768px)": {
      flexWrap: "wrap-reverse",
      msFlexWrap: "wrap-reverse",
    },
  },
});
export const flexNowrap = style({
  flexWrap: "nowrap",
  msFlexWrap: "nowrap",
});
export const flexRow = style({
  flexDirection: "row",
  msFlexDirection: "row",
});
export const flexRowReverse = style({
  flexDirection: "row-reverse",
  msFlexDirection: "row-reverse",
});
export const flexShrink0 = style({
  flexShrink: "0",
  msFlexNegative: "0",
});
export const flexShrink1 = style({
  flexShrink: "1",
  msFlexNegative: "1",
});
export const flexSmColumn = style({
  "@media": {
    "(min-width: 576px)": {
      flexDirection: "column",
      msFlexDirection: "column",
    },
  },
});
export const flexSmColumnReverse = style({
  "@media": {
    "(min-width: 576px)": {
      flexDirection: "column-reverse",
      msFlexDirection: "column-reverse",
    },
  },
});
export const flexSmFill = style({
  "@media": {
    "(min-width: 576px)": {
      flex: "1 1 auto",
      msFlex: "1 1 auto",
    },
  },
});
export const flexSmGrow0 = style({
  "@media": {
    "(min-width: 576px)": {
      flexGrow: "0",
      msFlexPositive: "0",
    },
  },
});
export const flexSmGrow1 = style({
  "@media": {
    "(min-width: 576px)": {
      flexGrow: "1",
      msFlexPositive: "1",
    },
  },
});
export const flexSmNowrap = style({
  "@media": {
    "(min-width: 576px)": {
      flexWrap: "nowrap",
      msFlexWrap: "nowrap",
    },
  },
});
export const flexSmRow = style({
  "@media": {
    "(min-width: 576px)": {
      flexDirection: "row",
      msFlexDirection: "row",
    },
  },
});
export const flexSmRowReverse = style({
  "@media": {
    "(min-width: 576px)": {
      flexDirection: "row-reverse",
      msFlexDirection: "row-reverse",
    },
  },
});
export const flexSmShrink0 = style({
  "@media": {
    "(min-width: 576px)": {
      flexShrink: "0",
      msFlexNegative: "0",
    },
  },
});
export const flexSmShrink1 = style({
  "@media": {
    "(min-width: 576px)": {
      flexShrink: "1",
      msFlexNegative: "1",
    },
  },
});
export const flexSmWrap = style({
  "@media": {
    "(min-width: 576px)": {
      flexWrap: "wrap",
      msFlexWrap: "wrap",
    },
  },
});
export const flexSmWrapReverse = style({
  "@media": {
    "(min-width: 576px)": {
      flexWrap: "wrap-reverse",
      msFlexWrap: "wrap-reverse",
    },
  },
});
export const flexWrap = style({
  flexWrap: "wrap",
  msFlexWrap: "wrap",
});
export const flexWrapReverse = style({
  flexWrap: "wrap-reverse",
  msFlexWrap: "wrap-reverse",
});
export const flexXlColumn = style({
  "@media": {
    "(min-width: 1200px)": {
      flexDirection: "column",
      msFlexDirection: "column",
    },
  },
});
export const flexXlColumnReverse = style({
  "@media": {
    "(min-width: 1200px)": {
      flexDirection: "column-reverse",
      msFlexDirection: "column-reverse",
    },
  },
});
export const flexXlFill = style({
  "@media": {
    "(min-width: 1200px)": {
      flex: "1 1 auto",
      msFlex: "1 1 auto",
    },
  },
});
export const flexXlGrow0 = style({
  "@media": {
    "(min-width: 1200px)": {
      flexGrow: "0",
      msFlexPositive: "0",
    },
  },
});
export const flexXlGrow1 = style({
  "@media": {
    "(min-width: 1200px)": {
      flexGrow: "1",
      msFlexPositive: "1",
    },
  },
});
export const flexXlNowrap = style({
  "@media": {
    "(min-width: 1200px)": {
      flexWrap: "nowrap",
      msFlexWrap: "nowrap",
    },
  },
});
export const flexXlRow = style({
  "@media": {
    "(min-width: 1200px)": {
      flexDirection: "row",
      msFlexDirection: "row",
    },
  },
});
export const flexXlRowReverse = style({
  "@media": {
    "(min-width: 1200px)": {
      flexDirection: "row-reverse",
      msFlexDirection: "row-reverse",
    },
  },
});
export const flexXlShrink0 = style({
  "@media": {
    "(min-width: 1200px)": {
      flexShrink: "0",
      msFlexNegative: "0",
    },
  },
});
export const flexXlShrink1 = style({
  "@media": {
    "(min-width: 1200px)": {
      flexShrink: "1",
      msFlexNegative: "1",
    },
  },
});
export const flexXlWrap = style({
  "@media": {
    "(min-width: 1200px)": {
      flexWrap: "wrap",
      msFlexWrap: "wrap",
    },
  },
});
export const flexXlWrapReverse = style({
  "@media": {
    "(min-width: 1200px)": {
      flexWrap: "wrap-reverse",
      msFlexWrap: "wrap-reverse",
    },
  },
});
export const floatLeft = style({
  float: "left",
});
export const floatLgLeft = style({
  "@media": {
    "(min-width: 992px)": {
      float: "left",
    },
  },
});
export const floatLgNone = style({
  "@media": {
    "(min-width: 992px)": {
      float: "none",
    },
  },
});
export const floatLgRight = style({
  "@media": {
    "(min-width: 992px)": {
      float: "right",
    },
  },
});
export const floatMdLeft = style({
  "@media": {
    "(min-width: 768px)": {
      float: "left",
    },
  },
});
export const floatMdNone = style({
  "@media": {
    "(min-width: 768px)": {
      float: "none",
    },
  },
});
export const floatMdRight = style({
  "@media": {
    "(min-width: 768px)": {
      float: "right",
    },
  },
});
export const floatNone = style({
  float: "none",
});
export const floatRight = style({
  float: "right",
});
export const floatSmLeft = style({
  "@media": {
    "(min-width: 576px)": {
      float: "left",
    },
  },
});
export const floatSmNone = style({
  "@media": {
    "(min-width: 576px)": {
      float: "none",
    },
  },
});
export const floatSmRight = style({
  "@media": {
    "(min-width: 576px)": {
      float: "right",
    },
  },
});
export const floatXlLeft = style({
  "@media": {
    "(min-width: 1200px)": {
      float: "left",
    },
  },
});
export const floatXlNone = style({
  "@media": {
    "(min-width: 1200px)": {
      float: "none",
    },
  },
});
export const floatXlRight = style({
  "@media": {
    "(min-width: 1200px)": {
      float: "right",
    },
  },
});
export const fontItalic = style({
  fontStyle: "italic",
});
export const fontWeightBold = style({
  fontWeight: "700",
});
export const fontWeightBolder = style({
  fontWeight: "bolder",
});
export const fontWeightLight = style({
  fontWeight: "300",
});
export const fontWeightLighter = style({
  fontWeight: "lighter",
});
export const fontWeightNormal = style({
  fontWeight: "400",
});
export const formCheck = style({
  display: "block",
  paddingLeft: "1.25rem",
  position: "relative",
});
export const formCheckInline = style({
  alignItems: "center",
  display: "inline-flex",
  marginLeft: "0",
  marginRight: "0.3125rem",
  marginTop: "0",
  msFlexAlign: "center",
  paddingLeft: "0",
  position: "static",
});
export const formCheckInput = style({
  color: "dc3545",
  display: "block",
  marginLeft: "-1.25rem",
  marginTop: "0.3rem",
  position: "absolute",
  ":disabled": {
    color: "6c757d",
  },
  selectors: {
    "&[disabled]": {
      color: "6c757d",
    },
  },
});
export const formCheckLabel = style({
  marginBottom: "0",
});
export const formControl = style({
  backgroundClip: "padding-box",
  backgroundColor: "fff",
  backgroundImage:
    "url(data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e)",
  backgroundPosition: "right calc(0.375em+0.1875rem) center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "calc(0.75em+0.375rem) calc(0.75em+0.375rem)",
  border: "1px solid ced4da",
  borderColor: "dc3545",
  borderRadius: "0.25rem",
  color: "495057",
  display: "block",
  fontSize: "1rem",
  fontWeight: "400",
  height: "calc(1.5em+0.75rem+2px)",
  lineHeight: "1.5",
  padding: "0.375rem 0.75rem",
  paddingRight: "calc(1.5em+0.75rem)",
  transition: "border-color 0.15s ease-in-out , box-shadow 0.15s ease-in-out",
  width: "100%",
  ":-ms-input-placeholder": {
    color: "6c757d",
    opacity: "1",
  },
  "::-moz-placeholder": {
    color: "6c757d",
    opacity: "1",
  },
  "::-webkit-input-placeholder": {
    color: "6c757d",
    opacity: "1",
  },
  "::placeholder": {
    color: "6c757d",
    opacity: "1",
  },
  ":disabled": {
    backgroundColor: "e9ecef",
    opacity: "1",
  },
  ":focus": {
    borderColor: "dc3545",
    boxShadow: "0 0 0 0.2rem rgba(220,53,69,0.25)",
  },
  "@media": {
    "(prefers-reduced-motion: reduce)": {
      transition: "none",
    },
  },
  selectors: {
    "&::-ms-expand": {
      backgroundColor: "transparent",
      border: "0",
    },
    "&::-ms-input-placeholder": {
      color: "6c757d",
      opacity: "1",
    },
    "&[readonly]": {
      backgroundColor: "e9ecef",
      opacity: "1",
    },
  },
});
export const formControlFile = style({
  display: "block",
  width: "100%",
});
export const formControlLg = style({
  borderRadius: "0.3rem",
  fontSize: "1.25rem",
  height: "calc(1.5em+1rem+2px)",
  lineHeight: "1.5",
  padding: "0.5rem 1rem",
});
export const formControlPlaintext = style({
  backgroundColor: "transparent",
  border: "solid transparent",
  borderWidth: "1px 0",
  color: "212529",
  display: "block",
  fontSize: "1rem",
  lineHeight: "1.5",
  marginBottom: "0",
  padding: "0.375rem 0",
  paddingLeft: "0",
  paddingRight: "0",
  width: "100%",
});
export const formControlRange = style({
  display: "block",
  width: "100%",
});
export const formControlSm = style({
  borderRadius: "0.2rem",
  fontSize: "0.875rem",
  height: "calc(1.5em+0.5rem+2px)",
  lineHeight: "1.5",
  padding: "0.25rem 0.5rem",
});
export const formGroup = style({
  marginBottom: "1rem",
});
export const formInline = style({
  alignItems: "center",
  display: "flex",
  flexFlow: "row wrap",
  msFlexAlign: "center",
  msFlexFlow: "row wrap",
  width: "100%",
  "@media": {
    "(min-width: 576px)": {
      alignItems: "center",
      display: "flex",
      flex: "0 0 auto",
      flexFlow: "row wrap",
      flexShrink: "0",
      justifyContent: "center",
      marginBottom: "0",
      marginLeft: "0",
      marginRight: "0.25rem",
      marginTop: "0",
      msFlex: "0 0 auto",
      msFlexAlign: "center",
      msFlexFlow: "row wrap",
      msFlexNegative: "0",
      msFlexPack: "center",
      paddingLeft: "0",
      position: "relative",
      verticalAlign: "middle",
      width: "auto",
    },
  },
});
export const formRow = style({
  display: "flex",
  flexWrap: "wrap",
  left: "5px",
  marginLeft: "-5px",
  marginRight: "-5px",
  msFlexWrap: "wrap",
  paddingLeft: "5px",
  paddingRight: "5px",
  selectors: {
    "&[class*='col-']": {
      left: "5px",
    },
  },
});
export const formText = style({
  display: "block",
  marginTop: "0.25rem",
});
export const h1 = style({
  fontSize: "2.5rem",
  fontWeight: "500",
  lineHeight: "1.2",
  marginBottom: "0.5rem",
});
export const h100 = style({
  height: "100%",
});
export const h2 = style({
  fontSize: "2rem",
  fontWeight: "500",
  lineHeight: "1.2",
  marginBottom: "0.5rem",
});
export const h25 = style({
  height: "25%",
});
export const h3 = style({
  fontSize: "1.75rem",
  fontWeight: "500",
  lineHeight: "1.2",
  marginBottom: "0.5rem",
});
export const h4 = style({
  fontSize: "1.5rem",
  fontWeight: "500",
  lineHeight: "1.2",
  marginBottom: "0.5rem",
});
export const h5 = style({
  fontSize: "1.25rem",
  fontWeight: "500",
  lineHeight: "1.2",
  marginBottom: "0.5rem",
});
export const h50 = style({
  height: "50%",
});
export const h6 = style({
  fontSize: "1rem",
  fontWeight: "500",
  lineHeight: "1.2",
  marginBottom: "0.5rem",
});
export const h75 = style({
  height: "75%",
});
export const hAuto = style({
  height: "auto",
});
export const imgFluid = style({
  height: "auto",
  maxWidth: "100%",
});
export const imgThumbnail = style({
  backgroundColor: "fff",
  border: "1px solid dee2e6",
  borderRadius: "0.25rem",
  height: "auto",
  maxWidth: "100%",
  padding: "0.25rem",
});
export const initialism = style({
  fontSize: "90%",
  textTransform: "uppercase",
});
export const inputGroup = style({
  alignItems: "center",
  borderBottomLeftRadius: "0",
  borderBottomRightRadius: "0",
  borderTopLeftRadius: "0",
  borderTopRightRadius: "0",
  display: "flex",
  flex: "1 1 auto",
  flexWrap: "wrap",
  marginBottom: "0",
  marginLeft: "-1px",
  minWidth: "0",
  msFlex: "1 1 auto",
  msFlexAlign: "center",
  msFlexWrap: "wrap",
  position: "relative",
  width: "1%",
  ":focus": {
    zIndex: "4",
  },
  selectors: {
    "&:first-child:not(:first-child)": {
      borderBottomLeftRadius: "0",
      borderTopLeftRadius: "0",
    },
    "&:last-child:not(:last-child)": {
      borderBottomRightRadius: "0",
      borderTopRightRadius: "0",
    },
    "&:last-child:not(:last-child):not": {
      borderBottomRightRadius: "0",
      borderTopRightRadius: "0",
    },
    "&:not(:first-child)": {
      borderBottomLeftRadius: "0",
      borderTopLeftRadius: "0",
    },
    "&:not(:last-child)": {
      borderBottomRightRadius: "0",
      borderTopRightRadius: "0",
    },
    "&:not(:last-child)::after": {
      borderBottomRightRadius: "0",
      borderTopRightRadius: "0",
    },
    "&:not:not(:last-child)": {
      borderBottomRightRadius: "0",
      borderTopRightRadius: "0",
    },
    "&:not:not(:last-child)::after": {
      borderBottomRightRadius: "0",
      borderTopRightRadius: "0",
    },
    "&:nth-last-child(+3)": {
      borderBottomRightRadius: "0",
      borderTopRightRadius: "0",
    },
    "&:nth-last-child(+3)::after": {
      borderBottomRightRadius: "0",
      borderTopRightRadius: "0",
    },
  },
});
export const inputGroupAppend = style({
  display: "flex",
  marginLeft: "-1px",
  position: "relative",
  zIndex: "2",
  ":focus": {
    zIndex: "3",
  },
});
export const inputGroupLg = style({
  borderRadius: "0.3rem",
  fontSize: "1.25rem",
  height: "calc(1.5em+1rem+2px)",
  lineHeight: "1.5",
  padding: "0.5rem 1rem",
  paddingRight: "1.75rem",
  selectors: {
    "&:not(textarea)": {
      height: "calc(1.5em+1rem+2px)",
    },
  },
});
export const inputGroupPrepend = style({
  display: "flex",
  marginLeft: "-1px",
  marginRight: "-1px",
  position: "relative",
  zIndex: "2",
  ":focus": {
    zIndex: "3",
  },
});
export const inputGroupSm = style({
  borderRadius: "0.2rem",
  fontSize: "0.875rem",
  height: "calc(1.5em+0.5rem+2px)",
  lineHeight: "1.5",
  padding: "0.25rem 0.5rem",
  paddingRight: "1.75rem",
  selectors: {
    "&:not(textarea)": {
      height: "calc(1.5em+0.5rem+2px)",
    },
  },
});
export const inputGroupText = style({
  alignItems: "center",
  backgroundColor: "e9ecef",
  border: "1px solid ced4da",
  borderRadius: "0.25rem",
  color: "495057",
  display: "flex",
  fontSize: "1rem",
  fontWeight: "400",
  lineHeight: "1.5",
  marginBottom: "0",
  msFlexAlign: "center",
  padding: "0.375rem 0.75rem",
  textAlign: "center",
  whiteSpace: "nowrap",
});
export const invalidFeedback = style({
  color: "dc3545",
  display: "none",
  fontSize: "80%",
  marginTop: "0.25rem",
  width: "100%",
});
export const invalidTooltip = style({
  backgroundColor: "rgba(220,53,69,0.9)",
  borderRadius: "0.25rem",
  color: "fff",
  display: "none",
  fontSize: "0.875rem",
  left: "0",
  lineHeight: "1.5",
  marginTop: "0.1rem",
  maxWidth: "100%",
  padding: "0.25rem 0.5rem",
  position: "absolute",
  top: "100%",
  zIndex: "5",
});
export const invisible = style({
  visibility: "hidden",
});
export const isInvalid = style({
  display: "block",
});
export const isValid = style({
  display: "block",
});
export const jumbotron = style({
  backgroundColor: "e9ecef",
  borderRadius: "0.3rem",
  marginBottom: "2rem",
  padding: "2rem 1rem",
  "@media": {
    "(min-width: 576px)": {
      padding: "4rem 2rem",
    },
  },
});
export const jumbotronFluid = style({
  borderRadius: "0",
  paddingLeft: "0",
  paddingRight: "0",
});
export const justifyContentAround = style({
  justifyContent: "space-around",
  msFlexPack: "distribute",
});
export const justifyContentBetween = style({
  justifyContent: "space-between",
  msFlexPack: "justify",
});
export const justifyContentCenter = style({
  justifyContent: "center",
  msFlexPack: "center",
});
export const justifyContentEnd = style({
  justifyContent: "flex-end",
  msFlexPack: "end",
});
export const justifyContentLgAround = style({
  "@media": {
    "(min-width: 992px)": {
      justifyContent: "space-around",
      msFlexPack: "distribute",
    },
  },
});
export const justifyContentLgBetween = style({
  "@media": {
    "(min-width: 992px)": {
      justifyContent: "space-between",
      msFlexPack: "justify",
    },
  },
});
export const justifyContentLgCenter = style({
  "@media": {
    "(min-width: 992px)": {
      justifyContent: "center",
      msFlexPack: "center",
    },
  },
});
export const justifyContentLgEnd = style({
  "@media": {
    "(min-width: 992px)": {
      justifyContent: "flex-end",
      msFlexPack: "end",
    },
  },
});
export const justifyContentLgStart = style({
  "@media": {
    "(min-width: 992px)": {
      justifyContent: "flex-start",
      msFlexPack: "start",
    },
  },
});
export const justifyContentMdAround = style({
  "@media": {
    "(min-width: 768px)": {
      justifyContent: "space-around",
      msFlexPack: "distribute",
    },
  },
});
export const justifyContentMdBetween = style({
  "@media": {
    "(min-width: 768px)": {
      justifyContent: "space-between",
      msFlexPack: "justify",
    },
  },
});
export const justifyContentMdCenter = style({
  "@media": {
    "(min-width: 768px)": {
      justifyContent: "center",
      msFlexPack: "center",
    },
  },
});
export const justifyContentMdEnd = style({
  "@media": {
    "(min-width: 768px)": {
      justifyContent: "flex-end",
      msFlexPack: "end",
    },
  },
});
export const justifyContentMdStart = style({
  "@media": {
    "(min-width: 768px)": {
      justifyContent: "flex-start",
      msFlexPack: "start",
    },
  },
});
export const justifyContentSmAround = style({
  "@media": {
    "(min-width: 576px)": {
      justifyContent: "space-around",
      msFlexPack: "distribute",
    },
  },
});
export const justifyContentSmBetween = style({
  "@media": {
    "(min-width: 576px)": {
      justifyContent: "space-between",
      msFlexPack: "justify",
    },
  },
});
export const justifyContentSmCenter = style({
  "@media": {
    "(min-width: 576px)": {
      justifyContent: "center",
      msFlexPack: "center",
    },
  },
});
export const justifyContentSmEnd = style({
  "@media": {
    "(min-width: 576px)": {
      justifyContent: "flex-end",
      msFlexPack: "end",
    },
  },
});
export const justifyContentSmStart = style({
  "@media": {
    "(min-width: 576px)": {
      justifyContent: "flex-start",
      msFlexPack: "start",
    },
  },
});
export const justifyContentStart = style({
  justifyContent: "flex-start",
  msFlexPack: "start",
});
export const justifyContentXlAround = style({
  "@media": {
    "(min-width: 1200px)": {
      justifyContent: "space-around",
      msFlexPack: "distribute",
    },
  },
});
export const justifyContentXlBetween = style({
  "@media": {
    "(min-width: 1200px)": {
      justifyContent: "space-between",
      msFlexPack: "justify",
    },
  },
});
export const justifyContentXlCenter = style({
  "@media": {
    "(min-width: 1200px)": {
      justifyContent: "center",
      msFlexPack: "center",
    },
  },
});
export const justifyContentXlEnd = style({
  "@media": {
    "(min-width: 1200px)": {
      justifyContent: "flex-end",
      msFlexPack: "end",
    },
  },
});
export const justifyContentXlStart = style({
  "@media": {
    "(min-width: 1200px)": {
      justifyContent: "flex-start",
      msFlexPack: "start",
    },
  },
});
export const lead = style({
  fontSize: "1.25rem",
  fontWeight: "300",
});
export const listGroup = style({
  borderRadius: "0.25rem",
  display: "flex",
  flexDirection: "column",
  marginBottom: "0",
  msFlexDirection: "column",
  paddingLeft: "0",
});
export const listGroupFlush = style({
  borderRadius: "0",
  borderWidth: "0 0 1px",
  ":last-child": {
    borderBottomWidth: "0",
  },
});
export const listGroupHorizontal = style({
  borderLeftWidth: "1px",
  borderTopWidth: "1px",
  flexDirection: "row",
  marginLeft: "-1px",
  marginTop: "0",
  msFlexDirection: "row",
  ":first-child": {
    borderBottomLeftRadius: "0.25rem",
    borderTopRightRadius: "0",
  },
  ":last-child": {
    borderBottomLeftRadius: "0",
    borderTopRightRadius: "0.25rem",
  },
});
export const listGroupHorizontalLg = style({
  ":first-child": {
    borderBottomLeftRadius: "0.25rem",
    borderTopRightRadius: "0",
  },
  ":last-child": {
    borderBottomLeftRadius: "0",
    borderTopRightRadius: "0.25rem",
  },
  "@media": {
    "(min-width: 992px)": {
      borderLeftWidth: "1px",
      borderTopWidth: "1px",
      flexDirection: "row",
      marginLeft: "-1px",
      marginTop: "0",
      msFlexDirection: "row",
    },
  },
});
export const listGroupHorizontalMd = style({
  ":first-child": {
    borderBottomLeftRadius: "0.25rem",
    borderTopRightRadius: "0",
  },
  ":last-child": {
    borderBottomLeftRadius: "0",
    borderTopRightRadius: "0.25rem",
  },
  "@media": {
    "(min-width: 768px)": {
      borderLeftWidth: "1px",
      borderTopWidth: "1px",
      flexDirection: "row",
      marginLeft: "-1px",
      marginTop: "0",
      msFlexDirection: "row",
    },
  },
});
export const listGroupHorizontalSm = style({
  ":first-child": {
    borderBottomLeftRadius: "0.25rem",
    borderTopRightRadius: "0",
  },
  ":last-child": {
    borderBottomLeftRadius: "0",
    borderTopRightRadius: "0.25rem",
  },
  "@media": {
    "(min-width: 576px)": {
      borderLeftWidth: "1px",
      borderTopWidth: "1px",
      flexDirection: "row",
      marginLeft: "-1px",
      marginTop: "0",
      msFlexDirection: "row",
    },
  },
});
export const listGroupHorizontalXl = style({
  ":first-child": {
    borderBottomLeftRadius: "0.25rem",
    borderTopRightRadius: "0",
  },
  ":last-child": {
    borderBottomLeftRadius: "0",
    borderTopRightRadius: "0.25rem",
  },
  "@media": {
    "(min-width: 1200px)": {
      borderLeftWidth: "1px",
      borderTopWidth: "1px",
      flexDirection: "row",
      marginLeft: "-1px",
      marginTop: "0",
      msFlexDirection: "row",
    },
  },
});
export const listGroupItem = style({
  backgroundColor: "007bff",
  border: "1px solid rgba(0,0,0,0.125)",
  borderColor: "007bff",
  borderTopWidth: "1px",
  color: "fff",
  display: "block",
  marginTop: "-1px",
  padding: "0.75rem 1.25rem",
  pointerEvents: "none",
  position: "relative",
  zIndex: "2",
  ":disabled": {
    backgroundColor: "fff",
    color: "6c757d",
    pointerEvents: "none",
  },
  ":first-child": {
    borderTopLeftRadius: "inherit",
    borderTopRightRadius: "inherit",
  },
  ":last-child": {
    borderBottomLeftRadius: "inherit",
    borderBottomRightRadius: "inherit",
  },
});
export const listGroupItemAction = style({
  color: "495057",
  textAlign: "inherit",
  width: "100%",
  ":active": {
    backgroundColor: "e9ecef",
    color: "212529",
  },
  ":focus": {
    backgroundColor: "f8f9fa",
    color: "495057",
    textDecoration: "none",
    zIndex: "1",
  },
  ":hover": {
    backgroundColor: "f8f9fa",
    color: "495057",
    textDecoration: "none",
    zIndex: "1",
  },
});
export const listGroupItemDanger = style({
  backgroundColor: "721c24",
  borderColor: "721c24",
  color: "fff",
  ":focus": {
    backgroundColor: "f1b0b7",
    color: "721c24",
  },
  ":hover": {
    backgroundColor: "f1b0b7",
    color: "721c24",
  },
});
export const listGroupItemDark = style({
  backgroundColor: "1b1e21",
  borderColor: "1b1e21",
  color: "fff",
  ":focus": {
    backgroundColor: "b9bbbe",
    color: "1b1e21",
  },
  ":hover": {
    backgroundColor: "b9bbbe",
    color: "1b1e21",
  },
});
export const listGroupItemInfo = style({
  backgroundColor: "0c5460",
  borderColor: "0c5460",
  color: "fff",
  ":focus": {
    backgroundColor: "abdde5",
    color: "0c5460",
  },
  ":hover": {
    backgroundColor: "abdde5",
    color: "0c5460",
  },
});
export const listGroupItemLight = style({
  backgroundColor: "818182",
  borderColor: "818182",
  color: "fff",
  ":focus": {
    backgroundColor: "ececf6",
    color: "818182",
  },
  ":hover": {
    backgroundColor: "ececf6",
    color: "818182",
  },
});
export const listGroupItemPrimary = style({
  backgroundColor: "004085",
  borderColor: "004085",
  color: "fff",
  ":focus": {
    backgroundColor: "9fcdff",
    color: "004085",
  },
  ":hover": {
    backgroundColor: "9fcdff",
    color: "004085",
  },
});
export const listGroupItemSecondary = style({
  backgroundColor: "383d41",
  borderColor: "383d41",
  color: "fff",
  ":focus": {
    backgroundColor: "c8cbcf",
    color: "383d41",
  },
  ":hover": {
    backgroundColor: "c8cbcf",
    color: "383d41",
  },
});
export const listGroupItemSuccess = style({
  backgroundColor: "155724",
  borderColor: "155724",
  color: "fff",
  ":focus": {
    backgroundColor: "b1dfbb",
    color: "155724",
  },
  ":hover": {
    backgroundColor: "b1dfbb",
    color: "155724",
  },
});
export const listGroupItemWarning = style({
  backgroundColor: "856404",
  borderColor: "856404",
  color: "fff",
  ":focus": {
    backgroundColor: "ffe8a1",
    color: "856404",
  },
  ":hover": {
    backgroundColor: "ffe8a1",
    color: "856404",
  },
});
export const listInline = style({
  listStyle: "none",
  paddingLeft: "0",
});
export const listInlineItem = style({
  display: "inline-block",
  selectors: {
    "&:not(:last-child)": {
      marginRight: "0.5rem",
    },
  },
});
export const listUnstyled = style({
  listStyle: "none",
  paddingLeft: "0",
});
export const m0 = style({
  margin: "0",
});
export const m1 = style({
  margin: "0.25rem",
});
export const m2 = style({
  margin: "0.5rem",
});
export const m3 = style({
  margin: "1rem",
});
export const m4 = style({
  margin: "1.5rem",
});
export const m5 = style({
  margin: "3rem",
});
export const mAuto = style({
  margin: "auto",
});
export const mLg0 = style({
  "@media": {
    "(min-width: 992px)": {
      margin: "0",
    },
  },
});
export const mLg1 = style({
  "@media": {
    "(min-width: 992px)": {
      margin: "0.25rem",
    },
  },
});
export const mLg2 = style({
  "@media": {
    "(min-width: 992px)": {
      margin: "0.5rem",
    },
  },
});
export const mLg3 = style({
  "@media": {
    "(min-width: 992px)": {
      margin: "1rem",
    },
  },
});
export const mLg4 = style({
  "@media": {
    "(min-width: 992px)": {
      margin: "1.5rem",
    },
  },
});
export const mLg5 = style({
  "@media": {
    "(min-width: 992px)": {
      margin: "3rem",
    },
  },
});
export const mLgAuto = style({
  "@media": {
    "(min-width: 992px)": {
      margin: "auto",
    },
  },
});
export const mLgN1 = style({
  "@media": {
    "(min-width: 992px)": {
      margin: "-0.25rem",
    },
  },
});
export const mLgN2 = style({
  "@media": {
    "(min-width: 992px)": {
      margin: "-0.5rem",
    },
  },
});
export const mLgN3 = style({
  "@media": {
    "(min-width: 992px)": {
      margin: "-1rem",
    },
  },
});
export const mLgN4 = style({
  "@media": {
    "(min-width: 992px)": {
      margin: "-1.5rem",
    },
  },
});
export const mLgN5 = style({
  "@media": {
    "(min-width: 992px)": {
      margin: "-3rem",
    },
  },
});
export const mMd0 = style({
  "@media": {
    "(min-width: 768px)": {
      margin: "0",
    },
  },
});
export const mMd1 = style({
  "@media": {
    "(min-width: 768px)": {
      margin: "0.25rem",
    },
  },
});
export const mMd2 = style({
  "@media": {
    "(min-width: 768px)": {
      margin: "0.5rem",
    },
  },
});
export const mMd3 = style({
  "@media": {
    "(min-width: 768px)": {
      margin: "1rem",
    },
  },
});
export const mMd4 = style({
  "@media": {
    "(min-width: 768px)": {
      margin: "1.5rem",
    },
  },
});
export const mMd5 = style({
  "@media": {
    "(min-width: 768px)": {
      margin: "3rem",
    },
  },
});
export const mMdAuto = style({
  "@media": {
    "(min-width: 768px)": {
      margin: "auto",
    },
  },
});
export const mMdN1 = style({
  "@media": {
    "(min-width: 768px)": {
      margin: "-0.25rem",
    },
  },
});
export const mMdN2 = style({
  "@media": {
    "(min-width: 768px)": {
      margin: "-0.5rem",
    },
  },
});
export const mMdN3 = style({
  "@media": {
    "(min-width: 768px)": {
      margin: "-1rem",
    },
  },
});
export const mMdN4 = style({
  "@media": {
    "(min-width: 768px)": {
      margin: "-1.5rem",
    },
  },
});
export const mMdN5 = style({
  "@media": {
    "(min-width: 768px)": {
      margin: "-3rem",
    },
  },
});
export const mN1 = style({
  margin: "-0.25rem",
});
export const mN2 = style({
  margin: "-0.5rem",
});
export const mN3 = style({
  margin: "-1rem",
});
export const mN4 = style({
  margin: "-1.5rem",
});
export const mN5 = style({
  margin: "-3rem",
});
export const mSm0 = style({
  "@media": {
    "(min-width: 576px)": {
      margin: "0",
    },
  },
});
export const mSm1 = style({
  "@media": {
    "(min-width: 576px)": {
      margin: "0.25rem",
    },
  },
});
export const mSm2 = style({
  "@media": {
    "(min-width: 576px)": {
      margin: "0.5rem",
    },
  },
});
export const mSm3 = style({
  "@media": {
    "(min-width: 576px)": {
      margin: "1rem",
    },
  },
});
export const mSm4 = style({
  "@media": {
    "(min-width: 576px)": {
      margin: "1.5rem",
    },
  },
});
export const mSm5 = style({
  "@media": {
    "(min-width: 576px)": {
      margin: "3rem",
    },
  },
});
export const mSmAuto = style({
  "@media": {
    "(min-width: 576px)": {
      margin: "auto",
    },
  },
});
export const mSmN1 = style({
  "@media": {
    "(min-width: 576px)": {
      margin: "-0.25rem",
    },
  },
});
export const mSmN2 = style({
  "@media": {
    "(min-width: 576px)": {
      margin: "-0.5rem",
    },
  },
});
export const mSmN3 = style({
  "@media": {
    "(min-width: 576px)": {
      margin: "-1rem",
    },
  },
});
export const mSmN4 = style({
  "@media": {
    "(min-width: 576px)": {
      margin: "-1.5rem",
    },
  },
});
export const mSmN5 = style({
  "@media": {
    "(min-width: 576px)": {
      margin: "-3rem",
    },
  },
});
export const mXl0 = style({
  "@media": {
    "(min-width: 1200px)": {
      margin: "0",
    },
  },
});
export const mXl1 = style({
  "@media": {
    "(min-width: 1200px)": {
      margin: "0.25rem",
    },
  },
});
export const mXl2 = style({
  "@media": {
    "(min-width: 1200px)": {
      margin: "0.5rem",
    },
  },
});
export const mXl3 = style({
  "@media": {
    "(min-width: 1200px)": {
      margin: "1rem",
    },
  },
});
export const mXl4 = style({
  "@media": {
    "(min-width: 1200px)": {
      margin: "1.5rem",
    },
  },
});
export const mXl5 = style({
  "@media": {
    "(min-width: 1200px)": {
      margin: "3rem",
    },
  },
});
export const mXlAuto = style({
  "@media": {
    "(min-width: 1200px)": {
      margin: "auto",
    },
  },
});
export const mXlN1 = style({
  "@media": {
    "(min-width: 1200px)": {
      margin: "-0.25rem",
    },
  },
});
export const mXlN2 = style({
  "@media": {
    "(min-width: 1200px)": {
      margin: "-0.5rem",
    },
  },
});
export const mXlN3 = style({
  "@media": {
    "(min-width: 1200px)": {
      margin: "-1rem",
    },
  },
});
export const mXlN4 = style({
  "@media": {
    "(min-width: 1200px)": {
      margin: "-1.5rem",
    },
  },
});
export const mXlN5 = style({
  "@media": {
    "(min-width: 1200px)": {
      margin: "-3rem",
    },
  },
});
export const mark = style({
  backgroundColor: "fcf8e3",
  padding: "0.2em",
});
export const mb0 = style({
  marginBottom: "0",
});
export const mb1 = style({
  marginBottom: "0.25rem",
});
export const mb2 = style({
  marginBottom: "0.5rem",
});
export const mb3 = style({
  marginBottom: "1rem",
});
export const mb4 = style({
  marginBottom: "1.5rem",
});
export const mb5 = style({
  marginBottom: "3rem",
});
export const mbAuto = style({
  marginBottom: "auto",
});
export const mbLg0 = style({
  "@media": {
    "(min-width: 992px)": {
      marginBottom: "0",
    },
  },
});
export const mbLg1 = style({
  "@media": {
    "(min-width: 992px)": {
      marginBottom: "0.25rem",
    },
  },
});
export const mbLg2 = style({
  "@media": {
    "(min-width: 992px)": {
      marginBottom: "0.5rem",
    },
  },
});
export const mbLg3 = style({
  "@media": {
    "(min-width: 992px)": {
      marginBottom: "1rem",
    },
  },
});
export const mbLg4 = style({
  "@media": {
    "(min-width: 992px)": {
      marginBottom: "1.5rem",
    },
  },
});
export const mbLg5 = style({
  "@media": {
    "(min-width: 992px)": {
      marginBottom: "3rem",
    },
  },
});
export const mbLgAuto = style({
  "@media": {
    "(min-width: 992px)": {
      marginBottom: "auto",
    },
  },
});
export const mbLgN1 = style({
  "@media": {
    "(min-width: 992px)": {
      marginBottom: "-0.25rem",
    },
  },
});
export const mbLgN2 = style({
  "@media": {
    "(min-width: 992px)": {
      marginBottom: "-0.5rem",
    },
  },
});
export const mbLgN3 = style({
  "@media": {
    "(min-width: 992px)": {
      marginBottom: "-1rem",
    },
  },
});
export const mbLgN4 = style({
  "@media": {
    "(min-width: 992px)": {
      marginBottom: "-1.5rem",
    },
  },
});
export const mbLgN5 = style({
  "@media": {
    "(min-width: 992px)": {
      marginBottom: "-3rem",
    },
  },
});
export const mbMd0 = style({
  "@media": {
    "(min-width: 768px)": {
      marginBottom: "0",
    },
  },
});
export const mbMd1 = style({
  "@media": {
    "(min-width: 768px)": {
      marginBottom: "0.25rem",
    },
  },
});
export const mbMd2 = style({
  "@media": {
    "(min-width: 768px)": {
      marginBottom: "0.5rem",
    },
  },
});
export const mbMd3 = style({
  "@media": {
    "(min-width: 768px)": {
      marginBottom: "1rem",
    },
  },
});
export const mbMd4 = style({
  "@media": {
    "(min-width: 768px)": {
      marginBottom: "1.5rem",
    },
  },
});
export const mbMd5 = style({
  "@media": {
    "(min-width: 768px)": {
      marginBottom: "3rem",
    },
  },
});
export const mbMdAuto = style({
  "@media": {
    "(min-width: 768px)": {
      marginBottom: "auto",
    },
  },
});
export const mbMdN1 = style({
  "@media": {
    "(min-width: 768px)": {
      marginBottom: "-0.25rem",
    },
  },
});
export const mbMdN2 = style({
  "@media": {
    "(min-width: 768px)": {
      marginBottom: "-0.5rem",
    },
  },
});
export const mbMdN3 = style({
  "@media": {
    "(min-width: 768px)": {
      marginBottom: "-1rem",
    },
  },
});
export const mbMdN4 = style({
  "@media": {
    "(min-width: 768px)": {
      marginBottom: "-1.5rem",
    },
  },
});
export const mbMdN5 = style({
  "@media": {
    "(min-width: 768px)": {
      marginBottom: "-3rem",
    },
  },
});
export const mbN1 = style({
  marginBottom: "-0.25rem",
});
export const mbN2 = style({
  marginBottom: "-0.5rem",
});
export const mbN3 = style({
  marginBottom: "-1rem",
});
export const mbN4 = style({
  marginBottom: "-1.5rem",
});
export const mbN5 = style({
  marginBottom: "-3rem",
});
export const mbSm0 = style({
  "@media": {
    "(min-width: 576px)": {
      marginBottom: "0",
    },
  },
});
export const mbSm1 = style({
  "@media": {
    "(min-width: 576px)": {
      marginBottom: "0.25rem",
    },
  },
});
export const mbSm2 = style({
  "@media": {
    "(min-width: 576px)": {
      marginBottom: "0.5rem",
    },
  },
});
export const mbSm3 = style({
  "@media": {
    "(min-width: 576px)": {
      marginBottom: "1rem",
    },
  },
});
export const mbSm4 = style({
  "@media": {
    "(min-width: 576px)": {
      marginBottom: "1.5rem",
    },
  },
});
export const mbSm5 = style({
  "@media": {
    "(min-width: 576px)": {
      marginBottom: "3rem",
    },
  },
});
export const mbSmAuto = style({
  "@media": {
    "(min-width: 576px)": {
      marginBottom: "auto",
    },
  },
});
export const mbSmN1 = style({
  "@media": {
    "(min-width: 576px)": {
      marginBottom: "-0.25rem",
    },
  },
});
export const mbSmN2 = style({
  "@media": {
    "(min-width: 576px)": {
      marginBottom: "-0.5rem",
    },
  },
});
export const mbSmN3 = style({
  "@media": {
    "(min-width: 576px)": {
      marginBottom: "-1rem",
    },
  },
});
export const mbSmN4 = style({
  "@media": {
    "(min-width: 576px)": {
      marginBottom: "-1.5rem",
    },
  },
});
export const mbSmN5 = style({
  "@media": {
    "(min-width: 576px)": {
      marginBottom: "-3rem",
    },
  },
});
export const mbXl0 = style({
  "@media": {
    "(min-width: 1200px)": {
      marginBottom: "0",
    },
  },
});
export const mbXl1 = style({
  "@media": {
    "(min-width: 1200px)": {
      marginBottom: "0.25rem",
    },
  },
});
export const mbXl2 = style({
  "@media": {
    "(min-width: 1200px)": {
      marginBottom: "0.5rem",
    },
  },
});
export const mbXl3 = style({
  "@media": {
    "(min-width: 1200px)": {
      marginBottom: "1rem",
    },
  },
});
export const mbXl4 = style({
  "@media": {
    "(min-width: 1200px)": {
      marginBottom: "1.5rem",
    },
  },
});
export const mbXl5 = style({
  "@media": {
    "(min-width: 1200px)": {
      marginBottom: "3rem",
    },
  },
});
export const mbXlAuto = style({
  "@media": {
    "(min-width: 1200px)": {
      marginBottom: "auto",
    },
  },
});
export const mbXlN1 = style({
  "@media": {
    "(min-width: 1200px)": {
      marginBottom: "-0.25rem",
    },
  },
});
export const mbXlN2 = style({
  "@media": {
    "(min-width: 1200px)": {
      marginBottom: "-0.5rem",
    },
  },
});
export const mbXlN3 = style({
  "@media": {
    "(min-width: 1200px)": {
      marginBottom: "-1rem",
    },
  },
});
export const mbXlN4 = style({
  "@media": {
    "(min-width: 1200px)": {
      marginBottom: "-1.5rem",
    },
  },
});
export const mbXlN5 = style({
  "@media": {
    "(min-width: 1200px)": {
      marginBottom: "-3rem",
    },
  },
});
export const media = style({
  alignItems: "flex-start",
  display: "flex",
  msFlexAlign: "start",
});
export const mediaBody = style({
  flex: "1",
  msFlex: "1",
});
export const mh100 = style({
  maxHeight: "100%",
});
export const minVh100 = style({
  minHeight: "100vh",
});
export const minVw100 = style({
  minWidth: "100vw",
});
export const ml0 = style({
  marginLeft: "0",
});
export const ml1 = style({
  marginLeft: "0.25rem",
});
export const ml2 = style({
  marginLeft: "0.5rem",
});
export const ml3 = style({
  marginLeft: "1rem",
});
export const ml4 = style({
  marginLeft: "1.5rem",
});
export const ml5 = style({
  marginLeft: "3rem",
});
export const mlAuto = style({
  marginLeft: "auto",
});
export const mlLg0 = style({
  "@media": {
    "(min-width: 992px)": {
      marginLeft: "0",
    },
  },
});
export const mlLg1 = style({
  "@media": {
    "(min-width: 992px)": {
      marginLeft: "0.25rem",
    },
  },
});
export const mlLg2 = style({
  "@media": {
    "(min-width: 992px)": {
      marginLeft: "0.5rem",
    },
  },
});
export const mlLg3 = style({
  "@media": {
    "(min-width: 992px)": {
      marginLeft: "1rem",
    },
  },
});
export const mlLg4 = style({
  "@media": {
    "(min-width: 992px)": {
      marginLeft: "1.5rem",
    },
  },
});
export const mlLg5 = style({
  "@media": {
    "(min-width: 992px)": {
      marginLeft: "3rem",
    },
  },
});
export const mlLgAuto = style({
  "@media": {
    "(min-width: 992px)": {
      marginLeft: "auto",
    },
  },
});
export const mlLgN1 = style({
  "@media": {
    "(min-width: 992px)": {
      marginLeft: "-0.25rem",
    },
  },
});
export const mlLgN2 = style({
  "@media": {
    "(min-width: 992px)": {
      marginLeft: "-0.5rem",
    },
  },
});
export const mlLgN3 = style({
  "@media": {
    "(min-width: 992px)": {
      marginLeft: "-1rem",
    },
  },
});
export const mlLgN4 = style({
  "@media": {
    "(min-width: 992px)": {
      marginLeft: "-1.5rem",
    },
  },
});
export const mlLgN5 = style({
  "@media": {
    "(min-width: 992px)": {
      marginLeft: "-3rem",
    },
  },
});
export const mlMd0 = style({
  "@media": {
    "(min-width: 768px)": {
      marginLeft: "0",
    },
  },
});
export const mlMd1 = style({
  "@media": {
    "(min-width: 768px)": {
      marginLeft: "0.25rem",
    },
  },
});
export const mlMd2 = style({
  "@media": {
    "(min-width: 768px)": {
      marginLeft: "0.5rem",
    },
  },
});
export const mlMd3 = style({
  "@media": {
    "(min-width: 768px)": {
      marginLeft: "1rem",
    },
  },
});
export const mlMd4 = style({
  "@media": {
    "(min-width: 768px)": {
      marginLeft: "1.5rem",
    },
  },
});
export const mlMd5 = style({
  "@media": {
    "(min-width: 768px)": {
      marginLeft: "3rem",
    },
  },
});
export const mlMdAuto = style({
  "@media": {
    "(min-width: 768px)": {
      marginLeft: "auto",
    },
  },
});
export const mlMdN1 = style({
  "@media": {
    "(min-width: 768px)": {
      marginLeft: "-0.25rem",
    },
  },
});
export const mlMdN2 = style({
  "@media": {
    "(min-width: 768px)": {
      marginLeft: "-0.5rem",
    },
  },
});
export const mlMdN3 = style({
  "@media": {
    "(min-width: 768px)": {
      marginLeft: "-1rem",
    },
  },
});
export const mlMdN4 = style({
  "@media": {
    "(min-width: 768px)": {
      marginLeft: "-1.5rem",
    },
  },
});
export const mlMdN5 = style({
  "@media": {
    "(min-width: 768px)": {
      marginLeft: "-3rem",
    },
  },
});
export const mlN1 = style({
  marginLeft: "-0.25rem",
});
export const mlN2 = style({
  marginLeft: "-0.5rem",
});
export const mlN3 = style({
  marginLeft: "-1rem",
});
export const mlN4 = style({
  marginLeft: "-1.5rem",
});
export const mlN5 = style({
  marginLeft: "-3rem",
});
export const mlSm0 = style({
  "@media": {
    "(min-width: 576px)": {
      marginLeft: "0",
    },
  },
});
export const mlSm1 = style({
  "@media": {
    "(min-width: 576px)": {
      marginLeft: "0.25rem",
    },
  },
});
export const mlSm2 = style({
  "@media": {
    "(min-width: 576px)": {
      marginLeft: "0.5rem",
    },
  },
});
export const mlSm3 = style({
  "@media": {
    "(min-width: 576px)": {
      marginLeft: "1rem",
    },
  },
});
export const mlSm4 = style({
  "@media": {
    "(min-width: 576px)": {
      marginLeft: "1.5rem",
    },
  },
});
export const mlSm5 = style({
  "@media": {
    "(min-width: 576px)": {
      marginLeft: "3rem",
    },
  },
});
export const mlSmAuto = style({
  "@media": {
    "(min-width: 576px)": {
      marginLeft: "auto",
    },
  },
});
export const mlSmN1 = style({
  "@media": {
    "(min-width: 576px)": {
      marginLeft: "-0.25rem",
    },
  },
});
export const mlSmN2 = style({
  "@media": {
    "(min-width: 576px)": {
      marginLeft: "-0.5rem",
    },
  },
});
export const mlSmN3 = style({
  "@media": {
    "(min-width: 576px)": {
      marginLeft: "-1rem",
    },
  },
});
export const mlSmN4 = style({
  "@media": {
    "(min-width: 576px)": {
      marginLeft: "-1.5rem",
    },
  },
});
export const mlSmN5 = style({
  "@media": {
    "(min-width: 576px)": {
      marginLeft: "-3rem",
    },
  },
});
export const mlXl0 = style({
  "@media": {
    "(min-width: 1200px)": {
      marginLeft: "0",
    },
  },
});
export const mlXl1 = style({
  "@media": {
    "(min-width: 1200px)": {
      marginLeft: "0.25rem",
    },
  },
});
export const mlXl2 = style({
  "@media": {
    "(min-width: 1200px)": {
      marginLeft: "0.5rem",
    },
  },
});
export const mlXl3 = style({
  "@media": {
    "(min-width: 1200px)": {
      marginLeft: "1rem",
    },
  },
});
export const mlXl4 = style({
  "@media": {
    "(min-width: 1200px)": {
      marginLeft: "1.5rem",
    },
  },
});
export const mlXl5 = style({
  "@media": {
    "(min-width: 1200px)": {
      marginLeft: "3rem",
    },
  },
});
export const mlXlAuto = style({
  "@media": {
    "(min-width: 1200px)": {
      marginLeft: "auto",
    },
  },
});
export const mlXlN1 = style({
  "@media": {
    "(min-width: 1200px)": {
      marginLeft: "-0.25rem",
    },
  },
});
export const mlXlN2 = style({
  "@media": {
    "(min-width: 1200px)": {
      marginLeft: "-0.5rem",
    },
  },
});
export const mlXlN3 = style({
  "@media": {
    "(min-width: 1200px)": {
      marginLeft: "-1rem",
    },
  },
});
export const mlXlN4 = style({
  "@media": {
    "(min-width: 1200px)": {
      marginLeft: "-1.5rem",
    },
  },
});
export const mlXlN5 = style({
  "@media": {
    "(min-width: 1200px)": {
      marginLeft: "-3rem",
    },
  },
});
export const modal = style({
  WebkitTransform: "scale(1.02)",
  display: "none",
  height: "100%",
  left: "0",
  outline: "0",
  overflow: "hidden",
  position: "fixed",
  top: "0",
  transform: "scale(1.02)",
  transition: "transform 0.3s ease-out , -webkit-transform 0.3s ease-out",
  width: "100%",
  zIndex: "1050",
  "@media": {
    "(prefers-reduced-motion: reduce)": {
      transition: "none",
    },
  },
});
export const modalBackdrop = style({
  backgroundColor: "000",
  height: "100vh",
  left: "0",
  opacity: "0.5",
  position: "fixed",
  top: "0",
  width: "100vw",
  zIndex: "1040",
});
export const modalBody = style({
  flex: "1 1 auto",
  msFlex: "1 1 auto",
  padding: "1rem",
  position: "relative",
});
export const modalContent = style({
  backgroundClip: "padding-box",
  backgroundColor: "fff",
  border: "1px solid rgba(0,0,0,0.2)",
  borderRadius: "0.3rem",
  display: "flex",
  flexDirection: "column",
  msFlexDirection: "column",
  outline: "0",
  pointerEvents: "auto",
  position: "relative",
  width: "100%",
});
export const modalDialog = style({
  margin: "0.5rem",
  pointerEvents: "none",
  position: "relative",
  width: "auto",
  "@media": {
    "(min-width: 576px)": {
      margin: "1.75rem auto",
      maxWidth: "500px",
    },
  },
});
export const modalDialogCentered = style({
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  height: "100%",
  justifyContent: "center",
  maxHeight: "none",
  minHeight: "calc(100%-1rem)",
  msFlexAlign: "center",
  msFlexDirection: "column",
  msFlexPack: "center",
  "::before": {
    height: "min-content",
  },
  "@media": {
    "(min-width: 576px)": {
      minHeight: "calc(100%-3.5rem)",
    },
  },
});
export const modalDialogScrollable = style({
  display: "flex",
  flexShrink: "0",
  maxHeight: "calc(100vh-1rem)",
  msFlexNegative: "0",
  overflow: "hidden",
  overflowY: "auto",
  "@media": {
    "(min-width: 576px)": {
      maxHeight: "calc(100vh-3.5rem)",
    },
  },
});
export const modalFooter = style({
  alignItems: "center",
  borderBottomLeftRadius: "calc(0.3rem-1px)",
  borderBottomRightRadius: "calc(0.3rem-1px)",
  borderTop: "1px solid dee2e6",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "flex-end",
  msFlexAlign: "center",
  msFlexPack: "end",
  msFlexWrap: "wrap",
  padding: "0.75rem",
});
export const modalHeader = style({
  alignItems: "flex-start",
  borderBottom: "1px solid dee2e6",
  borderTopLeftRadius: "calc(0.3rem-1px)",
  borderTopRightRadius: "calc(0.3rem-1px)",
  display: "flex",
  justifyContent: "space-between",
  margin: "-1rem -1rem -1rem auto",
  msFlexAlign: "start",
  msFlexPack: "justify",
  padding: "1rem 1rem",
});
export const modalLg = style({
  "@media": {
    "(min-width: 992px)": {
      maxWidth: "800px",
    },
  },
});
export const modalOpen = style({
  overflow: "hidden",
  overflowX: "hidden",
  overflowY: "auto",
});
export const modalScrollbarMeasure = style({
  height: "50px",
  overflow: "scroll",
  position: "absolute",
  top: "-9999px",
  width: "50px",
});
export const modalSm = style({
  "@media": {
    "(min-width: 576px)": {
      maxWidth: "300px",
    },
  },
});
export const modalTitle = style({
  lineHeight: "1.5",
  marginBottom: "0",
});
export const modalXl = style({
  "@media": {
    "(min-width: 992px)": {
      maxWidth: "1140px",
    },
  },
});
export const mr0 = style({
  marginRight: "0",
});
export const mr1 = style({
  marginRight: "0.25rem",
});
export const mr2 = style({
  marginRight: "0.5rem",
});
export const mr3 = style({
  marginRight: "1rem",
});
export const mr4 = style({
  marginRight: "1.5rem",
});
export const mr5 = style({
  marginRight: "3rem",
});
export const mrAuto = style({
  marginRight: "auto",
});
export const mrLg0 = style({
  "@media": {
    "(min-width: 992px)": {
      marginRight: "0",
    },
  },
});
export const mrLg1 = style({
  "@media": {
    "(min-width: 992px)": {
      marginRight: "0.25rem",
    },
  },
});
export const mrLg2 = style({
  "@media": {
    "(min-width: 992px)": {
      marginRight: "0.5rem",
    },
  },
});
export const mrLg3 = style({
  "@media": {
    "(min-width: 992px)": {
      marginRight: "1rem",
    },
  },
});
export const mrLg4 = style({
  "@media": {
    "(min-width: 992px)": {
      marginRight: "1.5rem",
    },
  },
});
export const mrLg5 = style({
  "@media": {
    "(min-width: 992px)": {
      marginRight: "3rem",
    },
  },
});
export const mrLgAuto = style({
  "@media": {
    "(min-width: 992px)": {
      marginRight: "auto",
    },
  },
});
export const mrLgN1 = style({
  "@media": {
    "(min-width: 992px)": {
      marginRight: "-0.25rem",
    },
  },
});
export const mrLgN2 = style({
  "@media": {
    "(min-width: 992px)": {
      marginRight: "-0.5rem",
    },
  },
});
export const mrLgN3 = style({
  "@media": {
    "(min-width: 992px)": {
      marginRight: "-1rem",
    },
  },
});
export const mrLgN4 = style({
  "@media": {
    "(min-width: 992px)": {
      marginRight: "-1.5rem",
    },
  },
});
export const mrLgN5 = style({
  "@media": {
    "(min-width: 992px)": {
      marginRight: "-3rem",
    },
  },
});
export const mrMd0 = style({
  "@media": {
    "(min-width: 768px)": {
      marginRight: "0",
    },
  },
});
export const mrMd1 = style({
  "@media": {
    "(min-width: 768px)": {
      marginRight: "0.25rem",
    },
  },
});
export const mrMd2 = style({
  "@media": {
    "(min-width: 768px)": {
      marginRight: "0.5rem",
    },
  },
});
export const mrMd3 = style({
  "@media": {
    "(min-width: 768px)": {
      marginRight: "1rem",
    },
  },
});
export const mrMd4 = style({
  "@media": {
    "(min-width: 768px)": {
      marginRight: "1.5rem",
    },
  },
});
export const mrMd5 = style({
  "@media": {
    "(min-width: 768px)": {
      marginRight: "3rem",
    },
  },
});
export const mrMdAuto = style({
  "@media": {
    "(min-width: 768px)": {
      marginRight: "auto",
    },
  },
});
export const mrMdN1 = style({
  "@media": {
    "(min-width: 768px)": {
      marginRight: "-0.25rem",
    },
  },
});
export const mrMdN2 = style({
  "@media": {
    "(min-width: 768px)": {
      marginRight: "-0.5rem",
    },
  },
});
export const mrMdN3 = style({
  "@media": {
    "(min-width: 768px)": {
      marginRight: "-1rem",
    },
  },
});
export const mrMdN4 = style({
  "@media": {
    "(min-width: 768px)": {
      marginRight: "-1.5rem",
    },
  },
});
export const mrMdN5 = style({
  "@media": {
    "(min-width: 768px)": {
      marginRight: "-3rem",
    },
  },
});
export const mrN1 = style({
  marginRight: "-0.25rem",
});
export const mrN2 = style({
  marginRight: "-0.5rem",
});
export const mrN3 = style({
  marginRight: "-1rem",
});
export const mrN4 = style({
  marginRight: "-1.5rem",
});
export const mrN5 = style({
  marginRight: "-3rem",
});
export const mrSm0 = style({
  "@media": {
    "(min-width: 576px)": {
      marginRight: "0",
    },
  },
});
export const mrSm1 = style({
  "@media": {
    "(min-width: 576px)": {
      marginRight: "0.25rem",
    },
  },
});
export const mrSm2 = style({
  "@media": {
    "(min-width: 576px)": {
      marginRight: "0.5rem",
    },
  },
});
export const mrSm3 = style({
  "@media": {
    "(min-width: 576px)": {
      marginRight: "1rem",
    },
  },
});
export const mrSm4 = style({
  "@media": {
    "(min-width: 576px)": {
      marginRight: "1.5rem",
    },
  },
});
export const mrSm5 = style({
  "@media": {
    "(min-width: 576px)": {
      marginRight: "3rem",
    },
  },
});
export const mrSmAuto = style({
  "@media": {
    "(min-width: 576px)": {
      marginRight: "auto",
    },
  },
});
export const mrSmN1 = style({
  "@media": {
    "(min-width: 576px)": {
      marginRight: "-0.25rem",
    },
  },
});
export const mrSmN2 = style({
  "@media": {
    "(min-width: 576px)": {
      marginRight: "-0.5rem",
    },
  },
});
export const mrSmN3 = style({
  "@media": {
    "(min-width: 576px)": {
      marginRight: "-1rem",
    },
  },
});
export const mrSmN4 = style({
  "@media": {
    "(min-width: 576px)": {
      marginRight: "-1.5rem",
    },
  },
});
export const mrSmN5 = style({
  "@media": {
    "(min-width: 576px)": {
      marginRight: "-3rem",
    },
  },
});
export const mrXl0 = style({
  "@media": {
    "(min-width: 1200px)": {
      marginRight: "0",
    },
  },
});
export const mrXl1 = style({
  "@media": {
    "(min-width: 1200px)": {
      marginRight: "0.25rem",
    },
  },
});
export const mrXl2 = style({
  "@media": {
    "(min-width: 1200px)": {
      marginRight: "0.5rem",
    },
  },
});
export const mrXl3 = style({
  "@media": {
    "(min-width: 1200px)": {
      marginRight: "1rem",
    },
  },
});
export const mrXl4 = style({
  "@media": {
    "(min-width: 1200px)": {
      marginRight: "1.5rem",
    },
  },
});
export const mrXl5 = style({
  "@media": {
    "(min-width: 1200px)": {
      marginRight: "3rem",
    },
  },
});
export const mrXlAuto = style({
  "@media": {
    "(min-width: 1200px)": {
      marginRight: "auto",
    },
  },
});
export const mrXlN1 = style({
  "@media": {
    "(min-width: 1200px)": {
      marginRight: "-0.25rem",
    },
  },
});
export const mrXlN2 = style({
  "@media": {
    "(min-width: 1200px)": {
      marginRight: "-0.5rem",
    },
  },
});
export const mrXlN3 = style({
  "@media": {
    "(min-width: 1200px)": {
      marginRight: "-1rem",
    },
  },
});
export const mrXlN4 = style({
  "@media": {
    "(min-width: 1200px)": {
      marginRight: "-1.5rem",
    },
  },
});
export const mrXlN5 = style({
  "@media": {
    "(min-width: 1200px)": {
      marginRight: "-3rem",
    },
  },
});
export const mt0 = style({
  marginTop: "0",
});
export const mt1 = style({
  marginTop: "0.25rem",
});
export const mt2 = style({
  marginTop: "0.5rem",
});
export const mt3 = style({
  marginTop: "1rem",
});
export const mt4 = style({
  marginTop: "1.5rem",
});
export const mt5 = style({
  marginTop: "3rem",
});
export const mtAuto = style({
  marginTop: "auto",
});
export const mtLg0 = style({
  "@media": {
    "(min-width: 992px)": {
      marginTop: "0",
    },
  },
});
export const mtLg1 = style({
  "@media": {
    "(min-width: 992px)": {
      marginTop: "0.25rem",
    },
  },
});
export const mtLg2 = style({
  "@media": {
    "(min-width: 992px)": {
      marginTop: "0.5rem",
    },
  },
});
export const mtLg3 = style({
  "@media": {
    "(min-width: 992px)": {
      marginTop: "1rem",
    },
  },
});
export const mtLg4 = style({
  "@media": {
    "(min-width: 992px)": {
      marginTop: "1.5rem",
    },
  },
});
export const mtLg5 = style({
  "@media": {
    "(min-width: 992px)": {
      marginTop: "3rem",
    },
  },
});
export const mtLgAuto = style({
  "@media": {
    "(min-width: 992px)": {
      marginTop: "auto",
    },
  },
});
export const mtLgN1 = style({
  "@media": {
    "(min-width: 992px)": {
      marginTop: "-0.25rem",
    },
  },
});
export const mtLgN2 = style({
  "@media": {
    "(min-width: 992px)": {
      marginTop: "-0.5rem",
    },
  },
});
export const mtLgN3 = style({
  "@media": {
    "(min-width: 992px)": {
      marginTop: "-1rem",
    },
  },
});
export const mtLgN4 = style({
  "@media": {
    "(min-width: 992px)": {
      marginTop: "-1.5rem",
    },
  },
});
export const mtLgN5 = style({
  "@media": {
    "(min-width: 992px)": {
      marginTop: "-3rem",
    },
  },
});
export const mtMd0 = style({
  "@media": {
    "(min-width: 768px)": {
      marginTop: "0",
    },
  },
});
export const mtMd1 = style({
  "@media": {
    "(min-width: 768px)": {
      marginTop: "0.25rem",
    },
  },
});
export const mtMd2 = style({
  "@media": {
    "(min-width: 768px)": {
      marginTop: "0.5rem",
    },
  },
});
export const mtMd3 = style({
  "@media": {
    "(min-width: 768px)": {
      marginTop: "1rem",
    },
  },
});
export const mtMd4 = style({
  "@media": {
    "(min-width: 768px)": {
      marginTop: "1.5rem",
    },
  },
});
export const mtMd5 = style({
  "@media": {
    "(min-width: 768px)": {
      marginTop: "3rem",
    },
  },
});
export const mtMdAuto = style({
  "@media": {
    "(min-width: 768px)": {
      marginTop: "auto",
    },
  },
});
export const mtMdN1 = style({
  "@media": {
    "(min-width: 768px)": {
      marginTop: "-0.25rem",
    },
  },
});
export const mtMdN2 = style({
  "@media": {
    "(min-width: 768px)": {
      marginTop: "-0.5rem",
    },
  },
});
export const mtMdN3 = style({
  "@media": {
    "(min-width: 768px)": {
      marginTop: "-1rem",
    },
  },
});
export const mtMdN4 = style({
  "@media": {
    "(min-width: 768px)": {
      marginTop: "-1.5rem",
    },
  },
});
export const mtMdN5 = style({
  "@media": {
    "(min-width: 768px)": {
      marginTop: "-3rem",
    },
  },
});
export const mtN1 = style({
  marginTop: "-0.25rem",
});
export const mtN2 = style({
  marginTop: "-0.5rem",
});
export const mtN3 = style({
  marginTop: "-1rem",
});
export const mtN4 = style({
  marginTop: "-1.5rem",
});
export const mtN5 = style({
  marginTop: "-3rem",
});
export const mtSm0 = style({
  "@media": {
    "(min-width: 576px)": {
      marginTop: "0",
    },
  },
});
export const mtSm1 = style({
  "@media": {
    "(min-width: 576px)": {
      marginTop: "0.25rem",
    },
  },
});
export const mtSm2 = style({
  "@media": {
    "(min-width: 576px)": {
      marginTop: "0.5rem",
    },
  },
});
export const mtSm3 = style({
  "@media": {
    "(min-width: 576px)": {
      marginTop: "1rem",
    },
  },
});
export const mtSm4 = style({
  "@media": {
    "(min-width: 576px)": {
      marginTop: "1.5rem",
    },
  },
});
export const mtSm5 = style({
  "@media": {
    "(min-width: 576px)": {
      marginTop: "3rem",
    },
  },
});
export const mtSmAuto = style({
  "@media": {
    "(min-width: 576px)": {
      marginTop: "auto",
    },
  },
});
export const mtSmN1 = style({
  "@media": {
    "(min-width: 576px)": {
      marginTop: "-0.25rem",
    },
  },
});
export const mtSmN2 = style({
  "@media": {
    "(min-width: 576px)": {
      marginTop: "-0.5rem",
    },
  },
});
export const mtSmN3 = style({
  "@media": {
    "(min-width: 576px)": {
      marginTop: "-1rem",
    },
  },
});
export const mtSmN4 = style({
  "@media": {
    "(min-width: 576px)": {
      marginTop: "-1.5rem",
    },
  },
});
export const mtSmN5 = style({
  "@media": {
    "(min-width: 576px)": {
      marginTop: "-3rem",
    },
  },
});
export const mtXl0 = style({
  "@media": {
    "(min-width: 1200px)": {
      marginTop: "0",
    },
  },
});
export const mtXl1 = style({
  "@media": {
    "(min-width: 1200px)": {
      marginTop: "0.25rem",
    },
  },
});
export const mtXl2 = style({
  "@media": {
    "(min-width: 1200px)": {
      marginTop: "0.5rem",
    },
  },
});
export const mtXl3 = style({
  "@media": {
    "(min-width: 1200px)": {
      marginTop: "1rem",
    },
  },
});
export const mtXl4 = style({
  "@media": {
    "(min-width: 1200px)": {
      marginTop: "1.5rem",
    },
  },
});
export const mtXl5 = style({
  "@media": {
    "(min-width: 1200px)": {
      marginTop: "3rem",
    },
  },
});
export const mtXlAuto = style({
  "@media": {
    "(min-width: 1200px)": {
      marginTop: "auto",
    },
  },
});
export const mtXlN1 = style({
  "@media": {
    "(min-width: 1200px)": {
      marginTop: "-0.25rem",
    },
  },
});
export const mtXlN2 = style({
  "@media": {
    "(min-width: 1200px)": {
      marginTop: "-0.5rem",
    },
  },
});
export const mtXlN3 = style({
  "@media": {
    "(min-width: 1200px)": {
      marginTop: "-1rem",
    },
  },
});
export const mtXlN4 = style({
  "@media": {
    "(min-width: 1200px)": {
      marginTop: "-1.5rem",
    },
  },
});
export const mtXlN5 = style({
  "@media": {
    "(min-width: 1200px)": {
      marginTop: "-3rem",
    },
  },
});
export const mw100 = style({
  maxWidth: "100%",
});
export const mx0 = style({
  marginLeft: "0",
  marginRight: "0",
});
export const mx1 = style({
  marginLeft: "0.25rem",
  marginRight: "0.25rem",
});
export const mx2 = style({
  marginLeft: "0.5rem",
  marginRight: "0.5rem",
});
export const mx3 = style({
  marginLeft: "1rem",
  marginRight: "1rem",
});
export const mx4 = style({
  marginLeft: "1.5rem",
  marginRight: "1.5rem",
});
export const mx5 = style({
  marginLeft: "3rem",
  marginRight: "3rem",
});
export const mxAuto = style({
  marginLeft: "auto",
  marginRight: "auto",
});
export const mxLg0 = style({
  "@media": {
    "(min-width: 992px)": {
      marginLeft: "0",
      marginRight: "0",
    },
  },
});
export const mxLg1 = style({
  "@media": {
    "(min-width: 992px)": {
      marginLeft: "0.25rem",
      marginRight: "0.25rem",
    },
  },
});
export const mxLg2 = style({
  "@media": {
    "(min-width: 992px)": {
      marginLeft: "0.5rem",
      marginRight: "0.5rem",
    },
  },
});
export const mxLg3 = style({
  "@media": {
    "(min-width: 992px)": {
      marginLeft: "1rem",
      marginRight: "1rem",
    },
  },
});
export const mxLg4 = style({
  "@media": {
    "(min-width: 992px)": {
      marginLeft: "1.5rem",
      marginRight: "1.5rem",
    },
  },
});
export const mxLg5 = style({
  "@media": {
    "(min-width: 992px)": {
      marginLeft: "3rem",
      marginRight: "3rem",
    },
  },
});
export const mxLgAuto = style({
  "@media": {
    "(min-width: 992px)": {
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
});
export const mxLgN1 = style({
  "@media": {
    "(min-width: 992px)": {
      marginLeft: "-0.25rem",
      marginRight: "-0.25rem",
    },
  },
});
export const mxLgN2 = style({
  "@media": {
    "(min-width: 992px)": {
      marginLeft: "-0.5rem",
      marginRight: "-0.5rem",
    },
  },
});
export const mxLgN3 = style({
  "@media": {
    "(min-width: 992px)": {
      marginLeft: "-1rem",
      marginRight: "-1rem",
    },
  },
});
export const mxLgN4 = style({
  "@media": {
    "(min-width: 992px)": {
      marginLeft: "-1.5rem",
      marginRight: "-1.5rem",
    },
  },
});
export const mxLgN5 = style({
  "@media": {
    "(min-width: 992px)": {
      marginLeft: "-3rem",
      marginRight: "-3rem",
    },
  },
});
export const mxMd0 = style({
  "@media": {
    "(min-width: 768px)": {
      marginLeft: "0",
      marginRight: "0",
    },
  },
});
export const mxMd1 = style({
  "@media": {
    "(min-width: 768px)": {
      marginLeft: "0.25rem",
      marginRight: "0.25rem",
    },
  },
});
export const mxMd2 = style({
  "@media": {
    "(min-width: 768px)": {
      marginLeft: "0.5rem",
      marginRight: "0.5rem",
    },
  },
});
export const mxMd3 = style({
  "@media": {
    "(min-width: 768px)": {
      marginLeft: "1rem",
      marginRight: "1rem",
    },
  },
});
export const mxMd4 = style({
  "@media": {
    "(min-width: 768px)": {
      marginLeft: "1.5rem",
      marginRight: "1.5rem",
    },
  },
});
export const mxMd5 = style({
  "@media": {
    "(min-width: 768px)": {
      marginLeft: "3rem",
      marginRight: "3rem",
    },
  },
});
export const mxMdAuto = style({
  "@media": {
    "(min-width: 768px)": {
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
});
export const mxMdN1 = style({
  "@media": {
    "(min-width: 768px)": {
      marginLeft: "-0.25rem",
      marginRight: "-0.25rem",
    },
  },
});
export const mxMdN2 = style({
  "@media": {
    "(min-width: 768px)": {
      marginLeft: "-0.5rem",
      marginRight: "-0.5rem",
    },
  },
});
export const mxMdN3 = style({
  "@media": {
    "(min-width: 768px)": {
      marginLeft: "-1rem",
      marginRight: "-1rem",
    },
  },
});
export const mxMdN4 = style({
  "@media": {
    "(min-width: 768px)": {
      marginLeft: "-1.5rem",
      marginRight: "-1.5rem",
    },
  },
});
export const mxMdN5 = style({
  "@media": {
    "(min-width: 768px)": {
      marginLeft: "-3rem",
      marginRight: "-3rem",
    },
  },
});
export const mxN1 = style({
  marginLeft: "-0.25rem",
  marginRight: "-0.25rem",
});
export const mxN2 = style({
  marginLeft: "-0.5rem",
  marginRight: "-0.5rem",
});
export const mxN3 = style({
  marginLeft: "-1rem",
  marginRight: "-1rem",
});
export const mxN4 = style({
  marginLeft: "-1.5rem",
  marginRight: "-1.5rem",
});
export const mxN5 = style({
  marginLeft: "-3rem",
  marginRight: "-3rem",
});
export const mxSm0 = style({
  "@media": {
    "(min-width: 576px)": {
      marginLeft: "0",
      marginRight: "0",
    },
  },
});
export const mxSm1 = style({
  "@media": {
    "(min-width: 576px)": {
      marginLeft: "0.25rem",
      marginRight: "0.25rem",
    },
  },
});
export const mxSm2 = style({
  "@media": {
    "(min-width: 576px)": {
      marginLeft: "0.5rem",
      marginRight: "0.5rem",
    },
  },
});
export const mxSm3 = style({
  "@media": {
    "(min-width: 576px)": {
      marginLeft: "1rem",
      marginRight: "1rem",
    },
  },
});
export const mxSm4 = style({
  "@media": {
    "(min-width: 576px)": {
      marginLeft: "1.5rem",
      marginRight: "1.5rem",
    },
  },
});
export const mxSm5 = style({
  "@media": {
    "(min-width: 576px)": {
      marginLeft: "3rem",
      marginRight: "3rem",
    },
  },
});
export const mxSmAuto = style({
  "@media": {
    "(min-width: 576px)": {
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
});
export const mxSmN1 = style({
  "@media": {
    "(min-width: 576px)": {
      marginLeft: "-0.25rem",
      marginRight: "-0.25rem",
    },
  },
});
export const mxSmN2 = style({
  "@media": {
    "(min-width: 576px)": {
      marginLeft: "-0.5rem",
      marginRight: "-0.5rem",
    },
  },
});
export const mxSmN3 = style({
  "@media": {
    "(min-width: 576px)": {
      marginLeft: "-1rem",
      marginRight: "-1rem",
    },
  },
});
export const mxSmN4 = style({
  "@media": {
    "(min-width: 576px)": {
      marginLeft: "-1.5rem",
      marginRight: "-1.5rem",
    },
  },
});
export const mxSmN5 = style({
  "@media": {
    "(min-width: 576px)": {
      marginLeft: "-3rem",
      marginRight: "-3rem",
    },
  },
});
export const mxXl0 = style({
  "@media": {
    "(min-width: 1200px)": {
      marginLeft: "0",
      marginRight: "0",
    },
  },
});
export const mxXl1 = style({
  "@media": {
    "(min-width: 1200px)": {
      marginLeft: "0.25rem",
      marginRight: "0.25rem",
    },
  },
});
export const mxXl2 = style({
  "@media": {
    "(min-width: 1200px)": {
      marginLeft: "0.5rem",
      marginRight: "0.5rem",
    },
  },
});
export const mxXl3 = style({
  "@media": {
    "(min-width: 1200px)": {
      marginLeft: "1rem",
      marginRight: "1rem",
    },
  },
});
export const mxXl4 = style({
  "@media": {
    "(min-width: 1200px)": {
      marginLeft: "1.5rem",
      marginRight: "1.5rem",
    },
  },
});
export const mxXl5 = style({
  "@media": {
    "(min-width: 1200px)": {
      marginLeft: "3rem",
      marginRight: "3rem",
    },
  },
});
export const mxXlAuto = style({
  "@media": {
    "(min-width: 1200px)": {
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
});
export const mxXlN1 = style({
  "@media": {
    "(min-width: 1200px)": {
      marginLeft: "-0.25rem",
      marginRight: "-0.25rem",
    },
  },
});
export const mxXlN2 = style({
  "@media": {
    "(min-width: 1200px)": {
      marginLeft: "-0.5rem",
      marginRight: "-0.5rem",
    },
  },
});
export const mxXlN3 = style({
  "@media": {
    "(min-width: 1200px)": {
      marginLeft: "-1rem",
      marginRight: "-1rem",
    },
  },
});
export const mxXlN4 = style({
  "@media": {
    "(min-width: 1200px)": {
      marginLeft: "-1.5rem",
      marginRight: "-1.5rem",
    },
  },
});
export const mxXlN5 = style({
  "@media": {
    "(min-width: 1200px)": {
      marginLeft: "-3rem",
      marginRight: "-3rem",
    },
  },
});
export const my0 = style({
  marginBottom: "0",
  marginTop: "0",
});
export const my1 = style({
  marginBottom: "0.25rem",
  marginTop: "0.25rem",
});
export const my2 = style({
  marginBottom: "0.5rem",
  marginTop: "0.5rem",
});
export const my3 = style({
  marginBottom: "1rem",
  marginTop: "1rem",
});
export const my4 = style({
  marginBottom: "1.5rem",
  marginTop: "1.5rem",
});
export const my5 = style({
  marginBottom: "3rem",
  marginTop: "3rem",
});
export const myAuto = style({
  marginBottom: "auto",
  marginTop: "auto",
});
export const myLg0 = style({
  "@media": {
    "(min-width: 992px)": {
      marginBottom: "0",
      marginTop: "0",
    },
  },
});
export const myLg1 = style({
  "@media": {
    "(min-width: 992px)": {
      marginBottom: "0.25rem",
      marginTop: "0.25rem",
    },
  },
});
export const myLg2 = style({
  "@media": {
    "(min-width: 992px)": {
      marginBottom: "0.5rem",
      marginTop: "0.5rem",
    },
  },
});
export const myLg3 = style({
  "@media": {
    "(min-width: 992px)": {
      marginBottom: "1rem",
      marginTop: "1rem",
    },
  },
});
export const myLg4 = style({
  "@media": {
    "(min-width: 992px)": {
      marginBottom: "1.5rem",
      marginTop: "1.5rem",
    },
  },
});
export const myLg5 = style({
  "@media": {
    "(min-width: 992px)": {
      marginBottom: "3rem",
      marginTop: "3rem",
    },
  },
});
export const myLgAuto = style({
  "@media": {
    "(min-width: 992px)": {
      marginBottom: "auto",
      marginTop: "auto",
    },
  },
});
export const myLgN1 = style({
  "@media": {
    "(min-width: 992px)": {
      marginBottom: "-0.25rem",
      marginTop: "-0.25rem",
    },
  },
});
export const myLgN2 = style({
  "@media": {
    "(min-width: 992px)": {
      marginBottom: "-0.5rem",
      marginTop: "-0.5rem",
    },
  },
});
export const myLgN3 = style({
  "@media": {
    "(min-width: 992px)": {
      marginBottom: "-1rem",
      marginTop: "-1rem",
    },
  },
});
export const myLgN4 = style({
  "@media": {
    "(min-width: 992px)": {
      marginBottom: "-1.5rem",
      marginTop: "-1.5rem",
    },
  },
});
export const myLgN5 = style({
  "@media": {
    "(min-width: 992px)": {
      marginBottom: "-3rem",
      marginTop: "-3rem",
    },
  },
});
export const myMd0 = style({
  "@media": {
    "(min-width: 768px)": {
      marginBottom: "0",
      marginTop: "0",
    },
  },
});
export const myMd1 = style({
  "@media": {
    "(min-width: 768px)": {
      marginBottom: "0.25rem",
      marginTop: "0.25rem",
    },
  },
});
export const myMd2 = style({
  "@media": {
    "(min-width: 768px)": {
      marginBottom: "0.5rem",
      marginTop: "0.5rem",
    },
  },
});
export const myMd3 = style({
  "@media": {
    "(min-width: 768px)": {
      marginBottom: "1rem",
      marginTop: "1rem",
    },
  },
});
export const myMd4 = style({
  "@media": {
    "(min-width: 768px)": {
      marginBottom: "1.5rem",
      marginTop: "1.5rem",
    },
  },
});
export const myMd5 = style({
  "@media": {
    "(min-width: 768px)": {
      marginBottom: "3rem",
      marginTop: "3rem",
    },
  },
});
export const myMdAuto = style({
  "@media": {
    "(min-width: 768px)": {
      marginBottom: "auto",
      marginTop: "auto",
    },
  },
});
export const myMdN1 = style({
  "@media": {
    "(min-width: 768px)": {
      marginBottom: "-0.25rem",
      marginTop: "-0.25rem",
    },
  },
});
export const myMdN2 = style({
  "@media": {
    "(min-width: 768px)": {
      marginBottom: "-0.5rem",
      marginTop: "-0.5rem",
    },
  },
});
export const myMdN3 = style({
  "@media": {
    "(min-width: 768px)": {
      marginBottom: "-1rem",
      marginTop: "-1rem",
    },
  },
});
export const myMdN4 = style({
  "@media": {
    "(min-width: 768px)": {
      marginBottom: "-1.5rem",
      marginTop: "-1.5rem",
    },
  },
});
export const myMdN5 = style({
  "@media": {
    "(min-width: 768px)": {
      marginBottom: "-3rem",
      marginTop: "-3rem",
    },
  },
});
export const myN1 = style({
  marginBottom: "-0.25rem",
  marginTop: "-0.25rem",
});
export const myN2 = style({
  marginBottom: "-0.5rem",
  marginTop: "-0.5rem",
});
export const myN3 = style({
  marginBottom: "-1rem",
  marginTop: "-1rem",
});
export const myN4 = style({
  marginBottom: "-1.5rem",
  marginTop: "-1.5rem",
});
export const myN5 = style({
  marginBottom: "-3rem",
  marginTop: "-3rem",
});
export const mySm0 = style({
  "@media": {
    "(min-width: 576px)": {
      marginBottom: "0",
      marginTop: "0",
    },
  },
});
export const mySm1 = style({
  "@media": {
    "(min-width: 576px)": {
      marginBottom: "0.25rem",
      marginTop: "0.25rem",
    },
  },
});
export const mySm2 = style({
  "@media": {
    "(min-width: 576px)": {
      marginBottom: "0.5rem",
      marginTop: "0.5rem",
    },
  },
});
export const mySm3 = style({
  "@media": {
    "(min-width: 576px)": {
      marginBottom: "1rem",
      marginTop: "1rem",
    },
  },
});
export const mySm4 = style({
  "@media": {
    "(min-width: 576px)": {
      marginBottom: "1.5rem",
      marginTop: "1.5rem",
    },
  },
});
export const mySm5 = style({
  "@media": {
    "(min-width: 576px)": {
      marginBottom: "3rem",
      marginTop: "3rem",
    },
  },
});
export const mySmAuto = style({
  "@media": {
    "(min-width: 576px)": {
      marginBottom: "auto",
      marginTop: "auto",
    },
  },
});
export const mySmN1 = style({
  "@media": {
    "(min-width: 576px)": {
      marginBottom: "-0.25rem",
      marginTop: "-0.25rem",
    },
  },
});
export const mySmN2 = style({
  "@media": {
    "(min-width: 576px)": {
      marginBottom: "-0.5rem",
      marginTop: "-0.5rem",
    },
  },
});
export const mySmN3 = style({
  "@media": {
    "(min-width: 576px)": {
      marginBottom: "-1rem",
      marginTop: "-1rem",
    },
  },
});
export const mySmN4 = style({
  "@media": {
    "(min-width: 576px)": {
      marginBottom: "-1.5rem",
      marginTop: "-1.5rem",
    },
  },
});
export const mySmN5 = style({
  "@media": {
    "(min-width: 576px)": {
      marginBottom: "-3rem",
      marginTop: "-3rem",
    },
  },
});
export const myXl0 = style({
  "@media": {
    "(min-width: 1200px)": {
      marginBottom: "0",
      marginTop: "0",
    },
  },
});
export const myXl1 = style({
  "@media": {
    "(min-width: 1200px)": {
      marginBottom: "0.25rem",
      marginTop: "0.25rem",
    },
  },
});
export const myXl2 = style({
  "@media": {
    "(min-width: 1200px)": {
      marginBottom: "0.5rem",
      marginTop: "0.5rem",
    },
  },
});
export const myXl3 = style({
  "@media": {
    "(min-width: 1200px)": {
      marginBottom: "1rem",
      marginTop: "1rem",
    },
  },
});
export const myXl4 = style({
  "@media": {
    "(min-width: 1200px)": {
      marginBottom: "1.5rem",
      marginTop: "1.5rem",
    },
  },
});
export const myXl5 = style({
  "@media": {
    "(min-width: 1200px)": {
      marginBottom: "3rem",
      marginTop: "3rem",
    },
  },
});
export const myXlAuto = style({
  "@media": {
    "(min-width: 1200px)": {
      marginBottom: "auto",
      marginTop: "auto",
    },
  },
});
export const myXlN1 = style({
  "@media": {
    "(min-width: 1200px)": {
      marginBottom: "-0.25rem",
      marginTop: "-0.25rem",
    },
  },
});
export const myXlN2 = style({
  "@media": {
    "(min-width: 1200px)": {
      marginBottom: "-0.5rem",
      marginTop: "-0.5rem",
    },
  },
});
export const myXlN3 = style({
  "@media": {
    "(min-width: 1200px)": {
      marginBottom: "-1rem",
      marginTop: "-1rem",
    },
  },
});
export const myXlN4 = style({
  "@media": {
    "(min-width: 1200px)": {
      marginBottom: "-1.5rem",
      marginTop: "-1.5rem",
    },
  },
});
export const myXlN5 = style({
  "@media": {
    "(min-width: 1200px)": {
      marginBottom: "-3rem",
      marginTop: "-3rem",
    },
  },
});
export const nav = style({
  display: "flex",
  flexWrap: "wrap",
  listStyle: "none",
  marginBottom: "0",
  msFlexWrap: "wrap",
  paddingLeft: "0",
});
export const navFill = style({
  flex: "1 1 auto",
  msFlex: "1 1 auto",
  textAlign: "center",
});
export const navJustified = style({
  flexBasis: "0",
  flexGrow: "1",
  msFlexPositive: "1",
  msFlexPreferredSize: "0",
  textAlign: "center",
});
export const navLink = style({
  color: "6c757d",
  cursor: "default",
  display: "block",
  padding: "0.5rem 1rem",
  pointerEvents: "none",
  ":focus": {
    textDecoration: "none",
  },
  ":hover": {
    textDecoration: "none",
  },
});
export const navPills = style({
  backgroundColor: "007bff",
  borderRadius: "0.25rem",
  color: "fff",
});
export const navTabs = style({
  backgroundColor: "fff",
  border: "1px solid transparent",
  borderBottom: "1px solid dee2e6",
  borderColor: "dee2e6 dee2e6 fff",
  borderTopLeftRadius: "0",
  borderTopRightRadius: "0",
  color: "495057",
  marginBottom: "-1px",
  marginTop: "-1px",
  ":focus": {
    borderColor: "e9ecef e9ecef dee2e6",
  },
  ":hover": {
    borderColor: "e9ecef e9ecef dee2e6",
  },
});
export const navbar = style({
  alignItems: "center",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  msFlexAlign: "center",
  msFlexPack: "justify",
  msFlexWrap: "wrap",
  padding: "0.5rem 1rem",
  position: "relative",
  "@media": {
    print: {
      display: "none",
    },
  },
});
export const navbarBrand = style({
  display: "inline-block",
  fontSize: "1.25rem",
  lineHeight: "inherit",
  marginRight: "1rem",
  paddingBottom: "0.3125rem",
  paddingTop: "0.3125rem",
  whiteSpace: "nowrap",
  ":focus": {
    textDecoration: "none",
  },
  ":hover": {
    textDecoration: "none",
  },
});
export const navbarCollapse = style({
  alignItems: "center",
  flexBasis: "100%",
  flexGrow: "1",
  msFlexAlign: "center",
  msFlexPositive: "1",
  msFlexPreferredSize: "100%",
});
export const navbarDark = style({
  backgroundImage:
    "url(data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.5%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e)",
  borderColor: "rgba(255,255,255,0.1)",
  color: "rgba(255,255,255,0.5)",
  ":focus": {
    color: "rgba(255,255,255,0.75)",
  },
  ":hover": {
    color: "rgba(255,255,255,0.75)",
  },
});
export const navbarExpand = style({
  display: "none",
  flexBasis: "auto",
  flexDirection: "row",
  flexFlow: "row nowrap",
  flexWrap: "nowrap",
  justifyContent: "flex-start",
  msFlexDirection: "row",
  msFlexFlow: "row nowrap",
  msFlexPack: "start",
  msFlexPreferredSize: "auto",
  msFlexWrap: "nowrap",
  overflow: "visible",
  paddingLeft: "0.5rem",
  paddingRight: "0.5rem",
  position: "absolute",
});
export const navbarExpandLg = style({
  "@media": {
    "(max-width: 991.98px)": {
      display: "none",
      flexBasis: "auto",
      flexDirection: "row",
      flexFlow: "row nowrap",
      flexWrap: "nowrap",
      justifyContent: "flex-start",
      msFlexDirection: "row",
      msFlexFlow: "row nowrap",
      msFlexPack: "start",
      msFlexPreferredSize: "auto",
      msFlexWrap: "nowrap",
      overflow: "visible",
      paddingLeft: "0.5rem",
      paddingRight: "0.5rem",
      position: "absolute",
    },
  },
});
export const navbarExpandMd = style({
  "@media": {
    "(max-width: 767.98px)": {
      display: "none",
      flexBasis: "auto",
      flexDirection: "row",
      flexFlow: "row nowrap",
      flexWrap: "nowrap",
      justifyContent: "flex-start",
      msFlexDirection: "row",
      msFlexFlow: "row nowrap",
      msFlexPack: "start",
      msFlexPreferredSize: "auto",
      msFlexWrap: "nowrap",
      overflow: "visible",
      paddingLeft: "0.5rem",
      paddingRight: "0.5rem",
      position: "absolute",
    },
  },
});
export const navbarExpandSm = style({
  "@media": {
    "(max-width: 575.98px)": {
      display: "none",
      flexBasis: "auto",
      flexDirection: "row",
      flexFlow: "row nowrap",
      flexWrap: "nowrap",
      justifyContent: "flex-start",
      msFlexDirection: "row",
      msFlexFlow: "row nowrap",
      msFlexPack: "start",
      msFlexPreferredSize: "auto",
      msFlexWrap: "nowrap",
      overflow: "visible",
      paddingLeft: "0.5rem",
      paddingRight: "0.5rem",
      position: "absolute",
    },
  },
});
export const navbarExpandXl = style({
  "@media": {
    "(max-width: 1199.98px)": {
      display: "none",
      flexBasis: "auto",
      flexDirection: "row",
      flexFlow: "row nowrap",
      flexWrap: "nowrap",
      justifyContent: "flex-start",
      msFlexDirection: "row",
      msFlexFlow: "row nowrap",
      msFlexPack: "start",
      msFlexPreferredSize: "auto",
      msFlexWrap: "nowrap",
      overflow: "visible",
      paddingLeft: "0.5rem",
      paddingRight: "0.5rem",
      position: "absolute",
    },
  },
});
export const navbarLight = style({
  backgroundImage:
    "url(data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 0, 0, 0.5%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e)",
  borderColor: "rgba(0,0,0,0.1)",
  color: "rgba(0,0,0,0.5)",
  ":focus": {
    color: "rgba(0,0,0,0.7)",
  },
  ":hover": {
    color: "rgba(0,0,0,0.7)",
  },
});
export const navbarNav = style({
  display: "flex",
  flexDirection: "column",
  float: "none",
  listStyle: "none",
  marginBottom: "0",
  msFlexDirection: "column",
  paddingLeft: "0",
  paddingRight: "0",
  position: "static",
});
export const navbarNavScroll = style({
  maxHeight: "75vh",
  overflowY: "auto",
});
export const navbarText = style({
  display: "inline-block",
  paddingBottom: "0.5rem",
  paddingTop: "0.5rem",
});
export const navbarToggler = style({
  backgroundColor: "transparent",
  border: "1px solid transparent",
  borderRadius: "0.25rem",
  fontSize: "1.25rem",
  lineHeight: "1",
  padding: "0.25rem 0.75rem",
  ":focus": {
    textDecoration: "none",
  },
  ":hover": {
    textDecoration: "none",
  },
});
export const navbarTogglerIcon = style({
  background: "50% / 100% 100% no-repeat",
  content: "",
  display: "inline-block",
  height: "1.5em",
  verticalAlign: "middle",
  width: "1.5em",
});
export const noGutters = style({
  marginLeft: "0",
  marginRight: "0",
  paddingLeft: "0",
  paddingRight: "0",
  selectors: {
    "&[class*='col-']": {
      paddingLeft: "0",
      paddingRight: "0",
    },
  },
});
export const offset1 = style({
  marginLeft: "8.333333%",
});
export const offset10 = style({
  marginLeft: "83.333333%",
});
export const offset11 = style({
  marginLeft: "91.666667%",
});
export const offset2 = style({
  marginLeft: "16.666667%",
});
export const offset3 = style({
  marginLeft: "25%",
});
export const offset4 = style({
  marginLeft: "33.333333%",
});
export const offset5 = style({
  marginLeft: "41.666667%",
});
export const offset6 = style({
  marginLeft: "50%",
});
export const offset7 = style({
  marginLeft: "58.333333%",
});
export const offset8 = style({
  marginLeft: "66.666667%",
});
export const offset9 = style({
  marginLeft: "75%",
});
export const offsetLg0 = style({
  "@media": {
    "(min-width: 992px)": {
      marginLeft: "0",
    },
  },
});
export const offsetLg1 = style({
  "@media": {
    "(min-width: 992px)": {
      marginLeft: "8.333333%",
    },
  },
});
export const offsetLg10 = style({
  "@media": {
    "(min-width: 992px)": {
      marginLeft: "83.333333%",
    },
  },
});
export const offsetLg11 = style({
  "@media": {
    "(min-width: 992px)": {
      marginLeft: "91.666667%",
    },
  },
});
export const offsetLg2 = style({
  "@media": {
    "(min-width: 992px)": {
      marginLeft: "16.666667%",
    },
  },
});
export const offsetLg3 = style({
  "@media": {
    "(min-width: 992px)": {
      marginLeft: "25%",
    },
  },
});
export const offsetLg4 = style({
  "@media": {
    "(min-width: 992px)": {
      marginLeft: "33.333333%",
    },
  },
});
export const offsetLg5 = style({
  "@media": {
    "(min-width: 992px)": {
      marginLeft: "41.666667%",
    },
  },
});
export const offsetLg6 = style({
  "@media": {
    "(min-width: 992px)": {
      marginLeft: "50%",
    },
  },
});
export const offsetLg7 = style({
  "@media": {
    "(min-width: 992px)": {
      marginLeft: "58.333333%",
    },
  },
});
export const offsetLg8 = style({
  "@media": {
    "(min-width: 992px)": {
      marginLeft: "66.666667%",
    },
  },
});
export const offsetLg9 = style({
  "@media": {
    "(min-width: 992px)": {
      marginLeft: "75%",
    },
  },
});
export const offsetMd0 = style({
  "@media": {
    "(min-width: 768px)": {
      marginLeft: "0",
    },
  },
});
export const offsetMd1 = style({
  "@media": {
    "(min-width: 768px)": {
      marginLeft: "8.333333%",
    },
  },
});
export const offsetMd10 = style({
  "@media": {
    "(min-width: 768px)": {
      marginLeft: "83.333333%",
    },
  },
});
export const offsetMd11 = style({
  "@media": {
    "(min-width: 768px)": {
      marginLeft: "91.666667%",
    },
  },
});
export const offsetMd2 = style({
  "@media": {
    "(min-width: 768px)": {
      marginLeft: "16.666667%",
    },
  },
});
export const offsetMd3 = style({
  "@media": {
    "(min-width: 768px)": {
      marginLeft: "25%",
    },
  },
});
export const offsetMd4 = style({
  "@media": {
    "(min-width: 768px)": {
      marginLeft: "33.333333%",
    },
  },
});
export const offsetMd5 = style({
  "@media": {
    "(min-width: 768px)": {
      marginLeft: "41.666667%",
    },
  },
});
export const offsetMd6 = style({
  "@media": {
    "(min-width: 768px)": {
      marginLeft: "50%",
    },
  },
});
export const offsetMd7 = style({
  "@media": {
    "(min-width: 768px)": {
      marginLeft: "58.333333%",
    },
  },
});
export const offsetMd8 = style({
  "@media": {
    "(min-width: 768px)": {
      marginLeft: "66.666667%",
    },
  },
});
export const offsetMd9 = style({
  "@media": {
    "(min-width: 768px)": {
      marginLeft: "75%",
    },
  },
});
export const offsetSm0 = style({
  "@media": {
    "(min-width: 576px)": {
      marginLeft: "0",
    },
  },
});
export const offsetSm1 = style({
  "@media": {
    "(min-width: 576px)": {
      marginLeft: "8.333333%",
    },
  },
});
export const offsetSm10 = style({
  "@media": {
    "(min-width: 576px)": {
      marginLeft: "83.333333%",
    },
  },
});
export const offsetSm11 = style({
  "@media": {
    "(min-width: 576px)": {
      marginLeft: "91.666667%",
    },
  },
});
export const offsetSm2 = style({
  "@media": {
    "(min-width: 576px)": {
      marginLeft: "16.666667%",
    },
  },
});
export const offsetSm3 = style({
  "@media": {
    "(min-width: 576px)": {
      marginLeft: "25%",
    },
  },
});
export const offsetSm4 = style({
  "@media": {
    "(min-width: 576px)": {
      marginLeft: "33.333333%",
    },
  },
});
export const offsetSm5 = style({
  "@media": {
    "(min-width: 576px)": {
      marginLeft: "41.666667%",
    },
  },
});
export const offsetSm6 = style({
  "@media": {
    "(min-width: 576px)": {
      marginLeft: "50%",
    },
  },
});
export const offsetSm7 = style({
  "@media": {
    "(min-width: 576px)": {
      marginLeft: "58.333333%",
    },
  },
});
export const offsetSm8 = style({
  "@media": {
    "(min-width: 576px)": {
      marginLeft: "66.666667%",
    },
  },
});
export const offsetSm9 = style({
  "@media": {
    "(min-width: 576px)": {
      marginLeft: "75%",
    },
  },
});
export const offsetXl0 = style({
  "@media": {
    "(min-width: 1200px)": {
      marginLeft: "0",
    },
  },
});
export const offsetXl1 = style({
  "@media": {
    "(min-width: 1200px)": {
      marginLeft: "8.333333%",
    },
  },
});
export const offsetXl10 = style({
  "@media": {
    "(min-width: 1200px)": {
      marginLeft: "83.333333%",
    },
  },
});
export const offsetXl11 = style({
  "@media": {
    "(min-width: 1200px)": {
      marginLeft: "91.666667%",
    },
  },
});
export const offsetXl2 = style({
  "@media": {
    "(min-width: 1200px)": {
      marginLeft: "16.666667%",
    },
  },
});
export const offsetXl3 = style({
  "@media": {
    "(min-width: 1200px)": {
      marginLeft: "25%",
    },
  },
});
export const offsetXl4 = style({
  "@media": {
    "(min-width: 1200px)": {
      marginLeft: "33.333333%",
    },
  },
});
export const offsetXl5 = style({
  "@media": {
    "(min-width: 1200px)": {
      marginLeft: "41.666667%",
    },
  },
});
export const offsetXl6 = style({
  "@media": {
    "(min-width: 1200px)": {
      marginLeft: "50%",
    },
  },
});
export const offsetXl7 = style({
  "@media": {
    "(min-width: 1200px)": {
      marginLeft: "58.333333%",
    },
  },
});
export const offsetXl8 = style({
  "@media": {
    "(min-width: 1200px)": {
      marginLeft: "66.666667%",
    },
  },
});
export const offsetXl9 = style({
  "@media": {
    "(min-width: 1200px)": {
      marginLeft: "75%",
    },
  },
});
export const order0 = style({
  msFlexOrder: "0",
  order: "0",
});
export const order1 = style({
  msFlexOrder: "1",
  order: "1",
});
export const order10 = style({
  msFlexOrder: "10",
  order: "10",
});
export const order11 = style({
  msFlexOrder: "11",
  order: "11",
});
export const order12 = style({
  msFlexOrder: "12",
  order: "12",
});
export const order2 = style({
  msFlexOrder: "2",
  order: "2",
});
export const order3 = style({
  msFlexOrder: "3",
  order: "3",
});
export const order4 = style({
  msFlexOrder: "4",
  order: "4",
});
export const order5 = style({
  msFlexOrder: "5",
  order: "5",
});
export const order6 = style({
  msFlexOrder: "6",
  order: "6",
});
export const order7 = style({
  msFlexOrder: "7",
  order: "7",
});
export const order8 = style({
  msFlexOrder: "8",
  order: "8",
});
export const order9 = style({
  msFlexOrder: "9",
  order: "9",
});
export const orderFirst = style({
  msFlexOrder: "-1",
  order: "-1",
});
export const orderLast = style({
  msFlexOrder: "13",
  order: "13",
});
export const orderLg0 = style({
  "@media": {
    "(min-width: 992px)": {
      msFlexOrder: "0",
      order: "0",
    },
  },
});
export const orderLg1 = style({
  "@media": {
    "(min-width: 992px)": {
      msFlexOrder: "1",
      order: "1",
    },
  },
});
export const orderLg10 = style({
  "@media": {
    "(min-width: 992px)": {
      msFlexOrder: "10",
      order: "10",
    },
  },
});
export const orderLg11 = style({
  "@media": {
    "(min-width: 992px)": {
      msFlexOrder: "11",
      order: "11",
    },
  },
});
export const orderLg12 = style({
  "@media": {
    "(min-width: 992px)": {
      msFlexOrder: "12",
      order: "12",
    },
  },
});
export const orderLg2 = style({
  "@media": {
    "(min-width: 992px)": {
      msFlexOrder: "2",
      order: "2",
    },
  },
});
export const orderLg3 = style({
  "@media": {
    "(min-width: 992px)": {
      msFlexOrder: "3",
      order: "3",
    },
  },
});
export const orderLg4 = style({
  "@media": {
    "(min-width: 992px)": {
      msFlexOrder: "4",
      order: "4",
    },
  },
});
export const orderLg5 = style({
  "@media": {
    "(min-width: 992px)": {
      msFlexOrder: "5",
      order: "5",
    },
  },
});
export const orderLg6 = style({
  "@media": {
    "(min-width: 992px)": {
      msFlexOrder: "6",
      order: "6",
    },
  },
});
export const orderLg7 = style({
  "@media": {
    "(min-width: 992px)": {
      msFlexOrder: "7",
      order: "7",
    },
  },
});
export const orderLg8 = style({
  "@media": {
    "(min-width: 992px)": {
      msFlexOrder: "8",
      order: "8",
    },
  },
});
export const orderLg9 = style({
  "@media": {
    "(min-width: 992px)": {
      msFlexOrder: "9",
      order: "9",
    },
  },
});
export const orderLgFirst = style({
  "@media": {
    "(min-width: 992px)": {
      msFlexOrder: "-1",
      order: "-1",
    },
  },
});
export const orderLgLast = style({
  "@media": {
    "(min-width: 992px)": {
      msFlexOrder: "13",
      order: "13",
    },
  },
});
export const orderMd0 = style({
  "@media": {
    "(min-width: 768px)": {
      msFlexOrder: "0",
      order: "0",
    },
  },
});
export const orderMd1 = style({
  "@media": {
    "(min-width: 768px)": {
      msFlexOrder: "1",
      order: "1",
    },
  },
});
export const orderMd10 = style({
  "@media": {
    "(min-width: 768px)": {
      msFlexOrder: "10",
      order: "10",
    },
  },
});
export const orderMd11 = style({
  "@media": {
    "(min-width: 768px)": {
      msFlexOrder: "11",
      order: "11",
    },
  },
});
export const orderMd12 = style({
  "@media": {
    "(min-width: 768px)": {
      msFlexOrder: "12",
      order: "12",
    },
  },
});
export const orderMd2 = style({
  "@media": {
    "(min-width: 768px)": {
      msFlexOrder: "2",
      order: "2",
    },
  },
});
export const orderMd3 = style({
  "@media": {
    "(min-width: 768px)": {
      msFlexOrder: "3",
      order: "3",
    },
  },
});
export const orderMd4 = style({
  "@media": {
    "(min-width: 768px)": {
      msFlexOrder: "4",
      order: "4",
    },
  },
});
export const orderMd5 = style({
  "@media": {
    "(min-width: 768px)": {
      msFlexOrder: "5",
      order: "5",
    },
  },
});
export const orderMd6 = style({
  "@media": {
    "(min-width: 768px)": {
      msFlexOrder: "6",
      order: "6",
    },
  },
});
export const orderMd7 = style({
  "@media": {
    "(min-width: 768px)": {
      msFlexOrder: "7",
      order: "7",
    },
  },
});
export const orderMd8 = style({
  "@media": {
    "(min-width: 768px)": {
      msFlexOrder: "8",
      order: "8",
    },
  },
});
export const orderMd9 = style({
  "@media": {
    "(min-width: 768px)": {
      msFlexOrder: "9",
      order: "9",
    },
  },
});
export const orderMdFirst = style({
  "@media": {
    "(min-width: 768px)": {
      msFlexOrder: "-1",
      order: "-1",
    },
  },
});
export const orderMdLast = style({
  "@media": {
    "(min-width: 768px)": {
      msFlexOrder: "13",
      order: "13",
    },
  },
});
export const orderSm0 = style({
  "@media": {
    "(min-width: 576px)": {
      msFlexOrder: "0",
      order: "0",
    },
  },
});
export const orderSm1 = style({
  "@media": {
    "(min-width: 576px)": {
      msFlexOrder: "1",
      order: "1",
    },
  },
});
export const orderSm10 = style({
  "@media": {
    "(min-width: 576px)": {
      msFlexOrder: "10",
      order: "10",
    },
  },
});
export const orderSm11 = style({
  "@media": {
    "(min-width: 576px)": {
      msFlexOrder: "11",
      order: "11",
    },
  },
});
export const orderSm12 = style({
  "@media": {
    "(min-width: 576px)": {
      msFlexOrder: "12",
      order: "12",
    },
  },
});
export const orderSm2 = style({
  "@media": {
    "(min-width: 576px)": {
      msFlexOrder: "2",
      order: "2",
    },
  },
});
export const orderSm3 = style({
  "@media": {
    "(min-width: 576px)": {
      msFlexOrder: "3",
      order: "3",
    },
  },
});
export const orderSm4 = style({
  "@media": {
    "(min-width: 576px)": {
      msFlexOrder: "4",
      order: "4",
    },
  },
});
export const orderSm5 = style({
  "@media": {
    "(min-width: 576px)": {
      msFlexOrder: "5",
      order: "5",
    },
  },
});
export const orderSm6 = style({
  "@media": {
    "(min-width: 576px)": {
      msFlexOrder: "6",
      order: "6",
    },
  },
});
export const orderSm7 = style({
  "@media": {
    "(min-width: 576px)": {
      msFlexOrder: "7",
      order: "7",
    },
  },
});
export const orderSm8 = style({
  "@media": {
    "(min-width: 576px)": {
      msFlexOrder: "8",
      order: "8",
    },
  },
});
export const orderSm9 = style({
  "@media": {
    "(min-width: 576px)": {
      msFlexOrder: "9",
      order: "9",
    },
  },
});
export const orderSmFirst = style({
  "@media": {
    "(min-width: 576px)": {
      msFlexOrder: "-1",
      order: "-1",
    },
  },
});
export const orderSmLast = style({
  "@media": {
    "(min-width: 576px)": {
      msFlexOrder: "13",
      order: "13",
    },
  },
});
export const orderXl0 = style({
  "@media": {
    "(min-width: 1200px)": {
      msFlexOrder: "0",
      order: "0",
    },
  },
});
export const orderXl1 = style({
  "@media": {
    "(min-width: 1200px)": {
      msFlexOrder: "1",
      order: "1",
    },
  },
});
export const orderXl10 = style({
  "@media": {
    "(min-width: 1200px)": {
      msFlexOrder: "10",
      order: "10",
    },
  },
});
export const orderXl11 = style({
  "@media": {
    "(min-width: 1200px)": {
      msFlexOrder: "11",
      order: "11",
    },
  },
});
export const orderXl12 = style({
  "@media": {
    "(min-width: 1200px)": {
      msFlexOrder: "12",
      order: "12",
    },
  },
});
export const orderXl2 = style({
  "@media": {
    "(min-width: 1200px)": {
      msFlexOrder: "2",
      order: "2",
    },
  },
});
export const orderXl3 = style({
  "@media": {
    "(min-width: 1200px)": {
      msFlexOrder: "3",
      order: "3",
    },
  },
});
export const orderXl4 = style({
  "@media": {
    "(min-width: 1200px)": {
      msFlexOrder: "4",
      order: "4",
    },
  },
});
export const orderXl5 = style({
  "@media": {
    "(min-width: 1200px)": {
      msFlexOrder: "5",
      order: "5",
    },
  },
});
export const orderXl6 = style({
  "@media": {
    "(min-width: 1200px)": {
      msFlexOrder: "6",
      order: "6",
    },
  },
});
export const orderXl7 = style({
  "@media": {
    "(min-width: 1200px)": {
      msFlexOrder: "7",
      order: "7",
    },
  },
});
export const orderXl8 = style({
  "@media": {
    "(min-width: 1200px)": {
      msFlexOrder: "8",
      order: "8",
    },
  },
});
export const orderXl9 = style({
  "@media": {
    "(min-width: 1200px)": {
      msFlexOrder: "9",
      order: "9",
    },
  },
});
export const orderXlFirst = style({
  "@media": {
    "(min-width: 1200px)": {
      msFlexOrder: "-1",
      order: "-1",
    },
  },
});
export const orderXlLast = style({
  "@media": {
    "(min-width: 1200px)": {
      msFlexOrder: "13",
      order: "13",
    },
  },
});
export const overflowAuto = style({
  overflow: "auto",
});
export const overflowHidden = style({
  overflow: "hidden",
});
export const p0 = style({
  padding: "0",
});
export const p1 = style({
  padding: "0.25rem",
});
export const p2 = style({
  padding: "0.5rem",
});
export const p3 = style({
  padding: "1rem",
});
export const p4 = style({
  padding: "1.5rem",
});
export const p5 = style({
  padding: "3rem",
});
export const pLg0 = style({
  "@media": {
    "(min-width: 992px)": {
      padding: "0",
    },
  },
});
export const pLg1 = style({
  "@media": {
    "(min-width: 992px)": {
      padding: "0.25rem",
    },
  },
});
export const pLg2 = style({
  "@media": {
    "(min-width: 992px)": {
      padding: "0.5rem",
    },
  },
});
export const pLg3 = style({
  "@media": {
    "(min-width: 992px)": {
      padding: "1rem",
    },
  },
});
export const pLg4 = style({
  "@media": {
    "(min-width: 992px)": {
      padding: "1.5rem",
    },
  },
});
export const pLg5 = style({
  "@media": {
    "(min-width: 992px)": {
      padding: "3rem",
    },
  },
});
export const pMd0 = style({
  "@media": {
    "(min-width: 768px)": {
      padding: "0",
    },
  },
});
export const pMd1 = style({
  "@media": {
    "(min-width: 768px)": {
      padding: "0.25rem",
    },
  },
});
export const pMd2 = style({
  "@media": {
    "(min-width: 768px)": {
      padding: "0.5rem",
    },
  },
});
export const pMd3 = style({
  "@media": {
    "(min-width: 768px)": {
      padding: "1rem",
    },
  },
});
export const pMd4 = style({
  "@media": {
    "(min-width: 768px)": {
      padding: "1.5rem",
    },
  },
});
export const pMd5 = style({
  "@media": {
    "(min-width: 768px)": {
      padding: "3rem",
    },
  },
});
export const pSm0 = style({
  "@media": {
    "(min-width: 576px)": {
      padding: "0",
    },
  },
});
export const pSm1 = style({
  "@media": {
    "(min-width: 576px)": {
      padding: "0.25rem",
    },
  },
});
export const pSm2 = style({
  "@media": {
    "(min-width: 576px)": {
      padding: "0.5rem",
    },
  },
});
export const pSm3 = style({
  "@media": {
    "(min-width: 576px)": {
      padding: "1rem",
    },
  },
});
export const pSm4 = style({
  "@media": {
    "(min-width: 576px)": {
      padding: "1.5rem",
    },
  },
});
export const pSm5 = style({
  "@media": {
    "(min-width: 576px)": {
      padding: "3rem",
    },
  },
});
export const pXl0 = style({
  "@media": {
    "(min-width: 1200px)": {
      padding: "0",
    },
  },
});
export const pXl1 = style({
  "@media": {
    "(min-width: 1200px)": {
      padding: "0.25rem",
    },
  },
});
export const pXl2 = style({
  "@media": {
    "(min-width: 1200px)": {
      padding: "0.5rem",
    },
  },
});
export const pXl3 = style({
  "@media": {
    "(min-width: 1200px)": {
      padding: "1rem",
    },
  },
});
export const pXl4 = style({
  "@media": {
    "(min-width: 1200px)": {
      padding: "1.5rem",
    },
  },
});
export const pXl5 = style({
  "@media": {
    "(min-width: 1200px)": {
      padding: "3rem",
    },
  },
});
export const pageItem = style({
  backgroundColor: "fff",
  borderColor: "dee2e6",
  color: "6c757d",
  cursor: "auto",
  pointerEvents: "none",
  zIndex: "3",
  ":first-child": {
    borderBottomLeftRadius: "0.25rem",
    borderTopLeftRadius: "0.25rem",
    marginLeft: "0",
  },
  ":last-child": {
    borderBottomRightRadius: "0.25rem",
    borderTopRightRadius: "0.25rem",
  },
});
export const pageLink = style({
  backgroundColor: "fff",
  border: "1px solid dee2e6",
  color: "007bff",
  display: "block",
  lineHeight: "1.25",
  marginLeft: "-1px",
  padding: "0.5rem 0.75rem",
  position: "relative",
  ":focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,0.25)",
    outline: "0",
    zIndex: "3",
  },
  ":hover": {
    backgroundColor: "e9ecef",
    borderColor: "dee2e6",
    color: "0056b3",
    textDecoration: "none",
    zIndex: "2",
  },
});
export const pagination = style({
  borderRadius: "0.25rem",
  display: "flex",
  listStyle: "none",
  paddingLeft: "0",
});
export const paginationLg = style({
  fontSize: "1.25rem",
  lineHeight: "1.5",
  padding: "0.75rem 1.5rem",
  ":first-child": {
    borderBottomLeftRadius: "0.3rem",
    borderTopLeftRadius: "0.3rem",
  },
  ":last-child": {
    borderBottomRightRadius: "0.3rem",
    borderTopRightRadius: "0.3rem",
  },
});
export const paginationSm = style({
  fontSize: "0.875rem",
  lineHeight: "1.5",
  padding: "0.25rem 0.5rem",
  ":first-child": {
    borderBottomLeftRadius: "0.2rem",
    borderTopLeftRadius: "0.2rem",
  },
  ":last-child": {
    borderBottomRightRadius: "0.2rem",
    borderTopRightRadius: "0.2rem",
  },
});
export const pb0 = style({
  paddingBottom: "0",
});
export const pb1 = style({
  paddingBottom: "0.25rem",
});
export const pb2 = style({
  paddingBottom: "0.5rem",
});
export const pb3 = style({
  paddingBottom: "1rem",
});
export const pb4 = style({
  paddingBottom: "1.5rem",
});
export const pb5 = style({
  paddingBottom: "3rem",
});
export const pbLg0 = style({
  "@media": {
    "(min-width: 992px)": {
      paddingBottom: "0",
    },
  },
});
export const pbLg1 = style({
  "@media": {
    "(min-width: 992px)": {
      paddingBottom: "0.25rem",
    },
  },
});
export const pbLg2 = style({
  "@media": {
    "(min-width: 992px)": {
      paddingBottom: "0.5rem",
    },
  },
});
export const pbLg3 = style({
  "@media": {
    "(min-width: 992px)": {
      paddingBottom: "1rem",
    },
  },
});
export const pbLg4 = style({
  "@media": {
    "(min-width: 992px)": {
      paddingBottom: "1.5rem",
    },
  },
});
export const pbLg5 = style({
  "@media": {
    "(min-width: 992px)": {
      paddingBottom: "3rem",
    },
  },
});
export const pbMd0 = style({
  "@media": {
    "(min-width: 768px)": {
      paddingBottom: "0",
    },
  },
});
export const pbMd1 = style({
  "@media": {
    "(min-width: 768px)": {
      paddingBottom: "0.25rem",
    },
  },
});
export const pbMd2 = style({
  "@media": {
    "(min-width: 768px)": {
      paddingBottom: "0.5rem",
    },
  },
});
export const pbMd3 = style({
  "@media": {
    "(min-width: 768px)": {
      paddingBottom: "1rem",
    },
  },
});
export const pbMd4 = style({
  "@media": {
    "(min-width: 768px)": {
      paddingBottom: "1.5rem",
    },
  },
});
export const pbMd5 = style({
  "@media": {
    "(min-width: 768px)": {
      paddingBottom: "3rem",
    },
  },
});
export const pbSm0 = style({
  "@media": {
    "(min-width: 576px)": {
      paddingBottom: "0",
    },
  },
});
export const pbSm1 = style({
  "@media": {
    "(min-width: 576px)": {
      paddingBottom: "0.25rem",
    },
  },
});
export const pbSm2 = style({
  "@media": {
    "(min-width: 576px)": {
      paddingBottom: "0.5rem",
    },
  },
});
export const pbSm3 = style({
  "@media": {
    "(min-width: 576px)": {
      paddingBottom: "1rem",
    },
  },
});
export const pbSm4 = style({
  "@media": {
    "(min-width: 576px)": {
      paddingBottom: "1.5rem",
    },
  },
});
export const pbSm5 = style({
  "@media": {
    "(min-width: 576px)": {
      paddingBottom: "3rem",
    },
  },
});
export const pbXl0 = style({
  "@media": {
    "(min-width: 1200px)": {
      paddingBottom: "0",
    },
  },
});
export const pbXl1 = style({
  "@media": {
    "(min-width: 1200px)": {
      paddingBottom: "0.25rem",
    },
  },
});
export const pbXl2 = style({
  "@media": {
    "(min-width: 1200px)": {
      paddingBottom: "0.5rem",
    },
  },
});
export const pbXl3 = style({
  "@media": {
    "(min-width: 1200px)": {
      paddingBottom: "1rem",
    },
  },
});
export const pbXl4 = style({
  "@media": {
    "(min-width: 1200px)": {
      paddingBottom: "1.5rem",
    },
  },
});
export const pbXl5 = style({
  "@media": {
    "(min-width: 1200px)": {
      paddingBottom: "3rem",
    },
  },
});
export const pl0 = style({
  paddingLeft: "0",
});
export const pl1 = style({
  paddingLeft: "0.25rem",
});
export const pl2 = style({
  paddingLeft: "0.5rem",
});
export const pl3 = style({
  paddingLeft: "1rem",
});
export const pl4 = style({
  paddingLeft: "1.5rem",
});
export const pl5 = style({
  paddingLeft: "3rem",
});
export const plLg0 = style({
  "@media": {
    "(min-width: 992px)": {
      paddingLeft: "0",
    },
  },
});
export const plLg1 = style({
  "@media": {
    "(min-width: 992px)": {
      paddingLeft: "0.25rem",
    },
  },
});
export const plLg2 = style({
  "@media": {
    "(min-width: 992px)": {
      paddingLeft: "0.5rem",
    },
  },
});
export const plLg3 = style({
  "@media": {
    "(min-width: 992px)": {
      paddingLeft: "1rem",
    },
  },
});
export const plLg4 = style({
  "@media": {
    "(min-width: 992px)": {
      paddingLeft: "1.5rem",
    },
  },
});
export const plLg5 = style({
  "@media": {
    "(min-width: 992px)": {
      paddingLeft: "3rem",
    },
  },
});
export const plMd0 = style({
  "@media": {
    "(min-width: 768px)": {
      paddingLeft: "0",
    },
  },
});
export const plMd1 = style({
  "@media": {
    "(min-width: 768px)": {
      paddingLeft: "0.25rem",
    },
  },
});
export const plMd2 = style({
  "@media": {
    "(min-width: 768px)": {
      paddingLeft: "0.5rem",
    },
  },
});
export const plMd3 = style({
  "@media": {
    "(min-width: 768px)": {
      paddingLeft: "1rem",
    },
  },
});
export const plMd4 = style({
  "@media": {
    "(min-width: 768px)": {
      paddingLeft: "1.5rem",
    },
  },
});
export const plMd5 = style({
  "@media": {
    "(min-width: 768px)": {
      paddingLeft: "3rem",
    },
  },
});
export const plSm0 = style({
  "@media": {
    "(min-width: 576px)": {
      paddingLeft: "0",
    },
  },
});
export const plSm1 = style({
  "@media": {
    "(min-width: 576px)": {
      paddingLeft: "0.25rem",
    },
  },
});
export const plSm2 = style({
  "@media": {
    "(min-width: 576px)": {
      paddingLeft: "0.5rem",
    },
  },
});
export const plSm3 = style({
  "@media": {
    "(min-width: 576px)": {
      paddingLeft: "1rem",
    },
  },
});
export const plSm4 = style({
  "@media": {
    "(min-width: 576px)": {
      paddingLeft: "1.5rem",
    },
  },
});
export const plSm5 = style({
  "@media": {
    "(min-width: 576px)": {
      paddingLeft: "3rem",
    },
  },
});
export const plXl0 = style({
  "@media": {
    "(min-width: 1200px)": {
      paddingLeft: "0",
    },
  },
});
export const plXl1 = style({
  "@media": {
    "(min-width: 1200px)": {
      paddingLeft: "0.25rem",
    },
  },
});
export const plXl2 = style({
  "@media": {
    "(min-width: 1200px)": {
      paddingLeft: "0.5rem",
    },
  },
});
export const plXl3 = style({
  "@media": {
    "(min-width: 1200px)": {
      paddingLeft: "1rem",
    },
  },
});
export const plXl4 = style({
  "@media": {
    "(min-width: 1200px)": {
      paddingLeft: "1.5rem",
    },
  },
});
export const plXl5 = style({
  "@media": {
    "(min-width: 1200px)": {
      paddingLeft: "3rem",
    },
  },
});
export const popover = style({
  backgroundClip: "padding-box",
  backgroundColor: "fff",
  border: "1px solid rgba(0,0,0,0.2)",
  borderRadius: "0.3rem",
  display: "block",
  fontFamily:
    "-apple-system , BlinkMacSystemFont , Segoe UI , Roboto , Helvetica Neue , Arial , Noto Sans , Liberation Sans , sans-serif , Apple Color Emoji , Segoe UI Emoji , Segoe UI Symbol , Noto Color Emoji",
  fontSize: "0.875rem",
  fontStyle: "normal",
  fontWeight: "400",
  height: "0.5rem",
  left: "0",
  letterSpacing: "normal",
  lineBreak: "auto",
  lineHeight: "1.5",
  margin: "0 0.3rem",
  maxWidth: "276px",
  position: "absolute",
  textAlign: "start",
  textDecoration: "none",
  textShadow: "none",
  textTransform: "none",
  top: "0",
  whiteSpace: "normal",
  width: "1rem",
  wordBreak: "normal",
  wordSpacing: "normal",
  wordWrap: "break-word",
  zIndex: "1060",
  "::after": {
    borderColor: "transparent",
    borderStyle: "solid",
    content: "",
    display: "block",
    position: "absolute",
  },
  "::before": {
    borderColor: "transparent",
    borderStyle: "solid",
    content: "",
    display: "block",
    position: "absolute",
  },
});
export const popoverBody = style({
  color: "212529",
  padding: "0.5rem 0.75rem",
});
export const popoverHeader = style({
  backgroundColor: "f7f7f7",
  borderBottom: "1px solid ebebeb",
  borderTopLeftRadius: "calc(0.3rem-1px)",
  borderTopRightRadius: "calc(0.3rem-1px)",
  fontSize: "1rem",
  marginBottom: "0",
  padding: "0.5rem 0.75rem",
  ":empty": {
    display: "none",
  },
});
export const positionAbsolute = style({
  position: "absolute",
});
export const positionFixed = style({
  position: "fixed",
});
export const positionRelative = style({
  position: "relative",
});
export const positionStatic = style({
  position: "static",
});
export const positionSticky = style({
  position: "sticky",
});
export const pr0 = style({
  paddingRight: "0",
});
export const pr1 = style({
  paddingRight: "0.25rem",
});
export const pr2 = style({
  paddingRight: "0.5rem",
});
export const pr3 = style({
  paddingRight: "1rem",
});
export const pr4 = style({
  paddingRight: "1.5rem",
});
export const pr5 = style({
  paddingRight: "3rem",
});
export const prLg0 = style({
  "@media": {
    "(min-width: 992px)": {
      paddingRight: "0",
    },
  },
});
export const prLg1 = style({
  "@media": {
    "(min-width: 992px)": {
      paddingRight: "0.25rem",
    },
  },
});
export const prLg2 = style({
  "@media": {
    "(min-width: 992px)": {
      paddingRight: "0.5rem",
    },
  },
});
export const prLg3 = style({
  "@media": {
    "(min-width: 992px)": {
      paddingRight: "1rem",
    },
  },
});
export const prLg4 = style({
  "@media": {
    "(min-width: 992px)": {
      paddingRight: "1.5rem",
    },
  },
});
export const prLg5 = style({
  "@media": {
    "(min-width: 992px)": {
      paddingRight: "3rem",
    },
  },
});
export const prMd0 = style({
  "@media": {
    "(min-width: 768px)": {
      paddingRight: "0",
    },
  },
});
export const prMd1 = style({
  "@media": {
    "(min-width: 768px)": {
      paddingRight: "0.25rem",
    },
  },
});
export const prMd2 = style({
  "@media": {
    "(min-width: 768px)": {
      paddingRight: "0.5rem",
    },
  },
});
export const prMd3 = style({
  "@media": {
    "(min-width: 768px)": {
      paddingRight: "1rem",
    },
  },
});
export const prMd4 = style({
  "@media": {
    "(min-width: 768px)": {
      paddingRight: "1.5rem",
    },
  },
});
export const prMd5 = style({
  "@media": {
    "(min-width: 768px)": {
      paddingRight: "3rem",
    },
  },
});
export const prSm0 = style({
  "@media": {
    "(min-width: 576px)": {
      paddingRight: "0",
    },
  },
});
export const prSm1 = style({
  "@media": {
    "(min-width: 576px)": {
      paddingRight: "0.25rem",
    },
  },
});
export const prSm2 = style({
  "@media": {
    "(min-width: 576px)": {
      paddingRight: "0.5rem",
    },
  },
});
export const prSm3 = style({
  "@media": {
    "(min-width: 576px)": {
      paddingRight: "1rem",
    },
  },
});
export const prSm4 = style({
  "@media": {
    "(min-width: 576px)": {
      paddingRight: "1.5rem",
    },
  },
});
export const prSm5 = style({
  "@media": {
    "(min-width: 576px)": {
      paddingRight: "3rem",
    },
  },
});
export const prXl0 = style({
  "@media": {
    "(min-width: 1200px)": {
      paddingRight: "0",
    },
  },
});
export const prXl1 = style({
  "@media": {
    "(min-width: 1200px)": {
      paddingRight: "0.25rem",
    },
  },
});
export const prXl2 = style({
  "@media": {
    "(min-width: 1200px)": {
      paddingRight: "0.5rem",
    },
  },
});
export const prXl3 = style({
  "@media": {
    "(min-width: 1200px)": {
      paddingRight: "1rem",
    },
  },
});
export const prXl4 = style({
  "@media": {
    "(min-width: 1200px)": {
      paddingRight: "1.5rem",
    },
  },
});
export const prXl5 = style({
  "@media": {
    "(min-width: 1200px)": {
      paddingRight: "3rem",
    },
  },
});
export const preScrollable = style({
  maxHeight: "340px",
  overflowY: "scroll",
});
export const progress = style({
  backgroundColor: "e9ecef",
  borderRadius: "0.25rem",
  display: "flex",
  fontSize: "0.75rem",
  height: "1rem",
  lineHeight: "0",
  overflow: "hidden",
});
export const progressBar = style({
  backgroundColor: "007bff",
  color: "fff",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  msFlexDirection: "column",
  msFlexPack: "center",
  overflow: "hidden",
  textAlign: "center",
  transition: "width 0.6s ease",
  whiteSpace: "nowrap",
  "@media": {
    "(prefers-reduced-motion: reduce)": {
      transition: "none",
    },
  },
});
export const progressBarAnimated = style({
  WebkitAnimation: "1s linear infinite progress-bar-stripes",
  animation: "1s linear infinite progress-bar-stripes",
  "@media": {
    "(prefers-reduced-motion: reduce)": {
      WebkitAnimation: "none",
      animation: "none",
    },
  },
});
export const progressBarStriped = style({
  backgroundImage:
    "linear-gradient(45deg,rgba(255,255,255,0.15)25%,transparent25%,transparent50%,rgba(255,255,255,0.15)50%,rgba(255,255,255,0.15)75%,transparent75%,transparent)",
  backgroundSize: "1rem 1rem",
});
export const pt0 = style({
  paddingTop: "0",
});
export const pt1 = style({
  paddingTop: "0.25rem",
});
export const pt2 = style({
  paddingTop: "0.5rem",
});
export const pt3 = style({
  paddingTop: "1rem",
});
export const pt4 = style({
  paddingTop: "1.5rem",
});
export const pt5 = style({
  paddingTop: "3rem",
});
export const ptLg0 = style({
  "@media": {
    "(min-width: 992px)": {
      paddingTop: "0",
    },
  },
});
export const ptLg1 = style({
  "@media": {
    "(min-width: 992px)": {
      paddingTop: "0.25rem",
    },
  },
});
export const ptLg2 = style({
  "@media": {
    "(min-width: 992px)": {
      paddingTop: "0.5rem",
    },
  },
});
export const ptLg3 = style({
  "@media": {
    "(min-width: 992px)": {
      paddingTop: "1rem",
    },
  },
});
export const ptLg4 = style({
  "@media": {
    "(min-width: 992px)": {
      paddingTop: "1.5rem",
    },
  },
});
export const ptLg5 = style({
  "@media": {
    "(min-width: 992px)": {
      paddingTop: "3rem",
    },
  },
});
export const ptMd0 = style({
  "@media": {
    "(min-width: 768px)": {
      paddingTop: "0",
    },
  },
});
export const ptMd1 = style({
  "@media": {
    "(min-width: 768px)": {
      paddingTop: "0.25rem",
    },
  },
});
export const ptMd2 = style({
  "@media": {
    "(min-width: 768px)": {
      paddingTop: "0.5rem",
    },
  },
});
export const ptMd3 = style({
  "@media": {
    "(min-width: 768px)": {
      paddingTop: "1rem",
    },
  },
});
export const ptMd4 = style({
  "@media": {
    "(min-width: 768px)": {
      paddingTop: "1.5rem",
    },
  },
});
export const ptMd5 = style({
  "@media": {
    "(min-width: 768px)": {
      paddingTop: "3rem",
    },
  },
});
export const ptSm0 = style({
  "@media": {
    "(min-width: 576px)": {
      paddingTop: "0",
    },
  },
});
export const ptSm1 = style({
  "@media": {
    "(min-width: 576px)": {
      paddingTop: "0.25rem",
    },
  },
});
export const ptSm2 = style({
  "@media": {
    "(min-width: 576px)": {
      paddingTop: "0.5rem",
    },
  },
});
export const ptSm3 = style({
  "@media": {
    "(min-width: 576px)": {
      paddingTop: "1rem",
    },
  },
});
export const ptSm4 = style({
  "@media": {
    "(min-width: 576px)": {
      paddingTop: "1.5rem",
    },
  },
});
export const ptSm5 = style({
  "@media": {
    "(min-width: 576px)": {
      paddingTop: "3rem",
    },
  },
});
export const ptXl0 = style({
  "@media": {
    "(min-width: 1200px)": {
      paddingTop: "0",
    },
  },
});
export const ptXl1 = style({
  "@media": {
    "(min-width: 1200px)": {
      paddingTop: "0.25rem",
    },
  },
});
export const ptXl2 = style({
  "@media": {
    "(min-width: 1200px)": {
      paddingTop: "0.5rem",
    },
  },
});
export const ptXl3 = style({
  "@media": {
    "(min-width: 1200px)": {
      paddingTop: "1rem",
    },
  },
});
export const ptXl4 = style({
  "@media": {
    "(min-width: 1200px)": {
      paddingTop: "1.5rem",
    },
  },
});
export const ptXl5 = style({
  "@media": {
    "(min-width: 1200px)": {
      paddingTop: "3rem",
    },
  },
});
export const px0 = style({
  paddingLeft: "0",
  paddingRight: "0",
});
export const px1 = style({
  paddingLeft: "0.25rem",
  paddingRight: "0.25rem",
});
export const px2 = style({
  paddingLeft: "0.5rem",
  paddingRight: "0.5rem",
});
export const px3 = style({
  paddingLeft: "1rem",
  paddingRight: "1rem",
});
export const px4 = style({
  paddingLeft: "1.5rem",
  paddingRight: "1.5rem",
});
export const px5 = style({
  paddingLeft: "3rem",
  paddingRight: "3rem",
});
export const pxLg0 = style({
  "@media": {
    "(min-width: 992px)": {
      paddingLeft: "0",
      paddingRight: "0",
    },
  },
});
export const pxLg1 = style({
  "@media": {
    "(min-width: 992px)": {
      paddingLeft: "0.25rem",
      paddingRight: "0.25rem",
    },
  },
});
export const pxLg2 = style({
  "@media": {
    "(min-width: 992px)": {
      paddingLeft: "0.5rem",
      paddingRight: "0.5rem",
    },
  },
});
export const pxLg3 = style({
  "@media": {
    "(min-width: 992px)": {
      paddingLeft: "1rem",
      paddingRight: "1rem",
    },
  },
});
export const pxLg4 = style({
  "@media": {
    "(min-width: 992px)": {
      paddingLeft: "1.5rem",
      paddingRight: "1.5rem",
    },
  },
});
export const pxLg5 = style({
  "@media": {
    "(min-width: 992px)": {
      paddingLeft: "3rem",
      paddingRight: "3rem",
    },
  },
});
export const pxMd0 = style({
  "@media": {
    "(min-width: 768px)": {
      paddingLeft: "0",
      paddingRight: "0",
    },
  },
});
export const pxMd1 = style({
  "@media": {
    "(min-width: 768px)": {
      paddingLeft: "0.25rem",
      paddingRight: "0.25rem",
    },
  },
});
export const pxMd2 = style({
  "@media": {
    "(min-width: 768px)": {
      paddingLeft: "0.5rem",
      paddingRight: "0.5rem",
    },
  },
});
export const pxMd3 = style({
  "@media": {
    "(min-width: 768px)": {
      paddingLeft: "1rem",
      paddingRight: "1rem",
    },
  },
});
export const pxMd4 = style({
  "@media": {
    "(min-width: 768px)": {
      paddingLeft: "1.5rem",
      paddingRight: "1.5rem",
    },
  },
});
export const pxMd5 = style({
  "@media": {
    "(min-width: 768px)": {
      paddingLeft: "3rem",
      paddingRight: "3rem",
    },
  },
});
export const pxSm0 = style({
  "@media": {
    "(min-width: 576px)": {
      paddingLeft: "0",
      paddingRight: "0",
    },
  },
});
export const pxSm1 = style({
  "@media": {
    "(min-width: 576px)": {
      paddingLeft: "0.25rem",
      paddingRight: "0.25rem",
    },
  },
});
export const pxSm2 = style({
  "@media": {
    "(min-width: 576px)": {
      paddingLeft: "0.5rem",
      paddingRight: "0.5rem",
    },
  },
});
export const pxSm3 = style({
  "@media": {
    "(min-width: 576px)": {
      paddingLeft: "1rem",
      paddingRight: "1rem",
    },
  },
});
export const pxSm4 = style({
  "@media": {
    "(min-width: 576px)": {
      paddingLeft: "1.5rem",
      paddingRight: "1.5rem",
    },
  },
});
export const pxSm5 = style({
  "@media": {
    "(min-width: 576px)": {
      paddingLeft: "3rem",
      paddingRight: "3rem",
    },
  },
});
export const pxXl0 = style({
  "@media": {
    "(min-width: 1200px)": {
      paddingLeft: "0",
      paddingRight: "0",
    },
  },
});
export const pxXl1 = style({
  "@media": {
    "(min-width: 1200px)": {
      paddingLeft: "0.25rem",
      paddingRight: "0.25rem",
    },
  },
});
export const pxXl2 = style({
  "@media": {
    "(min-width: 1200px)": {
      paddingLeft: "0.5rem",
      paddingRight: "0.5rem",
    },
  },
});
export const pxXl3 = style({
  "@media": {
    "(min-width: 1200px)": {
      paddingLeft: "1rem",
      paddingRight: "1rem",
    },
  },
});
export const pxXl4 = style({
  "@media": {
    "(min-width: 1200px)": {
      paddingLeft: "1.5rem",
      paddingRight: "1.5rem",
    },
  },
});
export const pxXl5 = style({
  "@media": {
    "(min-width: 1200px)": {
      paddingLeft: "3rem",
      paddingRight: "3rem",
    },
  },
});
export const py0 = style({
  paddingBottom: "0",
  paddingTop: "0",
});
export const py1 = style({
  paddingBottom: "0.25rem",
  paddingTop: "0.25rem",
});
export const py2 = style({
  paddingBottom: "0.5rem",
  paddingTop: "0.5rem",
});
export const py3 = style({
  paddingBottom: "1rem",
  paddingTop: "1rem",
});
export const py4 = style({
  paddingBottom: "1.5rem",
  paddingTop: "1.5rem",
});
export const py5 = style({
  paddingBottom: "3rem",
  paddingTop: "3rem",
});
export const pyLg0 = style({
  "@media": {
    "(min-width: 992px)": {
      paddingBottom: "0",
      paddingTop: "0",
    },
  },
});
export const pyLg1 = style({
  "@media": {
    "(min-width: 992px)": {
      paddingBottom: "0.25rem",
      paddingTop: "0.25rem",
    },
  },
});
export const pyLg2 = style({
  "@media": {
    "(min-width: 992px)": {
      paddingBottom: "0.5rem",
      paddingTop: "0.5rem",
    },
  },
});
export const pyLg3 = style({
  "@media": {
    "(min-width: 992px)": {
      paddingBottom: "1rem",
      paddingTop: "1rem",
    },
  },
});
export const pyLg4 = style({
  "@media": {
    "(min-width: 992px)": {
      paddingBottom: "1.5rem",
      paddingTop: "1.5rem",
    },
  },
});
export const pyLg5 = style({
  "@media": {
    "(min-width: 992px)": {
      paddingBottom: "3rem",
      paddingTop: "3rem",
    },
  },
});
export const pyMd0 = style({
  "@media": {
    "(min-width: 768px)": {
      paddingBottom: "0",
      paddingTop: "0",
    },
  },
});
export const pyMd1 = style({
  "@media": {
    "(min-width: 768px)": {
      paddingBottom: "0.25rem",
      paddingTop: "0.25rem",
    },
  },
});
export const pyMd2 = style({
  "@media": {
    "(min-width: 768px)": {
      paddingBottom: "0.5rem",
      paddingTop: "0.5rem",
    },
  },
});
export const pyMd3 = style({
  "@media": {
    "(min-width: 768px)": {
      paddingBottom: "1rem",
      paddingTop: "1rem",
    },
  },
});
export const pyMd4 = style({
  "@media": {
    "(min-width: 768px)": {
      paddingBottom: "1.5rem",
      paddingTop: "1.5rem",
    },
  },
});
export const pyMd5 = style({
  "@media": {
    "(min-width: 768px)": {
      paddingBottom: "3rem",
      paddingTop: "3rem",
    },
  },
});
export const pySm0 = style({
  "@media": {
    "(min-width: 576px)": {
      paddingBottom: "0",
      paddingTop: "0",
    },
  },
});
export const pySm1 = style({
  "@media": {
    "(min-width: 576px)": {
      paddingBottom: "0.25rem",
      paddingTop: "0.25rem",
    },
  },
});
export const pySm2 = style({
  "@media": {
    "(min-width: 576px)": {
      paddingBottom: "0.5rem",
      paddingTop: "0.5rem",
    },
  },
});
export const pySm3 = style({
  "@media": {
    "(min-width: 576px)": {
      paddingBottom: "1rem",
      paddingTop: "1rem",
    },
  },
});
export const pySm4 = style({
  "@media": {
    "(min-width: 576px)": {
      paddingBottom: "1.5rem",
      paddingTop: "1.5rem",
    },
  },
});
export const pySm5 = style({
  "@media": {
    "(min-width: 576px)": {
      paddingBottom: "3rem",
      paddingTop: "3rem",
    },
  },
});
export const pyXl0 = style({
  "@media": {
    "(min-width: 1200px)": {
      paddingBottom: "0",
      paddingTop: "0",
    },
  },
});
export const pyXl1 = style({
  "@media": {
    "(min-width: 1200px)": {
      paddingBottom: "0.25rem",
      paddingTop: "0.25rem",
    },
  },
});
export const pyXl2 = style({
  "@media": {
    "(min-width: 1200px)": {
      paddingBottom: "0.5rem",
      paddingTop: "0.5rem",
    },
  },
});
export const pyXl3 = style({
  "@media": {
    "(min-width: 1200px)": {
      paddingBottom: "1rem",
      paddingTop: "1rem",
    },
  },
});
export const pyXl4 = style({
  "@media": {
    "(min-width: 1200px)": {
      paddingBottom: "1.5rem",
      paddingTop: "1.5rem",
    },
  },
});
export const pyXl5 = style({
  "@media": {
    "(min-width: 1200px)": {
      paddingBottom: "3rem",
      paddingTop: "3rem",
    },
  },
});
export const rounded = style({
  borderRadius: "0.25rem",
});
export const rounded0 = style({
  borderRadius: "0",
});
export const roundedBottom = style({
  borderBottomLeftRadius: "0.25rem",
  borderBottomRightRadius: "0.25rem",
});
export const roundedCircle = style({
  borderRadius: "50%",
});
export const roundedLeft = style({
  borderBottomLeftRadius: "0.25rem",
  borderTopLeftRadius: "0.25rem",
});
export const roundedLg = style({
  borderRadius: "0.3rem",
});
export const roundedPill = style({
  borderRadius: "50rem",
});
export const roundedRight = style({
  borderBottomRightRadius: "0.25rem",
  borderTopRightRadius: "0.25rem",
});
export const roundedSm = style({
  borderRadius: "0.2rem",
});
export const roundedTop = style({
  borderTopLeftRadius: "0.25rem",
  borderTopRightRadius: "0.25rem",
});
export const row = style({
  display: "flex",
  flexWrap: "wrap",
  marginLeft: "-15px",
  marginRight: "-15px",
  msFlexWrap: "wrap",
});
export const shadow = style({
  boxShadow: "0 0.5rem 1rem rgba(0,0,0,0.15)",
});
export const shadowLg = style({
  boxShadow: "0 1rem 3rem rgba(0,0,0,0.175)",
});
export const shadowNone = style({
  boxShadow: "none",
});
export const shadowSm = style({
  boxShadow: "0 0.125rem 0.25rem rgba(0,0,0,0.075)",
});
export const show = style({
  backgroundColor: "343a40",
  borderColor: "343a40",
  color: "fff",
  ":focus": {
    boxShadow: "0 0 0 0.2rem rgba(52,58,64,0.5)",
  },
});
export const small = style({
  fontSize: "80%",
  fontWeight: "400",
});
export const spinnerBorder = style({
  WebkitAnimation: "0.75s linear infinite spinner-border",
  animation: "0.75s linear infinite spinner-border",
  border: "0.25em solid currentColor",
  borderRadius: "50%",
  borderRightColor: "transparent",
  display: "inline-block",
  height: "2rem",
  verticalAlign: "-0.125em",
  width: "2rem",
  "@media": {
    "(prefers-reduced-motion: reduce)": {
      WebkitAnimationDuration: "1.5s",
      animationDuration: "1.5s",
    },
  },
});
export const spinnerBorderSm = style({
  borderWidth: "0.2em",
  height: "1rem",
  width: "1rem",
});
export const spinnerGrow = style({
  WebkitAnimation: "0.75s linear infinite spinner-grow",
  animation: "0.75s linear infinite spinner-grow",
  backgroundColor: "currentColor",
  borderRadius: "50%",
  display: "inline-block",
  height: "2rem",
  opacity: "0",
  verticalAlign: "-0.125em",
  width: "2rem",
  "@media": {
    "(prefers-reduced-motion: reduce)": {
      WebkitAnimationDuration: "1.5s",
      animationDuration: "1.5s",
    },
  },
});
export const spinnerGrowSm = style({
  height: "1rem",
  width: "1rem",
});
export const srOnly = style({
  border: "0",
  clip: "rect(0,0,0,0)",
  height: "1px",
  margin: "-1px",
  overflow: "hidden",
  padding: "0",
  position: "absolute",
  whiteSpace: "nowrap",
  width: "1px",
});
export const srOnlyFocusable = style({
  ":active": {
    clip: "auto",
    height: "auto",
    overflow: "visible",
    position: "static",
    whiteSpace: "normal",
    width: "auto",
  },
  ":focus": {
    clip: "auto",
    height: "auto",
    overflow: "visible",
    position: "static",
    whiteSpace: "normal",
    width: "auto",
  },
});
export const stickyTop = style({
  "@supports": {
    "(position:-webkit-sticky) or (position:sticky)": {
      position: "sticky",
      top: "0",
      zIndex: "1020",
    },
  },
});
export const stretchedLink = style({
  "::after": {
    backgroundColor: "rgba(0,0,0,0)",
    bottom: "0",
    content: "",
    left: "0",
    pointerEvents: "auto",
    position: "absolute",
    right: "0",
    top: "0",
    zIndex: "1",
  },
});
export const tabContent = style({
  display: "block",
});
export const table = style({
  color: "212529",
  marginBottom: "1rem",
  width: "100%",
  "@media": {
    print: {
      borderCollapse: "collapse",
    },
  },
});
export const tableActive = style({
  backgroundColor: "rgba(0,0,0,0.075)",
});
export const tableBordered = style({
  border: "1px solid dee2e6",
});
export const tableDanger = style({
  backgroundColor: "f5c6cb",
});
export const tableDark = style({
  backgroundColor: "343a40",
  border: "0",
  color: "fff",
  "@media": {
    print: {
      color: "inherit",
    },
  },
});
export const tableHover = style({
  ":hover": {
    backgroundColor: "rgba(0,0,0,0.075)",
  },
});
export const tableInfo = style({
  backgroundColor: "bee5eb",
});
export const tableLight = style({
  backgroundColor: "fdfdfe",
});
export const tablePrimary = style({
  backgroundColor: "b8daff",
});
export const tableResponsive = style({
  WebkitOverflowScrolling: "touch",
  border: "0",
  display: "block",
  overflowX: "auto",
  width: "100%",
});
export const tableResponsiveLg = style({
  "@media": {
    "(max-width: 991.98px)": {
      WebkitOverflowScrolling: "touch",
      border: "0",
      display: "block",
      overflowX: "auto",
      width: "100%",
    },
  },
});
export const tableResponsiveMd = style({
  "@media": {
    "(max-width: 767.98px)": {
      WebkitOverflowScrolling: "touch",
      border: "0",
      display: "block",
      overflowX: "auto",
      width: "100%",
    },
  },
});
export const tableResponsiveSm = style({
  "@media": {
    "(max-width: 575.98px)": {
      WebkitOverflowScrolling: "touch",
      border: "0",
      display: "block",
      overflowX: "auto",
      width: "100%",
    },
  },
});
export const tableResponsiveXl = style({
  "@media": {
    "(max-width: 1199.98px)": {
      WebkitOverflowScrolling: "touch",
      border: "0",
      display: "block",
      overflowX: "auto",
      width: "100%",
    },
  },
});
export const tableSecondary = style({
  backgroundColor: "d6d8db",
});
export const tableSuccess = style({
  backgroundColor: "c3e6cb",
});
export const tableWarning = style({
  backgroundColor: "ffeeba",
});
export const textBlack50 = style({
  color: "rgba(0,0,0,0.5)",
});
export const textBody = style({
  color: "212529",
});
export const textBreak = style({
  wordBreak: "break-word",
  wordWrap: "break-word",
});
export const textCapitalize = style({
  textTransform: "capitalize",
});
export const textCenter = style({
  textAlign: "center",
});
export const textDanger = style({
  color: "dc3545",
});
export const textDark = style({
  color: "343a40",
});
export const textDecorationNone = style({
  textDecoration: "none",
});
export const textHide = style({
  backgroundColor: "transparent",
  border: "0",
  color: "transparent",
  font: "0 / 0 a",
  textShadow: "none",
});
export const textInfo = style({
  color: "17a2b8",
});
export const textJustify = style({
  textAlign: "justify",
});
export const textLeft = style({
  textAlign: "left",
});
export const textLgCenter = style({
  "@media": {
    "(min-width: 992px)": {
      textAlign: "center",
    },
  },
});
export const textLgLeft = style({
  "@media": {
    "(min-width: 992px)": {
      textAlign: "left",
    },
  },
});
export const textLgRight = style({
  "@media": {
    "(min-width: 992px)": {
      textAlign: "right",
    },
  },
});
export const textLight = style({
  color: "f8f9fa",
});
export const textLowercase = style({
  textTransform: "lowercase",
});
export const textMdCenter = style({
  "@media": {
    "(min-width: 768px)": {
      textAlign: "center",
    },
  },
});
export const textMdLeft = style({
  "@media": {
    "(min-width: 768px)": {
      textAlign: "left",
    },
  },
});
export const textMdRight = style({
  "@media": {
    "(min-width: 768px)": {
      textAlign: "right",
    },
  },
});
export const textMonospace = style({
  fontFamily:
    "SFMono-Regular , Menlo , Monaco , Consolas , Liberation Mono , Courier New , monospace",
});
export const textMuted = style({
  color: "6c757d",
});
export const textNowrap = style({
  whiteSpace: "nowrap",
});
export const textPrimary = style({
  color: "007bff",
});
export const textReset = style({
  color: "inherit",
});
export const textRight = style({
  textAlign: "right",
});
export const textSecondary = style({
  color: "6c757d",
});
export const textSmCenter = style({
  "@media": {
    "(min-width: 576px)": {
      textAlign: "center",
    },
  },
});
export const textSmLeft = style({
  "@media": {
    "(min-width: 576px)": {
      textAlign: "left",
    },
  },
});
export const textSmRight = style({
  "@media": {
    "(min-width: 576px)": {
      textAlign: "right",
    },
  },
});
export const textSuccess = style({
  color: "28a745",
});
export const textTruncate = style({
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
});
export const textUppercase = style({
  textTransform: "uppercase",
});
export const textWarning = style({
  color: "ffc107",
});
export const textWhite = style({
  color: "fff",
});
export const textWhite50 = style({
  color: "rgba(255,255,255,0.5)",
});
export const textWrap = style({
  whiteSpace: "normal",
});
export const textXlCenter = style({
  "@media": {
    "(min-width: 1200px)": {
      textAlign: "center",
    },
  },
});
export const textXlLeft = style({
  "@media": {
    "(min-width: 1200px)": {
      textAlign: "left",
    },
  },
});
export const textXlRight = style({
  "@media": {
    "(min-width: 1200px)": {
      textAlign: "right",
    },
  },
});
export const toast = style({
  backgroundClip: "padding-box",
  backgroundColor: "rgba(255,255,255,0.85)",
  border: "1px solid rgba(0,0,0,0.1)",
  borderRadius: "0.25rem",
  boxShadow: "0 0.25rem 0.75rem rgba(0,0,0,0.1)",
  display: "none",
  flexBasis: "350px",
  fontSize: "0.875rem",
  maxWidth: "350px",
  msFlexPreferredSize: "350px",
  opacity: "1",
  selectors: {
    "&:not(:last-child)": {
      marginBottom: "0.75rem",
    },
  },
});
export const toastBody = style({
  padding: "0.75rem",
});
export const toastHeader = style({
  alignItems: "center",
  backgroundClip: "padding-box",
  backgroundColor: "rgba(255,255,255,0.85)",
  borderBottom: "1px solid rgba(0,0,0,0.05)",
  borderTopLeftRadius: "calc(0.25rem-1px)",
  borderTopRightRadius: "calc(0.25rem-1px)",
  color: "6c757d",
  display: "flex",
  msFlexAlign: "center",
  padding: "0.25rem 0.75rem",
});
export const tooltip = style({
  display: "block",
  fontFamily:
    "-apple-system , BlinkMacSystemFont , Segoe UI , Roboto , Helvetica Neue , Arial , Noto Sans , Liberation Sans , sans-serif , Apple Color Emoji , Segoe UI Emoji , Segoe UI Symbol , Noto Color Emoji",
  fontSize: "0.875rem",
  fontStyle: "normal",
  fontWeight: "400",
  height: "0.4rem",
  letterSpacing: "normal",
  lineBreak: "auto",
  lineHeight: "1.5",
  margin: "0",
  opacity: "0.9",
  position: "absolute",
  textAlign: "start",
  textDecoration: "none",
  textShadow: "none",
  textTransform: "none",
  whiteSpace: "normal",
  width: "0.8rem",
  wordBreak: "normal",
  wordSpacing: "normal",
  wordWrap: "break-word",
  zIndex: "1070",
  "::before": {
    borderColor: "transparent",
    borderStyle: "solid",
    content: "",
    position: "absolute",
  },
});
export const tooltipInner = style({
  backgroundColor: "000",
  borderRadius: "0.25rem",
  color: "fff",
  maxWidth: "200px",
  padding: "0.25rem 0.5rem",
  textAlign: "center",
});
export const userSelectAll = style({
  MozUserSelect: "all",
  WebkitUserSelect: "all",
  userSelect: "all",
});
export const userSelectAuto = style({
  MozUserSelect: "auto",
  WebkitUserSelect: "auto",
  msUserSelect: "auto",
  userSelect: "auto",
});
export const userSelectNone = style({
  MozUserSelect: "none",
  WebkitUserSelect: "none",
  msUserSelect: "none",
  userSelect: "none",
});
export const validFeedback = style({
  color: "28a745",
  display: "none",
  fontSize: "80%",
  marginTop: "0.25rem",
  width: "100%",
});
export const validTooltip = style({
  backgroundColor: "rgba(40,167,69,0.9)",
  borderRadius: "0.25rem",
  color: "fff",
  display: "none",
  fontSize: "0.875rem",
  left: "0",
  lineHeight: "1.5",
  marginTop: "0.1rem",
  maxWidth: "100%",
  padding: "0.25rem 0.5rem",
  position: "absolute",
  top: "100%",
  zIndex: "5",
});
export const vh100 = style({
  height: "100vh",
});
export const visible = style({
  visibility: "visible",
});
export const vw100 = style({
  width: "100vw",
});
export const w100 = style({
  width: "100%",
});
export const w25 = style({
  width: "25%",
});
export const w50 = style({
  width: "50%",
});
export const w75 = style({
  width: "75%",
});
export const wAuto = style({
  width: "auto",
});
export const wasValidated = style({
  ":invalid": {
    borderColor: "dc3545",
  },
  ":valid": {
    borderColor: "28a745",
  },
  selectors: {
    "&:invalid::before": {
      borderColor: "dc3545",
    },
    "&:invalid:checked::before": {
      backgroundColor: "e4606d",
      borderColor: "e4606d",
    },
    "&:invalid:focus": {
      borderColor: "dc3545",
      boxShadow: "0 0 0 0.2rem rgba(220,53,69,0.25)",
    },
    "&:invalid:focus::before": {
      boxShadow: "0 0 0 0.2rem rgba(220,53,69,0.25)",
    },
    "&:invalid:focus:not(:checked)::before": {
      borderColor: "dc3545",
    },
    "&:valid::before": {
      borderColor: "28a745",
    },
    "&:valid:checked::before": {
      backgroundColor: "34ce57",
      borderColor: "34ce57",
    },
    "&:valid:focus": {
      borderColor: "28a745",
      boxShadow: "0 0 0 0.2rem rgba(40,167,69,0.25)",
    },
    "&:valid:focus::before": {
      boxShadow: "0 0 0 0.2rem rgba(40,167,69,0.25)",
    },
    "&:valid:focus:not(:checked)::before": {
      borderColor: "28a745",
    },
  },
});
