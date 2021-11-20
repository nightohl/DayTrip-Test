import React from 'react';
import {View, Text} from 'react-native';
import {DayLogProps} from '@navigators/Tab/types';

export function DayLog({}: DayLogProps) {
  return (
    <View style={{flex: 1}}>
      <Text>tab 1</Text>
    </View>
  );
}
