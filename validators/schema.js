import * as Yup from 'yup'
import { validateEmail, validateInputPhone, validateOnlyLetters, validatePassword } from '../utils/validateInputs'

export const schema = Yup.object().shape({
  firstName: Yup.string().min(0).required('Primer nombre es requerido ').test('Solo letras', 'Solo letras y mayor a 2 caracteres', value => validateOnlyLetters(value))
})
