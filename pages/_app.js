import Layout from '../components/dashboard/Layout'
import '../styles/globals.css'
import { store } from '../store/store'
import { Provider } from 'react-redux'
import { Fragment, useMemo } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { SessionProvider } from 'next-auth/react'

function MyApp ({ Component, pageProps: { session, ...pageProps } }) {
  const ComponentLayout = useMemo(
    () => (Component.getLayout ? Fragment : Layout),
    [Component.getLayout]
  )

  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <ToastContainer />

        <ComponentLayout>
          <Component {...pageProps} />
        </ComponentLayout>
      </Provider>
    </SessionProvider>
  )
}

export default MyApp
