import React from "react";
import styled from "../../style/styled";
import Icon from "mdi-react/LoginIcon";
import { HEADER_BUTTON_SIZE } from "../../style/SIZES";
import {
  AppHeaderButtonContainer,
  AppHeaderButtonText,
} from "./styledComponents";
import { theme } from "../../style/AppGlobalStyle";

interface Props {
  color?: string;
  size?: number;
  fullWidth?: boolean;
}

export const SignInLink: React.FC<Props> = (props) => {
  const color = theme.palette.highlight.contrastColor;
  const size = props.size || HEADER_BUTTON_SIZE;
  const fullWidth = props.fullWidth || false;

  return (
    <Container
      fullWidth={fullWidth}
      onClick={() => {
        window.alert("Not implemented");
      }}
    >
      <Icon color={color} size={size * 1.4} />
      <AppHeaderButtonText size={size} color={color}>
        LOG IN / SIGN UP
      </AppHeaderButtonText>
    </Container>
  );
};

const Container = styled(AppHeaderButtonContainer)`
  background: ${(props) => props.theme.palette.highlight.main};
  padding: 4px 8px;
`;
