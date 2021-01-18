import styled from '../style/styled';
import { COLORS } from '../style/AppGlobalStyle';
import { SCREEN_WIDTH_MAX } from '../style/SIZES';

export const Wrapper = styled.div`
  width: 100%;
  max-width: ${SCREEN_WIDTH_MAX}px;
  margin: 0 auto;
  padding: 0 10px;
  color: ${COLORS.primaryFontColor};
`;
