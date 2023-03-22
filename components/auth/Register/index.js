import React, { useEffect, useRef, useState } from 'react'
import styles from '../../../styles/Username.module.css'
import { useForm, FormProvider } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../../../features/auth/authSlice'
import States from '../Catalogs/States'
import useGetIdentificationType from '../../../hooks/useGetIdentificationType'
import Gender from '../Catalogs/Gender'
import Link from 'next/link'
import RegisterForm from '../RegisterForms'
import Logo from '../../common/Logo'
import useGetCurpCalculation from '../../../hooks/useGetCurpCalculation'
import { yupResolver } from '@hookform/resolvers/yup'
import { registerSchema } from '../../../utils/formSchema/registerSchema'
import { useRouter } from 'next/router'
import Input from '../../common/Input'
import { Checkbox } from '../../common/Checkbox'
import Footer from '../../Footer'
import { toast } from 'react-toastify'

const Register = () => {
  const [localDirtyData, setLocalDirtyData] = useState({})
  const identificationTypeRef = useRef()
  const idTypes = useGetIdentificationType()
  const { isLoading, isSuccess } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const buttonRef = useRef()
  const router = useRouter()
  const methods = useForm({
    defaultValues: {
      firstName: '',
      secondName: '',
      firstLastName: '',
      secondLastName: '',
      email: '',
      phoneNumber: '',
      birthDate: '',
      identificationNumber: '',
      genderId: '',
      stateId: '',
      hasAgreementCode: false,
      agreementCode: '',
      AcceptTermsAndConditions: false,
      canRegister: false
    },
    resolver: yupResolver(registerSchema)
  })

  const {
    register,
    handleSubmit,
    resetField,
    setValue,
    watch,
    getValues,
    formState: { errors }
  } = methods

  const onBlurData = (event) => {
    // console.log(event.target.name);
    // console.log(event.target.value);
    const { name, value } = event.target
    // console.log(localDirtyData[name], value);
    if (localDirtyData[name] && localDirtyData[name] !== value) {
      setValue('canRegister', false)
      setValue('identificationNumber', '')
      buttonRef?.current?.focus()
      toast.info('Debes calcular nuevamente tu CURP')
    }
  }

  const GetCurpCalculation = useGetCurpCalculation()
  // console.log(formData);
  const values = getValues()
  console.log(errors)
  // console.log(values.canRegister);
  // console.log(values.canRegister);
  watch(['hasAgreementCode'])
  const [getIdIden, setGetId] = useState('')

  const identiTypes = idTypes.data

  const handleIdentificationTypes = (event) => {
    const getId = event.target.value
    setGetId(getId)
    resetField('identificationNumber')

    setValue('canRegister', getId === '08db0949-ff18-4dc9-87c2-23d43aaa271b')

    // console.log(identificationTypeRef.current);

    // getValues(getId);
  }

  const submitFormCurp = async (data) => {
    // console.log(data);
    const payload = {
      firstName: data.firstName,
      secondName: data.secondName,
      firstLastName: data.firstLastName,
      secondLastName: data.secondLastName,
      stateId: data.stateId,
      birthDate: data.birthDate,
      genderId: data.genderId
    }
    data.email = data.email.toLowerCase()
    GetCurpCalculation(payload).then((identificationNumber) => {
      setValue('identificationNumber', identificationNumber)
      setValue('canRegister', true)
      setLocalDirtyData({ ...data })
    })
  }

  // const result = message;
  // console.log(localDirtyData);

  // console.log(message.data);
  const submitFormRegister = async (data) => {
    // console.log(data);

    dispatch(registerUser(data))

    // console.info(JSON.stringify(data));
  }
  useEffect(() => {
    if (isSuccess) {
      router.push('/login')
    }
  }, [isSuccess, router])
  return (
    <>
      <div className='md:w-[500px] shadow-sm shadow-gray bg-white w-[100%] mx-auto px-7 py-4 rounded-xl mt-8 items-center'>
        <div className='title flex flex-col items-center'>
          <Logo />
          <span className=' text-center text-gray ml-6'>
            Credito al alcance de todos
          </span>
        </div>
        <FormProvider {...methods}>
          <form className='py-1' ref={identificationTypeRef}>
            <div className='items-center'>
              <div>
                <RegisterForm onBlurData={onBlurData} />
              </div>
              <div className='w-full gap-1'>
                <div className='mb-3'>
                  {' '}
                  <Gender onBlurData={onBlurData} />
                </div>
                <div className='mb-3'>
                  {' '}
                  <States onBlurData={onBlurData} />
                </div>
              </div>
              <div className='flex flex-col justify-center  w-full mb-3'>
                <select
                  className={styles.textbox}
                  onChange={(e) => handleIdentificationTypes(e)}
                >
                  <option value=''>Tipo de documento</option>
                  {identiTypes &&
                    identiTypes.map((item) => (
                      <option key={item?.id} value={item?.id}>
                        {item?.name}
                      </option>
                    ))}
                </select>
                {errors?.identificationTypeId?.message && (
                  <span className='text-red '>
                    {errors?.identificationTypeId?.message}
                  </span>
                )}
              </div>
              {getIdIden === '08db0949-ff0f-42f1-8a22-e6787570f3da' && (
                <div className='flex flex-col justify-center w-full gap-6 '>
                  <div className='flex justify-center'>
                    <button
                      type='submit'
                      className={styles.btn}
                      disabled={isLoading}
                      onClick={handleSubmit(submitFormCurp)}
                      ref={buttonRef}
                    >
                      {isLoading ? 'cargando' : 'Calcula Curp'}
                    </button>
                  </div>
                  <label className='w-full flex justify-center'>
                    Por favor valida si tu CURP es correcto:
                  </label>
                  <input
                    className='visibility: hidden'
                    value={getIdIden}
                    {...register('identificationTypeId')}
                  />
                  <Input
                    type='text'
                    placeholder='CURP'
                    className={styles.textbox}
                    name='identificationNumber'
                    register={register}
                    error={errors?.identificationNumber?.message}
                    readOnly
                  />
                </div>
              )}
              {getIdIden === '08db0949-ff18-4dc9-87c2-23d43aaa271b' && (
                <div className=' flex flex-col items-center gap-6 '>
                  <label className='w-full flex justify-center mt-2'>
                    Por favor ingresa tu numero de extranjeria
                  </label>
                  <input
                    className='visibility: hidden'
                    value={getIdIden}
                    {...register('identificationTypeId')}
                  />
                  <Input
                    type='text'
                    placeholder='Numero de extranjeria'
                    className={styles.textbox}
                    name='identificationNumber'
                    register={register}
                    error={errors?.identificationNumber?.message}
                  />
                </div>
              )}
            </div>
            <div className='flex flex-col justify-center items-center mt-2 w-full'>
              <Checkbox
                type='checkbox'
                id='hasAgreementCode'
                name='hasAgreementCode'
                register={register}
                error={errors?.hasAgreementCode?.message}
              >
                {' '}
                <label
                  className='transititext-primary text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600'
                  data-te-toggle='tooltip'
                  title='Si tu empresa no tiene convenio con nosotros omite este campo'
                >
                  ¿Tienes convenio con tu empresa?
                </label>
              </Checkbox>

              <div>
                {values.hasAgreementCode
                  ? (
                    <Input
                      type='text'
                      placeholder='Ingresa tu código'
                      className={styles.textbox}
                      name='agreementCode'
                      register={register}
                      error={errors?.agreementCode?.message}
                    />
                    )
                  : (
                      ''
                    )}
              </div>
            </div>
            <div className='flex flex-col justify-center items-center mt-2 w-full'>
              <Checkbox
                id='AcceptTermsAndConditions'
                type='checkbox'
                name='AcceptTermsAndConditions'
                register={register}
                error={errors?.AcceptTermsAndConditions?.message}
              >
                <label>
                  <Link
                    href='/termin'
                    target='_blank'
                    className='text-blue w-full hover:cursor-pointer'
                  >
                    <label
                      className='transititext-primary text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600'
                      data-te-toggle='tooltip'
                      title='Debes aceptar terminos y condiciones para el registro'
                    >
                      <span className='hover:cursor-pointer w-full'>
                        {' '}
                        Términos y condiciones
                      </span>
                    </label>
                  </Link>
                </label>
              </Checkbox>
            </div>
            <div className=' flex justify-center mt-3'>
              <button
                type='submit'
                className={styles.btn}
                disabled={isLoading}
                // disabled={!watch("AcceptTermsAndConditions")}
                onClick={handleSubmit(submitFormRegister)}
              >
                {isLoading ? 'cargando' : 'Registrate'}
              </button>
            </div>
          </form>{' '}
        </FormProvider>
        <div className='text-center py-2 text-gray'>
          <span>
            ¿ Ya tienes cuenta ?
            <Link className='text-darkBlue' href='/login'>
              {' '}
              Ingresa
            </Link>
          </span>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Register
