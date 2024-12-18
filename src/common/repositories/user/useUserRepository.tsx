import { useUserContext } from '../../contexts/UserContext/UserContext';
import { TCreateUserRequest } from '../../services/user/types/requests/TCreateUserRequest';
import { TDeleteUserRequest } from '../../services/user/types/requests/TDeleteUserRequest';
import { TFindUserRequest } from '../../services/user/types/requests/TFindUserRequest';
import { TUpdateUserRequest } from '../../services/user/types/requests/TUpdateUserRequest';
import { TCreateUserResponse } from '../../services/user/types/responses/TCreateUserResponse';
import { TDeleteUserResponse } from '../../services/user/types/responses/TDeleteUserResponse';
import { TFindAllUserResponse } from '../../services/user/types/responses/TFindAllUserResponse';
import { TFindUserResponse } from '../../services/user/types/responses/TFindUserResponse';
import { TUpdateUserResponse } from '../../services/user/types/responses/TUpdateUserResponse';
import {
  SfindAllUsers,
  SfindUser,
  ScreateUser,
  SupdateUser,
  SdeleteUser,
} from '../../services/user/userService';
import { TuseUserRepositoryProps } from './types/TuseUserRepositoryProps';

const useUserRepository = (props: TuseUserRepositoryProps) => {
  const { setCurrentUser } = useUserContext();
  const RfindAllUsers = async (): Promise<TFindAllUserResponse> => {
    return await SfindAllUsers();
  };

  const RfindUser = async (
    request: TFindUserRequest,
  ): Promise<TFindUserResponse> => {
    const response = await SfindUser(request);
    setCurrentUser(response);
    return response;
  };

  const RcreateUser = async (
    request: TCreateUserRequest,
  ): Promise<TCreateUserResponse> => {
    return await ScreateUser(request);
  };

  const RupdateUser = async (
    request: TUpdateUserRequest,
  ): Promise<TUpdateUserResponse> => {
    return await SupdateUser(request);
  };

  const RdeleteUser = async (
    request: TDeleteUserRequest,
  ): Promise<TDeleteUserResponse> => {
    return await SdeleteUser(request);
  };

  return {
    RfindAllUsers,
    RfindUser,
    RcreateUser,
    RupdateUser,
    RdeleteUser,
  };
};

export default useUserRepository;
