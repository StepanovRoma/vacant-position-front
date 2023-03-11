import React, { useEffect } from 'react';
import { Typography } from '@mui/material';
import { useI18n } from 'hooks/useI18n';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { SignUpValues } from 'ducks/auth/types';
import { useDispatch } from 'react-redux';
import { useLazyGetMeQuery, useRegisterMutation } from 'ducks/auth/api';
import { enter } from 'ducks/auth';
import { InputField, PageLayout } from 'ui/style';

import { ROUTES } from 'constants/routes';

import {
  AuthButton,
  AuthContainer,
  Link,
  LinkContainer,
  ErrorText,
} from './style';
import { signUpValidationSchema } from './validationSchemas';

interface RequestError {
  data: {
    code?: string | undefined;
    status?: number | undefined;
  };
}

export const Register = () => {
  const tr = useI18n('auth');
  const errorsTr = useI18n('auth.validation');
  const dispatch = useDispatch();
  const [registerUser, { data, isSuccess, error, isLoading }] =
    useRegisterMutation();
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
  } = useForm<SignUpValues>({
    defaultValues: {
      email: '',
      firstName: '',
      lastName: '',
      password: '',
      confirmPassword: '',
    },
    resolver: yupResolver(signUpValidationSchema),
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<SignUpValues> = data => {
    registerUser(data);
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

          {(error as RequestError)?.data?.status === 404 && (
            <ErrorText>{errorsTr('alreadyUse')}</ErrorText>
          )}

          <Controller
            name="firstName"
            control={control}
            render={({ field }) => (
              <InputField
                autoComplete="off"
                label={tr('firstName')}
                variant="outlined"
                {...field}
                error={!!errors.firstName?.message}
                helperText={errorsTr(errors.firstName?.message)}
              />
            )}
          />

          <Controller
            name="lastName"
            control={control}
            render={({ field }) => (
              <InputField
                autoComplete="off"
                label={tr('lastName')}
                variant="outlined"
                {...field}
                error={!!errors.lastName?.message}
                helperText={errorsTr(errors.lastName?.message)}
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

          <AuthButton variant="contained" type="submit" disabled={isLoading}>
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
