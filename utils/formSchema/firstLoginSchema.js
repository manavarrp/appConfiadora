import * as yup from 'yup'

export const firstLoginSchema = yup.object().shape({
  currentPassword: yup
    .string()
    .required('Este campo es requerido')
    .min(8, 'Debe tener al menos 8 caracteres')
    .max(16, 'No debe exceder los 16 caracteres'),
  newPassword: yup
    .string()
    .required('Este campo es requerido')
    .min(8, 'Debe tener al menos 8 caracteres')
    .max(16, 'No debe exceder los 16 caracteres')
})
