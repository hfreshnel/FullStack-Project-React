import axios, { AxiosRequestConfig } from 'axios';
import { ErrorTypeEnum } from '../enums/errorType/ErrorTypeEnum';
import { MethodEnum } from '../enums/MethodEnum';
import { throwTypedError } from '../utils/sharedFunctions/api/apiShared';
import { TApiResponse } from './types/TApiResponse';
import { isTError, TError } from '../hooks/types/TError';

console.log('process.env.REACT_APP_API_URL', import.meta.env.VITE_API_URL);
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '',
});

/**
 * Effectue une requête API avec les paramètres spécifiés.
 *
 * @param url - Le chemin de l'endpoint API.
 * @param method - Méthode HTTP à utiliser (GET, POST, etc.).
 * @param data - Données envoyées avec la requête (si applicable).
 * @param config - Configuration supplémentaire pour la requête Axios.
 * @returns Une promesse contenant la réponse typée.
 */
export const apiRequest = async <T>(
  url: string,
  method: MethodEnum,
  body?: any,
  config?: AxiosRequestConfig,
): Promise<TApiResponse<T>> => {
  try {
    const axiosConfig = {
      url: url,
      method: method,
      data: body,
      ...config,
    };
    const response = await axiosInstance(axiosConfig);
    console.log('responseresponse', response);
    const responseData: TApiResponse<T> = response.data;
    if (responseData.error) {
      throwTypedError(responseData.error, responseData.code);
    }
    return responseData;
  } catch (error) {
    // Gestion des erreurs : extraction des détails pertinents
    if (isTError(error)) {
      throw error;
    }
    let errorType: ErrorTypeEnum = ErrorTypeEnum.unknown;
    let errorCode: number = 400;
    if (axios.isAxiosError(error) && error) {
      error.code === 'ERR_NETWORK' &&
        throwTypedError(ErrorTypeEnum.unknown, 404);
      errorType = error.response?.data;
      const parsedError = error.code ? parseInt(error.code) : 400;
      errorCode = parsedError;
    }
    throwTypedError(errorType, errorCode);

    /** Return for typescript type safety */
    return undefined as unknown as TApiResponse<T>;
  }
};
