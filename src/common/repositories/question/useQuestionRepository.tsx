import { Ssignup } from '../../services/auth/authService';
import { TSignupRequest } from '../../services/auth/types/requests/TSignupRequest';
import { TSignupResponse } from '../../services/auth/types/responses/TSignupResponse';
import { TuseQuestionRepositoryProps } from './types/TuseQuestionRepositoryProps';

const useQuestionRepository = (props: TuseQuestionRepositoryProps) => {
  const Rsignup = async (request: TSignupRequest): Promise<TSignupResponse> => {
    return await Ssignup(request);
  };

  return {
    Rsignup,
  };
};

export default useQuestionRepository;
