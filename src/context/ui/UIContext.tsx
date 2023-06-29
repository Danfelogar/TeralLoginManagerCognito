import {createContext} from 'react';

interface ContextProps {
  //state
  textError: string | null;
  textSuccessful: string | null;
  isOpenTextError: boolean;
  isOpenTextSuccessful: boolean;
  //functions
  changeStateTextError: () => void;
  changeStateTextSuccessful: () => void;
  changeSetTextError: (val: string | null) => void;
  changeSetTextSuccessful: (val: string | null) => void;
}

export const UIContext = createContext({} as ContextProps);
