import * as yup from 'yup';

export const loginValidationSchema = yup.object().shape({
  email: yup.string().required('requiredField'),
  password: yup.string().required('requiredField'),
});

export const signUpValidationSchema = yup.object().shape({
  email: yup.string().email('validEmail').required('requiredField'),
  username: yup.string().required('requiredField'),
  password: yup.string().required('requiredField'),
  confirmPassword: yup
    .string()
    .required('requiredField')
    .oneOf([yup.ref('password')], 'samePasswords'),
});
