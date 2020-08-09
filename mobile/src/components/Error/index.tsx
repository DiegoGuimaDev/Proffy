import React from 'react';

import { Container, ErrorText } from './styles';

const Error: React.FC = () => {
  return (
    <Container>
      <ErrorText>
        Ooops, não consegui buscar os Proffys, verifique sua conexão e espere
        alguns instantes
      </ErrorText>
    </Container>
  );
};

export default Error;
