import {Platform, StyleSheet} from 'react-native';
import {IStylesLogin} from './types';
import {heightFullScreen, widthFullScreen} from '../../utils';

export default function stylesLogin(props: IStylesLogin) {
  const {colors} = props;
  return StyleSheet.create({
    containerLogin: {
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
      height: '100%',
      flexDirection: 'column',
      alignItems: 'center',
      padding: 10,
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
    containerUserLogo: {
      marginTop: Platform.OS === 'ios' ? 135 : 80,
      marginBottom: 75,
      width: widthFullScreen * 0.35,
      height: heightFullScreen * 0.2,
      resizeMode: 'cover',
    },
  });
}
