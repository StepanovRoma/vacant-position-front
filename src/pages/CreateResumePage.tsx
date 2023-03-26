import React from 'react';
import { PageLayout, PageTitle } from 'ui/style';
import { Box, CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectMeId } from 'ducks/auth/selectors';
import { useGetUserQuery } from 'ducks/user/api';
import { CreateResume } from 'components/Resume/CreateResume';
import { useI18n } from 'hooks/useI18n';

import { ROUTES } from 'constants/routes';

export const CreateResumePage = () => {
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
        <PageTitle>{tr('createResume')}</PageTitle>
        <CreateResume user={user} />
      </Box>
    </PageLayout>
  );
};
