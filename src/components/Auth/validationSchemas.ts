import * as yup from 'yup';

export const loginValidationSchema = yup.object().shape({
  email: yup.string().required('requiredField'),
  password: yup.string().required('requiredField'),
});

export const signUpValidationSchema = yup.object().shape({
  email: yup.string().email('validEmail').required('requiredField'),
  role: yup.string().required('requiredField'),
  firstName: yup.string().required('requiredField'),
  lastName: yup.string().when('role', {
    is: 'candidate',
    then: yup.string().required('requiredField'),
    otherwise: yup.string(),
  }),
  password: yup.string().min(8, 'minPasswordLength').required('requiredField'),
  confirmPassword: yup
    .string()
    .required('requiredField')
    .oneOf([yup.ref('password')], 'samePasswords'),
});
