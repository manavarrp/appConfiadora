import { useRouter } from 'next/router'
import authService from '../../../features/auth/authServices'
import React, { useEffect } from 'react'
import { reset } from '../../../features/auth/authSlice'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import styles from '../../../styles/Username.module.css'
import Logo from '../../common/Logo'
import Input from '../../common/Input'
import { useDispatch, useSelector } from 'react-redux'
import Link from 'next/link'

const LoginWithCode = () => {
  const router = useRouter()
  const { isLoading, isSuccess, authDetails } = useSelector(
    (state) => state.auth
  )
  const { register, handleSubmit } = useForm({
    initialValues: { loginCode: '' }
  })
  const dispatch = useDispatch()
  const email = router.query.email

  const sendUserLoginCode = async () => {
    await authService.sendLoginCode(email)
    await dispatch(reset())
  }

  const userLoginWithCode = async (data) => {
    const payload = {
      ...data,
      email
    }
    try {
      const response = await authService.loginWithCode(payload)
      console.log(response)
    } catch (error) {
      toast.error('A ocurrido un error')
    }
  }

  useEffect(() => {
    if (isSuccess && authDetails) {
      router.push('/profile')
    }

    dispatch(reset())
  }, [router, isSuccess, authDetails, dispatch])

  return (
    <div>
      {' '}
      <div className='container mx-auto'>
        <div className='flex justify-center items-center h-screen'>
          <div className={styles.glass}>
            <div className='title flex flex-col items-center'>
              <Logo />
              <span className='text-xl w-2/3 text-center text-gray'>OTP</span>
            </div>
            <form onSubmit={handleSubmit(userLoginWithCode)}>
              <div className='textbox flex flex-col items-center gap-6'>
                <span className='py-4 text-sm text-left text-gray'>
                  Ingresa el codigo de 6 digitos de tu correo
                </span>
                <Input
                  type='text'
                  placeholder='Codigo OTP'
                  className={styles.textbox}
                  name='loginCode'
                  register={register}
                />

                <button
                  type='submit'
                  className={styles.btn}
                  disabled={isLoading}
                >
                  {isLoading ? 'Cargando' : 'Enviar'}
                </button>
                <div className='text-center py-2 text-gray'>
                  <span onClick={sendUserLoginCode}>
                    ¿ No llegó el codigo ?
                    <Link className='text-darkBlue' href='/reset'>
                      {' '}
                      Re-enviar
                    </Link>
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginWithCode
