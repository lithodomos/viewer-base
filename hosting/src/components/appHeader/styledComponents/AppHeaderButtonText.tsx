import styled from '../../../style/styled';

export const AppHeaderButtonText = styled.p<{
  color: string;
  size: number;
  bold?: boolean;
}>`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size}px;
  margin-left: 4px;
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
  user-select: none;
`;
