import { apiRequest } from '../../api/apiRequest';
import { MethodEnum } from '../../enums/MethodEnum';
import { TCreateQuestionRequest } from './types/requests/TCreateQuestionRequest';
import { TDeleteQuestionRequest } from './types/requests/TDeleteQuestionRequest';
import { TFindQuestionRequest } from './types/requests/TFindQuestionRequest';
import { TUpdateQuestionRequest } from './types/requests/TUpdateQuestionRequest';
import { TCreateQuestionResponse } from './types/responses/TCreateQuestionResponse';
import { TDeleteQuestionResponse } from './types/responses/TDeleteQuestionResponse';
import { TFindAllQuestionResponse } from './types/responses/TFindAllQuestionResponse';
import { TFindQuestionResponse } from './types/responses/TFindQuestionResponse';
import { TUpdateQuestionResponse } from './types/responses/TUpdateQuestionResponse';

export const SfindAllQuestion = async (): Promise<TFindAllQuestionResponse> => {
  const response = await apiRequest<TFindAllQuestionResponse>(
    '/public/question',
    MethodEnum.GET,
  );

  return response.data!;
};
export const SfindQuestion = async (
  request: TFindQuestionRequest,
): Promise<TFindQuestionResponse> => {
  const response = await apiRequest<TFindQuestionResponse>(
    `/public/question/${request.id}`,
    MethodEnum.GET,
  );
  return response.data!;
};
export const SdeleteQuestion = async (
  request: TDeleteQuestionRequest,
): Promise<TDeleteQuestionResponse> => {
  const response = await apiRequest<TDeleteQuestionResponse>(
    `/public/question/${request.id}`,
    MethodEnum.DELETE,
  );
  return response.data!;
};
export const SupdateQuestion = async (
  request: TUpdateQuestionRequest,
): Promise<TUpdateQuestionResponse> => {
  const response = await apiRequest<TUpdateQuestionResponse>(
    `/public/question`,
    MethodEnum.PUT,
    request,
  );
  return response.data!;
};
export const ScreateQuestion = async (
  request: TCreateQuestionRequest,
): Promise<TCreateQuestionResponse> => {
  const response = await apiRequest<TCreateQuestionResponse>(
    `/public/question`,
    MethodEnum.POST,
    request,
  );
  return response.data!;
};
