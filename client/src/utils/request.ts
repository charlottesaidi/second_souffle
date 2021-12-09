import { ApiRequestConfig, ApiResponse } from 'src/types/api';
import axios from 'axios';

const createApiUrl = (url: string): string => {
  return `${process.env.NEXT_PUBLIC_API_PATH}${url}`;
};

export const request = async <T>(url: string, options?: ApiRequestConfig): Promise<ApiResponse<T>> => {
  let data: T | undefined = undefined;
  const error = '';

  url = createApiUrl(url);

  try {
    const response = await axios.request<T>({ url, ...options });
    data = response.data;
  } catch(error) {
    console.log(error);
  }

  return { data, error };
};