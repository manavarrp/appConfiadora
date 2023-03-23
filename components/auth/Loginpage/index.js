import styles from '../../../styles/Username.module.css'
import Logo from '../../common/Logo'
import Link from 'next/link'
import Input from '../../common/Input'
import { useForm } from 'react-hook-form'
import { loginSchema } from '../../../utils/formSchema/loginSchema'
import { yupResolver } from '@hookform/resolvers/yup'
import Footer from '../../Footer'
import useLogin from '../../../hooks/useLogin'
import { auth } from '../../../utils/auth'
import { useSession } from 'next-auth/react'

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(loginSchema),
    initialValues: {
      UserName: '',
      Password: ''
    }
  })

  const { login, isLoading } = useLogin()

  const { data } = useSession()

  // const router = useRouter();

  console.log({ data })

  /*
  const { authDetails, isLoading, isSuccess, twoFactor, isError } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();
  console.log(authDetails);

  //console.log(errors);
  //console.log(authDetails);
  useEffect(() => {
    if (authDetails && isSuccess) {
      router.push("/profile");
    }
    if (twoFactor) {
      dispatch(sendLoginCode(UserName));
      router.push("/loginWithCode");
    }
  }, [router, authDetails]); */

  const onLogin = () => {
    auth({ token: '12345', name: 'Diego', isFirstLogin: true })
  }

  return (
    <div className='flex flex-col justify-between flex-no-wrap'>
      <div className='md:w-[400px] shadow-sm shadow-gray bg-white w-[100%] mx-auto px-7 py-4 rounded-xl mt-8 items-center '>
        <div className='title flex flex-col items-center'>
          <Logo />
          <span className=' text-center text-gray ml-6'>
            Credito al alcance de todos
          </span>
        </div>
        <form className='py-1' onSubmit={handleSubmit(onLogin)}>
          <div className='profile flex justify-center py-4'>
            <picture>
              <img
                className={styles.profile_img}
                src='./profile.png'
                alt='avatar'
              />
            </picture>
          </div>
          <div className='flex flex-col w-full'>
            <div className='flex justify-center w-full mb-1 gap-3'>
              <Input
                type='email'
                placeholder='Correo electronico'
                className={styles.textbox}
                name='UserName'
                register={register}
                error={errors?.UserName?.message}
              />
            </div>

            <div className='flex justify-center w-full mt-3 gap-3'>
              <Input
                type='text'
                placeholder='Contraseña'
                className={styles.textbox}
                name='Password'
                register={register}
                error={errors?.Password?.message}
              />
            </div>
          </div>
          <div className='flex justify-center mt-5'>
            <button type='submit' className={styles.btn} disabled={isLoading}>
              {isLoading ? 'cargando' : 'Ingreso'}
            </button>
          </div>
          <div className='text-center py-2 text-gray'>
            <span>
              ¿ No eres usuario ?
              <Link className='text-darkBlue' href='/register'>
                {' '}
                Registrate ahora
              </Link>
            </span>
          </div>
          <div className='text-center text-gray'>
            <span>
              ¿ No recuerdas tu contraseña ?
              <Link className='text-darkBlue' href='/reset'>
                {' '}
                Recuperala
              </Link>
            </span>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  )
}

export default Login
