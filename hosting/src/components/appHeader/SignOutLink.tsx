import React from "react";
import Icon from "mdi-react/LogoutIcon";
import { HEADER_BUTTON_SIZE } from "../../style/SIZES";
import {
  AppHeaderButtonContainer,
  AppHeaderButtonText,
} from "./styledComponents";

interface Props {
  color?: string;
  size?: number;
  fullWidth?: boolean;
}

export const SignOutLink: React.FC<Props> = (props) => {
  const color = props.color || "#fff";
  const size = props.size || HEADER_BUTTON_SIZE;
  const fullWidth = props.fullWidth || false;

  return (
    <AppHeaderButtonContainer
      fullWidth={fullWidth}
      onClick={() => {
        window.alert("Not implemented");
      }}
    >
      <Icon color={color} size={size * 1.4} />
      <AppHeaderButtonText size={size} color={color}>
        LOG OUT
      </AppHeaderButtonText>
    </AppHeaderButtonContainer>
  );
};
