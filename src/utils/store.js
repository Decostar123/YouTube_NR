import {configureStore} from "@reduxjs/toolkit" ; 
import appSlice from "./appSlice";
// import  

const store = configureStore({
    reducer :{
        app: appSlice
    }
})

export default store   ; 