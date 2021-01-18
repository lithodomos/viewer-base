import packageJson from "../../../package.json";
import { isIOS, isIPad13, isTablet, isMobileOnly } from "react-device-detect";
import { APP_NAMES } from "./enums";

const isDevelopment = process.env.NODE_ENV === "development";

const environment = process.env.REACT_APP_ENVIRONMENT;
const githash = process.env.REACT_APP_SENTRY_RELEASE;
const appname = process.env.REACT_APP_NAME || APP_NAMES.DEFAULT;

console.log("appname:", appname);

const isRTM = environment === "rtm";
const isBeta = environment === "beta";
const isAlpha = environment === "alpha";
const isStaging =
  window.location.hostname.includes("testing") || isBeta || isAlpha;

const isBot = /bot|googlebot|crawler|spider|robot|crawling/i.test(
  (navigator && navigator.userAgent) || ""
);

const isLocalHost = Boolean(
  window.location.hostname === "localhost" ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === "[::1]" ||
    // 127.0.0.1/8 is considered localhost for IPv4.
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);

let appID = "viewer-base";
let apiURI = "https://api.xxx.com/graphql";

if (isAlpha) {
}

if (isBeta) {
}

if (isDevelopment) {
  // apiURI = 'http://localhost:3000/graphql';
}

if (isRTM) {
  appID = "viewer-base-rtm";
}

export const env = {
  // detect crawlers
  isBot,
  isDevelopment,
  isProduction: !isDevelopment,
  isIPhone: !isTablet && isIOS,
  isIPad: isIPad13 || (isTablet && isIOS),
  isTablet: isIPad13 || isTablet,
  isMobile: isMobileOnly,
  API_URI: apiURI,
  APP_ID: appID,
  APP_NAME: appname,
  IS_STOCK: appname === APP_NAMES.DEFAULT,

  APP_VERSION: packageJson.version,

  IS_LOCAL_HOST: isLocalHost,
  ENVIRONMENT: environment,
  GIT_HASH: githash,
  IS_RTM: isRTM,
  IS_BETA: isBeta,
  IS_ALPHA: isAlpha,
  IS_STAGING_SITE: isStaging,
};
