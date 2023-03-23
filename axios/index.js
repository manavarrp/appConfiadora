import axios from 'axios'
import Cookies from 'js-cookie'
import { toast } from 'react-toastify'
import { AXIOS_COOKIE } from '../config'
import { onLogout } from '../utils/auth'

const HOSTED_API_URL = 'http://ec2-54-221-177-27.compute-1.amazonaws.com/identitynomina/api/v1/'
// const HOSTED_API_URL = "https://91d9-181-51-32-224.ngrok.io/api/v1/";
const CURRENT_API_URL = HOSTED_API_URL

const createInstace = () => {
  const instance = axios.create({
    baseURL: CURRENT_API_URL
  })

  const accessToken = Cookies.get(AXIOS_COOKIE)

  if (accessToken) {
    instance.defaults.headers.common.Authorization = `Bearer ${accessToken}`
  }

  instance.interceptors.response.use(
    function (response) {
      return response
    },
    function (error) {
      if (error?.message === 'Error de conexión') {
        toast.error('Error de conexión')
        return
      }
      if (error?.response?.status === 401) {
        toast.error('Sessión expirada')
        onLogout()
        return
      }

      return Promise.reject(error)
    }
  )
}

export { CURRENT_API_URL }
export default createInstace()
