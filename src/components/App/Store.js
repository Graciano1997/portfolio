import { configureStore } from "@reduxjs/toolkit";
import appSlice from "../Slices/appSlice";
import mathSlice from "../Slices/mathSlice";

const store = configureStore({
    reducer:{
        appState:appSlice,
        mathState:mathSlice
    }
})

export default store;