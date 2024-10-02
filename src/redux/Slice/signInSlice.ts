import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import axios from 'axios';
import {API_ENDPOINTS} from '../api';

interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}

interface AuthState {
  signData: User | null;
  loading: boolean;
  error: string | null;
}

export const signInUser = createAsyncThunk<
  User,
  {email: string; password: string}
>('auth/signIn', async (userData, {rejectWithValue}) => {

  try {
    const response = await axios.post(
      'https://ehundi-api.onrender.com/auth/user-Signin',
      userData,
    );

    return response.data;
  } catch (error) {

    return rejectWithValue(error.response);
  }
});

const initialState: AuthState = {
  signData: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: state => {
      state.signData = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(signInUser.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signInUser.fulfilled, (state, action: PayloadAction<User>) => {

        state.loading = false;
        state.signData = action.payload;
      })
      .addCase(signInUser.rejected, (state, action) => {

        state.loading = false;
        state.error = action.payload?.data?.message as string;
      });
  },
});

export const {logout} = authSlice.actions;
export default authSlice.reducer;
