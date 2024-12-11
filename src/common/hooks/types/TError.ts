import { ErrorTypeEnum } from '../../enums/ErrorTypeEnum';

export type TError = {
  statusCode: number;
  message?: string;
  data?: any;
  type: ErrorTypeEnum;
};

// Function to throw an error
export const throwTypedError = (
  type: ErrorTypeEnum,
  message: string,
  statusCode: number = 400,
) => {
  const error: TError = {
    statusCode,
    message,
    type,
  };

  throw error;
};
