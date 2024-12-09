import { UserRoleEnum } from '../enums/userRoleEnum';

export interface IUserEntity {
  id: number;
  nom: string;
  prenom: string;
  mail: string;
  mdp: string;
  role: UserRoleEnum;
}
