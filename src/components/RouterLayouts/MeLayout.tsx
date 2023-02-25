import React from 'react';
import { useGetMeQuery } from 'ducks/auth/api';
import { Outlet } from 'react-router-dom';
import { CircularProgress, Fade } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectIsAuth } from 'ducks/auth/selectors';

export const MeLayout = () => {
  const { isError } = useGetMeQuery(true);
  const hasData = useSelector(selectIsAuth);

  if (!hasData && !isError) {
    return (
      <Fade
        in
        style={{
          transitionDelay: '100ms',
        }}
        unmountOnExit
      >
        <CircularProgress />
      </Fade>
    );
  }

  return <Outlet />;
};
