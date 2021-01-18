import styled from '../style/styled';
import { COLORS } from '../style/AppGlobalStyle';

export const HelpText = styled.p`
  margin-bottom: 20px;
  margin-top: 20px;
`;

export const HelpTextStrong = styled(HelpText)`
  color: ${COLORS.activeColor};
`;

export const HelpTextCentered = styled(HelpText)`
  text-align: center;
`;

export const AuthHelpTextCentered = styled(HelpText)`
  text-align: center;
`;
