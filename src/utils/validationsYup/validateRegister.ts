import * as yup from 'yup';

export const validateRegister = yup.object().shape({
  username: yup
    .string()
    .required('Campo obligatorio.')
    .min(2, 'El nombre de usuario debe tener al menos 2 caracteres.'),
  password: yup
    .string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[_\W]).{8,}$/,
      'Introduzca una contraseña válida.',
    )
    .required('Campo obligatorio.')
    .min(8, 'La contraseña debe tener al menos 8 caracteres.'),
  password2: yup
    .string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[_\W]).{8,}$/,
      'Introduzca una contraseña válida.',
    )
    .required('Es necesario volver a escribir la contraseña.')
    .oneOf([yup.ref('password')], 'Su contraseña no coincide.'),

  email: yup
    .string()
    .required('Campo obligatorio.')
    .email('Introduzca una dirección de correo electrónico válida.'),
});
