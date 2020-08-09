import React, { useMemo } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AppLoading } from 'expo';
import Landing from '../pages/Landing';
import GiveClasses from '../pages/GiveClasses';
import StudyTabs from './StudyTabs';
import OnBoardingSlide from './OnBoardingSlide';
import { useTutorial } from '../hooks/Tutorial';

const { Navigator, Screen } = createStackNavigator();

const AppStack: React.FC = () => {
  const { isReady, isFirstView } = useTutorial();
  const initialRoute = useMemo(() => {
    return isFirstView ? 'Landing' : 'OnBoarding';
  }, [isFirstView]);

  if (!isReady) return <AppLoading />;

  return (
    <NavigationContainer>
      <Navigator
        initialRouteName={initialRoute}
        screenOptions={{ headerShown: false }}
      >
        <Screen component={OnBoardingSlide} name="OnBoarding" />
        <Screen component={Landing} name="Landing" />
        <Screen component={GiveClasses} name="GiveClasses" />
        <Screen component={StudyTabs} name="Study" />
      </Navigator>
    </NavigationContainer>
  );
};

export default AppStack;
