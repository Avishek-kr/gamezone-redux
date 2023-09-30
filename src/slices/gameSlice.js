import { createSlice } from "@reduxjs/toolkit";

const gameSlice = createSlice({
    name: 'GAME_DETAIL',
    initialState: {
        game: { platforms: [] },
        screen: { results: [] },
        isLoading: true
    },
    reducers: {
        gameDetail: (state, action) => {
            return {...state,
                game: action.payload.game,
                screen: action.payload.screen,
                isLoading: action.payload.isLoading
            }
        }
    },
})

export const { gameDetail } = gameSlice.actions;

export default gameSlice.reducer;