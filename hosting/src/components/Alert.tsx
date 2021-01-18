import React from 'react';
import styled from '../style/styled';
interface Props {
  title: string;
  message?: string;
  children?: any;
}

export const Alert: React.FC<Props> = ({ title, message, children }) => {
  return (
    <Container>
      <Title>{title}</Title>
      {message && <p>{message}</p>}

      {children}
    </Container>
  );
};

export default Alert;

const Container = styled.div`
  padding: 40px 32px 50px;
  max-width: 512px;
  text-align: center;
`;

const Title = styled.h4`
  text-transform: uppercase;
  margin: 0;
  margin-bottom: 20px;
  font-weight: bold;
  text-align: center;
  user-select: none;
`;
