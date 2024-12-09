import React from 'react';
import useAuthRepository from '../../../../common/repositories/auth/useAuthRepository';
import { TSignupRequest } from '../../../../common/services/auth/types/requests/TSignupRequest';
import { TSignUpContainerProps } from './types/TSignUpContainerProps';
import useFetchData from '../../../../common/hooks/useFetchData';
import SignUpForm from '../../forms/SignUpForm/SignUpForm';

/**
 * Add a loading, error and success state
 * Functions calling repositories should be defined in the container and passed to the component like handleSignup here
 */
const SignUpContainer: React.FC<TSignUpContainerProps> = ({}) => {
  const { Rsignup } = useAuthRepository({});
  const { loadingState, fetchData, error } = useFetchData({
    onError: () => {}, //Optionnal function that is called when an error occurs
    onSuccess: () => {}, //Optionnal function that is called on success
    onIdle: () => {}, //Optionnal function that is called when loading state is idle
    onLoading: () => {}, //Optionnal function that is called when loading
  });

  const handleSignup = async (data: TSignupRequest) => {
    await fetchData(Rsignup, data);
  };
  return (
    <>
      <SignUpForm handleSignup={handleSignup} />
    </>
  );
};

export default SignUpContainer;
