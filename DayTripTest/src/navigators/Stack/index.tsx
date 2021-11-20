import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginScreen, PlaceDetail} from '@screens/index';
import {RootMainStack} from './types';

export const Stack = createStackNavigator<RootMainStack>();

export function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PlaceDetail"
        component={PlaceDetail}
        options={{headerTitle: '', headerBackTitleVisible: false}}
      />
    </Stack.Navigator>
  );
}
