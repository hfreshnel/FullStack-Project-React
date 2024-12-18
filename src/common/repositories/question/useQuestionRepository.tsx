import {
  SfindAllQuestion,
  SfindQuestion,
  SdeleteQuestion,
  SupdateQuestion,
  ScreateQuestion,
} from '../../services/question/questionService';
import { TuseQuestionRepositoryProps } from './types/TuseQuestionRepositoryProps';
import { TCreateQuestionRequest } from '../../services/question/types/requests/TCreateQuestionRequest';
import { TDeleteQuestionRequest } from '../../services/question/types/requests/TDeleteQuestionRequest';
import { TFindQuestionRequest } from '../../services/question/types/requests/TFindQuestionRequest';
import { TUpdateQuestionRequest } from '../../services/question/types/requests/TUpdateQuestionRequest';
import { TCreateQuestionResponse } from '../../services/question/types/responses/TCreateQuestionResponse';
import { TDeleteQuestionResponse } from '../../services/question/types/responses/TDeleteQuestionResponse';
import { TFindAllQuestionResponse } from '../../services/question/types/responses/TFindAllQuestionResponse';
import { TFindQuestionResponse } from '../../services/question/types/responses/TFindQuestionResponse';
import { TUpdateQuestionResponse } from '../../services/question/types/responses/TUpdateQuestionResponse';

const useQuestionRepository = (props: TuseQuestionRepositoryProps) => {
  const RfindAllQuestion = async (): Promise<TFindAllQuestionResponse> => {
    return await SfindAllQuestion();
  };

  const RfindQuestion = async (
    request: TFindQuestionRequest,
  ): Promise<TFindQuestionResponse> => {
    return await SfindQuestion(request);
  };

  const RdeleteQuestion = async (
    request: TDeleteQuestionRequest,
  ): Promise<TDeleteQuestionResponse> => {
    return await SdeleteQuestion(request);
  };

  const RupdateQuestion = async (
    request: TUpdateQuestionRequest,
  ): Promise<TUpdateQuestionResponse> => {
    return await SupdateQuestion(request);
  };

  const RcreateQuestion = async (
    request: TCreateQuestionRequest,
  ): Promise<TCreateQuestionResponse> => {
    return await ScreateQuestion(request);
  };

  return {
    RfindAllQuestion,
    RfindQuestion,
    RdeleteQuestion,
    RupdateQuestion,
    RcreateQuestion,
  };
};

export default useQuestionRepository;
