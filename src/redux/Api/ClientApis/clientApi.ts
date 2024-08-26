import {
    BaseQueryFn,
    FetchArgs,
    FetchBaseQueryError,
    FetchBaseQueryMeta,
    createApi,
} from "@reduxjs/toolkit/query/react";
// @ts-ignore
import { EndpointBuilder } from "@reduxjs/toolkit/dist/query/endpointDefinitions";
import { createBaseQuery } from "../../../utlis/helperFunctions";
import { MMKV } from "react-native-mmkv";
import { LocalStorage, UserDataProps } from "../../../types/redux";

export type RTKBuilderType = EndpointBuilder<
    BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, object, FetchBaseQueryMeta>,
    string,
    "api"
>;
export const storage = new MMKV();

export const clientApi = createApi({
    baseQuery: createBaseQuery(),
    endpoints: () => ({}),
    keepUnusedDataFor: 600,
    refetchOnMountOrArgChange: 5,
});

export const setItem = (key: LocalStorage, value: any) => {
    storage.set(key, JSON.stringify(value));
};

export const getItem = (key: LocalStorage): UserDataProps | null => {
    const jsonUser = storage.getString(key);
    if (jsonUser) {
        try {
            const userObject: UserDataProps = JSON.parse(jsonUser);
            return userObject;
        } catch (error) {
            console.log("Error parsing user data:", error);
            return null;
        }
    } else {
        console.log("No data found for the key:", key);
        return null;
    }
};

export const clearAllItem = () => storage.clearAll();