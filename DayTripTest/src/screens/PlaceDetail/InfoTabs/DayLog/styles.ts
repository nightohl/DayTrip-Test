import {StyleSheet, Dimensions} from 'react-native';

const Width = Dimensions.get('window').width;
export const styles = StyleSheet.create({
  rootContainer: {backgroundColor: 'white'},
  writerInfoRootContainer: {
    margin: 15,
    marginBottom: 10,
    flexDirection: 'row',
    width: Width,
  },
  profile: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  name: {
    width: 120,
    height: 18,
    borderRadius: 4,
  },
  writeDate: {
    width: 120,
    height: 18,
    borderRadius: 4,
    alignSelf: 'flex-end',
    textAlign: 'right',
    fontSize: 13,
    fontWeight: '300',
  },
  writeInfoContainer: {
    flex: 1,
    marginBottom: 8,
    marginLeft: 15,
    marginRight: 40,
    justifyContent: 'flex-end',
  },
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
  descriptionContainer: {
    flex: 1,
    marginTop: 10,
    marginLeft: 15,
    marginRight: 15,
  },
  description: {lineHeight: 20, fontSize: 13},
  textSkeleton: {
    marginLeft: 15,
    marginTop: 3,
    height: 13,
    width: 200,
  },
});
