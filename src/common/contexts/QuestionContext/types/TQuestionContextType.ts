import { IQuestionEntity } from '../../../entities/IQuestionEntity';

export type TQuestionContextType = {
  currentQuestion: IQuestionEntity | null;
  allQuestions: IQuestionEntity[] | null;
  setCurrentQuestion: (question: IQuestionEntity) => void;
  setAllQuestions: (questions: IQuestionEntity[]) => void;
};
