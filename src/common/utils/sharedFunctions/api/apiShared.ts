import { allErrorMessages } from '../../../enums/errorType/ErrorMessages';
import { ErrorTypeEnum } from '../../../enums/errorType/ErrorTypeEnum';
import { TError } from '../../../hooks/types/TError';

// Function to throw an error
export const throwTypedError = (
  type: ErrorTypeEnum,
  statusCode: number = 400,
) => {
  let message = allErrorMessages[type];

  const error: TError = {
    statusCode,
    message,
    type,
  };

  throw error;
};
