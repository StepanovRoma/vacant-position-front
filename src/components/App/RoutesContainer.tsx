import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HeaderLayout } from 'components/RouterLayouts';
import { Login, Register } from 'components/Auth';

import { ROUTES } from 'constants/routes';

//todo a samurai has no goal only a path
export const RoutesContainer = () => {
  return (
    <Routes>
      <Route element={<HeaderLayout />}>
        <Route path={ROUTES.REGISTER} element={<Register />} />
        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route path={ROUTES.HOME} element={<>{'Главная'}</>} />
        <Route path={ROUTES.ME} element={<>{'Профиль'}</>} />
        <Route path={ROUTES.RESUME} element={<>{'Резюме пользователя'}</>} />
        <Route path={ROUTES.VACANCY} element={<>{'Вакансии компании'}</>} />
        <Route path={ROUTES.PAGE_404} element={<>{'404'}</>} />
      </Route>
    </Routes>
  );
};
