import React from 'react'
import { PROFILE_URL , SEND_URL} from '../utils/constant'
import {useState  } from "react" ;
import { useDispatch } from 'react-redux';
import {addMessage} from "../utils/chatSlice"
const MyComment = () => {
    const dispatch  = useDispatch() ; 
    const [msg, setMsg] = useState("")  ; 
    const [crsr, setCrsr ] = useState("default") ; 
    const handleKeyDown = (event) => {
         console.log("Enter is pressed ")
        if (event.key === 'Enter') {
          sendMsg() ; 
        }
      }
    const sendMsg = ()=>{
        if( msg.length===0 ) return ; 
        const info = msg ; 
        console.log( info ) ; 
        dispatch(addMessage({
            name : "Decostar Sharma" , 
            message : info 
        })) ; 
        setMsg("") ; 

    }
  return (
    <div className="w-full h-full p-2 ">
        <div className="flex mx-4 px-2 ">
            <img className="w-6 h-6  bg-black rounded-[100%]" src={PROFILE_URL}/>
            <p className="pl-1.5">Decostar Sharma</p>

        </div>
        <div className="flex mx-4 pl-2 pt-2" >
             <input onChange={(e)=>{
                setMsg(e.target.value) ; 
                if( msg.length === 0 ) setCrsr('default') ; 
                else setCrsr("pointer")
                console.log( crsr ) ; 
             }} value={msg}
             className= "focus:border-b-blue-400  outline-none w-full h-8 border border-x-0 border-t-0 border-b-2 border-b-gray-300" placeholder="Comment..."
             onKeyDown={handleKeyDown}   
             />
            <img  className= {`cursor-${crsr} w-7 h-7 my-auto`} src={SEND_URL}
             onClick={sendMsg}  />

        </div>
    </div>
        

  )
}

export default MyComment