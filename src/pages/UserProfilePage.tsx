import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { PageLayout } from 'ui/style';
import { UserProfile } from 'components/User/UserProfile';
import { useGetUserQuery } from 'ducks/user/api';
import { CircularProgress } from '@mui/material';

import { ROUTES } from 'constants/routes';

export const UserProfilePage = () => {
  const { userId = '' } = useParams();
  const navigate = useNavigate();
  const {
    data: user,
    isError,
    isFetching,
    isSuccess,
  } = useGetUserQuery(userId);

  if (userId === '' || isError) {
    navigate(ROUTES.PAGE_404);
  }

  if (isFetching || !isSuccess) {
    return <CircularProgress />;
  }

  return (
    <PageLayout>
      <UserProfile user={user.user} />
    </PageLayout>
  );
};
