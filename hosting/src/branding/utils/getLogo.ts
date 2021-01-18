import { logo as defaultLogo } from "./../default/logo";
import { logo as secondLogo } from "../site2/logo";

import { APP_NAMES } from "./../../App/config/enums";
import { env } from "../../App/config/env";

export function getLogo() {
  switch (env.APP_NAME) {
    case APP_NAMES.SECOND: {
      return secondLogo;
    }
    default: {
      return defaultLogo;
    }
  }
}
