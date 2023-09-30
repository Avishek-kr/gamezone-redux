import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "./slices/apiSlice";
import gameSlice from "./slices/gameSlice";

export const store = configureStore({
    reducer: {
        games: apiSlice,
        gameDetail: gameSlice,
    },
});