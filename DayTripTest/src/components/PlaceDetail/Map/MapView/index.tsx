import React from 'react';
import {Image} from 'react-native-animatable';
import {styles} from './styles';

export function MapView({
  longitude,
  latitude,
}: {
  longitude: number;
  latitude: number;
}) {
  console.log('위도 : ', longitude, ' 경도 : ', latitude);
  return <Image source={require('@assets/map.jpeg')} style={styles.map} />;
}
