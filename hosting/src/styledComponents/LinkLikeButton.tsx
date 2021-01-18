import styled from '../style/styled';
import { COLORS } from '../style/AppGlobalStyle';

export const LinkLikeButton = styled.button`
  background: none !important;
  border: none;
  padding: 0 !important;
  text-decoration: none;
  cursor: pointer;

  :hover {
    color: ${COLORS.activeColor};
  }
`;

export const AuthLinkLikeButton = styled(LinkLikeButton)`
  font-size: 16px;
`;
