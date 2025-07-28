import { createSlice } from "@reduxjs/toolkit";


const initialState={
    isModalOpend:false
};

const appSlice=createSlice({
    name:'appSlice',
    initialState:initialState,
    reducers:{
        openModal:(state)=>{
            state.isModalOpend=true;
        },
        closeModal:(state)=>{
            state.isModalOpend=false;
        }
    },
    extraReducers:(builder)=>{

    }
});

export default appSlice.reducer;

export const {openModal,closeModal}=appSlice.actions;