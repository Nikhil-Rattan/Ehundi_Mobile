import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setupListeners } from "@reduxjs/toolkit/query";
import authSlice from "./Slice/authSlice";
import { clientApi } from "./Api/ClientApis/clientApi";

// Combine all slices including user
const reducer = combineReducers({
    auth: authSlice,
    [clientApi.reducerPath]: clientApi.reducer,
});

const persistConfig = {
    key: "root",
    storage: AsyncStorage,
    whitelist: ["user"], // Ensure this matches the reducer name
};
const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(clientApi.middleware),
    devTools: true,
});

setupListeners(store.dispatch);
export default store;
