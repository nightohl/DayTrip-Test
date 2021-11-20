import React from 'react';
import {View, Text} from 'react-native';
import {NearProps} from '@navigators/Tab/types';

export function Near({}: NearProps) {
  return (
    <View style={{flex: 1}}>
      <Text>tab 1</Text>
    </View>
  );
}
