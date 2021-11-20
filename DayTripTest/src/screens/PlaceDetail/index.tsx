import React from 'react';
import {View, Text} from 'react-native';

import {PlaceInfoTab} from '@navigators/Tab';
import {PlaceDetailProps} from '@navigators/Stack/types';

export function PlaceDetail({}: PlaceDetailProps) {
  return (
    <View style={{flex: 1}}>
      <Text>hi</Text>
      <PlaceInfoTab />
    </View>
  );
}
