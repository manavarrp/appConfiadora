import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import styles from '../../../styles/Username.module.css'
import Input from '../../common/Input'

function RegisterForms () {
  const isLoading = useSelector((state) => state.auth)

  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    // resolver: yupResolver(loginSchema),
    initialValues: {
      UserName: '',
      Password: ''
    }
  })

  const onClickBack = () => {
    router.push('/personal-form/personal-data')
  }

  const onSubmitPersonForm = () => {
    router.push('/personal-form/personal-data')
  }

  return (
    <div className=''>
      <form
        // onSubmit={handleSubmit(onSubmitPersonForm)}
        className='mx-auto max-w-screen-md'
      >
        <div className='w-full mb-3'>
          <Input
            type='text'
            placeholder='Nombres Completos'
            className={styles.textbox}
            name='email'
            register={register}
            // error={errors?.email?.message}
          />
        </div>
        <div className='flex flex-col w-full mb-3 gap-3 sm:flex-row'>
          <Input
            type='text'
            placeholder='Primer nombre'
            className={styles.textbox}
            name='firstName'
            register={register}

            // error={errors?.firstName?.message}
          />
          <Input
            type='text'
            placeholder='Segundo nombre'
            className={styles.textbox}
            name='secondName'
            register={register}

            // error={errors?.secondName?.message}
          />
        </div>
        <div className='flex flex-col w-full mb-3 gap-3 sm:flex-row'>
          <Input
            type='text'
            placeholder='Apellido Paterno'
            className={styles.textbox}
            name='firstLastName'
            register={register}

            // error={errors?.firstLastName?.message}
          />
          <Input
            type='text'
            placeholder='Apellido Materno '
            className={styles.textbox}
            name='secondLastName'
            register={register}

            // error={errors?.secondLastName?.message}
          />
        </div>
        <div className='flex flex-col w-full mb-3 gap-3 sm:flex-row'>
          <Input
            type='text'
            placeholder='phone'
            className={styles.textbox}
            name='phoneNumber'
            register={register}
            error={errors?.phoneNumber?.message}
          />
          <Input
            type='date'
            placeholder='Fecha de nacimiento'
            className={styles.textbox}
            name='birthDate'
            register={register}

            // error={errors?.birthDate?.message}
          />
        </div>
        <div className='w-full mb-3'>
          <Input
            type='text'
            placeholder='Correo electronico'
            className={styles.textbox}
            name='email'
            register={register}
            // error={errors?.email?.message}
          />
        </div>
        <div className='flex justify-between mt-5'>
          <button
            type='submit'
            onClick={onClickBack}
            className=' border bg-blue w-1/4 py-4 rounded-lg text-white text-xl shadow-sm text-center'
          >
            Atras
          </button>
          <button
            type='submit'
            className=' border bg-blue w-1/4 py-4 rounded-lg text-white text-xl shadow-sm text-center'
          >
            Siguiente
          </button>
        </div>
      </form>
    </div>
  )
}

export default RegisterForms
