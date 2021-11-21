import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  loginText: {
    fontWeight: '500',
    fontSize: 15,
  },
  loginContainer: {
    width: '90%',
    height: 50,
  },
  loginBtn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 6,
    flexDirection: 'row',
  },

  googleImage: {width: 25, height: 25, position: 'absolute', left: 20},
});
