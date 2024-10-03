// import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
// import apiClient from '../apiClient';
// import { API_ENDPOINTS } from '../api';

// interface DonationPayload {
//   idCreated: string; 
// }

// interface DonationState {
//   userDonationData: DonationPayload[]; 
//   loading: boolean;
//   error: string | null;
// }

// // Update the thunk to accept an id parameter
// export const fetchDonationsAPI = createAsyncThunk<DonationPayload[], string>(
//   'donation/fetch',
//   async (id, { rejectWithValue }) => {
//     try {
//       // Use the id in the request URL or as a query parameter
//       const response = await apiClient.get(`${API_ENDPOINTS.DONATIONS}/${id}`);
//       return response.data;
//     } catch (error) {
//       console.error('Error fetching donations:', error.response || error);
//       return rejectWithValue(error.response?.data || 'An error occurred');
//     }
//   }
// );

// const initialState: DonationState = {
//   userDonationData: [],
//   loading: false,
//   error: null,
// };

// const donationSlice = createSlice({
//   name: 'donation',
//   initialState,
//   reducers: {
//     resetDonationState: state => {
//       state.userDonationData = [];
//       state.loading = false;
//       state.error = null;
//     },
//   },
//   extraReducers: builder => {
//     builder
//       .addCase(fetchDonationsAPI.pending, state => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchDonationsAPI.fulfilled, (state, action: PayloadAction<DonationPayload[]>) => {
//         console.log(action.payload);
        
//         state.loading = false;
//         state.userDonationData = action.payload; // Replace with fetched data
//       })
//       .addCase(fetchDonationsAPI.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload as string;
//       });
//   },
// });

// export const { resetDonationState } = donationSlice.actions;
// export default donationSlice.reducer;

import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import apiClient from '../apiClient';
import { API_ENDPOINTS } from '../api';

interface DonationPayload {
  idCreated: string; 
}

interface DonationState {
  userDonationData: DonationPayload[]; 
  loading: boolean;
  error: string | null;
}

export const fetchDonationsAPI = createAsyncThunk<DonationPayload[], void>(
  'donation/fetch', 
  async (_, { rejectWithValue }) => {
    try {
      const response = await apiClient.get(API_ENDPOINTS.DONATIONS);      
      return response.data; 
    } catch (error) {
      console.error('Error fetching donations:', error.response || error);
      return rejectWithValue(error.response?.data || 'An error occurred');
    }
  }
);

const initialState: DonationState = {
  userDonationData: [],
  loading: false,
  error: null,
};

const donationSlice = createSlice({
  name: 'donation',
  initialState,
  reducers: {
    resetDonationState: state => {
      state.userDonationData = [];
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchDonationsAPI.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDonationsAPI.fulfilled, (state, action: PayloadAction<DonationPayload[]>) => {
        console.log(action.payload,"(784360756750")
        state.loading = false;
        state.userDonationData = action.payload;
      })
      .addCase(fetchDonationsAPI.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { resetDonationState } = donationSlice.actions;
export default donationSlice.reducer;
