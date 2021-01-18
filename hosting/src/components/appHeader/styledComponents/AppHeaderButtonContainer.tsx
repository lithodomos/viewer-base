import styled from '../../../style/styled';

export const AppHeaderButtonContainer = styled.div<{
  fullWidth?: boolean;
  disabled?: boolean;
}>`
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  margin: 0 10px;
  width: ${(props) => (props.fullWidth ? '100%' : 'auto')};
  cursor: ${(props) => (props.disabled ? 'auto' : 'pointer')};
  pointer-events: ${(props) => (props.disabled ? 'none' : 'auto')};
`;
