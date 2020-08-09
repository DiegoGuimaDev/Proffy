---
to: src/hooks/<%=name%>.tsx
---
import React, {createContext, useContext} from "react";


interface <%=name%>ContextData {

}

const <%=name%>Context = createContext({} as <%=name%>ContextData)

const <%=name%>Provider: React.FC = ({children}) => {

  return (
    <<%=name%>Context.Provider value={{}}>
      {children}
    </<%=name%>Context.Provider>
  )
}

function use<%=name%>(): <%=name%>ContextData {
  const context = useContext(<%=name%>Context);

  if(!context) {
    throw new Error('use<%=name%> must be used within a <%=name%>Provider');
  }

  return context;
}

export {
  use<%=name%>,
  <%=name%>Provider
}
