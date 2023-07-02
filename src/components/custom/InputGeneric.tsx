import React, {useContext} from 'react';
import {IInputGeneric} from './types';
import {Controller} from 'react-hook-form';
import {Text, TextInput, View} from 'react-native';
import {inputGenericStyles} from './stylesCustom';
import {ThemeContext} from '../../context';

export default function InputGeneric({
  keyboardType,
  borderColor,
  firstIcon,
  placeholder,
  placeholderTextColor,
  autoCorrect,
  isSecretText,
  inputColor,
  lastIcon,
  multiline = false,
  multilineStyle,
  heightMultiline,
  name,
  control,
  onFocus,
}: IInputGeneric): JSX.Element {
  //global context
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  //customStyles
  const {wrapperStandard, contentInputGeneric, contentInput, helperText} =
    inputGenericStyles({colors});
  return (
    <Controller
      shouldUnregister
      control={control}
      name={name}
      render={({field: {onChange, value = ''}, formState: {errors}}) => {
        return (
          <View
            style={[wrapperStandard, multilineStyle ? multilineStyle : null]}>
            <View
              style={{
                ...contentInputGeneric,
                borderColor: borderColor ? borderColor : 'transparent',
                height: heightMultiline ? heightMultiline : 'auto',
              }}>
              {firstIcon && firstIcon}
              <TextInput
                onFocus={onFocus && onFocus}
                style={{
                  ...contentInput,
                  color: inputColor,
                  maxWidth:
                    firstIcon && lastIcon
                      ? '85%'
                      : firstIcon || lastIcon
                      ? '92%'
                      : '100%',
                }}
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor}
                autoCorrect={autoCorrect}
                secureTextEntry={isSecretText || false}
                keyboardType={keyboardType || 'default'}
                onChangeText={onChange}
                value={value}
                multiline={multiline}
              />
              {lastIcon && lastIcon}
            </View>
            {!!errors[name] && (
              <Text style={helperText}>{errors[name]?.message as string}</Text>
            )}
          </View>
        );
      }}
    />
  );
}
