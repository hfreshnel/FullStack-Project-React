import { IUserEntity } from '../../../entities/IUserEntity';

export type TUserContextType = {
  currentUser: IUserEntity | null;
  allUsers: IUserEntity[] | null;
  setCurrentUser: (user: IUserEntity | null) => void;
  setAllUsers: (users: IUserEntity[] | null) => void;
};
