import React from 'react';
import { useNavigate } from 'react-router-dom';

import { ROUTES } from 'constants/routes';

import { HomeButton, NotFoundInfo, PageLayout } from './style';

export const NotFound = () => {
  const navigate = useNavigate();
  return (
    <PageLayout>
      <NotFoundInfo variant="h1">{'404'}</NotFoundInfo>
      <NotFoundInfo>{'Страница не найдена'}</NotFoundInfo>
      <HomeButton
        onClick={() => {
          navigate(ROUTES.HOME);
        }}
        variant="contained"
      >
        {'Вернуться домой'}
      </HomeButton>
    </PageLayout>
  );
};
