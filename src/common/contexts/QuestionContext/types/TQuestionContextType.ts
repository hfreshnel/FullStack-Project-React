import { IQuestionEntity } from '../../../entities/IQuestionEntity';

export type TQuestionContextType = {
  currentQuestion: IQuestionEntity | null;
  allQuestions: IQuestionEntity[] | null;
  setCurrentQuestion: (question: IQuestionEntity | null) => void;
  setAllQuestions: (questions: IQuestionEntity[] | null) => void;
};
