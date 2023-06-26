import React, {FC, ReactNode, useEffect, useReducer} from 'react';
import {AppState, Appearance} from 'react-native';
import {ThemeContext} from './ThemeContext';
import {themeReducer} from './themeReducer';

export interface IColorsProps {
  dark: boolean;
  colors: {
    white: string;
    purple: string;
    grayLight: string;
    gray: string;
    black: string;
    grayLight1: string;
    orange: string;
    purpleLight: string;
    purpleLight1: string;
    purpleDark: string;
    grayDark: string;
    grayDark1: string;
    grayLight2: string;
    grayLight3: string;
    grayLight4: string;
    grayLight5: string;
    red: string;
  };
}

export interface IThemeState {
  theme: IColorsProps;
}

export const lightTheme = {
  dark: false,
  colors: {
    white: '#FFFFFF',
    white1: '#E4E4E400',
    purple: '#2D0046',
    grayLight: '#ECECEC',
    gray: '#8EA2AB',
    grayLight1: '#E4E4E4',
    orange: '#FBAC00',
    orangeLight: '#FBD071',
    black: '#000000',
    purpleLight: '#8100C7',
    purpleLight1: '#801BC445',
    purpleDark: '#190127',
    grayDark: '#4A4A4A',
    grayDark1: '#787878',
    grayLight2: '#F7F7F7',
    grayLight3: '#ADADAD',
    grayLight4: '#707070',
    grayLight5: '#EBEBEB',
    red: '#DC2626',
  },
};

export const darkTheme = {
  dark: true,
  colors: {
    white: '#FFFFFF',
    white1: '#E4E4E400',
    purple: '#2D0046',
    grayLight: '#ECECEC',
    gray: '#8EA2AB',
    grayLight1: '#E4E4E4',
    orange: '#FBAC00',
    orangeLight: '#FBD071',
    black: '#000000',
    purpleLight: '#8100C7',
    purpleLight1: '#801BC445',
    purpleDark: '#190127',
    grayDark: '#4A4A4A',
    grayDark1: '#787878',
    grayLight2: '#F7F7F7',
    grayLight3: '#ADADAD',
    grayLight4: '#707070',
    grayLight5: '#EBEBEB',
    red: '#DC2626',
  },
};

export const THEME_INITIAL_STATE: IThemeState = {
  theme: lightTheme,
};

interface Props {
  children: ReactNode;
}

export const ThemeProvider: FC<Props> = ({children}) => {
  const [state, dispatch] = useReducer(themeReducer, THEME_INITIAL_STATE);

  const changeADarkMode = () => {
    dispatch({type: '[Theme] Switching To Light Mode', payload: darkTheme});
  };
  const changeALightMode = () => {
    dispatch({type: '[Theme] Switching To Dark Mode', payload: lightTheme});
  };

  useEffect(() => {
    AppState.addEventListener('change', status => {
      if (status === 'active') {
        Appearance.getColorScheme() === 'light'
          ? changeALightMode()
          : changeADarkMode();
      }
    });
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        ...state,
        //functions
        changeADarkMode,
        changeALightMode,
      }}>
      {children}
    </ThemeContext.Provider>
  );
};
