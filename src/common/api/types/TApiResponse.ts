import { ErrorTypeEnum } from '../../enums/errorType/ErrorTypeEnum';

export type TApiResponse<T> = {
  error?: ErrorTypeEnum;
  data?: T;
  code: number;
};
