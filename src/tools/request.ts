import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import applyCaseMiddleware from 'axios-case-converter';
import { BaseQueryFn } from '@reduxjs/toolkit/query';

import { API_BASE_URL } from 'constants/endpoints';

export const request = applyCaseMiddleware(
  axios.create({
    baseURL: API_BASE_URL,
    withCredentials: true,
  }),
);

export const axiosBaseQueryFn: BaseQueryFn<{
  url: string;
  method: AxiosRequestConfig['method'];
  data?: AxiosRequestConfig['data'];
  params?: AxiosRequestConfig['params'];
}> = async ({ url, method, data, params }) => {
  try {
    const result = await request.request({
      url,
      method,
      data,
      params,
    });

    return { data: result.data };
  } catch (axiosError) {
    const err = axiosError as AxiosError;

    return {
      error: {
        code: err.code,
        status: err.response?.status,
        data: err.response?.data || err.message,
      },
    };
  }
};
