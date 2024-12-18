import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import TextButton from '../../../../common/components/text-button/TextButton.tsx';
import Toast from '../../../../common/components/toast/Toast.tsx';
import { Color } from '../../../../common/enums/Color.ts';
import useFetchData from '../../../../common/hooks/useFetchData.tsx';
import useAuthRepository from '../../../../common/repositories/auth/useAuthRepository.tsx';
import { TSigninRequest } from '../../../../common/services/auth/types/requests/TSigninRequest.ts';
import { TSigninResponse } from '../../../../common/services/auth/types/responses/TSigninResponse.ts';
import LoginForm from '../../forms/LoginForm/LoginForm.tsx';
import './LoginContainer.css';

const LoginContainer = () => {
  const { Rsignin } = useAuthRepository({});
  const navigate = useNavigate();
  const handleSuccess = () => {
    console.log('connecté');
    navigate('/private/connected');
  };
  const handleError = (message?: string) => {
    if (message) {
      setToastErrorMessage(message);
      setToastVisible(true);
    } else {
      error?.message && setToastErrorMessage(error?.message);
    }
    setToastVisible(true);
  };
  const { loadingState, fetchData, error } = useFetchData({
    onError: () => {
      handleError();
    },
    onSuccess: () => {
      handleSuccess();
    },
    onIdle: () => {},
    onLoading: () => {},
  });

  const [toastVisible, setToastVisible] = useState(false);
  const [toastErrorMessage, setToastErrorMessage] = useState('');

  const handleSignin = async (data: TSigninRequest) => {
    await fetchData<TSigninRequest, TSigninResponse>(Rsignin, data);
  };
  return (
    <div className={'login-container'}>
      {toastVisible && toastErrorMessage && (
        <Toast
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
