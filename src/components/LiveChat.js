import ChatMessage from "./ChatMessage";
import { useEffect } from "react";
import {addMessage} from "../utils/chatSlice" ; 
import {useDispatch , useSelector} from "react-redux"
const LiveChat = ()=>{ 
    const dispatch = useDispatch() ; 
    const messages = useSelector( state => state.chat.messages ) ; 

    useEffect( ()=>{
        // const i = setInterval( ()=>{
        //     dispatch(   addMessage({
        //         name :"Deco" , 
        //         message :"his is a good youtube clone" 
        //     })    ) ; 
        // } ,  2000 ) ; 


        // return ()=>{ clearInterval(i) } 

    } , [] ) ; 
    return (<div className="m-4 p-2    ">
        {/* <ChatMessage name={"Deco"} message={"this is a good youtube clone,  "}/> 
        <ChatMessage name={"Deco"} message={"this is a good youtube clone  "}/> 
        <ChatMessage name={"Deco"} 
        message={"this is a good youtube clone made by this is a good youtube clone made by ne   "}/> 
        <ChatMessage name={"Deco"} message={"this is a good youtube clone "}/> 
        <ChatMessage name={"Deco"} message={"this is a good youtube clone "}/>  */}
        {
            messages.map( ( ele, ind ) => 
            <ChatMessage key={ind} name={ele.name} message ={ele.message} />
            )
        }
    </div>) 
}

export default LiveChat ; 