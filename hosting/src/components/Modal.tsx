import React, { useCallback, useEffect, useState, useRef } from "react";
import styled from "../style/styled";
import CloseIcon from "mdi-react/CloseIcon";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
  BodyScrollOptions,
} from "body-scroll-lock";
import { isMobileOnly } from "react-device-detect";
import { Z_INDEX } from "../style/Z_INDEX";
import { useKeyPress } from "../hooks/useKeyPress";
import { useResize, Dim } from "../hooks/useResize";
import { getDecorationImageURL } from "../utils/getDecorationImageURL";
import { theme } from "../style/AppGlobalStyle";

const options: BodyScrollOptions = {
  reserveScrollBarGap: true,
};

interface Props {
  children: any;
  name: string;
  isOpen: boolean;
  onClose: () => void;
  fullPage?: boolean;
  clickOutsideToClose?: boolean;
  loading?: boolean;
  // Important: make sure to test this on mobile/tablet if there is virtual keyboard data entry inside the modal
  lockBackground?: boolean;
  padding?: string;
}

// TODO: write tests
export const Modal: React.FC<Props> = ({
  children,
  isOpen,
  name,
  onClose,
  fullPage = isMobileOnly,
  clickOutsideToClose = true,
  lockBackground = true,
  padding = "16px",
}) => {
  const [{ height }, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useResize(Dim.BOTH, setSize);

  const clickOutside = useCallback(() => {
    clickOutsideToClose && onClose();
  }, [clickOutsideToClose, onClose]);

  // for body scroll management
  const modalRef = useRef<HTMLDivElement>();

  // close on escape key press
  useKeyPress("Escape", clickOutside);

  useEffect(() => {
    if (lockBackground && modalRef.current) {
      // this is a better solution to manage body scrolling
      if (isOpen) {
        disableBodyScroll(modalRef.current, options);
      } else {
        enableBodyScroll(modalRef.current);
      }
    }

    if (isOpen) {
      // capture analytics
    }

    return () => {
      clearAllBodyScrollLocks();
    };
  }, [isOpen, lockBackground, name]);

  if (!isOpen) {
    return null;
  }

  return (
    <ModalContainer
      className="modal"
      fullPage={fullPage}
      onClick={clickOutside}
    >
      <ModalDialog
        //  @ts-ignore
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        height={height}
        fullPage={fullPage}
        role="button"
      >
        <Content padding={padding}>{children}</Content>

        <ModalCloseButton fullPage={fullPage} onClick={onClose}>
          <CloseIcon color={theme.palette.common.black} />
        </ModalCloseButton>
      </ModalDialog>
    </ModalContainer>
  );
};

const Content = styled.div<{ padding: string }>`
  position: relative;
  padding: ${({ padding }) => padding};
  display: flex;
  flex-direction: column;
  min-height: 100%;
`;

const ModalContainer = styled.div<{
  fullPage: boolean;
}>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${Z_INDEX.MODAL};
  background: ${(props) =>
    props.fullPage ? props.theme.palette.common.white : "#000000aa"};
`;

const ModalDialog = styled.div<{ fullPage: boolean; height: number }>`
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  box-shadow: ${({ fullPage }) =>
    fullPage ? "none" : "0px 0px 21px -1px rgba(0, 0, 0, 0.75)"};
  width: ${({ fullPage }) => (fullPage ? "100%" : "auto")};
  height: ${({ fullPage }) => (fullPage ? "100%" : "auto")};
  min-height: ${({ fullPage, height }) => (fullPage ? `${height}px` : "auto")};
  max-height: ${({ fullPage }) => (fullPage ? "auto" : "calc(100% - 32px)")};

  background: ${(props) => props.theme.palette.common.white};
  background-image: url(${getDecorationImageURL()});
  background-size: auto 120px;
  background-position: center bottom;
  background-repeat: repeat-x;
`;

const ModalCloseButton = styled.div<{ fullPage: boolean }>`
  align-items: center;
  background: ${(props) => props.theme.palette.common.white};
  border-radius: 16px;
  cursor: pointer;
  display: flex;
  height: 32px;
  justify-content: center;
  right: 8px;
  top: 8px;
  position: absolute;
  width: 32px;
  z-index: 10;

  &:hover {
    background: ${(props) => props.theme.palette.common.black};
    border: 2px solid ${(props) => props.theme.palette.common.white};

    > svg {
      fill: ${(props) => props.theme.palette.common.white};
    }
  }
`;
