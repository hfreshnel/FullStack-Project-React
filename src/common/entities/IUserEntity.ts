import { UserRoleEnum } from '../enums/UserRoleEnum';

export interface IUserEntity {
  id: number;
  nom: string;
  prenom: string;
  mail: string;
  mdp: string;
  role: UserRoleEnum;
}
