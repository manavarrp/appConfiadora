import Cookies from 'js-cookie'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { AXIOS_COOKIE } from '../../../config'

const authOptions = {
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: 'Credentials',
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize (user, req) {
        return user.token ? user : null
      }
    })
  ],
  pages: {
    signIn: '/auth/login',
    error: '/auth/login' // Error code passed in query string as ?error=
  },
  callbacks: {
    async jwt ({ token, user }) {
      if (user) {
        const { token: accessToken, name, isFirstLogin } = user
        token = { ...token, user: { name, isFirstLogin }, accessToken }
      }

      return token
    },
    async session ({ session, token }) {
      if (token.accessToken) {
        session.accessToken = token.accessToken
        Cookies.set(AXIOS_COOKIE, token.accessToken)
      }

      if (token.user) {
        session.user = token.user
      }

      return session
    }
  }
}

export default NextAuth(authOptions)
