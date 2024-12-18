import { IPropositionEntity } from './IPropositionEntity';
import { IQuizEntity } from './IQuizEntity';

export interface IQuestionEntity {
  id: number;
  libelle: string;
  propsitionList: IPropositionEntity[];
}
