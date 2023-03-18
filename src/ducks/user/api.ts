import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQueryFn } from 'tools/request';
import { ServerExtendedUser } from 'dtos/user';

import { API_ENDPOINTS } from 'constants/endpoints';

import { SettingsValues } from './types';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: axiosBaseQueryFn,
  tagTypes: ['User'],
  endpoints: build => ({
    getUser: build.query<ServerExtendedUser, string>({
      query: userId => ({
        url: API_ENDPOINTS.USER + `/${userId}`,
        method: 'get',
      }),
      providesTags: ['User'],
    }),
    updateUser: build.mutation<void, SettingsValues>({
      query: user => ({
        url: API_ENDPOINTS.INFO,
        method: 'patch',
        //todo rework when right data will be in request
        data: {
          ...user,
          status: user.status === 'true',
          tags: null,
          email: 'a@a.da',
          password: 'aezakmi787',
        },
      }),
      invalidatesTags: ['User'],
    }),
  }),
});

export const { useGetUserQuery, useUpdateUserMutation } = userApi;
