import React from 'react';
import { PageLayout } from 'ui/style';
import { useSelector } from 'react-redux';
import { selectMeId } from 'ducks/auth/selectors';
import { useGetUserQuery } from 'ducks/user/api';
import { UserEditProfile } from 'components/User';
import { useNavigate } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import { useGetTagsQuery } from 'ducks/tags/api';

import { ROUTES } from 'constants/routes';

export const UserEditPage = () => {
  const meId = useSelector(selectMeId);
  const {
    data: user,
    isError,
    isSuccess,
    isFetching,
  } = useGetUserQuery(meId ?? '');

  const { data: tags, isSuccess: isTagsSuccess } = useGetTagsQuery();
  //todo getTags

  const navigate = useNavigate();

  if (isError) {
    navigate(ROUTES.PAGE_404);
  }

  if (isFetching || !isSuccess || !isTagsSuccess) {
    return <CircularProgress />;
  }

  return (
    <PageLayout>
      <UserEditProfile user={user.user} tags={tags.tags} />
    </PageLayout>
  );
};
