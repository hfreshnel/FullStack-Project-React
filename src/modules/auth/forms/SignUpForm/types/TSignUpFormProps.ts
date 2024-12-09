import { TSignupRequest } from '../../../../../common/services/auth/types/requests/TSignupRequest';

export type TSignUpFormProps = {
  handleSignup: (data: TSignupRequest) => void;
};
