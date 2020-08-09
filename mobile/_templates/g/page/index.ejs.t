---
to: src/pages/<%=name%>/index.tsx
---
import React from 'react';
import { Text } from 'react-native';

import { Container } from './styles';

const <%=name%>: React.FC = () => {
  return (
    <Container>
      <Text><%=name%><Text>
    </Container>
  );
};

export default <%=name%>;
