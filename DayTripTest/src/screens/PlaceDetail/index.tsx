import React from 'react';
import {View, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/SimpleLineIcons';
import {styles} from './styles';

import {PlaceInfoTab} from '@navigators/Tab';
import {PlaceDetailProps} from '@navigators/Stack/types';

export function PlaceDetail({}: PlaceDetailProps) {
  return (
    <>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>더반올가닉</Text>
        <View style={styles.subInfo}>
          <Ionicons name="location-pin" size={15} />
          <Text style={styles.infoText}>경기도 | 이천시</Text>
          <Text style={styles.infoText}>카페</Text>
        </View>
      </View>
      <PlaceInfoTab />
    </>
  );
}
