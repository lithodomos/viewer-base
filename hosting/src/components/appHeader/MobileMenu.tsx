import React, { useState } from 'react';
import MenuIcon from 'mdi-react/MenuIcon';
import styled, { createGlobalStyle } from '../../style/styled';
import { invertColor } from '../../utils/invertColor';
import { IconButton } from '../IconButton';
import CloseIcon from 'mdi-react/CloseIcon';
import { AppLogoAndText } from './AppLogoAndText';
import { isMobile } from 'react-device-detect';
import { HEADER_BUTTON_SIZE } from '../../style/SIZES';

interface Props {
  color?: string;
  isAuthed: boolean;
  children: any;
  fullscreen?: boolean;
  size?: number;
}

export const MobileMenu: React.FC<Props> = (props) => {
  const [showMenu, setShowMenu] = useState(false);

  // having the colors change is distracting
  const color = props.color || '#ffffff';
  const bgColor = invertColor(color);
  const size = props.size || HEADER_BUTTON_SIZE;

  const events = isMobile
    ? {
        onClick: () => setShowMenu(!showMenu),
      }
    : {
        onMouseOver: () => setShowMenu(true),
        onMouseOut: () => setShowMenu(false),
      };

  return (
    <>
      {showMenu && props.fullscreen && <GlobalStyleForOpenMenu />}

      <Container>
        <MenuButton {...events}>
          <MenuIcon color={color} size={size * 1.4} />

          <Menu
            visible={showMenu}
            onClick={() => setShowMenu(!showMenu)}
            bgColor={bgColor}
            borderColor={color}
            fullscreen={Boolean(props.fullscreen)}
          >
            <MenuContent>
              {props.fullscreen && (
                <MenuTitleBar color={color}>
                  <AppLogoAndText size={size} color={color} />

                  <IconButton
                    Icon={CloseIcon}
                    iconSize={size * 1.4}
                    onClick={() => setShowMenu(false)}
                    iconColor={color}
                  />
                </MenuTitleBar>
              )}

              <MenuItems fullscreen={Boolean(props.fullscreen)}>
                {props.children}
              </MenuItems>

              {/* TODO: Add a menu footer */}
              {/* <MenuFooter /> */}
            </MenuContent>
          </Menu>
        </MenuButton>
      </Container>
    </>
  );
};

const GlobalStyleForOpenMenu = createGlobalStyle`
  body {
    overflow: hidden;
  }
`;

const Container = styled.div`
  position: relative;
`;

const MenuButton = styled.div`
  cursor: pointer;
`;

const Menu = styled.div<{
  bgColor: string;
  visible: boolean;
  borderColor: string;
  fullscreen: boolean;
}>`
  background: ${(props) => props.bgColor}ee;
  display: flex;
  flex-direction: column;
  visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transition: all 0.2s ease-in-out;
  top: ${({ fullscreen }) => (fullscreen ? '0' : '40px')};
  right: 0;
  left: ${({ fullscreen }) => (fullscreen ? '0' : 'auto')};
  width: ${({ fullscreen }) => (fullscreen ? '100%' : 'max-content')};
  position: ${({ fullscreen }) => (fullscreen ? 'fixed' : 'absolute')};
  height: ${({ fullscreen }) => (fullscreen ? '100vh' : 'auto')};
  box-shadow: ${({ fullscreen }) =>
    fullscreen ? 'none' : '0px 0 3px 1px #00000082'};
`;

const MenuContent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const MenuTitleBar = styled.div<{ color: string }>`
  position: absolute;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  padding-left: 10px;
  color: ${({ color }) => color};
`;

// const MenuFooter = styled.div`
//   position: absolute;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   height: 48px;
//   padding-left: 10px;
// `;

const MenuItems = styled.div<{ fullscreen: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow-y: auto;
  height: 100%;
  position: relative;
  padding-top: ${({ fullscreen }) => (fullscreen ? '56px' : 0)};
  /* padding-bottom: 56px; */
`;
