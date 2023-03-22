import globalAxios from '../../axios'

const physicalPerson = async (userData) => {
  const response = await globalAxios.post('physical-person', userData)
  return response.data
}

const ppFormServices = {
  physicalPerson
}

export default ppFormServices
