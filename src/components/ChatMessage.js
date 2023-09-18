import React from 'react'
import { PROFILE_URL } from '../utils/constant'

const ChatMessage = ({name , message }) => {
  return (
    <div className="flex mb-2">
        <div className="w-1/6 h-8">
        <img className="w-8 h-8  bg-black rounded-[100%]" src={PROFILE_URL}/>
        </div>
        <div className="w-5/6">
            <span className="font-bold">{name}</span> { message}
        </div>
        
        
        {/* yeah man  */}
    </div>
  )
}

export default ChatMessage