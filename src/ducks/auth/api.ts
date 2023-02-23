import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQueryFn } from 'tools/request';
import { ServerAuthResponse } from 'dtos/auth';

import { API_ENDPOINTS } from 'constants/endpoints';

import { LoginValues } from './types';

import { enter, logout } from './index';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: axiosBaseQueryFn,
  endpoints: build => ({
    login: build.mutation<ServerAuthResponse, LoginValues>({
      query: credentials => ({
        url: API_ENDPOINTS.LOGIN,
        method: 'post',
        data: {
          ...credentials,
        },
      }),
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(enter(data));
        } catch (error) {
          dispatch(logout());
        }
      },
    }),
  }),
});

export const { useLoginMutation } = authApi;
