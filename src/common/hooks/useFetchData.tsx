import { useEffect, useState } from 'react';
import { LoadingStateEnum } from '../enums/LoadingStateEnum';
import { TuseFetchDataProps } from './types/TuseFetchDataProps';
import { TError } from './types/TError';
import { ErrorTypeEnum } from '../enums/ErrorTypeEnum';

const useFetchData = (props: TuseFetchDataProps) => {
  const [loadingState, setLoadingState] = useState<LoadingStateEnum>(
    LoadingStateEnum.IDLE,
  );
  const [error, setError] = useState<TError | null>(null);
  useEffect(() => {
    switch (loadingState) {
      case LoadingStateEnum.LOADING: {
        props.onLoading && props.onLoading();
        break;
      }
      case LoadingStateEnum.SUCCESS: {
        props.onSuccess && props.onSuccess();
        break;
      }
      case LoadingStateEnum.ERROR: {
        props.onError && props.onError();
        break;
      }
      case LoadingStateEnum.IDLE: {
        props.onIdle && props.onIdle();
        break;
      }
    }
  }, [loadingState]);

  const fetchData = async <T, R>(
    repositoryFunction: (request: T) => Promise<R>,
    request: T,
  ) => {
    try {
      // Set loading state before API call
      setLoadingState(LoadingStateEnum.LOADING);

      // Call the repository function
      const response = await repositoryFunction(request);

      setLoadingState(LoadingStateEnum.SUCCESS);

      return response;
    } catch (err: any) {
      // Transform caught error to TError structure
      const transformedError: TError = {
        statusCode: err.statusCode || 500,
        message: err.message || 'An unexpected error occurred',
        data: err.data || null,
        type: err.type || ErrorTypeEnum.UNKNOWN,
      };

      // Set error state
      setError(transformedError);
      setLoadingState(LoadingStateEnum.ERROR);
    }
  };

  return { loadingState, fetchData, error };
};

export default useFetchData;
