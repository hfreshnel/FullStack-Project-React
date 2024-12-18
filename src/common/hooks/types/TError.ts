import { ErrorTypeEnum } from '../../enums/errorType/ErrorTypeEnum';

export type TError = {
  statusCode: number;
  message?: string;
  data?: any;
  type: ErrorTypeEnum;
};
export function isTError(error: any): error is TError {
  return (error as TError).statusCode !== undefined;
}
