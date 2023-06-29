import {FC, ReactNode, useReducer} from 'react';
import {uiReducer} from './uiReducer';
import {UIContext} from './UIContext';

export interface IUIState {
  textError: string | null;
  textSuccessful: string | null;
  isOpenTextError: boolean;
  isOpenTextSuccessful: boolean;
}

export const UI_INITIAL_STATE: IUIState = {
  textError: null,
  textSuccessful: null,
  isOpenTextError: false,
  isOpenTextSuccessful: false,
};

interface Props {
  children: ReactNode;
}

export const UIProvider: FC<Props> = ({children}) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  const changeStateTextError = () => {
    dispatch({type: '[UI] Switching state text error'});
  };

  const changeStateTextSuccessful = () => {
    dispatch({type: '[UI] Switching state text succesful'});
  };

  const changeSetTextError = (val: string | null) => {
    dispatch({type: '[UI] Set text error', payload: val});
  };

  const changeSetTextSuccessful = (val: string | null) => {
    dispatch({type: '[UI] Set text succesful', payload: val});
  };

  return (
    <UIContext.Provider
      value={{
        ...state,
        //functions
        changeStateTextError,
        changeStateTextSuccessful,
        changeSetTextError,
        changeSetTextSuccessful,
      }}>
      {children}
    </UIContext.Provider>
  );
};
