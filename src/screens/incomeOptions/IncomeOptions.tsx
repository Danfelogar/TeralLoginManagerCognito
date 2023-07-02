import {View, Text, SafeAreaView, StatusBar, Image} from 'react-native';
import {ThemeContext} from '../../context';
import React, {useContext} from 'react';
import stylesIncomeOptions from './stylesIncomeOptions';
import {Button} from '../../components';
import useIncomeOptions from './useIncomeOptions';

export default function IncomeOptions(): JSX.Element {
  //global context
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  //customStyles
  const {
    containerIncomeOptions,
    containerBackgroundPoints,
    containerBackgroundOpacity,
    contentActions,
    contentOptionsBtn,
    btnAction,
    textBtn,
  } = stylesIncomeOptions({colors});
  //logic
  const {getLogin, getRegister} = useIncomeOptions();
  return (
    <View style={containerIncomeOptions}>
      <SafeAreaView>
        <StatusBar
          backgroundColor={colors.purple}
          showHideTransition="slide"
          barStyle="light-content"
        />
        <Image
          source={require('../../assets/incomeOptions/backgroundPoint.png')}
          style={containerBackgroundPoints}
        />
        <View style={contentActions}>
          <Image
            source={require('../../assets/incomeOptions/opacityBackground.png')}
            style={containerBackgroundOpacity}
          />
          <Image
            source={require('../../assets/incomeOptions/mainLogo.png')}
            style={{resizeMode: 'contain', marginTop: 310}}
          />
          <View style={contentOptionsBtn}>
            <Button
              buttonStyle={{...btnAction, backgroundColor: colors.orange}}
              onPress={getLogin}
              activeOpacity={0.9}
              textContent={
                <Text
                  style={{
                    ...textBtn,
                    color: colors.white,
                  }}>
                  INICIAR SESIÓN
                </Text>
              }
            />
            <Button
              buttonStyle={{...btnAction, backgroundColor: colors.white}}
              onPress={getRegister}
              activeOpacity={0.9}
              textContent={
                <Text
                  style={{
                    ...textBtn,
                    color: colors.purple,
                  }}>
                  REGISTRO
                </Text>
              }
            />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}
