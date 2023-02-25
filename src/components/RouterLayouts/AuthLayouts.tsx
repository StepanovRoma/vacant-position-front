import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsAuth } from 'ducks/auth/selectors';

import { ROUTES } from 'constants/routes';

export function RequireAuthLayout() {
  const isLogged = useSelector(selectIsAuth);
  if (!isLogged) {
    return <Navigate to={ROUTES.LOGIN} />;
  }

  return <Outlet />;
}

export function DisableAuthLayout() {
  const isLogged = useSelector(selectIsAuth);
  if (isLogged) {
    return <Navigate to={ROUTES.HOME} />;
  }

  return <Outlet />;
}
