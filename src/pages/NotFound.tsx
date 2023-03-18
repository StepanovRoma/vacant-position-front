import React from 'react';
import { useNavigate } from 'react-router-dom';

import { ROUTES } from 'constants/routes';

import { useI18n } from '../hooks/useI18n';

import { HomeButton, NotFoundInfo, PageLayout } from './style';

export const NotFound = () => {
  const navigate = useNavigate();
  const tr = useI18n('404');
  return (
    <PageLayout>
      <NotFoundInfo variant="h1">{'404'}</NotFoundInfo>
      <NotFoundInfo>{tr('pageNotFound')}</NotFoundInfo>
      <HomeButton
        onClick={() => {
          navigate(ROUTES.HOME);
        }}
        variant="contained"
      >
        {tr('backToHome')}
      </HomeButton>
    </PageLayout>
  );
};
