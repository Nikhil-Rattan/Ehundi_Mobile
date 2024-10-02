import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import apiClient from '../apiClient';
import { API_ENDPOINTS } from '../api'; 
interface Category {
  id: string;
  name: string;
}

interface AuthState {
  categoriesData: Category[] | null;
  loading: boolean;
  error: string | null;
}

export const allCategoriesAPI = createAsyncThunk<Category[], void>(
  'categories/fetchAll', 
  async (_, { rejectWithValue }) => {
    try {
      const response = await apiClient.get(API_ENDPOINTS.CATEGORIES);
      return response.data; 
    } catch (error) {
      console.error(error.response, 'Error fetching categories');
      return rejectWithValue(error.response.data || 'An error occurred');
    }
  }
);

const initialState: AuthState = {
  categoriesData: null,
  loading: false,
  error: null,
};

const allCategories = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    logout: state => {
      state.categoriesData = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(allCategoriesAPI.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(allCategoriesAPI.fulfilled, (state, action: PayloadAction<Category[]>) => {
        
        state.loading = false;
        state.categoriesData = action.payload;
      })
      .addCase(allCategoriesAPI.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { logout } = allCategories.actions;
export default allCategories.reducer;
