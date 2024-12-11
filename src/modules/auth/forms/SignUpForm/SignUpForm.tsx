import { TSignupRequest } from '../../../../common/services/auth/types/requests/TSignupRequest.ts';

interface SignUpFormProps {
  handleSignUp: (data: TSignupRequest) => Promise<void>;
}

const SignUpForm = ({ handleSignUp }: SignUpFormProps) => {
  return <></>;
};

export default SignUpForm;
