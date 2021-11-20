import React from 'react';
import {View, Text} from 'react-native';

//Tab Navigatior
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();

const Tab1 = () => {
  return (
    <View style={{flex: 1}}>
      <Text>tab 1</Text>
    </View>
  );
};

const Tab2 = () => {
  return (
    <View style={{flex: 1}}>
      <Text>tab 2</Text>
    </View>
  );
};

export function PlaceInfoTab() {
  return (
    <View style={{flex: 1, backgroundColor: 'blue'}}>
      <Tab.Navigator>
        <Tab.Screen name="탭1" component={Tab1} />
        <Tab.Screen name="탭2" component={Tab2} />
      </Tab.Navigator>
    </View>
  );
}
