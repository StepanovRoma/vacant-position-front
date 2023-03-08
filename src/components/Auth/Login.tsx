import React, { useEffect } from 'react';
import { Typography } from '@mui/material';
import { useI18n } from 'hooks/useI18n';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginValues } from 'ducks/auth/types';
import { useLazyGetMeQuery, useLoginMutation } from 'ducks/auth/api';
import { enter } from 'ducks/auth';
import { useDispatch } from 'react-redux';
import { PageLayout } from 'ui/style';

import { ROUTES } from 'constants/routes';

import {
  AuthButton,
  AuthContainer,
  InputField,
  Link,
  LinkContainer,
  ErrorText,
} from './style';
import { loginValidationSchema } from './validationSchemas';

export const Login = () => {
  const tr = useI18n('auth');
  const errorsTr = useI18n('auth.validation');
  const dispatch = useDispatch();
  const [loginUser, { data, isError, isSuccess, isLoading }] =
    useLoginMutation();
  const [getMe] = useLazyGetMeQuery();

  useEffect(() => {
    if (data) {
      dispatch(enter(data));
    }
  }, [dispatch, data]);

  useEffect(() => {
    if (isSuccess) {
      getMe(true);
    }
  }, [getMe, isSuccess]);

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
    loginUser(data);
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

          {isError && <ErrorText>{errorsTr('invalidCredential')}</ErrorText>}

          <AuthButton variant="contained" type="submit" disabled={isLoading}>
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
