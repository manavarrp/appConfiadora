import styles from '../../../styles/Username.module.css'
import Logo from '../../common/Logo'
import { useForm } from 'react-hook-form'
import Input from '../../common/Input'
import { firstLoginSchema } from '../../../utils/formSchema/firstLoginSchema'
import { yupResolver } from '@hookform/resolvers/yup'
import { decodeToken } from '../../../utils/decodeToken'
import { changePasswordFirstLogin } from '../../../services/api'
import { useRouter } from 'next/router'
import { auth } from '../../../utils/auth'

const FirstLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(firstLoginSchema),
    initialValues: {
      currentPassword: '',
      newPassword: ''
    }
  })

  const router = useRouter()
  const { token = '' } = router?.query

  const firstLoginSubmit = async (values) => {
    const userInformation = decodeToken(token) || {}
    const payload = {
      ...values,
      token,
      changePassword: true,
      userName: userInformation?.email
    }
    try {
      await changePasswordFirstLogin(payload)
      const response = await auth({ token, ...userInformation })
      if (response.status === 200) {
        return router.replace('/admin')
      }
      console.log('error')
    } catch (e) {
      console.log('error')
    }
  }

  return (
    <>
      <div className='container mx-auto'>
        <div className='flex justify-center items-center h-screen'>
          <div className='md:w-[400px] shadow-sm shadow-gray bg-white w-[100%] mx-auto px-7 py-4 rounded-xl mt-8 items-center'>
            <Logo />
            <div className='title flex flex-col items-center'>
              <span className=' text-xl w-2/3 text-center text-gray'>
                Cambia tu contraseña
              </span>
            </div>
            <form onSubmit={handleSubmit(firstLoginSubmit)}>
              <div className='textbox flex flex-col items-center gap-6'>
                <Input
                  type='password'
                  placeholder='Contraseña actual'
                  className={styles.textbox}
                  name='currentPassword'
                  register={register}
                  error={errors?.currentPassword?.message}
                />

                <Input
                  type='password'
                  placeholder='Contraseña nueva'
                  className={styles.textbox}
                  name='newPassword'
                  register={register}
                  error={errors?.newPassword?.message}
                />

                <button
                  type='submit'
                  className={styles.btn}
                  // disabled={isLoading}
                >
                  Entrar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default FirstLogin
