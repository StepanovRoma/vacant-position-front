import React from 'react';
import { PageLayout, PageTitle } from 'ui/style';
import { Box, Button, CircularProgress, Typography } from '@mui/material';
import {
  CreateResumeContainer,
  Link,
  ResumeContainer,
} from 'components/User/style';
import { useI18n } from 'hooks/useI18n';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectMeId, selectRole } from 'ducks/auth/selectors';
import { useGetUserQuery } from 'ducks/user/api';
import { TableResumeCard } from 'components/Resume';

import { ROUTES } from 'constants/routes';

export const UserResumes = () => {
  const tr = useI18n('resume');
  const navigate = useNavigate();
  const meId = useSelector(selectMeId);
  const role = useSelector(selectRole);
  const isCandidate = role === 'candidate';
  const {
    data: user,
    isError,
    isSuccess,
    isFetching,
  } = useGetUserQuery(meId ?? '');

  if (isError) {
    navigate(ROUTES.PAGE_404);
  }

  if (isFetching || !isSuccess) {
    return <CircularProgress />;
  }
  return (
    <PageLayout>
      <Box display="flex" flexDirection="column" gap="20px">
        <PageTitle>{isCandidate ? tr('myResumes') : 'Мои вакансии'}</PageTitle>
        {user.resumes.length > 0 ? (
          <ResumeContainer>
            {user.resumes.map(resume => (
              <TableResumeCard resume={resume} isMy key={resume.id} />
            ))}
            <CreateResumeContainer>
              <Link to={ROUTES.CREATE_RESUME}>
                <Button variant="text">
                  {isCandidate
                    ? tr('createOneMoreResume')
                    : tr('createOneMoreVacancy')}
                </Button>
              </Link>
            </CreateResumeContainer>
          </ResumeContainer>
        ) : (
          <Box display="flex" flexDirection="row" alignItems="center" gap="6px">
            <Typography>{tr('noExistsResume')}</Typography>
            <Link to={ROUTES.CREATE_RESUME}>{tr('wantCreate')}</Link>
          </Box>
        )}
      </Box>
    </PageLayout>
  );
};
