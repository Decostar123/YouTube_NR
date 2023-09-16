import {createSlice} from "@reduxjs/toolkit" ; 

const searchSlice = createSlice({
    name : "cache" , 
    initialState : {

        
    }, 
    reducers :{
        cacheResult : ( state , action )=>{
            let combine = Object.assign( state, action.payload ) ; 
            state = combine ; 
            // state = {...state, ...action.payload } ; 
        }
    }

})

export default searchSlice.reducer; 
export const { cacheResult} = searchSlice.actions ; 