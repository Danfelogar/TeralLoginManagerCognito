import React, {useContext} from 'react';
import {
  View,
  StatusBar,
  SafeAreaView,
  Platform,
  Image,
  ScrollView,
} from 'react-native';
import {ThemeContext, UIContext} from '../../context';
import stylesLogin from './stylesLogin';
import useLogin from './useLogin';
import {FormProvider} from 'react-hook-form';
import {LoginForm} from './components';
import {Snackbar} from '../../components';

export default function Login() {
  //global context
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  const {isOpenTextError, changeStateTextError, changeSetTextError, textError} =
    useContext(UIContext);
  //customStyles
  const {
    containerLogin,
    containerBackgroundPoints,
    cardWrapper,
    containerUserLogo,
  } = stylesLogin({
    colors,
  });
  //logic
  const {
    //state
    isPasswordSecret,
    isLoading,
    //methods
    formMethods,
    //functions
    getStepperRegister,
    changePasswordSecret,
    handleSubmitLogin,
  } = useLogin();
  return (
    <View style={containerLogin}>
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
        <View style={cardWrapper}>
          <ScrollView
            contentContainerStyle={{flexGrow: 1, alignItems: 'center'}}
            pagingEnabled
            horizontal={false}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}>
            <Image
              source={require('../../assets/login/userLogo.png')}
              style={containerUserLogo}
            />
            <View style={{width: '100%'}}>
              <FormProvider {...formMethods}>
                <LoginForm
                  changePasswordSecret={changePasswordSecret}
                  isPasswordSecret={isPasswordSecret}
                  handleSubmitForm={handleSubmitLogin}
                  isLoading={isLoading}
                  getStepperRegister={getStepperRegister}
                />
              </FormProvider>
            </View>
          </ScrollView>
        </View>
        {isOpenTextError && textError && (
          <Snackbar
            bgColor={colors.red}
            styled={{
              bottom: 0,
            }}
            isOpen={isOpenTextError}
            msmText={textError}
            handleChangeSnackbar={() => {
              changeStateTextError();
              changeSetTextError(null);
            }}
          />
        )}
      </SafeAreaView>
    </View>
  );
}
