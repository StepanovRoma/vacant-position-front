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
import { loginValidationSchema } from './validationSchemas';

interface LoginValues {
  email: string;
  password: string;
}

//todo add translations to errors
export const Login = () => {
  const tr = useI18n('auth');
  const errorsTr = useI18n('auth.validation');

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginValues>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(loginValidationSchema),
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<LoginValues> = data => {
    //todo add login request
    console.log(data);
  };

  return (
    <PageLayout>
      <form onSubmit={handleSubmit(onSubmit)}>
        <AuthContainer>
          <Typography>{tr('login')}</Typography>

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
            name="password"
            control={control}
            render={({ field }) => (
              <InputField
                type="password"
                label={tr('password')}
                variant="outlined"
                {...field}
                error={!!errors.password?.message}
                helperText={errorsTr(errors.password?.message)}
              />
            )}
          />

          <AuthButton variant="contained" type="submit">
            {tr('enter')}
          </AuthButton>
          <LinkContainer>
            <Typography>{tr('registerHelper')}</Typography>
            <Link to={ROUTES.REGISTER}>{tr('signUp')}</Link>
          </LinkContainer>
        </AuthContainer>
      </form>
    </PageLayout>
  );
};
