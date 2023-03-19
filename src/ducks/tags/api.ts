import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQueryFn } from 'tools/request';
import { ServerTags } from 'dtos/tags';

import { API_ENDPOINTS } from 'constants/endpoints';

export const tagsApi = createApi({
  reducerPath: 'tagsApi',
  baseQuery: axiosBaseQueryFn,
  endpoints: build => ({
    getTags: build.query<ServerTags, void>({
      query: () => ({
        url: API_ENDPOINTS.TAGS,
        method: 'get',
      }),
    }),
  }),
});

export const { useGetTagsQuery } = tagsApi;
