import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQueryFn } from 'tools/request';

import { API_ENDPOINTS } from 'constants/endpoints';

import { ServerQuote } from './types';

export const quoteApi = createApi({
  reducerPath: 'authApi',
  baseQuery: axiosBaseQueryFn,
  endpoints: build => ({
    getRandomQuote: build.query<ServerQuote, void>({
      query: () => ({
        url: API_ENDPOINTS.QUOTE,
        method: 'get',
      }),
      keepUnusedDataFor: 0,
    }),
  }),
});

export const { useGetRandomQuoteQuery } = quoteApi;
