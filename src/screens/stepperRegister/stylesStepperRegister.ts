import {StyleSheet, Platform} from 'react-native';
import {IStylesStepperRegister} from './types';
import {heightFullScreen, widthFullScreen} from '../../utils';

export default function stylesStepperRegister(props: IStylesStepperRegister) {
  const {colors} = props;
  return StyleSheet.create({
    containerStepperRegister: {
      flex: 1,
      position: 'relative',
      backgroundColor: colors.grayLight1,
      paddingHorizontal: Platform.OS === 'ios' ? 25 : 28,
      paddingVertical: Platform.OS === 'ios' ? 55 : 30,
    },
    containerBackgroundPoints: {
      position: 'absolute',
      width: widthFullScreen,
      height: heightFullScreen,
      resizeMode: 'cover',
    },
    cardWrapper: {
      backgroundColor: colors.white,
      borderRadius: 14,
      width: '100%',
      minHeight:
        Platform.OS === 'ios'
          ? heightFullScreen * 0.86
          : heightFullScreen * 0.85,
      //   height: '100%',
      flexDirection: 'column',
      paddingVertical: 10,
      paddingHorizontal: 25,
      marginBottom: 12,
      borderWidth: 1,
      borderColor: colors.grayLight1,
      shadowColor: colors.grayLight3,
      borderStyle: 'solid',
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.36,
      shadowRadius: 6.68,

      elevation: 11,
    },
    wrapperSteppers: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '100%',
      marginTop: 100,
      marginBottom: 70,
    },
    containerStepperActive: {
      paddingVertical: 11,
      paddingHorizontal: 25,
      borderRadius: 12,
      backgroundColor: colors.purpleLight,
      shadowColor: colors.purpleLight1,
      borderStyle: 'solid',
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.36,
      shadowRadius: 6.68,

      elevation: 11,
    },
    containerStepperInactive: {
      paddingVertical: 11,
      paddingHorizontal: 25,
      borderRadius: 12,
      opacity: 0.35,
      backgroundColor: colors.purpleLight,
      shadowColor: colors.purpleLight1,
      borderStyle: 'solid',
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.36,
      shadowRadius: 6.68,

      elevation: 11,
    },
    stepperText: {
      fontSize: 25.5,
      fontFamily: 'Teko-Medium',
      color: colors.white,
    },
    //STEP1
    stepper1Content: {
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
    },
    infoPhoneText: {
      fontSize: 24,
      paddingHorizontal: Platform.OS === 'ios' ? 40 : 18,
      textAlign: 'center',
      fontFamily: 'Teko-Medium',
      color: colors.grayDark1,
      marginBottom: 20,
    },
    infoPhoneText1: {
      fontSize: 22,
      paddingHorizontal: 8,
      textAlign: 'center',
      fontFamily: 'Teko-Regular',
      color: colors.purpleLight,
    },

    btnAction: {
      width: '100%',
      justifyContent: 'center',
      paddingHorizontal: '17%',
      paddingVertical: '5%',
      marginTop: 80,
      borderRadius: 11,
      backgroundColor: colors.purpleLight,
      borderWidth: 1,
      borderColor: colors.grayLight5,
    },

    textBtn: {
      fontSize: 22.5,
      textAlign: 'center',
      // fontWeight: '500',
      color: colors.white,
      fontFamily: 'Teko-Medium',
    },
    //STEP 2
  });
}
