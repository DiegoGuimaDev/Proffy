import React, { createContext, useContext, useMemo, useCallback } from 'react';

import { api } from '../services/api';

interface ConnectionContextData {
  getTotalConnections(): Promise<number>;
  createConnection(idUser: string): Promise<void>;
}

const ConnectionContext = createContext({} as ConnectionContextData);

const ConnectionProvider: React.FC = ({ children }) => {
  const getTotalConnections = useCallback(async () => {
    return api
      .get<{ total: number }>('connections')
      .then(response => response.data.total);
  }, []);

  const createConnection = useCallback(async (idUser: string) => {
    api.post('connections', {
      idUser,
    });
  }, []);

  const value = useMemo(() => ({ getTotalConnections, createConnection }), [
    getTotalConnections,
    createConnection,
  ]);

  return (
    <ConnectionContext.Provider value={value}>
      {children}
    </ConnectionContext.Provider>
  );
};

function useConnection(): ConnectionContextData {
  const context = useContext(ConnectionContext);

  if (!context) {
    throw new Error('useConnection must be used within a ConnectionProvider');
  }

  return context;
}

export { useConnection, ConnectionProvider };
