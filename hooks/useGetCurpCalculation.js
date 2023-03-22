import { useCallback } from 'react'
import { toast } from 'react-toastify'
import { curpCalculation } from '../services/api'

const useGetCurpCalculation = () => {
  const getCurpCalculation = useCallback(async (userData) => {
    try {
      const response = await curpCalculation(userData)
      return response?.data?.data
    } catch (e) {
      toast('Valida por favor los campos necesarios para el obtener el CURP')
    }
  }, [])

  return getCurpCalculation
}

export default useGetCurpCalculation
