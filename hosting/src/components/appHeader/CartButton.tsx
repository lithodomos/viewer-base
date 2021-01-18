import React from "react";
import CartIcon from "mdi-react/CartIcon";
import styled from "../../style/styled";

import { invertColor } from "../../utils/invertColor";
import {
  HEADER_BUTTON_SIZE,
  SCREEN_WIDTH_BREAK_SMALL,
} from "../../style/SIZES";
import {
  AppHeaderButtonContainer,
  AppHeaderButtonText as _AppHeaderButtonText,
} from "./styledComponents";
import { theme } from "../../style/AppGlobalStyle";

interface Props {
  color?: string;
  size?: number;
}

export const CartButton: React.FC<Props> = (props) => {
  const count = 0;
  const color = props.color || theme.palette.common.white;
  const size = props.size || HEADER_BUTTON_SIZE;

  return (
    <AppHeaderButtonContainer
      disabled={count === 0}
      onClick={() => {
        window.alert("Not implemented");
      }}
    >
      <CartButtonIconContainer>
        <CartIcon color={color} size={HEADER_BUTTON_SIZE} />

        <CartButtonCartCountContainer
          color={invertColor(color)}
          bgColor={color}
          size={size}
        >
          <CartButtonCartCountText>{count}</CartButtonCartCountText>
        </CartButtonCartCountContainer>
      </CartButtonIconContainer>

      <AppHeaderButtonText color={color} bold={false} size={size}>
        CART
      </AppHeaderButtonText>
    </AppHeaderButtonContainer>
  );
};

const CartButtonIconContainer = styled.div`
  position: relative;
  display: inline-block;
  margin-right: 8px;
`;

const CartButtonCartCountContainer = styled.div<{
  color: string;
  bgColor: string;
  size: number;
}>`
  right: -${(props) => props.size / 2}px;
  bottom: -${(props) => props.size / 2}px;
  position: absolute;
  background: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  padding: 2px;
  height: ${(props) => props.size}px;
  width: ${(props) => props.size}px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CartButtonCartCountText = styled.p`
  font-size: 10px;
  user-select: none;
`;

const AppHeaderButtonText = styled(_AppHeaderButtonText)`
  display: inline-block;

  @media only screen and (max-width: ${SCREEN_WIDTH_BREAK_SMALL}px) {
    display: none;
  }
`;
