import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  titleContainer: {padding: 20, backgroundColor: 'white'},
  title: {
    fontSize: 25,
    fontWeight: '600',
    letterSpacing: 2,
  },
  subInfo: {flexDirection: 'row', alignItems: 'center', marginTop: 10},
  infoText: {marginLeft: 5},
  skeletonTitle: {width: 200, height: 30},
  skeletonSubInfo1: {width: 50, height: 15, marginRight: 10},
  skeletonSubInfo2: {width: 100, height: 15, marginRight: 10},
});
