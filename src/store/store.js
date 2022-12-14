import { configureStore, createSlice } from "@reduxjs/toolkit";
import counterReducer from "../components/counter/counterSlice";
import resetGameReducer from "./resetGameSlice";
import themeReducer from "../components/theme/themeSlide";

const store = configureStore({
    reducer: {
         counter: counterReducer,
         resetGame: resetGameReducer,
         theme: themeReducer
    }
});

export default store;
