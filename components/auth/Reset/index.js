import styles from '../../../styles/Username.module.css'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import Logo from '../../common/Logo'
import { useRouter } from 'next/router'
import authService from '../../../features/auth/authServices'
import Input from '../../common/Input'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { resetSchema } from '../../../utils/formSchema/resetSchema'
import Footer from '../../Footer'

const Reset = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(resetSchema),
    initialValues: {
      email: ''
    }
  })

  const router = useRouter()

  const { isLoading, isSuccess, isError } = useSelector((state) => state.auth)

  const onForgotPasswordFormSubmitted = async (data) => {
    const payload = {
      email: data.email
    }
    console.log(payload)
    await authService.forgotPasswordRequest(payload)
    if (isError) {
      toast.error('Ocurrió un error')
    }

    toast.info('Por favor valida tu correo electronico')
  }

  useEffect(() => {
    if (isSuccess) {
      router.push('/login')
    }
  }, [router, isSuccess])

  return (
    <>
      <div className='md:w-[400px] shadow-sm shadow-gray bg-white w-[100%] mx-auto px-7 py-4 rounded-xl mt-10 my-auto items-center'>
        <div className='title flex flex-col items-center'>
          <Logo />
          <span className='text-xl w-2/3 text-center text-gray'>
            Recuperar
          </span>
        </div>
        <form onSubmit={handleSubmit(onForgotPasswordFormSubmitted)}>
          <div className='textbox flex flex-col items-center gap-6'>
            <span className='py-4 text-sm text-left text-gray'>
              Ingresa tu correo electronico
            </span>
            <Input
              type='email'
              placeholder='Correo electronico'
              className={styles.textbox}
              name='email'
              register={register}
              error={errors?.email?.message}
            />

            <button
              type='submit'
              className={styles.btn}
              disabled={isLoading}
            >
              {isLoading ? 'Cargando' : 'Enviar'}
            </button>
          </div>
        </form>
      </div>

      <Footer />
    </>
  )
}

export default Reset
