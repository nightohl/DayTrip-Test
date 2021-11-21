import React, {useState} from 'react';
import {View, ImageBackground} from 'react-native';
import * as Animatable from 'react-native-animatable';

import {styles} from './styles';
import {LoginProps} from '@navigators/Stack/types';

import {Logo, LoginBtn, TermsAndPolicy} from '@components/LoginScreen';
import {Loading} from '@components/Loading';

export function LoginScreen({navigation}: LoginProps) {
  const [isLoading, setIsLoading] = useState(false);

  const onLoginBtnPress = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigation.navigate('PlaceDetail');
    }, 1000);
    console.log('loginBtn Pressed');
  };

  return (
    <Animatable.View animation="fadeIn" style={styles.rootContainer}>
      <ImageBackground
        source={require('@assets/main.jpg')}
        resizeMode="cover"
        style={styles.backgroundImage}>
        {/* 센터 로고 */}
        <Logo />

        {/* 하단 로그인 버튼 */}
        <View style={styles.bottomContainer}>
          <LoginBtn onLoginBtnPress={onLoginBtnPress} />
          <TermsAndPolicy />
        </View>

        {/* 로딩 indicator */}
        {isLoading && <Loading />}
      </ImageBackground>
    </Animatable.View>
  );
}
