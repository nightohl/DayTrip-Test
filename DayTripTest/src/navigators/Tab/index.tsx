import React from 'react';
import {View, StyleSheet} from 'react-native';
import {RootPlaceInfoTab} from './types';

//Tab Navigatior
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {DayLog, Map, Near, Curation} from '@screens/PlaceDetail/InfoTabs';
const Tab = createMaterialTopTabNavigator<RootPlaceInfoTab>();

export function PlaceInfoTab() {
  return (
    <View style={styles.rootContainer}>
      <Tab.Navigator
        screenOptions={{
          swipeEnabled: false,
          tabBarIndicatorStyle: {backgroundColor: 'white'},
          tabBarLabelStyle: {fontSize: 15, fontWeight: '500'},
        }}>
        <Tab.Screen
          name="DayLog"
          component={DayLog}
          options={{title: '데이로그'}}
        />
        <Tab.Screen name="Map" component={Map} options={{title: '위치'}} />
        <Tab.Screen name="Near" component={Near} options={{title: '주변'}} />
        <Tab.Screen
          name="Curation"
          component={Curation}
          options={{title: '큐레이션'}}
        />
      </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {flex: 1, backgroundColor: 'blue'},
});
