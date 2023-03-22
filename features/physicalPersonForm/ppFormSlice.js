import ppFormServices from './ppFormServices'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

const initialState = {
  personalInformation: [],
  addressInfotmation: [],
  workingInformation: [],
  bankInformarion: [],
  additionalInformation: [],
  isLoading: false,
  isError: false,
  message: '',
  isSuccess: false
}

export const personForm = createAsyncThunk(
  'physicalPersonForm/personForm',
  async (userData, thunkAPI) => {
    try {
      return await ppFormServices.physicalPerson(userData)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const ppFormSlice = createSlice({
  name: 'personForm',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(personForm.pending, (state, action) => {
        state.isLoading = true
      })
      .addCase(personForm.fulfilled, (state, action) => {
        state.isLoading = false
        state.personalInformation = action.payload
        toast.success('Información registrada con exito!')
      })
  }
})
