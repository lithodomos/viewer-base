import React, { useState, useEffect } from "react";
import memoizeOne from "memoize-one";
import styled from "../../style/styled";
import { TopRightContainer } from "../../styledComponents/TopRightContainer";
import { SCREEN_WIDTH_BREAK_MEDIUM } from "../../style/SIZES";
import { HEADER_BUTTON_SIZE } from "../../style/SIZES";
import { ActivateProduct } from "./ActivateProduct";
import { Z_INDEX } from "../../style/Z_INDEX";
import { invertColor } from "../../utils/invertColor";
import { CartButton } from "./CartButton";
import { SignOutLink } from "./SignOutLink";
import { SignInLink } from "./SignInLink";
import { HomeButton } from "./HomeButton";
import { MobileMenu } from "./MobileMenu";
import { AppLogoAndText } from "./AppLogoAndText";
import { nonNullable } from "../../utils/nonNullable";
import { theme } from "../../style/AppGlobalStyle";

interface Props {
  logoColor?: string;
  color?: string;
  gradient?: boolean;
}

const isAuthed = false;

export const AppHeader: React.FC<Props> = (props) => {
  let color = theme.palette.brand.contrastColor;
  let bgColor = theme.palette.brand.main;

  if (props.color) {
    color = props.color;
    bgColor = invertColor(color);
  }

  const logoColor = props.logoColor || color;
  const { pathname } = window.location;
  const [atTop, setAtTop] = useState<boolean>(window.scrollY <= 0);

  const nonMenuCommonProps = { color, size: HEADER_BUTTON_SIZE };
  const inMenuCommonProps = { ...nonMenuCommonProps, fullWidth: true };

  const isAtTop = () => {
    setAtTop(window.scrollY <= 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", isAtTop);

    return () => {
      window.removeEventListener("scroll", isAtTop);
    };
  }, []);

  useEffect(() => {
    isAtTop();
  }, [pathname]);

  const { cart, home, redeem, signOut, signIn } = getButtonVisibilityMemoized(
    isAuthed,
    pathname
  );

  const nonMobileMenuItems = [
    signOut ? (
      <MenuItem key="signOut" bgColor={bgColor}>
        <SignOutLink {...inMenuCommonProps} />
      </MenuItem>
    ) : null,
  ].filter(nonNullable);

  const mobileMenu = [
    home ? (
      <MenuItem key="home" bgColor={bgColor}>
        <HomeButton {...inMenuCommonProps} />
      </MenuItem>
    ) : null,

    signIn ? (
      <MenuItem key="signIn" bgColor={bgColor}>
        <SignInLink {...inMenuCommonProps} />
      </MenuItem>
    ) : null,

    ...nonMobileMenuItems,
  ].filter(nonNullable);

  return (
    <>
      <AppHeaderContainer
        gradient={props.gradient}
        bgColor={bgColor}
        atTop={atTop}
      >
        <AppLogoAndText size={18} color={logoColor} />

        <TopRightContainer>
          <MobileDiv>
            {cart && <CartButton {...nonMenuCommonProps} />}

            {redeem && <ActivateProduct {...nonMenuCommonProps} />}

            {mobileMenu.length > 0 && (
              <MobileMenu color={color} isAuthed={isAuthed} fullscreen>
                {mobileMenu}
              </MobileMenu>
            )}
          </MobileDiv>

          <NonMobileDiv dividerColor={color}>
            {home && <HomeButton {...nonMenuCommonProps} />}

            {cart && <CartButton {...nonMenuCommonProps} />}

            {redeem && <ActivateProduct {...nonMenuCommonProps} />}

            {signIn && <SignInLink {...inMenuCommonProps} />}

            {nonMobileMenuItems.length > 0 && (
              <MobileMenu color={color} isAuthed={isAuthed}>
                {nonMobileMenuItems}
              </MobileMenu>
            )}
          </NonMobileDiv>
        </TopRightContainer>
      </AppHeaderContainer>
    </>
  );
};

const AppHeaderContainer = styled.div.attrs<{
  atTop: boolean;
  bgColor: string;
  gradient?: boolean;
}>(({ atTop, bgColor, gradient }) => ({
  style: {
    boxShadow: atTop ? "none" : "0px 1px 20px 0px #000000",
    background: gradient && atTop ? "none" : bgColor,
    backgroundImage:
      gradient && atTop
        ? `linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))`
        : "none",
  },
}))<{
  gradient?: boolean;
  bgColor: string;
  atTop: boolean;
}>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  z-index: ${Z_INDEX.HEADER};
  transition: all 0.2s ease-in-out;
`;

const getButtonVisibilityMemoized = memoizeOne(getButtonVisibility);

function getButtonVisibility(isAuthed: boolean, pathname: string) {
  return {
    cart: true,
    home: false,
    redeem: false,
    myTrips: false,
    signOut: false,
    signIn: true,
    signUp: false,
  };
}
const MenuItem = styled.div<{ nonInteractive?: boolean; bgColor: string }>`
  display: flex;
  align-items: center;
  height: 52px;
  padding: 0 10px;

  svg {
    transition: transform 0.2s;
  }

  p {
    transition: transform 0.2s;
  }

  &:hover {
    svg {
      transform-origin: right center;
      transform: scale(1.05);
    }

    p {
      transform-origin: left center;
      transform: scale(1.05);
    }
  }
`;

const MobileDiv = styled.div`
  display: none;
  align-items: auto;

  @media only screen and (max-width: ${SCREEN_WIDTH_BREAK_MEDIUM}px) {
    display: flex;
    align-items: center;
  }
`;

const NonMobileDiv = styled.div<{ dividerColor: string }>`
  display: flex;
  align-items: center;

  @media only screen and (max-width: ${SCREEN_WIDTH_BREAK_MEDIUM}px) {
    display: none;
    align-items: auto;
  }
`;
