import {
  SfindAllQuiz,
  SfindQuiz,
  SdeleteQuiz,
  SupdateQuiz,
  ScreateQuiz,
} from '../../services/quiz/quizService';
import { TCreateQuizRequest } from '../../services/quiz/types/requests/TCreateQuizRequest';
import { TDeleteQuizRequest } from '../../services/quiz/types/requests/TDeleteQuizRequest';
import { TFindQuizRequest } from '../../services/quiz/types/requests/TFindQuizRequest';
import { TUpdateQuizRequest } from '../../services/quiz/types/requests/TUpdateQuizRequest';
import { TCreateQuizResponse } from '../../services/quiz/types/responses/TCreateQuizResponse';
import { TDeleteQuizResponse } from '../../services/quiz/types/responses/TDeleteQuizResponse';
import { TFindAllQuizResponse } from '../../services/quiz/types/responses/TFindAllQuizResponse';
import { TFindQuizResponse } from '../../services/quiz/types/responses/TFindQuizResponse';
import { TUpdateQuizResponse } from '../../services/quiz/types/responses/TUpdateQuizResponse';
import { TuseQuizRepositoryProps } from './types/TuseQuizRepositoryProps';

const useQuizRepository = (props: TuseQuizRepositoryProps) => {
  const RfindAllQuiz = async (): Promise<TFindAllQuizResponse> => {
    return await SfindAllQuiz();
  };

  const RfindQuiz = async (
    request: TFindQuizRequest,
  ): Promise<TFindQuizResponse> => {
    return await SfindQuiz(request);
  };

  const RdeleteQuiz = async (
    request: TDeleteQuizRequest,
  ): Promise<TDeleteQuizResponse> => {
    return await SdeleteQuiz(request);
  };

  const RupdateQuiz = async (
    request: TUpdateQuizRequest,
  ): Promise<TUpdateQuizResponse> => {
    return await SupdateQuiz(request);
  };

  const RcreateQuiz = async (
    request: TCreateQuizRequest,
  ): Promise<TCreateQuizResponse> => {
    return await ScreateQuiz(request);
  };

  return {
    RfindAllQuiz,
    RfindQuiz,
    RdeleteQuiz,
    RupdateQuiz,
    RcreateQuiz,
  };
};

export default useQuizRepository;
