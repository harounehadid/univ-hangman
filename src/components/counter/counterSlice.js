import { createSlice } from "@reduxjs/toolkit";

const initialState = {counter: 7};

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        decrementCounter: state => {
            state.counter--;
        },
        reset: state => {
            state.counter = initialState;
        }
    }
});

export const { decrementCounter, reset } = counterSlice.actions;
export default counterSlice.reducer;
