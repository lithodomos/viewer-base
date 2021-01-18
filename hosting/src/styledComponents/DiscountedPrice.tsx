import styled from '../style/styled';

export const DiscountedPrice = styled.p`
  padding: 2px 6px;
  background: ${(props) => props.theme.palette.primary.main};
  color: ${(props) => props.theme.palette.primary.contrastColor};
  font-weight: bold;
  text-shadow: 0 0 4px #000;
  display: inline-block;
  margin-top: 2px;
  border-radius: 4px;
`;
