import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useFetchData from '../../../../common/hooks/useFetchData';

const useAuthContainer = <TRequest, TResponse>(
  repositoryMethod: (data: TRequest) => Promise<TResponse>,
  onSuccessNavigateTo: string,
) => {
  const [toastVisible, setToastVisible] = useState(false);
  const [toastErrorMessage, setToastErrorMessage] = useState('');
  const [toastKey, setToastKey] = useState(0);
  const navigate = useNavigate();

  const handleSuccess = () => {
    navigate(onSuccessNavigateTo);
  };

  const handleError = (message?: string) => {
    console.log('dans le handle error');
    if (message) {
      setToastErrorMessage(message);
    } else {
      if (error?.message) {
        setToastErrorMessage(error.message);
      } else {
        setToastErrorMessage('Une erreur est survenue');
      }
    }
    setToastKey(prevKey => prevKey + 1); // Forcer le re-rendu du toast
    setToastVisible(true);
  };

  const { loadingState, fetchData, error } = useFetchData({
    onError: () => {
      handleError();
    },
    onSuccess: handleSuccess,
  });

  const handleAction = async (data: TRequest) => {
    await fetchData<TRequest, TResponse>(repositoryMethod, data);
  };

  return {
    toastVisible,
    toastErrorMessage,
    toastKey,
    handleAction,
    loadingState,
    error,
    handleError,
  };
};

export default useAuthContainer;
