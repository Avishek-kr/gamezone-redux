import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "./slices/apiSlice";
import gameSlice from "./slices/gameSlice";
import searchSlice from "./slices/searchSlice";

export const store = configureStore({
    reducer: {
        games: apiSlice,
        gameDetail: gameSlice,
        gameSeach: searchSlice,
    },
});