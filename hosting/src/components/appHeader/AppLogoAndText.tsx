import React from "react";
import styled from "../../style/styled";
import {
  SCREEN_WIDTH_BREAK_SMALL,
  HEADER_BUTTON_SIZE,
} from "../../style/SIZES";
import { getLogo } from "../../branding/utils/getLogo";

interface Props {
  size?: number;
  color?: string;
}

export const AppLogoAndText: React.FC<Props> = (props) => {
  const size = props.size || HEADER_BUTTON_SIZE;
  const color = props.color || "#fff";
  const invert = props.color === "#000" ? 1 : 0;
  const { url, text } = getLogo();

  return (
    <Container>
      <Image alt={text} src={url} size={size} invert={invert} />
      <Text size={size} color={color}>
        {text}
      </Text>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  white-space: nowrap;
  align-items: center;
  z-index: 1000;
  cursor: pointer;
  user-select: none;
`;

const Text = styled.p<{ size: number; color: string }>`
  color: ${(props) => props.color};
  text-transform: uppercase;
  font-size: ${(props) => props.size}px;
  margin-left: 10px;
  user-select: none;
`;

const Image = styled.img<{ size: number; invert: number }>`
  filter: invert(${(props) => props.invert});
  height: ${(props) => props.size / 0.6}px;

  @media only screen and (max-width: ${SCREEN_WIDTH_BREAK_SMALL}px) {
    height: ${(props) => props.size}px;
  }
`;
