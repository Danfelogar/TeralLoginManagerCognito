import {StyleSheet} from 'react-native';
import {IStylesCustom} from './types';

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
  });
}
