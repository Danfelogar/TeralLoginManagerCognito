import {IUIState} from './UIProvider';

type UIActionType =
  | {type: '[UI] Switching state text error'}
  | {type: '[UI] Switching state text succesful'}
  | {type: '[UI] Set text error'; payload: string | null}
  | {type: '[UI] Set text succesful'; payload: string | null};

export const uiReducer = (state: IUIState, action: UIActionType): IUIState => {
  switch (action.type) {
    case '[UI] Switching state text error':
      return {
        ...state,
        isOpenTextError: !state.isOpenTextError,
      };
    case '[UI] Switching state text succesful':
      return {
        ...state,
        isOpenTextSuccessful: !state.isOpenTextSuccessful,
      };
    case '[UI] Set text error':
      return {
        ...state,
        textError: action.payload,
      };
    case '[UI] Set text succesful':
      return {
        ...state,
        textSuccessful: action.payload,
      };
    default:
      return state;
  }
};
