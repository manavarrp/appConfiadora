import * as yup from 'yup'

export const resetSchema = yup.object().shape({
  email: yup
    .string()
    .required('Este campo es requerido')
    .email('Por favor proporciona un correo valido')
})
