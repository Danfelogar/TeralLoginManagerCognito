import * as yup from 'yup';

export const validateLogin = yup.object().shape({
  username: yup
    .string()
    .required('Campo obligatorio.')
    .min(2, 'El nombre de usuario debe tener al menos 2 caracteres.'),
  password: yup.string().required('Campo obligatorio.'),
});
