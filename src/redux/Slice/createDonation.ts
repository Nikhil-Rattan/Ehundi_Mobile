import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import apiClient from '../apiClient';
import { API_ENDPOINTS } from '../api'; 

interface DonationPayload {

  amount: number;
  idCreated: string;
  user?: string; 
//   "": "605c72e1f6c0d1b1b8e4f2a1", 
  name:string;            
  gotra: string;            
  poojaDate: any;
 
  donationAmount:number;   
  paymentStatus:string ;   
}

interface DonationState {
  donationData: DonationPayload | null;
  loading: boolean;
  error: string | null;
}

export const createDonationAPI = createAsyncThunk<DonationPayload, DonationPayload>(
  'donation/create',
  async (donationData, { rejectWithValue }) => {
    
    try {
      const response = await apiClient.post(API_ENDPOINTS.DONATIONS, donationData);
      return response.data; 
    } catch (error) {
      console.error(error.response, 'Error creating donation');
      return rejectWithValue(error.response.data || 'An error occurred');
    }
  }
);

const initialState: DonationState = {
  donationData: null,
  loading: false,
  error: null,
};

const donationSlice = createSlice({
  name: 'donation',
  initialState,
  reducers: {
    resetDonationState: state => {
      state.donationData = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(createDonationAPI.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createDonationAPI.fulfilled, (state, action: PayloadAction<DonationPayload>) => {
        state.loading = false;
        state.donationData = action.payload;
      })
      .addCase(createDonationAPI.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { resetDonationState } = donationSlice.actions;
export default donationSlice.reducer;






