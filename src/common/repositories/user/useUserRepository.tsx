import { Ssignup } from '../../services/auth/authService';
import { TSignupRequest } from '../../services/auth/types/requests/TSignupRequest';
import { TSignupResponse } from '../../services/auth/types/responses/TSignupResponse';
import { TuseUserRepositoryProps } from './types/TuseUserRepositoryProps';

const useUserRepository = (props: TuseUserRepositoryProps) => {
  const Rsignup = async (request: TSignupRequest): Promise<TSignupResponse> => {
    return await Ssignup(request);
  };

  return {
    Rsignup,
  };
};

export default useUserRepository;
