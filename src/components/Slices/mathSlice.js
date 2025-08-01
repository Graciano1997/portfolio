import { createSlice } from "@reduxjs/toolkit";


const initialState={
        constants:{a:'',b:'',c:''},
        result:{delta:null,x1:null,x2:null}
};

const mathSlice = createSlice({
    name:'mathState',
    initialState:initialState,
    reducers:{
        setConstants:(state,action)=>{
            state.constants=action.payload
        },
        setResult:(state,action)=>{
            state.result=action.payload
        },
        cleanAll:(state)=>{
            state.constants={a:null,b:null,c:null};
            state.result={delta:null,x1:null,x2:null}
        }
    }
});

export default mathSlice.reducer;
export const {setConstants,cleanAll, setResult}=mathSlice.actions;
