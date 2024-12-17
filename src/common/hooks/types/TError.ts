import { ErrorTypeEnum } from '../../enums/errorType/ErrorTypeEnum';

export type TError = {
  statusCode: number;
  message?: string;
  data?: any;
  type: ErrorTypeEnum;
};
