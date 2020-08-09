import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

interface TutorialContextData {
  isReady: boolean;
  isFirstView: boolean;
}

const TutorialContext = createContext({} as TutorialContextData);

const TutorialProvider: React.FC = ({ children }) => {
  const [isReady, setIsReady] = useState(false);

  const [isFirstView, setIsFirstView] = useState(false);

  useEffect(() => {
    async function loadStorageData(): Promise<void> {
      const storageData = await AsyncStorage.getItem('first-view');
      const result = storageData === 'true';
      AsyncStorage.setItem('first-view', 'true');
      setIsFirstView(result);
      setIsReady(true);
    }
    loadStorageData();
  }, []);

  const value = useMemo(() => ({ isReady, isFirstView }), [
    isReady,
    isFirstView,
  ]);

  return (
    <TutorialContext.Provider value={value}>
      {children}
    </TutorialContext.Provider>
  );
};

function useTutorial(): TutorialContextData {
  const context = useContext(TutorialContext);

  if (!context) {
    throw new Error('useTutorial must be used within a TutorialProvider');
  }

  return context;
}

export { useTutorial, TutorialProvider };
