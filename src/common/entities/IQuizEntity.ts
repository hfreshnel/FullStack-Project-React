import { EtapeEnum } from '../enums/EtapeEnum';
import { QuizEtatEnum } from '../enums/QuizEtatEnum';
import { IQuestionEntity } from './IQuestionEntity';

export interface IQuizEntity {
  id: number;
  libelle: string;
  etat: QuizEtatEnum;
  dateDebutQuiz: Date;
  noQuestionCourante: number;
  etape: EtapeEnum;
  dateDebutQuestion: Date;
  questions: IQuestionEntity[];
}
