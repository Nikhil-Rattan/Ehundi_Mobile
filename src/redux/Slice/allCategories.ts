import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import apiClient from '../apiClient';
import { API_ENDPOINTS } from '../api'; 
interface   Category {
  id: string;
  name: string;
}

interface AuthState {
  categoriesData: Category[] | null;
  loading: boolean;
  error: string | null;
}

export const allCategoriesAPI = createAsyncThunk<Category[], {_poojaName: string;}>(
  'categories/fetchAll', 
  async (_poojaName, { rejectWithValue }) => {
    try {
      // console.log(_poojaName,"909090000000000000000");
      
      const response = await apiClient.get(`${API_ENDPOINTS.CATEGORIES}?poojaCategory=${_poojaName}`);
      console.log(`${API_ENDPOINTS.CATEGORIES}?poojaCategory=${_poojaName}`);
      

      // const response = await apiClient.get(API_ENDPOINTS.CATEGORIES,_poojaName);
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
