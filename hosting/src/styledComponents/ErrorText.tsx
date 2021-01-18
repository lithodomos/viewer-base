import styled from '../style/styled';
import { COLORS } from '../style/AppGlobalStyle';

export const ErrorText = styled.p`
  color: ${COLORS.errorColor};
  font-size: 12px;
`;

export const ErrorTextInLineBLock = styled(ErrorText)`
  display: inline-block;
`;
