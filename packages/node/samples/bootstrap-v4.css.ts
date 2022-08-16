import { globalKeyframes, globalStyle, style } from "@vanilla-extract/css"

globalKeyframes("progress-bar-stripes", {
  "from": {
    backgroundPosition: "1rem 0",
  },
  "to": {
    backgroundPosition: "0 0",
  },
});

globalKeyframes("progress-bar-stripes", {
  "from": {
    backgroundPosition: "1rem 0",
  },
  "to": {
    backgroundPosition: "0 0",
  },
});

globalKeyframes("spinner-border", {
  "to": {
    WebkitTransform: "rotate(360deg)",
    transform: "rotate(360deg)",
  },
});

globalKeyframes("spinner-border", {
  "to": {
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
    opacity: "1",
    WebkitTransform: "none",
    transform: "none",
  },
});

globalKeyframes("spinner-grow", {
  "0%": {
    WebkitTransform: "scale(0)",
    transform: "scale(0)",
  },
  "50%": {
    opacity: "1",
    WebkitTransform: "none",
    transform: "none",
  },
});

export const alert = style({
  position: "relative",
  padding: "0.75rem 1.25rem",
  marginBottom: "1rem",
  border: "1px solid transparent",
  borderRadius: "0.25rem",
});

export const alertDismissible = style({
  paddingRight: "4rem",
});

export const alertHeading = style({
  color: "inherit",
});

export const alignBaseline = style({
  verticalAlign: "baseline",
});

export const alignBottom = style({
  verticalAlign: "bottom",
});

export const alignContentAround = style({
  msFlexLinePack: "distribute",
  alignContent: "space-around",
});

export const alignContentBetween = style({
  msFlexLinePack: "justify",
  alignContent: "space-between",
});

export const alignContentCenter = style({
  msFlexLinePack: "center",
  alignContent: "center",
});

export const alignContentEnd = style({
  msFlexLinePack: "end",
  alignContent: "flex-end",
});

export const alignContentStart = style({
  msFlexLinePack: "start",
  alignContent: "flex-start",
});

export const alignContentStretch = style({
  msFlexLinePack: "stretch",
  alignContent: "stretch",
});

export const alignItemsBaseline = style({
  msFlexAlign: "baseline",
  alignItems: "baseline",
});

export const alignItemsCenter = style({
  msFlexAlign: "center",
  alignItems: "center",
});

export const alignItemsEnd = style({
  msFlexAlign: "end",
  alignItems: "flex-end",
});

export const alignItemsStart = style({
  msFlexAlign: "start",
  alignItems: "flex-start",
});

export const alignItemsStretch = style({
  msFlexAlign: "stretch",
  alignItems: "stretch",
});

export const alignMiddle = style({
  verticalAlign: "middle",
});

export const alignSelfAuto = style({
  msFlexItemAlign: "auto",
  alignSelf: "auto",
});

export const alignSelfBaseline = style({
  msFlexItemAlign: "baseline",
  alignSelf: "baseline",
});

export const alignSelfCenter = style({
  msFlexItemAlign: "center",
  alignSelf: "center",
});

export const alignSelfEnd = style({
  msFlexItemAlign: "end",
  alignSelf: "flex-end",
});

export const alignSelfStart = style({
  msFlexItemAlign: "start",
  alignSelf: "flex-start",
});

