import { ErrorTypeEnum } from './ErrorTypeEnum';

export const allErrorMessages: Record<ErrorTypeEnum, string> = {
  [ErrorTypeEnum.auth_failed]: 'Signup failed. Please try again.',
  [ErrorTypeEnum.unknown]: 'An unknown error occurred.',
};
