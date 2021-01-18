import styled from '../../../style/styled';

export const ContentSectionWidgetContainer = styled.div<{
  interactive: boolean;
}>`
  text-align: center;
  position: relative;
  cursor: ${({ interactive }) => (interactive ? 'pointer' : 'auto')};
  overflow: hidden;
`;
