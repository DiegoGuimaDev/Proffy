---
to: src/<% if (page != null){%><%='pages/'+page+'/'%><%}%>components/<%=name%>/index.tsx
---
import React from 'react';

import { Container } from './styles';

const <%=name%>: React.FC = () => {
  return (
    <Container><%=name%></Container>
  );
};

export default <%=name%>;
