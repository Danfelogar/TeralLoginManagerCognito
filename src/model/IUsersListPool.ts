interface IAttributes {
  Name: string;
  Value: string;
}

export interface IUsersListPool {
  Attributes: IAttributes[];
  Enabled: boolean;
  UserCreateDate: string;
  UserLastModifiedDate: string;
  UserStatus: string;
  Username: string;
}
