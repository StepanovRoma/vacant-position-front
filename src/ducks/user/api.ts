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
        url: API_ENDPOINTS.USERS + `/${userId}`,
        method: 'get',
      }),
      providesTags: ['User'],
    }),
    updateUser: build.mutation<void, SettingsValues>({
      query: user => ({
        url: API_ENDPOINTS.INFO,
        method: 'patch',
        data: {
          ...user,
          status: user.status === 'true',
          tags:
            user.tags?.length === 0
              ? null
              : user.tags
                  ?.reduce((acc, item) => {
                    return acc + item.id + ' ';
                  }, '')
                  .trim(),
        },
      }),
      invalidatesTags: ['User'],
    }),
    updateUserCredentials: build.mutation<
      void,
      { firstName: string; lastName: string; id: string }
    >({
      query: user => ({
        url: API_ENDPOINTS.USER + `/${user.id}`,
        method: 'patch',
        data: {
          firstName: user.firstName,
          lastName: user.lastName,
        },
      }),
      invalidatesTags: ['User'],
    }),
  }),
});

export const {
  useGetUserQuery,
  useUpdateUserMutation,
  useUpdateUserCredentialsMutation,
} = userApi;
