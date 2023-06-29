import {StyleSheet} from 'react-native';
import {IStylesCustom} from './types';
import {heightFullScreen} from '../../utils';

//input generic
export function inputGenericStyles(props: IStylesCustom) {
  const {colors} = props;
  return StyleSheet.create({
    wrapperStandard: {
      display: 'flex',
      flexDirection: 'column',
      // backgroundColor: 'orange',
    },
    contentInputGeneric: {
      display: 'flex',
      borderRadius: 10,
      backgroundColor: colors.grayLight2,
      paddingVertical: 6,
      paddingHorizontal: 10,
      width: '100%',
      borderWidth: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    contentInput: {
      display: 'flex',
      fontSize: 25.5,
      fontFamily: 'Teko-Regular',
      flexGrow: 1,
      height: '100%',
      padding: 2.5,
    },
    helperText: {
      fontSize: 15.2,
      fontFamily: 'Teko-Medium',
      paddingLeft: 10,
      // fontWeight: '400',
      color: '#ff4d4f',
    },
    //inputOTP
    cellContent: {
      justifyContent: 'center',
      alignItems: 'center',
      width: '15%',
      height: 75,
      overflow: 'hidden',
      backgroundColor: colors.grayLight,
      borderRadius: 13,
      borderWidth: 1,
      borderColor: colors.grayLight3,
      borderStyle: 'solid',
    },
    focusCell: {
      borderColor: colors.purple,
    },
    textCell: {
      fontSize: 34,
      fontFamily: 'Teko-Regular',
      color: colors.grayDark1,
    },
    //phoneInput
    wrapperPhoneInput: {
      flexDirection: 'row',
      width: '100%',
    },
    flagContent: {
      flexDirection: 'row',
      padding: 8,
      marginRight: 6,
      borderRadius: 15,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.grayLight2,
      borderColor: colors.grayLight5,
      borderWidth: 1,
      borderStyle: 'solid',
    },
    phoneContent: {
      flexGrow: 1,
      flexDirection: 'row',
      paddingHorizontal: 16,
      borderRadius: 15,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.grayLight2,
      borderColor: colors.grayLight5,
      borderWidth: 1,
      borderStyle: 'solid',
    },
    phoneCallingCountryCode: {
      paddingRight: 12,
      marginRight: 12,
      height: heightFullScreen * 0.053,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: colors.grayLight5,
      borderRightWidth: 2,
      borderStyle: 'solid',
    },
    textPhoneInput: {
      fontSize: 24.5,
      fontFamily: 'Teko-Medium',
      color: colors.grayDark1,
    },
    phoneInputContent: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
}
