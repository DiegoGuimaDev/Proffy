import React from 'react';

import { Container, EmptyText } from './styles';

interface EmptyProps {
  message: string;
}

const Empty: React.FC<EmptyProps> = ({ message, children }) => {
  return (
    <Container>
      <EmptyText>{message}</EmptyText>
      {children}
    </Container>
  );
};

export default Empty;
