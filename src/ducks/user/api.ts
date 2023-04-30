import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQueryFn } from 'tools/request';
import { ServerExtendedUser } from 'dtos/user';
import { ResumeValues } from 'components/Resume/CreateResume';
import { IResume, ServerResumesResponse } from 'dtos/resume';
import { isAvatarFromBack } from 'components/User/helper';

import { API_BASE_URL, API_ENDPOINTS } from 'constants/endpoints';

import { SettingsValues } from './types';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: axiosBaseQueryFn,
  tagTypes: ['User', 'Resumes'],
  endpoints: build => ({
    getUser: build.query<ServerExtendedUser, string>({
      query: userId => ({
        url: API_ENDPOINTS.USERS + `/${userId}`,
        method: 'get',
      }),
      transformResponse: (response: ServerExtendedUser) => {
        return {
          ...response,
          image: response.image
            ? `${API_BASE_URL}/media/${response.image}`
            : null,
        };
      },
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
    }),
    updateUserCredentials: build.mutation<
      void,
      { firstName: string; lastName: string; id: string; image: string | null }
    >({
      query: user => ({
        url: API_ENDPOINTS.USER + `/${user.id}`,
        method: 'patch',
        data: {
          firstName: user.firstName,
          lastName: user.lastName,
          image: isAvatarFromBack(user.image) ? undefined : user.image,
        },
      }),
      invalidatesTags: ['User'],
    }),
    createResume: build.mutation<void, ResumeValues>({
      query: resume => ({
        url: API_ENDPOINTS.RESUME,
        method: 'post',
        data: {
          ...resume,
          isVisible: resume.isVisible === 'true',
          tags: resume.tags
            .reduce((acc, item) => {
              return acc + item.id + ' ';
            }, '')
            .trim(),
        },
      }),
      invalidatesTags: ['User', 'Resumes'],
    }),
    getResumes: build.query<ServerResumesResponse, void>({
      query: () => ({
        url: API_ENDPOINTS.RESUME,
        method: 'get',
      }),
      providesTags: ['Resumes'],
    }),
    deleteResume: build.mutation<void, string>({
      query: id => ({
        url: `${API_ENDPOINTS.RESUME}/${id}`,
        method: 'delete',
      }),
      invalidatesTags: ['User', 'Resumes'],
    }),
    getResume: build.query<IResume, string>({
      query: id => ({
        url: `${API_ENDPOINTS.RESUME}/${id}`,
        method: 'get',
      }),
      providesTags: ['Resumes'],
    }),
    updateResume: build.mutation<
      void,
      { resume: ResumeValues; resumeId: string }
    >({
      query: ({ resumeId, resume }) => ({
        url: `${API_ENDPOINTS.RESUME}/${resumeId}`,
        method: 'patch',
        data: {
          ...resume,
          isVisible: resume.isVisible === 'true',
          tags: resume.tags
            .reduce((acc, item) => {
              return acc + item.id + ' ';
            }, '')
            .trim(),
        },
      }),
      invalidatesTags: ['User', 'Resumes'],
    }),
    favourResume: build.mutation<void, { userId: string; resumeId: string }>({
      query: ({ resumeId, userId }) => ({
        url: `${API_ENDPOINTS.USER}/${userId}`,
        method: 'patch',
        data: {
          resumeId,
        },
      }),
      invalidatesTags: ['User', 'Resumes'],
    }),
  }),
});

export const {
  useGetUserQuery,
  useUpdateUserMutation,
  useUpdateUserCredentialsMutation,
  useCreateResumeMutation,
  useGetResumesQuery,
  useDeleteResumeMutation,
  useGetResumeQuery,
  useUpdateResumeMutation,
} = userApi;
