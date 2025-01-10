import { Ssignin, Ssignout, Ssignup } from '../../services/auth/authService';
import { TSigninRequest } from '../../services/auth/types/requests/TSigninRequest';
import { TSignoutRequest } from '../../services/auth/types/requests/TSignoutRequest';
import { TSignupRequest } from '../../services/auth/types/requests/TSignupRequest';
import { TSigninResponse } from '../../services/auth/types/responses/TSigninResponse';
import { TSignoutResponse } from '../../services/auth/types/responses/TSignoutResponse';
import { TSignupResponse } from '../../services/auth/types/responses/TSignupResponse';
import { LOCALSTORAGE_USER } from '../../utils/consts/consts';
import { TuseAuthRepositoryProps } from './types/TuseAuthRepositoryProps';

const useAuthRepository = (props: TuseAuthRepositoryProps) => {
  const Rsignup = async (request: TSignupRequest): Promise<TSignupResponse> => {
    return await Ssignup(request);
  };
  const Rsignin = async (request: TSigninRequest): Promise<TSigninResponse> => {
    const response = await Ssignin(request);

    return response;
  };
  const Rsignout = async (
    request: TSignoutRequest,
  ): Promise<TSignoutResponse> => {
    return await Ssignout(request);
  };

  return {
    Rsignup,
    Rsignin,
    Rsignout,
  };
};

export default useAuthRepository;
