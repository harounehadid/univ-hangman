import { createSlice } from "@reduxjs/toolkit";

const initialState = 'Animal';

const themeSlider = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setTheme: state => {
            state.theme = initialState;
        }
    }
});

export const { setTheme } = themeSlider.actions;
export default themeSlider.reducer;
