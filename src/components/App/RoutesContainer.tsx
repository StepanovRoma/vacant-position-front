import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HeaderLayout } from 'components/RouterLayouts';

import { ROUTES } from 'constants/routes';

//todo a samurai has no goal only a path
export const RoutesContainer = () => {
  return (
    <Routes>
      <Route element={<HeaderLayout />}>
        <Route path={ROUTES.HOME} element={<>{'Главная'}</>} />
        <Route path={ROUTES.ME} element={<>{'Профиль'}</>} />
        <Route path={ROUTES.RESUME} element={<>{'Резюме пользователя'}</>} />
        <Route path={ROUTES.VACANCY} element={<>{'Вакансии компании'}</>} />
      </Route>
    </Routes>
  );
};
