import React, { createContext, useContext, useMemo } from 'react';

export interface Lov {
  label: string;
  value: string;
}

interface LovContextData {
  lessons: Lov[];
  weekDays: Lov[];
}

const LovContext = createContext({} as LovContextData);

const LovProvider: React.FC = ({ children }) => {
  const lessons = useMemo(() => {
    return [
      { label: 'Todas', value: '' },
      { label: 'Artes', value: 'artes' },
      { label: 'Biologia', value: 'biologia' },
      { label: 'Matematica', value: 'matematica' },
      { label: 'Historia', value: 'historia' },
      { label: 'Programação', value: 'programacao' },
      { label: 'Nutrição', value: 'nutricao' },
      { label: 'Direito', value: 'direito' },
      { label: 'Pedagogia', value: 'pedagogia' },
    ];
  }, []);

  const weekDays = useMemo(() => {
    return [
      { label: 'Segunda-feira', value: '1' },
      { label: 'Terça-feira', value: '2' },
      { label: 'Quarta-feira', value: '3' },
      { label: 'Quinta-feira', value: '4' },
      { label: 'Sexta-feira', value: '5' },
      { label: 'Sabado', value: '6' },
      { label: 'Domingo', value: '0' },
    ];
  }, []);
  return (
    <LovContext.Provider value={{ lessons, weekDays }}>
      {children}
    </LovContext.Provider>
  );
};

function useLov(): LovContextData {
  const context = useContext(LovContext);

  if (!context) {
    throw new Error('useLov must be used within a LovProvider');
  }

  return context;
}

export { useLov, LovProvider };
