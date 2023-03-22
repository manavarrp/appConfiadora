import authService from './authServices'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

let authDetails

if (typeof window !== 'undefined') {
  authDetails = JSON.parse(localStorage.getItem('authDetails'))
}

const initialState = {
  authDetails: authDetails ?? null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  twoFactor: false,
  message: ''
}

export const login = createAsyncThunk(
  'auth/login',
  async (userData, thunkAPI) => {
    try {
      return await authService.login(userData)
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

export const firstLogin = createAsyncThunk(
  'auth/firstLogin',
  async (userData, thunkAPI) => {
    try {
      return await authService.firstLogin(userData)
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

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (userData, thunkAPI) => {
    try {
      return await authService.registerUser(userData)
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

export const sendLoginCode = createAsyncThunk(
  'auth/sendLoginCode',
  async (userData, thunkAPI) => {
    try {
      return await authService.sendLoginCode(userData)
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

export const loginWithCode = createAsyncThunk(
  'auth/loginWithCode',
  async (userData, thunkAPI) => {
    try {
      return await authService.loginWithCode(userData)
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

export const getUser = createAsyncThunk('auth/getUser', async (thunkAPI) => {
  try {
    return await authService.getUser()
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString()
    return thunkAPI.rejectWithValue(message)
  }
})

export const logout = createAsyncThunk('auth/logout', async () => {
  await authService.logout()
})

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) => {
      (state.isError = false),
      (state.twoFactor = false),
      (state.isSuccess = false),
      (state.isLoading = false),
      (state.message = '')
    },
    resetAuthDetails: (state) => {
      state.authDetails = null
    },
    setAuthDetails: (state, action) => {
      state.authDetails = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state, action) => {
        state.isLoading = true
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.authDetails = { ...action.payload, isFirstLogin: true }

        toast.success('Bienvenido')
      })
      .addCase(login.rejected, (state, action) => {
        (state.isLoading = false),
        (state.isError = true),
        (state.message = action.payload)
        state.authDetails = null
        toast.error(action.payload)
        /*  if (action.payload.includes("New browser")) {
          state.twoFactor = true;
        } */
      })
      // isFirsloggin
      .addCase(firstLogin.pending, (state, action) => {
        state.isLoading = true
      })
      .addCase(firstLogin.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.authDetails = { ...state.authDetails, firstLogin: true }
        // console.log(action)
        toast.success('Bienvenido')
      })
      .addCase(firstLogin.rejected, (state, action) => {
        (state.isLoading = false),
        (state.isError = true),
        (state.message = action.payload)
        toast.error(action.payload)
        if (action.payload.includes('New browser')) {
          state.twoFactor = true
        }
      })
      // send Login Code
      .addCase(sendLoginCode.pending, (state) => {
        state.isLoading = true
      })
      .addCase(sendLoginCode.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.message = action.payload
        toast.success(action.payload)
      })
      .addCase(sendLoginCode.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        toast.error(action.payload)
      })
      // loginWithCode
      .addCase(loginWithCode.pending, (state) => {
        state.isLoading = true
      })
      .addCase(loginWithCode.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.isLoggedIn = true
        state.twoFactor = false
        state.user = action.payload
        toast.success(action.payload)
      })
      .addCase(loginWithCode.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.user = null
        toast.error(action.payload)
      })

      // Register User
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.isLoggedIn = true
        toast.success('Registro con exito!')
        console.log(action.payload)
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        toast.error(action.payload)
      })
      // Get User
      .addCase(getUser.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.isLoggedIn = true
        state.authDetails = action.payload
      })
      .addCase(getUser.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        toast.error(action.payload)
      })
      // logout
      .addCase(logout.fulfilled, (state, action) => {
        state.user = null
      })
  }
})

export const { reset, resetAuthDetails, setAuthDetails } = authSlice.actions
export default authSlice.reducer
