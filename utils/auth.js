import { signIn, signOut } from 'next-auth/react'
import Cookies from 'js-cookie'
import { AXIOS_COOKIE } from '../config'

export const auth = (payload) => signIn('credentials', {
  redirect: false,
  ...payload
})

export const onLogout = () => {
  signOut({ callbackUrl: '/auth/login' })
  Cookies.remove(AXIOS_COOKIE)
}
