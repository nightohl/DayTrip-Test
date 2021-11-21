import React from 'react';
import {Text, Image} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {styles} from './styles';
export function Logo() {
  return (
    <Animatable.View
      animation="fadeIn"
      delay={250}
      style={styles.logoContainer}>
      <Image source={require('@assets/logo.png')} style={styles.logoImg} />
      <Text style={styles.text}>일상 속 떠나는 하루여행</Text>
    </Animatable.View>
  );
}
