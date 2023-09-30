import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "./slices/apiSlice";
import userSlice from "./slices/userSlice";

export const store = configureStore({
    reducer: {
        games: apiSlice,
        user: userSlice,
    },
});