// // need to do this to be able to use the css prop. workaround link https://github.com/DefinitelyTyped/DefinitelyTyped/issues/31245#issuecomment-463640878
// import * as types from 'styled-components/cssprop';
import "react-toastify/dist/ReactToastify.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Z_INDEX } from "./Z_INDEX";
import { getTheme } from "../branding/utils/getTheme";
import { createGlobalStyle } from "./styled";

export const theme = getTheme();

export const COLORS = {
  primaryBackgroundColor: "#fff",
  secondaryTextColor: "#777",
  tertiaryTextColor: "#fff",
  highlightColor: "#0066FF",
  activeColor: "#000",
  primaryFontColor: "#0f1620",
  tertiaryColor: "rgba(16, 22, 32)",
  errorColor: "#ff4846",
  warningColor: "#d8870f",
  offwhite: "#efefef",
  offwhiteDark: "#cecece",
  offwhiteDarker: "#ddd",
  lightTextColor: "#ffffffdd",
  darkTextColor: "#000000dd",
};

export const AppGlobalStyle = createGlobalStyle`
@font-face {
  font-family: "Roboto Condensed";
  font-style: normal;
  font-weight: 400;
  src: local('Roboto Condensed Regular'), local('RobotoCondensed-Regular'), url("/fonts/RobotoCondensed-Regular.ttf") format('truetype');
  font-display: swap;
}

@font-face {
  font-family: "Roboto Black";
  font-style: normal;
  font-weight: 400;
  src: local('Roboto Black'), local('Roboto-Black'), url("/fonts/Roboto-Black.ttf") format('truetype');
  font-display: swap;
}

html {
  color: ${COLORS.primaryFontColor};
}

html, body {
  width: 100%;
  height: 100%;
  background: ${COLORS.primaryBackgroundColor};
  -webkit-overflow-scrolling: touch;
}

* {
  font-family: "Roboto Condensed", -apple-system, BlinkMacSystemFont,"Segoe UI", Roboto, Oxygen-Sans, Ubuntu, sans-serif;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

a {
  color: ${(props) => props.theme.palette.common.black};
  text-decoration: none;
}

a:hover {
  color: ${(props) => props.theme.palette.common.black};
  cursor: pointer;
}

a.active {
  color: ${(props) => props.theme.palette.common.black};
}

h1 {
  font-size: 24px;
}

h2 {
  font-size: 22px;
}

h3 {
  font-size: 20px;
}

h4 {
  font-size: 18px;
}

p {
  font-size: 16px;
}

#root {
  height: 100%;
}

.grecaptcha-badge {
  visibility: hidden;
}

.Toastify__toast-container {
  z-index: ${Z_INDEX.REACT_TOAST_CONTAINER}
}

.react-select__control {
  height: 40px;

  @media (hover: none) and (pointer: coarse) {
    height: 50px;
  }
}

.navlinkSelected {
  font-weight: bold;
  text-decoration: underline;
}`;
