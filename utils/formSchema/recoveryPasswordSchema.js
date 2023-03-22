import * as yup from 'yup'

export const recoveryPasswordSchema = yup.object().shape({
  newPassword: yup.string().required('Este campo es requerido').min(8, 'Debe tener al menos 8 caracteres').max(16, 'No debe exceder los 16 caracteres'),
  confirmPassword: yup
    .string()
    .required('Este campo es requerido')
    .oneOf([yup.ref('newPassword'), null], 'No coinciden las contraseñas')
})
