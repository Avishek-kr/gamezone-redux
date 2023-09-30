import { createSlice } from "@reduxjs/toolkit";

export const apiSlice = createSlice({
    name: 'GAMES_DATA',
    initialState: {
        popular:[],
        newGames:[],
        upcoming:[],
        searched: [],
    },
    reducers: {
        fetchGames: (state, action) => {
            return {...state, 
                popular: action.payload.popular,
                upcoming: action.payload.upcoming,
                newGames: action.payload.newGames,
            }
        }
    },
})

export const { fetchGames } = apiSlice.actions;

export default apiSlice.reducer;