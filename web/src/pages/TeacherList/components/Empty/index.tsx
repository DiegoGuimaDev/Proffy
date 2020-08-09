import React from 'react';

import { Container } from './styles';

const Empty: React.FC = () => {
  return (
    <Container>
      <p>Nenhuma aula encontrada, tente buscar em outro dia ou horário</p>
    </Container>
  );
};

export default Empty;
