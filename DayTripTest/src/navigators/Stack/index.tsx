import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginScreen, PlaceDetail} from '@screens/index';
import {RootMainStack} from './types';

import {TopRightBtn} from '@components/TopRightBtn';

export const Stack = createStackNavigator<RootMainStack>();

export function MainStack() {
  return (
    <Stack.Navigator screenOptions={{headerTintColor: 'black'}}>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PlaceDetail"
        component={PlaceDetail}
        options={{
          headerTitle: '',
          headerBackTitleVisible: false,
          headerRight: () => <TopRightBtn />,
        }}
      />
    </Stack.Navigator>
  );
}
