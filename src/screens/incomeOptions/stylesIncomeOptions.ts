import {StyleSheet} from 'react-native';
import {IStylesIncomeOptions} from './types';
import {heightFullScreen, widthFullScreen} from '../../utils';

export default function stylesIncomeOptions(props: IStylesIncomeOptions) {
  const {colors} = props;
  return StyleSheet.create({
    containerIncomeOptions: {
      flex: 1,
      position: 'relative',
      backgroundColor: colors.purple,
      // justifyContent: 'center',
      flexDirection: 'column',
      // alignItems: 'center',
      // resizeMode: 'cover',
      // backgroundRepeat: 'no-repeat',
      // backgroundImage: "url('../../assets/incomeOptions/backgroundPoint.png')",
    },
    containerBackgroundPoints: {
      position: 'absolute',
      width: widthFullScreen,
      height: heightFullScreen,
      resizeMode: 'cover',
    },
    contentActions: {
      width: '100%',
      height: '100%',

      position: 'relative',
      alignItems: 'center',
    },
    containerBackgroundOpacity: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      resizeMode: 'cover',
    },
    contentOptionsBtn: {
      marginTop: 150,
      width: '70%',
      alignItems: 'center',
    },

    btnAction: {
      width: '100%',
      justifyContent: 'center',
      paddingHorizontal: '17%',
      paddingVertical: '5%',
      marginTop: 18,
      borderRadius: 11,
    },

    textBtn: {
      fontSize: 22.5,
      textAlign: 'center',
      fontFamily: 'Teko-Medium',
    },
  });
}
