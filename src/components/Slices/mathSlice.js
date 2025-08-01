import { createSlice } from "@reduxjs/toolkit";


const initialState={
        constants:{a:'',b:'',c:''},
        result:{delta:null,x1:null,x2:null},
        sys2Constants:{ a1:'',a2:'',b2:'',b1:'',c1:'',c2:''},
        sys2Result:{d:null,dx:null,dy:null,x:null,y:null}
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
        setSys2Result:(state,action)=>{
            console.log(action.payload);
            state.sys2Result=action.payload
        },
        cleanAll:(state)=>{
            state.constants={a:null,b:null,c:null};
            state.result={delta:null,x1:null,x2:null}
            state.sys2Constants = {a1:null,a2:null,b1:null,b2:null,c1:null,c2:null};
            state.sys2Result={d:null,dx:null,dy:null};
        },
        setSys2Constants:(state,action)=>{
            state.sys2Constants = action.payload;
        }
    }
});

export default mathSlice.reducer;
export const {setConstants,cleanAll, setResult, setSys2Constants,setSys2Result}=mathSlice.actions;
