import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header';

import { PageContainer } from './style';

export const HeaderLayout = () => {
  return (
    <PageContainer>
      <Header />
      <Outlet />
    </PageContainer>
  );
};
