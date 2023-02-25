import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQueryFn } from 'tools/request';
import { ServerAuthResponse } from 'dtos/auth';
import { ServerUserResponse } from 'dtos/user';

import { API_ENDPOINTS } from 'constants/endpoints';

import { LoginValues, SignUpValues } from './types';

import { logout, setUser } from './index';

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
    }),
    register: build.mutation<
      ServerAuthResponse,
      Omit<SignUpValues, 'confirmPassword'>
    >({
      query: credentials => ({
        url: API_ENDPOINTS.REGISTER,
        method: 'post',
        data: {
          email: credentials.email,
          firstName: credentials.firstName,
          lastName: credentials.lastName,
          password: credentials.password,
        },
      }),
    }),
    getMe: build.query<ServerUserResponse, boolean>({
      query: () => ({
        url: API_ENDPOINTS.ME,
        method: 'get',
      }),
      keepUnusedDataFor: 0,
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          if (data !== null) {
            dispatch(setUser(data));
          }
        } catch (error) {
          dispatch(logout());
        }
      },
    }),
  }),
});

export const {
  useLoginMutation,
  useGetMeQuery,
  useRegisterMutation,
  useLazyGetMeQuery,
} = authApi;
