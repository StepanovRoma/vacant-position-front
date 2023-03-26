import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectMeId } from 'ducks/auth/selectors';
import { useGetResumeQuery, useGetUserQuery } from 'ducks/user/api';
import { Box, CircularProgress } from '@mui/material';
import React from 'react';
import { PageLayout, PageTitle } from 'ui/style';
import { useI18n } from 'hooks/useI18n';

import { ROUTES } from 'constants/routes';

import { EditResume } from './EditResume';

export const EditResumeContainer = () => {
  const tr = useI18n('resume');
  const navigate = useNavigate();
  const { resumeId = '' } = useParams();
  const meId = useSelector(selectMeId);
  const {
    data: user,
    isError,
    isSuccess,
    isFetching,
  } = useGetUserQuery(meId ?? '');
  const {
    data: resume,
    isError: isResumeError,
    isSuccess: isResumeSuccess,
    isFetching: isResumeFetching,
  } = useGetResumeQuery(resumeId);

  if (isError || isResumeError) {
    navigate(ROUTES.PAGE_404);
  }

  if (isFetching || !isSuccess || !isResumeSuccess || isResumeFetching) {
    return <CircularProgress />;
  }
  return (
    <PageLayout>
      <Box display="flex" flexDirection="column" gap="20px">
        <PageTitle>{tr('editResume')}</PageTitle>
        <EditResume user={user} resume={resume} />
      </Box>
    </PageLayout>
  );
};
