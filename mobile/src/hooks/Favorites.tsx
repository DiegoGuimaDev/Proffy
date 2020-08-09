import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from 'react';

import AsyncStorage from '@react-native-community/async-storage';
import { ClassItem } from './Classes';

interface FavoritesContextData {
  favorites: ClassItem[];
  isFavorite(id: string): boolean;
  toggleFavorite(lesson: ClassItem): boolean;
}

const FavoritesContext = createContext({} as FavoritesContextData);

const FavoritesProvider: React.FC = ({ children }) => {
  const [favorites, setFavorites] = useState<ClassItem[]>([]);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    async function loadStorageData(): Promise<void> {
      const storageData = await AsyncStorage.getItem('favorites');
      if (storageData) {
        setFavorites(JSON.parse(storageData));
      } else {
        setFavorites([]);
      }
      setIsReady(true);
    }
    loadStorageData();
  }, []);

  const isFavorite = useCallback(
    (id: string) => {
      return favorites.find(favorite => favorite.id === id) != null;
    },
    [favorites],
  );

  const toggleFavorite = useCallback(
    (lesson: ClassItem) => {
      const favoriteIndex = favorites.findIndex(
        favorite => favorite.id === lesson.id,
      );
      let result;
      if (favoriteIndex > -1) {
        setFavorites(favorites.filter((fav, index) => index !== favoriteIndex));
        result = false;
      } else {
        setFavorites([...favorites, lesson]);
        result = true;
      }
      AsyncStorage.setItem('favorites', JSON.stringify(favorites));
      return result;
    },
    [favorites],
  );

  const value = useMemo(
    () => ({
      favorites,
      isFavorite,
      toggleFavorite,
    }),
    [favorites, isFavorite, toggleFavorite],
  );

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};

function useFavorites(): FavoritesContextData {
  const context = useContext(FavoritesContext);

  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }

  return context;
}

export { useFavorites, FavoritesProvider };
