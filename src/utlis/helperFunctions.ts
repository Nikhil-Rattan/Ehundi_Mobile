import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { url } from "../config/url";

const createBaseQuery = () => {
    return fetchBaseQuery({
        baseUrl: url.API_BASE_URL,
        timeout: 10000,
        prepareHeaders: (headers: Headers, { getState }: { getState: () => any }) => {
            const token = getState()?.auth?.userData?.access_token;
            if (token != null) {

                headers.set('Authorization', `Bearer ${token}`);
            }
            headers.set('Content-Type', 'application/json');
            return headers;
        },
    });
};

export { createBaseQuery };
