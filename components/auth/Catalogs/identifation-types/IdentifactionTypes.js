import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styles from '../../../styles/Username.module.css'
import { useFormContext } from 'react-hook-form'
import { useSelector } from 'react-redux'

const IdentifactionTypes = () => {
  const [values, setValues] = useState([])
  const { register, getValues } = useFormContext()
  const [getIdIden, setGetId] = useState('')

  const { authDetails, isLoading, isSuccess, isError, message, error } =
    useSelector((state) => state.auth)

  useEffect(() => {
    const GetData = async () => {
      const result = await axios.get(
        'http://ec2-54-221-177-27.compute-1.amazonaws.com/identitynomina/api/v1/identification-types'
      )
      setValues(result.data)
    }
    GetData()
  }, [])

  const identiTypes = values.data
  if (identiTypes !== undefined) {
    // console.log(states);
  }

  const handleIdentificationTypes = (event) => {
    const getId = event.target.value
    setGetId(getId)
    getValues(getId)
  }

  return identiTypes !== undefined
    ? (
      <>
        <div>
          <select
            className={styles.textbox}
            onChange={(e) => handleIdentificationTypes(e)}
          >
            <option value=''>Escoge tu tipo de documento</option>
            {identiTypes.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </div>

        {getIdIden === '08db0949-ff0f-42f1-8a22-e6787570f3da' && (
          <div className='name flex flex-col w-3/4 gap-6 '>
            <div>
              <button type='submit' className={styles.btn} disabled={isLoading}>
                {isLoading ? 'cargando' : 'Calcula Curp'}
              </button>
            </div>
            <label className='w-full'>
              Por favor valida si tu CURP es correcto:{' '}
            </label>
            <input
              className='visibility: hidden'
              value='08db0949-ff0f-42f1-8a22-e6787570f3da'
              {...register('identicationTypes')}
            />
            <input
              className={styles.textbox}
              readOnly
              {...register('numberIdenti')}
            />
          </div>
        )}
        {getIdIden === '08db0949-ff18-4dc9-87c2-23d43aaa271b' && (
          <div className='name flex flex-col w-3/4 gap-6 '>
            <label className='w-full'>
              Por favor ingresa tu numero de extranjeria
            </label>
            <input
              className='visibility: hidden'
              value='08db0949-ff18-4dc9-87c2-23d43aaa271b'
              {...register('identicationTypes')}
            />
            <input className={styles.textbox} {...register('extranjeria')} />
          </div>
        )}
      </>
      )
    : (
        ''
      )
}

export default IdentifactionTypes
