import { MethodEnum } from '../enums/MethodEnum';
import { TApiResponse } from './types/TApiResponse';
import axios from "axios";

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL ||"",
  });

export const apiRequest = async <T>(
  url: string,
  methodEnum: MethodEnum,
  body: any = null,
  multipart: boolean = false,
): Promise<TApiResponse<T>> => {
  try {
    let headers: any = {};

    const axiosConfig = {
      method: methodEnum,
      url,
      headers,
      data: body,
    };

    if (multipart) {
      let formData = new FormData();
      for (const key in body) {
        if (body[key] instanceof File) {
          formData.append(key, body[key]);
        } else {
          formData.append(key, JSON.stringify(body[key]));
        }
      }
      axiosConfig.data = formData;
      axiosConfig.headers = {
        ...headers,
        'Content-Type': 'multipart/form-data',
      };
    } else {
      axiosConfig.data = body;
    }

    const response = await axiosInstance(axiosConfig);
    const data: TApiSuccessResponse<T> = response.data;

    console.log(
      `URL: ${url}, body: ${JSON.stringify(body)}, data: ${JSON.stringify(data.data)}, message: ${data.message}`,
    );
    return data;
  } catch (error) {
    //
  }
};
