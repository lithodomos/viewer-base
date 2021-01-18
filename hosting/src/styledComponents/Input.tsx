import styled from '../style/styled';
import { COLORS } from '../style/AppGlobalStyle';

export const Input = styled.input<{ hasError?: boolean; bgColor?: string }>`
  padding: 10px;
  font-size: 16px;
  width: 100%;
  appearance: none;
  border-radius: 0;
  border: 1px solid
    ${({ hasError }) => (hasError ? COLORS.errorColor : COLORS.offwhiteDarker)};
  outline: none;
  background: ${({ bgColor }) => (bgColor ? bgColor : COLORS.offwhite)};

  @media (hover: none) and (pointer: coarse) {
    padding: 15px;
  }
`;
