import { useCallback, useEffect, useState } from 'react'
import { GetList } from '../services/api'

const useGetGender = () => {
  const [valuesGender, setValuesGender] = useState([])

  const GetData = useCallback(async () => {
    const result = await GetList('genders')
    setValuesGender(result?.data)
  }, [])

  useEffect(() => {
    GetData()
  }, [GetData])
  return valuesGender
}

export default useGetGender
