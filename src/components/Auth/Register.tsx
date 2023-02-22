import React from 'react';
import { Typography } from '@mui/material';
import { useI18n } from 'hooks/useI18n';

import { ROUTES } from 'constants/routes';

import {
  AuthButton,
  AuthContainer,
  InputField,
  Link,
  LinkContainer,
  PageLayout,
} from './style';

export const Register = () => {
  const tr = useI18n('auth');

  return (
    <PageLayout>
      <AuthContainer>
        <Typography>{tr('register')}</Typography>
        <InputField autoComplete="off" label={tr('email')} variant="outlined" />
        <InputField
          autoComplete="off"
          label={tr('username')}
          variant="outlined"
        />
        <InputField type="password" label={tr('password')} variant="outlined" />
        <InputField
          type="password"
          label={tr('confirmPassword')}
          variant="outlined"
        />
        <AuthButton variant="contained">{tr('signUp')}</AuthButton>
        <LinkContainer>
          <Typography>{tr('loginHelper')}</Typography>
          <Link to={ROUTES.LOGIN}>{tr('enter')}</Link>
        </LinkContainer>
      </AuthContainer>
    </PageLayout>
  );
};
