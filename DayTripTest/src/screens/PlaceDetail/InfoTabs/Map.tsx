import React from 'react';
import {View, Text} from 'react-native';
import {MapProps} from '@navigators/Tab/types';

export function Map({}: MapProps) {
  return (
    <View style={{flex: 1}}>
      <Text>tab 1</Text>
    </View>
  );
}
