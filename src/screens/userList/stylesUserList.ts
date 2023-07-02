import {Platform, StyleSheet} from 'react-native';
import {IStylesUserList} from './types';
import {heightFullScreen, widthFullScreen} from '../../utils';

export default function stylesUserList(props: IStylesUserList) {
  const {colors} = props;
  return StyleSheet.create({
    containerUserList: {
      flex: 1,
      position: 'relative',
      backgroundColor: colors.grayLight1,
      paddingHorizontal: Platform.OS === 'ios' ? 25 : 28,
      paddingVertical: Platform.OS === 'ios' ? 55 : 30,
      padding: 20,
    },
    containerBackgroundPoints: {
      position: 'absolute',
      width: widthFullScreen,
      height: heightFullScreen,
      resizeMode: 'cover',
    },
    btnLogout: {
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      backgroundColor: colors.orange,
      paddingVertical: 15,
      paddingHorizontal: 15,
    },
  });
}

export function cardUserStyles() {
  return StyleSheet.create({
    CardContent: {
      flex: 1,
      flexDirection: 'row',
      padding: 10,
      marginBottom: 10,
      //backgroundColor: 'rgba(255, 255,255, 0.8)',
      backgroundColor: '#FFF',
      borderRadius: 12,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    },
    contentStatus: {
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    btnStats: {
      paddingHorizontal: 12,
      paddingVertical: 5,
      borderRadius: 12,
    },
    contentPersonalData: {
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    imgCard: {width: 70, height: 70, borderRadius: 70, marginRight: 20 / 2},
    textFullName: {
      fontSize: 21,
      fontFamily: 'Teko-Bold',
      color: '#020202',
      width: '70%',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    },
    textStatus: {fontSize: 20, fontFamily: 'Teko-Regular', color: '#020202'},

    textStatus2: {fontSize: 19, fontFamily: 'Teko-Medium', color: '#020202'},
    textCC: {fontSize: 15, fontFamily: 'Teko-Medium', color: '#020202'},
    textEmail: {
      fontSize: 19,
      fontFamily: 'Teko-Light',
      color: '#020202',
    },
  });
}
