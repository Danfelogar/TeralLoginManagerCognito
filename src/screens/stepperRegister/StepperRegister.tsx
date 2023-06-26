import React, {useContext} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Platform,
  Image,
  ScrollView,
} from 'react-native';

import {ThemeContext} from '../../context';

import stylesStepperRegister from './stylesStepperRegister';
import {StatusBar} from 'react-native';
import useStepperRegister from './useStepperRegister';
import {Button, InputPhone} from '../../components';
import {FormProvider} from 'react-hook-form';
import {StepperForm} from './components';

export default function StepperRegister() {
  //global context
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  //customStyles
  const {
    containerStepperRegister,
    containerBackgroundPoints,
    cardWrapper,
    wrapperSteppers,
    containerStepperActive,
    containerStepperInactive,
    stepperText,
    stepper1Content,
    infoPhoneText,
    infoPhoneText1,
    btnAction,
    textBtn,
  } = stylesStepperRegister({
    colors,
  });
  //logic
  const {
    //state
    stepperState,
    arrSteps,
    isLoading,
    isPasswordSecret,
    isPasswordSecret2,
    //methods
    formMethods,
    //functions
    changeStepper,
    getGoBack,
    changePasswordSecret2,
    changePasswordSecret,
    handleSubmitRegister,
  } = useStepperRegister();
  return (
    <View style={containerStepperRegister}>
      <SafeAreaView>
        <StatusBar
          backgroundColor={colors.purple}
          showHideTransition="slide"
          barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'}
        />
        <Image
          source={require('../../assets/login/backgroundPointers.png')}
          style={containerBackgroundPoints}
        />
        <ScrollView
          horizontal={false}
          pagingEnabled
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}>
          <View style={cardWrapper}>
            <View style={wrapperSteppers}>
              {arrSteps.map((item, idx) => (
                <View
                  key={idx}
                  style={
                    item <= stepperState
                      ? containerStepperActive
                      : containerStepperInactive
                  }>
                  <Text style={stepperText}>{item}</Text>
                </View>
              ))}
            </View>
            {stepperState === 1 && (
              <View style={stepper1Content}>
                <Image
                  source={require('../../assets/stepperes/phone.png')}
                  style={{resizeMode: 'cover', marginBottom: 20}}
                />
                <Text style={infoPhoneText}>
                  Ingresa tu número de celular para continuar
                </Text>
                <Text style={{...infoPhoneText, marginBottom: 6}}>
                  ¿Ya tienes cuenta?
                </Text>
                <InputPhone />
                <Text onPress={getGoBack} style={infoPhoneText1}>
                  Iniciar sesión con usuario y contraseña
                </Text>
                <Button
                  buttonStyle={btnAction}
                  isLoading={isLoading}
                  onPress={() => {
                    changeStepper(2);
                  }}
                  activeOpacity={0.9}
                  textContent={<Text style={textBtn}>CONTINUAR</Text>}
                />
              </View>
            )}
            {stepperState === 2 && (
              <View style={{width: '100%'}}>
                <FormProvider {...formMethods}>
                  <StepperForm
                    changePasswordSecret={changePasswordSecret}
                    changePasswordSecret2={changePasswordSecret2}
                    getCreateAccount={handleSubmitRegister}
                    isLoading={isLoading}
                    isPasswordSecret={isPasswordSecret}
                    isPasswordSecret2={isPasswordSecret2}
                  />
                </FormProvider>
              </View>
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
