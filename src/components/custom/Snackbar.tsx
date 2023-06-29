import {Platform, View} from 'react-native';
import React from 'react';
import {Snackbar as SnackbarComponent} from 'react-native-paper';

import {ISnackbarError} from './types';

export default function Snackbar({
  msmText,
  isOpen,
  handleChangeSnackbar,
  styled,
  bgColor,
}: ISnackbarError): JSX.Element {
  return (
    <View>
      <SnackbarComponent
        // style={{backgroundColor: '#ff4d4f'}}
        style={{backgroundColor: bgColor}}
        wrapperStyle={
          styled
            ? {...styled}
            : {
                bottom: Platform.OS === 'ios' ? 93 : 60,
              }
        }
        visible={isOpen}
        duration={3000}
        onDismiss={() => handleChangeSnackbar()}>
        {msmText}
      </SnackbarComponent>
    </View>
  );
}
