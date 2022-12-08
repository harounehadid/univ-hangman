import { configureStore, createSlice } from "@reduxjs/toolkit";
import counterReducer from "../components/counter/counterSlice";
import resetGameReducer from "./resetGameSlice";

const store = configureStore({
    reducer: {
         counter: counterReducer,
         resetGame: resetGameReducer
    }
});

export default store;
