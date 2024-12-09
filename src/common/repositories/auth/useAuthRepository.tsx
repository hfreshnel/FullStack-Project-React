import { Ssignup } from '../../services/auth/authService';
import { TSignupRequest } from '../../services/auth/types/requests/TSignupRequest';
import { TSignupResponse } from '../../services/auth/types/responses/TSignupResponse';
import { TuseAuthRepository } from './types/TuseAuthRepository';

// Define as a normal function, not a React.FC
const useAuthRepository = (props: TuseAuthRepository) => {
  const Rsignup = async (request: TSignupRequest): Promise<TSignupResponse> => {
    return await Ssignup(request);
  };

  // Return the functions or objects you want to expose
  return {
    Rsignup,
  };
};

export default useAuthRepository;
