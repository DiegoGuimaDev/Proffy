---
to: src/pages/<%=name%>/styles.ts
---
import styled from 'styled-components';

export const Container = styled.div.attrs({
  id: 'page-<%=h.inflection.underscore(name).replace(/_/g,"-")%>',
})``;
