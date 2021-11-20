import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {MainStack} from '@navigators/Stack';
export default function App() {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}
