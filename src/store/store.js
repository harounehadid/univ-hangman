import { configureStore, createSlice } from "@reduxjs/toolkit";
import counterReducer from "../components/counter/counterSlice";
import gameManagementReducer from "./gameManagementSlice";
import themeReducer from "../components/theme/themeSlide";

const store = configureStore({
    reducer: {
         counter: counterReducer,
         manageGame: gameManagementReducer,
         theme: themeReducer
    }
});

export default store;
