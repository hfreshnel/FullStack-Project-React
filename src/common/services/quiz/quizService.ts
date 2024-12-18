import { apiRequest } from '../../api/apiRequest';
import { MethodEnum } from '../../enums/MethodEnum';
import { TCreateQuizRequest } from './types/requests/TCreateQuizRequest';
import { TDeleteQuizRequest } from './types/requests/TDeleteQuizRequest';
import { TFindQuizRequest } from './types/requests/TFindQuizRequest';
import { TUpdateQuizRequest } from './types/requests/TUpdateQuizRequest';
import { TCreateQuizResponse } from './types/responses/TCreateQuizResponse';
import { TDeleteQuizResponse } from './types/responses/TDeleteQuizResponse';
import { TFindAllQuizResponse } from './types/responses/TFindAllQuizResponse';
import { TFindQuizResponse } from './types/responses/TFindQuizResponse';
import { TUpdateQuizResponse } from './types/responses/TUpdateQuizResponse';

export const SfindAllQuiz = async (): Promise<TFindAllQuizResponse> => {
  const response = await apiRequest<TFindAllQuizResponse>(
    '/public/quiz',
    MethodEnum.GET,
  );

  return response.data!;
};
export const SfindQuiz = async (
  request: TFindQuizRequest,
): Promise<TFindQuizResponse> => {
  const response = await apiRequest<TFindQuizResponse>(
    `/public/quiz/${request.id}`,
    MethodEnum.GET,
  );
  return response.data!;
};
export const SdeleteQuiz = async (
  request: TDeleteQuizRequest,
): Promise<TDeleteQuizResponse> => {
  const response = await apiRequest<TDeleteQuizResponse>(
    `/public/quiz/${request.id}`,
    MethodEnum.DELETE,
  );
  return response.data!;
};
export const SupdateQuiz = async (
  request: TUpdateQuizRequest,
): Promise<TUpdateQuizResponse> => {
  const response = await apiRequest<TUpdateQuizResponse>(
    `/public/quiz`,
    MethodEnum.PUT,
    request,
  );
  return response.data!;
};
export const ScreateQuiz = async (
  request: TCreateQuizRequest,
): Promise<TCreateQuizResponse> => {
  const response = await apiRequest<TCreateQuizResponse>(
    `/public/quiz`,
    MethodEnum.POST,
    request,
  );
  return response.data!;
};
