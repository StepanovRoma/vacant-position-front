import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetResumeQuery } from 'ducks/user/api';
import { PageLayout, PageTitle } from 'ui/style';
import { ResumeView } from 'components/Resume/ResumeView';
import { Box, CircularProgress } from '@mui/material';
import { useI18n } from 'hooks/useI18n';

import { ROUTES } from 'constants/routes';

export const ResumeViewPage = () => {
  const tr = useI18n('resume');
  const { resumeId = '' } = useParams();
  const navigate = useNavigate();
  const {
    data: resume,
    isError,
    isLoading,
    isSuccess,
  } = useGetResumeQuery(resumeId);

  if (resumeId === '' || isError) {
    navigate(ROUTES.PAGE_404);
  }

  if (isLoading || !isSuccess) {
    return <CircularProgress />;
  }

  const isCandidate = resume.role === 'candidate';

  return (
    <PageLayout>
      <Box display="flex" flexDirection="column" gap="20px">
        <PageTitle>{isCandidate ? tr('resumeTitle') : 'Вакансия'}</PageTitle>
        <ResumeView resume={resume} />
      </Box>
    </PageLayout>
  );
};
