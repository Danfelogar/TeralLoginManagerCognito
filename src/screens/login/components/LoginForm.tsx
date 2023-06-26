import {useContext} from 'react';
import {View, Platform, Text} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {ThemeContext} from '../../../context';
import {useFormContext} from 'react-hook-form';
import {ICredentialsLogin} from '../../../model';
import stylesComponents from './stylesComponents';

import IconIonicons from 'react-native-vector-icons/Ionicons';
import {Button, InputGeneric} from '../../../components';
import {heightFullScreen} from '../../../utils';

interface Props {
  //   handleSubmitForm: (formData: ICredentialsLogin) => Promise<void>;
  handleSubmitForm: (formData: ICredentialsLogin) => void;
  isPasswordSecret: boolean;
  changePasswordSecret: () => void;
  isLoading: boolean;
  getStepperRegister: () => void;
}

export default function LoginForm({
  handleSubmitForm,
  isPasswordSecret,
  changePasswordSecret,
  isLoading,
  getStepperRegister,
}: Props) {
  //global context
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  //controller
  const {control, handleSubmit: onSubmit} = useFormContext<ICredentialsLogin>();

  //styles
  const {contentInput, btnAction, textBtn, textForgotPassword, textRegister} =
    stylesComponents();
  return (
    <KeyboardAwareScrollView
      enableOnAndroid={true}
      extraScrollHeight={Platform.OS === 'android' ? 10 : -70}
      extraHeight={Platform.OS === 'android' ? 20 : 0}
      enableAutomaticScroll={true}>
      <View style={contentInput}>
        <InputGeneric
          control={control}
          name={'email'}
          borderColor={colors.grayLight5}
          placeholder="Nickname o email"
          keyboardType="default"
          placeholderTextColor={colors.grayLight3}
          inputColor={colors.black}
          autoCorrect
        />
      </View>
      <View style={contentInput}>
        <InputGeneric
          control={control}
          name={'password'}
          borderColor={colors.grayLight5}
          lastIcon={
            <IconIonicons
              onPress={changePasswordSecret}
              name={isPasswordSecret ? 'eye' : 'eye-off'}
              size={heightFullScreen / 34}
              color={colors.grayLight3}
            />
          }
          placeholder="Contraseña"
          isSecretText={isPasswordSecret}
          placeholderTextColor={colors.grayLight3}
          inputColor={colors.black}
          autoCorrect
        />
      </View>
      <Text style={{...textForgotPassword, color: colors.orange}}>
        ¿Olvidaste tu contraseña?
      </Text>
      <Text style={{...textRegister, color: colors.grayDark}}>
        Aun no tienes cuenta,{' '}
        <Text
          onPress={getStepperRegister}
          style={{
            ...textRegister,
            color: colors.purpleDark,
            textDecorationColor: colors.purpleDark,
            textDecorationLine: 'underline',
            textDecorationStyle: 'solid',
          }}>
          Registrate.
        </Text>
      </Text>
      <Button
        buttonStyle={{
          ...btnAction,
          backgroundColor: colors.purpleLight,
          borderWidth: 1,
          borderColor: colors.grayLight5,
        }}
        isLoading={isLoading}
        onPress={onSubmit(handleSubmitForm)}
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
    </KeyboardAwareScrollView>
  );
}
