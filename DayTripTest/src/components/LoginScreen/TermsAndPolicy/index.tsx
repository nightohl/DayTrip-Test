import React from 'react';
import {Text} from 'react-native';
import {styles} from './styles';

export function TermsAndPolicy() {
  return (
    <Text style={styles.policyText}>
      로그인함으로써 OurSpace Inc.의 정책 및 약관에 동의합니다.
    </Text>
  );
}
