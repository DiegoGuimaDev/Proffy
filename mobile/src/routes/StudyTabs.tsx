import React, { useMemo } from 'react';
import {
  createBottomTabNavigator,
  BottomTabBarOptions,
} from '@react-navigation/bottom-tabs';
import { useTheme } from 'styled-components';
import { Ionicons } from '@expo/vector-icons';
import TeacherList from '../pages/TeacherList';
import Favorites from '../pages/Favorites';

const { Navigator, Screen } = createBottomTabNavigator();

const StudyTabs: React.FC = () => {
  const theme = useTheme();

  const tabBarOptions: BottomTabBarOptions = useMemo(() => {
    return {
      style: {
        elevation: 0,
        shadowOpacity: 0,
      },
      tabStyle: {
        height: 64,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      },
      iconStyle: {
        flex: 0,
        height: 20,
        width: 20,
      },
      labelStyle: {
        fontFamily: 'Archivo_700Bold',
        fontSize: 13,
        marginLeft: 16,
      },
      inactiveBackgroundColor: theme.colorTabBarInactive,
      activeBackgroundColor: theme.colorTabBarActive,
      inactiveTintColor: theme.colorTabBarInactiveTint,
      activeTintColor: theme.colorTabBarActiveTint,
    };
  }, [theme]);

  return (
    <Navigator tabBarOptions={tabBarOptions}>
      <Screen
        options={{
          tabBarLabel: 'Proffys',
          tabBarIcon: ({ color, size }) => (
            <Ionicons size={size} color={color} name="ios-easel" />
          ),
        }}
        name="TeacherList"
        component={TeacherList}
      />
      <Screen
        options={{
          tabBarLabel: 'Favoritos',
          tabBarIcon: ({ color, size }) => (
            <Ionicons size={size} color={color} name="ios-heart" />
          ),
        }}
        name="Favorites"
        component={Favorites}
      />
    </Navigator>
  );
};

export default StudyTabs;
