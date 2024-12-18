import { Link } from 'react-router-dom';
import TextButton from '../../../../common/components/text-button/TextButton.tsx';
import Toast from '../../../../common/components/toast/Toast.tsx';
import { Color } from '../../../../common/enums/Color.ts';
import useAuthRepository from '../../../../common/repositories/auth/useAuthRepository.tsx';
import { TSigninRequest } from '../../../../common/services/auth/types/requests/TSigninRequest.ts';
import { TSigninResponse } from '../../../../common/services/auth/types/responses/TSigninResponse.ts';
import LoginForm from '../../forms/LoginForm/LoginForm.tsx';
import './LoginContainer.css';
import useAuthContainer from '../../hooks/useAuthContainer/useAuthContainer.tsx';

const LoginContainer = () => {
  const { Rsignin } = useAuthRepository({});
  const {
    toastVisible,
    toastErrorMessage,
    toastKey,
    handleError,
    handleAction: handleSignin,
  } = useAuthContainer<TSigninRequest, TSigninResponse>(Rsignin, '/list/quiz');

  return (
    <div className='login-container'>
      {toastVisible && toastErrorMessage && (
        <Toast
          key={toastKey}
          label={toastErrorMessage}
          bgColor={Color.RED}
          textColor={Color.WHITE}
          visible={toastVisible}
        />
      )}
      <LoginForm handleSignin={handleSignin} />
      <Link to='/auth/signup' className='register-link'>
        <TextButton
          label="S'inscrire"
          bgColor={Color.BLUE}
          textColor={Color.WHITE}
        />
      </Link>
    </div>
  );
};

export default LoginContainer;
