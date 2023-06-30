import {View, Text, Platform, TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';
import {IRegister} from '../../../model';
import stylesStepperRegister from '../stylesStepperRegister';
import {useFormContext} from 'react-hook-form';
import {ThemeContext} from '../../../context';
import {Button, InputGeneric} from '../../../components';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import {heightFullScreen} from '../../../utils';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

interface Props {
  //   handleSubmitForm: (formData: ICredentialsLogin) => Promise<void>;
  getCreateAccount: (formData: IRegister) => void;
  isPasswordSecret: boolean;
  changePasswordSecret: () => void;
  isPasswordSecret2: boolean;
  changePasswordSecret2: () => void;
  checkTerms: boolean;
  changeCheckTerms: () => void;
  checkTerms2: boolean;
  changeCheckTerms2: () => void;
  isLoading: boolean;
  socialMediaRegister: (functionMedia: () => void) => void;
  googleSignIn: () => void;
  facebookSignIn: () => void;
}

export default function StepperForm({
  getCreateAccount,
  isPasswordSecret,
  changePasswordSecret,
  isPasswordSecret2,
  changePasswordSecret2,
  isLoading,
  checkTerms,
  changeCheckTerms,
  checkTerms2,
  changeCheckTerms2,
  socialMediaRegister,
  googleSignIn,
  facebookSignIn,
}: Props) {
  //global context
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  //controller
  const {control, handleSubmit: onSubmit} = useFormContext<IRegister>();

  //styles
  const {
    contentInput,
    btnAction,
    textBtn,
    contentDivider,
    textDivider,
    dividerBar,
    textSocialMedia,
    contentCheckBox,
    termsAndConditionText,
  } = stylesStepperRegister({colors});
  return (
    <View>
      <View style={contentInput}>
        <InputGeneric
          control={control}
          name={'username'}
          borderColor={colors.grayLight5}
          placeholder="Usuario"
          keyboardType="default"
          placeholderTextColor={colors.grayLight3}
          inputColor={colors.black}
          autoCorrect
        />
      </View>
      <View style={contentInput}>
        <InputGeneric
          control={control}
          name={'email'}
          borderColor={colors.grayLight5}
          placeholder="Correo"
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
      <View style={contentInput}>
        <InputGeneric
          control={control}
          name={'password2'}
          borderColor={colors.grayLight5}
          lastIcon={
            <IconIonicons
              onPress={changePasswordSecret2}
              name={isPasswordSecret2 ? 'eye' : 'eye-off'}
              size={heightFullScreen / 34}
              color={colors.grayLight3}
            />
          }
          placeholder="Repetir contraseña"
          isSecretText={isPasswordSecret2}
          placeholderTextColor={colors.grayLight3}
          inputColor={colors.black}
          autoCorrect
        />
      </View>
      <View style={contentDivider}>
        <View style={dividerBar} />
        <Text style={textDivider}>ó ingresa con</Text>
        <View style={dividerBar} />
      </View>
      <Button
        buttonStyle={{
          ...btnAction,
          backgroundColor: colors.orange,
          marginTop: 20,
          flexDirection: 'row',
          alignItems: 'center',
        }}
        firstIcon={
          <FontAwesome name="google-plus" color={colors.purpleDark} size={34} />
        }
        isLoading={isLoading}
        onPress={() => {
          socialMediaRegister(googleSignIn);
        }}
        activeOpacity={0.9}
        textContent={
          <Text style={textSocialMedia}>Iniciar sesión con Google</Text>
        }
      />
      <Button
        buttonStyle={{
          ...btnAction,
          backgroundColor: colors.orange,
          marginTop: 20,
          flexDirection: 'row',
          alignItems: 'center',
        }}
        firstIcon={
          <Fontisto name="facebook" color={colors.purpleDark} size={34} />
        }
        isLoading={isLoading}
        onPress={() => {
          socialMediaRegister(facebookSignIn);
        }}
        activeOpacity={0.9}
        textContent={
          <Text
            style={{
              ...textSocialMedia,
              fontSize: Platform.OS === 'android' ? 19 : 20,
            }}>
            Iniciar sesión con Facebook
          </Text>
        }
      />
      <View style={{flexDirection: 'row', width: '100%', marginTop: 40}}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={changeCheckTerms}
          style={contentCheckBox}>
          {checkTerms && (
            <FontAwesome name="check" color={colors.purpleLight} size={24} />
          )}
        </TouchableOpacity>
        <View style={{flex: 1}}>
          <Text style={termsAndConditionText}>
            Acepto las condiciones de uso y políticas de privacidad
          </Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', width: '100%', marginTop: 15}}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={changeCheckTerms2}
          style={contentCheckBox}>
          {checkTerms2 && (
            <FontAwesome name="check" color={colors.purpleLight} size={24} />
          )}
        </TouchableOpacity>
        <View style={{flex: 1}}>
          <Text style={termsAndConditionText}>
            Acepto el envío de comunicaciones comerciales
          </Text>
        </View>
      </View>
      <Button
        buttonStyle={{...btnAction, marginTop: 50}}
        isLoading={isLoading}
        onPress={onSubmit(getCreateAccount)}
        activeOpacity={0.9}
        textContent={<Text style={textBtn}>CREAR</Text>}
      />
    </View>
  );
}