export const alignSelfStretch = style({
  msFlexItemAlign: "stretch",
  alignSelf: "stretch",
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

export const badgeDanger = style({
  color: "fff",
  backgroundColor: "dc3545",
});

export const badgeDark = style({
  color: "fff",
  backgroundColor: "343a40",
});

export const badgeInfo = style({
  color: "fff",
  backgroundColor: "17a2b8",
});

export const badgeLight = style({
  color: "212529",
  backgroundColor: "f8f9fa",
});

export const badgePill = style({
  paddingRight: "0.6em",
  paddingLeft: "0.6em",
  borderRadius: "10rem",
});

export const badgePrimary = style({
  color: "fff",
  backgroundColor: "007bff",
});

export const badgeSecondary = style({
  color: "fff",
  backgroundColor: "6c757d",
});

export const badgeSuccess = style({
  color: "fff",
  backgroundColor: "28a745",
});

export const badgeWarning = style({
  color: "212529",
  backgroundColor: "ffc107",
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
  marginBottom: "1rem",
  fontSize: "1.25rem",
});

export const blockquoteFooter = style({
  display: "block",
  fontSize: "80%",
  color: "6c757d",
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
  display: "-ms-flexbox",
  display: "flex",
  msFlexWrap: "wrap",
  flexWrap: "wrap",
  padding: "0.75rem 1rem",
  marginBottom: "1rem",
  listStyle: "none",
  backgroundColor: "e9ecef",
  borderRadius: "0.25rem",
});

export const btnGroupLg = style({
});

export const btnGroupSm = style({
});

export const btnLg = style({
  padding: "0.5rem 1rem",
  fontSize: "1.25rem",
  lineHeight: "1.5",
  borderRadius: "0.3rem",
});

export const btnSm = style({
  padding: "0.25rem 0.5rem",
  fontSize: "0.875rem",
  lineHeight: "1.5",
  borderRadius: "0.2rem",
});

export const btnToolbar = style({
  display: "-ms-flexbox",
  display: "flex",
  msFlexWrap: "wrap",
  flexWrap: "wrap",
  msFlexPack: "start",
  justifyContent: "flex-start",
});

export const cardBody = style({
  msFlex: "1 1 auto",
  flex: "1 1 auto",
  minHeight: "1px",
  padding: "1.25rem",
});

export const cardHeaderPills = style({
  marginRight: "-0.625rem",
  marginLeft: "-0.625rem",
});

export const cardHeaderTabs = style({
  marginRight: "-0.625rem",
  marginBottom: "-0.75rem",
  marginLeft: "-0.625rem",
  borderBottom: "0",
});

export const cardImg = style({
  msFlexNegative: "0",
  flexShrink: "0",
  width: "100%",
  borderTopLeftRadius: "calc(0.25rem-1px)",
  borderTopRightRadius: "calc(0.25rem-1px)",
  borderBottomRightRadius: "calc(0.25rem-1px)",
  borderBottomLeftRadius: "calc(0.25rem-1px)",
});

export const cardImgOverlay = style({
  position: "absolute",
  top: "0",
  right: "0",
  bottom: "0",
  left: "0",
  padding: "1.25rem",
  borderRadius: "calc(0.25rem-1px)",
});

export const cardSubtitle = style({
  marginTop: "-0.375rem",
  marginBottom: "0",
});

export const cardText = style({
  ":last-child": {
    marginBottom: "0",
  },
});

export const cardTitle = style({
  marginBottom: "0.75rem",
});

export const carouselCaption = style({
  position: "absolute",
  right: "15%",
  bottom: "20px",
  left: "15%",
  zIndex: "10",
  paddingTop: "20px",
  paddingBottom: "20px",
  color: "fff",
  textAlign: "center",
});

export const carouselControlNextIcon = style({
  display: "inline-block",
  width: "20px",
  height: "20px",
  background: "50% / 100% 100% no-repeat",
  backgroundImage: "url(data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M2.75 0l-1.5 1.5L3.75 4l-2.5 2.5L2.75 8l4-4-4-4z'/%3e%3c/svg%3e)",
});

export const carouselControlPrevIcon = style({
  display: "inline-block",
  width: "20px",
  height: "20px",
  background: "50% / 100% 100% no-repeat",
  backgroundImage: "url(data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M5.25 0l-4 4 4 4 1.5-1.5L4.25 4l2.5-2.5L5.25 0z'/%3e%3c/svg%3e)",
});

export const carouselInner = style({
  position: "relative",
  width: "100%",
  overflow: "hidden",
  "::after": {
    display: "block",
    clear: "both",
    content: "",
  },
});

export const clearfix = style({
  "::after": {
    display: "block",
    clear: "both",
    content: "",
  },
});

export const col1 = style({
  position: "relative",
  width: "100%",
  paddingRight: "15px",
  paddingLeft: "15px",
  msFlex: "0 0 8.333333%",
  flex: "0 0 8.333333%",
  maxWidth: "8.333333%",
});

export const col10 = style({
  position: "relative",
  width: "100%",
  paddingRight: "15px",
  paddingLeft: "15px",
  msFlex: "0 0 83.333333%",
  flex: "0 0 83.333333%",
  maxWidth: "83.333333%",
});

export const col11 = style({
  position: "relative",
  width: "100%",
  paddingRight: "15px",
  paddingLeft: "15px",
  msFlex: "0 0 91.666667%",
  flex: "0 0 91.666667%",
  maxWidth: "91.666667%",
});

export const col12 = style({
  position: "relative",
  width: "100%",
  paddingRight: "15px",
  paddingLeft: "15px",
  msFlex: "0 0 100%",
  flex: "0 0 100%",
  maxWidth: "100%",
});

export const col2 = style({
  position: "relative",
  width: "100%",
  paddingRight: "15px",
  paddingLeft: "15px",
  msFlex: "0 0 16.666667%",
  flex: "0 0 16.666667%",
  maxWidth: "16.666667%",
});

export const col3 = style({
  position: "relative",
  width: "100%",
  paddingRight: "15px",
  paddingLeft: "15px",
  msFlex: "0 0 25%",
  flex: "0 0 25%",
  maxWidth: "25%",
});

export const col4 = style({
  position: "relative",
  width: "100%",
  paddingRight: "15px",
  paddingLeft: "15px",
  msFlex: "0 0 33.333333%",
  flex: "0 0 33.333333%",
  maxWidth: "33.333333%",
});

export const col5 = style({
  position: "relative",
  width: "100%",
  paddingRight: "15px",
  paddingLeft: "15px",
  msFlex: "0 0 41.666667%",
  flex: "0 0 41.666667%",
  maxWidth: "41.666667%",
});

export const col6 = style({
  position: "relative",
  width: "100%",
  paddingRight: "15px",
  paddingLeft: "15px",
  msFlex: "0 0 50%",
  flex: "0 0 50%",
  maxWidth: "50%",
});

export const col7 = style({
  position: "relative",
  width: "100%",
  paddingRight: "15px",
  paddingLeft: "15px",
  msFlex: "0 0 58.333333%",
  flex: "0 0 58.333333%",
  maxWidth: "58.333333%",
});

export const col8 = style({
  position: "relative",
  width: "100%",
  paddingRight: "15px",
  paddingLeft: "15px",
  msFlex: "0 0 66.666667%",
  flex: "0 0 66.666667%",
  maxWidth: "66.666667%",
});

export const col9 = style({
  position: "relative",
  width: "100%",
  paddingRight: "15px",
  paddingLeft: "15px",
  msFlex: "0 0 75%",
  flex: "0 0 75%",
  maxWidth: "75%",
});

export const colAuto = style({
  position: "relative",
  width: "100%",
  paddingRight: "15px",
  paddingLeft: "15px",
  msFlex: "0 0 auto",
  flex: "0 0 auto",
  width: "auto",
  maxWidth: "100%",
});

export const colFormLabel = style({
  paddingTop: "calc(0.375rem+1px)",
  paddingBottom: "calc(0.375rem+1px)",
  marginBottom: "0",
  fontSize: "inherit",
  lineHeight: "1.5",
});

export const colFormLabelLg = style({
  paddingTop: "calc(0.5rem+1px)",
  paddingBottom: "calc(0.5rem+1px)",
  fontSize: "1.25rem",
  lineHeight: "1.5",
});

export const colFormLabelSm = style({
  paddingTop: "calc(0.25rem+1px)",
  paddingBottom: "calc(0.25rem+1px)",
  fontSize: "0.875rem",
  lineHeight: "1.5",
});

export const customControlInline = style({
  display: "-ms-inline-flexbox",
  display: "inline-flex",
  marginRight: "1rem",
});

export const customSelectLg = style({
  height: "calc(1.5em+1rem+2px)",
  paddingTop: "0.5rem",
  paddingBottom: "0.5rem",
  paddingLeft: "1rem",
  fontSize: "1.25rem",
});

export const customSelectSm = style({
  height: "calc(1.5em+0.5rem+2px)",
  paddingTop: "0.25rem",
  paddingBottom: "0.25rem",
  paddingLeft: "0.5rem",
  fontSize: "0.875rem",
});

export const dBlock = style({
  display: "block",
});

export const dFlex = style({
  display: "-ms-flexbox",
  display: "flex",
});

export const dInline = style({
  display: "inline",
});

export const dInlineBlock = style({
  display: "inline-block",
});

export const dInlineFlex = style({
  display: "-ms-inline-flexbox",
  display: "inline-flex",
});

export const dNone = style({
  display: "none",
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
  height: "0",
  margin: "0.5rem 0",
  overflow: "hidden",
  borderTop: "1px solid e9ecef",
});

export const dropdownHeader = style({
  display: "block",
  padding: "0.5rem 1.5rem",
  marginBottom: "0",
  fontSize: "0.875rem",
  color: "6c757d",
  whiteSpace: "nowrap",
});

export const dropdownItemText = style({
  display: "block",
  padding: "0.25rem 1.5rem",
  color: "212529",
});

export const dropdownMenuLeft = style({
  right: "auto",
  left: "0",
});

export const dropdownMenuRight = style({
  right: "0",
  left: "auto",
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

export const figure = style({
  display: "inline-block",
});

export const figureCaption = style({
  fontSize: "90%",
  color: "6c757d",
});

export const figureImg = style({
  marginBottom: "0.5rem",
  lineHeight: "1",
});

export const fixedBottom = style({
  position: "fixed",
  right: "0",
  bottom: "0",
  left: "0",
  zIndex: "1030",
});

export const fixedTop = style({
  position: "fixed",
  top: "0",
  right: "0",
  left: "0",
  zIndex: "1030",
});

export const flexColumn = style({
  msFlexDirection: "column",
  flexDirection: "column",
});

export const flexColumnReverse = style({
  msFlexDirection: "column-reverse",
  flexDirection: "column-reverse",
});

export const flexFill = style({
  msFlex: "1 1 auto",
  flex: "1 1 auto",
});

export const flexGrow0 = style({
  msFlexPositive: "0",
  flexGrow: "0",
});

export const flexGrow1 = style({
  msFlexPositive: "1",
  flexGrow: "1",
});

export const flexNowrap = style({
  msFlexWrap: "nowrap",
  flexWrap: "nowrap",
});

export const flexRow = style({
  msFlexDirection: "row",
  flexDirection: "row",
});

export const flexRowReverse = style({
  msFlexDirection: "row-reverse",
  flexDirection: "row-reverse",
});

export const flexShrink0 = style({
  msFlexNegative: "0",
  flexShrink: "0",
});

export const flexShrink1 = style({
  msFlexNegative: "1",
  flexShrink: "1",
});

export const flexWrap = style({
  msFlexWrap: "wrap",
  flexWrap: "wrap",
});

export const flexWrapReverse = style({
  msFlexWrap: "wrap-reverse",
  flexWrap: "wrap-reverse",
});

export const floatLeft = style({
  float: "left",
});

export const floatNone = style({
  float: "none",
});

export const floatRight = style({
  float: "right",
});

export const focus = style({
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

export const formCheckInline = style({
  display: "-ms-inline-flexbox",
  display: "inline-flex",
  msFlexAlign: "center",
  alignItems: "center",
  paddingLeft: "0",
  marginRight: "0.75rem",
});

export const formControlFile = style({
  display: "block",
  width: "100%",
});

export const formControlLg = style({
  height: "calc(1.5em+1rem+2px)",
  padding: "0.5rem 1rem",
  fontSize: "1.25rem",
  lineHeight: "1.5",
  borderRadius: "0.3rem",
});

export const formControlRange = style({
  display: "block",
  width: "100%",
});

export const formControlSm = style({
  height: "calc(1.5em+0.5rem+2px)",
  padding: "0.25rem 0.5rem",
  fontSize: "0.875rem",
  lineHeight: "1.5",
  borderRadius: "0.2rem",
});

export const formText = style({
  display: "block",
  marginTop: "0.25rem",
});

export const h1 = style({
  marginBottom: "0.5rem",
  fontWeight: "500",
  lineHeight: "1.2",
  fontSize: "2.5rem",
});

export const h100 = style({
  height: "100%",
});

export const h2 = style({
  marginBottom: "0.5rem",
  fontWeight: "500",
  lineHeight: "1.2",
  fontSize: "2rem",
});

export const h25 = style({
  height: "25%",
});

export const h3 = style({
  marginBottom: "0.5rem",
  fontWeight: "500",
  lineHeight: "1.2",
  fontSize: "1.75rem",
});

export const h4 = style({
  marginBottom: "0.5rem",
  fontWeight: "500",
  lineHeight: "1.2",
  fontSize: "1.5rem",
});

export const h5 = style({
  marginBottom: "0.5rem",
  fontWeight: "500",
  lineHeight: "1.2",
  fontSize: "1.25rem",
});

export const h50 = style({
  height: "50%",
});

export const h6 = style({
  marginBottom: "0.5rem",
  fontWeight: "500",
  lineHeight: "1.2",
  fontSize: "1rem",
});

export const h75 = style({
  height: "75%",
});

export const hAuto = style({
  height: "auto",
});

export const hasValidation = style({
});

export const hide = style({
});

export const imgFluid = style({
  maxWidth: "100%",
  height: "auto",
});

export const imgThumbnail = style({
  padding: "0.25rem",
  backgroundColor: "fff",
  border: "1px solid dee2e6",
  borderRadius: "0.25rem",
  maxWidth: "100%",
  height: "auto",
});

export const initialism = style({
  fontSize: "90%",
  textTransform: "uppercase",
});

export const invisible = style({
  visibility: "hidden",
});

export const isInvalid = style({
});

export const isValid = style({
});

export const jumbotronFluid = style({
  paddingRight: "0",
  paddingLeft: "0",
  borderRadius: "0",
});

export const justifyContentAround = style({
  msFlexPack: "distribute",
  justifyContent: "space-around",
});

export const justifyContentBetween = style({
  msFlexPack: "justify",
  justifyContent: "space-between",
});

export const justifyContentCenter = style({
  msFlexPack: "center",
  justifyContent: "center",
});

export const justifyContentEnd = style({
  msFlexPack: "end",
  justifyContent: "flex-end",
});

export const justifyContentStart = style({
  msFlexPack: "start",
  justifyContent: "flex-start",
});

export const lead = style({
  fontSize: "1.25rem",
  fontWeight: "300",
});

export const listGroupItemAction = style({
  width: "100%",
  color: "495057",
  textAlign: "inherit",
  ":active": {
    color: "212529",
    backgroundColor: "e9ecef",
  },
  ":focus": {
    zIndex: "1",
    color: "495057",
    textDecoration: "none",
    backgroundColor: "f8f9fa",
  },
  ":hover": {
    zIndex: "1",
    color: "495057",
    textDecoration: "none",
    backgroundColor: "f8f9fa",
  },
});

export const listInline = style({
  paddingLeft: "0",
  listStyle: "none",
});

export const listUnstyled = style({
  paddingLeft: "0",
  listStyle: "none",
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

export const mark = style({
  padding: "0.2em",
  backgroundColor: "fcf8e3",
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

export const media = style({
  display: "-ms-flexbox",
  display: "flex",
  msFlexAlign: "start",
  alignItems: "flex-start",
});

export const mediaBody = style({
  msFlex: "1",
  flex: "1",
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

export const modalOpen = style({
  overflow: "hidden",
});

export const modalScrollbarMeasure = style({
  position: "absolute",
  top: "-9999px",
  width: "50px",
  height: "50px",
  overflow: "scroll",
});

export const modalStatic = style({
});

export const modalTitle = style({
  marginBottom: "0",
  lineHeight: "1.5",
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

export const mw100 = style({
  maxWidth: "100%",
});

export const mx0 = style({
  marginRight: "0",
  marginLeft: "0",
});

export const mx1 = style({
  marginRight: "0.25rem",
  marginLeft: "0.25rem",
});

export const mx2 = style({
  marginRight: "0.5rem",
  marginLeft: "0.5rem",
});

export const mx3 = style({
  marginRight: "1rem",
  marginLeft: "1rem",
});

export const mx4 = style({
  marginRight: "1.5rem",
  marginLeft: "1.5rem",
});

export const mx5 = style({
  marginRight: "3rem",
  marginLeft: "3rem",
});

export const mxAuto = style({
  marginRight: "auto",
  marginLeft: "auto",
});

export const mxN1 = style({
  marginRight: "-0.25rem",
  marginLeft: "-0.25rem",
});

export const mxN2 = style({
  marginRight: "-0.5rem",
  marginLeft: "-0.5rem",
});

export const mxN3 = style({
  marginRight: "-1rem",
  marginLeft: "-1rem",
});

export const mxN4 = style({
  marginRight: "-1.5rem",
  marginLeft: "-1.5rem",
});

export const mxN5 = style({
  marginRight: "-3rem",
  marginLeft: "-3rem",
});

export const my0 = style({
  marginTop: "0",
  marginBottom: "0",
});

export const my1 = style({
  marginTop: "0.25rem",
  marginBottom: "0.25rem",
});

export const my2 = style({
  marginTop: "0.5rem",
  marginBottom: "0.5rem",
});

export const my3 = style({
  marginTop: "1rem",
  marginBottom: "1rem",
});

export const my4 = style({
  marginTop: "1.5rem",
  marginBottom: "1.5rem",
});

export const my5 = style({
  marginTop: "3rem",
  marginBottom: "3rem",
});

export const myAuto = style({
  marginTop: "auto",
  marginBottom: "auto",
});

export const myN1 = style({
  marginTop: "-0.25rem",
  marginBottom: "-0.25rem",
});

export const myN2 = style({
  marginTop: "-0.5rem",
  marginBottom: "-0.5rem",
});

export const myN3 = style({
  marginTop: "-1rem",
  marginBottom: "-1rem",
});

export const myN4 = style({
  marginTop: "-1.5rem",
  marginBottom: "-1.5rem",
});

export const myN5 = style({
  marginTop: "-3rem",
  marginBottom: "-3rem",
});

export const nav = style({
  display: "-ms-flexbox",
  display: "flex",
  msFlexWrap: "wrap",
  flexWrap: "wrap",
  paddingLeft: "0",
  marginBottom: "0",
  listStyle: "none",
});

export const navFill = style({
});

export const navJustified = style({
});

export const navPills = style({
});

export const navbarExpand = style({
  msFlexFlow: "row nowrap",
  flexFlow: "row nowrap",
  msFlexPack: "start",
  justifyContent: "flex-start",
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

export const pageItem = style({
});

export const pagination = style({
  display: "-ms-flexbox",
  display: "flex",
  paddingLeft: "0",
  listStyle: "none",
  borderRadius: "0.25rem",
});

export const paginationLg = style({
});

export const paginationSm = style({
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

export const pointerEvent = style({
});

export const popoverBody = style({
  padding: "0.5rem 0.75rem",
  color: "212529",
});

export const popoverHeader = style({
  padding: "0.5rem 0.75rem",
  marginBottom: "0",
  fontSize: "1rem",
  backgroundColor: "f7f7f7",
  borderBottom: "1px solid ebebeb",
  borderTopLeftRadius: "calc(0.3rem-1px)",
  borderTopRightRadius: "calc(0.3rem-1px)",
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
  position: "-webkit-sticky",
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

export const preScrollable = style({
  maxHeight: "340px",
  overflowY: "scroll",
});

export const progress = style({
  display: "-ms-flexbox",
  display: "flex",
  height: "1rem",
  overflow: "hidden",
  lineHeight: "0",
  fontSize: "0.75rem",
  backgroundColor: "e9ecef",
  borderRadius: "0.25rem",
});

export const progressBarStriped = style({
  backgroundImage: "linear-gradient(45deg,rgba(255,255,255,0.15)25%,transparent25%,transparent50%,rgba(255,255,255,0.15)50%,rgba(255,255,255,0.15)75%,transparent75%,transparent)",
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

export const px0 = style({
  paddingRight: "0",
  paddingLeft: "0",
});

export const px1 = style({
  paddingRight: "0.25rem",
  paddingLeft: "0.25rem",
});

export const px2 = style({
  paddingRight: "0.5rem",
  paddingLeft: "0.5rem",
});

export const px3 = style({
  paddingRight: "1rem",
  paddingLeft: "1rem",
});

export const px4 = style({
  paddingRight: "1.5rem",
  paddingLeft: "1.5rem",
});

export const px5 = style({
  paddingRight: "3rem",
  paddingLeft: "3rem",
});

export const py0 = style({
  paddingTop: "0",
  paddingBottom: "0",
});

export const py1 = style({
  paddingTop: "0.25rem",
  paddingBottom: "0.25rem",
});

export const py2 = style({
  paddingTop: "0.5rem",
  paddingBottom: "0.5rem",
});

export const py3 = style({
  paddingTop: "1rem",
  paddingBottom: "1rem",
});

export const py4 = style({
  paddingTop: "1.5rem",
  paddingBottom: "1.5rem",
});

export const py5 = style({
  paddingTop: "3rem",
  paddingBottom: "3rem",
});

export const rounded = style({
  borderRadius: "0.25rem",
});

export const rounded0 = style({
  borderRadius: "0",
});

export const roundedBottom = style({
  borderBottomRightRadius: "0.25rem",
  borderBottomLeftRadius: "0.25rem",
});

export const roundedCircle = style({
  borderRadius: "50%",
});

export const roundedLeft = style({
  borderTopLeftRadius: "0.25rem",
  borderBottomLeftRadius: "0.25rem",
});

export const roundedLg = style({
  borderRadius: "0.3rem",
});

export const roundedPill = style({
  borderRadius: "50rem",
});

export const roundedRight = style({
  borderTopRightRadius: "0.25rem",
  borderBottomRightRadius: "0.25rem",
});

export const roundedSm = style({
  borderRadius: "0.2rem",
});

export const roundedTop = style({
  borderTopLeftRadius: "0.25rem",
  borderTopRightRadius: "0.25rem",
});

export const row = style({
  display: "-ms-flexbox",
  display: "flex",
  msFlexWrap: "wrap",
  flexWrap: "wrap",
  marginRight: "-15px",
  marginLeft: "-15px",
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

export const showing = style({
});

export const small = style({
  fontSize: "80%",
  fontWeight: "400",
});

export const spinnerBorderSm = style({
  width: "1rem",
  height: "1rem",
  borderWidth: "0.2em",
});

export const spinnerGrowSm = style({
  width: "1rem",
  height: "1rem",
});

export const srOnly = style({
  position: "absolute",
  width: "1px",
  height: "1px",
  padding: "0",
  margin: "-1px",
  overflow: "hidden",
  clip: "rect(0,0,0,0)",
  whiteSpace: "nowrap",
  border: "0",
});

export const srOnlyFocusable = style({
  ":active": {
    position: "static",
    width: "auto",
    height: "auto",
    overflow: "visible",
    clip: "auto",
    whiteSpace: "normal",
  },
  ":focus": {
    position: "static",
    width: "auto",
    height: "auto",
    overflow: "visible",
    clip: "auto",
    whiteSpace: "normal",
  },
});

export const stretchedLink = style({
  "::after": {
    position: "absolute",
    top: "0",
    right: "0",
    bottom: "0",
    left: "0",
    zIndex: "1",
    pointerEvents: "auto",
    content: "",
    backgroundColor: "rgba(0,0,0,0)",
  },
});

export const tabContent = style({
});

export const tableResponsive = style({
  display: "block",
  width: "100%",
  overflowX: "auto",
  WebkitOverflowScrolling: "touch",
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
  font: "0 / 0 a",
  color: "transparent",
  textShadow: "none",
  backgroundColor: "transparent",
  border: "0",
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

export const textLight = style({
  color: "f8f9fa",
});

export const textLowercase = style({
  textTransform: "lowercase",
});

export const textMonospace = style({
  fontFamily: "SFMono-Regular , Menlo , Monaco , Consolas , Liberation Mono , Courier New , monospace",
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

export const theadLight = style({
});

export const toastBody = style({
  padding: "0.75rem",
});

export const toastHeader = style({
  display: "-ms-flexbox",
  display: "flex",
  msFlexAlign: "center",
  alignItems: "center",
  padding: "0.25rem 0.75rem",
  color: "6c757d",
  backgroundColor: "rgba(255,255,255,0.85)",
  backgroundClip: "padding-box",
  borderBottom: "1px solid rgba(0,0,0,0.05)",
  borderTopLeftRadius: "calc(0.25rem-1px)",
  borderTopRightRadius: "calc(0.25rem-1px)",
});

export const tooltipInner = style({
  maxWidth: "200px",
  padding: "0.25rem 0.5rem",
  color: "fff",
  textAlign: "center",
  backgroundColor: "000",
  borderRadius: "0.25rem",
});

export const userSelectAll = style({
  WebkitUserSelect: "all",
  MozUserSelect: "all",
  userSelect: "all",
});

export const userSelectAuto = style({
  WebkitUserSelect: "auto",
  MozUserSelect: "auto",
  msUserSelect: "auto",
  userSelect: "auto",
});

export const userSelectNone = style({
  WebkitUserSelect: "none",
  MozUserSelect: "none",
  msUserSelect: "none",
  userSelect: "none",
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
  "selectors": {
    [` ${customControlInput}:invalid ~ ${customControlLabel}::before`]: {
      borderColor: "dc3545",
    },
    [` ${customControlInput}:invalid:checked ~ ${customControlLabel}::before`]: {
      borderColor: "e4606d",
      backgroundColor: "e4606d",
    },
    [` ${customControlInput}:invalid:focus ~ ${customControlLabel}::before`]: {
      boxShadow: "0 0 0 0.2rem rgba(220,53,69,0.25)",
    },
    [` ${customControlInput}:invalid:focus:not(:checked) ~ ${customControlLabel}::before`]: {
      borderColor: "dc3545",
    },
    [` ${customControlInput}:valid ~ ${customControlLabel}::before`]: {
      borderColor: "28a745",
    },
    [` ${customControlInput}:valid:checked ~ ${customControlLabel}::before`]: {
      borderColor: "34ce57",
      backgroundColor: "34ce57",
    },
    [` ${customControlInput}:valid:focus ~ ${customControlLabel}::before`]: {
      boxShadow: "0 0 0 0.2rem rgba(40,167,69,0.25)",
    },
    [` ${customControlInput}:valid:focus:not(:checked) ~ ${customControlLabel}::before`]: {
      borderColor: "28a745",
    },
    [` ${customSelect}:invalid`]: {
      borderColor: "dc3545",
      paddingRight: "calc(0.75em+2.3125rem)",
      background: "url(data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e) right 0.75rem center / 8px 10px no-repeat , fff url(data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e) center right 1.75rem / calc(0.75em+0.375rem) calc(0.75em+0.375rem) no-repeat",
    },
    [` ${customSelect}:invalid:focus`]: {
      borderColor: "dc3545",
      boxShadow: "0 0 0 0.2rem rgba(220,53,69,0.25)",
    },
    [` ${customSelect}:valid`]: {
      borderColor: "28a745",
      paddingRight: "calc(0.75em+2.3125rem)",
      background: "url(data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e) right 0.75rem center / 8px 10px no-repeat , fff url(data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath fill='%2328a745' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e) center right 1.75rem / calc(0.75em+0.375rem) calc(0.75em+0.375rem) no-repeat",
    },
    [` ${customSelect}:valid:focus`]: {
      borderColor: "28a745",
      boxShadow: "0 0 0 0.2rem rgba(40,167,69,0.25)",
    },
    [` ${formControl}:invalid`]: {
      borderColor: "dc3545",
      paddingRight: "calc(1.5em+0.75rem)",
      backgroundImage: "url(data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e)",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "right calc(0.375em+0.1875rem) center",
      backgroundSize: "calc(0.75em+0.375rem) calc(0.75em+0.375rem)",
    },
    [` ${formControl}:invalid:focus`]: {
      borderColor: "dc3545",
      boxShadow: "0 0 0 0.2rem rgba(220,53,69,0.25)",
    },
    [` ${formControl}:valid`]: {
      borderColor: "28a745",
      paddingRight: "calc(1.5em+0.75rem)",
      backgroundImage: "url(data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath fill='%2328a745' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e)",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "right calc(0.375em+0.1875rem) center",
      backgroundSize: "calc(0.75em+0.375rem) calc(0.75em+0.375rem)",
    },
    [` ${formControl}:valid:focus`]: {
      borderColor: "28a745",
      boxShadow: "0 0 0 0.2rem rgba(40,167,69,0.25)",
    },
    [` select${formControl}:invalid`]: {
      paddingRight: "3rem",
      backgroundPosition: "right 1.5rem center",
    },
    [` select${formControl}:valid`]: {
      paddingRight: "3rem",
      backgroundPosition: "right 1.5rem center",
    },
    [` textarea${formControl}:invalid`]: {
      paddingRight: "calc(1.5em+0.75rem)",
      backgroundPosition: "top calc(0.375em+0.1875rem) right calc(0.375em+0.1875rem)",
    },
    [` textarea${formControl}:valid`]: {
      paddingRight: "calc(1.5em+0.75rem)",
      backgroundPosition: "top calc(0.375em+0.1875rem) right calc(0.375em+0.1875rem)",
    },
  },
});

export const tooltip = style({
  position: "absolute",
  zIndex: "1070",
  display: "block",
  margin: "0",
  fontFamily: "-apple-system , BlinkMacSystemFont , Segoe UI , Roboto , Helvetica Neue , Arial , Noto Sans , Liberation Sans , sans-serif , Apple Color Emoji , Segoe UI Emoji , Segoe UI Symbol , Noto Color Emoji",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "1.5",
  textAlign: "left",
  textAlign: "start",
  textDecoration: "none",
  textShadow: "none",
  textTransform: "none",
  letterSpacing: "normal",
  wordBreak: "normal",
  wordSpacing: "normal",
  whiteSpace: "normal",
  lineBreak: "auto",
  fontSize: "0.875rem",
  wordWrap: "break-word",
  opacity: "0",
  "selectors": {
    [` ${arrow}::before`]: {
      position: "absolute",
      content: "",
      borderColor: "transparent",
      borderStyle: "solid",
    },
    [`${show}`]: {
      opacity: "0.9",
    },
  },
});

export const theadDark = style({
});

export const tableWarning = style({
  backgroundColor: "ffeeba",
  "selectors": {
    "& > td": {
      backgroundColor: "ffeeba",
    },
    "& > th": {
      backgroundColor: "ffeeba",
    },
    "& tbody + tbody": {
      borderColor: "ffdf7e",
    },
    "& td": {
      borderColor: "ffdf7e",
    },
    "& th": {
      borderColor: "ffdf7e",
    },
    "& thead th": {
      borderColor: "ffdf7e",
    },
  },
});

export const tableSuccess = style({
  backgroundColor: "c3e6cb",
  "selectors": {
    "& > td": {
      backgroundColor: "c3e6cb",
    },
    "& > th": {
      backgroundColor: "c3e6cb",
    },
    "& tbody + tbody": {
      borderColor: "8fd19e",
    },
    "& td": {
      borderColor: "8fd19e",
    },
    "& th": {
      borderColor: "8fd19e",
    },
    "& thead th": {
      borderColor: "8fd19e",
    },
  },
});

export const tableStriped = style({
  "selectors": {
    "& tbody tr:nth-of-type(odd)": {
      backgroundColor: "rgba(0,0,0,0.05)",
    },
  },
});

export const tableSecondary = style({
  backgroundColor: "d6d8db",
  "selectors": {
    "& > td": {
      backgroundColor: "d6d8db",
    },
    "& > th": {
      backgroundColor: "d6d8db",
    },
    "& tbody + tbody": {
      borderColor: "b3b7bb",
    },
    "& td": {
      borderColor: "b3b7bb",
    },
    "& th": {
      borderColor: "b3b7bb",
    },
    "& thead th": {
      borderColor: "b3b7bb",
    },
  },
});

export const tableResponsiveXl = style({
  "@media": {
    "(max-width: 1199.98px)": {
      display: "block",
      width: "100%",
      overflowX: "auto",
      WebkitOverflowScrolling: "touch",
    },
  },
});

export const tableResponsiveSm = style({
  "@media": {
    "(max-width: 575.98px)": {
      display: "block",
      width: "100%",
      overflowX: "auto",
      WebkitOverflowScrolling: "touch",
    },
  },
});

export const tableResponsiveMd = style({
  "@media": {
    "(max-width: 767.98px)": {
      display: "block",
      width: "100%",
      overflowX: "auto",
      WebkitOverflowScrolling: "touch",
    },
  },
});

export const tableResponsiveLg = style({
  "@media": {
    "(max-width: 991.98px)": {
      display: "block",
      width: "100%",
      overflowX: "auto",
      WebkitOverflowScrolling: "touch",
    },
  },
});

export const tablePrimary = style({
  backgroundColor: "b8daff",
  "selectors": {
    "& > td": {
      backgroundColor: "b8daff",
    },
    "& > th": {
      backgroundColor: "b8daff",
    },
    "& tbody + tbody": {
      borderColor: "7abaff",
    },
    "& td": {
      borderColor: "7abaff",
    },
    "& th": {
      borderColor: "7abaff",
    },
    "& thead th": {
      borderColor: "7abaff",
    },
  },
});

export const tableLight = style({
  backgroundColor: "fdfdfe",
  "selectors": {
    "& > td": {
      backgroundColor: "fdfdfe",
    },
    "& > th": {
      backgroundColor: "fdfdfe",
    },
    "& tbody + tbody": {
      borderColor: "fbfcfc",
    },
    "& td": {
      borderColor: "fbfcfc",
    },
    "& th": {
      borderColor: "fbfcfc",
    },
    "& thead th": {
      borderColor: "fbfcfc",
    },
  },
});

export const tableInfo = style({
  backgroundColor: "bee5eb",
  "selectors": {
    "& > td": {
      backgroundColor: "bee5eb",
    },
    "& > th": {
      backgroundColor: "bee5eb",
    },
    "& tbody + tbody": {
      borderColor: "86cfda",
    },
    "& td": {
      borderColor: "86cfda",
    },
    "& th": {
      borderColor: "86cfda",
    },
    "& thead th": {
      borderColor: "86cfda",
    },
  },
});

export const tableHover = style({
  "selectors": {
    [` ${tableActive}:hover`]: {
      backgroundColor: "rgba(0,0,0,0.075)",
    },
    [` ${tableActive}:hover > td`]: {
      backgroundColor: "rgba(0,0,0,0.075)",
    },
    [` ${tableActive}:hover > th`]: {
      backgroundColor: "rgba(0,0,0,0.075)",
    },
    [` ${tableDanger}:hover`]: {
      backgroundColor: "f1b0b7",
    },
    [` ${tableDanger}:hover > td`]: {
      backgroundColor: "f1b0b7",
    },
    [` ${tableDanger}:hover > th`]: {
      backgroundColor: "f1b0b7",
    },
    [` ${tableDark}:hover`]: {
      backgroundColor: "b9bbbe",
    },
    [` ${tableDark}:hover > td`]: {
      backgroundColor: "b9bbbe",
    },
    [` ${tableDark}:hover > th`]: {
      backgroundColor: "b9bbbe",
    },
    [` ${tableInfo}:hover`]: {
      backgroundColor: "abdde5",
    },
    [` ${tableInfo}:hover > td`]: {
      backgroundColor: "abdde5",
    },
    [` ${tableInfo}:hover > th`]: {
      backgroundColor: "abdde5",
    },
    [` ${tableLight}:hover`]: {
      backgroundColor: "ececf6",
    },
    [` ${tableLight}:hover > td`]: {
      backgroundColor: "ececf6",
    },
    [` ${tableLight}:hover > th`]: {
      backgroundColor: "ececf6",
    },
    [` ${tablePrimary}:hover`]: {
      backgroundColor: "9fcdff",
    },
    [` ${tablePrimary}:hover > td`]: {
      backgroundColor: "9fcdff",
    },
    [` ${tablePrimary}:hover > th`]: {
      backgroundColor: "9fcdff",
    },
    [` ${tableSecondary}:hover`]: {
      backgroundColor: "c8cbcf",
    },
    [` ${tableSecondary}:hover > td`]: {
      backgroundColor: "c8cbcf",
    },
    [` ${tableSecondary}:hover > th`]: {
      backgroundColor: "c8cbcf",
    },
    [` ${tableSuccess}:hover`]: {
      backgroundColor: "b1dfbb",
    },
    [` ${tableSuccess}:hover > td`]: {
      backgroundColor: "b1dfbb",
    },
    [` ${tableSuccess}:hover > th`]: {
      backgroundColor: "b1dfbb",
    },
    [` ${tableWarning}:hover`]: {
      backgroundColor: "ffe8a1",
    },
    [` ${tableWarning}:hover > td`]: {
      backgroundColor: "ffe8a1",
    },
    [` ${tableWarning}:hover > th`]: {
      backgroundColor: "ffe8a1",
    },
    "& tbody tr:hover": {
      color: "212529",
      backgroundColor: "rgba(0,0,0,0.075)",
    },
  },
});

export const show = style({
  "selectors": {
    [` > ${btnDanger}${dropdownToggle}:focus`]: {
      boxShadow: "0 0 0 0.2rem rgba(225,83,97,0.5)",
    },
    [` > ${btnDark}${dropdownToggle}:focus`]: {
      boxShadow: "0 0 0 0.2rem rgba(82,88,93,0.5)",
    },
    [` > ${btnInfo}${dropdownToggle}:focus`]: {
      boxShadow: "0 0 0 0.2rem rgba(58,176,195,0.5)",
    },
    [` > ${btnLight}${dropdownToggle}:focus`]: {
      boxShadow: "0 0 0 0.2rem rgba(216,217,219,0.5)",
    },
    [` > ${btnOutlineDanger}${dropdownToggle}:focus`]: {
      boxShadow: "0 0 0 0.2rem rgba(220,53,69,0.5)",
    },
    [` > ${btnOutlineDark}${dropdownToggle}:focus`]: {
      boxShadow: "0 0 0 0.2rem rgba(52,58,64,0.5)",
    },
    [` > ${btnOutlineInfo}${dropdownToggle}:focus`]: {
      boxShadow: "0 0 0 0.2rem rgba(23,162,184,0.5)",
    },
    [` > ${btnOutlineLight}${dropdownToggle}:focus`]: {
      boxShadow: "0 0 0 0.2rem rgba(248,249,250,0.5)",
    },
    [` > ${btnOutlinePrimary}${dropdownToggle}:focus`]: {
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,0.5)",
    },
    [` > ${btnOutlineSecondary}${dropdownToggle}:focus`]: {
      boxShadow: "0 0 0 0.2rem rgba(108,117,125,0.5)",
    },
    [` > ${btnOutlineSuccess}${dropdownToggle}:focus`]: {
      boxShadow: "0 0 0 0.2rem rgba(40,167,69,0.5)",
    },
    [` > ${btnOutlineWarning}${dropdownToggle}:focus`]: {
      boxShadow: "0 0 0 0.2rem rgba(255,193,7,0.5)",
    },
    [` > ${btnPrimary}${dropdownToggle}:focus`]: {
      boxShadow: "0 0 0 0.2rem rgba(38,143,255,0.5)",
    },
    [` > ${btnSecondary}${dropdownToggle}:focus`]: {
      boxShadow: "0 0 0 0.2rem rgba(130,138,145,0.5)",
    },
    [` > ${btnSuccess}${dropdownToggle}:focus`]: {
      boxShadow: "0 0 0 0.2rem rgba(72,180,97,0.5)",
    },
    [` > ${btnWarning}${dropdownToggle}:focus`]: {
      boxShadow: "0 0 0 0.2rem rgba(222,170,12,0.5)",
    },
    [`${navbarDark} ${navbarNav} ${navLink}&`]: {
      color: "fff",
    },
    [`${navbarLight} ${navbarNav} ${navLink}&`]: {
      color: "rgba(0,0,0,0.9)",
    },
  },
});

export const popover = style({
  position: "absolute",
  top: "0",
  left: "0",
  zIndex: "1060",
  display: "block",
  maxWidth: "276px",
  fontFamily: "-apple-system , BlinkMacSystemFont , Segoe UI , Roboto , Helvetica Neue , Arial , Noto Sans , Liberation Sans , sans-serif , Apple Color Emoji , Segoe UI Emoji , Segoe UI Symbol , Noto Color Emoji",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "1.5",
  textAlign: "left",
  textAlign: "start",
  textDecoration: "none",
  textShadow: "none",
  textTransform: "none",
  letterSpacing: "normal",
  wordBreak: "normal",
  wordSpacing: "normal",
  whiteSpace: "normal",
  lineBreak: "auto",
  fontSize: "0.875rem",
  wordWrap: "break-word",
  backgroundColor: "fff",
  backgroundClip: "padding-box",
  border: "1px solid rgba(0,0,0,0.2)",
  borderRadius: "0.3rem",
  "selectors": {
    [` ${arrow}::after`]: {
      position: "absolute",
      display: "block",
      content: "",
      borderColor: "transparent",
      borderStyle: "solid",
    },
    [` ${arrow}::before`]: {
      position: "absolute",
      display: "block",
      content: "",
      borderColor: "transparent",
      borderStyle: "solid",
    },
  },
});

export const noGutters = style({
  marginRight: "0",
  marginLeft: "0",
  "selectors": {
    "& > [class*='col-']": {
      paddingRight: "0",
      paddingLeft: "0",
    },
  },
});

export const navbarText = style({
  display: "inline-block",
  paddingTop: "0.5rem",
  paddingBottom: "0.5rem",
  "selectors": {
    [`${navbarDark} &`]: {
      color: "rgba(255,255,255,0.5)",
    },
    [`${navbarLight} &`]: {
      color: "rgba(0,0,0,0.5)",
    },
  },
});

export const navbarNav = style({
  display: "-ms-flexbox",
  display: "flex",
  msFlexDirection: "column",
  flexDirection: "column",
  paddingLeft: "0",
  marginBottom: "0",
  listStyle: "none",
  "@media": {
    "(min-width: 576px)": {
      "selectors": {
        [`${navbarExpandXl} &`]: {
          msFlexDirection: "row",
          flexDirection: "row",
        },
      },
      "selectors": {
        [`${navbarExpandSm} &`]: {
          msFlexDirection: "row",
          flexDirection: "row",
        },
      },
      "selectors": {
        [`${navbarExpandMd} &`]: {
          msFlexDirection: "row",
          flexDirection: "row",
        },
      },
      "selectors": {
        [`${navbarExpandLg} &`]: {
          msFlexDirection: "row",
          flexDirection: "row",
        },
      },
    },
  },
  "selectors": {
    [`${navbarExpand} &`]: {
      msFlexDirection: "row",
      flexDirection: "row",
    },
  },
});

export const navbarLight = style({
  "selectors": {
    [` ${navbarBrand}:focus`]: {
      color: "rgba(0,0,0,0.9)",
    },
    [` ${navbarBrand}:hover`]: {
      color: "rgba(0,0,0,0.9)",
    },
    [` ${navbarNav} ${navLink}:focus`]: {
      color: "rgba(0,0,0,0.7)",
    },
    [` ${navbarNav} ${navLink}:hover`]: {
      color: "rgba(0,0,0,0.7)",
    },
    [` ${navbarText} a`]: {
      color: "rgba(0,0,0,0.9)",
    },
    [` ${navbarText} a:focus`]: {
      color: "rgba(0,0,0,0.9)",
    },
    [` ${navbarText} a:hover`]: {
      color: "rgba(0,0,0,0.9)",
    },
  },
});

export const navbarExpandXl = style({
  "@media": {
    "(max-width: 1199.98px)": {
      msFlexFlow: "row nowrap",
      flexFlow: "row nowrap",
      msFlexPack: "start",
      justifyContent: "flex-start",
    },
  },
});

export const navbarExpandSm = style({
  "@media": {
    "(max-width: 575.98px)": {
      msFlexFlow: "row nowrap",
      flexFlow: "row nowrap",
      msFlexPack: "start",
      justifyContent: "flex-start",
    },
  },
});

export const navbarExpandMd = style({
  "@media": {
    "(max-width: 767.98px)": {
      msFlexFlow: "row nowrap",
      flexFlow: "row nowrap",
      msFlexPack: "start",
      justifyContent: "flex-start",
    },
  },
});

export const navbarExpandLg = style({
  "@media": {
    "(max-width: 991.98px)": {
      msFlexFlow: "row nowrap",
      flexFlow: "row nowrap",
      msFlexPack: "start",
      justifyContent: "flex-start",
    },
  },
});

export const navbarDark = style({
  "selectors": {
    [` ${navbarBrand}:focus`]: {
      color: "fff",
    },
    [` ${navbarBrand}:hover`]: {
      color: "fff",
    },
    [` ${navbarNav} ${navLink}:focus`]: {
      color: "rgba(255,255,255,0.75)",
    },
    [` ${navbarNav} ${navLink}:hover`]: {
      color: "rgba(255,255,255,0.75)",
    },
    [` ${navbarText} a`]: {
      color: "fff",
    },
    [` ${navbarText} a:focus`]: {
      color: "fff",
    },
    [` ${navbarText} a:hover`]: {
      color: "fff",
    },
  },
});

export const navbar = style({
  position: "relative",
  display: "-ms-flexbox",
  display: "flex",
  msFlexWrap: "wrap",
  flexWrap: "wrap",
  msFlexAlign: "center",
  alignItems: "center",
  msFlexPack: "justify",
  justifyContent: "space-between",
  padding: "0.5rem 1rem",
  "@media": {
    "print": {
      display: "none",
    },
  },
});

export const navTabs = style({
  borderBottom: "1px solid dee2e6",
  "selectors": {
    [` ${navLink}:focus`]: {
      borderColor: "e9ecef e9ecef dee2e6",
    },
    [` ${navLink}:hover`]: {
      borderColor: "e9ecef e9ecef dee2e6",
    },
  },
});

export const navLink = style({
  display: "block",
  padding: "0.5rem 1rem",
  ":focus": {
    textDecoration: "none",
  },
  ":hover": {
    textDecoration: "none",
  },
  "@media": {
    "(min-width: 576px)": {
      "selectors": {
        [`${navbarExpandXl} ${navbarNav} &`]: {
          paddingRight: "0.5rem",
          paddingLeft: "0.5rem",
        },
      },
      "selectors": {
        [`${navbarExpandSm} ${navbarNav} &`]: {
          paddingRight: "0.5rem",
          paddingLeft: "0.5rem",
        },
      },
      "selectors": {
        [`${navbarExpandMd} ${navbarNav} &`]: {
          paddingRight: "0.5rem",
          paddingLeft: "0.5rem",
        },
      },
      "selectors": {
        [`${navbarExpandLg} ${navbarNav} &`]: {
          paddingRight: "0.5rem",
          paddingLeft: "0.5rem",
        },
      },
    },
  },
  "selectors": {
    [`${disabled}`]: {
      color: "6c757d",
      pointerEvents: "none",
      cursor: "default",
    },
    [`${navFill} > &`]: {
      msFlex: "1 1 auto",
      flex: "1 1 auto",
      textAlign: "center",
    },
    [`${navJustified} > &`]: {
      msFlexPreferredSize: "0",
      flexBasis: "0",
      msFlexPositive: "1",
      flexGrow: "1",
      textAlign: "center",
    },
    [`${navPills} ${show} > &`]: {
      color: "fff",
      backgroundColor: "007bff",
    },
    [`${navPills} &`]: {
      borderRadius: "0.25rem",
    },
    [`${navTabs} ${navItem}${show} &`]: {
      color: "495057",
      backgroundColor: "fff",
      borderColor: "dee2e6 dee2e6 fff",
    },
    [`${navTabs} &`]: {
      marginBottom: "-1px",
      border: "1px solid transparent",
      borderTopLeftRadius: "0.25rem",
      borderTopRightRadius: "0.25rem",
    },
    [`${navbarDark} ${navbarNav} ${active} > &`]: {
      color: "fff",
    },
    [`${navbarDark} ${navbarNav} ${show} > &`]: {
      color: "fff",
    },
    [`${navbarDark} ${navbarNav} &`]: {
      color: "rgba(255,255,255,0.5)",
    },
    [`${navbarExpand} ${navbarNav} &`]: {
      paddingRight: "0.5rem",
      paddingLeft: "0.5rem",
    },
    [`${navbarLight} ${navbarNav} ${active} > &`]: {
      color: "rgba(0,0,0,0.9)",
    },
    [`${navbarLight} ${navbarNav} ${show} > &`]: {
      color: "rgba(0,0,0,0.9)",
    },
    [`${navbarLight} ${navbarNav} &`]: {
      color: "rgba(0,0,0,0.5)",
    },
    [`${navbarNav} &`]: {
      paddingRight: "0",
      paddingLeft: "0",
    },
  },
});

export const modalHeader = style({
  display: "-ms-flexbox",
  display: "flex",
  msFlexAlign: "start",
  alignItems: "flex-start",
  msFlexPack: "justify",
  justifyContent: "space-between",
  padding: "1rem 1rem",
  borderBottom: "1px solid dee2e6",
  borderTopLeftRadius: "calc(0.3rem-1px)",
  borderTopRightRadius: "calc(0.3rem-1px)",
  "selectors": {
    [`${modalDialogScrollable} &`]: {
      msFlexNegative: "0",
      flexShrink: "0",
    },
  },
});

export const modalDialogScrollable = style({
  display: "-ms-flexbox",
  display: "flex",
  maxHeight: "calc(100%-1rem)",
  "@media": {
    "(min-width: 576px)": {
      maxHeight: "calc(100%-3.5rem)",
    },
  },
});

export const modalDialogCentered = style({
  display: "-ms-flexbox",
  display: "flex",
  msFlexAlign: "center",
  alignItems: "center",
  minHeight: "calc(100%-1rem)",
  "::before": {
    display: "block",
    height: "calc(100vh-1rem)",
    height: "-webkit-min-content",
    height: "-moz-min-content",
    height: "min-content",
    content: "",
    height: "calc(100vh-3.5rem)",
    height: "-webkit-min-content",
    height: "-moz-min-content",
    height: "min-content",
  },
  "@media": {
    "(min-width: 576px)": {
      minHeight: "calc(100%-3.5rem)",
    },
  },
  "selectors": {
    [`${modalDialogScrollable}`]: {
      msFlexDirection: "column",
      flexDirection: "column",
      msFlexPack: "center",
      justifyContent: "center",
      height: "100%",
    },
    [`${modalDialogScrollable}::before`]: {
      content: "none",
    },
  },
});

export const listGroupItem = style({
  position: "relative",
  display: "block",
  padding: "0.75rem 1.25rem",
  backgroundColor: "fff",
  border: "1px solid rgba(0,0,0,0.125)",
  ":disabled": {
    color: "6c757d",
    pointerEvents: "none",
    backgroundColor: "fff",
  },
  ":first-child": {
    borderTopLeftRadius: "inherit",
    borderTopRightRadius: "inherit",
  },
  ":last-child": {
    borderBottomRightRadius: "inherit",
    borderBottomLeftRadius: "inherit",
  },
  "@media": {
    "(min-width: 576px)": {
      "selectors": {
        [`${listGroupHorizontalXl} > ${listGroupItem} + &`]: {
          borderTopWidth: "1px",
          borderLeftWidth: "0",
        },
      },
      "selectors": {
        [`${listGroupHorizontalSm} > ${listGroupItem} + &`]: {
          borderTopWidth: "1px",
          borderLeftWidth: "0",
        },
      },
      "selectors": {
        [`${listGroupHorizontalMd} > ${listGroupItem} + &`]: {
          borderTopWidth: "1px",
          borderLeftWidth: "0",
        },
      },
      "selectors": {
        [`${listGroupHorizontalLg} > ${listGroupItem} + &`]: {
          borderTopWidth: "1px",
          borderLeftWidth: "0",
        },
      },
    },
  },
  "selectors": {
    [`${active}`]: {
      zIndex: "2",
      color: "fff",
      backgroundColor: "007bff",
      borderColor: "007bff",
    },
    [`${disabled}`]: {
      color: "6c757d",
      pointerEvents: "none",
      backgroundColor: "fff",
    },
    [`${listGroupFlush} > &`]: {
      borderWidth: "0 0 1px",
    },
    [`${listGroupHorizontal} > ${listGroupItem} + &`]: {
      borderTopWidth: "1px",
      borderLeftWidth: "0",
    },
    [`${listGroupItem} + &`]: {
      borderTopWidth: "0",
    },
  },
});

export const listGroupHorizontalXl = style({
  "@media": {
    "(min-width: 1200px)": {
      msFlexDirection: "row",
      flexDirection: "row",
      "selectors": {
        [` > ${listGroupItem}:first-child`]: {
          borderBottomLeftRadius: "0.25rem",
          borderTopRightRadius: "0",
        },
        [` > ${listGroupItem}:last-child`]: {
          borderTopRightRadius: "0.25rem",
          borderBottomLeftRadius: "0",
        },
      },
    },
  },
});

export const listGroupHorizontalSm = style({
  "@media": {
    "(min-width: 576px)": {
      msFlexDirection: "row",
      flexDirection: "row",
      "selectors": {
        [` > ${listGroupItem}:first-child`]: {
          borderBottomLeftRadius: "0.25rem",
          borderTopRightRadius: "0",
        },
        [` > ${listGroupItem}:last-child`]: {
          borderTopRightRadius: "0.25rem",
          borderBottomLeftRadius: "0",
        },
      },
    },
  },
});

export const listGroupHorizontalMd = style({
  "@media": {
    "(min-width: 768px)": {
      msFlexDirection: "row",
      flexDirection: "row",
      "selectors": {
        [` > ${listGroupItem}:first-child`]: {
          borderBottomLeftRadius: "0.25rem",
          borderTopRightRadius: "0",
        },
        [` > ${listGroupItem}:last-child`]: {
          borderTopRightRadius: "0.25rem",
          borderBottomLeftRadius: "0",
        },
      },
    },
  },
});

export const listGroupHorizontalLg = style({
  "@media": {
    "(min-width: 992px)": {
      msFlexDirection: "row",
      flexDirection: "row",
      "selectors": {
        [` > ${listGroupItem}:first-child`]: {
          borderBottomLeftRadius: "0.25rem",
          borderTopRightRadius: "0",
        },
        [` > ${listGroupItem}:last-child`]: {
          borderTopRightRadius: "0.25rem",
          borderBottomLeftRadius: "0",
        },
      },
    },
  },
});

export const listGroupHorizontal = style({
  msFlexDirection: "row",
  flexDirection: "row",
  "selectors": {
    [` > ${listGroupItem}:first-child`]: {
      borderBottomLeftRadius: "0.25rem",
      borderTopRightRadius: "0",
    },
    [` > ${listGroupItem}:last-child`]: {
      borderTopRightRadius: "0.25rem",
      borderBottomLeftRadius: "0",
    },
  },
});

export const listGroup = style({
  display: "-ms-flexbox",
  display: "flex",
  msFlexDirection: "column",
  flexDirection: "column",
  paddingLeft: "0",
  marginBottom: "0",
  borderRadius: "0.25rem",
  "selectors": {
    [`${card} > ${cardHeader} + &`]: {
      borderTop: "0",
    },
    [`${card} > &`]: {
      borderTop: "inherit",
      borderBottom: "inherit",
    },
  },
});

export const inputGroupText = style({
  display: "-ms-flexbox",
  display: "flex",
  msFlexAlign: "center",
  alignItems: "center",
  padding: "0.375rem 0.75rem",
  marginBottom: "0",
  fontSize: "1rem",
  fontWeight: "400",
  lineHeight: "1.5",
  color: "495057",
  textAlign: "center",
  whiteSpace: "nowrap",
  backgroundColor: "e9ecef",
  border: "1px solid ced4da",
  borderRadius: "0.25rem",
  "selectors": {
    "& input[type='checkbox']": {
      marginTop: "0",
    },
    "& input[type='radio']": {
      marginTop: "0",
    },
    [`${inputGroupAppend} ${btn} + &`]: {
      marginLeft: "-1px",
    },
    [`${inputGroupAppend} ${inputGroupText} + &`]: {
      marginLeft: "-1px",
    },
    [`${inputGroupLg} > ${inputGroupAppend} > &`]: {
      padding: "0.5rem 1rem",
      fontSize: "1.25rem",
      lineHeight: "1.5",
      borderRadius: "0.3rem",
    },
    [`${inputGroupLg} > ${inputGroupPrepend} > &`]: {
      padding: "0.5rem 1rem",
      fontSize: "1.25rem",
      lineHeight: "1.5",
      borderRadius: "0.3rem",
    },
    [`${inputGroupPrepend} ${btn} + &`]: {
      marginLeft: "-1px",
    },
    [`${inputGroupPrepend} ${inputGroupText} + &`]: {
      marginLeft: "-1px",
    },
    [`${inputGroupSm} > ${inputGroupAppend} > &`]: {
      padding: "0.25rem 0.5rem",
      fontSize: "0.875rem",
      lineHeight: "1.5",
      borderRadius: "0.2rem",
    },
    [`${inputGroupSm} > ${inputGroupPrepend} > &`]: {
      padding: "0.25rem 0.5rem",
      fontSize: "0.875rem",
      lineHeight: "1.5",
      borderRadius: "0.2rem",
    },
    [`${inputGroup} > ${inputGroupAppend} > &`]: {
      borderTopLeftRadius: "0",
      borderBottomLeftRadius: "0",
    },
    [`${inputGroup} > ${inputGroupPrepend} > &`]: {
      borderTopRightRadius: "0",
      borderBottomRightRadius: "0",
    },
    [`${inputGroup} > ${inputGroupPrepend}:not(:first-child) > &`]: {
      borderTopLeftRadius: "0",
      borderBottomLeftRadius: "0",
    },
    [`${inputGroup}${hasValidation} > ${inputGroupAppend}:nth-last-child(+3) > &`]: {
      borderTopRightRadius: "0",
      borderBottomRightRadius: "0",
    },
    [`${inputGroup}:not > ${inputGroupAppend}:not(:last-child) > &`]: {
      borderTopRightRadius: "0",
      borderBottomRightRadius: "0",
    },
  },
});

export const inputGroupSm = style({
  "selectors": {
    [` > ${formControl}:not(textarea)`]: {
      height: "calc(1.5em+0.5rem+2px)",
    },
  },
});

export const inputGroupPrepend = style({
  display: "-ms-flexbox",
  display: "flex",
  marginRight: "-1px",
  "selectors": {
    [` ${btn}:focus`]: {
      zIndex: "3",
    },
  },
});

export const inputGroupLg = style({
  "selectors": {
    [` > ${formControl}:not(textarea)`]: {
      height: "calc(1.5em+1rem+2px)",
    },
  },
});

export const inputGroupAppend = style({
  display: "-ms-flexbox",
  display: "flex",
  marginLeft: "-1px",
  "selectors": {
    [` ${btn}:focus`]: {
      zIndex: "3",
    },
  },
});

export const inputGroup = style({
  position: "relative",
  display: "-ms-flexbox",
  display: "flex",
  msFlexWrap: "wrap",
  flexWrap: "wrap",
  msFlexAlign: "stretch",
  alignItems: "stretch",
  width: "100%",
  "@media": {
    "(min-width: 576px)": {
      "selectors": {
        [`${formInline} &`]: {
          width: "auto",
        },
      },
    },
  },
  "selectors": {
    [` > ${customFile} ${customFileInput}:focus`]: {
      zIndex: "4",
    },
    [` > ${customFile}:not(:last-child) ${customFileLabel}::after`]: {
      borderTopRightRadius: "0",
      borderBottomRightRadius: "0",
    },
    [` > ${customSelect}:focus`]: {
      zIndex: "3",
    },
    [` > ${customSelect}:not(:first-child)`]: {
      borderTopLeftRadius: "0",
      borderBottomLeftRadius: "0",
    },
    [` > ${formControl}:focus`]: {
      zIndex: "3",
    },
    [` > ${formControl}:not(:first-child)`]: {
      borderTopLeftRadius: "0",
      borderBottomLeftRadius: "0",
    },
    [` > ${inputGroupAppend}:last-child > ${btn}:not(:last-child):not`]: {
      borderTopRightRadius: "0",
      borderBottomRightRadius: "0",
    },
    [` > ${inputGroupAppend}:last-child > ${inputGroupText}:not(:last-child)`]: {
      borderTopRightRadius: "0",
      borderBottomRightRadius: "0",
    },
    [` > ${inputGroupPrepend}:first-child > ${btn}:not(:first-child)`]: {
      borderTopLeftRadius: "0",
      borderBottomLeftRadius: "0",
    },
    [` > ${inputGroupPrepend}:first-child > ${inputGroupText}:not(:first-child)`]: {
      borderTopLeftRadius: "0",
      borderBottomLeftRadius: "0",
    },
    [`${btnToolbar} &`]: {
      width: "auto",
    },
    [`${hasValidation} > ${customFile}:nth-last-child(+3) ${customFileLabel}::after`]: {
      borderTopRightRadius: "0",
      borderBottomRightRadius: "0",
    },
    [`${hasValidation} > ${customSelect}:nth-last-child(+3)`]: {
      borderTopRightRadius: "0",
      borderBottomRightRadius: "0",
    },
    [`${hasValidation} > ${formControl}:nth-last-child(+3)`]: {
      borderTopRightRadius: "0",
      borderBottomRightRadius: "0",
    },
    [`:not > ${customFile}:not(:last-child) ${customFileLabel}::after`]: {
      borderTopRightRadius: "0",
      borderBottomRightRadius: "0",
    },
    [`:not > ${customSelect}:not(:last-child)`]: {
      borderTopRightRadius: "0",
      borderBottomRightRadius: "0",
    },
    [`:not > ${formControl}:not(:last-child)`]: {
      borderTopRightRadius: "0",
      borderBottomRightRadius: "0",
    },
  },
});

export const formRow = style({
  display: "-ms-flexbox",
  display: "flex",
  msFlexWrap: "wrap",
  flexWrap: "wrap",
  marginRight: "-5px",
  marginLeft: "-5px",
  "selectors": {
    "& > [class*='col-']": {
      paddingRight: "5px",
      paddingLeft: "5px",
    },
  },
});

export const formInline = style({
  display: "-ms-flexbox",
  display: "flex",
  msFlexFlow: "row wrap",
  flexFlow: "row wrap",
  msFlexAlign: "center",
  alignItems: "center",
  "@media": {
    "(min-width: 576px)": {
      "selectors": {
        "& label": {
          display: "-ms-flexbox",
          display: "flex",
          msFlexAlign: "center",
          alignItems: "center",
          msFlexPack: "center",
          justifyContent: "center",
          marginBottom: "0",
        },
      },
    },
  },
});

export const formControlPlaintext = style({
  display: "block",
  width: "100%",
  padding: "0.375rem 0",
  marginBottom: "0",
  fontSize: "1rem",
  lineHeight: "1.5",
  color: "212529",
  backgroundColor: "transparent",
  border: "solid transparent",
  borderWidth: "1px 0",
  "@media": {
    "(min-width: 576px)": {
      "selectors": {
        [`${formInline} &`]: {
          display: "inline-block",
        },
      },
    },
  },
  "selectors": {
    [`${formControlLg}`]: {
      paddingRight: "0",
      paddingLeft: "0",
    },
    [`${formControlSm}`]: {
      paddingRight: "0",
      paddingLeft: "0",
    },
    [`${inputGroup} > &`]: {
      position: "relative",
      msFlex: "1 1 auto",
      flex: "1 1 auto",
      width: "1%",
      minWidth: "0",
      marginBottom: "0",
    },
  },
});

export const formControl = style({
  display: "block",
  width: "100%",
  height: "calc(1.5em+0.75rem+2px)",
  padding: "0.375rem 0.75rem",
  fontSize: "1rem",
  fontWeight: "400",
  lineHeight: "1.5",
  color: "495057",
  backgroundColor: "fff",
  backgroundClip: "padding-box",
  border: "1px solid ced4da",
  borderRadius: "0.25rem",
  transition: "border-color 0.15s ease-in-out , box-shadow 0.15s ease-in-out",
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
    color: "495057",
    backgroundColor: "fff",
    borderColor: "80bdff",
    outline: "0",
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,0.25)",
  },
  "@media": {
    "(prefers-reduced-motion: reduce)": {
      transition: "none",
      "selectors": {
        [`${formInline} &`]: {
          display: "inline-block",
          width: "auto",
          verticalAlign: "middle",
        },
      },
    },
  },
  "selectors": {
    [`${inputGroupLg} > &`]: {
      padding: "0.5rem 1rem",
      fontSize: "1.25rem",
      lineHeight: "1.5",
      borderRadius: "0.3rem",
    },
    [`${inputGroupSm} > &`]: {
      padding: "0.25rem 0.5rem",
      fontSize: "0.875rem",
      lineHeight: "1.5",
      borderRadius: "0.2rem",
    },
    [`${inputGroup} > ${customFile} + &`]: {
      marginLeft: "-1px",
    },
    [`${inputGroup} > ${customSelect} + &`]: {
      marginLeft: "-1px",
    },
    [`${inputGroup} > ${formControlPlaintext} + &`]: {
      marginLeft: "-1px",
    },
    [`${inputGroup} > ${formControl} + &`]: {
      marginLeft: "-1px",
    },
    [`${inputGroup} > &`]: {
      position: "relative",
      msFlex: "1 1 auto",
      flex: "1 1 auto",
      width: "1%",
      minWidth: "0",
      marginBottom: "0",
    },
    [`${isInvalid}`]: {
      borderColor: "dc3545",
      paddingRight: "calc(1.5em+0.75rem)",
      backgroundImage: "url(data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e)",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "right calc(0.375em+0.1875rem) center",
      backgroundSize: "calc(0.75em+0.375rem) calc(0.75em+0.375rem)",
    },
    [`${isInvalid}:focus`]: {
      borderColor: "dc3545",
      boxShadow: "0 0 0 0.2rem rgba(220,53,69,0.25)",
    },
    [`${isValid}`]: {
      borderColor: "28a745",
      paddingRight: "calc(1.5em+0.75rem)",
      backgroundImage: "url(data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath fill='%2328a745' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e)",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "right calc(0.375em+0.1875rem) center",
      backgroundSize: "calc(0.75em+0.375rem) calc(0.75em+0.375rem)",
    },
    [`${isValid}:focus`]: {
      borderColor: "28a745",
      boxShadow: "0 0 0 0.2rem rgba(40,167,69,0.25)",
    },
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

export const dropup = style({
  position: "relative",
  "selectors": {
    [` ${dropdownToggleSplit}::after`]: {
      marginLeft: "0",
    },
    [` ${dropdownToggle}::after`]: {
      display: "inline-block",
      marginLeft: "0.255em",
      verticalAlign: "0.255em",
      content: "",
      borderTop: "0",
      borderRight: "0.3em solid transparent",
      borderBottom: "0.3em solid",
      borderLeft: "0.3em solid transparent",
    },
    [` ${dropdownToggle}:empty::after`]: {
      marginLeft: "0",
    },
  },
});

export const dropright = style({
  position: "relative",
  "selectors": {
    [` ${dropdownToggleSplit}::after`]: {
      marginLeft: "0",
    },
    [` ${dropdownToggle}::after`]: {
      display: "inline-block",
      marginLeft: "0.255em",
      verticalAlign: "0.255em",
      content: "",
      borderTop: "0.3em solid transparent",
      borderRight: "0",
      borderBottom: "0.3em solid transparent",
      borderLeft: "0.3em solid",
      verticalAlign: "0",
    },
    [` ${dropdownToggle}:empty::after`]: {
      marginLeft: "0",
    },
  },
});

export const dropleft = style({
  position: "relative",
  "selectors": {
    [` ${dropdownToggleSplit}::before`]: {
      marginRight: "0",
    },
    [` ${dropdownToggle}::after`]: {
      display: "inline-block",
      marginLeft: "0.255em",
      verticalAlign: "0.255em",
      content: "",
      display: "none",
    },
    [` ${dropdownToggle}::before`]: {
      display: "inline-block",
      marginRight: "0.255em",
      verticalAlign: "0.255em",
      content: "",
      borderTop: "0.3em solid transparent",
      borderRight: "0.3em solid",
      borderBottom: "0.3em solid transparent",
      verticalAlign: "0",
    },
    [` ${dropdownToggle}:empty::after`]: {
      marginLeft: "0",
    },
  },
});

export const disabled = style({
  "selectors": {
    [`${navTabs} ${navLink}&`]: {
      color: "6c757d",
      backgroundColor: "transparent",
      borderColor: "transparent",
    },
    [`${navbarDark} ${navbarNav} ${navLink}&`]: {
      color: "rgba(255,255,255,0.25)",
    },
    [`${navbarLight} ${navbarNav} ${navLink}&`]: {
      color: "rgba(0,0,0,0.3)",
    },
  },
});

export const customSelect = style({
  display: "inline-block",
  width: "100%",
  height: "calc(1.5em+0.75rem+2px)",
  padding: "0.375rem 1.75rem 0.375rem 0.75rem",
  fontSize: "1rem",
  fontWeight: "400",
  lineHeight: "1.5",
  color: "495057",
  verticalAlign: "middle",
  background: "fff url(data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e) right 0.75rem center / 8px 10px no-repeat",
  border: "1px solid ced4da",
  borderRadius: "0.25rem",
  WebkitAppearance: "none",
  MozAppearance: "none",
  appearance: "none",
  transition: "background-color 0.15s ease-in-out , border-color 0.15s ease-in-out , box-shadow 0.15s ease-in-out",
  ":disabled": {
    color: "6c757d",
    backgroundColor: "e9ecef",
  },
  ":focus": {
    borderColor: "80bdff",
    outline: "0",
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,0.25)",
  },
  "@media": {
    "(min-width: 576px)": {
      transition: "none",
      "selectors": {
        [`${formInline} &`]: {
          width: "auto",
        },
      },
    },
  },
  "selectors": {
    [`${inputGroupLg} > &`]: {
      height: "calc(1.5em+1rem+2px)",
      padding: "0.5rem 1rem",
      fontSize: "1.25rem",
      lineHeight: "1.5",
      borderRadius: "0.3rem",
      paddingRight: "1.75rem",
    },
    [`${inputGroupSm} > &`]: {
      height: "calc(1.5em+0.5rem+2px)",
      padding: "0.25rem 0.5rem",
      fontSize: "0.875rem",
      lineHeight: "1.5",
      borderRadius: "0.2rem",
      paddingRight: "1.75rem",
    },
    [`${inputGroup} > ${customFile} + &`]: {
      marginLeft: "-1px",
    },
    [`${inputGroup} > ${customSelect} + &`]: {
      marginLeft: "-1px",
    },
    [`${inputGroup} > ${formControlPlaintext} + &`]: {
      marginLeft: "-1px",
    },
    [`${inputGroup} > ${formControl} + &`]: {
      marginLeft: "-1px",
    },
    [`${inputGroup} > &`]: {
      position: "relative",
      msFlex: "1 1 auto",
      flex: "1 1 auto",
      width: "1%",
      minWidth: "0",
      marginBottom: "0",
    },
    [`${isInvalid}`]: {
      borderColor: "dc3545",
      paddingRight: "calc(0.75em+2.3125rem)",
      background: "url(data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e) right 0.75rem center / 8px 10px no-repeat , fff url(data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e) center right 1.75rem / calc(0.75em+0.375rem) calc(0.75em+0.375rem) no-repeat",
    },
    [`${isInvalid}:focus`]: {
      borderColor: "dc3545",
      boxShadow: "0 0 0 0.2rem rgba(220,53,69,0.25)",
    },
    [`${isValid}`]: {
      borderColor: "28a745",
      paddingRight: "calc(0.75em+2.3125rem)",
      background: "url(data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e) right 0.75rem center / 8px 10px no-repeat , fff url(data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath fill='%2328a745' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e) center right 1.75rem / calc(0.75em+0.375rem) calc(0.75em+0.375rem) no-repeat",
    },
    [`${isValid}:focus`]: {
      borderColor: "28a745",
      boxShadow: "0 0 0 0.2rem rgba(40,167,69,0.25)",
    },
    "&:-moz-focusring": {
      color: "transparent",
      textShadow: "0 0 0 495057",
    },
    "&::-ms-expand": {
      display: "none",
    },
    "&:focus::-ms-value": {
      color: "495057",
      backgroundColor: "fff",
    },
    "&[multiple]": {
      height: "auto",
      paddingRight: "0.75rem",
      backgroundImage: "none",
    },
    "&[size]:not([size='1'])": {
      height: "auto",
      paddingRight: "0.75rem",
      backgroundImage: "none",
    },
  },
});

export const customFileLabel = style({
  position: "absolute",
  top: "0",
  right: "0",
  left: "0",
  zIndex: "1",
  height: "calc(1.5em+0.75rem+2px)",
  padding: "0.375rem 0.75rem",
  overflow: "hidden",
  fontWeight: "400",
  lineHeight: "1.5",
  color: "495057",
  backgroundColor: "fff",
  border: "1px solid ced4da",
  borderRadius: "0.25rem",
  transition: "background-color 0.15s ease-in-out , border-color 0.15s ease-in-out , box-shadow 0.15s ease-in-out",
  "::after": {
    position: "absolute",
    top: "0",
    right: "0",
    bottom: "0",
    zIndex: "3",
    display: "block",
    height: "calc(1.5em+0.75rem)",
    padding: "0.375rem 0.75rem",
    lineHeight: "1.5",
    color: "495057",
    content: "Browse",
    backgroundColor: "e9ecef",
    borderLeft: "inherit",
    borderRadius: "0 0.25rem 0.25rem 0",
  },
  "@media": {
    "(prefers-reduced-motion: reduce)": {
      transition: "none",
    },
  },
  "selectors": {
    [`${customFileInput}${isInvalid} ~ &`]: {
      borderColor: "dc3545",
    },
    [`${customFileInput}${isInvalid}:focus ~ &`]: {
      borderColor: "dc3545",
      boxShadow: "0 0 0 0.2rem rgba(220,53,69,0.25)",
    },
    [`${customFileInput}${isValid} ~ &`]: {
      borderColor: "28a745",
    },
    [`${customFileInput}${isValid}:focus ~ &`]: {
      borderColor: "28a745",
      boxShadow: "0 0 0 0.2rem rgba(40,167,69,0.25)",
    },
    [`${customFileInput}:disabled ~ &`]: {
      backgroundColor: "e9ecef",
    },
    [`${customFileInput}:focus ~ &`]: {
      borderColor: "80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,0.25)",
    },
    [`${customFileInput}[disabled] ~ &`]: {
      backgroundColor: "e9ecef",
    },
    [`${inputGroup} > ${customFile} ${customFileInput}:focus ~ &`]: {
      zIndex: "3",
    },
    [`${inputGroup} > ${customFile}:not(:first-child) &`]: {
      borderTopLeftRadius: "0",
      borderBottomLeftRadius: "0",
    },
    [`${inputGroup} > ${customFile}:not(:last-child) &`]: {
      borderTopRightRadius: "0",
      borderBottomRightRadius: "0",
    },
    [`${inputGroup}${hasValidation} > ${customFile}:nth-last-child(+3) &`]: {
      borderTopRightRadius: "0",
      borderBottomRightRadius: "0",
    },
    [`${inputGroup}:not > ${customFile}:not(:last-child) &`]: {
      borderTopRightRadius: "0",
      borderBottomRightRadius: "0",
    },
    [`${wasValidated} ${customFileInput}:invalid ~ &`]: {
      borderColor: "dc3545",
    },
    [`${wasValidated} ${customFileInput}:invalid:focus ~ &`]: {
      borderColor: "dc3545",
      boxShadow: "0 0 0 0.2rem rgba(220,53,69,0.25)",
    },
    [`${wasValidated} ${customFileInput}:valid ~ &`]: {
      borderColor: "28a745",
    },
    [`${wasValidated} ${customFileInput}:valid:focus ~ &`]: {
      borderColor: "28a745",
      boxShadow: "0 0 0 0.2rem rgba(40,167,69,0.25)",
    },
  },
});

export const customControlLabel = style({
  position: "relative",
  marginBottom: "0",
  verticalAlign: "top",
  "::after": {
    position: "absolute",
    top: "0.25rem",
    left: "-1.5rem",
    display: "block",
    width: "1rem",
    height: "1rem",
    content: "",
    background: "50% / 50% 50% no-repeat",
  },
  "::before": {
    position: "absolute",
    top: "0.25rem",
    left: "-1.5rem",
    display: "block",
    width: "1rem",
    height: "1rem",
    pointerEvents: "none",
    content: "",
    backgroundColor: "fff",
    border: "adb5bd solid 1px",
    transition: "background-color 0.15s ease-in-out , border-color 0.15s ease-in-out , box-shadow 0.15s ease-in-out",
    transition: "none",
  },
  "@media": {
    "(min-width: 576px)": {
      "selectors": {
        [`${formInline} &`]: {
          marginBottom: "0",
        },
      },
    },
  },
  "selectors": {
    [`${customControlInput}${isInvalid} ~ &`]: {
      color: "dc3545",
    },
    [`${customControlInput}${isValid} ~ &`]: {
      color: "28a745",
    },
    [`${customControlInput}:disabled ~ &`]: {
      color: "6c757d",
    },
    [`${customControlInput}[disabled] ~ &`]: {
      color: "6c757d",
    },
    [`${wasValidated} ${customControlInput}:invalid ~ &`]: {
      color: "dc3545",
    },
    [`${wasValidated} ${customControlInput}:valid ~ &`]: {
      color: "28a745",
    },
  },
});

export const customControlInput = style({
  position: "absolute",
  left: "0",
  zIndex: "-1",
  width: "1rem",
  height: "1.25rem",
  opacity: "0",
  "selectors": {
    [`${isInvalid} ~ ${customControlLabel}::before`]: {
      borderColor: "dc3545",
    },
    [`${isInvalid}:checked ~ ${customControlLabel}::before`]: {
      borderColor: "e4606d",
      backgroundColor: "e4606d",
    },
    [`${isInvalid}:focus ~ ${customControlLabel}::before`]: {
      boxShadow: "0 0 0 0.2rem rgba(220,53,69,0.25)",
    },
    [`${isInvalid}:focus:not(:checked) ~ ${customControlLabel}::before`]: {
      borderColor: "dc3545",
    },
    [`${isValid} ~ ${customControlLabel}::before`]: {
      borderColor: "28a745",
    },
    [`${isValid}:checked ~ ${customControlLabel}::before`]: {
      borderColor: "34ce57",
      backgroundColor: "34ce57",
    },
    [`${isValid}:focus ~ ${customControlLabel}::before`]: {
      boxShadow: "0 0 0 0.2rem rgba(40,167,69,0.25)",
    },
    [`${isValid}:focus:not(:checked) ~ ${customControlLabel}::before`]: {
      borderColor: "28a745",
    },
    [`:checked ~ ${customControlLabel}::before`]: {
      color: "fff",
      borderColor: "007bff",
      backgroundColor: "007bff",
    },
    [`:disabled ~ ${customControlLabel}::before`]: {
      backgroundColor: "e9ecef",
    },
    [`:focus ~ ${customControlLabel}::before`]: {
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,0.25)",
    },
    [`:focus:not(:checked) ~ ${customControlLabel}::before`]: {
      borderColor: "80bdff",
    },
    [`:not(:disabled):active ~ ${customControlLabel}::before`]: {
      color: "fff",
      backgroundColor: "b3d7ff",
      borderColor: "b3d7ff",
    },
    [`[disabled] ~ ${customControlLabel}::before`]: {
      backgroundColor: "e9ecef",
    },
  },
});

export const carouselItemRight = style({
  "@media": {
    "(prefers-reduced-motion: reduce)": {
      "selectors": {
        [`${carouselFade} ${active}&`]: {
          transition: "none",
        },
      },
    },
  },
  "selectors": {
    [`${carouselFade} ${active}&`]: {
      zIndex: "0",
      opacity: "0",
      transition: "opacity 0s 0.6s",
    },
    [`${carouselFade} ${carouselItemPrev}&`]: {
      zIndex: "1",
      opacity: "1",
    },
  },
});

export const carouselItemNext = style({
  display: "block",
  "selectors": {
    "&:not": {
      WebkitTransform: "translateX(100%)",
      transform: "translateX(100%)",
    },
  },
});

export const carouselItemLeft = style({
  "@media": {
    "(prefers-reduced-motion: reduce)": {
      "selectors": {
        [`${carouselFade} ${active}&`]: {
          transition: "none",
        },
      },
    },
  },
  "selectors": {
    [`${carouselFade} ${active}&`]: {
      zIndex: "0",
      opacity: "0",
      transition: "opacity 0s 0.6s",
    },
    [`${carouselFade} ${carouselItemNext}&`]: {
      zIndex: "1",
      opacity: "1",
    },
  },
});

export const carouselItem = style({
  position: "relative",
  display: "none",
  float: "left",
  width: "100%",
  marginRight: "-100%",
  WebkitBackfaceVisibility: "hidden",
  backfaceVisibility: "hidden",
  transition: "-webkit-transform 0.6s ease-in-out",
  transition: "transform 0.6s ease-in-out",
  transition: "transform 0.6s ease-in-out , -webkit-transform 0.6s ease-in-out",
  "@media": {
    "(prefers-reduced-motion: reduce)": {
      transition: "none",
    },
  },
  "selectors": {
    [`${active}`]: {
      display: "block",
    },
    [`${carouselFade} &`]: {
      opacity: "0",
      transitionProperty: "opacity",
      WebkitTransform: "none",
      transform: "none",
    },
  },
});

export const carouselIndicators = style({
  position: "absolute",
  right: "0",
  bottom: "0",
  left: "0",
  zIndex: "15",
  display: "-ms-flexbox",
  display: "flex",
  msFlexPack: "center",
  justifyContent: "center",
  paddingLeft: "0",
  marginRight: "15%",
  marginLeft: "15%",
  listStyle: "none",
  "@media": {
    "(prefers-reduced-motion: reduce)": {
      "selectors": {
        "& li": {
          transition: "none",
        },
      },
    },
  },
  "selectors": {
    "& li": {
      boxSizing: "content-box",
      msFlex: "0 1 auto",
      flex: "0 1 auto",
      width: "30px",
      height: "3px",
      marginRight: "3px",
      marginLeft: "3px",
      textIndent: "-999px",
      cursor: "pointer",
      backgroundColor: "fff",
      backgroundClip: "padding-box",
      borderTop: "10px solid transparent",
      borderBottom: "10px solid transparent",
      opacity: "0.5",
      transition: "opacity 0.6s ease",
    },
  },
});

export const carouselFade = style({
});

export const cardGroup = style({
  "@media": {
    "(min-width: 576px)": {
      display: "-ms-flexbox",
      display: "flex",
      msFlexFlow: "row wrap",
      flexFlow: "row wrap",
      "selectors": {
        [` > ${card}:not(:first-child)`]: {
          borderTopLeftRadius: "0",
          borderBottomLeftRadius: "0",
        },
        [` > ${card}:not(:last-child)`]: {
          borderTopRightRadius: "0",
          borderBottomRightRadius: "0",
        },
      },
    },
  },
});

export const cardDeck = style({
  "@media": {
    "(min-width: 576px)": {
      display: "-ms-flexbox",
      display: "flex",
      msFlexFlow: "row wrap",
      flexFlow: "row wrap",
      marginRight: "-15px",
      marginLeft: "-15px",
    },
  },
});

export const cardColumns = style({
  "@media": {
    "(min-width: 576px)": {
      WebkitColumnCount: "3",
      MozColumnCount: "3",
      columnCount: "3",
      WebkitColumnGap: "1.25rem",
      MozColumnGap: "1.25rem",
      columnGap: "1.25rem",
      orphans: "1",
      widows: "1",
    },
  },
});

export const card = style({
  position: "relative",
  display: "-ms-flexbox",
  display: "flex",
  msFlexDirection: "column",
  flexDirection: "column",
  minWidth: "0",
  wordWrap: "break-word",
  backgroundColor: "fff",
  backgroundClip: "border-box",
  border: "1px solid rgba(0,0,0,0.125)",
  borderRadius: "0.25rem",
  "@media": {
    "(min-width: 576px)": {
      "selectors": {
        [`${cardColumns} &`]: {
          display: "inline-block",
          width: "100%",
        },
        [`${cardDeck} &`]: {
          msFlex: "1 0 0%",
          flex: "1 0 0%",
          marginRight: "15px",
          marginBottom: "0",
          marginLeft: "15px",
        },
        [`${cardGroup} > ${card} + &`]: {
          marginLeft: "0",
          borderLeft: "0",
        },
        [`${cardGroup} > &`]: {
          msFlex: "1 0 0%",
          flex: "1 0 0%",
          marginBottom: "0",
        },
      },
    },
  },
  "selectors": {
    [` > ${listGroup}:first-child`]: {
      borderTopWidth: "0",
      borderTopLeftRadius: "calc(0.25rem-1px)",
      borderTopRightRadius: "calc(0.25rem-1px)",
    },
    [` > ${listGroup}:last-child`]: {
      borderBottomWidth: "0",
      borderBottomRightRadius: "calc(0.25rem-1px)",
      borderBottomLeftRadius: "calc(0.25rem-1px)",
    },
    "& > hr": {
      marginRight: "0",
      marginLeft: "0",
    },
    [`${accordion} > &`]: {
      overflow: "hidden",
    },
    [`${cardColumns} &`]: {
      marginBottom: "0.75rem",
    },
    [`${cardDeck} &`]: {
      marginBottom: "15px",
    },
    [`${cardGroup} > &`]: {
      marginBottom: "15px",
    },
  },
});

export const btnGroupVertical = style({
  position: "relative",
  display: "-ms-inline-flexbox",
  display: "inline-flex",
  verticalAlign: "middle",
  msFlexDirection: "column",
  flexDirection: "column",
  msFlexAlign: "start",
  alignItems: "flex-start",
  msFlexPack: "center",
  justifyContent: "center",
  "selectors": {
    [` > ${btnGroup}:not(:first-child)`]: {
      marginTop: "-1px",
    },
    [` > ${btn}:active`]: {
      zIndex: "1",
    },
    [` > ${btn}:focus`]: {
      zIndex: "1",
    },
    [` > ${btn}:hover`]: {
      zIndex: "1",
    },
    [` > ${btn}:not(:first-child)`]: {
      marginTop: "-1px",
      borderTopLeftRadius: "0",
      borderTopRightRadius: "0",
    },
    [` > ${btn}:not(:last-child):not`]: {
      borderBottomRightRadius: "0",
      borderBottomLeftRadius: "0",
    },
  },
});

export const btnGroupToggle = style({
  "selectors": {
    [` > ${btnGroup} > ${btn} input[type='checkbox']`]: {
      position: "absolute",
      clip: "rect(0,0,0,0)",
      pointerEvents: "none",
    },
    [` > ${btnGroup} > ${btn} input[type='radio']`]: {
      position: "absolute",
      clip: "rect(0,0,0,0)",
      pointerEvents: "none",
    },
    [` > ${btn} input[type='checkbox']`]: {
      position: "absolute",
      clip: "rect(0,0,0,0)",
      pointerEvents: "none",
    },
    [` > ${btn} input[type='radio']`]: {
      position: "absolute",
      clip: "rect(0,0,0,0)",
      pointerEvents: "none",
    },
  },
});

export const btnGroup = style({
  position: "relative",
  display: "-ms-inline-flexbox",
  display: "inline-flex",
  verticalAlign: "middle",
  "selectors": {
    [` > ${btnGroup}:not(:first-child)`]: {
      marginLeft: "-1px",
    },
    [` > ${btn}:active`]: {
      zIndex: "1",
    },
    [` > ${btn}:focus`]: {
      zIndex: "1",
    },
    [` > ${btn}:hover`]: {
      zIndex: "1",
    },
    [` > ${btn}:not(:first-child)`]: {
      marginLeft: "-1px",
      borderTopLeftRadius: "0",
      borderBottomLeftRadius: "0",
    },
    [` > ${btn}:not(:last-child):not`]: {
      borderTopRightRadius: "0",
      borderBottomRightRadius: "0",
    },
    [`${btnGroupVertical} > &`]: {
      width: "100%",
    },
  },
});

export const btn = style({
  display: "inline-block",
  fontWeight: "400",
  color: "212529",
  textAlign: "center",
  verticalAlign: "middle",
  WebkitUserSelect: "none",
  MozUserSelect: "none",
  msUserSelect: "none",
  userSelect: "none",
  backgroundColor: "transparent",
  border: "1px solid transparent",
  padding: "0.375rem 0.75rem",
  fontSize: "1rem",
  lineHeight: "1.5",
  borderRadius: "0.25rem",
  transition: "color 0.15s ease-in-out , background-color 0.15s ease-in-out , border-color 0.15s ease-in-out , box-shadow 0.15s ease-in-out",
  ":disabled": {
    opacity: "0.65",
  },
  ":focus": {
    outline: "0",
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,0.25)",
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
  "selectors": {
    [`${btnGroupLg} > &`]: {
      padding: "0.5rem 1rem",
      fontSize: "1.25rem",
      lineHeight: "1.5",
      borderRadius: "0.3rem",
    },
    [`${btnGroupSm} > &`]: {
      padding: "0.25rem 0.5rem",
      fontSize: "0.875rem",
      lineHeight: "1.5",
      borderRadius: "0.2rem",
    },
    [`${btnGroupToggle} > ${btnGroup} > &`]: {
      marginBottom: "0",
    },
    [`${btnGroupToggle} > &`]: {
      marginBottom: "0",
    },
    [`${btnGroupVertical} > ${btnGroup}:not(:first-child) > &`]: {
      borderTopLeftRadius: "0",
      borderTopRightRadius: "0",
    },
    [`${btnGroupVertical} > ${btnGroup}:not(:last-child) > &`]: {
      borderBottomRightRadius: "0",
      borderBottomLeftRadius: "0",
    },
    [`${btnGroupVertical} > &`]: {
      position: "relative",
      msFlex: "1 1 auto",
      flex: "1 1 auto",
      width: "100%",
    },
    [`${btnGroup} > ${btnGroup}:not(:first-child) > &`]: {
      borderTopLeftRadius: "0",
      borderBottomLeftRadius: "0",
    },
    [`${btnGroup} > ${btnGroup}:not(:last-child) > &`]: {
      borderTopRightRadius: "0",
      borderBottomRightRadius: "0",
    },
    [`${btnGroup} > &`]: {
      position: "relative",
      msFlex: "1 1 auto",
      flex: "1 1 auto",
    },
    [`${disabled}`]: {
      opacity: "0.65",
    },
    [`${focus}`]: {
      outline: "0",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,0.25)",
    },
    [`${inputGroupAppend} ${btn} + &`]: {
      marginLeft: "-1px",
    },
    [`${inputGroupAppend} ${inputGroupText} + &`]: {
      marginLeft: "-1px",
    },
    [`${inputGroupAppend} &`]: {
      position: "relative",
      zIndex: "2",
    },
    [`${inputGroupLg} > ${inputGroupAppend} > &`]: {
      padding: "0.5rem 1rem",
      fontSize: "1.25rem",
      lineHeight: "1.5",
      borderRadius: "0.3rem",
    },
    [`${inputGroupLg} > ${inputGroupPrepend} > &`]: {
      padding: "0.5rem 1rem",
      fontSize: "1.25rem",
      lineHeight: "1.5",
      borderRadius: "0.3rem",
    },
    [`${inputGroupPrepend} ${btn} + &`]: {
      marginLeft: "-1px",
    },
    [`${inputGroupPrepend} ${inputGroupText} + &`]: {
      marginLeft: "-1px",
    },
    [`${inputGroupPrepend} &`]: {
      position: "relative",
      zIndex: "2",
    },
    [`${inputGroupSm} > ${inputGroupAppend} > &`]: {
      padding: "0.25rem 0.5rem",
      fontSize: "0.875rem",
      lineHeight: "1.5",
      borderRadius: "0.2rem",
    },
    [`${inputGroupSm} > ${inputGroupPrepend} > &`]: {
      padding: "0.25rem 0.5rem",
      fontSize: "0.875rem",
      lineHeight: "1.5",
      borderRadius: "0.2rem",
    },
    [`${inputGroup} > ${inputGroupAppend} > &`]: {
      borderTopLeftRadius: "0",
      borderBottomLeftRadius: "0",
    },
    [`${inputGroup} > ${inputGroupPrepend} > &`]: {
      borderTopRightRadius: "0",
      borderBottomRightRadius: "0",
    },
    [`${inputGroup} > ${inputGroupPrepend}:not(:first-child) > &`]: {
      borderTopLeftRadius: "0",
      borderBottomLeftRadius: "0",
    },
    [`${inputGroup}${hasValidation} > ${inputGroupAppend}:nth-last-child(+3) > &`]: {
      borderTopRightRadius: "0",
      borderBottomRightRadius: "0",
    },
    [`${inputGroup}:not > ${inputGroupAppend}:not(:last-child) > &`]: {
      borderTopRightRadius: "0",
      borderBottomRightRadius: "0",
    },
    "&:not(:disabled):not": {
      cursor: "pointer",
    },
    "&fieldset:disabled a&": {
      pointerEvents: "none",
    },
  },
});

export const bsTooltipTop = style({
  padding: "0.4rem 0",
  "selectors": {
    [` ${arrow}::before`]: {
      top: "0",
      borderWidth: "0.4rem 0.4rem 0",
      borderTopColor: "000",
    },
  },
});

export const bsTooltipRight = style({
  padding: "0 0.4rem",
  "selectors": {
    [` ${arrow}::before`]: {
      right: "0",
      borderWidth: "0.4rem 0.4rem 0.4rem 0",
      borderRightColor: "000",
    },
  },
});

export const bsTooltipLeft = style({
  padding: "0 0.4rem",
  "selectors": {
    [` ${arrow}::before`]: {
      left: "0",
      borderWidth: "0.4rem 0 0.4rem 0.4rem",
      borderLeftColor: "000",
    },
  },
});

export const bsTooltipBottom = style({
  padding: "0.4rem 0",
  "selectors": {
    [` ${arrow}::before`]: {
      bottom: "0",
      borderWidth: "0 0.4rem 0.4rem",
      borderBottomColor: "000",
    },
  },
});

export const bsTooltipAuto = style({
  "selectors": {
    "&[x-placement^='bottom']": {
      padding: "0.4rem 0",
    },
    [`[x-placement^='bottom'] ${arrow}::before`]: {
      bottom: "0",
      borderWidth: "0 0.4rem 0.4rem",
      borderBottomColor: "000",
    },
    "&[x-placement^='left']": {
      padding: "0 0.4rem",
    },
    [`[x-placement^='left'] ${arrow}::before`]: {
      left: "0",
      borderWidth: "0.4rem 0 0.4rem 0.4rem",
      borderLeftColor: "000",
    },
    "&[x-placement^='right']": {
      padding: "0 0.4rem",
    },
    [`[x-placement^='right'] ${arrow}::before`]: {
      right: "0",
      borderWidth: "0.4rem 0.4rem 0.4rem 0",
      borderRightColor: "000",
    },
    "&[x-placement^='top']": {
      padding: "0.4rem 0",
    },
    [`[x-placement^='top'] ${arrow}::before`]: {
      top: "0",
      borderWidth: "0.4rem 0.4rem 0",
      borderTopColor: "000",
    },
  },
});

export const bsPopoverTop = style({
  marginBottom: "0.5rem",
  "selectors": {
    [` > ${arrow}::after`]: {
      bottom: "1px",
      borderWidth: "0.5rem 0.5rem 0",
      borderTopColor: "fff",
    },
    [` > ${arrow}::before`]: {
      bottom: "0",
      borderWidth: "0.5rem 0.5rem 0",
      borderTopColor: "rgba(0,0,0,0.25)",
    },
  },
});

export const bsPopoverRight = style({
  marginLeft: "0.5rem",
  "selectors": {
    [` > ${arrow}::after`]: {
      left: "1px",
      borderWidth: "0.5rem 0.5rem 0.5rem 0",
      borderRightColor: "fff",
    },
    [` > ${arrow}::before`]: {
      left: "0",
      borderWidth: "0.5rem 0.5rem 0.5rem 0",
      borderRightColor: "rgba(0,0,0,0.25)",
    },
  },
});

export const bsPopoverLeft = style({
  marginRight: "0.5rem",
  "selectors": {
    [` > ${arrow}::after`]: {
      right: "1px",
      borderWidth: "0.5rem 0 0.5rem 0.5rem",
      borderLeftColor: "fff",
    },
    [` > ${arrow}::before`]: {
      right: "0",
      borderWidth: "0.5rem 0 0.5rem 0.5rem",
      borderLeftColor: "rgba(0,0,0,0.25)",
    },
  },
});

export const bsPopoverBottom = style({
  marginTop: "0.5rem",
  "selectors": {
    [` ${popoverHeader}::before`]: {
      position: "absolute",
      top: "0",
      left: "50%",
      display: "block",
      width: "1rem",
      marginLeft: "-0.5rem",
      content: "",
      borderBottom: "1px solid f7f7f7",
    },
    [` > ${arrow}::after`]: {
      top: "1px",
      borderWidth: "0 0.5rem 0.5rem 0.5rem",
      borderBottomColor: "fff",
    },
    [` > ${arrow}::before`]: {
      top: "0",
      borderWidth: "0 0.5rem 0.5rem 0.5rem",
      borderBottomColor: "rgba(0,0,0,0.25)",
    },
  },
});

export const bsPopoverAuto = style({
  "selectors": {
    "&[x-placement^='bottom']": {
      marginTop: "0.5rem",
    },
    [`[x-placement^='bottom'] ${popoverHeader}::before`]: {
      position: "absolute",
      top: "0",
      left: "50%",
      display: "block",
      width: "1rem",
      marginLeft: "-0.5rem",
      content: "",
      borderBottom: "1px solid f7f7f7",
    },
    [`[x-placement^='bottom'] > ${arrow}::after`]: {
      top: "1px",
      borderWidth: "0 0.5rem 0.5rem 0.5rem",
      borderBottomColor: "fff",
    },
    [`[x-placement^='bottom'] > ${arrow}::before`]: {
      top: "0",
      borderWidth: "0 0.5rem 0.5rem 0.5rem",
      borderBottomColor: "rgba(0,0,0,0.25)",
    },
    "&[x-placement^='left']": {
      marginRight: "0.5rem",
    },
    [`[x-placement^='left'] > ${arrow}::after`]: {
      right: "1px",
      borderWidth: "0.5rem 0 0.5rem 0.5rem",
      borderLeftColor: "fff",
    },
    [`[x-placement^='left'] > ${arrow}::before`]: {
      right: "0",
      borderWidth: "0.5rem 0 0.5rem 0.5rem",
      borderLeftColor: "rgba(0,0,0,0.25)",
    },
    "&[x-placement^='right']": {
      marginLeft: "0.5rem",
    },
    [`[x-placement^='right'] > ${arrow}::after`]: {
      left: "1px",
      borderWidth: "0.5rem 0.5rem 0.5rem 0",
      borderRightColor: "fff",
    },
    [`[x-placement^='right'] > ${arrow}::before`]: {
      left: "0",
      borderWidth: "0.5rem 0.5rem 0.5rem 0",
      borderRightColor: "rgba(0,0,0,0.25)",
    },
    "&[x-placement^='top']": {
      marginBottom: "0.5rem",
    },
    [`[x-placement^='top'] > ${arrow}::after`]: {
      bottom: "1px",
      borderWidth: "0.5rem 0.5rem 0",
      borderTopColor: "fff",
    },
    [`[x-placement^='top'] > ${arrow}::before`]: {
      bottom: "0",
      borderWidth: "0.5rem 0.5rem 0",
      borderTopColor: "rgba(0,0,0,0.25)",
    },
  },
});

export const alertWarning = style({
  color: "856404",
  backgroundColor: "fff3cd",
  borderColor: "ffeeba",
  "selectors": {
    "& hr": {
      borderTopColor: "ffe8a1",
    },
  },
});

export const alertSuccess = style({
  color: "155724",
  backgroundColor: "d4edda",
  borderColor: "c3e6cb",
  "selectors": {
    "& hr": {
      borderTopColor: "b1dfbb",
    },
  },
});

export const alertSecondary = style({
  color: "383d41",
  backgroundColor: "e2e3e5",
  borderColor: "d6d8db",
  "selectors": {
    "& hr": {
      borderTopColor: "c8cbcf",
    },
  },
});

export const alertPrimary = style({
  color: "004085",
  backgroundColor: "cce5ff",
  borderColor: "b8daff",
  "selectors": {
    "& hr": {
      borderTopColor: "9fcdff",
    },
  },
});

export const accordion = style({
  overflowAnchor: "none",
  "selectors": {
    [` > ${card}:not(:first-of-type)`]: {
      borderTopLeftRadius: "0",
      borderTopRightRadius: "0",
    },
    [` > ${card}:not(:last-of-type)`]: {
      borderBottom: "0",
      borderBottomRightRadius: "0",
      borderBottomLeftRadius: "0",
    },
  },
});

export const active = style({
  "@media": {
    "(min-width: 576px)": {
      "selectors": {
        [`${listGroupHorizontalXl} > ${listGroupItem} + ${listGroupItem}&`]: {
          marginLeft: "-1px",
          borderLeftWidth: "1px",
        },
        [`${listGroupHorizontalXl} > ${listGroupItem}&`]: {
          marginTop: "0",
        },
      },
      "selectors": {
        [`${listGroupHorizontalSm} > ${listGroupItem} + ${listGroupItem}&`]: {
          marginLeft: "-1px",
          borderLeftWidth: "1px",
        },
        [`${listGroupHorizontalSm} > ${listGroupItem}&`]: {
          marginTop: "0",
        },
      },
      "selectors": {
        [`${listGroupHorizontalMd} > ${listGroupItem} + ${listGroupItem}&`]: {
          marginLeft: "-1px",
          borderLeftWidth: "1px",
        },
        [`${listGroupHorizontalMd} > ${listGroupItem}&`]: {
          marginTop: "0",
        },
      },
      "selectors": {
        [`${listGroupHorizontalLg} > ${listGroupItem} + ${listGroupItem}&`]: {
          marginLeft: "-1px",
          borderLeftWidth: "1px",
        },
        [`${listGroupHorizontalLg} > ${listGroupItem}&`]: {
          marginTop: "0",
        },
      },
    },
  },
  "selectors": {
    [`${btnGroupVertical} > ${btn}&`]: {
      zIndex: "1",
    },
    [`${btnGroup} > ${btn}&`]: {
      zIndex: "1",
    },
    [`${carouselFade} ${carouselItem}&`]: {
      zIndex: "1",
      opacity: "1",
    },
    [`${carouselIndicators} &`]: {
      opacity: "1",
    },
    [`${carouselItemLeft}`]: {
      WebkitTransform: "translateX(-100%)",
      transform: "translateX(-100%)",
    },
    [`${carouselItemRight}`]: {
      WebkitTransform: "translateX(100%)",
      transform: "translateX(100%)",
    },
    [`${listGroupHorizontal} > ${listGroupItem} + ${listGroupItem}&`]: {
      marginLeft: "-1px",
      borderLeftWidth: "1px",
    },
    [`${listGroupHorizontal} > ${listGroupItem}&`]: {
      marginTop: "0",
    },
    [`${listGroupItem} + ${listGroupItem}&`]: {
      marginTop: "-1px",
      borderTopWidth: "1px",
    },
    [`${navPills} ${navLink}&`]: {
      color: "fff",
      backgroundColor: "007bff",
    },
    [`${navTabs} ${navLink}&`]: {
      color: "495057",
      backgroundColor: "fff",
      borderColor: "dee2e6 dee2e6 fff",
    },
    [`${navbarDark} ${navbarNav} ${navLink}&`]: {
      color: "fff",
    },
    [`${navbarLight} ${navbarNav} ${navLink}&`]: {
      color: "rgba(0,0,0,0.9)",
    },
    [`${tabContent} > &`]: {
      display: "block",
    },
  },
});

export const alertDanger = style({
  color: "721c24",
  backgroundColor: "f8d7da",
  borderColor: "f5c6cb",
  "selectors": {
    "& hr": {
      borderTopColor: "f1b0b7",
    },
  },
});

export const alertDark = style({
  color: "1b1e21",
  backgroundColor: "d6d8d9",
  borderColor: "c6c8ca",
  "selectors": {
    "& hr": {
      borderTopColor: "b9bbbe",
    },
  },
});

export const alertInfo = style({
  color: "0c5460",
  backgroundColor: "d1ecf1",
  borderColor: "bee5eb",
  "selectors": {
    "& hr": {
      borderTopColor: "abdde5",
    },
  },
});

export const alertLight = style({
  color: "818182",
  backgroundColor: "fefefe",
  borderColor: "fdfdfe",
  "selectors": {
    "& hr": {
      borderTopColor: "ececf6",
    },
  },
});

export const alertLink = style({
  fontWeight: "700",
  "selectors": {
    [`${alertDanger} &`]: {
      color: "491217",
    },
    [`${alertDark} &`]: {
      color: "040505",
    },
    [`${alertInfo} &`]: {
      color: "062c33",
    },
    [`${alertLight} &`]: {
      color: "686868",
    },
    [`${alertPrimary} &`]: {
      color: "002752",
    },
    [`${alertSecondary} &`]: {
      color: "202326",
    },
    [`${alertSuccess} &`]: {
      color: "0b2e13",
    },
    [`${alertWarning} &`]: {
      color: "533f03",
    },
  },
});

export const alignContentLgAround = style({
  "@media": {
    "(min-width: 992px)": {
      msFlexLinePack: "distribute",
      alignContent: "space-around",
    },
  },
});

export const alignContentLgBetween = style({
  "@media": {
    "(min-width: 992px)": {
      msFlexLinePack: "justify",
      alignContent: "space-between",
    },
  },
});

export const alignContentLgCenter = style({
  "@media": {
    "(min-width: 992px)": {
      msFlexLinePack: "center",
      alignContent: "center",
    },
  },
});

export const alignContentLgEnd = style({
  "@media": {
    "(min-width: 992px)": {
      msFlexLinePack: "end",
      alignContent: "flex-end",
    },
  },
});

export const alignContentLgStart = style({
  "@media": {
    "(min-width: 992px)": {
      msFlexLinePack: "start",
      alignContent: "flex-start",
    },
  },
});

export const alignContentLgStretch = style({
  "@media": {
    "(min-width: 992px)": {
      msFlexLinePack: "stretch",
      alignContent: "stretch",
    },
  },
});

export const alignContentMdAround = style({
  "@media": {
    "(min-width: 768px)": {
      msFlexLinePack: "distribute",
      alignContent: "space-around",
    },
  },
});

export const alignContentMdBetween = style({
  "@media": {
    "(min-width: 768px)": {
      msFlexLinePack: "justify",
      alignContent: "space-between",
    },
  },
});

export const alignContentMdCenter = style({
  "@media": {
    "(min-width: 768px)": {
      msFlexLinePack: "center",
      alignContent: "center",
    },
  },
});

export const alignContentMdEnd = style({
  "@media": {
    "(min-width: 768px)": {
      msFlexLinePack: "end",
      alignContent: "flex-end",
    },
  },
});

export const alignContentMdStart = style({
  "@media": {
    "(min-width: 768px)": {
      msFlexLinePack: "start",
      alignContent: "flex-start",
    },
  },
});

export const alignContentMdStretch = style({
  "@media": {
    "(min-width: 768px)": {
      msFlexLinePack: "stretch",
      alignContent: "stretch",
    },
  },
});

export const alignContentSmAround = style({
  "@media": {
    "(min-width: 576px)": {
      msFlexLinePack: "distribute",
      alignContent: "space-around",
    },
  },
});

export const alignContentSmBetween = style({
  "@media": {
    "(min-width: 576px)": {
      msFlexLinePack: "justify",
      alignContent: "space-between",
    },
  },
});

export const alignContentSmCenter = style({
  "@media": {
    "(min-width: 576px)": {
      msFlexLinePack: "center",
      alignContent: "center",
    },
  },
});

export const alignContentSmEnd = style({
  "@media": {
    "(min-width: 576px)": {
      msFlexLinePack: "end",
      alignContent: "flex-end",
    },
  },
});

export const alignContentSmStart = style({
  "@media": {
    "(min-width: 576px)": {
      msFlexLinePack: "start",
      alignContent: "flex-start",
    },
  },
});

export const alignContentSmStretch = style({
  "@media": {
    "(min-width: 576px)": {
      msFlexLinePack: "stretch",
      alignContent: "stretch",
    },
  },
});

export const alignContentXlAround = style({
  "@media": {
    "(min-width: 1200px)": {
      msFlexLinePack: "distribute",
      alignContent: "space-around",
    },
  },
});

export const alignContentXlBetween = style({
  "@media": {
    "(min-width: 1200px)": {
      msFlexLinePack: "justify",
      alignContent: "space-between",
    },
  },
});

export const alignContentXlCenter = style({
  "@media": {
    "(min-width: 1200px)": {
      msFlexLinePack: "center",
      alignContent: "center",
    },
  },
});

export const alignContentXlEnd = style({
  "@media": {
    "(min-width: 1200px)": {
      msFlexLinePack: "end",
      alignContent: "flex-end",
    },
  },
});

export const alignContentXlStart = style({
  "@media": {
    "(min-width: 1200px)": {
      msFlexLinePack: "start",
      alignContent: "flex-start",
    },
  },
});

export const alignContentXlStretch = style({
  "@media": {
    "(min-width: 1200px)": {
      msFlexLinePack: "stretch",
      alignContent: "stretch",
    },
  },
});

export const alignItemsLgBaseline = style({
  "@media": {
    "(min-width: 992px)": {
      msFlexAlign: "baseline",
      alignItems: "baseline",
    },
  },
});

export const alignItemsLgCenter = style({
  "@media": {
    "(min-width: 992px)": {
      msFlexAlign: "center",
      alignItems: "center",
    },
  },
});

export const alignItemsLgEnd = style({
  "@media": {
    "(min-width: 992px)": {
      msFlexAlign: "end",
      alignItems: "flex-end",
    },
  },
});

export const alignItemsLgStart = style({
  "@media": {
    "(min-width: 992px)": {
      msFlexAlign: "start",
      alignItems: "flex-start",
    },
  },
});

export const alignItemsLgStretch = style({
  "@media": {
    "(min-width: 992px)": {
      msFlexAlign: "stretch",
      alignItems: "stretch",
    },
  },
});

export const alignItemsMdBaseline = style({
  "@media": {
    "(min-width: 768px)": {
      msFlexAlign: "baseline",
      alignItems: "baseline",
    },
  },
});

export const alignItemsMdCenter = style({
  "@media": {
    "(min-width: 768px)": {
      msFlexAlign: "center",
      alignItems: "center",
    },
  },
});

export const alignItemsMdEnd = style({
  "@media": {
    "(min-width: 768px)": {
      msFlexAlign: "end",
      alignItems: "flex-end",
    },
  },
});

export const alignItemsMdStart = style({
  "@media": {
    "(min-width: 768px)": {
      msFlexAlign: "start",
      alignItems: "flex-start",
    },
  },
});

export const alignItemsMdStretch = style({
  "@media": {
    "(min-width: 768px)": {
      msFlexAlign: "stretch",
      alignItems: "stretch",
    },
  },
});

export const alignItemsSmBaseline = style({
  "@media": {
    "(min-width: 576px)": {
      msFlexAlign: "baseline",
      alignItems: "baseline",
    },
  },
});

export const alignItemsSmCenter = style({
  "@media": {
    "(min-width: 576px)": {
      msFlexAlign: "center",
      alignItems: "center",
    },
  },
});

export const alignItemsSmEnd = style({
  "@media": {
    "(min-width: 576px)": {
      msFlexAlign: "end",
      alignItems: "flex-end",
    },
  },
});

export const alignItemsSmStart = style({
  "@media": {
    "(min-width: 576px)": {
      msFlexAlign: "start",
      alignItems: "flex-start",
    },
  },
});

export const alignItemsSmStretch = style({
  "@media": {
    "(min-width: 576px)": {
      msFlexAlign: "stretch",
      alignItems: "stretch",
    },
  },
});

export const alignItemsXlBaseline = style({
  "@media": {
    "(min-width: 1200px)": {
      msFlexAlign: "baseline",
      alignItems: "baseline",
    },
  },
});

export const alignItemsXlCenter = style({
  "@media": {
    "(min-width: 1200px)": {
      msFlexAlign: "center",
      alignItems: "center",
    },
  },
});

export const alignItemsXlEnd = style({
  "@media": {
    "(min-width: 1200px)": {
      msFlexAlign: "end",
      alignItems: "flex-end",
    },
  },
});

export const alignItemsXlStart = style({
  "@media": {
    "(min-width: 1200px)": {
      msFlexAlign: "start",
      alignItems: "flex-start",
    },
  },
});

export const alignItemsXlStretch = style({
  "@media": {
    "(min-width: 1200px)": {
      msFlexAlign: "stretch",
      alignItems: "stretch",
    },
  },
});

export const alignSelfLgAuto = style({
  "@media": {
    "(min-width: 992px)": {
      msFlexItemAlign: "auto",
      alignSelf: "auto",
    },
  },
});

export const alignSelfLgBaseline = style({
  "@media": {
    "(min-width: 992px)": {
      msFlexItemAlign: "baseline",
      alignSelf: "baseline",
    },
  },
});

export const alignSelfLgCenter = style({
  "@media": {
    "(min-width: 992px)": {
      msFlexItemAlign: "center",
      alignSelf: "center",
    },
  },
});

export const alignSelfLgEnd = style({
  "@media": {
    "(min-width: 992px)": {
      msFlexItemAlign: "end",
      alignSelf: "flex-end",
    },
  },
});

export const alignSelfLgStart = style({
  "@media": {
    "(min-width: 992px)": {
      msFlexItemAlign: "start",
      alignSelf: "flex-start",
    },
  },
});

export const alignSelfLgStretch = style({
  "@media": {
    "(min-width: 992px)": {
      msFlexItemAlign: "stretch",
      alignSelf: "stretch",
    },
  },
});

export const alignSelfMdAuto = style({
  "@media": {
    "(min-width: 768px)": {
      msFlexItemAlign: "auto",
      alignSelf: "auto",
    },
  },
});

export const alignSelfMdBaseline = style({
  "@media": {
    "(min-width: 768px)": {
      msFlexItemAlign: "baseline",
      alignSelf: "baseline",
    },
  },
});

export const alignSelfMdCenter = style({
  "@media": {
    "(min-width: 768px)": {
      msFlexItemAlign: "center",
      alignSelf: "center",
    },
  },
});

export const alignSelfMdEnd = style({
  "@media": {
    "(min-width: 768px)": {
      msFlexItemAlign: "end",
      alignSelf: "flex-end",
    },
  },
});

export const alignSelfMdStart = style({
  "@media": {
    "(min-width: 768px)": {
      msFlexItemAlign: "start",
      alignSelf: "flex-start",
    },
  },
});

export const alignSelfMdStretch = style({
  "@media": {
    "(min-width: 768px)": {
      msFlexItemAlign: "stretch",
      alignSelf: "stretch",
    },
  },
});

export const alignSelfSmAuto = style({
  "@media": {
    "(min-width: 576px)": {
      msFlexItemAlign: "auto",
      alignSelf: "auto",
    },
  },
});

export const alignSelfSmBaseline = style({
  "@media": {
    "(min-width: 576px)": {
      msFlexItemAlign: "baseline",
      alignSelf: "baseline",
    },
  },
});

export const alignSelfSmCenter = style({
  "@media": {
    "(min-width: 576px)": {
      msFlexItemAlign: "center",
      alignSelf: "center",
    },
  },
});

export const alignSelfSmEnd = style({
  "@media": {
    "(min-width: 576px)": {
      msFlexItemAlign: "end",
      alignSelf: "flex-end",
    },
  },
});

export const alignSelfSmStart = style({
  "@media": {
    "(min-width: 576px)": {
      msFlexItemAlign: "start",
      alignSelf: "flex-start",
    },
  },
});

export const alignSelfSmStretch = style({
  "@media": {
    "(min-width: 576px)": {
      msFlexItemAlign: "stretch",
      alignSelf: "stretch",
    },
  },
});

export const alignSelfXlAuto = style({
  "@media": {
    "(min-width: 1200px)": {
      msFlexItemAlign: "auto",
      alignSelf: "auto",
    },
  },
});

export const alignSelfXlBaseline = style({
  "@media": {
    "(min-width: 1200px)": {
      msFlexItemAlign: "baseline",
      alignSelf: "baseline",
    },
  },
});

export const alignSelfXlCenter = style({
  "@media": {
    "(min-width: 1200px)": {
      msFlexItemAlign: "center",
      alignSelf: "center",
    },
  },
});

export const alignSelfXlEnd = style({
  "@media": {
    "(min-width: 1200px)": {
      msFlexItemAlign: "end",
      alignSelf: "flex-end",
    },
  },
});

export const alignSelfXlStart = style({
  "@media": {
    "(min-width: 1200px)": {
      msFlexItemAlign: "start",
      alignSelf: "flex-start",
    },
  },
});

export const alignSelfXlStretch = style({
  "@media": {
    "(min-width: 1200px)": {
      msFlexItemAlign: "stretch",
      alignSelf: "stretch",
    },
  },
});

export const arrow = style({
  "selectors": {
    [`${bsPopoverAuto}[x-placement^='bottom'] > &`]: {
      top: "calc(-0.5rem-1px)",
    },
    [`${bsPopoverAuto}[x-placement^='left'] > &`]: {
      right: "calc(-0.5rem-1px)",
      width: "0.5rem",
      height: "1rem",
      margin: "0.3rem 0",
    },
    [`${bsPopoverAuto}[x-placement^='right'] > &`]: {
      left: "calc(-0.5rem-1px)",
      width: "0.5rem",
      height: "1rem",
      margin: "0.3rem 0",
    },
    [`${bsPopoverAuto}[x-placement^='top'] > &`]: {
      bottom: "calc(-0.5rem-1px)",
    },
    [`${bsPopoverBottom} > &`]: {
      top: "calc(-0.5rem-1px)",
    },
    [`${bsPopoverLeft} > &`]: {
      right: "calc(-0.5rem-1px)",
      width: "0.5rem",
      height: "1rem",
      margin: "0.3rem 0",
    },
    [`${bsPopoverRight} > &`]: {
      left: "calc(-0.5rem-1px)",
      width: "0.5rem",
      height: "1rem",
      margin: "0.3rem 0",
    },
    [`${bsPopoverTop} > &`]: {
      bottom: "calc(-0.5rem-1px)",
    },
    [`${bsTooltipAuto}[x-placement^='bottom'] &`]: {
      top: "0",
    },
    [`${bsTooltipAuto}[x-placement^='left'] &`]: {
      right: "0",
      width: "0.4rem",
      height: "0.8rem",
    },
    [`${bsTooltipAuto}[x-placement^='right'] &`]: {
      left: "0",
      width: "0.4rem",
      height: "0.8rem",
    },
    [`${bsTooltipAuto}[x-placement^='top'] &`]: {
      bottom: "0",
    },
    [`${bsTooltipBottom} &`]: {
      top: "0",
    },
    [`${bsTooltipLeft} &`]: {
      right: "0",
      width: "0.4rem",
      height: "0.8rem",
    },
    [`${bsTooltipRight} &`]: {
      left: "0",
      width: "0.4rem",
      height: "0.8rem",
    },
    [`${bsTooltipTop} &`]: {
      bottom: "0",
    },
    [`${popover} &`]: {
      position: "absolute",
      display: "block",
      width: "1rem",
      height: "0.5rem",
      margin: "0 0.3rem",
    },
    [`${tooltip} &`]: {
      position: "absolute",
      display: "block",
      width: "0.8rem",
      height: "0.4rem",
    },
  },
});

export const badge = style({
  display: "inline-block",
  padding: "0.25em 0.4em",
  fontSize: "75%",
  fontWeight: "700",
  lineHeight: "1",
  textAlign: "center",
  whiteSpace: "nowrap",
  verticalAlign: "baseline",
  borderRadius: "0.25rem",
  transition: "color 0.15s ease-in-out , background-color 0.15s ease-in-out , border-color 0.15s ease-in-out , box-shadow 0.15s ease-in-out",
  ":empty": {
    display: "none",
  },
  "@media": {
    "(prefers-reduced-motion: reduce)": {
      transition: "none",
      border: "1px solid 000",
    },
  },
  "selectors": {
    [`${btn} &`]: {
      position: "relative",
      top: "-1px",
    },
  },
});

export const breadcrumbItem = style({
  "selectors": {
    [` + ${breadcrumbItem}::before`]: {
      float: "left",
      paddingRight: "0.5rem",
      color: "6c757d",
      content: "/",
    },
    [` + ${breadcrumbItem}:hover::before`]: {
      textDecoration: "underline",
      textDecoration: "none",
    },
    [`${active}`]: {
      color: "6c757d",
    },
    [`${breadcrumbItem} + &`]: {
      paddingLeft: "0.5rem",
    },
  },
});

export const btnBlock = style({
  display: "block",
  width: "100%",
  "selectors": {
    [`${btnBlock} + &`]: {
      marginTop: "0.5rem",
    },
  },
});

export const btnDanger = style({
  color: "fff",
  backgroundColor: "dc3545",
  borderColor: "dc3545",
  ":disabled": {
    color: "fff",
    backgroundColor: "dc3545",
    borderColor: "dc3545",
  },
  ":focus": {
    color: "fff",
    backgroundColor: "c82333",
    borderColor: "bd2130",
    boxShadow: "0 0 0 0.2rem rgba(225,83,97,0.5)",
  },
  ":hover": {
    color: "fff",
    backgroundColor: "c82333",
    borderColor: "bd2130",
  },
  "selectors": {
    [`${disabled}`]: {
      color: "fff",
      backgroundColor: "dc3545",
      borderColor: "dc3545",
    },
    [`${focus}`]: {
      color: "fff",
      backgroundColor: "c82333",
      borderColor: "bd2130",
      boxShadow: "0 0 0 0.2rem rgba(225,83,97,0.5)",
    },
    [`:not(:disabled):not${active}`]: {
      color: "fff",
      backgroundColor: "bd2130",
      borderColor: "b21f2d",
    },
    [`:not(:disabled):not${active}:focus`]: {
      boxShadow: "0 0 0 0.2rem rgba(225,83,97,0.5)",
    },
    "&:not(:disabled):not:active": {
      color: "fff",
      backgroundColor: "bd2130",
      borderColor: "b21f2d",
    },
    "&:not(:disabled):not:active:focus": {
      boxShadow: "0 0 0 0.2rem rgba(225,83,97,0.5)",
    },
  },
});

export const btnDark = style({
  color: "fff",
  backgroundColor: "343a40",
  borderColor: "343a40",
  ":disabled": {
    color: "fff",
    backgroundColor: "343a40",
    borderColor: "343a40",
  },
  ":focus": {
    color: "fff",
    backgroundColor: "23272b",
    borderColor: "1d2124",
    boxShadow: "0 0 0 0.2rem rgba(82,88,93,0.5)",
  },
  ":hover": {
    color: "fff",
    backgroundColor: "23272b",
    borderColor: "1d2124",
  },
  "selectors": {
    [`${disabled}`]: {
      color: "fff",
      backgroundColor: "343a40",
      borderColor: "343a40",
    },
    [`${focus}`]: {
      color: "fff",
      backgroundColor: "23272b",
      borderColor: "1d2124",
      boxShadow: "0 0 0 0.2rem rgba(82,88,93,0.5)",
    },
    [`:not(:disabled):not${active}`]: {
      color: "fff",
      backgroundColor: "1d2124",
      borderColor: "171a1d",
    },
    [`:not(:disabled):not${active}:focus`]: {
      boxShadow: "0 0 0 0.2rem rgba(82,88,93,0.5)",
    },
    "&:not(:disabled):not:active": {
      color: "fff",
      backgroundColor: "1d2124",
      borderColor: "171a1d",
    },
    "&:not(:disabled):not:active:focus": {
      boxShadow: "0 0 0 0.2rem rgba(82,88,93,0.5)",
    },
  },
});

export const btnInfo = style({
  color: "fff",
  backgroundColor: "17a2b8",
  borderColor: "17a2b8",
  ":disabled": {
    color: "fff",
    backgroundColor: "17a2b8",
    borderColor: "17a2b8",
  },
  ":focus": {
    color: "fff",
    backgroundColor: "138496",
    borderColor: "117a8b",
    boxShadow: "0 0 0 0.2rem rgba(58,176,195,0.5)",
  },
  ":hover": {
    color: "fff",
    backgroundColor: "138496",
    borderColor: "117a8b",
  },
  "selectors": {
    [`${disabled}`]: {
      color: "fff",
      backgroundColor: "17a2b8",
      borderColor: "17a2b8",
    },
    [`${focus}`]: {
      color: "fff",
      backgroundColor: "138496",
      borderColor: "117a8b",
      boxShadow: "0 0 0 0.2rem rgba(58,176,195,0.5)",
    },
    [`:not(:disabled):not${active}`]: {
      color: "fff",
      backgroundColor: "117a8b",
      borderColor: "10707f",
    },
    [`:not(:disabled):not${active}:focus`]: {
      boxShadow: "0 0 0 0.2rem rgba(58,176,195,0.5)",
    },
    "&:not(:disabled):not:active": {
      color: "fff",
      backgroundColor: "117a8b",
      borderColor: "10707f",
    },
    "&:not(:disabled):not:active:focus": {
      boxShadow: "0 0 0 0.2rem rgba(58,176,195,0.5)",
    },
  },
});

export const btnLight = style({
  color: "212529",
  backgroundColor: "f8f9fa",
  borderColor: "f8f9fa",
  ":disabled": {
    color: "212529",
    backgroundColor: "f8f9fa",
    borderColor: "f8f9fa",
  },
  ":focus": {
    color: "212529",
    backgroundColor: "e2e6ea",
    borderColor: "dae0e5",
    boxShadow: "0 0 0 0.2rem rgba(216,217,219,0.5)",
  },
  ":hover": {
    color: "212529",
    backgroundColor: "e2e6ea",
    borderColor: "dae0e5",
  },
  "selectors": {
    [`${disabled}`]: {
      color: "212529",
      backgroundColor: "f8f9fa",
      borderColor: "f8f9fa",
    },
    [`${focus}`]: {
      color: "212529",
      backgroundColor: "e2e6ea",
      borderColor: "dae0e5",
      boxShadow: "0 0 0 0.2rem rgba(216,217,219,0.5)",
    },
    [`:not(:disabled):not${active}`]: {
      color: "212529",
      backgroundColor: "dae0e5",
      borderColor: "d3d9df",
    },
    [`:not(:disabled):not${active}:focus`]: {
      boxShadow: "0 0 0 0.2rem rgba(216,217,219,0.5)",
    },
    "&:not(:disabled):not:active": {
      color: "212529",
      backgroundColor: "dae0e5",
      borderColor: "d3d9df",
    },
    "&:not(:disabled):not:active:focus": {
      boxShadow: "0 0 0 0.2rem rgba(216,217,219,0.5)",
    },
  },
});

export const btnLink = style({
  fontWeight: "400",
  color: "007bff",
  textDecoration: "none",
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
  "selectors": {
    [`${disabled}`]: {
      color: "6c757d",
      pointerEvents: "none",
    },
    [`${focus}`]: {
      textDecoration: "underline",
    },
  },
});

export const btnOutlineDanger = style({
  color: "dc3545",
  borderColor: "dc3545",
  ":disabled": {
    color: "dc3545",
    backgroundColor: "transparent",
  },
  ":focus": {
    boxShadow: "0 0 0 0.2rem rgba(220,53,69,0.5)",
  },
  ":hover": {
    color: "fff",
    backgroundColor: "dc3545",
    borderColor: "dc3545",
  },
  "selectors": {
    [`${disabled}`]: {
      color: "dc3545",
      backgroundColor: "transparent",
    },
    [`${focus}`]: {
      boxShadow: "0 0 0 0.2rem rgba(220,53,69,0.5)",
    },
    [`:not(:disabled):not${active}`]: {
      color: "fff",
      backgroundColor: "dc3545",
      borderColor: "dc3545",
    },
    [`:not(:disabled):not${active}:focus`]: {
      boxShadow: "0 0 0 0.2rem rgba(220,53,69,0.5)",
    },
    "&:not(:disabled):not:active": {
      color: "fff",
      backgroundColor: "dc3545",
      borderColor: "dc3545",
    },
    "&:not(:disabled):not:active:focus": {
      boxShadow: "0 0 0 0.2rem rgba(220,53,69,0.5)",
    },
  },
});

export const btnOutlineDark = style({
  color: "343a40",
  borderColor: "343a40",
  ":disabled": {
    color: "343a40",
    backgroundColor: "transparent",
  },
  ":focus": {
    boxShadow: "0 0 0 0.2rem rgba(52,58,64,0.5)",
  },
  ":hover": {
    color: "fff",
    backgroundColor: "343a40",
    borderColor: "343a40",
  },
  "selectors": {
    [`${disabled}`]: {
      color: "343a40",
      backgroundColor: "transparent",
    },
    [`${focus}`]: {
      boxShadow: "0 0 0 0.2rem rgba(52,58,64,0.5)",
    },
    [`:not(:disabled):not${active}`]: {
      color: "fff",
      backgroundColor: "343a40",
      borderColor: "343a40",
    },
    [`:not(:disabled):not${active}:focus`]: {
      boxShadow: "0 0 0 0.2rem rgba(52,58,64,0.5)",
    },
    "&:not(:disabled):not:active": {
      color: "fff",
      backgroundColor: "343a40",
      borderColor: "343a40",
    },
    "&:not(:disabled):not:active:focus": {
      boxShadow: "0 0 0 0.2rem rgba(52,58,64,0.5)",
    },
  },
});

export const btnOutlineInfo = style({
  color: "17a2b8",
  borderColor: "17a2b8",
  ":disabled": {
    color: "17a2b8",
    backgroundColor: "transparent",
  },
  ":focus": {
    boxShadow: "0 0 0 0.2rem rgba(23,162,184,0.5)",
  },
  ":hover": {
    color: "fff",
    backgroundColor: "17a2b8",
    borderColor: "17a2b8",
  },
  "selectors": {
    [`${disabled}`]: {
      color: "17a2b8",
      backgroundColor: "transparent",
    },
    [`${focus}`]: {
      boxShadow: "0 0 0 0.2rem rgba(23,162,184,0.5)",
    },
    [`:not(:disabled):not${active}`]: {
      color: "fff",
      backgroundColor: "17a2b8",
      borderColor: "17a2b8",
    },
    [`:not(:disabled):not${active}:focus`]: {
      boxShadow: "0 0 0 0.2rem rgba(23,162,184,0.5)",
    },
    "&:not(:disabled):not:active": {
      color: "fff",
      backgroundColor: "17a2b8",
      borderColor: "17a2b8",
    },
    "&:not(:disabled):not:active:focus": {
      boxShadow: "0 0 0 0.2rem rgba(23,162,184,0.5)",
    },
  },
});

export const btnOutlineLight = style({
  color: "f8f9fa",
  borderColor: "f8f9fa",
  ":disabled": {
    color: "f8f9fa",
    backgroundColor: "transparent",
  },
  ":focus": {
    boxShadow: "0 0 0 0.2rem rgba(248,249,250,0.5)",
  },
  ":hover": {
    color: "212529",
    backgroundColor: "f8f9fa",
    borderColor: "f8f9fa",
  },
  "selectors": {
    [`${disabled}`]: {
      color: "f8f9fa",
      backgroundColor: "transparent",
    },
    [`${focus}`]: {
      boxShadow: "0 0 0 0.2rem rgba(248,249,250,0.5)",
    },
    [`:not(:disabled):not${active}`]: {
      color: "212529",
      backgroundColor: "f8f9fa",
      borderColor: "f8f9fa",
    },
    [`:not(:disabled):not${active}:focus`]: {
      boxShadow: "0 0 0 0.2rem rgba(248,249,250,0.5)",
    },
    "&:not(:disabled):not:active": {
      color: "212529",
      backgroundColor: "f8f9fa",
      borderColor: "f8f9fa",
    },
    "&:not(:disabled):not:active:focus": {
      boxShadow: "0 0 0 0.2rem rgba(248,249,250,0.5)",
    },
  },
});

export const btnOutlinePrimary = style({
  color: "007bff",
  borderColor: "007bff",
  ":disabled": {
    color: "007bff",
    backgroundColor: "transparent",
  },
  ":focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,0.5)",
  },
  ":hover": {
    color: "fff",
    backgroundColor: "007bff",
    borderColor: "007bff",
  },
  "selectors": {
    [`${disabled}`]: {
      color: "007bff",
      backgroundColor: "transparent",
    },
    [`${focus}`]: {
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,0.5)",
    },
    [`:not(:disabled):not${active}`]: {
      color: "fff",
      backgroundColor: "007bff",
      borderColor: "007bff",
    },
    [`:not(:disabled):not${active}:focus`]: {
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,0.5)",
    },
    "&:not(:disabled):not:active": {
      color: "fff",
      backgroundColor: "007bff",
      borderColor: "007bff",
    },
    "&:not(:disabled):not:active:focus": {
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,0.5)",
    },
  },
});

export const btnOutlineSecondary = style({
  color: "6c757d",
  borderColor: "6c757d",
  ":disabled": {
    color: "6c757d",
    backgroundColor: "transparent",
  },
  ":focus": {
    boxShadow: "0 0 0 0.2rem rgba(108,117,125,0.5)",
  },
  ":hover": {
    color: "fff",
    backgroundColor: "6c757d",
    borderColor: "6c757d",
  },
  "selectors": {
    [`${disabled}`]: {
      color: "6c757d",
      backgroundColor: "transparent",
    },
    [`${focus}`]: {
      boxShadow: "0 0 0 0.2rem rgba(108,117,125,0.5)",
    },
    [`:not(:disabled):not${active}`]: {
      color: "fff",
      backgroundColor: "6c757d",
      borderColor: "6c757d",
    },
    [`:not(:disabled):not${active}:focus`]: {
      boxShadow: "0 0 0 0.2rem rgba(108,117,125,0.5)",
    },
    "&:not(:disabled):not:active": {
      color: "fff",
      backgroundColor: "6c757d",
      borderColor: "6c757d",
    },
    "&:not(:disabled):not:active:focus": {
      boxShadow: "0 0 0 0.2rem rgba(108,117,125,0.5)",
    },
  },
});

export const btnOutlineSuccess = style({
  color: "28a745",
  borderColor: "28a745",
  ":disabled": {
    color: "28a745",
    backgroundColor: "transparent",
  },
  ":focus": {
    boxShadow: "0 0 0 0.2rem rgba(40,167,69,0.5)",
  },
  ":hover": {
    color: "fff",
    backgroundColor: "28a745",
    borderColor: "28a745",
  },
  "selectors": {
    [`${disabled}`]: {
      color: "28a745",
      backgroundColor: "transparent",
    },
    [`${focus}`]: {
      boxShadow: "0 0 0 0.2rem rgba(40,167,69,0.5)",
    },
    [`:not(:disabled):not${active}`]: {
      color: "fff",
      backgroundColor: "28a745",
      borderColor: "28a745",
    },
    [`:not(:disabled):not${active}:focus`]: {
      boxShadow: "0 0 0 0.2rem rgba(40,167,69,0.5)",
    },
    "&:not(:disabled):not:active": {
      color: "fff",
      backgroundColor: "28a745",
      borderColor: "28a745",
    },
    "&:not(:disabled):not:active:focus": {
      boxShadow: "0 0 0 0.2rem rgba(40,167,69,0.5)",
    },
  },
});

export const btnOutlineWarning = style({
  color: "ffc107",
  borderColor: "ffc107",
  ":disabled": {
    color: "ffc107",
    backgroundColor: "transparent",
  },
  ":focus": {
    boxShadow: "0 0 0 0.2rem rgba(255,193,7,0.5)",
  },
  ":hover": {
    color: "212529",
    backgroundColor: "ffc107",
    borderColor: "ffc107",
  },
  "selectors": {
    [`${disabled}`]: {
      color: "ffc107",
      backgroundColor: "transparent",
    },
    [`${focus}`]: {
      boxShadow: "0 0 0 0.2rem rgba(255,193,7,0.5)",
    },
    [`:not(:disabled):not${active}`]: {
      color: "212529",
      backgroundColor: "ffc107",
      borderColor: "ffc107",
    },
    [`:not(:disabled):not${active}:focus`]: {
      boxShadow: "0 0 0 0.2rem rgba(255,193,7,0.5)",
    },
    "&:not(:disabled):not:active": {
      color: "212529",
      backgroundColor: "ffc107",
      borderColor: "ffc107",
    },
    "&:not(:disabled):not:active:focus": {
      boxShadow: "0 0 0 0.2rem rgba(255,193,7,0.5)",
    },
  },
});

export const btnPrimary = style({
  color: "fff",
  backgroundColor: "007bff",
  borderColor: "007bff",
  ":disabled": {
    color: "fff",
    backgroundColor: "007bff",
    borderColor: "007bff",
  },
  ":focus": {
    color: "fff",
    backgroundColor: "0069d9",
    borderColor: "0062cc",
    boxShadow: "0 0 0 0.2rem rgba(38,143,255,0.5)",
  },
  ":hover": {
    color: "fff",
    backgroundColor: "0069d9",
    borderColor: "0062cc",
  },
  "selectors": {
    [`${disabled}`]: {
      color: "fff",
      backgroundColor: "007bff",
      borderColor: "007bff",
    },
    [`${focus}`]: {
      color: "fff",
      backgroundColor: "0069d9",
      borderColor: "0062cc",
      boxShadow: "0 0 0 0.2rem rgba(38,143,255,0.5)",
    },
    [`:not(:disabled):not${active}`]: {
      color: "fff",
      backgroundColor: "0062cc",
      borderColor: "005cbf",
    },
    [`:not(:disabled):not${active}:focus`]: {
      boxShadow: "0 0 0 0.2rem rgba(38,143,255,0.5)",
    },
    "&:not(:disabled):not:active": {
      color: "fff",
      backgroundColor: "0062cc",
      borderColor: "005cbf",
    },
    "&:not(:disabled):not:active:focus": {
      boxShadow: "0 0 0 0.2rem rgba(38,143,255,0.5)",
    },
  },
});

export const btnSecondary = style({
  color: "fff",
  backgroundColor: "6c757d",
  borderColor: "6c757d",
  ":disabled": {
    color: "fff",
    backgroundColor: "6c757d",
    borderColor: "6c757d",
  },
  ":focus": {
    color: "fff",
    backgroundColor: "5a6268",
    borderColor: "545b62",
    boxShadow: "0 0 0 0.2rem rgba(130,138,145,0.5)",
  },
  ":hover": {
    color: "fff",
    backgroundColor: "5a6268",
    borderColor: "545b62",
  },
  "selectors": {
    [`${disabled}`]: {
      color: "fff",
      backgroundColor: "6c757d",
      borderColor: "6c757d",
    },
    [`${focus}`]: {
      color: "fff",
      backgroundColor: "5a6268",
      borderColor: "545b62",
      boxShadow: "0 0 0 0.2rem rgba(130,138,145,0.5)",
    },
    [`:not(:disabled):not${active}`]: {
      color: "fff",
      backgroundColor: "545b62",
      borderColor: "4e555b",
    },
    [`:not(:disabled):not${active}:focus`]: {
      boxShadow: "0 0 0 0.2rem rgba(130,138,145,0.5)",
    },
    "&:not(:disabled):not:active": {
      color: "fff",
      backgroundColor: "545b62",
      borderColor: "4e555b",
    },
    "&:not(:disabled):not:active:focus": {
      boxShadow: "0 0 0 0.2rem rgba(130,138,145,0.5)",
    },
  },
});

export const btnSuccess = style({
  color: "fff",
  backgroundColor: "28a745",
  borderColor: "28a745",
  ":disabled": {
    color: "fff",
    backgroundColor: "28a745",
    borderColor: "28a745",
  },
  ":focus": {
    color: "fff",
    backgroundColor: "218838",
    borderColor: "1e7e34",
    boxShadow: "0 0 0 0.2rem rgba(72,180,97,0.5)",
  },
  ":hover": {
    color: "fff",
    backgroundColor: "218838",
    borderColor: "1e7e34",
  },
  "selectors": {
    [`${disabled}`]: {
      color: "fff",
      backgroundColor: "28a745",
      borderColor: "28a745",
    },
    [`${focus}`]: {
      color: "fff",
      backgroundColor: "218838",
      borderColor: "1e7e34",
      boxShadow: "0 0 0 0.2rem rgba(72,180,97,0.5)",
    },
    [`:not(:disabled):not${active}`]: {
      color: "fff",
      backgroundColor: "1e7e34",
      borderColor: "1c7430",
    },
    [`:not(:disabled):not${active}:focus`]: {
      boxShadow: "0 0 0 0.2rem rgba(72,180,97,0.5)",
    },
    "&:not(:disabled):not:active": {
      color: "fff",
      backgroundColor: "1e7e34",
      borderColor: "1c7430",
    },
    "&:not(:disabled):not:active:focus": {
      boxShadow: "0 0 0 0.2rem rgba(72,180,97,0.5)",
    },
  },
});

export const btnWarning = style({
  color: "212529",
  backgroundColor: "ffc107",
  borderColor: "ffc107",
  ":disabled": {
    color: "212529",
    backgroundColor: "ffc107",
    borderColor: "ffc107",
  },
  ":focus": {
    color: "212529",
    backgroundColor: "e0a800",
    borderColor: "d39e00",
    boxShadow: "0 0 0 0.2rem rgba(222,170,12,0.5)",
  },
  ":hover": {
    color: "212529",
    backgroundColor: "e0a800",
    borderColor: "d39e00",
  },
  "selectors": {
    [`${disabled}`]: {
      color: "212529",
      backgroundColor: "ffc107",
      borderColor: "ffc107",
    },
    [`${focus}`]: {
      color: "212529",
      backgroundColor: "e0a800",
      borderColor: "d39e00",
      boxShadow: "0 0 0 0.2rem rgba(222,170,12,0.5)",
    },
    [`:not(:disabled):not${active}`]: {
      color: "212529",
      backgroundColor: "d39e00",
      borderColor: "c69500",
    },
    [`:not(:disabled):not${active}:focus`]: {
      boxShadow: "0 0 0 0.2rem rgba(222,170,12,0.5)",
    },
    "&:not(:disabled):not:active": {
      color: "212529",
      backgroundColor: "d39e00",
      borderColor: "c69500",
    },
    "&:not(:disabled):not:active:focus": {
      boxShadow: "0 0 0 0.2rem rgba(222,170,12,0.5)",
    },
  },
});

export const cardFooter = style({
  padding: "0.75rem 1.25rem",
  backgroundColor: "rgba(0,0,0,0.03)",
  borderTop: "1px solid rgba(0,0,0,0.125)",
  ":last-child": {
    borderRadius: "0 0 calc(0.25rem-1px) calc(0.25rem-1px)",
  },
  "@media": {
    "(min-width: 576px)": {
      "selectors": {
        [`${cardGroup} > ${card}:not(:first-child) &`]: {
          borderBottomLeftRadius: "0",
        },
        [`${cardGroup} > ${card}:not(:last-child) &`]: {
          borderBottomRightRadius: "0",
        },
      },
    },
  },
  "selectors": {
    [`${card} > ${listGroup} + &`]: {
      borderTop: "0",
    },
  },
});

export const cardHeader = style({
  padding: "0.75rem 1.25rem",
  marginBottom: "0",
  backgroundColor: "rgba(0,0,0,0.03)",
  borderBottom: "1px solid rgba(0,0,0,0.125)",
  ":first-child": {
    borderRadius: "calc(0.25rem-1px) calc(0.25rem-1px) 0 0",
  },
  "@media": {
    "(min-width: 576px)": {
      "selectors": {
        [`${cardGroup} > ${card}:not(:first-child) &`]: {
          borderTopLeftRadius: "0",
        },
        [`${cardGroup} > ${card}:not(:last-child) &`]: {
          borderTopRightRadius: "0",
        },
      },
    },
  },
  "selectors": {
    [`${accordion} > ${card} > &`]: {
      borderRadius: "0",
      marginBottom: "-1px",
    },
  },
});

export const cardImgBottom = style({
  msFlexNegative: "0",
  flexShrink: "0",
  width: "100%",
  borderBottomRightRadius: "calc(0.25rem-1px)",
  borderBottomLeftRadius: "calc(0.25rem-1px)",
  "@media": {
    "(min-width: 576px)": {
      "selectors": {
        [`${cardGroup} > ${card}:not(:first-child) &`]: {
          borderBottomLeftRadius: "0",
        },
        [`${cardGroup} > ${card}:not(:last-child) &`]: {
          borderBottomRightRadius: "0",
        },
      },
    },
  },
});

export const cardImgTop = style({
  msFlexNegative: "0",
  flexShrink: "0",
  width: "100%",
  borderTopLeftRadius: "calc(0.25rem-1px)",
  borderTopRightRadius: "calc(0.25rem-1px)",
  "@media": {
    "(min-width: 576px)": {
      "selectors": {
        [`${cardGroup} > ${card}:not(:first-child) &`]: {
          borderTopLeftRadius: "0",
        },
        [`${cardGroup} > ${card}:not(:last-child) &`]: {
          borderTopRightRadius: "0",
        },
      },
    },
  },
});

export const cardLink = style({
  ":hover": {
    textDecoration: "none",
  },
  "selectors": {
    [`${cardLink} + &`]: {
      marginLeft: "1.25rem",
    },
  },
});

export const carousel = style({
  position: "relative",
  "selectors": {
    [`${pointerEvent}`]: {
      msTouchAction: "pan-y",
      touchAction: "pan-y",
    },
  },
});

export const carouselControlNext = style({
  position: "absolute",
  top: "0",
  bottom: "0",
  zIndex: "1",
  display: "-ms-flexbox",
  display: "flex",
  msFlexAlign: "center",
  alignItems: "center",
  msFlexPack: "center",
  justifyContent: "center",
  width: "15%",
  padding: "0",
  color: "fff",
  textAlign: "center",
  background: "none",
  border: "0",
  opacity: "0.5",
  transition: "opacity 0.15s ease",
  right: "0",
  ":focus": {
    color: "fff",
    textDecoration: "none",
    outline: "0",
    opacity: "0.9",
  },
  ":hover": {
    color: "fff",
    textDecoration: "none",
    outline: "0",
    opacity: "0.9",
  },
  "@media": {
    "(prefers-reduced-motion: reduce)": {
      transition: "none",
    },
  },
});

export const carouselControlPrev = style({
  position: "absolute",
  top: "0",
  bottom: "0",
  zIndex: "1",
  display: "-ms-flexbox",
  display: "flex",
  msFlexAlign: "center",
  alignItems: "center",
  msFlexPack: "center",
  justifyContent: "center",
  width: "15%",
  padding: "0",
  color: "fff",
  textAlign: "center",
  background: "none",
  border: "0",
  opacity: "0.5",
  transition: "opacity 0.15s ease",
  left: "0",
  ":focus": {
    color: "fff",
    textDecoration: "none",
    outline: "0",
    opacity: "0.9",
  },
  ":hover": {
    color: "fff",
    textDecoration: "none",
    outline: "0",
    opacity: "0.9",
  },
  "@media": {
    "(prefers-reduced-motion: reduce)": {
      transition: "none",
    },
  },
});

export const carouselItemPrev = style({
  display: "block",
  "selectors": {
    "&:not": {
      WebkitTransform: "translateX(-100%)",
      transform: "translateX(-100%)",
    },
  },
});

export const close = style({
  float: "right",
  fontSize: "1.5rem",
  fontWeight: "700",
  lineHeight: "1",
  color: "000",
  textShadow: "0 1px 0 fff",
  opacity: "0.5",
  ":hover": {
    color: "000",
    textDecoration: "none",
  },
  "selectors": {
    [`${alertDismissible} &`]: {
      position: "absolute",
      top: "0",
      right: "0",
      zIndex: "2",
      padding: "0.75rem 1.25rem",
      color: "inherit",
    },
    [`${modalHeader} &`]: {
      padding: "1rem 1rem",
      margin: "-1rem -1rem -1rem auto",
    },
    "&:not(:disabled):not:focus": {
      opacity: "0.75",
    },
    "&:not(:disabled):not:hover": {
      opacity: "0.75",
    },
  },
});

export const col = style({
  position: "relative",
  width: "100%",
  paddingRight: "15px",
  paddingLeft: "15px",
  msFlexPreferredSize: "0",
  flexBasis: "0",
  msFlexPositive: "1",
  flexGrow: "1",
  maxWidth: "100%",
  "selectors": {
    [`${formRow} > &`]: {
      paddingRight: "5px",
      paddingLeft: "5px",
    },
    [`${noGutters} > &`]: {
      paddingRight: "0",
      paddingLeft: "0",
    },
  },
});

export const colLg = style({
  position: "relative",
  width: "100%",
  paddingRight: "15px",
  paddingLeft: "15px",
  "@media": {
    "(min-width: 992px)": {
      msFlexPreferredSize: "0",
      flexBasis: "0",
      msFlexPositive: "1",
      flexGrow: "1",
      maxWidth: "100%",
    },
  },
});

export const colLg1 = style({
  position: "relative",
  width: "100%",
  paddingRight: "15px",
  paddingLeft: "15px",
  "@media": {
    "(min-width: 992px)": {
      msFlex: "0 0 8.333333%",
      flex: "0 0 8.333333%",
      maxWidth: "8.333333%",
    },
  },
});

export const colLg10 = style({
  position: "relative",
  width: "100%",
  paddingRight: "15px",
  paddingLeft: "15px",
  "@media": {
    "(min-width: 992px)": {
      msFlex: "0 0 83.333333%",
      flex: "0 0 83.333333%",
      maxWidth: "83.333333%",
    },
  },
});

export const colLg11 = style({
  position: "relative",
  width: "100%",
  paddingRight: "15px",
  paddingLeft: "15px",
  "@media": {
    "(min-width: 992px)": {
      msFlex: "0 0 91.666667%",
      flex: "0 0 91.666667%",
      maxWidth: "91.666667%",
    },
  },
});

export const colLg12 = style({
  position: "relative",
  width: "100%",
  paddingRight: "15px",
  paddingLeft: "15px",
  "@media": {
    "(min-width: 992px)": {
      msFlex: "0 0 100%",
      flex: "0 0 100%",
      maxWidth: "100%",
    },
  },
});

export const colLg2 = style({
  position: "relative",
  width: "100%",
  paddingRight: "15px",
  paddingLeft: "15px",
  "@media": {
    "(min-width: 992px)": {
      msFlex: "0 0 16.666667%",
      flex: "0 0 16.666667%",
      maxWidth: "16.666667%",
    },
  },
});

export const colLg3 = style({
  position: "relative",
  width: "100%",
  paddingRight: "15px",
  paddingLeft: "15px",
  "@media": {
    "(min-width: 992px)": {
      msFlex: "0 0 25%",
      flex: "0 0 25%",
      maxWidth: "25%",
    },
  },
});

export const colLg4 = style({
  position: "relative",
  width: "100%",
  paddingRight: "15px",
  paddingLeft: "15px",
  "@media": {
    "(min-width: 992px)": {
      msFlex: "0 0 33.333333%",
      flex: "0 0 33.333333%",
      maxWidth: "33.333333%",
    },
  },
});

export const colLg5 = style({
  position: "relative",
  width: "100%",
  paddingRight: "15px",
  paddingLeft: "15px",
  "@media": {
    "(min-width: 992px)": {
      msFlex: "0 0 41.666667%",
      flex: "0 0 41.666667%",
      maxWidth: "41.666667%",
    },
  },
});

export const colLg6 = style({
  position: "relative",
  width: "100%",
  paddingRight: "15px",
  paddingLeft: "15px",
  "@media": {
    "(min-width: 992px)": {
      msFlex: "0 0 50%",
      flex: "0 0 50%",
      maxWidth: "50%",
    },
  },
});

export const colLg7 = style({
  position: "relative",
  width: "100%",
  paddingRight: "15px",
  paddingLeft: "15px",
  "@media": {
    "(min-width: 992px)": {
      msFlex: "0 0 58.333333%",
      flex: "0 0 58.333333%",
      maxWidth: "58.333333%",
    },
  },
});

export const colLg8 = style({
  position: "relative",
  width: "100%",
  paddingRight: "15px",
  paddingLeft: "15px",
  "@media": {
    "(min-width: 992px)": {
      msFlex: "0 0 66.666667%",
      flex: "0 0 66.666667%",
      maxWidth: "66.666667%",
    },
  },
});

export const colLg9 = style({
  position: "relative",
  width: "100%",
  paddingRight: "15px",
  paddingLeft: "15px",
  "@media": {
    "(min-width: 992px)": {
      msFlex: "0 0 75%",
      flex: "0 0 75%",
      maxWidth: "75%",
    },
  },
});

export const colLgAuto = style({
  position: "relative",
  width: "100%",
  paddingRight: "15px",
  paddingLeft: "15px",
  "@media": {
    "(min-width: 992px)": {
      msFlex: "0 0 auto",
      flex: "0 0 auto",
      width: "auto",
      maxWidth: "100%",
    },
  },
});

export const colMd = style({
  position: "relative",
  width: "100%",
  paddingRight: "15px",
  paddingLeft: "15px",
  "@media": {
    "(min-width: 768px)": {
      msFlexPreferredSize: "0",
      flexBasis: "0",
      msFlexPositive: "1",
      flexGrow: "1",
      maxWidth: "100%",
    },
  },
});

export const colMd1 = style({
  position: "relative",
  width: "100%",
  paddingRight: "15px",
  paddingLeft: "15px",
  "@media": {
    "(min-width: 768px)": {
      msFlex: "0 0 8.333333%",
      flex: "0 0 8.333333%",
      maxWidth: "8.333333%",
    },
  },
});

export const colMd10 = style({
  position: "relative",
  width: "100%",
  paddingRight: "15px",
  paddingLeft: "15px",
  "@media": {
    "(min-width: 768px)": {
      msFlex: "0 0 83.333333%",
      flex: "0 0 83.333333%",
      maxWidth: "83.333333%",
    },
  },
});

export const colMd11 = style({
  position: "relative",
  width: "100%",
  paddingRight: "15px",
  paddingLeft: "15px",
  "@media": {
    "(min-width: 768px)": {
      msFlex: "0 0 91.666667%",
      flex: "0 0 91.666667%",
      maxWidth: "91.666667%",
    },
  },
});

export const colMd12 = style({
  position: "relative",
  width: "100%",
  paddingRight: "15px",
  paddingLeft: "15px",
  "@media": {
    "(min-width: 768px)": {
      msFlex: "0 0 100%",
      flex: "0 0 100%",
      maxWidth: "100%",
    },
  },
});

export const colMd2 = style({
  position: "relative",
  width: "100%",
  paddingRight: "15px",
  paddingLeft: "15px",
  "@media": {
    "(min-width: 768px)": {
      msFlex: "0 0 16.666667%",
      flex: "0 0 16.666667%",
      maxWidth: "16.666667%",
    },
  },
});

export const colMd3 = style({
  position: "relative",
  width: "100%",
  paddingRight: "15px",
  paddingLeft: "15px",
  "@media": {
    "(min-width: 768px)": {
      msFlex: "0 0 25%",
      flex: "0 0 25%",
      maxWidth: "25%",
    },
  },
});

export const colMd4 = style({
  position: "relative",
  width: "100%",
  paddingRight: "15px",
  paddingLeft: "15px",
  "@media": {
    "(min-width: 768px)": {
      msFlex: "0 0 33.333333%",
      flex: "0 0 33.333333%",
      maxWidth: "33.333333%",
    },
  },
});

export const colMd5 = style({
  position: "relative",
  width: "100%",
  paddingRight: "15px",
  paddingLeft: "15px",
  "@media": {
    "(min-width: 768px)": {
      msFlex: "0 0 41.666667%",
      flex: "0 0 41.666667%",
      maxWidth: "41.666667%",
    },
  },
});

export const colMd6 = style({
  position: "relative",
  width: "100%",
  paddingRight: "15px",
  paddingLeft: "15px",
  "@media": {
    "(min-width: 768px)": {
      msFlex: "0 0 50%",
      flex: "0 0 50%",
      maxWidth: "50%",
    },
  },
});

export const colMd7 = style({
  position: "relative",
  width: "100%",
  paddingRight: "15px",
  paddingLeft: "15px",
  "@media": {
    "(min-width: 768px)": {
      msFlex: "0 0 58.333333%",
      flex: "0 0 58.333333%",
      maxWidth: "58.333333%",
    },
  },
});

export const colMd8 = style({
  position: "relative",
  width: "100%",
  paddingRight: "15px",
  paddingLeft: "15px",
  "@media": {
    "(min-width: 768px)": {
      msFlex: "0 0 66.666667%",
      flex: "0 0 66.666667%",
      maxWidth: "66.666667%",
    },
  },
});

export const colMd9 = style({
  position: "relative",
  width: "100%",
  paddingRight: "15px",
  paddingLeft: "15px",
  "@media": {
    "(min-width: 768px)": {
      msFlex: "0 0 75%",
      flex: "0 0 75%",
      maxWidth: "75%",
    },
  },
});

export const colMdAuto = style({
  position: "relative",
  width: "100%",
  paddingRight: "15px",
  paddingLeft: "15px",
  "@media": {
    "(min-width: 768px)": {
      msFlex: "0 0 auto",
      flex: "0 0 auto",
      width: "auto",
      maxWidth: "100%",
    },
  },
});

export const colSm = style({
  position: "relative",
  width: "100%",
  paddingRight: "15px",
  paddingLeft: "15px",
  "@media": {
    "(min-width: 576px)": {
      msFlexPreferredSize: "0",
      flexBasis: "0",
      msFlexPositive: "1",
      flexGrow: "1",
      maxWidth: "100%",
    },
  },
});

export const colSm1 = style({
  position: "relative",
  width: "100%",
  paddingRight: "15px",
  paddingLeft: "15px",
  "@media": {
    "(min-width: 576px)": {
      msFlex: "0 0 8.333333%",
      flex: "0 0 8.333333%",
      maxWidth: "8.333333%",
    },
  },
});

export const colSm10 = style({
  position: "relative",
  width: "100%",
  paddingRight: "15px",
  paddingLeft: "15px",
  "@media": {
    "(min-width: 576px)": {
      msFlex: "0 0 83.333333%",
      flex: "0 0 83.333333%",
      maxWidth: "83.333333%",
    },
  },
});

export const colSm11 = style({
  position: "relative",
  width: "100%",
  paddingRight: "15px",
  paddingLeft: "15px",
  "@media": {
    "(min-width: 576px)": {
      msFlex: "0 0 91.666667%",
      flex: "0 0 91.666667%",
      maxWidth: "91.666667%",
    },
  },
});

export const colSm12 = style({
  position: "relative",
  width: "100%",
  paddingRight: "15px",
  paddingLeft: "15px",
  "@media": {
    "(min-width: 576px)": {
      msFlex: "0 0 100%",
      flex: "0 0 100%",
      maxWidth: "100%",
    },
  },
});

export const colSm2 = style({
  position: "relative",
  width: "100%",
  paddingRight: "15px",
  paddingLeft: "15px",
  "@media": {
    "(min-width: 576px)": {
      msFlex: "0 0 16.666667%",
      flex: "0 0 16.666667%",
      maxWidth: "16.666667%",
    },
  },
});

export const colSm3 = style({
  position: "relative",
  width: "100%",
  paddingRight: "15px",
  paddingLeft: "15px",
  "@media": {
    "(min-width: 576px)": {
      msFlex: "0 0 25%",
      flex: "0 0 25%",
      maxWidth: "25%",
    },
  },
});

export const colSm4 = style({
  position: "relative",
  width: "100%",
  paddingRight: "15px",
  paddingLeft: "15px",
  "@media": {
    "(min-width: 576px)": {
      msFlex: "0 0 33.333333%",
      flex: "0 0 33.333333%",
      maxWidth: "33.333333%",
    },
  },
});

export const colSm5 = style({
  position: "relative",
  width: "100%",
  paddingRight: "15px",
  paddingLeft: "15px",
  "@media": {
    "(min-width: 576px)": {
      msFlex: "0 0 41.666667%",
      flex: "0 0 41.666667%",
      maxWidth: "41.666667%",
    },
  },
});

export const colSm6 = style({
  position: "relative",
  width: "100%",
  paddingRight: "15px",
  paddingLeft: "15px",
  "@media": {
    "(min-width: 576px)": {
      msFlex: "0 0 50%",
      flex: "0 0 50%",
      maxWidth: "50%",
    },
  },
});

export const colSm7 = style({
  position: "relative",
  width: "100%",
  paddingRight: "15px",
  paddingLeft: "15px",
  "@media": {
    "(min-width: 576px)": {
      msFlex: "0 0 58.333333%",
      flex: "0 0 58.333333%",
      maxWidth: "58.333333%",
    },
  },
});

export const colSm8 = style({
  position: "relative",
  width: "100%",
  paddingRight: "15px",
  paddingLeft: "15px",
  "@media": {
    "(min-width: 576px)": {
      msFlex: "0 0 66.666667%",
      flex: "0 0 66.666667%",
      maxWidth: "66.666667%",
    },
  },
});

export const colSm9 = style({
  position: "relative",
  width: "100%",
  paddingRight: "15px",
  paddingLeft: "15px",
  "@media": {
    "(min-width: 576px)": {
      msFlex: "0 0 75%",
      flex: "0 0 75%",
      maxWidth: "75%",
    },
  },
});

export const colSmAuto = style({
  position: "relative",
  width: "100%",
  paddingRight: "15px",
  paddingLeft: "15px",
  "@media": {
    "(min-width: 576px)": {
      msFlex: "0 0 auto",
      flex: "0 0 auto",
      width: "auto",
      maxWidth: "100%",
    },
  },
});

export const colXl = style({
  position: "relative",
  width: "100%",
  paddingRight: "15px",
  paddingLeft: "15px",
  "@media": {
    "(min-width: 1200px)": {
      msFlexPreferredSize: "0",
      flexBasis: "0",
      msFlexPositive: "1",
      flexGrow: "1",
      maxWidth: "100%",
    },
  },
});

export const colXl1 = style({
  position: "relative",
  width: "100%",
  paddingRight: "15px",
  paddingLeft: "15px",
  "@media": {
    "(min-width: 1200px)": {
      msFlex: "0 0 8.333333%",
      flex: "0 0 8.333333%",
      maxWidth: "8.333333%",
    },
  },
});

export const colXl10 = style({
  position: "relative",
  width: "100%",
  paddingRight: "15px",
  paddingLeft: "15px",
  "@media": {
    "(min-width: 1200px)": {
      msFlex: "0 0 83.333333%",
      flex: "0 0 83.333333%",
      maxWidth: "83.333333%",
    },
  },
});

export const colXl11 = style({
  position: "relative",
  width: "100%",
  paddingRight: "15px",
  paddingLeft: "15px",
  "@media": {
    "(min-width: 1200px)": {
      msFlex: "0 0 91.666667%",
      flex: "0 0 91.666667%",
      maxWidth: "91.666667%",
    },
  },
});

export const colXl12 = style({
  position: "relative",
  width: "100%",
  paddingRight: "15px",
  paddingLeft: "15px",
  "@media": {
    "(min-width: 1200px)": {
      msFlex: "0 0 100%",
      flex: "0 0 100%",
      maxWidth: "100%",
    },
  },
});

export const colXl2 = style({
  position: "relative",
  width: "100%",
  paddingRight: "15px",
  paddingLeft: "15px",
  "@media": {
    "(min-width: 1200px)": {
      msFlex: "0 0 16.666667%",
      flex: "0 0 16.666667%",
      maxWidth: "16.666667%",
    },
  },
});

export const colXl3 = style({
  position: "relative",
  width: "100%",
  paddingRight: "15px",
  paddingLeft: "15px",
  "@media": {
    "(min-width: 1200px)": {
      msFlex: "0 0 25%",
      flex: "0 0 25%",
      maxWidth: "25%",
    },
  },
});

export const colXl4 = style({
  position: "relative",
  width: "100%",
  paddingRight: "15px",
  paddingLeft: "15px",
  "@media": {
    "(min-width: 1200px)": {
      msFlex: "0 0 33.333333%",
      flex: "0 0 33.333333%",
      maxWidth: "33.333333%",
    },
  },
});

export const colXl5 = style({
  position: "relative",
  width: "100%",
  paddingRight: "15px",
  paddingLeft: "15px",
  "@media": {
    "(min-width: 1200px)": {
      msFlex: "0 0 41.666667%",
      flex: "0 0 41.666667%",
      maxWidth: "41.666667%",
    },
  },
});

export const colXl6 = style({
  position: "relative",
  width: "100%",
  paddingRight: "15px",
  paddingLeft: "15px",
  "@media": {
    "(min-width: 1200px)": {
      msFlex: "0 0 50%",
      flex: "0 0 50%",
      maxWidth: "50%",
    },
  },
});

export const colXl7 = style({
  position: "relative",
  width: "100%",
  paddingRight: "15px",
  paddingLeft: "15px",
  "@media": {
    "(min-width: 1200px)": {
      msFlex: "0 0 58.333333%",
      flex: "0 0 58.333333%",
      maxWidth: "58.333333%",
    },
  },
});

export const colXl8 = style({
  position: "relative",
  width: "100%",
  paddingRight: "15px",
  paddingLeft: "15px",
  "@media": {
    "(min-width: 1200px)": {
      msFlex: "0 0 66.666667%",
      flex: "0 0 66.666667%",
      maxWidth: "66.666667%",
    },
  },
});

export const colXl9 = style({
  position: "relative",
  width: "100%",
  paddingRight: "15px",
  paddingLeft: "15px",
  "@media": {
    "(min-width: 1200px)": {
      msFlex: "0 0 75%",
      flex: "0 0 75%",
      maxWidth: "75%",
    },
  },
});

export const colXlAuto = style({
  position: "relative",
  width: "100%",
  paddingRight: "15px",
  paddingLeft: "15px",
  "@media": {
    "(min-width: 1200px)": {
      msFlex: "0 0 auto",
      flex: "0 0 auto",
      width: "auto",
      maxWidth: "100%",
    },
  },
});

export const collapse = style({
  "selectors": {
    "&:not": {
      display: "none",
    },
  },
});

export const collapsing = style({
  position: "relative",
  height: "0",
  overflow: "hidden",
  transition: "height 0.35s ease",
  "@media": {
    "(prefers-reduced-motion: reduce)": {
      transition: "none",
    },
  },
});

export const container = style({
  width: "100%",
  paddingRight: "15px",
  paddingLeft: "15px",
  marginRight: "auto",
  marginLeft: "auto",
  "@media": {
    "(min-width: 576px)": {
      maxWidth: "540px",
      maxWidth: "720px",
      maxWidth: "960px",
      maxWidth: "1140px",
      minWidth: "992px",
      "selectors": {
        [`${navbarExpandXl} > &`]: {
          paddingRight: "0",
          paddingLeft: "0",
        },
      },
      "selectors": {
        [`${navbarExpandSm} > &`]: {
          paddingRight: "0",
          paddingLeft: "0",
        },
      },
      "selectors": {
        [`${navbarExpandMd} > &`]: {
          paddingRight: "0",
          paddingLeft: "0",
        },
      },
      "selectors": {
        [`${navbarExpandLg} > &`]: {
          paddingRight: "0",
          paddingLeft: "0",
        },
      },
      "selectors": {
        [`${navbarExpandXl} > &`]: {
          msFlexWrap: "nowrap",
          flexWrap: "nowrap",
        },
      },
      "selectors": {
        [`${navbarExpandSm} > &`]: {
          msFlexWrap: "nowrap",
          flexWrap: "nowrap",
        },
      },
      "selectors": {
        [`${navbarExpandMd} > &`]: {
          msFlexWrap: "nowrap",
          flexWrap: "nowrap",
        },
      },
      "selectors": {
        [`${navbarExpandLg} > &`]: {
          msFlexWrap: "nowrap",
          flexWrap: "nowrap",
        },
      },
    },
  },
  "selectors": {
    [`${navbarExpand} > &`]: {
      paddingRight: "0",
      paddingLeft: "0",
      msFlexWrap: "nowrap",
      flexWrap: "nowrap",
    },
    [`${navbar} &`]: {
      display: "-ms-flexbox",
      display: "flex",
      msFlexWrap: "wrap",
      flexWrap: "wrap",
      msFlexAlign: "center",
      alignItems: "center",
      msFlexPack: "justify",
      justifyContent: "space-between",
    },
  },
});

export const containerFluid = style({
  width: "100%",
  paddingRight: "15px",
  paddingLeft: "15px",
  marginRight: "auto",
  marginLeft: "auto",
  "@media": {
    "(max-width: 575.98px)": {
      "selectors": {
        [`${navbarExpandXl} > &`]: {
          paddingRight: "0",
          paddingLeft: "0",
        },
      },
      "selectors": {
        [`${navbarExpandSm} > &`]: {
          paddingRight: "0",
          paddingLeft: "0",
        },
      },
      "selectors": {
        [`${navbarExpandMd} > &`]: {
          paddingRight: "0",
          paddingLeft: "0",
        },
      },
      "selectors": {
        [`${navbarExpandLg} > &`]: {
          paddingRight: "0",
          paddingLeft: "0",
        },
      },
      "selectors": {
        [`${navbarExpandXl} > &`]: {
          msFlexWrap: "nowrap",
          flexWrap: "nowrap",
        },
      },
      "selectors": {
        [`${navbarExpandSm} > &`]: {
          msFlexWrap: "nowrap",
          flexWrap: "nowrap",
        },
      },
      "selectors": {
        [`${navbarExpandMd} > &`]: {
          msFlexWrap: "nowrap",
          flexWrap: "nowrap",
        },
      },
      "selectors": {
        [`${navbarExpandLg} > &`]: {
          msFlexWrap: "nowrap",
          flexWrap: "nowrap",
        },
      },
    },
  },
  "selectors": {
    [`${navbarExpand} > &`]: {
      paddingRight: "0",
      paddingLeft: "0",
      msFlexWrap: "nowrap",
      flexWrap: "nowrap",
    },
    [`${navbar} &`]: {
      display: "-ms-flexbox",
      display: "flex",
      msFlexWrap: "wrap",
      flexWrap: "wrap",
      msFlexAlign: "center",
      alignItems: "center",
      msFlexPack: "justify",
      justifyContent: "space-between",
    },
  },
});

export const containerLg = style({
  width: "100%",
  paddingRight: "15px",
  paddingLeft: "15px",
  marginRight: "auto",
  marginLeft: "auto",
  "@media": {
    "(min-width: 992px)": {
      maxWidth: "960px",
      maxWidth: "1140px",
      "selectors": {
        [`${navbarExpandXl} > &`]: {
          paddingRight: "0",
          paddingLeft: "0",
        },
      },
      "selectors": {
        [`${navbarExpandSm} > &`]: {
          paddingRight: "0",
          paddingLeft: "0",
        },
      },
      "selectors": {
        [`${navbarExpandMd} > &`]: {
          paddingRight: "0",
          paddingLeft: "0",
        },
      },
      "selectors": {
        [`${navbarExpandLg} > &`]: {
          paddingRight: "0",
          paddingLeft: "0",
        },
      },
      "selectors": {
        [`${navbarExpandXl} > &`]: {
          msFlexWrap: "nowrap",
          flexWrap: "nowrap",
        },
      },
      "selectors": {
        [`${navbarExpandSm} > &`]: {
          msFlexWrap: "nowrap",
          flexWrap: "nowrap",
        },
      },
      "selectors": {
        [`${navbarExpandMd} > &`]: {
          msFlexWrap: "nowrap",
          flexWrap: "nowrap",
        },
      },
      "selectors": {
        [`${navbarExpandLg} > &`]: {
          msFlexWrap: "nowrap",
          flexWrap: "nowrap",
        },
      },
    },
  },
  "selectors": {
    [`${navbarExpand} > &`]: {
      paddingRight: "0",
      paddingLeft: "0",
      msFlexWrap: "nowrap",
      flexWrap: "nowrap",
    },
    [`${navbar} &`]: {
      display: "-ms-flexbox",
      display: "flex",
      msFlexWrap: "wrap",
      flexWrap: "wrap",
      msFlexAlign: "center",
      alignItems: "center",
      msFlexPack: "justify",
      justifyContent: "space-between",
    },
  },
});

export const containerMd = style({
  width: "100%",
  paddingRight: "15px",
  paddingLeft: "15px",
  marginRight: "auto",
  marginLeft: "auto",
  "@media": {
    "(min-width: 768px)": {
      maxWidth: "720px",
      maxWidth: "960px",
      maxWidth: "1140px",
      "selectors": {
        [`${navbarExpandXl} > &`]: {
          paddingRight: "0",
          paddingLeft: "0",
        },
      },
      "selectors": {
        [`${navbarExpandSm} > &`]: {
          paddingRight: "0",
          paddingLeft: "0",
        },
      },
      "selectors": {
        [`${navbarExpandMd} > &`]: {
          paddingRight: "0",
          paddingLeft: "0",
        },
      },
      "selectors": {
        [`${navbarExpandLg} > &`]: {
          paddingRight: "0",
          paddingLeft: "0",
        },
      },
      "selectors": {
        [`${navbarExpandXl} > &`]: {
          msFlexWrap: "nowrap",
          flexWrap: "nowrap",
        },
      },
      "selectors": {
        [`${navbarExpandSm} > &`]: {
          msFlexWrap: "nowrap",
          flexWrap: "nowrap",
        },
      },
      "selectors": {
        [`${navbarExpandMd} > &`]: {
          msFlexWrap: "nowrap",
          flexWrap: "nowrap",
        },
      },
      "selectors": {
        [`${navbarExpandLg} > &`]: {
          msFlexWrap: "nowrap",
          flexWrap: "nowrap",
        },
      },
    },
  },
  "selectors": {
    [`${navbarExpand} > &`]: {
      paddingRight: "0",
      paddingLeft: "0",
      msFlexWrap: "nowrap",
      flexWrap: "nowrap",
    },
    [`${navbar} &`]: {
      display: "-ms-flexbox",
      display: "flex",
      msFlexWrap: "wrap",
      flexWrap: "wrap",
      msFlexAlign: "center",
      alignItems: "center",
      msFlexPack: "justify",
      justifyContent: "space-between",
    },
  },
});

export const containerSm = style({
  width: "100%",
  paddingRight: "15px",
  paddingLeft: "15px",
  marginRight: "auto",
  marginLeft: "auto",
  "@media": {
    "(min-width: 576px)": {
      maxWidth: "540px",
      maxWidth: "720px",
      maxWidth: "960px",
      maxWidth: "1140px",
      "selectors": {
        [`${navbarExpandXl} > &`]: {
          paddingRight: "0",
          paddingLeft: "0",
        },
      },
      "selectors": {
        [`${navbarExpandSm} > &`]: {
          paddingRight: "0",
          paddingLeft: "0",
        },
      },
      "selectors": {
        [`${navbarExpandMd} > &`]: {
          paddingRight: "0",
          paddingLeft: "0",
        },
      },
      "selectors": {
        [`${navbarExpandLg} > &`]: {
          paddingRight: "0",
          paddingLeft: "0",
        },
      },
      "selectors": {
        [`${navbarExpandXl} > &`]: {
          msFlexWrap: "nowrap",
          flexWrap: "nowrap",
        },
      },
      "selectors": {
        [`${navbarExpandSm} > &`]: {
          msFlexWrap: "nowrap",
          flexWrap: "nowrap",
        },
      },
      "selectors": {
        [`${navbarExpandMd} > &`]: {
          msFlexWrap: "nowrap",
          flexWrap: "nowrap",
        },
      },
      "selectors": {
        [`${navbarExpandLg} > &`]: {
          msFlexWrap: "nowrap",
          flexWrap: "nowrap",
        },
      },
    },
  },
  "selectors": {
    [`${navbarExpand} > &`]: {
      paddingRight: "0",
      paddingLeft: "0",
      msFlexWrap: "nowrap",
      flexWrap: "nowrap",
    },
    [`${navbar} &`]: {
      display: "-ms-flexbox",
      display: "flex",
      msFlexWrap: "wrap",
      flexWrap: "wrap",
      msFlexAlign: "center",
      alignItems: "center",
      msFlexPack: "justify",
      justifyContent: "space-between",
    },
  },
});

export const containerXl = style({
  width: "100%",
  paddingRight: "15px",
  paddingLeft: "15px",
  marginRight: "auto",
  marginLeft: "auto",
  "@media": {
    "(min-width: 1200px)": {
      maxWidth: "1140px",
      "selectors": {
        [`${navbarExpandXl} > &`]: {
          paddingRight: "0",
          paddingLeft: "0",
        },
      },
      "selectors": {
        [`${navbarExpandSm} > &`]: {
          paddingRight: "0",
          paddingLeft: "0",
        },
      },
      "selectors": {
        [`${navbarExpandMd} > &`]: {
          paddingRight: "0",
          paddingLeft: "0",
        },
      },
      "selectors": {
        [`${navbarExpandLg} > &`]: {
          paddingRight: "0",
          paddingLeft: "0",
        },
      },
      "selectors": {
        [`${navbarExpandXl} > &`]: {
          msFlexWrap: "nowrap",
          flexWrap: "nowrap",
        },
      },
      "selectors": {
        [`${navbarExpandSm} > &`]: {
          msFlexWrap: "nowrap",
          flexWrap: "nowrap",
        },
      },
      "selectors": {
        [`${navbarExpandMd} > &`]: {
          msFlexWrap: "nowrap",
          flexWrap: "nowrap",
        },
      },
      "selectors": {
        [`${navbarExpandLg} > &`]: {
          msFlexWrap: "nowrap",
          flexWrap: "nowrap",
        },
      },
    },
  },
  "selectors": {
    [`${navbarExpand} > &`]: {
      paddingRight: "0",
      paddingLeft: "0",
      msFlexWrap: "nowrap",
      flexWrap: "nowrap",
    },
    [`${navbar} &`]: {
      display: "-ms-flexbox",
      display: "flex",
      msFlexWrap: "wrap",
      flexWrap: "wrap",
      msFlexAlign: "center",
      alignItems: "center",
      msFlexPack: "justify",
      justifyContent: "space-between",
    },
  },
});

export const customCheckbox = style({
  "selectors": {
    [` ${customControlInput}:checked ~ ${customControlLabel}::after`]: {
      backgroundImage: "url(data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26l2.974 2.99L8 2.193z'/%3e%3c/svg%3e)",
    },
    [` ${customControlInput}:disabled:checked ~ ${customControlLabel}::before`]: {
      backgroundColor: "rgba(0,123,255,0.5)",
    },
    [` ${customControlInput}:disabled:indeterminate ~ ${customControlLabel}::before`]: {
      backgroundColor: "rgba(0,123,255,0.5)",
    },
    [` ${customControlInput}:indeterminate ~ ${customControlLabel}::after`]: {
      backgroundImage: "url(data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3e%3cpath stroke='%23fff' d='M0 2h4'/%3e%3c/svg%3e)",
    },
    [` ${customControlInput}:indeterminate ~ ${customControlLabel}::before`]: {
      borderColor: "007bff",
      backgroundColor: "007bff",
    },
    [` ${customControlLabel}::before`]: {
      borderRadius: "0.25rem",
    },
  },
});

export const customControl = style({
  position: "relative",
  zIndex: "1",
  display: "block",
  minHeight: "1.5rem",
  paddingLeft: "1.5rem",
  WebkitPrintColorAdjust: "exact",
  colorAdjust: "exact",
  "@media": {
    "(min-width: 576px)": {
      "selectors": {
        [`${formInline} &`]: {
          msFlexAlign: "center",
          alignItems: "center",
          msFlexPack: "center",
          justifyContent: "center",
        },
      },
    },
  },
});

export const customFile = style({
  position: "relative",
  display: "inline-block",
  width: "100%",
  height: "calc(1.5em+0.75rem+2px)",
  marginBottom: "0",
  "selectors": {
    [`${inputGroup} > ${customFile} + &`]: {
      marginLeft: "-1px",
    },
    [`${inputGroup} > ${customSelect} + &`]: {
      marginLeft: "-1px",
    },
    [`${inputGroup} > ${formControlPlaintext} + &`]: {
      marginLeft: "-1px",
    },
    [`${inputGroup} > ${formControl} + &`]: {
      marginLeft: "-1px",
    },
    [`${inputGroup} > &`]: {
      position: "relative",
      msFlex: "1 1 auto",
      flex: "1 1 auto",
      width: "1%",
      minWidth: "0",
      marginBottom: "0",
      display: "-ms-flexbox",
      display: "flex",
      msFlexAlign: "center",
      alignItems: "center",
    },
  },
});

export const customFileInput = style({
  position: "relative",
  zIndex: "2",
  width: "100%",
  height: "calc(1.5em+0.75rem+2px)",
  margin: "0",
  overflow: "hidden",
  opacity: "0",
  "selectors": {
    [` ~ ${customFileLabel}[data-browse]::after`]: {
      content: "attr(data-browse)",
    },
    [`:lang(en) ~ ${customFileLabel}::after`]: {
      content: "Browse",
    },
  },
});

export const customRadio = style({
  "selectors": {
    [` ${customControlInput}:checked ~ ${customControlLabel}::after`]: {
      backgroundImage: "url(data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e)",
    },
    [` ${customControlInput}:disabled:checked ~ ${customControlLabel}::before`]: {
      backgroundColor: "rgba(0,123,255,0.5)",
    },
    [` ${customControlLabel}::before`]: {
      borderRadius: "50%",
    },
  },
});

export const customRange = style({
  width: "100%",
  height: "1.4rem",
  padding: "0",
  backgroundColor: "transparent",
  WebkitAppearance: "none",
  MozAppearance: "none",
  appearance: "none",
  "::-moz-range-thumb": {
    width: "1rem",
    height: "1rem",
    backgroundColor: "007bff",
    border: "0",
    borderRadius: "1rem",
    MozTransition: "background-color 0.15s ease-in-out , border-color 0.15s ease-in-out , box-shadow 0.15s ease-in-out",
    transition: "background-color 0.15s ease-in-out , border-color 0.15s ease-in-out , box-shadow 0.15s ease-in-out",
    MozAppearance: "none",
    appearance: "none",
    MozTransition: "none",
    transition: "none",
  },
  "::-moz-range-track": {
    width: "100%",
    height: "0.5rem",
    color: "transparent",
    cursor: "pointer",
    backgroundColor: "dee2e6",
    borderColor: "transparent",
    borderRadius: "1rem",
  },
  "::-ms-fill-lower": {
    backgroundColor: "dee2e6",
    borderRadius: "1rem",
  },
  "::-ms-fill-upper": {
    marginRight: "15px",
    backgroundColor: "dee2e6",
    borderRadius: "1rem",
  },
  "::-ms-thumb": {
    width: "1rem",
    height: "1rem",
    marginTop: "0",
    marginRight: "0.2rem",
    marginLeft: "0.2rem",
    backgroundColor: "007bff",
    border: "0",
    borderRadius: "1rem",
    msTransition: "background-color 0.15s ease-in-out , border-color 0.15s ease-in-out , box-shadow 0.15s ease-in-out",
    transition: "background-color 0.15s ease-in-out , border-color 0.15s ease-in-out , box-shadow 0.15s ease-in-out",
    appearance: "none",
    msTransition: "none",
    transition: "none",
  },
  "::-ms-track": {
    width: "100%",
    height: "0.5rem",
    color: "transparent",
    cursor: "pointer",
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderWidth: "0.5rem",
  },
  "::-webkit-slider-runnable-track": {
    width: "100%",
    height: "0.5rem",
    color: "transparent",
    cursor: "pointer",
    backgroundColor: "dee2e6",
    borderColor: "transparent",
    borderRadius: "1rem",
  },
  "::-webkit-slider-thumb": {
    width: "1rem",
    height: "1rem",
    marginTop: "-0.25rem",
    backgroundColor: "007bff",
    border: "0",
    borderRadius: "1rem",
    WebkitTransition: "background-color 0.15s ease-in-out , border-color 0.15s ease-in-out , box-shadow 0.15s ease-in-out",
    transition: "background-color 0.15s ease-in-out , border-color 0.15s ease-in-out , box-shadow 0.15s ease-in-out",
    WebkitAppearance: "none",
    appearance: "none",
    WebkitTransition: "none",
    transition: "none",
  },
  ":focus": {
    outline: "0",
  },
  "selectors": {
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

export const customSwitch = style({
  paddingLeft: "2.25rem",
  "@media": {
    "(prefers-reduced-motion: reduce)": {
      "selectors": {
        [` ${customControlLabel}::after`]: {
          transition: "none",
        },
      },
    },
  },
  "selectors": {
    [` ${customControlInput}:checked ~ ${customControlLabel}::after`]: {
      backgroundColor: "fff",
      WebkitTransform: "translateX(0.75rem)",
      transform: "translateX(0.75rem)",
    },
    [` ${customControlInput}:disabled:checked ~ ${customControlLabel}::before`]: {
      backgroundColor: "rgba(0,123,255,0.5)",
    },
    [` ${customControlLabel}::after`]: {
      top: "calc(0.25rem+2px)",
      left: "calc(-2.25rem+2px)",
      width: "calc(1rem-4px)",
      height: "calc(1rem-4px)",
      backgroundColor: "adb5bd",
      borderRadius: "0.5rem",
      transition: "background-color 0.15s ease-in-out , border-color 0.15s ease-in-out , box-shadow 0.15s ease-in-out , -webkit-transform 0.15s ease-in-out",
      transition: "transform 0.15s ease-in-out , background-color 0.15s ease-in-out , border-color 0.15s ease-in-out , box-shadow 0.15s ease-in-out",
      transition: "transform 0.15s ease-in-out , background-color 0.15s ease-in-out , border-color 0.15s ease-in-out , box-shadow 0.15s ease-in-out , -webkit-transform 0.15s ease-in-out",
    },
    [` ${customControlLabel}::before`]: {
      left: "-2.25rem",
      width: "1.75rem",
      pointerEvents: "all",
      borderRadius: "0.5rem",
    },
  },
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
      display: "-ms-flexbox",
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
      display: "-ms-inline-flexbox",
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
      display: "-ms-flexbox",
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
      display: "-ms-inline-flexbox",
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

export const dPrintBlock = style({
  "@media": {
    "print": {
      display: "block",
    },
  },
});

export const dPrintFlex = style({
  "@media": {
    "print": {
      display: "-ms-flexbox",
      display: "flex",
    },
  },
});

export const dPrintInline = style({
  "@media": {
    "print": {
      display: "inline",
    },
  },
});

export const dPrintInlineBlock = style({
  "@media": {
    "print": {
      display: "inline-block",
    },
  },
});

export const dPrintInlineFlex = style({
  "@media": {
    "print": {
      display: "-ms-inline-flexbox",
      display: "inline-flex",
    },
  },
});

export const dPrintNone = style({
  "@media": {
    "print": {
      display: "none",
    },
  },
});

export const dPrintTable = style({
  "@media": {
    "print": {
      display: "table",
    },
  },
});

export const dPrintTableCell = style({
  "@media": {
    "print": {
      display: "table-cell",
    },
  },
});

export const dPrintTableRow = style({
  "@media": {
    "print": {
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
      display: "-ms-flexbox",
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
      display: "-ms-inline-flexbox",
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
      display: "-ms-flexbox",
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
      display: "-ms-inline-flexbox",
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

export const dropdownItem = style({
  display: "block",
  width: "100%",
  padding: "0.25rem 1.5rem",
  clear: "both",
  fontWeight: "400",
  color: "212529",
  textAlign: "inherit",
  whiteSpace: "nowrap",
  backgroundColor: "transparent",
  border: "0",
  ":active": {
    color: "fff",
    textDecoration: "none",
    backgroundColor: "007bff",
  },
  ":disabled": {
    color: "adb5bd",
    pointerEvents: "none",
    backgroundColor: "transparent",
  },
  ":focus": {
    color: "16181b",
    textDecoration: "none",
    backgroundColor: "e9ecef",
  },
  ":hover": {
    color: "16181b",
    textDecoration: "none",
    backgroundColor: "e9ecef",
  },
  "selectors": {
    [`${active}`]: {
      color: "fff",
      textDecoration: "none",
      backgroundColor: "007bff",
    },
    [`${disabled}`]: {
      color: "adb5bd",
      pointerEvents: "none",
      backgroundColor: "transparent",
    },
  },
});

export const dropdownMenu = style({
  position: "absolute",
  top: "100%",
  left: "0",
  zIndex: "1000",
  display: "none",
  float: "left",
  minWidth: "10rem",
  padding: "0.5rem 0",
  margin: "0.125rem 0 0",
  fontSize: "1rem",
  color: "212529",
  textAlign: "left",
  listStyle: "none",
  backgroundColor: "fff",
  backgroundClip: "padding-box",
  border: "1px solid rgba(0,0,0,0.15)",
  borderRadius: "0.25rem",
  "@media": {
    "(min-width: 576px)": {
      "selectors": {
        [`${navbarExpandXl} ${navbarNav} &`]: {
          position: "absolute",
        },
      },
      "selectors": {
        [`${navbarExpandSm} ${navbarNav} &`]: {
          position: "absolute",
        },
      },
      "selectors": {
        [`${navbarExpandMd} ${navbarNav} &`]: {
          position: "absolute",
        },
      },
      "selectors": {
        [`${navbarExpandLg} ${navbarNav} &`]: {
          position: "absolute",
        },
      },
    },
  },
  "selectors": {
    [`${dropleft} &`]: {
      top: "0",
      right: "100%",
      left: "auto",
      marginTop: "0",
      marginRight: "0.125rem",
    },
    [`${dropright} &`]: {
      top: "0",
      right: "auto",
      left: "100%",
      marginTop: "0",
      marginLeft: "0.125rem",
    },
    [`${dropup} &`]: {
      top: "auto",
      bottom: "100%",
      marginTop: "0",
      marginBottom: "0.125rem",
    },
    [`${navTabs} &`]: {
      marginTop: "-1px",
      borderTopLeftRadius: "0",
      borderTopRightRadius: "0",
    },
    [`${navbarExpand} ${navbarNav} &`]: {
      position: "absolute",
    },
    [`${navbarNav} &`]: {
      position: "static",
      float: "none",
    },
    [`${show}`]: {
      display: "block",
    },
    "&[x-placement^='bottom']": {
      right: "auto",
      bottom: "auto",
    },
    "&[x-placement^='left']": {
      right: "auto",
      bottom: "auto",
    },
    "&[x-placement^='right']": {
      right: "auto",
      bottom: "auto",
    },
    "&[x-placement^='top']": {
      right: "auto",
      bottom: "auto",
    },
  },
});

export const dropdownMenuLgLeft = style({
  "@media": {
    "(min-width: 992px)": {
      right: "auto",
      left: "0",
    },
  },
});

export const dropdownMenuLgRight = style({
  "@media": {
    "(min-width: 992px)": {
      right: "0",
      left: "auto",
    },
  },
});

export const dropdownMenuMdLeft = style({
  "@media": {
    "(min-width: 768px)": {
      right: "auto",
      left: "0",
    },
  },
});

export const dropdownMenuMdRight = style({
  "@media": {
    "(min-width: 768px)": {
      right: "0",
      left: "auto",
    },
  },
});

export const dropdownMenuSmLeft = style({
  "@media": {
    "(min-width: 576px)": {
      right: "auto",
      left: "0",
    },
  },
});

export const dropdownMenuSmRight = style({
  "@media": {
    "(min-width: 576px)": {
      right: "0",
      left: "auto",
    },
  },
});

export const dropdownMenuXlLeft = style({
  "@media": {
    "(min-width: 1200px)": {
      right: "auto",
      left: "0",
    },
  },
});

export const dropdownMenuXlRight = style({
  "@media": {
    "(min-width: 1200px)": {
      right: "0",
      left: "auto",
    },
  },
});

export const dropdownToggle = style({
  whiteSpace: "nowrap",
  "::after": {
    display: "inline-block",
    marginLeft: "0.255em",
    verticalAlign: "0.255em",
    content: "",
    borderTop: "0.3em solid",
    borderRight: "0.3em solid transparent",
    borderBottom: "0",
    borderLeft: "0.3em solid transparent",
  },
  "selectors": {
    [`${show} > ${btnDanger}&`]: {
      color: "fff",
      backgroundColor: "bd2130",
      borderColor: "b21f2d",
    },
    [`${show} > ${btnDark}&`]: {
      color: "fff",
      backgroundColor: "1d2124",
      borderColor: "171a1d",
    },
    [`${show} > ${btnInfo}&`]: {
      color: "fff",
      backgroundColor: "117a8b",
      borderColor: "10707f",
    },
    [`${show} > ${btnLight}&`]: {
      color: "212529",
      backgroundColor: "dae0e5",
      borderColor: "d3d9df",
    },
    [`${show} > ${btnOutlineDanger}&`]: {
      color: "fff",
      backgroundColor: "dc3545",
      borderColor: "dc3545",
    },
    [`${show} > ${btnOutlineDark}&`]: {
      color: "fff",
      backgroundColor: "343a40",
      borderColor: "343a40",
    },
    [`${show} > ${btnOutlineInfo}&`]: {
      color: "fff",
      backgroundColor: "17a2b8",
      borderColor: "17a2b8",
    },
    [`${show} > ${btnOutlineLight}&`]: {
      color: "212529",
      backgroundColor: "f8f9fa",
      borderColor: "f8f9fa",
    },
    [`${show} > ${btnOutlinePrimary}&`]: {
      color: "fff",
      backgroundColor: "007bff",
      borderColor: "007bff",
    },
    [`${show} > ${btnOutlineSecondary}&`]: {
      color: "fff",
      backgroundColor: "6c757d",
      borderColor: "6c757d",
    },
    [`${show} > ${btnOutlineSuccess}&`]: {
      color: "fff",
      backgroundColor: "28a745",
      borderColor: "28a745",
    },
    [`${show} > ${btnOutlineWarning}&`]: {
      color: "212529",
      backgroundColor: "ffc107",
      borderColor: "ffc107",
    },
    [`${show} > ${btnPrimary}&`]: {
      color: "fff",
      backgroundColor: "0062cc",
      borderColor: "005cbf",
    },
    [`${show} > ${btnSecondary}&`]: {
      color: "fff",
      backgroundColor: "545b62",
      borderColor: "4e555b",
    },
    [`${show} > ${btnSuccess}&`]: {
      color: "fff",
      backgroundColor: "1e7e34",
      borderColor: "1c7430",
    },
    [`${show} > ${btnWarning}&`]: {
      color: "212529",
      backgroundColor: "d39e00",
      borderColor: "c69500",
    },
    "&:empty::after": {
      marginLeft: "0",
    },
  },
});

export const dropdownToggleSplit = style({
  paddingRight: "0.5625rem",
  paddingLeft: "0.5625rem",
  "::after": {
    marginLeft: "0",
  },
  "selectors": {
    [`${btnGroupLg} > ${btn} + &`]: {
      paddingRight: "0.75rem",
      paddingLeft: "0.75rem",
    },
    [`${btnGroupSm} > ${btn} + &`]: {
      paddingRight: "0.375rem",
      paddingLeft: "0.375rem",
    },
    [`${btnLg} + &`]: {
      paddingRight: "0.75rem",
      paddingLeft: "0.75rem",
    },
    [`${btnSm} + &`]: {
      paddingRight: "0.375rem",
      paddingLeft: "0.375rem",
    },
  },
});

export const embedResponsive = style({
  position: "relative",
  display: "block",
  width: "100%",
  padding: "0",
  overflow: "hidden",
  "::before": {
    display: "block",
    content: "",
  },
  "selectors": {
    "& embed": {
      position: "absolute",
      top: "0",
      bottom: "0",
      left: "0",
      width: "100%",
      height: "100%",
      border: "0",
    },
    "& iframe": {
      position: "absolute",
      top: "0",
      bottom: "0",
      left: "0",
      width: "100%",
      height: "100%",
      border: "0",
    },
    "& object": {
      position: "absolute",
      top: "0",
      bottom: "0",
      left: "0",
      width: "100%",
      height: "100%",
      border: "0",
    },
    "& video": {
      position: "absolute",
      top: "0",
      bottom: "0",
      left: "0",
      width: "100%",
      height: "100%",
      border: "0",
    },
  },
});

export const embedResponsiveItem = style({
  "selectors": {
    [`${embedResponsive} &`]: {
      position: "absolute",
      top: "0",
      bottom: "0",
      left: "0",
      width: "100%",
      height: "100%",
      border: "0",
    },
  },
});

export const fade = style({
  transition: "opacity 0.15s linear",
  "@media": {
    "(prefers-reduced-motion: reduce)": {
      transition: "none",
    },
  },
  "selectors": {
    "&:not": {
      opacity: "0",
    },
  },
});

export const flexLgColumn = style({
  "@media": {
    "(min-width: 992px)": {
      msFlexDirection: "column",
      flexDirection: "column",
    },
  },
});

export const flexLgColumnReverse = style({
  "@media": {
    "(min-width: 992px)": {
      msFlexDirection: "column-reverse",
      flexDirection: "column-reverse",
    },
  },
});

export const flexLgFill = style({
  "@media": {
    "(min-width: 992px)": {
      msFlex: "1 1 auto",
      flex: "1 1 auto",
    },
  },
});

export const flexLgGrow0 = style({
  "@media": {
    "(min-width: 992px)": {
      msFlexPositive: "0",
      flexGrow: "0",
    },
  },
});

export const flexLgGrow1 = style({
  "@media": {
    "(min-width: 992px)": {
      msFlexPositive: "1",
      flexGrow: "1",
    },
  },
});

export const flexLgNowrap = style({
  "@media": {
    "(min-width: 992px)": {
      msFlexWrap: "nowrap",
      flexWrap: "nowrap",
    },
  },
});

export const flexLgRow = style({
  "@media": {
    "(min-width: 992px)": {
      msFlexDirection: "row",
      flexDirection: "row",
    },
  },
});

export const flexLgRowReverse = style({
  "@media": {
    "(min-width: 992px)": {
      msFlexDirection: "row-reverse",
      flexDirection: "row-reverse",
    },
  },
});

export const flexLgShrink0 = style({
  "@media": {
    "(min-width: 992px)": {
      msFlexNegative: "0",
      flexShrink: "0",
    },
  },
});

export const flexLgShrink1 = style({
  "@media": {
    "(min-width: 992px)": {
      msFlexNegative: "1",
      flexShrink: "1",
    },
  },
});

export const flexLgWrap = style({
  "@media": {
    "(min-width: 992px)": {
      msFlexWrap: "wrap",
      flexWrap: "wrap",
    },
  },
});

export const flexLgWrapReverse = style({
  "@media": {
    "(min-width: 992px)": {
      msFlexWrap: "wrap-reverse",
      flexWrap: "wrap-reverse",
    },
  },
});

export const flexMdColumn = style({
  "@media": {
    "(min-width: 768px)": {
      msFlexDirection: "column",
      flexDirection: "column",
    },
  },
});

export const flexMdColumnReverse = style({
  "@media": {
    "(min-width: 768px)": {
      msFlexDirection: "column-reverse",
      flexDirection: "column-reverse",
    },
  },
});

export const flexMdFill = style({
  "@media": {
    "(min-width: 768px)": {
      msFlex: "1 1 auto",
      flex: "1 1 auto",
    },
  },
});

export const flexMdGrow0 = style({
  "@media": {
    "(min-width: 768px)": {
      msFlexPositive: "0",
      flexGrow: "0",
    },
  },
});

export const flexMdGrow1 = style({
  "@media": {
    "(min-width: 768px)": {
      msFlexPositive: "1",
      flexGrow: "1",
    },
  },
});

export const flexMdNowrap = style({
  "@media": {
    "(min-width: 768px)": {
      msFlexWrap: "nowrap",
      flexWrap: "nowrap",
    },
  },
});

export const flexMdRow = style({
  "@media": {
    "(min-width: 768px)": {
      msFlexDirection: "row",
      flexDirection: "row",
    },
  },
});

export const flexMdRowReverse = style({
  "@media": {
    "(min-width: 768px)": {
      msFlexDirection: "row-reverse",
      flexDirection: "row-reverse",
    },
  },
});

export const flexMdShrink0 = style({
  "@media": {
    "(min-width: 768px)": {
      msFlexNegative: "0",
      flexShrink: "0",
    },
  },
});

export const flexMdShrink1 = style({
  "@media": {
    "(min-width: 768px)": {
      msFlexNegative: "1",
      flexShrink: "1",
    },
  },
});

export const flexMdWrap = style({
  "@media": {
    "(min-width: 768px)": {
      msFlexWrap: "wrap",
      flexWrap: "wrap",
    },
  },
});

export const flexMdWrapReverse = style({
  "@media": {
    "(min-width: 768px)": {
      msFlexWrap: "wrap-reverse",
      flexWrap: "wrap-reverse",
    },
  },
});

export const flexSmColumn = style({
  "@media": {
    "(min-width: 576px)": {
      msFlexDirection: "column",
      flexDirection: "column",
    },
  },
});

export const flexSmColumnReverse = style({
  "@media": {
    "(min-width: 576px)": {
      msFlexDirection: "column-reverse",
      flexDirection: "column-reverse",
    },
  },
});

export const flexSmFill = style({
  "@media": {
    "(min-width: 576px)": {
      msFlex: "1 1 auto",
      flex: "1 1 auto",
    },
  },
});

export const flexSmGrow0 = style({
  "@media": {
    "(min-width: 576px)": {
      msFlexPositive: "0",
      flexGrow: "0",
    },
  },
});

export const flexSmGrow1 = style({
  "@media": {
    "(min-width: 576px)": {
      msFlexPositive: "1",
      flexGrow: "1",
    },
  },
});

export const flexSmNowrap = style({
  "@media": {
    "(min-width: 576px)": {
      msFlexWrap: "nowrap",
      flexWrap: "nowrap",
    },
  },
});

export const flexSmRow = style({
  "@media": {
    "(min-width: 576px)": {
      msFlexDirection: "row",
      flexDirection: "row",
    },
  },
});

export const flexSmRowReverse = style({
  "@media": {
    "(min-width: 576px)": {
      msFlexDirection: "row-reverse",
      flexDirection: "row-reverse",
    },
  },
});

export const flexSmShrink0 = style({
  "@media": {
    "(min-width: 576px)": {
      msFlexNegative: "0",
      flexShrink: "0",
    },
  },
});

export const flexSmShrink1 = style({
  "@media": {
    "(min-width: 576px)": {
      msFlexNegative: "1",
      flexShrink: "1",
    },
  },
});

export const flexSmWrap = style({
  "@media": {
    "(min-width: 576px)": {
      msFlexWrap: "wrap",
      flexWrap: "wrap",
    },
  },
});

export const flexSmWrapReverse = style({
  "@media": {
    "(min-width: 576px)": {
      msFlexWrap: "wrap-reverse",
      flexWrap: "wrap-reverse",
    },
  },
});

export const flexXlColumn = style({
  "@media": {
    "(min-width: 1200px)": {
      msFlexDirection: "column",
      flexDirection: "column",
    },
  },
});

export const flexXlColumnReverse = style({
  "@media": {
    "(min-width: 1200px)": {
      msFlexDirection: "column-reverse",
      flexDirection: "column-reverse",
    },
  },
});

export const flexXlFill = style({
  "@media": {
    "(min-width: 1200px)": {
      msFlex: "1 1 auto",
      flex: "1 1 auto",
    },
  },
});

export const flexXlGrow0 = style({
  "@media": {
    "(min-width: 1200px)": {
      msFlexPositive: "0",
      flexGrow: "0",
    },
  },
});

export const flexXlGrow1 = style({
  "@media": {
    "(min-width: 1200px)": {
      msFlexPositive: "1",
      flexGrow: "1",
    },
  },
});

export const flexXlNowrap = style({
  "@media": {
    "(min-width: 1200px)": {
      msFlexWrap: "nowrap",
      flexWrap: "nowrap",
    },
  },
});

export const flexXlRow = style({
  "@media": {
    "(min-width: 1200px)": {
      msFlexDirection: "row",
      flexDirection: "row",
    },
  },
});

export const flexXlRowReverse = style({
  "@media": {
    "(min-width: 1200px)": {
      msFlexDirection: "row-reverse",
      flexDirection: "row-reverse",
    },
  },
});

export const flexXlShrink0 = style({
  "@media": {
    "(min-width: 1200px)": {
      msFlexNegative: "0",
      flexShrink: "0",
    },
  },
});

export const flexXlShrink1 = style({
  "@media": {
    "(min-width: 1200px)": {
      msFlexNegative: "1",
      flexShrink: "1",
    },
  },
});

export const flexXlWrap = style({
  "@media": {
    "(min-width: 1200px)": {
      msFlexWrap: "wrap",
      flexWrap: "wrap",
    },
  },
});

export const flexXlWrapReverse = style({
  "@media": {
    "(min-width: 1200px)": {
      msFlexWrap: "wrap-reverse",
      flexWrap: "wrap-reverse",
    },
  },
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

export const formCheck = style({
  position: "relative",
  display: "block",
  paddingLeft: "1.25rem",
  "@media": {
    "(min-width: 576px)": {
      "selectors": {
        [`${formInline} &`]: {
          display: "-ms-flexbox",
          display: "flex",
          msFlexAlign: "center",
          alignItems: "center",
          msFlexPack: "center",
          justifyContent: "center",
          width: "auto",
          paddingLeft: "0",
        },
      },
    },
  },
  "selectors": {
    [`${formInline} &`]: {
      width: "100%",
    },
  },
});

export const formCheckInput = style({
  position: "absolute",
  marginTop: "0.3rem",
  marginLeft: "-1.25rem",
  "@media": {
    "(min-width: 576px)": {
      "selectors": {
        [`${formInline} &`]: {
          position: "relative",
          msFlexNegative: "0",
          flexShrink: "0",
          marginTop: "0",
          marginRight: "0.25rem",
          marginLeft: "0",
        },
      },
    },
  },
  "selectors": {
    [`${formCheckInline} &`]: {
      position: "static",
      marginTop: "0",
      marginRight: "0.3125rem",
      marginLeft: "0",
    },
  },
});

export const formCheckLabel = style({
  marginBottom: "0",
  "selectors": {
    [`${formCheckInput}${isInvalid} ~ &`]: {
      color: "dc3545",
    },
    [`${formCheckInput}${isValid} ~ &`]: {
      color: "28a745",
    },
    [`${formCheckInput}:disabled ~ &`]: {
      color: "6c757d",
    },
    [`${formCheckInput}[disabled] ~ &`]: {
      color: "6c757d",
    },
    [`${wasValidated} ${formCheckInput}:invalid ~ &`]: {
      color: "dc3545",
    },
    [`${wasValidated} ${formCheckInput}:valid ~ &`]: {
      color: "28a745",
    },
  },
});

export const formGroup = style({
  marginBottom: "1rem",
  "@media": {
    "(min-width: 576px)": {
      "selectors": {
        [`${formInline} &`]: {
          display: "-ms-flexbox",
          display: "flex",
          msFlex: "0 0 auto",
          flex: "0 0 auto",
          msFlexFlow: "row wrap",
          flexFlow: "row wrap",
          msFlexAlign: "center",
          alignItems: "center",
          marginBottom: "0",
        },
      },
    },
  },
});

export const invalidFeedback = style({
  display: "none",
  width: "100%",
  marginTop: "0.25rem",
  fontSize: "80%",
  color: "dc3545",
  "selectors": {
    [`${formCheckInput}${isInvalid} ~ &`]: {
      display: "block",
    },
    [`${isInvalid} ~ &`]: {
      display: "block",
    },
    [`${wasValidated} ${formCheckInput}:invalid ~ &`]: {
      display: "block",
    },
    [`${wasValidated} :invalid ~ &`]: {
      display: "block",
    },
  },
});

export const invalidTooltip = style({
  position: "absolute",
  top: "100%",
  left: "0",
  zIndex: "5",
  display: "none",
  maxWidth: "100%",
  padding: "0.25rem 0.5rem",
  marginTop: "0.1rem",
  fontSize: "0.875rem",
  lineHeight: "1.5",
  color: "fff",
  backgroundColor: "rgba(220,53,69,0.9)",
  borderRadius: "0.25rem",
  "selectors": {
    [`${formCheckInput}${isInvalid} ~ &`]: {
      display: "block",
    },
    [`${formRow} > ${col} > &`]: {
      left: "5px",
    },
    [`${formRow} > [class*='col-'] > &`]: {
      left: "5px",
    },
    [`${isInvalid} ~ &`]: {
      display: "block",
    },
    [`${wasValidated} ${formCheckInput}:invalid ~ &`]: {
      display: "block",
    },
    [`${wasValidated} :invalid ~ &`]: {
      display: "block",
    },
  },
});

export const jumbotron = style({
  padding: "2rem 1rem",
  marginBottom: "2rem",
  backgroundColor: "e9ecef",
  borderRadius: "0.3rem",
  "@media": {
    "(min-width: 576px)": {
      padding: "4rem 2rem",
    },
  },
});

export const justifyContentLgAround = style({
  "@media": {
    "(min-width: 992px)": {
      msFlexPack: "distribute",
      justifyContent: "space-around",
    },
  },
});

export const justifyContentLgBetween = style({
  "@media": {
    "(min-width: 992px)": {
      msFlexPack: "justify",
      justifyContent: "space-between",
    },
  },
});

export const justifyContentLgCenter = style({
  "@media": {
    "(min-width: 992px)": {
      msFlexPack: "center",
      justifyContent: "center",
    },
  },
});

export const justifyContentLgEnd = style({
  "@media": {
    "(min-width: 992px)": {
      msFlexPack: "end",
      justifyContent: "flex-end",
    },
  },
});

export const justifyContentLgStart = style({
  "@media": {
    "(min-width: 992px)": {
      msFlexPack: "start",
      justifyContent: "flex-start",
    },
  },
});

export const justifyContentMdAround = style({
  "@media": {
    "(min-width: 768px)": {
      msFlexPack: "distribute",
      justifyContent: "space-around",
    },
  },
});

export const justifyContentMdBetween = style({
  "@media": {
    "(min-width: 768px)": {
      msFlexPack: "justify",
      justifyContent: "space-between",
    },
  },
});

export const justifyContentMdCenter = style({
  "@media": {
    "(min-width: 768px)": {
      msFlexPack: "center",
      justifyContent: "center",
    },
  },
});

export const justifyContentMdEnd = style({
  "@media": {
    "(min-width: 768px)": {
      msFlexPack: "end",
      justifyContent: "flex-end",
    },
  },
});

export const justifyContentMdStart = style({
  "@media": {
    "(min-width: 768px)": {
      msFlexPack: "start",
      justifyContent: "flex-start",
    },
  },
});

export const justifyContentSmAround = style({
  "@media": {
    "(min-width: 576px)": {
      msFlexPack: "distribute",
      justifyContent: "space-around",
    },
  },
});

export const justifyContentSmBetween = style({
  "@media": {
    "(min-width: 576px)": {
      msFlexPack: "justify",
      justifyContent: "space-between",
    },
  },
});

export const justifyContentSmCenter = style({
  "@media": {
    "(min-width: 576px)": {
      msFlexPack: "center",
      justifyContent: "center",
    },
  },
});

export const justifyContentSmEnd = style({
  "@media": {
    "(min-width: 576px)": {
      msFlexPack: "end",
      justifyContent: "flex-end",
    },
  },
});

export const justifyContentSmStart = style({
  "@media": {
    "(min-width: 576px)": {
      msFlexPack: "start",
      justifyContent: "flex-start",
    },
  },
});

export const justifyContentXlAround = style({
  "@media": {
    "(min-width: 1200px)": {
      msFlexPack: "distribute",
      justifyContent: "space-around",
    },
  },
});

export const justifyContentXlBetween = style({
  "@media": {
    "(min-width: 1200px)": {
      msFlexPack: "justify",
      justifyContent: "space-between",
    },
  },
});

export const justifyContentXlCenter = style({
  "@media": {
    "(min-width: 1200px)": {
      msFlexPack: "center",
      justifyContent: "center",
    },
  },
});

export const justifyContentXlEnd = style({
  "@media": {
    "(min-width: 1200px)": {
      msFlexPack: "end",
      justifyContent: "flex-end",
    },
  },
});

export const justifyContentXlStart = style({
  "@media": {
    "(min-width: 1200px)": {
      msFlexPack: "start",
      justifyContent: "flex-start",
    },
  },
});

export const listGroupFlush = style({
  borderRadius: "0",
  "selectors": {
    [` > ${listGroupItem}:last-child`]: {
      borderBottomWidth: "0",
    },
  },
});

export const listGroupItemDanger = style({
  color: "721c24",
  backgroundColor: "f5c6cb",
  "selectors": {
    [`${listGroupItemAction}${active}`]: {
      color: "fff",
      backgroundColor: "721c24",
      borderColor: "721c24",
    },
    [`${listGroupItemAction}:focus`]: {
      color: "721c24",
      backgroundColor: "f1b0b7",
    },
    [`${listGroupItemAction}:hover`]: {
      color: "721c24",
      backgroundColor: "f1b0b7",
    },
  },
});

export const listGroupItemDark = style({
  color: "1b1e21",
  backgroundColor: "c6c8ca",
  "selectors": {
    [`${listGroupItemAction}${active}`]: {
      color: "fff",
      backgroundColor: "1b1e21",
      borderColor: "1b1e21",
    },
    [`${listGroupItemAction}:focus`]: {
      color: "1b1e21",
      backgroundColor: "b9bbbe",
    },
    [`${listGroupItemAction}:hover`]: {
      color: "1b1e21",
      backgroundColor: "b9bbbe",
    },
  },
});

export const listGroupItemInfo = style({
  color: "0c5460",
  backgroundColor: "bee5eb",
  "selectors": {
    [`${listGroupItemAction}${active}`]: {
      color: "fff",
      backgroundColor: "0c5460",
      borderColor: "0c5460",
    },
    [`${listGroupItemAction}:focus`]: {
      color: "0c5460",
      backgroundColor: "abdde5",
    },
    [`${listGroupItemAction}:hover`]: {
      color: "0c5460",
      backgroundColor: "abdde5",
    },
  },
});

export const listGroupItemLight = style({
  color: "818182",
  backgroundColor: "fdfdfe",
  "selectors": {
    [`${listGroupItemAction}${active}`]: {
      color: "fff",
      backgroundColor: "818182",
      borderColor: "818182",
    },
    [`${listGroupItemAction}:focus`]: {
      color: "818182",
      backgroundColor: "ececf6",
    },
    [`${listGroupItemAction}:hover`]: {
      color: "818182",
      backgroundColor: "ececf6",
    },
  },
});

export const listGroupItemPrimary = style({
  color: "004085",
  backgroundColor: "b8daff",
  "selectors": {
    [`${listGroupItemAction}${active}`]: {
      color: "fff",
      backgroundColor: "004085",
      borderColor: "004085",
    },
    [`${listGroupItemAction}:focus`]: {
      color: "004085",
      backgroundColor: "9fcdff",
    },
    [`${listGroupItemAction}:hover`]: {
      color: "004085",
      backgroundColor: "9fcdff",
    },
  },
});

export const listGroupItemSecondary = style({
  color: "383d41",
  backgroundColor: "d6d8db",
  "selectors": {
    [`${listGroupItemAction}${active}`]: {
      color: "fff",
      backgroundColor: "383d41",
      borderColor: "383d41",
    },
    [`${listGroupItemAction}:focus`]: {
      color: "383d41",
      backgroundColor: "c8cbcf",
    },
    [`${listGroupItemAction}:hover`]: {
      color: "383d41",
      backgroundColor: "c8cbcf",
    },
  },
});

export const listGroupItemSuccess = style({
  color: "155724",
  backgroundColor: "c3e6cb",
  "selectors": {
    [`${listGroupItemAction}${active}`]: {
      color: "fff",
      backgroundColor: "155724",
      borderColor: "155724",
    },
    [`${listGroupItemAction}:focus`]: {
      color: "155724",
      backgroundColor: "b1dfbb",
    },
    [`${listGroupItemAction}:hover`]: {
      color: "155724",
      backgroundColor: "b1dfbb",
    },
  },
});

export const listGroupItemWarning = style({
  color: "856404",
  backgroundColor: "ffeeba",
  "selectors": {
    [`${listGroupItemAction}${active}`]: {
      color: "fff",
      backgroundColor: "856404",
      borderColor: "856404",
    },
    [`${listGroupItemAction}:focus`]: {
      color: "856404",
      backgroundColor: "ffe8a1",
    },
    [`${listGroupItemAction}:hover`]: {
      color: "856404",
      backgroundColor: "ffe8a1",
    },
  },
});

export const listInlineItem = style({
  display: "inline-block",
  "selectors": {
    "&:not(:last-child)": {
      marginRight: "0.5rem",
    },
  },
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
  position: "fixed",
  top: "0",
  left: "0",
  zIndex: "1050",
  display: "none",
  width: "100%",
  height: "100%",
  overflow: "hidden",
  outline: "0",
  "selectors": {
    [`${modalOpen} &`]: {
      overflowX: "hidden",
      overflowY: "auto",
    },
  },
});

export const modalBackdrop = style({
  position: "fixed",
  top: "0",
  left: "0",
  zIndex: "1040",
  width: "100vw",
  height: "100vh",
  backgroundColor: "000",
  "selectors": {
    [`${fade}`]: {
      opacity: "0",
    },
    [`${show}`]: {
      opacity: "0.5",
    },
  },
});

export const modalBody = style({
  position: "relative",
  msFlex: "1 1 auto",
  flex: "1 1 auto",
  padding: "1rem",
  "selectors": {
    [`${modalDialogScrollable} &`]: {
      overflowY: "auto",
    },
  },
});

export const modalContent = style({
  position: "relative",
  display: "-ms-flexbox",
  display: "flex",
  msFlexDirection: "column",
  flexDirection: "column",
  width: "100%",
  pointerEvents: "auto",
  backgroundColor: "fff",
  backgroundClip: "padding-box",
  border: "1px solid rgba(0,0,0,0.2)",
  borderRadius: "0.3rem",
  outline: "0",
  "@media": {
    "(min-width: 576px)": {
      "selectors": {
        [`${modalDialogScrollable} &`]: {
          maxHeight: "calc(100vh-3.5rem)",
        },
      },
    },
  },
  "selectors": {
    [`${modalDialogCentered}${modalDialogScrollable} &`]: {
      maxHeight: "none",
    },
    [`${modalDialogScrollable} &`]: {
      maxHeight: "calc(100vh-1rem)",
      overflow: "hidden",
    },
  },
});

export const modalDialog = style({
  position: "relative",
  width: "auto",
  margin: "0.5rem",
  pointerEvents: "none",
  "@media": {
    "(prefers-reduced-motion: reduce)": {
      maxWidth: "500px",
      margin: "1.75rem auto",
      "selectors": {
        [`${modal}${fade} &`]: {
          transition: "none",
        },
      },
    },
  },
  "selectors": {
    [`${modal}${fade} &`]: {
      transition: "-webkit-transform 0.3s ease-out",
      transition: "transform 0.3s ease-out",
      transition: "transform 0.3s ease-out , -webkit-transform 0.3s ease-out",
      WebkitTransform: "translate(0,-50px)",
      transform: "translate(0,-50px)",
    },
    [`${modal}${modalStatic} &`]: {
      WebkitTransform: "scale(1.02)",
      transform: "scale(1.02)",
    },
    [`${modal}${show} &`]: {
      WebkitTransform: "none",
      transform: "none",
    },
  },
});

export const modalFooter = style({
  display: "-ms-flexbox",
  display: "flex",
  msFlexWrap: "wrap",
  flexWrap: "wrap",
  msFlexAlign: "center",
  alignItems: "center",
  msFlexPack: "end",
  justifyContent: "flex-end",
  padding: "0.75rem",
  borderTop: "1px solid dee2e6",
  borderBottomRightRadius: "calc(0.3rem-1px)",
  borderBottomLeftRadius: "calc(0.3rem-1px)",
  "selectors": {
    "& > *": {
      margin: "0.25rem",
    },
    [`${modalDialogScrollable} &`]: {
      msFlexNegative: "0",
      flexShrink: "0",
    },
  },
});

export const modalLg = style({
  "@media": {
    "(min-width: 992px)": {
      maxWidth: "800px",
    },
  },
});

export const modalSm = style({
  "@media": {
    "(min-width: 576px)": {
      maxWidth: "300px",
    },
  },
});

export const modalXl = style({
  "@media": {
    "(min-width: 992px)": {
      maxWidth: "800px",
      maxWidth: "1140px",
    },
  },
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

export const mxLg0 = style({
  "@media": {
    "(min-width: 992px)": {
      marginRight: "0",
      marginLeft: "0",
    },
  },
});

export const mxLg1 = style({
  "@media": {
    "(min-width: 992px)": {
      marginRight: "0.25rem",
      marginLeft: "0.25rem",
    },
  },
});

export const mxLg2 = style({
  "@media": {
    "(min-width: 992px)": {
      marginRight: "0.5rem",
      marginLeft: "0.5rem",
    },
  },
});

export const mxLg3 = style({
  "@media": {
    "(min-width: 992px)": {
      marginRight: "1rem",
      marginLeft: "1rem",
    },
  },
});

export const mxLg4 = style({
  "@media": {
    "(min-width: 992px)": {
      marginRight: "1.5rem",
      marginLeft: "1.5rem",
    },
  },
});

export const mxLg5 = style({
  "@media": {
    "(min-width: 992px)": {
      marginRight: "3rem",
      marginLeft: "3rem",
    },
  },
});

export const mxLgAuto = style({
  "@media": {
    "(min-width: 992px)": {
      marginRight: "auto",
      marginLeft: "auto",
    },
  },
});

export const mxLgN1 = style({
  "@media": {
    "(min-width: 992px)": {
      marginRight: "-0.25rem",
      marginLeft: "-0.25rem",
    },
  },
});

export const mxLgN2 = style({
  "@media": {
    "(min-width: 992px)": {
      marginRight: "-0.5rem",
      marginLeft: "-0.5rem",
    },
  },
});

export const mxLgN3 = style({
  "@media": {
    "(min-width: 992px)": {
      marginRight: "-1rem",
      marginLeft: "-1rem",
    },
  },
});

export const mxLgN4 = style({
  "@media": {
    "(min-width: 992px)": {
      marginRight: "-1.5rem",
      marginLeft: "-1.5rem",
    },
  },
});

export const mxLgN5 = style({
  "@media": {
    "(min-width: 992px)": {
      marginRight: "-3rem",
      marginLeft: "-3rem",
    },
  },
});

export const mxMd0 = style({
  "@media": {
    "(min-width: 768px)": {
      marginRight: "0",
      marginLeft: "0",
    },
  },
});

export const mxMd1 = style({
  "@media": {
    "(min-width: 768px)": {
      marginRight: "0.25rem",
      marginLeft: "0.25rem",
    },
  },
});

export const mxMd2 = style({
  "@media": {
    "(min-width: 768px)": {
      marginRight: "0.5rem",
      marginLeft: "0.5rem",
    },
  },
});

export const mxMd3 = style({
  "@media": {
    "(min-width: 768px)": {
      marginRight: "1rem",
      marginLeft: "1rem",
    },
  },
});

export const mxMd4 = style({
  "@media": {
    "(min-width: 768px)": {
      marginRight: "1.5rem",
      marginLeft: "1.5rem",
    },
  },
});

export const mxMd5 = style({
  "@media": {
    "(min-width: 768px)": {
      marginRight: "3rem",
      marginLeft: "3rem",
    },
  },
});

export const mxMdAuto = style({
  "@media": {
    "(min-width: 768px)": {
      marginRight: "auto",
      marginLeft: "auto",
    },
  },
});

export const mxMdN1 = style({
  "@media": {
    "(min-width: 768px)": {
      marginRight: "-0.25rem",
      marginLeft: "-0.25rem",
    },
  },
});

export const mxMdN2 = style({
  "@media": {
    "(min-width: 768px)": {
      marginRight: "-0.5rem",
      marginLeft: "-0.5rem",
    },
  },
});

export const mxMdN3 = style({
  "@media": {
    "(min-width: 768px)": {
      marginRight: "-1rem",
      marginLeft: "-1rem",
    },
  },
});

export const mxMdN4 = style({
  "@media": {
    "(min-width: 768px)": {
      marginRight: "-1.5rem",
      marginLeft: "-1.5rem",
    },
  },
});

export const mxMdN5 = style({
  "@media": {
    "(min-width: 768px)": {
      marginRight: "-3rem",
      marginLeft: "-3rem",
    },
  },
});

export const mxSm0 = style({
  "@media": {
    "(min-width: 576px)": {
      marginRight: "0",
      marginLeft: "0",
    },
  },
});

export const mxSm1 = style({
  "@media": {
    "(min-width: 576px)": {
      marginRight: "0.25rem",
      marginLeft: "0.25rem",
    },
  },
});

export const mxSm2 = style({
  "@media": {
    "(min-width: 576px)": {
      marginRight: "0.5rem",
      marginLeft: "0.5rem",
    },
  },
});

export const mxSm3 = style({
  "@media": {
    "(min-width: 576px)": {
      marginRight: "1rem",
      marginLeft: "1rem",
    },
  },
});

export const mxSm4 = style({
  "@media": {
    "(min-width: 576px)": {
      marginRight: "1.5rem",
      marginLeft: "1.5rem",
    },
  },
});

export const mxSm5 = style({
  "@media": {
    "(min-width: 576px)": {
      marginRight: "3rem",
      marginLeft: "3rem",
    },
  },
});

export const mxSmAuto = style({
  "@media": {
    "(min-width: 576px)": {
      marginRight: "auto",
      marginLeft: "auto",
    },
  },
});

export const mxSmN1 = style({
  "@media": {
    "(min-width: 576px)": {
      marginRight: "-0.25rem",
      marginLeft: "-0.25rem",
    },
  },
});

export const mxSmN2 = style({
  "@media": {
    "(min-width: 576px)": {
      marginRight: "-0.5rem",
      marginLeft: "-0.5rem",
    },
  },
});

export const mxSmN3 = style({
  "@media": {
    "(min-width: 576px)": {
      marginRight: "-1rem",
      marginLeft: "-1rem",
    },
  },
});

export const mxSmN4 = style({
  "@media": {
    "(min-width: 576px)": {
      marginRight: "-1.5rem",
      marginLeft: "-1.5rem",
    },
  },
});

export const mxSmN5 = style({
  "@media": {
    "(min-width: 576px)": {
      marginRight: "-3rem",
      marginLeft: "-3rem",
    },
  },
});

export const mxXl0 = style({
  "@media": {
    "(min-width: 1200px)": {
      marginRight: "0",
      marginLeft: "0",
    },
  },
});

export const mxXl1 = style({
  "@media": {
    "(min-width: 1200px)": {
      marginRight: "0.25rem",
      marginLeft: "0.25rem",
    },
  },
});

export const mxXl2 = style({
  "@media": {
    "(min-width: 1200px)": {
      marginRight: "0.5rem",
      marginLeft: "0.5rem",
    },
  },
});

export const mxXl3 = style({
  "@media": {
    "(min-width: 1200px)": {
      marginRight: "1rem",
      marginLeft: "1rem",
    },
  },
});

export const mxXl4 = style({
  "@media": {
    "(min-width: 1200px)": {
      marginRight: "1.5rem",
      marginLeft: "1.5rem",
    },
  },
});

export const mxXl5 = style({
  "@media": {
    "(min-width: 1200px)": {
      marginRight: "3rem",
      marginLeft: "3rem",
    },
  },
});

export const mxXlAuto = style({
  "@media": {
    "(min-width: 1200px)": {
      marginRight: "auto",
      marginLeft: "auto",
    },
  },
});

export const mxXlN1 = style({
  "@media": {
    "(min-width: 1200px)": {
      marginRight: "-0.25rem",
      marginLeft: "-0.25rem",
    },
  },
});

export const mxXlN2 = style({
  "@media": {
    "(min-width: 1200px)": {
      marginRight: "-0.5rem",
      marginLeft: "-0.5rem",
    },
  },
});

export const mxXlN3 = style({
  "@media": {
    "(min-width: 1200px)": {
      marginRight: "-1rem",
      marginLeft: "-1rem",
    },
  },
});

export const mxXlN4 = style({
  "@media": {
    "(min-width: 1200px)": {
      marginRight: "-1.5rem",
      marginLeft: "-1.5rem",
    },
  },
});

export const mxXlN5 = style({
  "@media": {
    "(min-width: 1200px)": {
      marginRight: "-3rem",
      marginLeft: "-3rem",
    },
  },
});

export const myLg0 = style({
  "@media": {
    "(min-width: 992px)": {
      marginTop: "0",
      marginBottom: "0",
    },
  },
});

export const myLg1 = style({
  "@media": {
    "(min-width: 992px)": {
      marginTop: "0.25rem",
      marginBottom: "0.25rem",
    },
  },
});

export const myLg2 = style({
  "@media": {
    "(min-width: 992px)": {
      marginTop: "0.5rem",
      marginBottom: "0.5rem",
    },
  },
});

export const myLg3 = style({
  "@media": {
    "(min-width: 992px)": {
      marginTop: "1rem",
      marginBottom: "1rem",
    },
  },
});

export const myLg4 = style({
  "@media": {
    "(min-width: 992px)": {
      marginTop: "1.5rem",
      marginBottom: "1.5rem",
    },
  },
});

export const myLg5 = style({
  "@media": {
    "(min-width: 992px)": {
      marginTop: "3rem",
      marginBottom: "3rem",
    },
  },
});

export const myLgAuto = style({
  "@media": {
    "(min-width: 992px)": {
      marginTop: "auto",
      marginBottom: "auto",
    },
  },
});

export const myLgN1 = style({
  "@media": {
    "(min-width: 992px)": {
      marginTop: "-0.25rem",
      marginBottom: "-0.25rem",
    },
  },
});

export const myLgN2 = style({
  "@media": {
    "(min-width: 992px)": {
      marginTop: "-0.5rem",
      marginBottom: "-0.5rem",
    },
  },
});

export const myLgN3 = style({
  "@media": {
    "(min-width: 992px)": {
      marginTop: "-1rem",
      marginBottom: "-1rem",
    },
  },
});

export const myLgN4 = style({
  "@media": {
    "(min-width: 992px)": {
      marginTop: "-1.5rem",
      marginBottom: "-1.5rem",
    },
  },
});

export const myLgN5 = style({
  "@media": {
    "(min-width: 992px)": {
      marginTop: "-3rem",
      marginBottom: "-3rem",
    },
  },
});

export const myMd0 = style({
  "@media": {
    "(min-width: 768px)": {
      marginTop: "0",
      marginBottom: "0",
    },
  },
});

export const myMd1 = style({
  "@media": {
    "(min-width: 768px)": {
      marginTop: "0.25rem",
      marginBottom: "0.25rem",
    },
  },
});

export const myMd2 = style({
  "@media": {
    "(min-width: 768px)": {
      marginTop: "0.5rem",
      marginBottom: "0.5rem",
    },
  },
});

export const myMd3 = style({
  "@media": {
    "(min-width: 768px)": {
      marginTop: "1rem",
      marginBottom: "1rem",
    },
  },
});

export const myMd4 = style({
  "@media": {
    "(min-width: 768px)": {
      marginTop: "1.5rem",
      marginBottom: "1.5rem",
    },
  },
});

export const myMd5 = style({
  "@media": {
    "(min-width: 768px)": {
      marginTop: "3rem",
      marginBottom: "3rem",
    },
  },
});

export const myMdAuto = style({
  "@media": {
    "(min-width: 768px)": {
      marginTop: "auto",
      marginBottom: "auto",
    },
  },
});

export const myMdN1 = style({
  "@media": {
    "(min-width: 768px)": {
      marginTop: "-0.25rem",
      marginBottom: "-0.25rem",
    },
  },
});

export const myMdN2 = style({
  "@media": {
    "(min-width: 768px)": {
      marginTop: "-0.5rem",
      marginBottom: "-0.5rem",
    },
  },
});

export const myMdN3 = style({
  "@media": {
    "(min-width: 768px)": {
      marginTop: "-1rem",
      marginBottom: "-1rem",
    },
  },
});

export const myMdN4 = style({
  "@media": {
    "(min-width: 768px)": {
      marginTop: "-1.5rem",
      marginBottom: "-1.5rem",
    },
  },
});

export const myMdN5 = style({
  "@media": {
    "(min-width: 768px)": {
      marginTop: "-3rem",
      marginBottom: "-3rem",
    },
  },
});

export const mySm0 = style({
  "@media": {
    "(min-width: 576px)": {
      marginTop: "0",
      marginBottom: "0",
    },
  },
});

export const mySm1 = style({
  "@media": {
    "(min-width: 576px)": {
      marginTop: "0.25rem",
      marginBottom: "0.25rem",
    },
  },
});

export const mySm2 = style({
  "@media": {
    "(min-width: 576px)": {
      marginTop: "0.5rem",
      marginBottom: "0.5rem",
    },
  },
});

export const mySm3 = style({
  "@media": {
    "(min-width: 576px)": {
      marginTop: "1rem",
      marginBottom: "1rem",
    },
  },
});

export const mySm4 = style({
  "@media": {
    "(min-width: 576px)": {
      marginTop: "1.5rem",
      marginBottom: "1.5rem",
    },
  },
});

export const mySm5 = style({
  "@media": {
    "(min-width: 576px)": {
      marginTop: "3rem",
      marginBottom: "3rem",
    },
  },
});

export const mySmAuto = style({
  "@media": {
    "(min-width: 576px)": {
      marginTop: "auto",
      marginBottom: "auto",
    },
  },
});

export const mySmN1 = style({
  "@media": {
    "(min-width: 576px)": {
      marginTop: "-0.25rem",
      marginBottom: "-0.25rem",
    },
  },
});

export const mySmN2 = style({
  "@media": {
    "(min-width: 576px)": {
      marginTop: "-0.5rem",
      marginBottom: "-0.5rem",
    },
  },
});

export const mySmN3 = style({
  "@media": {
    "(min-width: 576px)": {
      marginTop: "-1rem",
      marginBottom: "-1rem",
    },
  },
});

export const mySmN4 = style({
  "@media": {
    "(min-width: 576px)": {
      marginTop: "-1.5rem",
      marginBottom: "-1.5rem",
    },
  },
});

export const mySmN5 = style({
  "@media": {
    "(min-width: 576px)": {
      marginTop: "-3rem",
      marginBottom: "-3rem",
    },
  },
});

export const myXl0 = style({
  "@media": {
    "(min-width: 1200px)": {
      marginTop: "0",
      marginBottom: "0",
    },
  },
});

export const myXl1 = style({
  "@media": {
    "(min-width: 1200px)": {
      marginTop: "0.25rem",
      marginBottom: "0.25rem",
    },
  },
});

export const myXl2 = style({
  "@media": {
    "(min-width: 1200px)": {
      marginTop: "0.5rem",
      marginBottom: "0.5rem",
    },
  },
});

export const myXl3 = style({
  "@media": {
    "(min-width: 1200px)": {
      marginTop: "1rem",
      marginBottom: "1rem",
    },
  },
});

export const myXl4 = style({
  "@media": {
    "(min-width: 1200px)": {
      marginTop: "1.5rem",
      marginBottom: "1.5rem",
    },
  },
});

export const myXl5 = style({
  "@media": {
    "(min-width: 1200px)": {
      marginTop: "3rem",
      marginBottom: "3rem",
    },
  },
});

export const myXlAuto = style({
  "@media": {
    "(min-width: 1200px)": {
      marginTop: "auto",
      marginBottom: "auto",
    },
  },
});

export const myXlN1 = style({
  "@media": {
    "(min-width: 1200px)": {
      marginTop: "-0.25rem",
      marginBottom: "-0.25rem",
    },
  },
});

export const myXlN2 = style({
  "@media": {
    "(min-width: 1200px)": {
      marginTop: "-0.5rem",
      marginBottom: "-0.5rem",
    },
  },
});

export const myXlN3 = style({
  "@media": {
    "(min-width: 1200px)": {
      marginTop: "-1rem",
      marginBottom: "-1rem",
    },
  },
});

export const myXlN4 = style({
  "@media": {
    "(min-width: 1200px)": {
      marginTop: "-1.5rem",
      marginBottom: "-1.5rem",
    },
  },
});

export const myXlN5 = style({
  "@media": {
    "(min-width: 1200px)": {
      marginTop: "-3rem",
      marginBottom: "-3rem",
    },
  },
});

export const navItem = style({
  "selectors": {
    [`${navFill} &`]: {
      msFlex: "1 1 auto",
      flex: "1 1 auto",
      textAlign: "center",
    },
    [`${navJustified} &`]: {
      msFlexPreferredSize: "0",
      flexBasis: "0",
      msFlexPositive: "1",
      flexGrow: "1",
      textAlign: "center",
    },
  },
});

export const navbarBrand = style({
  display: "inline-block",
  paddingTop: "0.3125rem",
  paddingBottom: "0.3125rem",
  marginRight: "1rem",
  fontSize: "1.25rem",
  lineHeight: "inherit",
  whiteSpace: "nowrap",
  ":focus": {
    textDecoration: "none",
  },
  ":hover": {
    textDecoration: "none",
  },
  "selectors": {
    [`${navbarDark} &`]: {
      color: "fff",
    },
    [`${navbarLight} &`]: {
      color: "rgba(0,0,0,0.9)",
    },
  },
});

export const navbarCollapse = style({
  msFlexPreferredSize: "100%",
  flexBasis: "100%",
  msFlexPositive: "1",
  flexGrow: "1",
  msFlexAlign: "center",
  alignItems: "center",
  "@media": {
    "(min-width: 576px)": {
      "selectors": {
        [`${navbarExpandXl} &`]: {
          display: "-ms-flexbox",
          display: "flex",
          msFlexPreferredSize: "auto",
          flexBasis: "auto",
        },
      },
      "selectors": {
        [`${navbarExpandSm} &`]: {
          display: "-ms-flexbox",
          display: "flex",
          msFlexPreferredSize: "auto",
          flexBasis: "auto",
        },
      },
      "selectors": {
        [`${navbarExpandMd} &`]: {
          display: "-ms-flexbox",
          display: "flex",
          msFlexPreferredSize: "auto",
          flexBasis: "auto",
        },
      },
      "selectors": {
        [`${navbarExpandLg} &`]: {
          display: "-ms-flexbox",
          display: "flex",
          msFlexPreferredSize: "auto",
          flexBasis: "auto",
        },
      },
    },
  },
  "selectors": {
    [`${navbarExpand} &`]: {
      display: "-ms-flexbox",
      display: "flex",
      msFlexPreferredSize: "auto",
      flexBasis: "auto",
    },
  },
});

export const navbarNavScroll = style({
  maxHeight: "75vh",
  overflowY: "auto",
  "@media": {
    "(min-width: 576px)": {
      "selectors": {
        [`${navbarExpandXl} &`]: {
          overflow: "visible",
        },
      },
      "selectors": {
        [`${navbarExpandSm} &`]: {
          overflow: "visible",
        },
      },
      "selectors": {
        [`${navbarExpandMd} &`]: {
          overflow: "visible",
        },
      },
      "selectors": {
        [`${navbarExpandLg} &`]: {
          overflow: "visible",
        },
      },
    },
  },
  "selectors": {
    [`${navbarExpand} &`]: {
      overflow: "visible",
    },
  },
});

export const navbarToggler = style({
  padding: "0.25rem 0.75rem",
  fontSize: "1.25rem",
  lineHeight: "1",
  backgroundColor: "transparent",
  border: "1px solid transparent",
  borderRadius: "0.25rem",
  ":focus": {
    textDecoration: "none",
  },
  ":hover": {
    textDecoration: "none",
  },
  "@media": {
    "(min-width: 576px)": {
      "selectors": {
        [`${navbarExpandXl} &`]: {
          display: "none",
        },
      },
      "selectors": {
        [`${navbarExpandSm} &`]: {
          display: "none",
        },
      },
      "selectors": {
        [`${navbarExpandMd} &`]: {
          display: "none",
        },
      },
      "selectors": {
        [`${navbarExpandLg} &`]: {
          display: "none",
        },
      },
    },
  },
  "selectors": {
    [`${navbarDark} &`]: {
      color: "rgba(255,255,255,0.5)",
      borderColor: "rgba(255,255,255,0.1)",
    },
    [`${navbarExpand} &`]: {
      display: "none",
    },
    [`${navbarLight} &`]: {
      color: "rgba(0,0,0,0.5)",
      borderColor: "rgba(0,0,0,0.1)",
    },
  },
});

export const navbarTogglerIcon = style({
  display: "inline-block",
  width: "1.5em",
  height: "1.5em",
  verticalAlign: "middle",
  content: "",
  background: "50% / 100% 100% no-repeat",
  "selectors": {
    [`${navbarDark} &`]: {
      backgroundImage: "url(data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.5%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e)",
    },
    [`${navbarLight} &`]: {
      backgroundImage: "url(data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 0, 0, 0.5%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e)",
    },
  },
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

export const pageLink = style({
  position: "relative",
  display: "block",
  padding: "0.5rem 0.75rem",
  marginLeft: "-1px",
  lineHeight: "1.25",
  color: "007bff",
  backgroundColor: "fff",
  border: "1px solid dee2e6",
  ":focus": {
    zIndex: "3",
    outline: "0",
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,0.25)",
  },
  ":hover": {
    zIndex: "2",
    color: "0056b3",
    textDecoration: "none",
    backgroundColor: "e9ecef",
    borderColor: "dee2e6",
  },
  "selectors": {
    [`${pageItem}${active} &`]: {
      zIndex: "3",
      color: "fff",
      backgroundColor: "007bff",
      borderColor: "007bff",
    },
    [`${pageItem}${disabled} &`]: {
      color: "6c757d",
      pointerEvents: "none",
      cursor: "auto",
      backgroundColor: "fff",
      borderColor: "dee2e6",
    },
    [`${pageItem}:first-child &`]: {
      marginLeft: "0",
      borderTopLeftRadius: "0.25rem",
      borderBottomLeftRadius: "0.25rem",
    },
    [`${pageItem}:last-child &`]: {
      borderTopRightRadius: "0.25rem",
      borderBottomRightRadius: "0.25rem",
    },
    [`${paginationLg} ${pageItem}:first-child &`]: {
      borderTopLeftRadius: "0.3rem",
      borderBottomLeftRadius: "0.3rem",
    },
    [`${paginationLg} ${pageItem}:last-child &`]: {
      borderTopRightRadius: "0.3rem",
      borderBottomRightRadius: "0.3rem",
    },
    [`${paginationLg} &`]: {
      padding: "0.75rem 1.5rem",
      fontSize: "1.25rem",
      lineHeight: "1.5",
    },
    [`${paginationSm} ${pageItem}:first-child &`]: {
      borderTopLeftRadius: "0.2rem",
      borderBottomLeftRadius: "0.2rem",
    },
    [`${paginationSm} ${pageItem}:last-child &`]: {
      borderTopRightRadius: "0.2rem",
      borderBottomRightRadius: "0.2rem",
    },
    [`${paginationSm} &`]: {
      padding: "0.25rem 0.5rem",
      fontSize: "0.875rem",
      lineHeight: "1.5",
    },
  },
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

export const progressBar = style({
  display: "-ms-flexbox",
  display: "flex",
  msFlexDirection: "column",
  flexDirection: "column",
  msFlexPack: "center",
  justifyContent: "center",
  overflow: "hidden",
  color: "fff",
  textAlign: "center",
  whiteSpace: "nowrap",
  backgroundColor: "007bff",
  transition: "width 0.6s ease",
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

export const pxLg0 = style({
  "@media": {
    "(min-width: 992px)": {
      paddingRight: "0",
      paddingLeft: "0",
    },
  },
});

export const pxLg1 = style({
  "@media": {
    "(min-width: 992px)": {
      paddingRight: "0.25rem",
      paddingLeft: "0.25rem",
    },
  },
});

export const pxLg2 = style({
  "@media": {
    "(min-width: 992px)": {
      paddingRight: "0.5rem",
      paddingLeft: "0.5rem",
    },
  },
});

export const pxLg3 = style({
  "@media": {
    "(min-width: 992px)": {
      paddingRight: "1rem",
      paddingLeft: "1rem",
    },
  },
});

export const pxLg4 = style({
  "@media": {
    "(min-width: 992px)": {
      paddingRight: "1.5rem",
      paddingLeft: "1.5rem",
    },
  },
});

export const pxLg5 = style({
  "@media": {
    "(min-width: 992px)": {
      paddingRight: "3rem",
      paddingLeft: "3rem",
    },
  },
});

export const pxMd0 = style({
  "@media": {
    "(min-width: 768px)": {
      paddingRight: "0",
      paddingLeft: "0",
    },
  },
});

export const pxMd1 = style({
  "@media": {
    "(min-width: 768px)": {
      paddingRight: "0.25rem",
      paddingLeft: "0.25rem",
    },
  },
});

export const pxMd2 = style({
  "@media": {
    "(min-width: 768px)": {
      paddingRight: "0.5rem",
      paddingLeft: "0.5rem",
    },
  },
});

export const pxMd3 = style({
  "@media": {
    "(min-width: 768px)": {
      paddingRight: "1rem",
      paddingLeft: "1rem",
    },
  },
});

export const pxMd4 = style({
  "@media": {
    "(min-width: 768px)": {
      paddingRight: "1.5rem",
      paddingLeft: "1.5rem",
    },
  },
});

export const pxMd5 = style({
  "@media": {
    "(min-width: 768px)": {
      paddingRight: "3rem",
      paddingLeft: "3rem",
    },
  },
});

export const pxSm0 = style({
  "@media": {
    "(min-width: 576px)": {
      paddingRight: "0",
      paddingLeft: "0",
    },
  },
});

export const pxSm1 = style({
  "@media": {
    "(min-width: 576px)": {
      paddingRight: "0.25rem",
      paddingLeft: "0.25rem",
    },
  },
});

export const pxSm2 = style({
  "@media": {
    "(min-width: 576px)": {
      paddingRight: "0.5rem",
      paddingLeft: "0.5rem",
    },
  },
});

export const pxSm3 = style({
  "@media": {
    "(min-width: 576px)": {
      paddingRight: "1rem",
      paddingLeft: "1rem",
    },
  },
});

export const pxSm4 = style({
  "@media": {
    "(min-width: 576px)": {
      paddingRight: "1.5rem",
      paddingLeft: "1.5rem",
    },
  },
});

export const pxSm5 = style({
  "@media": {
    "(min-width: 576px)": {
      paddingRight: "3rem",
      paddingLeft: "3rem",
    },
  },
});

export const pxXl0 = style({
  "@media": {
    "(min-width: 1200px)": {
      paddingRight: "0",
      paddingLeft: "0",
    },
  },
});

export const pxXl1 = style({
  "@media": {
    "(min-width: 1200px)": {
      paddingRight: "0.25rem",
      paddingLeft: "0.25rem",
    },
  },
});

export const pxXl2 = style({
  "@media": {
    "(min-width: 1200px)": {
      paddingRight: "0.5rem",
      paddingLeft: "0.5rem",
    },
  },
});

export const pxXl3 = style({
  "@media": {
    "(min-width: 1200px)": {
      paddingRight: "1rem",
      paddingLeft: "1rem",
    },
  },
});

export const pxXl4 = style({
  "@media": {
    "(min-width: 1200px)": {
      paddingRight: "1.5rem",
      paddingLeft: "1.5rem",
    },
  },
});

export const pxXl5 = style({
  "@media": {
    "(min-width: 1200px)": {
      paddingRight: "3rem",
      paddingLeft: "3rem",
    },
  },
});

export const pyLg0 = style({
  "@media": {
    "(min-width: 992px)": {
      paddingTop: "0",
      paddingBottom: "0",
    },
  },
});

export const pyLg1 = style({
  "@media": {
    "(min-width: 992px)": {
      paddingTop: "0.25rem",
      paddingBottom: "0.25rem",
    },
  },
});

export const pyLg2 = style({
  "@media": {
    "(min-width: 992px)": {
      paddingTop: "0.5rem",
      paddingBottom: "0.5rem",
    },
  },
});

export const pyLg3 = style({
  "@media": {
    "(min-width: 992px)": {
      paddingTop: "1rem",
      paddingBottom: "1rem",
    },
  },
});

export const pyLg4 = style({
  "@media": {
    "(min-width: 992px)": {
      paddingTop: "1.5rem",
      paddingBottom: "1.5rem",
    },
  },
});

export const pyLg5 = style({
  "@media": {
    "(min-width: 992px)": {
      paddingTop: "3rem",
      paddingBottom: "3rem",
    },
  },
});

export const pyMd0 = style({
  "@media": {
    "(min-width: 768px)": {
      paddingTop: "0",
      paddingBottom: "0",
    },
  },
});

export const pyMd1 = style({
  "@media": {
    "(min-width: 768px)": {
      paddingTop: "0.25rem",
      paddingBottom: "0.25rem",
    },
  },
});

export const pyMd2 = style({
  "@media": {
    "(min-width: 768px)": {
      paddingTop: "0.5rem",
      paddingBottom: "0.5rem",
    },
  },
});

export const pyMd3 = style({
  "@media": {
    "(min-width: 768px)": {
      paddingTop: "1rem",
      paddingBottom: "1rem",
    },
  },
});

export const pyMd4 = style({
  "@media": {
    "(min-width: 768px)": {
      paddingTop: "1.5rem",
      paddingBottom: "1.5rem",
    },
  },
});

export const pyMd5 = style({
  "@media": {
    "(min-width: 768px)": {
      paddingTop: "3rem",
      paddingBottom: "3rem",
    },
  },
});

export const pySm0 = style({
  "@media": {
    "(min-width: 576px)": {
      paddingTop: "0",
      paddingBottom: "0",
    },
  },
});

export const pySm1 = style({
  "@media": {
    "(min-width: 576px)": {
      paddingTop: "0.25rem",
      paddingBottom: "0.25rem",
    },
  },
});

export const pySm2 = style({
  "@media": {
    "(min-width: 576px)": {
      paddingTop: "0.5rem",
      paddingBottom: "0.5rem",
    },
  },
});

export const pySm3 = style({
  "@media": {
    "(min-width: 576px)": {
      paddingTop: "1rem",
      paddingBottom: "1rem",
    },
  },
});

export const pySm4 = style({
  "@media": {
    "(min-width: 576px)": {
      paddingTop: "1.5rem",
      paddingBottom: "1.5rem",
    },
  },
});

export const pySm5 = style({
  "@media": {
    "(min-width: 576px)": {
      paddingTop: "3rem",
      paddingBottom: "3rem",
    },
  },
});

export const pyXl0 = style({
  "@media": {
    "(min-width: 1200px)": {
      paddingTop: "0",
      paddingBottom: "0",
    },
  },
});

export const pyXl1 = style({
  "@media": {
    "(min-width: 1200px)": {
      paddingTop: "0.25rem",
      paddingBottom: "0.25rem",
    },
  },
});

export const pyXl2 = style({
  "@media": {
    "(min-width: 1200px)": {
      paddingTop: "0.5rem",
      paddingBottom: "0.5rem",
    },
  },
});

export const pyXl3 = style({
  "@media": {
    "(min-width: 1200px)": {
      paddingTop: "1rem",
      paddingBottom: "1rem",
    },
  },
});

export const pyXl4 = style({
  "@media": {
    "(min-width: 1200px)": {
      paddingTop: "1.5rem",
      paddingBottom: "1.5rem",
    },
  },
});

export const pyXl5 = style({
  "@media": {
    "(min-width: 1200px)": {
      paddingTop: "3rem",
      paddingBottom: "3rem",
    },
  },
});

export const rowCols1 = style({
  "selectors": {
    "& > *": {
      msFlex: "0 0 100%",
      flex: "0 0 100%",
      maxWidth: "100%",
    },
  },
});

export const rowCols2 = style({
  "selectors": {
    "& > *": {
      msFlex: "0 0 50%",
      flex: "0 0 50%",
      maxWidth: "50%",
    },
  },
});

export const rowCols3 = style({
  "selectors": {
    "& > *": {
      msFlex: "0 0 33.333333%",
      flex: "0 0 33.333333%",
      maxWidth: "33.333333%",
    },
  },
});

export const rowCols4 = style({
  "selectors": {
    "& > *": {
      msFlex: "0 0 25%",
      flex: "0 0 25%",
      maxWidth: "25%",
    },
  },
});

export const rowCols5 = style({
  "selectors": {
    "& > *": {
      msFlex: "0 0 20%",
      flex: "0 0 20%",
      maxWidth: "20%",
    },
  },
});

export const rowCols6 = style({
  "selectors": {
    "& > *": {
      msFlex: "0 0 16.666667%",
      flex: "0 0 16.666667%",
      maxWidth: "16.666667%",
    },
  },
});

export const rowColsLg1 = style({
  "@media": {
    "(min-width: 992px)": {
      "selectors": {
        "& > *": {
          msFlex: "0 0 100%",
          flex: "0 0 100%",
          maxWidth: "100%",
        },
      },
    },
  },
});

export const rowColsLg2 = style({
  "@media": {
    "(min-width: 992px)": {
      "selectors": {
        "& > *": {
          msFlex: "0 0 50%",
          flex: "0 0 50%",
          maxWidth: "50%",
        },
      },
    },
  },
});

export const rowColsLg3 = style({
  "@media": {
    "(min-width: 992px)": {
      "selectors": {
        "& > *": {
          msFlex: "0 0 33.333333%",
          flex: "0 0 33.333333%",
          maxWidth: "33.333333%",
        },
      },
    },
  },
});

export const rowColsLg4 = style({
  "@media": {
    "(min-width: 992px)": {
      "selectors": {
        "& > *": {
          msFlex: "0 0 25%",
          flex: "0 0 25%",
          maxWidth: "25%",
        },
      },
    },
  },
});

export const rowColsLg5 = style({
  "@media": {
    "(min-width: 992px)": {
      "selectors": {
        "& > *": {
          msFlex: "0 0 20%",
          flex: "0 0 20%",
          maxWidth: "20%",
        },
      },
    },
  },
});

export const rowColsLg6 = style({
  "@media": {
    "(min-width: 992px)": {
      "selectors": {
        "& > *": {
          msFlex: "0 0 16.666667%",
          flex: "0 0 16.666667%",
          maxWidth: "16.666667%",
        },
      },
    },
  },
});

export const rowColsMd1 = style({
  "@media": {
    "(min-width: 768px)": {
      "selectors": {
        "& > *": {
          msFlex: "0 0 100%",
          flex: "0 0 100%",
          maxWidth: "100%",
        },
      },
    },
  },
});

export const rowColsMd2 = style({
  "@media": {
    "(min-width: 768px)": {
      "selectors": {
        "& > *": {
          msFlex: "0 0 50%",
          flex: "0 0 50%",
          maxWidth: "50%",
        },
      },
    },
  },
});

export const rowColsMd3 = style({
  "@media": {
    "(min-width: 768px)": {
      "selectors": {
        "& > *": {
          msFlex: "0 0 33.333333%",
          flex: "0 0 33.333333%",
          maxWidth: "33.333333%",
        },
      },
    },
  },
});

export const rowColsMd4 = style({
  "@media": {
    "(min-width: 768px)": {
      "selectors": {
        "& > *": {
          msFlex: "0 0 25%",
          flex: "0 0 25%",
          maxWidth: "25%",
        },
      },
    },
  },
});

export const rowColsMd5 = style({
  "@media": {
    "(min-width: 768px)": {
      "selectors": {
        "& > *": {
          msFlex: "0 0 20%",
          flex: "0 0 20%",
          maxWidth: "20%",
        },
      },
    },
  },
});

export const rowColsMd6 = style({
  "@media": {
    "(min-width: 768px)": {
      "selectors": {
        "& > *": {
          msFlex: "0 0 16.666667%",
          flex: "0 0 16.666667%",
          maxWidth: "16.666667%",
        },
      },
    },
  },
});

export const rowColsSm1 = style({
  "@media": {
    "(min-width: 576px)": {
      "selectors": {
        "& > *": {
          msFlex: "0 0 100%",
          flex: "0 0 100%",
          maxWidth: "100%",
        },
      },
    },
  },
});

export const rowColsSm2 = style({
  "@media": {
    "(min-width: 576px)": {
      "selectors": {
        "& > *": {
          msFlex: "0 0 50%",
          flex: "0 0 50%",
          maxWidth: "50%",
        },
      },
    },
  },
});

export const rowColsSm3 = style({
  "@media": {
    "(min-width: 576px)": {
      "selectors": {
        "& > *": {
          msFlex: "0 0 33.333333%",
          flex: "0 0 33.333333%",
          maxWidth: "33.333333%",
        },
      },
    },
  },
});

export const rowColsSm4 = style({
  "@media": {
    "(min-width: 576px)": {
      "selectors": {
        "& > *": {
          msFlex: "0 0 25%",
          flex: "0 0 25%",
          maxWidth: "25%",
        },
      },
    },
  },
});

export const rowColsSm5 = style({
  "@media": {
    "(min-width: 576px)": {
      "selectors": {
        "& > *": {
          msFlex: "0 0 20%",
          flex: "0 0 20%",
          maxWidth: "20%",
        },
      },
    },
  },
});

export const rowColsSm6 = style({
  "@media": {
    "(min-width: 576px)": {
      "selectors": {
        "& > *": {
          msFlex: "0 0 16.666667%",
          flex: "0 0 16.666667%",
          maxWidth: "16.666667%",
        },
      },
    },
  },
});

export const rowColsXl1 = style({
  "@media": {
    "(min-width: 1200px)": {
      "selectors": {
        "& > *": {
          msFlex: "0 0 100%",
          flex: "0 0 100%",
          maxWidth: "100%",
        },
      },
    },
  },
});

export const rowColsXl2 = style({
  "@media": {
    "(min-width: 1200px)": {
      "selectors": {
        "& > *": {
          msFlex: "0 0 50%",
          flex: "0 0 50%",
          maxWidth: "50%",
        },
      },
    },
  },
});

export const rowColsXl3 = style({
  "@media": {
    "(min-width: 1200px)": {
      "selectors": {
        "& > *": {
          msFlex: "0 0 33.333333%",
          flex: "0 0 33.333333%",
          maxWidth: "33.333333%",
        },
      },
    },
  },
});

export const rowColsXl4 = style({
  "@media": {
    "(min-width: 1200px)": {
      "selectors": {
        "& > *": {
          msFlex: "0 0 25%",
          flex: "0 0 25%",
          maxWidth: "25%",
        },
      },
    },
  },
});

export const rowColsXl5 = style({
  "@media": {
    "(min-width: 1200px)": {
      "selectors": {
        "& > *": {
          msFlex: "0 0 20%",
          flex: "0 0 20%",
          maxWidth: "20%",
        },
      },
    },
  },
});

export const rowColsXl6 = style({
  "@media": {
    "(min-width: 1200px)": {
      "selectors": {
        "& > *": {
          msFlex: "0 0 16.666667%",
          flex: "0 0 16.666667%",
          maxWidth: "16.666667%",
        },
      },
    },
  },
});

export const spinnerBorder = style({
  display: "inline-block",
  width: "2rem",
  height: "2rem",
  verticalAlign: "-0.125em",
  border: "0.25em solid currentColor",
  borderRightColor: "transparent",
  borderRadius: "50%",
  WebkitAnimation: "0.75s linear infinite spinner-border",
  animation: "0.75s linear infinite spinner-border",
  "@media": {
    "(prefers-reduced-motion: reduce)": {
      WebkitAnimationDuration: "1.5s",
      animationDuration: "1.5s",
    },
  },
});

export const spinnerGrow = style({
  display: "inline-block",
  width: "2rem",
  height: "2rem",
  verticalAlign: "-0.125em",
  backgroundColor: "currentColor",
  borderRadius: "50%",
  opacity: "0",
  WebkitAnimation: "0.75s linear infinite spinner-grow",
  animation: "0.75s linear infinite spinner-grow",
  "@media": {
    "(prefers-reduced-motion: reduce)": {
      WebkitAnimationDuration: "1.5s",
      animationDuration: "1.5s",
    },
  },
});

export const stickyTop = style({
  "@supports": {
    "(position:-webkit-sticky) or (position:sticky)": {
      position: "-webkit-sticky",
      position: "sticky",
      top: "0",
      zIndex: "1020",
    },
  },
});

export const tabPane = style({
  "selectors": {
    [`${tabContent} > &`]: {
      display: "none",
    },
  },
});

export const table = style({
  width: "100%",
  marginBottom: "1rem",
  color: "212529",
  "@media": {
    "print": {
      borderCollapse: "collapse",
      "selectors": {
        [` ${theadDark} th`]: {
          color: "inherit",
          borderColor: "dee2e6",
        },
        "& td": {
          backgroundColor: "fff",
        },
        "& th": {
          backgroundColor: "fff",
        },
      },
    },
  },
  "selectors": {
    [` ${theadDark} th`]: {
      color: "fff",
      backgroundColor: "343a40",
      borderColor: "454d55",
    },
    [` ${theadLight} th`]: {
      color: "495057",
      backgroundColor: "e9ecef",
      borderColor: "dee2e6",
    },
    "& tbody + tbody": {
      borderTop: "2px solid dee2e6",
    },
    "& td": {
      padding: "0.75rem",
      verticalAlign: "top",
      borderTop: "1px solid dee2e6",
    },
    "& th": {
      padding: "0.75rem",
      verticalAlign: "top",
      borderTop: "1px solid dee2e6",
    },
    "& thead th": {
      verticalAlign: "bottom",
      borderBottom: "2px solid dee2e6",
    },
  },
});

export const tableActive = style({
  backgroundColor: "rgba(0,0,0,0.075)",
  "selectors": {
    "& > td": {
      backgroundColor: "rgba(0,0,0,0.075)",
    },
    "& > th": {
      backgroundColor: "rgba(0,0,0,0.075)",
    },
  },
});

export const tableBordered = style({
  border: "1px solid dee2e6",
  "@media": {
    "(max-width: 575.98px)": {
      "selectors": {
        [`${tableResponsiveXl} > &`]: {
          border: "0",
        },
      },
      "selectors": {
        [`${tableResponsiveSm} > &`]: {
          border: "0",
        },
      },
      "selectors": {
        [`${tableResponsiveMd} > &`]: {
          border: "0",
        },
      },
      "selectors": {
        [`${tableResponsiveLg} > &`]: {
          border: "0",
        },
      },
      "selectors": {
        "& td": {
          border: "1px solid dee2e6",
        },
        "& th": {
          border: "1px solid dee2e6",
        },
      },
    },
  },
  "selectors": {
    "& td": {
      border: "1px solid dee2e6",
    },
    "& th": {
      border: "1px solid dee2e6",
    },
    "& thead td": {
      borderBottomWidth: "2px",
    },
    "& thead th": {
      borderBottomWidth: "2px",
    },
    [`${tableResponsive} > &`]: {
      border: "0",
    },
  },
});

export const tableBorderless = style({
  "selectors": {
    "& tbody + tbody": {
      border: "0",
    },
    "& td": {
      border: "0",
    },
    "& th": {
      border: "0",
    },
    "& thead th": {
      border: "0",
    },
  },
});

export const tableDanger = style({
  backgroundColor: "f5c6cb",
  "selectors": {
    "& > td": {
      backgroundColor: "f5c6cb",
    },
    "& > th": {
      backgroundColor: "f5c6cb",
    },
    "& tbody + tbody": {
      borderColor: "ed969e",
    },
    "& td": {
      borderColor: "ed969e",
    },
    "& th": {
      borderColor: "ed969e",
    },
    "& thead th": {
      borderColor: "ed969e",
    },
  },
});

export const tableDark = style({
  backgroundColor: "c6c8ca",
  color: "fff",
  backgroundColor: "343a40",
  "@media": {
    "print": {
      color: "inherit",
      "selectors": {
        "& tbody + tbody": {
          borderColor: "dee2e6",
        },
        "& td": {
          borderColor: "dee2e6",
        },
        "& th": {
          borderColor: "dee2e6",
        },
        "& thead th": {
          borderColor: "dee2e6",
        },
      },
    },
  },
  "selectors": {
    "& > td": {
      backgroundColor: "c6c8ca",
    },
    "& > th": {
      backgroundColor: "c6c8ca",
    },
    "& tbody + tbody": {
      borderColor: "95999c",
    },
    "& td": {
      borderColor: "95999c",
      borderColor: "454d55",
    },
    "& th": {
      borderColor: "95999c",
      borderColor: "454d55",
    },
    "& thead th": {
      borderColor: "95999c",
      borderColor: "454d55",
    },
    [`${tableBordered}`]: {
      border: "0",
    },
    [`${tableHover} tbody tr:hover`]: {
      color: "fff",
      backgroundColor: "rgba(255,255,255,0.075)",
    },
    [`${tableStriped} tbody tr:nth-of-type(odd)`]: {
      backgroundColor: "rgba(255,255,255,0.05)",
    },
  },
});

export const tableSm = style({
  "selectors": {
    "& td": {
      padding: "0.3rem",
    },
    "& th": {
      padding: "0.3rem",
    },
  },
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
  msFlexPreferredSize: "350px",
  flexBasis: "350px",
  maxWidth: "350px",
  fontSize: "0.875rem",
  backgroundColor: "rgba(255,255,255,0.85)",
  backgroundClip: "padding-box",
  border: "1px solid rgba(0,0,0,0.1)",
  boxShadow: "0 0.25rem 0.75rem rgba(0,0,0,0.1)",
  opacity: "0",
  borderRadius: "0.25rem",
  "selectors": {
    [`${hide}`]: {
      display: "none",
    },
    [`${showing}`]: {
      opacity: "1",
    },
    [`${show}`]: {
      display: "block",
      opacity: "1",
    },
    "&:not(:last-child)": {
      marginBottom: "0.75rem",
    },
  },
});

export const validFeedback = style({
  display: "none",
  width: "100%",
  marginTop: "0.25rem",
  fontSize: "80%",
  color: "28a745",
  "selectors": {
    [`${formCheckInput}${isValid} ~ &`]: {
      display: "block",
    },
    [`${isValid} ~ &`]: {
      display: "block",
    },
    [`${wasValidated} ${formCheckInput}:valid ~ &`]: {
      display: "block",
    },
    [`${wasValidated} :valid ~ &`]: {
      display: "block",
    },
  },
});

export const validTooltip = style({
  position: "absolute",
  top: "100%",
  left: "0",
  zIndex: "5",
  display: "none",
  maxWidth: "100%",
  padding: "0.25rem 0.5rem",
  marginTop: "0.1rem",
  fontSize: "0.875rem",
  lineHeight: "1.5",
  color: "fff",
  backgroundColor: "rgba(40,167,69,0.9)",
  borderRadius: "0.25rem",
  "selectors": {
    [`${formCheckInput}${isValid} ~ &`]: {
      display: "block",
    },
    [`${formRow} > ${col} > &`]: {
      left: "5px",
    },
    [`${formRow} > [class*='col-'] > &`]: {
      left: "5px",
    },
    [`${isValid} ~ &`]: {
      display: "block",
    },
    [`${wasValidated} ${formCheckInput}:valid ~ &`]: {
      display: "block",
    },
    [`${wasValidated} :valid ~ &`]: {
      display: "block",
    },
  },
});

globalStyle("*", {
  boxSizing: "border-box",
  "@media": {
    "print": {
      textShadow: "none",
      boxShadow: "none",
    },
  },
});

globalStyle("*::after", {
  boxSizing: "border-box",
  "@media": {
    "print": {
      textShadow: "none",
      boxShadow: "none",
    },
  },
});

globalStyle("*::before", {
  boxSizing: "border-box",
  "@media": {
    "print": {
      textShadow: "none",
      boxShadow: "none",
    },
  },
});

globalStyle("::-webkit-file-upload-button", {
  font: "inherit",
  WebkitAppearance: "button",
});

globalStyle(":root", {
  "vars": {
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
    "--font-family-sans-serif": "-apple-system ,   BlinkMacSystemFont ,   Segoe UI ,   Roboto ,   Helvetica Neue ,   Arial ,   Noto Sans ,   Liberation Sans ,   sans-serif ,   Apple Color Emoji ,   Segoe UI Emoji ,   Segoe UI Symbol ,   Noto Color Emoji",
    "--font-family-monospace": "SFMono-Regular ,   Menlo ,   Monaco ,   Consolas ,   Liberation Mono ,   Courier New ,   monospace",
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
  padding: "0",
  borderStyle: "none",
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
  padding: "0",
  borderStyle: "none",
});

globalStyle("[type='reset']:not(:disabled)", {
  cursor: "pointer",
});

globalStyle("[type='search']", {
  outlineOffset: "-2px",
  WebkitAppearance: "none",
});

globalStyle("[type='search']::-webkit-search-decoration", {
  WebkitAppearance: "none",
});

globalStyle("[type='submit']", {
  WebkitAppearance: "button",
});

globalStyle("[type='submit']::-moz-focus-inner", {
  padding: "0",
  borderStyle: "none",
});

globalStyle("[type='submit']:not(:disabled)", {
  cursor: "pointer",
});

globalStyle("a", {
  color: "007bff",
  textDecoration: "none",
  backgroundColor: "transparent",
});

globalStyle("a > code", {
  color: "inherit",
});

globalStyle(`a${badgeDanger}${focus}`, {
  outline: "0",
  boxShadow: "0 0 0 0.2rem rgba(220,53,69,0.5)",
});

globalStyle(`a${badgeDanger}:focus`, {
  color: "fff",
  backgroundColor: "bd2130",
  outline: "0",
  boxShadow: "0 0 0 0.2rem rgba(220,53,69,0.5)",
});

globalStyle(`a${badgeDanger}:hover`, {
  color: "fff",
  backgroundColor: "bd2130",
});

globalStyle(`a${badgeDark}${focus}`, {
  outline: "0",
  boxShadow: "0 0 0 0.2rem rgba(52,58,64,0.5)",
});

globalStyle(`a${badgeDark}:focus`, {
  color: "fff",
  backgroundColor: "1d2124",
  outline: "0",
  boxShadow: "0 0 0 0.2rem rgba(52,58,64,0.5)",
});

globalStyle(`a${badgeDark}:hover`, {
  color: "fff",
  backgroundColor: "1d2124",
});

globalStyle(`a${badgeInfo}${focus}`, {
  outline: "0",
  boxShadow: "0 0 0 0.2rem rgba(23,162,184,0.5)",
});

globalStyle(`a${badgeInfo}:focus`, {
  color: "fff",
  backgroundColor: "117a8b",
  outline: "0",
  boxShadow: "0 0 0 0.2rem rgba(23,162,184,0.5)",
});

globalStyle(`a${badgeInfo}:hover`, {
  color: "fff",
  backgroundColor: "117a8b",
});

globalStyle(`a${badgeLight}${focus}`, {
  outline: "0",
  boxShadow: "0 0 0 0.2rem rgba(248,249,250,0.5)",
});

globalStyle(`a${badgeLight}:focus`, {
  color: "212529",
  backgroundColor: "dae0e5",
  outline: "0",
  boxShadow: "0 0 0 0.2rem rgba(248,249,250,0.5)",
});

globalStyle(`a${badgeLight}:hover`, {
  color: "212529",
  backgroundColor: "dae0e5",
});

globalStyle(`a${badgePrimary}${focus}`, {
  outline: "0",
  boxShadow: "0 0 0 0.2rem rgba(0,123,255,0.5)",
});

globalStyle(`a${badgePrimary}:focus`, {
  color: "fff",
  backgroundColor: "0062cc",
  outline: "0",
  boxShadow: "0 0 0 0.2rem rgba(0,123,255,0.5)",
});

globalStyle(`a${badgePrimary}:hover`, {
  color: "fff",
  backgroundColor: "0062cc",
});

globalStyle(`a${badgeSecondary}${focus}`, {
  outline: "0",
  boxShadow: "0 0 0 0.2rem rgba(108,117,125,0.5)",
});

globalStyle(`a${badgeSecondary}:focus`, {
  color: "fff",
  backgroundColor: "545b62",
  outline: "0",
  boxShadow: "0 0 0 0.2rem rgba(108,117,125,0.5)",
});

globalStyle(`a${badgeSecondary}:hover`, {
  color: "fff",
  backgroundColor: "545b62",
});

globalStyle(`a${badgeSuccess}${focus}`, {
  outline: "0",
  boxShadow: "0 0 0 0.2rem rgba(40,167,69,0.5)",
});

globalStyle(`a${badgeSuccess}:focus`, {
  color: "fff",
  backgroundColor: "1e7e34",
  outline: "0",
  boxShadow: "0 0 0 0.2rem rgba(40,167,69,0.5)",
});

globalStyle(`a${badgeSuccess}:hover`, {
  color: "fff",
  backgroundColor: "1e7e34",
});

globalStyle(`a${badgeWarning}${focus}`, {
  outline: "0",
  boxShadow: "0 0 0 0.2rem rgba(255,193,7,0.5)",
});

globalStyle(`a${badgeWarning}:focus`, {
  color: "212529",
  backgroundColor: "d39e00",
  outline: "0",
  boxShadow: "0 0 0 0.2rem rgba(255,193,7,0.5)",
});

globalStyle(`a${badgeWarning}:hover`, {
  color: "212529",
  backgroundColor: "d39e00",
});

globalStyle(`a${badge}:focus`, {
  textDecoration: "none",
});

globalStyle(`a${badge}:hover`, {
  textDecoration: "none",
});

globalStyle(`a${bgDanger}:focus`, {
  backgroundColor: "bd2130",
});

globalStyle(`a${bgDanger}:hover`, {
  backgroundColor: "bd2130",
});

globalStyle(`a${bgDark}:focus`, {
  backgroundColor: "1d2124",
});

globalStyle(`a${bgDark}:hover`, {
  backgroundColor: "1d2124",
});

globalStyle(`a${bgInfo}:focus`, {
  backgroundColor: "117a8b",
});

globalStyle(`a${bgInfo}:hover`, {
  backgroundColor: "117a8b",
});

globalStyle(`a${bgLight}:focus`, {
  backgroundColor: "dae0e5",
});

globalStyle(`a${bgLight}:hover`, {
  backgroundColor: "dae0e5",
});

globalStyle(`a${bgPrimary}:focus`, {
  backgroundColor: "0062cc",
});

globalStyle(`a${bgPrimary}:hover`, {
  backgroundColor: "0062cc",
});

globalStyle(`a${bgSecondary}:focus`, {
  backgroundColor: "545b62",
});

globalStyle(`a${bgSecondary}:hover`, {
  backgroundColor: "545b62",
});

globalStyle(`a${bgSuccess}:focus`, {
  backgroundColor: "1e7e34",
});

globalStyle(`a${bgSuccess}:hover`, {
  backgroundColor: "1e7e34",
});

globalStyle(`a${bgWarning}:focus`, {
  backgroundColor: "d39e00",
});

globalStyle(`a${bgWarning}:hover`, {
  backgroundColor: "d39e00",
});

globalStyle(`a${btn}${disabled}`, {
  pointerEvents: "none",
});

globalStyle(`a${close}${disabled}`, {
  pointerEvents: "none",
});

globalStyle(`a${textDanger}:focus`, {
  color: "a71d2a",
});

globalStyle(`a${textDanger}:hover`, {
  color: "a71d2a",
});

globalStyle(`a${textDark}:focus`, {
  color: "121416",
});

globalStyle(`a${textDark}:hover`, {
  color: "121416",
});

globalStyle(`a${textInfo}:focus`, {
  color: "0f6674",
});

globalStyle(`a${textInfo}:hover`, {
  color: "0f6674",
});

globalStyle(`a${textLight}:focus`, {
  color: "cbd3da",
});

globalStyle(`a${textLight}:hover`, {
  color: "cbd3da",
});

globalStyle(`a${textPrimary}:focus`, {
  color: "0056b3",
});

globalStyle(`a${textPrimary}:hover`, {
  color: "0056b3",
});

globalStyle(`a${textSecondary}:focus`, {
  color: "494f54",
});

globalStyle(`a${textSecondary}:hover`, {
  color: "494f54",
});

globalStyle(`a${textSuccess}:focus`, {
  color: "19692c",
});

globalStyle(`a${textSuccess}:hover`, {
  color: "19692c",
});

globalStyle(`a${textWarning}:focus`, {
  color: "ba8b00",
});

globalStyle(`a${textWarning}:hover`, {
  color: "ba8b00",
});

globalStyle("a:hover", {
  color: "0056b3",
  textDecoration: "underline",
});

globalStyle("a:not", {
  "@media": {
    "print": {
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

globalStyle("abbr[data-original-title]", {
  textDecoration: "underline",
  WebkitTextDecoration: "underline dotted",
  textDecoration: "underline dotted",
  cursor: "help",
  borderBottom: "0",
  WebkitTextDecorationSkipInk: "none",
  textDecorationSkipInk: "none",
});

globalStyle("abbr[title]", {
  textDecoration: "underline",
  WebkitTextDecoration: "underline dotted",
  textDecoration: "underline dotted",
  cursor: "help",
  borderBottom: "0",
  WebkitTextDecorationSkipInk: "none",
  textDecorationSkipInk: "none",
});

globalStyle("abbr[title]::after", {
  "@media": {
    "print": {
      content: " ( attr(title) )",
    },
  },
});

globalStyle("address", {
  marginBottom: "1rem",
  fontStyle: "normal",
  lineHeight: "inherit",
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
    "print": {
      border: "1px solid adb5bd",
      pageBreakInside: "avoid",
    },
  },
});

globalStyle("body", {
  margin: "0",
  fontFamily: "-apple-system , BlinkMacSystemFont , Segoe UI , Roboto , Helvetica Neue , Arial , Noto Sans , Liberation Sans , sans-serif , Apple Color Emoji , Segoe UI Emoji , Segoe UI Symbol , Noto Color Emoji",
  fontSize: "1rem",
  fontWeight: "400",
  lineHeight: "1.5",
  color: "212529",
  textAlign: "left",
  backgroundColor: "fff",
  "@media": {
    "print": {
      minWidth: "992px",
    },
  },
});

globalStyle("button", {
  borderRadius: "0",
  margin: "0",
  fontFamily: "inherit",
  fontSize: "inherit",
  lineHeight: "inherit",
  overflow: "visible",
  textTransform: "none",
  WebkitAppearance: "button",
});

globalStyle(`button${bgDanger}:focus`, {
  backgroundColor: "bd2130",
});

globalStyle(`button${bgDanger}:hover`, {
  backgroundColor: "bd2130",
});

globalStyle(`button${bgDark}:focus`, {
  backgroundColor: "1d2124",
});

globalStyle(`button${bgDark}:hover`, {
  backgroundColor: "1d2124",
});

globalStyle(`button${bgInfo}:focus`, {
  backgroundColor: "117a8b",
});

globalStyle(`button${bgInfo}:hover`, {
  backgroundColor: "117a8b",
});

globalStyle(`button${bgLight}:focus`, {
  backgroundColor: "dae0e5",
});

globalStyle(`button${bgLight}:hover`, {
  backgroundColor: "dae0e5",
});

globalStyle(`button${bgPrimary}:focus`, {
  backgroundColor: "0062cc",
});

globalStyle(`button${bgPrimary}:hover`, {
  backgroundColor: "0062cc",
});

globalStyle(`button${bgSecondary}:focus`, {
  backgroundColor: "545b62",
});

globalStyle(`button${bgSecondary}:hover`, {
  backgroundColor: "545b62",
});

globalStyle(`button${bgSuccess}:focus`, {
  backgroundColor: "1e7e34",
});

globalStyle(`button${bgSuccess}:hover`, {
  backgroundColor: "1e7e34",
});

globalStyle(`button${bgWarning}:focus`, {
  backgroundColor: "d39e00",
});

globalStyle(`button${bgWarning}:hover`, {
  backgroundColor: "d39e00",
});

globalStyle(`button${close}`, {
  padding: "0",
  backgroundColor: "transparent",
  border: "0",
});

globalStyle("button::-moz-focus-inner", {
  padding: "0",
  borderStyle: "none",
});

globalStyle("button:focus:not(:focus-visible)", {
  outline: "0",
});

globalStyle("button:not(:disabled)", {
  cursor: "pointer",
});

globalStyle("caption", {
  paddingTop: "0.75rem",
  paddingBottom: "0.75rem",
  color: "6c757d",
  textAlign: "left",
  captionSide: "bottom",
});

globalStyle("code", {
  fontFamily: "SFMono-Regular , Menlo , Monaco , Consolas , Liberation Mono , Courier New , monospace",
  fontSize: "1em",
  fontSize: "87.5%",
  color: "e83e8c",
  wordWrap: "break-word",
});

globalStyle("dd", {
  marginBottom: "0.5rem",
  marginLeft: "0",
});

globalStyle("dl", {
  marginTop: "0",
  marginBottom: "1rem",
});

globalStyle("dt", {
  fontWeight: "700",
});

globalStyle("fieldset", {
  minWidth: "0",
  padding: "0",
  margin: "0",
  border: "0",
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

globalStyle("h1", {
  marginTop: "0",
  marginBottom: "0.5rem",
  marginBottom: "0.5rem",
  fontWeight: "500",
  lineHeight: "1.2",
  fontSize: "2.5rem",
});

globalStyle("h2", {
  marginTop: "0",
  marginBottom: "0.5rem",
  marginBottom: "0.5rem",
  fontWeight: "500",
  lineHeight: "1.2",
  fontSize: "2rem",
  "@media": {
    "print": {
      orphans: "3",
      widows: "3",
      pageBreakAfter: "avoid",
    },
  },
});

globalStyle("h3", {
  marginTop: "0",
  marginBottom: "0.5rem",
  marginBottom: "0.5rem",
  fontWeight: "500",
  lineHeight: "1.2",
  fontSize: "1.75rem",
  "@media": {
    "print": {
      orphans: "3",
      widows: "3",
      pageBreakAfter: "avoid",
    },
  },
});

globalStyle("h4", {
  marginTop: "0",
  marginBottom: "0.5rem",
  marginBottom: "0.5rem",
  fontWeight: "500",
  lineHeight: "1.2",
  fontSize: "1.5rem",
});

globalStyle("h5", {
  marginTop: "0",
  marginBottom: "0.5rem",
  marginBottom: "0.5rem",
  fontWeight: "500",
  lineHeight: "1.2",
  fontSize: "1.25rem",
});

globalStyle("h6", {
  marginTop: "0",
  marginBottom: "0.5rem",
  marginBottom: "0.5rem",
  fontWeight: "500",
  lineHeight: "1.2",
  fontSize: "1rem",
});

globalStyle("header", {
  display: "block",
});

globalStyle("hgroup", {
  display: "block",
});

globalStyle("hr", {
  boxSizing: "content-box",
  height: "0",
  overflow: "visible",
  marginTop: "1rem",
  marginBottom: "1rem",
  border: "0",
  borderTop: "1px solid rgba(0,0,0,0.1)",
});

globalStyle("html", {
  fontFamily: "sans-serif",
  lineHeight: "1.15",
  WebkitTextSizeAdjust: "100%",
  WebkitTapHighlightColor: "rgba(0,0,0,0)",
});

globalStyle("img", {
  verticalAlign: "middle",
  borderStyle: "none",
  "@media": {
    "print": {
      pageBreakInside: "avoid",
    },
  },
});

globalStyle("input", {
  margin: "0",
  fontFamily: "inherit",
  fontSize: "inherit",
  lineHeight: "inherit",
  overflow: "visible",
});

globalStyle(`input[type='button']${btnBlock}`, {
  width: "100%",
});

globalStyle("input[type='checkbox']", {
  boxSizing: "border-box",
  padding: "0",
});

globalStyle(`input[type='date']${formControl}`, {
  WebkitAppearance: "none",
  MozAppearance: "none",
  appearance: "none",
});

globalStyle(`input[type='datetime-local']${formControl}`, {
  WebkitAppearance: "none",
  MozAppearance: "none",
  appearance: "none",
});

globalStyle(`input[type='month']${formControl}`, {
  WebkitAppearance: "none",
  MozAppearance: "none",
  appearance: "none",
});

globalStyle("input[type='radio']", {
  boxSizing: "border-box",
  padding: "0",
});

globalStyle(`input[type='reset']${btnBlock}`, {
  width: "100%",
});

globalStyle(`input[type='submit']${btnBlock}`, {
  width: "100%",
});

globalStyle(`input[type='time']${formControl}`, {
  WebkitAppearance: "none",
  MozAppearance: "none",
  appearance: "none",
});

globalStyle("kbd", {
  fontFamily: "SFMono-Regular , Menlo , Monaco , Consolas , Liberation Mono , Courier New , monospace",
  fontSize: "1em",
  padding: "0.2rem 0.4rem",
  fontSize: "87.5%",
  color: "fff",
  backgroundColor: "212529",
  borderRadius: "0.2rem",
});

globalStyle("kbd kbd", {
  padding: "0",
  fontSize: "100%",
  fontWeight: "700",
});

globalStyle("label", {
  display: "inline-block",
  marginBottom: "0.5rem",
});

globalStyle("legend", {
  display: "block",
  width: "100%",
  maxWidth: "100%",
  padding: "0",
  marginBottom: "0.5rem",
  fontSize: "1.5rem",
  lineHeight: "inherit",
  color: "inherit",
  whiteSpace: "normal",
});

globalStyle("main", {
  display: "block",
});

globalStyle("mark", {
  padding: "0.2em",
  backgroundColor: "fcf8e3",
});

globalStyle("nav", {
  display: "block",
});

globalStyle("ol", {
  marginTop: "0",
  marginBottom: "1rem",
});

globalStyle("ol ol", {
  marginBottom: "0",
});

globalStyle("ol ul", {
  marginBottom: "0",
});

globalStyle("optgroup", {
  margin: "0",
  fontFamily: "inherit",
  fontSize: "inherit",
  lineHeight: "inherit",
});

globalStyle("output", {
  display: "inline-block",
});

globalStyle("p", {
  marginTop: "0",
  marginBottom: "1rem",
  "@media": {
    "print": {
      orphans: "3",
      widows: "3",
    },
  },
});

globalStyle("pre", {
  fontFamily: "SFMono-Regular , Menlo , Monaco , Consolas , Liberation Mono , Courier New , monospace",
  fontSize: "1em",
  marginTop: "0",
  marginBottom: "1rem",
  overflow: "auto",
  msOverflowStyle: "scrollbar",
  display: "block",
  fontSize: "87.5%",
  color: "212529",
  "@media": {
    "print": {
      whiteSpace: "pre-wrap",
      border: "1px solid adb5bd",
      pageBreakInside: "avoid",
    },
  },
});

globalStyle("pre code", {
  fontSize: "inherit",
  color: "inherit",
  wordBreak: "normal",
});

globalStyle("progress", {
  verticalAlign: "baseline",
});

globalStyle("samp", {
  fontFamily: "SFMono-Regular , Menlo , Monaco , Consolas , Liberation Mono , Courier New , monospace",
  fontSize: "1em",
});

globalStyle("section", {
  display: "block",
});

globalStyle("select", {
  margin: "0",
  fontFamily: "inherit",
  fontSize: "inherit",
  lineHeight: "inherit",
  textTransform: "none",
  wordWrap: "normal",
});

globalStyle(`select${formControl}${isInvalid}`, {
  paddingRight: "3rem",
  backgroundPosition: "right 1.5rem center",
});

globalStyle(`select${formControl}${isValid}`, {
  paddingRight: "3rem",
  backgroundPosition: "right 1.5rem center",
});

globalStyle(`select${formControl}:-moz-focusring`, {
  color: "transparent",
  textShadow: "0 0 0 495057",
});

globalStyle(`select${formControl}:focus::-ms-value`, {
  color: "495057",
  backgroundColor: "fff",
});

globalStyle(`select${formControl}[multiple]`, {
  height: "auto",
});

globalStyle(`select${formControl}[size]`, {
  height: "auto",
});

globalStyle("small", {
  fontSize: "80%",
  fontSize: "80%",
  fontWeight: "400",
});

globalStyle("strong", {
  fontWeight: "bolder",
});

globalStyle("sub", {
  position: "relative",
  fontSize: "75%",
  lineHeight: "0",
  verticalAlign: "baseline",
  bottom: "-0.25em",
});

globalStyle("summary", {
  display: "list-item",
  cursor: "pointer",
});

globalStyle("sup", {
  position: "relative",
  fontSize: "75%",
  lineHeight: "0",
  verticalAlign: "baseline",
  top: "-0.5em",
});

globalStyle("svg", {
  overflow: "hidden",
  verticalAlign: "middle",
});

globalStyle("table", {
  borderCollapse: "collapse",
});

globalStyle("template", {
  display: "none",
});

globalStyle("textarea", {
  margin: "0",
  fontFamily: "inherit",
  fontSize: "inherit",
  lineHeight: "inherit",
  overflow: "auto",
  resize: "vertical",
});

globalStyle(`textarea${formControl}`, {
  height: "auto",
});

globalStyle(`textarea${formControl}${isInvalid}`, {
  paddingRight: "calc(1.5em+0.75rem)",
  backgroundPosition: "top calc(0.375em+0.1875rem) right calc(0.375em+0.1875rem)",
});

globalStyle(`textarea${formControl}${isValid}`, {
  paddingRight: "calc(1.5em+0.75rem)",
  backgroundPosition: "top calc(0.375em+0.1875rem) right calc(0.375em+0.1875rem)",
});

globalStyle("th", {
  textAlign: "inherit",
  textAlign: "-webkit-match-parent",
});

globalStyle("tr", {
  "@media": {
    "print": {
      pageBreakInside: "avoid",
    },
  },
});

globalStyle("ul", {
  marginTop: "0",
  marginBottom: "1rem",
});

globalStyle("ul ol", {
  marginBottom: "0",
});

globalStyle("ul ul", {
  marginBottom: "0",
});

