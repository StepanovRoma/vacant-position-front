import * as yup from 'yup';

export const settingValidationSchema = yup.object().shape({
  firstName: yup
    .string()
    .trim()
    .max(32, 'maxNameLength')
    .required('requiredField'),
  lastName: yup
    .string()
    .trim()
    .max(32, 'maxNameLength')
    .required('requiredField'),
  city: yup.string().max(64, 'maxCityLength'),
  experience: yup.string().max(8, 'maxExpLength'),
  about: yup.string().max(384, 'maxAboutLength'),
  vkontakte: yup.string().max(255, 'maxVKLength'),
  telegram: yup.string().max(32, 'maxTelegramLength'),
  phone: yup.string().max(16, 'maxPhoneNumberLength'),
  whatsapp: yup.string().max(16, 'maxPhoneNumberLength'),
});
