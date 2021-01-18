import React from "react";
import Icon from "mdi-react/AccountPlusIcon";

import {
  AppHeaderButtonContainer,
  AppHeaderButtonText,
} from "./styledComponents";

interface Props {
  color?: string;
  size?: number;
  fullWidth?: boolean;
}

export const SignUpLink: React.FC<Props> = (props) => {
  const color = props.color || "#fff";
  const size = props.size || 16;
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
        SIGN UP
      </AppHeaderButtonText>
    </AppHeaderButtonContainer>
  );
};
