import { configureStore } from "@reduxjs/toolkit";
import appSlice from "../Slices/appSlice";

const store = configureStore({
    reducer:{
        appState:appSlice
    }
})

export default store;