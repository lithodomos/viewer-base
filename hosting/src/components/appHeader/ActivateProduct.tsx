import React from "react";
import Icon from "mdi-react/RedeemIcon";
import styled from "../../style/styled";
import {
  AppHeaderButtonContainer,
  AppHeaderButtonText as _AppHeaderButtonText,
} from "./styledComponents";
import {
  HEADER_BUTTON_SIZE,
  SCREEN_WIDTH_BREAK_SMALL,
} from "../../style/SIZES";

const REDEEM_CAPTION = "REDEEM";

interface Props {
  color?: string;
  size?: number;
  fullWidth?: boolean;
}

export const ActivateProduct: React.FC<Props> = ({
  color = "#fff",
  size = HEADER_BUTTON_SIZE,
  fullWidth = false,
}) => {
  const handleButtonClick = () => {
    window.alert("Not implemented");
  };

  return (
    <AppHeaderButtonContainer fullWidth={fullWidth} onClick={handleButtonClick}>
      <Icon color={color} size={size * 1.4} />
      <AppHeaderButtonText size={size} color={color}>
        {REDEEM_CAPTION}
      </AppHeaderButtonText>
    </AppHeaderButtonContainer>
  );
};

const AppHeaderButtonText = styled(_AppHeaderButtonText)`
  display: inline-block;

  @media only screen and (max-width: ${SCREEN_WIDTH_BREAK_SMALL}px) {
    display: none;
  }
`;
