import { useCallback, useEffect, useState } from 'react'
import { GetList } from '../services/api'

const useGetState = () => {
  const [valuesGender, setValuesGender] = useState([])

  const GetData = useCallback(async () => {
    const result = await GetList('identification-types')
    setValuesGender(result?.data)
  }, [])

  useEffect(() => {
    GetData()
  }, [GetData])
  return valuesGender
}

export default useGetState
