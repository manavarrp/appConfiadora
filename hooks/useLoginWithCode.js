import { useCallback, useState } from 'react'
import globalAxios from '../axios'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'
import { auth } from '../utils/auth'
import { decodeToken } from '../utils/decodeToken'

const loginWithCode = (payload) => {
  return globalAxios.post('auth/login/', payload)
}

const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const login = useCallback(
    async (payload) => {
      try {
        setIsLoading(true)

        const { data } = await loginWithCode(payload)

        const { token, isFirstLogin } = data?.data
        if (!token) return console.log('error')

        if (isFirstLogin) return router.replace(`/auth/change-first-password?t=${token}`)

        const userInformation = decodeToken(token) || {}
        const response = await auth({ token, ...userInformation })
        if (response.status === 200) return router.replace('/admin')
      } catch (error) {
        console.log(error)
        toast.error('Error al loguear')
      } finally {
        setIsLoading(false)
      }
    },
    [router]
  )

  return { login, isLoading }
}

export default useLogin
