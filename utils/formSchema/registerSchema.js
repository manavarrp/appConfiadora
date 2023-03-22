import * as yup from 'yup'
import { validateOnlyLetters } from '../../validators'

const getBirthateValidation = (date) => {
  const currentDate = new Date().getFullYear()
  const birthDate = new Date(date).getFullYear()
  return currentDate - birthDate > 18
}

export const registerSchema = yup.object().shape({
  firstName: yup
    .string()
    .required('Este campo es requerido')
    .test('Solo letras', 'Solo letras y mayor a 2 caracteres', (value) =>
      validateOnlyLetters(value)
    ),
  firstLastName: yup
    .string()
    .required('Este campo es requerido')
    .test('Solo letras', 'Solo letras y mayor a 2 caracteres', (value) =>
      validateOnlyLetters(value)
    ),
  phoneNumber: yup.string().required('Este campo es requerido'),
  email: yup
    .string()
    .required('Este campo es requerido')
    .email('Por favor proporciona un correo valido'),
  birthDate: yup
    .string()
    .required('Este campo es requerido')
    .test('birthDate', 'Debes ser mayor de edad', (birthDate) => {
      return getBirthateValidation(birthDate)
    }),
  // .max(new Date(Date.now() - 567648000000), "Debes tener al menos 18 años"),
  identificationNumber: yup.string().when('canRegister', {
    is: (canRegister) => canRegister,
    then: (schema) =>
      schema.required('Debes propocionar tu numero de identificación')
  }),

  genderId: yup.string().required('Se requiere una opción'),
  stateId: yup.string().required('Se requiere una opción'),
  AcceptTermsAndConditions: yup.boolean().when('canRegister', {
    is: (canRegister) => canRegister,
    then: (schema) =>
      schema
        .required('Debes aceptar terminos y condiciones')
        .oneOf([true], 'Debes aceptar terminos y condiciones')
  }),
  agreementCode: yup.string().when('hasAgreementCode', {
    is: (hasAgreementCode) => hasAgreementCode, // alternatively: (val) => val == true
    then: (schema) => schema.required('Debes propocionar un código valido')
  }),
  identificationTypeId: yup.string().required('Se requiere una opción')
})
