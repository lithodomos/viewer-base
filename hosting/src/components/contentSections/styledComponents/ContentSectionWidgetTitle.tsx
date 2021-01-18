import styled from '../../../style/styled';

export const ContentSectionWidgetTitle = styled.h4`
  text-transform: uppercase;
  color: ${(props) => props.theme.palette.common.white};
  font-size: 26px;
  font-weight: bold;
  z-index: 4;
  pointer-events: none;
  text-shadow: 0 0 4px #000;
  user-select: none;
  position: absolute;
  text-align: center;
`;
