import { createSlice } from "@reduxjs/toolkit";

const gameSlice = createSlice({
    name: 'GAME_DETAIL',
    initialState: {
        game: {},
        screen: {}
    },
    reducers: {
        gameDetail: (state, action) => {
            return {...state,
                game: action.payload.game,
                screen: action.payload.screen,
            }
        }
    },
})

export const { gameDetail } = gameSlice.actions;

export default gameSlice.reducer;