import { AxiosRequestConfig } from 'axios';

export type ApiRequestConfig = AxiosRequestConfig;

export interface ApiResponse<T> {
  data: T | undefined;
  error: string;
}