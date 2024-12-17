import useAuthRepository from '../../../../common/repositories/auth/useAuthRepository';
import { TSignupRequest } from '../../../../common/services/auth/types/requests/TSignupRequest';
import useFetchData from '../../../../common/hooks/useFetchData';
import SignUpForm from '../../forms/SignUpForm/SignUpForm';
import './SignUpContainer.css';

/**
 * Add a behaviour when loading, success and error
 * Functions calling repositories should be defined in the container and passed to the component like handleSignup here
 */
const SignUpContainer = () => {
  const { Rsignup } = useAuthRepository({});
  const { loadingState, fetchData, error } = useFetchData({
    onError: () => {},
    onSuccess: () => {},
    onIdle: () => {},
    onLoading: () => {},
  });

  const handleSignup = async (data: TSignupRequest) => {
    await fetchData(Rsignup, data);
  };

  return (
    <div className='register-container'>
      <SignUpForm handleSignup={handleSignup} errorMessage={error ? error.message! : null} />
    </div>
  );
};

export default SignUpContainer;
