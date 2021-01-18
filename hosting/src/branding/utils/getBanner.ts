import { banner as defaultBanner } from "./../default/banner";
import { banner as secondBanner } from "../site2/banner";

import { APP_NAMES } from "./../../App/config/enums";
import { env } from "../../App/config/env";

export function getBanner() {
  console.log("getBanner env.APP_NAME", env.APP_NAME);

  switch (env.APP_NAME) {
    case APP_NAMES.SECOND: {
      return secondBanner;
    }
    default: {
      return defaultBanner;
    }
  }
}
