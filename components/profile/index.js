import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../../features/auth/authSlice'

const index = () => {
  const { authDetails } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors }
  } = useForm({
    // resolver: yupResolver(loginSchema),
    initialValues: {
      userName: authDetails?.userName,
      secondName: '',
      firstLastName: '',
      secondLastName: '',
      email: authDetails?.email,
      phoneNumber: '',
      birthDate: '',
      identificationNumber: '',
      genderId: '',
      new_password1: '',
      new_password2: ''
    }
  })

  const values = getValues()
  console.log(values)
  useEffect(() => {
    dispatch(getUser())
  }, [dispatch])

  return (
    <>
      <p className='text-gray-dark text-3xl mb-16 font-bold'>Mi Perfil</p>
      <div className='grid lg:grid-cols-1 gap-5 mb-16'>
        <div className='bg-white rounded h-20 shadow-sm '>
          <h6>Primer Nombre: {values.userName}  {values.email}</h6>

        </div>
      </div>
    </>
  )
}

export default index
