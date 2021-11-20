import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  rootContainer: {flex: 1},
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
  },
  logoContainer: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  logoImg: {width: 130, height: 130},
  text: {
    marginTop: 5,
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
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
  bottomContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: '12%',
    width: '100%',
  },
  googleImage: {width: 25, height: 25, position: 'absolute', left: 20},
  policyText: {color: 'white', marginTop: 20, fontSize: 12},
  loading: {
    position: 'absolute',
    width: '100%',
    height: 250, //150
  },
});
