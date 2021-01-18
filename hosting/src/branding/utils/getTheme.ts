import { theme as defaultTheme } from "./../default/theme";
import { theme as secondTheme } from "../site2/theme";

import { APP_NAMES } from "./../../App/config/enums";
import { env } from "../../App/config/env";

export function getTheme() {
  switch (env.APP_NAME) {
    case APP_NAMES.SECOND: {
      return secondTheme;
    }
    default: {
      return defaultTheme;
    }
  }
}
