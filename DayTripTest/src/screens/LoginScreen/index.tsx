import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LottieView from 'lottie-react-native';

import {styles} from './styles';

export function LoginScreen() {
  const [isLoading, setIsLoading] = useState(false);

  const onLoginBtnPress = () => {
    setIsLoading(!isLoading);
    console.log('loginBtn Pressed');
  };

  return (
    <Animatable.View animation="fadeIn" style={styles.rootContainer}>
      <ImageBackground
        source={require('@assets/main.jpg')}
        resizeMode="cover"
        style={styles.backgroundImage}>
        {/* 센터 로고 */}
        <Animatable.View
          animation="fadeIn"
          delay={250}
          style={styles.logoContainer}>
          <Image source={require('@assets/logo.png')} style={styles.logoImg} />
          <Text style={styles.text}>일상 속 떠나는 하루여행</Text>
        </Animatable.View>

        {/* 하단 로그인 버튼 */}
        <View style={styles.bottomContainer}>
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
          <Text style={styles.policyText}>
            로그인함으로써 OurSpace Inc.의 정책 및 약관에 동의합니다.
          </Text>
        </View>
        {isLoading && (
          <>
            <LottieView
              source={require('@assets/loading/1.json')}
              autoPlay
              loop
              style={styles.loading}
            />
          </>
        )}
      </ImageBackground>
    </Animatable.View>
  );
}
