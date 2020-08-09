import React, { createContext, useCallback, useContext, useMemo } from 'react';
import { api } from '../services/api';

export interface GetClassesParams {
  subject: string;
  weekDay: number;
  time: string;
}

export interface ClassItem {
  id: string;
  subject: string;

  cost: number;

  user: {
    id: string;
    avatar: string;
    name: string;
    whatsapp: string;
    bio: string;
  };
}

interface ClassesContextData {
  search(search: GetClassesParams): Promise<ClassItem[]>;
}

const ClassesContext = createContext({} as ClassesContextData);

const ClassesProvider: React.FC = ({ children }) => {
  const search = useCallback(async (params: GetClassesParams) => {
    return api
      .get<ClassItem[]>('classes', {
        params,
      })
      .then(response => response.data);
  }, []);

  const value = useMemo(() => ({ search }), [search]);

  return (
    <ClassesContext.Provider value={value}>{children}</ClassesContext.Provider>
  );
};

function useClasses(): ClassesContextData {
  const context = useContext(ClassesContext);

  if (!context) {
    throw new Error('useClasses must be used within a ClassesProvider');
  }

  return context;
}

export { useClasses, ClassesProvider };
