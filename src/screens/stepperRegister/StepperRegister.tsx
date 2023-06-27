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
import {Button, InputOTP, InputPhone} from '../../components';
import {FormProvider} from 'react-hook-form';
import {StepperForm} from './components';
import {KeyboardAvoidingView} from 'react-native';

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
    stepper2Content,
    congratulationText,
    stepper4Content,
    questionText,
    btnActionOutline,
    btnActionOutlineText,
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
    checkTerms,
    checkTerms2,
    otpVal,
    phoneVal,
    //methods
    formMethods,
    setOtpVal,
    //functions
    changeStepper,
    getGoBack,
    changePasswordSecret2,
    changePasswordSecret,
    validatePhoneAndParse,
    handleSubmitRegister,
    changeCheckTerms,
    changeCheckTerms2,
    otpCodeVerification,
    changePhoneVal,
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
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <ScrollView
            horizontal={false}
            // pagingEnabled
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}>
            <View style={{flex: 1}}>
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
                    <InputPhone
                      placeHolder="Teléfono"
                      onChange={changePhoneVal}
                      value={phoneVal}
                    />
                    <Text style={{...infoPhoneText, marginBottom: 6}}>
                      ¿Ya tienes cuenta?
                    </Text>
                    <Text onPress={getGoBack} style={infoPhoneText1}>
                      Iniciar sesión con usuario y contraseña
                    </Text>
                    <Button
                      buttonStyle={{
                        ...btnAction,
                        marginTop: 60,
                        backgroundColor: `${
                          phoneVal?.length! < 5
                            ? colors.grayLight4
                            : colors.purpleLight
                        }`,
                      }}
                      isLoading={isLoading}
                      onPress={validatePhoneAndParse}
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
                        changeCheckTerms={changeCheckTerms}
                        changeCheckTerms2={changeCheckTerms2}
                        checkTerms={checkTerms}
                        checkTerms2={checkTerms2}
                      />
                    </FormProvider>
                  </View>
                )}
                {stepperState === 3 && (
                  <View style={stepper2Content}>
                    <View
                      style={{
                        width: '100%',
                        paddingHorizontal: 18,
                        marginBottom: 45,
                      }}>
                      <Text style={congratulationText}>
                        ¡TU CUENTA HA SIDO CREADA!
                      </Text>
                    </View>
                    <Image
                      source={require('../../assets/stepperes/userPhoto.png')}
                      style={{resizeMode: 'cover', marginBottom: 30}}
                    />
                    <Button
                      buttonStyle={btnAction}
                      isLoading={isLoading}
                      onPress={() => {
                        changeStepper(4);
                      }}
                      activeOpacity={0.9}
                      textContent={
                        <Text style={textBtn}>COMPLETAR PERFIL</Text>
                      }
                    />
                  </View>
                )}
                {stepperState === 4 && (
                  <View style={stepper4Content}>
                    <Image
                      source={require('../../assets/stepperes/phoneText.png')}
                      style={{resizeMode: 'cover', marginBottom: 26}}
                    />
                    <InputOTP setValue={setOtpVal} value={otpVal} />
                    <Text style={questionText}>¿No recibió el código?</Text>
                    <Button
                      buttonStyle={btnActionOutline}
                      isLoading={isLoading}
                      onPress={() => {}}
                      activeOpacity={0.9}
                      textContent={
                        <Text style={btnActionOutlineText}>REENVIAR</Text>
                      }
                    />
                    <Button
                      buttonStyle={{
                        ...btnAction,
                        marginTop: 60,
                        backgroundColor: `${
                          otpVal.length < 4
                            ? colors.grayLight4
                            : colors.purpleLight
                        }`,
                      }}
                      isLoading={isLoading}
                      onPress={otpCodeVerification}
                      activeOpacity={0.9}
                      textContent={<Text style={textBtn}>VERIFICAR</Text>}
                    />
                  </View>
                )}
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
}
