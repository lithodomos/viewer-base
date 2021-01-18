import styled from '../style/styled';
import { SCREEN_WIDTH_BREAK_SMALL } from '../style/SIZES';

export const Title = styled.h2`
  margin-bottom: 40px;

  @media only screen and (max-width: ${SCREEN_WIDTH_BREAK_SMALL}px) {
    margin-bottom: 20px;
  }
`;

export const AuthPageTitle = styled.h4`
  text-transform: uppercase;
  margin-bottom: 16px;
  font-weight: bold;
  text-align: center;
`;
