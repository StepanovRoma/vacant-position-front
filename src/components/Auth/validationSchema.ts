import * as yup from 'yup';

export const loginValidationSchema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().required(),
});

export const registerValidationSchema = yup.object().shape({
  email: yup.string().email().required(),
  username: yup.string().required(),
  password: yup.string().required(),
  confirmPassword: yup
    .string()
    .required()
    .oneOf([yup.ref('password')]),
});
