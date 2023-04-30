import { createApi } from '@reduxjs/toolkit/dist/query/react';
import { axiosBaseQueryFn } from 'tools/request';

import { API_ENDPOINTS } from 'constants/endpoints';

export const dataApi = createApi({
  reducerPath: 'dataApi',
  baseQuery: axiosBaseQueryFn,
  endpoints: build => ({
    uploadImage: build.mutation<{ avatarUrl: string }, FormData>({
      query: args => ({
        url: API_ENDPOINTS.MEDIA,
        method: 'post',
        data: args,
      }),
    }),
  }),
});

export const { useUploadImageMutation } = dataApi;
