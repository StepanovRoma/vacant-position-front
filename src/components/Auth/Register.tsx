import React from 'react';
import { Typography } from '@mui/material';
import { useI18n } from 'hooks/useI18n';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { ROUTES } from 'constants/routes';

import {
  AuthButton,
  AuthContainer,
  InputField,
  Link,
  LinkContainer,
  PageLayout,
} from './style';
import { signUpValidationSchema } from './validationSchemas';

interface SignUpValues {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
}

//todo add error translations
export const Register = () => {
  const tr = useI18n('auth');
  const errorsTr = useI18n('auth.validation');

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpValues>({
    defaultValues: {
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
    },
    resolver: yupResolver(signUpValidationSchema),
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<SignUpValues> = data => {
    //todo add signup request
    console.log(data);
  };

  return (
    <PageLayout>
      <form onSubmit={handleSubmit(onSubmit)}>
        <AuthContainer>
          <Typography>{tr('register')}</Typography>

          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <InputField
                autoComplete="off"
                label={tr('email')}
                variant="outlined"
                {...field}
                error={!!errors.email?.message}
                helperText={errorsTr(errors.email?.message)}
              />
            )}
          />

          <Controller
            name="username"
            control={control}
            render={({ field }) => (
              <InputField
                autoComplete="off"
                label={tr('username')}
                variant="outlined"
                {...field}
                error={!!errors.username?.message}
                helperText={errorsTr(errors.username?.message)}
              />
            )}
          />

          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <InputField
                type="password"
                autoComplete="off"
                label={tr('password')}
                variant="outlined"
                {...field}
                error={!!errors.password?.message}
                helperText={errorsTr(errors.password?.message)}
              />
            )}
          />

          <Controller
            name="confirmPassword"
            control={control}
            render={({ field }) => (
              <InputField
                type="password"
                autoComplete="off"
                label={tr('confirmPassword')}
                variant="outlined"
                {...field}
                error={!!errors.confirmPassword?.message}
                helperText={errorsTr(errors.confirmPassword?.message)}
              />
            )}
          />

          <AuthButton variant="contained" type="submit">
            {tr('signUp')}
          </AuthButton>
          <LinkContainer>
            <Typography>{tr('loginHelper')}</Typography>
            <Link to={ROUTES.LOGIN}>{tr('enter')}</Link>
          </LinkContainer>
        </AuthContainer>
      </form>
    </PageLayout>
  );
};
