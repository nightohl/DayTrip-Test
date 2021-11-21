import React from 'react';
import {View, StyleSheet} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

export function TopRightBtn() {
  return (
    <View style={styles.rootContainer}>
      <Feather name="bookmark" size={25} style={styles.eachBtn} />
      <Feather name="upload" size={25} style={styles.eachBtn} />
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {flexDirection: 'row'},
  eachBtn: {marginRight: 20},
});
