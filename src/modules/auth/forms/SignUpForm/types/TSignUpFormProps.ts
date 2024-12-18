import { TError } from '../../../../../common/hooks/types/TError';
import { TSignupRequest } from '../../../../../common/services/auth/types/requests/TSignupRequest';

export type TSignUpFormProps = {
  handleSignup: (data: TSignupRequest) => Promise<void>;
  apiError?: TError | null;
  handleError: (message: string) => void;
};
