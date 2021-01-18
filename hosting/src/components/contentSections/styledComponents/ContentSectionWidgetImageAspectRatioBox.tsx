import styled from '../../../style/styled';
import { COLORS } from '../../../style/AppGlobalStyle';

export const ContentSectionWidgetImageAspectRatioBox = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  padding-top: 56.25%;
  background: ${COLORS.primaryFontColor};

  @media (hover: hover) and (pointer: fine) {
    :hover {
      .current {
        transform: translateX(-100%);
      }
    }
  }
`;
