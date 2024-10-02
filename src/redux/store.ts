import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {setupListeners} from '@reduxjs/toolkit/query';
import authSlice from './Slice/authSlice';
import signupReducer from './Slice/signupSlice';
import {clientApi} from './Api/ClientApis/clientApi';
import signInSlice from './Slice/signInSlice';
import allCategoriesReducer from './Slice/allCategories';
import createDonationReducer from './Slice/createDonation';
const reducer = combineReducers({
  auth: authSlice,
  signUp: signupReducer,
  signIn: signInSlice,
  categories:allCategoriesReducer,
  donation:createDonationReducer,

  [clientApi.reducerPath]: clientApi.reducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth'],
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(clientApi.middleware),
  devTools: true,
});
setupListeners(store.dispatch);

export default store;
