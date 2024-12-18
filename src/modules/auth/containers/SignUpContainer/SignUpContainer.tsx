import Toast from '../../../../common/components/toast/Toast';
import { Color } from '../../../../common/enums/Color';
import useAuthRepository from '../../../../common/repositories/auth/useAuthRepository';
import { TSignupRequest } from '../../../../common/services/auth/types/requests/TSignupRequest';
import { TSignupResponse } from '../../../../common/services/auth/types/responses/TSignupResponse';
import SignUpForm from '../../forms/SignUpForm/SignUpForm';
import useAuthContainer from '../../hooks/useAuthContainer/useAuthContainer';
import './SignUpContainer.css';

const SignUpContainer = () => {
  const { Rsignup } = useAuthRepository({});
  const {
    toastVisible,
    toastErrorMessage,
    toastKey,
    handleError,
    handleAction: handleSignup,
  } = useAuthContainer<TSignupRequest, TSignupResponse>(Rsignup, '/auth/login');

  return (
    <div className='register-container'>
      {toastVisible && toastErrorMessage && (
        <Toast
          key={toastKey}
          label={toastErrorMessage}
          bgColor={Color.RED}
          textColor={Color.WHITE}
          visible={toastVisible}
        />
      )}
      <SignUpForm handleSignup={handleSignup} handleError={handleError} />
    </div>
  );
};

export default SignUpContainer;
