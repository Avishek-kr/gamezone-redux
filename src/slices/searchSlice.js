import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
    name: 'GAMES_DATA',
    initialState: {
        searched: [],
    },
    reducers: {
        searchGames: (state, action) => {
            return {...state, 
                searched: action.payload.searched
            }
        }
    },
})

export const { searchGames } = searchSlice.actions;

export default searchSlice.reducer;