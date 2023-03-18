import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQueryFn } from 'tools/request';
import { ServerExtendedUser } from 'dtos/user';

import { API_ENDPOINTS } from 'constants/endpoints';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: axiosBaseQueryFn,
  endpoints: build => ({
    getUser: build.query<ServerExtendedUser, string>({
      query: userId => ({
        url: API_ENDPOINTS.USER + `/${userId}`,
        method: 'get',
      }),
    }),
  }),
});

export const { useGetUserQuery } = userApi;
