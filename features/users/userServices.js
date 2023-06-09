import axios from 'axios'

const getUserData = async (url, accessToken) => {
  // url should be in the form "http://127.0.0.1:8000/api/v1/users/1/"
  url =
    'http://ec2-54-221-177-27.compute-1.amazonaws.com/identitynomina/api/v1/'
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  }
  const response = await axios.get(url, config)

  return response.data
}

const userService = {
  getUserData
}

export default userService
