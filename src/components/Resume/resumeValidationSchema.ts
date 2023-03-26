import * as yup from 'yup';

export const resumeValidationSchema = yup.object().shape({
  position: yup
    .string()
    .trim()
    .max(96, 'maxPositionLength')
    .required('requiredField'),
  experience: yup
    .string()
    .trim()
    .max(10, 'maxExperienceLength')
    .required('requiredField'),
  payroll: yup
    .string()
    .trim()
    .max(32, 'maxPayrollLength')
    .required('requiredField'),
  tags: yup.array().max(10, 'maxTagsLength').min(1, 'minTagsLength'),
  about: yup
    .string()
    .trim()
    .max(2048, 'maxAboutLength')
    .required('requiredField'),
  preferContact: yup
    .string()
    .trim()
    .max(64, 'maxPreferContactLength')
    .required('requiredField'),
});
