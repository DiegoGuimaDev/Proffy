import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import OnBoardingGiveClasses from '../pages/OnBoardingGiveClasses';
import OnBoardingStudy from '../pages/OnBoardingStudy';

const { Navigator, Screen } = createStackNavigator();

const OnBoardingSlide: React.FC = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="OnBoardingStudy" component={OnBoardingStudy} />
      <Screen name="OnBoardingGiveClasses" component={OnBoardingGiveClasses} />
    </Navigator>
  );
};

export default OnBoardingSlide;
