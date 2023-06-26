import {createContext} from 'react';
import {IColorsProps} from './ThemeProvider';

interface Props {
  dark: boolean;
  colors: {
    white: string;
    purple: string;
    grayLight: string;
    gray: string;
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
    black: string;
  };
}

interface ContextProps {
  //state
  theme: Props;
  //functions
  changeADarkMode: (val: IColorsProps) => void;
  changeALightMode: (val: IColorsProps) => void;
}

export const ThemeContext = createContext({} as ContextProps);
