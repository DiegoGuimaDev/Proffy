import React from 'react';
import { LovProvider } from './Lov';

const AppProvider: React.FC = ({ children }) => (
  <LovProvider>{children}</LovProvider>
);

export default AppProvider;
