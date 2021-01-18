import React from "react";
import styled from "../../style/styled";
import { Container } from "./styledComponents/Container";

interface Props {
  color?: string;
}

export const ContactUsLink: React.FC<Props> = (props) => {
  const color = props.color || "#fff";

  return (
    <Container>
      <a href="mailto:abc@email.com">
        <Text color={color}>abc@email.com</Text>
      </a>
    </Container>
  );
};

const Text = styled.p`
  margin: 0;
  color: ${(props) => props.color};
  user-select: none;
`;
