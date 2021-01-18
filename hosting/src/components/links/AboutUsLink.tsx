import React from "react";
import { UnstyledLink } from "../../styledComponents/UnstyledLink";
import { Container } from "./styledComponents/Container";
import { Text } from "./styledComponents/Text";

interface Props {
  color?: string;
  size?: number;
  bold?: boolean;
}

export const AboutUsLink: React.FC<Props> = (props) => {
  const color = props.color || "#fff";
  const size = props.size || 16;
  const bold = props.bold;

  const handleClick = () => {
    window.alert("Not implemented");
  };

  return (
    <Container>
      <UnstyledLink href={""} onClick={handleClick}>
        <Text size={size} color={color} bold={bold}>
          ABOUT US
        </Text>
      </UnstyledLink>
    </Container>
  );
};
