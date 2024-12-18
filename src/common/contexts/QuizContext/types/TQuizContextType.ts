import { IQuizEntity } from '../../../entities/IQuizEntity';

export type TQuizContextType = {
  currentQuiz: IQuizEntity | null;
  allQuizzes: IQuizEntity[] | null;
  setCurrentQuiz: (quiz: IQuizEntity) => void;
  setAllQuizzes: (quizzes: IQuizEntity[]) => void;
};
