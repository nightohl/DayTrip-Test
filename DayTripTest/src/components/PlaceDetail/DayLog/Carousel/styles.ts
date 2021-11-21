import {StyleSheet, Dimensions} from 'react-native';

const Width = Dimensions.get('window').width;
export const styles = StyleSheet.create({
  carousel: {
    marginLeft: 15,
    height: Width,
    // backgroundColor: 'yellow',
  },
  carouselImg: {
    width: Width * 0.9,
    height: Width,
    backgroundColor: 'grey',
    marginRight: 15,
    borderRadius: 7,
  },
});
