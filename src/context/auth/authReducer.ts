import {AuthState} from './AuthProvider';

type AuthActionType =
  | {type: '[Auth] - Login'}
  | {type: '[Auth] - Login fail'}
  | {type: '[Auth] - Logout'};

export const authReducer = (
  state: AuthState,
  action: AuthActionType,
): AuthState => {
  switch (action.type) {
    case '[Auth] - Login':
      return {
        ...state,
        isLoggedIn: 'login',
      };
    case '[Auth] - Logout':
      return {
        ...state,
        isLoggedIn: 'logout',
      };
    case '[Auth] - Login fail':
      return {
        ...state,
        isLoggedIn: 'logout',
      };

    default:
      return state;
  }
};
