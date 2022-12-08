import { createSlice } from "@reduxjs/toolkit";

const initialState = {reset: false};

const resetSlice = createSlice({
    name: 'resetGame',
    initialState,
    reducers: {
        setResetGame: state => {
            state.reset = true;
        }
    }
});

export const { setResetGame } = resetSlice.actions;
export default resetSlice.reducer;
