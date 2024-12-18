import { ErrorTypeEnum } from './ErrorTypeEnum';

export const allErrorMessages: Record<ErrorTypeEnum, string> = {
  [ErrorTypeEnum.unknown]: 'An unknown error occurred.',
  [ErrorTypeEnum.auth_invalid_credentials]: 'E-mail ou mot de passe incorrect.',
  [ErrorTypeEnum.auth_user_already_exists]:
    'Cet utilisateur est déjà existant.',
};
