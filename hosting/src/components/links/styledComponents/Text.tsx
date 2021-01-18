import styled from '../../../style/styled';
import {
  SCREEN_WIDTH_BREAK_SMALL,
  SCREEN_WIDTH_BREAK_EXTRA_SMALL,
} from '../../../style/SIZES';

export const Text = styled.p.attrs<{
  bold?: boolean;
}>((props) => ({
  style: {
    fontWeight: props.bold ? 'bold' : 'normal',
  },
}))<{ color: string; size: number; bold?: boolean }>`
  margin: 0;
  color: ${(props) => props.color};
  font-size: ${(props) => props.size}px;
  user-select: none;

  @media only screen and (max-width: ${SCREEN_WIDTH_BREAK_SMALL}px) {
    font-size: ${(props) => props.size * 0.75}px;
  }

  @media only screen and (max-width: ${SCREEN_WIDTH_BREAK_EXTRA_SMALL}px) {
    font-size: ${(props) => props.size * 0.67}px;
  }
`;
