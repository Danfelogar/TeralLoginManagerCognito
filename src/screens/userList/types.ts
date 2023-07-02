import {IColorsProps} from '../../context';
import {IUsersListPool} from '../../model/IUsersListPool';

export interface IStylesUserList extends Pick<IColorsProps, 'colors'> {}

export interface IUserFlitList {
  users: Array<IUsersListPool>;
  isLoading: boolean;
  onTryAgain: () => void;
  initialNumToRender: number;
  maxToRenderPerBatch: number;
}
