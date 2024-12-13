import { Ssignup } from '../../services/auth/authService';
import { TSignupRequest } from '../../services/auth/types/requests/TSignupRequest';
import { TSignupResponse } from '../../services/auth/types/responses/TSignupResponse';
import { TusePropositionRepositoryProps } from './types/TusePropositionRepositoryProps';

const usePropositionRepository = (props: TusePropositionRepositoryProps) => {
  const Rsignup = async (request: TSignupRequest): Promise<TSignupResponse> => {
    return await Ssignup(request);
  };

  return {
    Rsignup,
  };
};

export default usePropositionRepository;
