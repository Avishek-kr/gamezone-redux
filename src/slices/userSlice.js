import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'USER_DATA',
    initialState: {
        name: '',
        isLogged: false,
    },
    reducers: {
        user: (state, action) => {
            console.log(action.payload);
            state.isLogged = action.payload;
        }
    },
})

export const { user } = userSlice.actions;

export default userSlice.reducer;