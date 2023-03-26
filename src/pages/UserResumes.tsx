import React from 'react';
import { PageLayout, PageTitle } from 'ui/style';
import { Box, CircularProgress, Grid, Typography } from '@mui/material';
import { Link } from 'components/User/style';
import { useI18n } from 'hooks/useI18n';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectMeId } from 'ducks/auth/selectors';
import { useGetUserQuery } from 'ducks/user/api';
import { TableResumeCard } from 'components/Resume';

import { ROUTES } from 'constants/routes';

export const UserResumes = () => {
  const tr = useI18n('resume');
  const navigate = useNavigate();
  const meId = useSelector(selectMeId);
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
        <PageTitle>{tr('myResumes')}</PageTitle>
        {user.resumes.length > 0 ? (
          <Grid container spacing={6}>
            {user.resumes.map(resume => (
              <Grid item key={resume.id}>
                <TableResumeCard resume={resume} isMy />
              </Grid>
            ))}
          </Grid>
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
