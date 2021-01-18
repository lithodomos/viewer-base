import styled from '../../../style/styled';
import { COLORS } from '../../../style/AppGlobalStyle';

export const ContentSectionWidgetBackgroundImage = styled.div<{
  img: string;
  height?: number;
}>`
  width: 100%;
  height: ${(props) =>
    props.height !== undefined ? `${props.height}px` : 'auto'};
  background-size: cover;
  background-color: ${COLORS.primaryFontColor};
  background-image: url(${(props) => props.img});
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentSectionWidgetNonInteractiveBackgroundImage = styled(
  ContentSectionWidgetBackgroundImage
)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  cursor: pointer;
`;

export const ContentSectionWidgetInteractiveBackgroundImage = styled(
  ContentSectionWidgetBackgroundImage
)`
  transition: all 0.3s ease-in-out;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  cursor: pointer;
  z-index: 2;
`;
