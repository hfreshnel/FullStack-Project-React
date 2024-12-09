/**
 * Custom hook to fetch data with loading and error handling.
 *
 * This hook manages the state for loading, success, and error conditions. It also provides
 * a method to fetch data from a given repository function and request, while allowing
 * you to pass custom callbacks for each loading state (loading, success, error, idle).
 *
 * @param {TuseFetchDataProps} props - The props for this hook. Should contain the following callbacks:
 *   - `onLoading`: Called when the state is 'LOADING' (OPTIONAL).
 *   - `onSuccess`: Called when the state is 'SUCCESS' (OPTIONAL).
 *   - `onError`: Called when the state is 'ERROR' (OPTIONAL).
 *   - `onIdle`: Called when the state is 'IDLE' (OPTIONAL).
 *
 * @returns {Object} Returns an object with the following:
 *   - `loadingState`: The current loading state (IDLE, LOADING, SUCCESS, ERROR).
 *   - `fetchData`: A function to call the repository and fetch data.
 *   - `error`: An error object (TError) when an error occurs, or `null` if no error.
 *
 * Usage:
 *
 * const { loadingState, fetchData, error } = useFetchData({
 *   onLoading: () => { console.log('Loading...'); },
 *   onSuccess: () => { console.log('Data fetched successfully!'); },
 *   onError: (error) => { console.error('Error fetching data:', error); },
 *   onIdle: () => { console.log('Idle state'); },
 * });
 *
 * // Call fetchData when you want to fetch data
 * const fetchDataResult = await fetchData(yourRepositoryFunction, requestData);
 */
import { useEffect, useState } from 'react';
import { LoadingStateEnum } from '../enums/LoadingStateEnum';
import { TuseFetchDataProps } from './types/TuseFetchDataProps';
import { TError } from './types/TError';
import { ErrorTypeEnum } from '../enums/ErrorTypeEnum';

const useFetchData = (props: TuseFetchDataProps) => {
  // State to track loading state (IDLE, LOADING, SUCCESS, ERROR)
  const [loadingState, setLoadingState] = useState<LoadingStateEnum>(
    LoadingStateEnum.IDLE,
  );

  // State to store error information if any error occurs
  const [error, setError] = useState<TError | null>(null);

  // Trigger callbacks based on loading state change
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

  /**
   * fetchData - Function to fetch data using a repository function.
   *
   * This function sets the loading state to LOADING, makes the repository call, and
   * then updates the loading state to either SUCCESS or ERROR based on the result.
   *
   * @param {Function} repositoryFunction - A function that makes the actual data fetching request.
   * @param {Object} request - The request object to be passed to the repository function.
   * @returns {Promise<R>} - The response from the repository function if successful.
   *
   * Example:
   * const data = await fetchData(myRepositoryFunction, { userId: 1 });
   */
  const fetchData = async <T, R>(
    repositoryFunction: (request: T) => Promise<R>,
    request: T,
  ) => {
    try {
      // Set loading state to LOADING before starting the API call
      setLoadingState(LoadingStateEnum.LOADING);

      // Call the repository function to fetch data
      const response = await repositoryFunction(request);

      // Set loading state to SUCCESS if the request succeeds
      setLoadingState(LoadingStateEnum.SUCCESS);

      return response;
    } catch (err: any) {
      // Transform the caught error into the TError structure
      const transformedError: TError = {
        statusCode: err.statusCode || 500,
        message: err.message || 'An unexpected error occurred',
        data: err.data || null,
        type: err.type || ErrorTypeEnum.UNKNOWN,
      };

      // Set the error state with the transformed error
      setError(transformedError);

      // Set loading state to ERROR when an error occurs
      setLoadingState(LoadingStateEnum.ERROR);
    }
  };

  // Return the loading state, fetchData function, and the error object
  return { loadingState, fetchData, error };
};

export default useFetchData;
