import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserDataProps } from "../../types";
import { setItem } from "../Api/ClientApis/clientApi";

export interface AuthState {
    userData: UserDataProps | object;
    notificationToken: string;
}

const initialState: AuthState = {
    userData: {},
    notificationToken: '',
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        saveUserData: (state, action: PayloadAction<object>) => {
            setItem("userData", action.payload);
            state.userData = action.payload;
        },
        setNotificationToken: (state, action: PayloadAction<string>) => {
            setItem("fcmToken", action.payload);
            state.notificationToken = action.payload;
        },
    },
});

export const { setNotificationToken, saveUserData } = authSlice.actions;

export default authSlice.reducer;
