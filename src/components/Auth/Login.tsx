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

export const Login = () => {
  const tr = useI18n('auth');

  return (
    <PageLayout>
      <AuthContainer>
        <Typography>{tr('login')}</Typography>
        <InputField label={tr('email')} variant="outlined" />
        <InputField label={tr('password')} variant="outlined" />
        <AuthButton variant="contained">{tr('enter')}</AuthButton>
        <LinkContainer>
          <Typography>{tr('registerHelper')}</Typography>
          <Link to={ROUTES.REGISTER}>{tr('signUp')}</Link>
        </LinkContainer>
      </AuthContainer>
    </PageLayout>
  );
};
