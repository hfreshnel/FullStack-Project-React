import { apiRequest } from '../../api/apiRequest';
import { MethodEnum } from '../../enums/MethodEnum';
import { TCreateUserRequest } from './types/requests/TCreateUserRequest';
import { TDeleteUserRequest } from './types/requests/TDeleteUserRequest';
import { TFindUserRequest } from './types/requests/TFindUserRequest';
import { TUpdateUserRequest } from './types/requests/TUpdateUserRequest';
import { TCreateUserResponse } from './types/responses/TCreateUserResponse';
import { TDeleteUserResponse } from './types/responses/TDeleteUserResponse';
import { TFindAllUserResponse } from './types/responses/TFindAllUserResponse';
import { TFindUserResponse } from './types/responses/TFindUserResponse';
import { TUpdateUserResponse } from './types/responses/TUpdateUserResponse';

export const SfindAllUsers = async (): Promise<TFindAllUserResponse> => {
  const response = await apiRequest<TFindAllUserResponse>(
    '/users',
    MethodEnum.GET,
  );
  return response.data!;
};

export const SfindUser = async (
  request: TFindUserRequest,
): Promise<TFindUserResponse> => {
  const response = await apiRequest<TFindUserResponse>(
    `/users/${request.id}`,
    MethodEnum.GET,
  );
  return response.data!;
};

export const ScreateUser = async (
  request: TCreateUserRequest,
): Promise<TCreateUserResponse> => {
  const response = await apiRequest<TCreateUserResponse>(
    '/users',
    MethodEnum.POST,
    request,
  );
  return response.data!;
};

export const SupdateUser = async (
  request: TUpdateUserRequest,
): Promise<TUpdateUserResponse> => {
  const response = await apiRequest<TUpdateUserResponse>(
    '/users',
    MethodEnum.PUT,
    request,
  );
  return response.data!;
};

export const SdeleteUser = async (
  request: TDeleteUserRequest,
): Promise<TDeleteUserResponse> => {
  const response = await apiRequest<TDeleteUserResponse>(
    `/users/${request.id}`,
    MethodEnum.DELETE,
  );
  return response.data!;
};
