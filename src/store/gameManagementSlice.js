import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    reset: false,
    lost: false,
    won: false
};

const manageGameSlice = createSlice({
    name: 'manageGame',
    initialState,
    reducers: {
        onReset: state => {
            state.reset = true;
        },
        onLost: state => {
            state.lost = true;
        },
        onWon: state => {
            state.won = true;
        },
        resetGame: state => {
            state.reset = false;
            state.lost = false;
            state.won = false;
        }
    }
});

export const { onReset, onLost, onWon, resetGame } = manageGameSlice.actions;
export default manageGameSlice.reducer;
