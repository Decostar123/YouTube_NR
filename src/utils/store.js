import {configureStore} from "@reduxjs/toolkit" ; 
import appSlice from "./appSlice";
import searchSlice from "./searchSlice" 
// import  

const store = configureStore({
    reducer :{
        app: appSlice , 
        cache : searchSlice 
    }
})

export default store   ; 