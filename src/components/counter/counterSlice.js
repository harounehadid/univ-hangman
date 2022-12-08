import { createSlice } from "@reduxjs/toolkit";

const initialState = {counter: 7};

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        decrementCounter: state => {
            state.counter--;
        },
        resetCounter: state => {
            state.counter = initialState;
        }
    }
});

export const { decrementCounter, resetCounter } = counterSlice.actions;
export default counterSlice.reducer;
