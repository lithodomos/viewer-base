import styled from '../style/styled';
import { COLORS } from '../style/AppGlobalStyle';

export const TextArea = styled.textarea<{ hasError?: boolean }>`
  padding: 10px;
  font-size: 16px;
  width: 100%;
  appearance: none;
  border-radius: 0;
  border: 1px solid
    ${({ hasError }) => (hasError ? COLORS.errorColor : COLORS.offwhiteDarker)};
  outline: none;
  background: ${COLORS.offwhite};

  @media (hover: none) and (pointer: coarse) {
    padding: 15px;
  }
`;
