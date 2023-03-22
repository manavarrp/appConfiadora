import * as yup from 'yup'

export const loginSchema = yup.object().shape({
  UserName: yup
    .string()
    .required('Este campo es requerido')
    .email('Por favor proporciona un correo valido'),
  Password: yup
    .string()
    .required('Este campo es requerido')
    .min(8, 'Debe contener al menos 8 caracteres')
    .max(15, 'No debe exceder los 15 caracteres')
})
