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
    },
    containerBackgroundPoints: {
      position: 'absolute',
      width: widthFullScreen,
      height: heightFullScreen,
      resizeMode: 'cover',
    },
  });
}
