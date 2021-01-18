import styled from '../../../style/styled';
import { SCREEN_WIDTH_BREAK_SMALL } from '../../../style/SIZES';

export const ContentSectionContainer = styled.section`
  margin-bottom: 80px;

  @media only screen and (max-width: ${SCREEN_WIDTH_BREAK_SMALL}px) {
    margin-bottom: 40px;
  }
`;
