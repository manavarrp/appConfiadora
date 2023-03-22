import globalAxios from '../../axios/index'

const login = async (userData) => {
  const response = await globalAxios.post('auth/login/', userData)

  if (response.data) {
    localStorage.setItem('authDetails', JSON.stringify(response.data))
  }
  return response.data
}

const firstLogin = async (payload) => {
  const response = await globalAxios.post('password/change/', payload)

  if (response.data) {
    localStorage.setItem('authDetails', JSON.stringify(response.data))
  }
  return response.data
}

// Register User
const registerUser = async (userData) => {
  const response = await globalAxios.post('customers', userData)
  return response.data
}

// Send Login Code
const sendLoginCode = async (email) => {
  const response = await axios.post(API_URL + `sendLoginCode/${email}`)

  return response.data.message
}

// Login With Code
const loginWithCode = async (code, email) => {
  const response = await axios.post(API_URL + `loginWithCode/${email}`, code)

  return response.data
}
const getUser = async () => {
  const response = await globalAxios.get(`customers/${uid}`)
  return response.data
}

/* const curpCalculation = async (userData, callback) => {
  const response = await globalAxios.post(
    "identification-types/calculate-curp",
    userData
  );

  callback && callback(response.data);
  console.log(callback, response.data);

  return response.data;
};
 */
const verifyToken = async (token) => {
  try {
    const response = await globalAxios.post('auth/token/verify/', { token })
    if (response.status === 200) {
      return true
    } else {
      return false
    }
  } catch (error) {
    return false
  }
}

const logout = () => {
  localStorage.removeItem('authDetails')
  localStorage.removeItem('currentPageUri')
}

const updateUser = async (accessToken, userData) => {
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  }
  try {
    const response = await globalAxios.patch('auth/user/', userData, config)

    return { data: response.data }
  } catch (error) {
    return { error }
  }
}

const updatePassword = async (accessToken, newPassword) => {
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  }
  try {
    const response = await globalAxios.post(
      'auth/password/change/',
      newPassword,
      config
    )

    return { data: response.data }
  } catch (error) {
    return { error }
  }
}

const forgotPasswordRequest = async (payload) => {
  try {
    const response = await globalAxios.post('password/reset-token', payload)
    return response.data
  } catch (error) {
    return { error }
  }
}

const passwordResetConfirm = async (payload) => {
  console.log(payload)
  try {
    const response = await globalAxios.post('/password/reset/', payload)
    return { data: response.data }
  } catch (error) {
    return Promise.reject(error)
  }
}

const activateEmail = async (payload) => {
  // console.log(payload);
  try {
    const response = await globalAxios.post('/auth/confirm-email/', payload)

    return { data: response.data }
  } catch (error) {
    return Promise.reject(error)
  }
}

const authService = {
  login,
  verifyToken,
  registerUser,
  logout,
  updateUser,
  updatePassword,
  forgotPasswordRequest,
  passwordResetConfirm,
  activateEmail,
  sendLoginCode,
  loginWithCode,
  getUser,
  firstLogin
}

export default authService
