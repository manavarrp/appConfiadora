import globalAxios from '../../axios'

export const GetList = (params) => {
  return globalAxios.get(params)
}

export const curpCalculation = async (payload) => {
  const response = await globalAxios.post(
    'identification-types/calculate-curp',
    payload
  )

  return response
}

export const changePasswordFirstLogin = async ({
  token,
  userName,
  currentPassword,
  newPassword
}) => {
  globalAxios.defaults.headers.common.Authorization = `Bearer ${token}`
  return globalAxios.put('/password/change', {
    userName,
    currentPassword,
    newPassword
  })
}

export const loginWithCodeOTP = async ({ token, ...payload }) => {
  globalAxios.defaults.headers.common.Authorization = `Bearer ${token}`
  const response = await globalAxios.post('/login/otp', payload)
  return response
}
