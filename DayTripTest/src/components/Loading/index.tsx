import React from 'react';
import LottieView from 'lottie-react-native';
import {styles} from './styles';
export function Loading() {
  return (
    <LottieView
      source={require('@assets/loading/1.json')}
      autoPlay
      loop
      style={styles.loading}
    />
  );
}
