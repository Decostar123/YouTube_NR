import ChatMessage from "./ChatMessage";
import { useEffect } from "react";
import {addMessage} from "../utils/chatSlice" ; 
import {useDispatch , useSelector} from "react-redux"
import {generate , makeid}  from "../utils/randomName"
import { PROFILE_URL } from "../utils/constant";
const LiveChat = ()=>{ 
    const dispatch = useDispatch() ; 
    const messages = useSelector( state => state.chat.messages ) ; 

    useEffect( ()=>{
        const i = setInterval( ()=>{
            let msg = "" ; 
            for( let p  = 6 ; p<= 11 ; p++){
                msg += makeid(Math.floor(Math.random() * p)) + " " ; 
            }
            dispatch(   addMessage({
                name :generate() , 
                message : msg 
            })    ) ; 
        } ,  2000 ) ; 
// NO NO, INEVERY 2 SECIND THE REQUEST IS BEING SENT TO THE BACKEND FOR THE DATA 
// YES, THIS IS WHAT IT IS HAPPENING, YEP... THE OTHER CASE 
// the problem is taht the situstion after 5 minutes,s o need to delete the content 
// but how? simple modify the input to low size, how ? filter man common 
// keep the lastest message and remove the old messages 

        return ()=>{ clearInterval(i) } 

    } , [] ) ; 
    return (<div className="m-4 p-2 mb-0">
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

       
    </div>
    
    ) 
}

export default LiveChat ; 