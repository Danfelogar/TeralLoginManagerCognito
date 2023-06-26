import {StyleSheet} from 'react-native';
import {heightFullScreen} from '../../../utils';

export default function stylesComponents() {
  return StyleSheet.create({
    contentInput: {
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      maxHeight: heightFullScreen * 0.5,
      marginBottom: 22,
    },
    btnAction: {
      width: '100%',
      justifyContent: 'center',
      paddingHorizontal: '17%',
      paddingVertical: '5%',
      marginTop: 80,
      borderRadius: 11,
    },

    textBtn: {
      fontSize: 22.5,
      textAlign: 'center',
      // fontWeight: '500',
      fontFamily: 'Teko-Medium',
    },
    textForgotPassword: {
      marginTop: 12,
      fontSize: 19.5,
      textAlign: 'left',
      fontFamily: 'Teko-Light',
    },
    textRegister: {
      marginTop: 8,
      fontSize: 19.5,
      textAlign: 'left',
      fontWeight: '400',
      fontFamily: 'Teko-Light',
    },
  });
}
