import styled from '../../../style/styled';
import { invertColor } from '../../../utils/invertColor';
// import { SCREEN_WIDTH_BREAK_SMALL } from '../../../style/SIZES';

export const ContentSectionWidgetPrice = styled.p<{
  strikeOut?: boolean;
  color?: string;
}>`
  color: ${({ color }) => (color ? color : '#fff')};
  font-weight: bold;
  text-shadow: 0 0 4px
    ${({ color }) => `${invertColor(color ? color : '#fff')}`};
  text-decoration: ${({ strikeOut }) => (strikeOut ? 'line-through' : 'none')};
`;
