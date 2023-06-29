import {createContext} from 'react';

export interface ContextProps {
  isLoggedIn: 'login' | 'logout' | 'pending';
  // userToken?: string;
  //methods
  login: () => void;
  logout: () => void;
  loginFail: () => void;
}

export const AuthContext = createContext({} as ContextProps);
