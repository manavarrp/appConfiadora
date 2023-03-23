import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import styles from '../../../styles/Username.module.css'
import Input from '../../common/Input'

function RegisterForms () {
  const isLoading = useSelector((state) => state.auth)

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

  const onSubmitPersonForm = () => {}

  return (
    <div className=''>
      <form
        onSubmit={handleSubmit(onSubmitPersonForm)}
        className='mx-auto max-w-screen-md'
      >
        <div className='flex flex-col w-full mb-3 gap-3 sm:flex-row'>
          <Input
            type='text'
            placeholder='Número exterior'
            className={styles.textbox}
            name='firstName'
            register={register}

            // error={errors?.firstName?.message}
          />
          <Input
            type='text'
            placeholder='Número interior'
            className={styles.textbox}
            name='secondName'
            register={register}

            // error={errors?.secondName?.message}
          />
          <Input
            type='text'
            placeholder='Colonia'
            className={styles.textbox}
            name='firstLastName'
            register={register}

            // error={errors?.firstLastName?.message}
          />
        </div>
        <div className='flex flex-col w-full mb-3 gap-3 sm:flex-row'>
          <Input
            type='text'
            placeholder='Alcaldía/Municipio '
            className={styles.textbox}
            name='firstLastName'
            register={register}

            // error={errors?.firstLastName?.message}
          />
          <Input
            type='text'
            placeholder='Ciudad/Población'
            className={styles.textbox}
            name='secondLastName'
            register={register}

            // error={errors?.secondLastName?.message}
          />
        </div>
        <div className='flex flex-col w-full mb-3 gap-3 sm:flex-row'>
          <Input
            type='text'
            placeholder='Estado'
            className={styles.textbox}
            name='phoneNumber'
            register={register}
            error={errors?.phoneNumber?.message}
          />
          <Input
            type='text'
            placeholder='Código Postal'
            className={styles.textbox}
            name='birthDate'
            register={register}

            // error={errors?.birthDate?.message}
          />
        </div>
        <div className='w-full mb-3'>
          <label className='text-darkBlue'>
            Adjuntar comprobante domiciliario
          </label>
          <Input
            type='file'
            name='ine'
            register={register}
            // error={errors?.email?.message}
          />
          <p
            className='ml-2 mt-1 text-sm text-gray-500 dark:text-gray-300'
            id='file_input_help'
          >
            PNG, JPG ó PDF (MAX. 800x400px).
          </p>
        </div>
        <div className='flex justify-between mt-5'>
          <button
            type='submit'
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
