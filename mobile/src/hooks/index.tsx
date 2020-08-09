import React from 'react';
import { ThemeProvider } from 'styled-components';
import { FavoritesProvider } from './Favorites';
import { ConnectionProvider } from './Connection';

import theme from '../theme';
import { TutorialProvider } from './Tutorial';
import { ClassesProvider } from './Classes';

const AppProvider: React.FC = ({ children }) => (
  <TutorialProvider>
    <ThemeProvider theme={theme}>
      <ClassesProvider>
        <ConnectionProvider>
          <FavoritesProvider>{children}</FavoritesProvider>
        </ConnectionProvider>
      </ClassesProvider>
    </ThemeProvider>
  </TutorialProvider>
);

export default AppProvider;
