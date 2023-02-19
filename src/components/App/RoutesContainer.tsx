import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HeaderLayout } from 'components/RouterLayouts';

import { ROUTES } from 'constants/routes';

export const RoutesContainer = () => {
  return (
    <Routes>
      <Route element={<HeaderLayout />}>
        <Route path={ROUTES.HOME} element={<>{'Homepage'}</>} />
      </Route>
    </Routes>
  );
};
