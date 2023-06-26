import React from 'react';
import {ActivityIndicator, TouchableOpacity} from 'react-native';
import {IButton} from './types';

export function Button({
  buttonStyle,
  activeOpacity,
  onPress,
  firstIcon,
  textContent,
  lastIcon,
  isLoading = false,
  colorSpinierLoading,
}: IButton) {
  return (
    <TouchableOpacity
      disabled={isLoading}
      activeOpacity={activeOpacity || 0.5}
      onPress={onPress}
      style={{...buttonStyle}}>
      {isLoading ? (
        <ActivityIndicator
          size="large"
          color={colorSpinierLoading ? colorSpinierLoading : '#6A5691'}
        />
      ) : (
        <>
          {firstIcon && firstIcon}
          {textContent && textContent}
          {lastIcon && lastIcon}
        </>
      )}
    </TouchableOpacity>
  );
}
