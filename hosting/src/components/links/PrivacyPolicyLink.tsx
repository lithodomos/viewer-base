import React from "react";
import { UnstyledLink } from "../../styledComponents/UnstyledLink";
import { Container } from "./styledComponents/Container";
import { Text } from "./styledComponents/Text";

interface Props {
  color?: string;
  size?: number;
}

export const PrivacyPolicyLink: React.FC<Props> = (props) => {
  const color = props.color || "#fff";
  const size = props.size || 16;

  return (
    <Container>
      <UnstyledLink
        href={""}
        onClick={() => {
          window.alert("Not implemented");
        }}
      >
        <Text size={size} color={color} bold={false}>
          Privacy Policy
        </Text>
      </UnstyledLink>
    </Container>
  );
};
