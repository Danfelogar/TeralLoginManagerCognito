import {FC, ReactNode, useEffect, useReducer} from 'react';

import {AuthContext, authReducer} from './';
import {Auth} from 'aws-amplify';

export interface AuthState {
  isLoggedIn: 'login' | 'logout' | 'pending';
  userToken?: string;
}

const AUTH_INITIAL_STATE: AuthState = {
  isLoggedIn: 'pending',
};

interface Props {
  children: ReactNode;
}

export const AuthProvider: FC<Props> = ({children}) => {
  const [state, dispatch] = useReducer(authReducer, AUTH_INITIAL_STATE);

  async function validatedIsLogin() {
    await Auth.currentAuthenticatedUser({
      bypassCache: false, // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
    })
      .then(() => {
        // console.log({user});
        login();
      })
      .catch(err => {
        console.log({err});
        loginFail();
      });
  }

  async function login() {
    dispatch({type: '[Auth] - Login'});
  }

  async function loginFail() {
    dispatch({type: '[Auth] - Login fail'});
  }

  async function logout() {
    dispatch({type: '[Auth] - Logout'});
  }

  useEffect(() => {
    validatedIsLogin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AuthContext.Provider
      value={{
        ...state,
        //methods
        //functions
        login,
        loginFail,
        logout,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
