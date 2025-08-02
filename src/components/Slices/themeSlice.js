import { createSlice } from "@reduxjs/toolkit";
import { wallpaper } from "../../data/wallpaper";

const initialState = {
    defaultBackground:wallpaper[0],
    background:null,
}

const themeSlice = createSlice({
    name: 'themeState',
    initialState: initialState,
    reducers: {
        defaultTheme: (state) => {
            state.background = state.defaultBackground;
        },
        setBackground: (state, action) => {
            state.background = action.payload;
        }
    }
});

export default themeSlice.reducer;

export const { defaultTheme, setBackground } = themeSlice.reducer;
