import { Ssignin, Ssignout, Ssignup } from '../../services/auth/authService';
import { TSigninRequest } from '../../services/auth/types/requests/TSigninRequest';
import { TSignoutRequest } from '../../services/auth/types/requests/TSignoutRequest';
import { TSignupRequest } from '../../services/auth/types/requests/TSignupRequest';
import { TSigninResponse } from '../../services/auth/types/responses/TSigninResponse';
import { TSignoutResponse } from '../../services/auth/types/responses/TSignoutResponse';
import { TSignupResponse } from '../../services/auth/types/responses/TSignupResponse';
import { TuseAuthRepositoryProps } from './types/TuseAuthRepositoryProps';

const useAuthRepository = (props: TuseAuthRepositoryProps) => {
  const Rsignup = async (request: TSignupRequest): Promise<TSignupResponse> => {
    return await Ssignup(request);
  };
  const Rsignin = async (request: TSigninRequest): Promise<TSigninResponse> => {
    return await Ssignin(request);
  };
  const Rsignout = async (
    request: TSignoutRequest,
  ): Promise<TSignoutResponse> => {
    return await Ssignout(request);
  };

  return {
    Rsignup,
  };
};

export default useAuthRepository;
