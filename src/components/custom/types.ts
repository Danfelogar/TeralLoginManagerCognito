import {ReactNode} from 'react';
import {
  GestureResponderEvent,
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  StyleProp,
  TextInputFocusEventData,
} from 'react-native';
import {IColorsProps} from '../../context';

//customBTN
export interface IButton {
  buttonStyle: StyleProp<any>;
  activeOpacity?: number;
  onPress: (event: GestureResponderEvent) => void;
  firstIcon?: ReactNode;
  textContent?: ReactNode;
  lastIcon?: ReactNode;
  isLoading?: boolean;
  colorSpinierLoading?: string;
}

//genericInputs

export interface IInputGeneric {
  borderColor: string;
  keyboardType?: KeyboardTypeOptions;
  firstIcon?: ReactNode;
  placeholder: string;
  placeholderTextColor: string;
  autoCorrect: boolean;
  isSecretText?: boolean;
  inputColor: string;
  lastIcon?: ReactNode;
  multiline?: boolean;
  multilineStyle?: StyleProp<any>;
  heightMultiline?: number;
  onFocus?:
    | ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void)
    | undefined;
  //control
  name: string;
  control: any;
}

//snackbarCustom
export interface ISnackbarError {
  msmText: string;
  isOpen: boolean;
  bgColor: string;
  handleChangeSnackbar: () => void;
  styled?: StyleProp<any>;
  // setIsSnackbarError: Dispatch<SetStateAction<boolean>>;
  setIsSnackbarError?: any;
}

export interface IStylesCustom extends Pick<IColorsProps, 'colors'> {}
