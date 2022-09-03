

import {createSlice,configureStore} from "@reduxjs/toolkit"


const Authenticated=createSlice({
    name:"Authnecation",
    initialState:{
        isSignedIn:false,
        userData:null,
       
    },

    reducers:{
        setSignedIn:(state,action)=>{
            state.isSignedIn=action.payload;
        },
        setUserData:(state,action)=>{
            state.userData=action.payload

        },
    }
})

const BlogData=createSlice({
    name:"BlogData",
    initialState:{
        searchInput:"tech",
        blogData:null,
    },

    reducers:{
     
        setSearchInput:(state,action)=>{
            state.searchInput=action.payload

        },
        setBlogData:(state,action)=>{
            state.blogData=action.payload

        },

    }
})

export const isAuthenticated=Authenticated.actions;
export const blogDetails=BlogData.actions;


const store=configureStore({
    reducer:{
        auth:Authenticated.reducer,
        blog:BlogData.reducer
    }
})



export default store;