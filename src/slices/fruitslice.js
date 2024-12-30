import { createSlice } from "@reduxjs/toolkit";

const initialState={
    fruits:[],
}
export const fruitslice=createSlice({
    name:"fruits",
    initialState,
    reducers:{
        setFruit:(state,action)=>{
            state.fruits=[...state.fruits,action.payload];
        },

        
    }
}
)

export  const {setFruit}=fruitslice.actions;
 export default fruitslice.reducer;

