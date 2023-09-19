import { createSlice } from "@reduxjs/toolkit";


const chatSlice = createSlice({
    name : "chat" , 
    initialState : {
        messages : [] 
    }, 
    reducers :     {
        addMessage : ( state, action )=>{
            // need to shift an push 
            state.messages.push( action.payload ) ; 
            if( state.messages.length === 20 ) state.messages.splice( 0 ,1 )  ; 
        }
    }
})

export default chatSlice.reducer ;
export const { addMessage } = chatSlice.actions  ;
// after this evae the oageopen fir 2 hrs the app wil not crash 

