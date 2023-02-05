import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { ROUTES } from 'constants/routes';

export const RoutesContainer = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<>{'Homepage'}</>} />
    </Routes>
  );
};
