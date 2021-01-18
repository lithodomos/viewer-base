import styled from '../style/styled';
import { COLORS } from '../style/AppGlobalStyle';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 20px;
  padding-bottom: 60px;

  a {
    color: ${COLORS.activeColor};
  }

  a:hover {
    color: ${COLORS.activeColor};
  }
`;
