import styles from '../../styles/Username.module.css'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Footer from '../footer/Footer'
import Logo from '../../common/logo'
import { useSelector } from 'react-redux'
import authService from '../../featuress/auth/authServices'

const Activate = () => {
  const { isLoading } = useSelector((state) => state.auth)
  const [activated, setActivated] = useState(false)
  const router = useRouter()

  const activate_account = async (e) => {
    const payload = {
      uid: router.query.uid,
      token: router.query.token
    }

    await authService.activateEmail(payload)
    setActivated(true)
  }

  useEffect(() => {
    if (activated) {
      router.push('/login')
    }
  }, [router, activated])

  return (
    <>
      <div className='container mx-auto pb-2'>
        <div className='flex justify-center items-center h-screen py-1'>
          <div className={styles.glass}>
            <div className='title flex flex-col items-center'>
              <Logo />
              <span className='py-4 text-xl w-2/3 text-center text-gray'>
                Activar correo
              </span>
            </div>

            <div className='max-w-3xl ml-14'>
              <button
                onClick={activate_account}
                className={styles.btn}
                disabled={isLoading}
              >
                {isLoading ? 'cargando' : 'Confirmar'}
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Activate
