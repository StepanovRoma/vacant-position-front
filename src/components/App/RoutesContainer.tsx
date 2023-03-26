import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HeaderLayout } from 'components/RouterLayouts';
import { Login, Register } from 'components/Auth';
import {
  DisableAuthLayout,
  RequireAuthLayout,
} from 'components/RouterLayouts/AuthLayouts';
import { MeLayout } from 'components/RouterLayouts/MeLayout';
import { NotFound, UserEditPage, UserProfilePage } from 'pages';
import { HomePage } from 'pages/HomePage';
import { UserResumes } from 'pages/UserResumes';
import { CreateResumePage } from 'pages/CreateResumePage';
import { EditResumeContainer } from 'components/Resume/EditResumeContainer';

import { ROUTES } from 'constants/routes';

//todo a samurai has no goal only a path
export const RoutesContainer = () => {
  return (
    <Routes>
      <Route element={<HeaderLayout />}>
        <Route element={<MeLayout />}>
          <Route element={<DisableAuthLayout />}>
            <Route path={ROUTES.LOGIN} element={<Login />} />
            <Route path={ROUTES.REGISTER} element={<Register />} />
          </Route>

          <Route element={<RequireAuthLayout />}>
            <Route
              path={`${ROUTES.USER}/:userId`}
              element={<UserProfilePage />}
            />
            <Route path={`${ROUTES.SETTINGS}`} element={<UserEditPage />} />
            <Route path={ROUTES.RESUME} element={<UserResumes />} />
            <Route path={ROUTES.CREATE_RESUME} element={<CreateResumePage />} />
            <Route
              path={`${ROUTES.EDIT_RESUME}/:resumeId`}
              element={<EditResumeContainer />}
            />
            <Route path={ROUTES.VACANCY} element={<>{'Вакансии компании'}</>} />
          </Route>

          <Route path={ROUTES.HOME} element={<HomePage />} />
        </Route>

        <Route path={ROUTES.PAGE_404} element={<NotFound />} />
      </Route>
    </Routes>
  );
};
