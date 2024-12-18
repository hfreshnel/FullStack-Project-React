import useAuthRepository from '../../../../common/repositories/auth/useAuthRepository';
import { TSignupRequest } from '../../../../common/services/auth/types/requests/TSignupRequest';
import useFetchData from '../../../../common/hooks/useFetchData';
import SignUpForm from '../../forms/SignUpForm/SignUpForm';
import './SignUpContainer.css';
import { useEffect, useState } from 'react';
import { TSignupResponse } from '../../../../common/services/auth/types/responses/TSignupResponse';
import { useNavigate } from 'react-router-dom';
import { Color } from '../../../../common/enums/Color';
import Toast from '../../../../common/components/toast/Toast';

/**
 * Add a behaviour when loading, success and error
 * Functions calling repositories should be defined in the container and passed to the component like handleSignup here
 */
const SignUpContainer = () => {
  const { Rsignup } = useAuthRepository({});
  const navigate = useNavigate();
  const handleSuccess = () => {
    navigate('/auth/login');
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

  const handleSignup = async (data: TSignupRequest) => {
    await fetchData<TSignupRequest, TSignupResponse>(Rsignup, data);
  };

  return (
    <div className='register-container'>
      {toastVisible && toastErrorMessage && (
        <Toast
          label={toastErrorMessage}
          bgColor={Color.RED}
          textColor={Color.WHITE}
          visible={toastVisible}
        />
      )}
      <SignUpForm
        handleSignup={handleSignup}
        apiError={error}
        handleError={handleError}
      />
    </div>
  );
};

export default SignUpContainer;
