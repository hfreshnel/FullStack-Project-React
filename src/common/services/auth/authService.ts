import { apiRequest } from '../../api/apiRequest';
import { MethodEnum } from '../../enums/MethodEnum';
import { TSigninRequest } from './types/requests/TSigninRequest';
import { TSignoutRequest } from './types/requests/TSignoutRequest';
import { TSignupRequest } from './types/requests/TSignupRequest';
import { TSigninResponse } from './types/responses/TSigninResponse';
import { TSignoutResponse } from './types/responses/TSignoutResponse';
import { TSignupResponse } from './types/responses/TSignupResponse';

export const Ssignup = async (request: TSignupRequest) => {
  const response = await apiRequest<TSignupResponse>(
    '/public/auth/register',
    MethodEnum.POST,
    request,
  );
  console.log('reponse', response);

  return response.data;
};
export const Ssignin = async (request: TSigninRequest) => {
  const response = await apiRequest<TSigninResponse>(
    '/public/auth/login',
    MethodEnum.POST,
    request,
  );
  return response.data;
};

export const Ssignout = async (request: TSignoutRequest) => {
  const response = await apiRequest<TSignoutResponse>(
    '/public/auth/logout',
    MethodEnum.POST,
    request,
  );

  return response.data;
};
