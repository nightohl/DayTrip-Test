import React from 'react';
import {View, Text} from 'react-native';
import {CurationProps} from '@navigators/Tab/types';

export function Curation({}: CurationProps) {
  return (
    <View style={{flex: 1}}>
      <Text>tab 1</Text>
    </View>
  );
}
