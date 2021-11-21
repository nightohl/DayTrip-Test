import {StyleSheet, Dimensions} from 'react-native';

const Width = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  map: {width: Width * 0.9, height: Width * 0.9, marginTop: 10},
});
