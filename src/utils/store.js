import {configureStore} from "@reduxjs/toolkit" ; 
import appSlice from "./appSlice";
import searchSlice from "./searchSlice" 
import chatSlice from "./chatSlice";
// import  

const store = configureStore({
    reducer :{
        app: appSlice , 
        cache : searchSlice , 
        chat : chatSlice 
    }
})

export default store   ; 