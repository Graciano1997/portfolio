import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState={
    isModalOpend:false,
    isLoading:false,
    error:false,
    weather:null,
    query:'',
    searching:false,
};

export const weatherFetch=createAsyncThunk("appSlice/weatherFetch",async(province,{rejectWithValue})=>{    
    const result= await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${province}?unitGroup=us&key=86J8N5MAT7UYMC53Q3P7N6UK9`,{
        method:'GET',
        headers:{
            'Content-Type':'application/json',
        }
    });

    if(!result.ok){
         const errorData = await response.json();
        return rejectWithValue(errorData);
    }

    return result.json();
});


const appSlice=createSlice({
    name:'appState',
    initialState:initialState,
    reducers:{
        openModal:(state)=>{
            state.isModalOpend=true;
        },
        closeModal:(state)=>{
            state.isModalOpend=false;
        },
        setQuery:(state,action)=>{
            state.query=action.payload;
        },
        cleanWeather:(state)=>{
            state.weather=null;
            state.isLoading=false;
            state.error=false;
            state.query='';
        },
        setSearching:(state,action)=>{
            state.searching=action.payload;
        }
    },

    extraReducers:(builder)=>{
        builder.addCase(weatherFetch.fulfilled,(state,action)=>{
            state.error='';
            state.isLoading=false;
            state.weather=action.payload;
        });

        builder.addCase(weatherFetch.pending,(state,action)=>{
            state.error='';
            state.isLoading=true;
        });

        builder.addCase(weatherFetch.rejected,(state,action)=>{
            state.weather=null;
            state.isLoading=false;
            state.error=true;
        });
    }
});

export default appSlice.reducer;

export const {openModal,closeModal, setQuery, cleanWeather, setSearching}=appSlice.actions;