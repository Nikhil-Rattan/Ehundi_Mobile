import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import axios from 'axios';

interface User {
  id: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
}

interface AuthState {
  signData: User | null;
  loading: boolean;
  error: string | null;
}

export const signUpUser = createAsyncThunk<
  User,
  {
    fullName: string;
    email: string;
    phoneNumber: string;
    password: string;
    confirmPassword: string;
  }
>('auth/signUp', async (userData, {rejectWithValue}) => {
  try {
    console.log(userData);
    
    const response = await axios.post(
      'https://ehundi-api.onrender.com/auth/user-Signup',
      userData,
    );
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data);
  }
});

const initialState: AuthState = {
  signData: null,
  loading: false,
  error: null,
};

const signupSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: state => {
      state.signData = null;
      state.error =null;

    },
  },
  extraReducers: builder => {
    builder
      .addCase(signUpUser.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signUpUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.loading = false;
        state.signData = action.payload;
      })
      .addCase(signUpUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const {logout} = signupSlice.actions;
export default signupSlice.reducer;
