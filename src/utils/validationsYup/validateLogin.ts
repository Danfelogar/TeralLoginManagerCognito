import * as yup from 'yup';

export const validateLogin = yup.object().shape({
  email: yup
    .string()
    .required('Required field.')
    .email('Enter a valid email address.'),
  password: yup.string().required('Required field.'),
});
