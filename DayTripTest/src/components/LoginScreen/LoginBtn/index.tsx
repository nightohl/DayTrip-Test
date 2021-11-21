import React from 'react';
import {Text, Image, TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {styles} from './styles';

type Props = {
  onLoginBtnPress: () => void;
};
export function LoginBtn({onLoginBtnPress}: Props) {
  return (
    <Animatable.View animation="fadeInUp" style={styles.loginContainer}>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.loginBtn}
        onPress={onLoginBtnPress}>
        <Image
          source={require('@assets/google.jpeg')}
          style={styles.googleImage}
        />
        <Text style={styles.loginText}>구글로 로그인</Text>
      </TouchableOpacity>
    </Animatable.View>
  );
}
