import {StyleSheet, Dimensions} from 'react-native';

const Width = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  rootContainer: {flex: 1, padding: 20, backgroundColor: 'white'},
  title: {fontSize: 15, fontWeight: '600', marginBottom: 5},
  tag: {
    padding: 8,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: '#F5F5F7',
    marginRight: 15,
    borderRadius: 6,
  },
  tagContainer: {flexDirection: 'row', marginBottom: 30},
  copyAddr: {
    flex: 1,
    textAlign: 'right',
  },
  addr: {
    flexDirection: 'row',
    width: '100%',
  },
  map: {width: Width * 0.9, height: Width * 0.9, marginTop: 10},
});
