import * as styledComponents from 'styled-components';

import { ITheme } from '../branding/types';

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<ITheme>;

export { css, createGlobalStyle, keyframes, ThemeProvider };

export default styled;
