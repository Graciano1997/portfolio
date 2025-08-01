import { configureStore } from "@reduxjs/toolkit";
import appSlice from "../Slices/appSlice";
import mathSlice from "../Slices/mathSlice";
import themeSlice from "../Slices/themeSlice";

const store = configureStore({
    reducer:{
        appState:appSlice,
        mathState:mathSlice,
        themeState:themeSlice
    }
})

export default store;