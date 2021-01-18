import React from 'react';
import { theme } from '../style/AppGlobalStyle';
import styled from '../style/styled';

const StyledButton = styled.button<any>`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ bgColor, secondary }) => {
    if (bgColor) {
      return bgColor;
    } else if (secondary) {
      return theme.palette.secondary.main;
    }

    return theme.palette.primary.main;
  }};
  color: ${({ color, secondary }) => {
    if (color) {
      return color;
    } else if (secondary) {
      return theme.palette.secondary.contrastColor;
    }

    return theme.palette.primary.contrastColor;
  }};
  width: ${({ width }) => (width ? width : 'auto')};
  cursor: ${({ disabled }) => (disabled ? 'auto' : 'pointer')};
  outline: none;
  padding: ${({ padding }) => (padding ? padding : '8px')};
  user-select: none;
  font-size: 16px;

  border: ${({ bgColor, secondary }) => {
    if (bgColor) {
      return `1px solid ${bgColor}`;
    } else if (secondary) {
      return `1px solid ${theme.palette.secondary.contrastColor}`;
    }

    return `1px solid ${theme.palette.primary.main}`;
  }};

  appearance: none;
  border-radius: 0;
  border-radius: ${({ pill }) => (pill ? '1000px' : '0')};

  -webkit-tap-highlight-color: transparent;
  transition: box-shadow 0.2s ease-in-out;
  &::-moz-focus-inner {
    border: 0;
  }

  &:focus: {
    outline: none;
  }

  @media not all and (hover: none) {
    &:hover {
      box-shadow: ${({ disabled }) =>
        disabled ? 'none' : '0px 0px 10px -1px #000000aa'};
    }
  }

  @media (hover: none) and (pointer: coarse) {
    padding: ${(props) => (props.small ? 8 : 15)}px;
  }
`;

// TODO: add captureEvent to onClick
// TODO: write tests
export const Button = ({ children, ...restProps }: any) => (
  <StyledButton {...restProps}>{children}</StyledButton>
);
