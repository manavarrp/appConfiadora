export const validatePassword = (value) => {
  if (value === undefined) return false

  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])(?=.*[0-9]).{6,}$/.test(
    value
  )
}

export const validateEmail = (value) => {
  if (value === undefined) return false

  return /^[a-zA-Z0-9.-/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
    value
  )
}

export const validateOnlyLetters = (value) => {
  if (value === undefined) return false

  return /[\D]{3}/.test(value)
}
