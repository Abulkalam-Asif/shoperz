'use client'

import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"users",
    initialState:{
        data:[],
        isLoading:false,
        error:null
    },
    reducers:{
        setProducts: (state, action) => {
            state.data = action.payload;
        }
    },
    // extraReducers(builder){
    //     builder.addCase(registerUser.pending,(state,action)=>{
    //         state.isLoading=true;

    //     });
    //     builder.addCase(registerUser.fulfilled,(state,action)=>{
    //         state.isLoading= false;
    //         state.data = action.payload;
    //     });
    //     builder.addCase(registerUser.rejected,(state,action)=>{
    //         state.isLoading= false;
    //         state.error = action.error;
    //     });

    // }
});





export const { setProducts } = userSlice.actions;
export const userReducer = userSlice.reducer;

