import React , {useState, useEffect } from 'react'
import "../App.css"
import { useDispatch  } from 'react-redux' ; 
import { toggleMenu } from '../utils/appSlice';

import { YOUTUBE_SEARCH_API} from "../utils/constant"  ; 
// import {toogleMenu} from "../utils/appSlice" ; 

const Header = () => {
    const  [ query , setQuery ] = useState("")  ;    
    const dispatch = useDispatch() ; 
    const toogleMenuHandler = ()=>{
        dispatch( toggleMenu() ) ; 
    }
    useEffect( ()=>{
        console.log( " api call ") ; 
        // MAKE AN API CALL AFTER EVERY KEY PRESS 
        //  BUT IF THE DIFFERNCE BETWEEN 2 API CALLS < 200MS -> decline the api call 
        // 
        setTimeout(()=>{    
                getSuggestions() 
            } ,   200 ) ;  
    } , [query ] ) ; 
    
    const getSuggestions = async()=>{
        const data = await fetch(YOUTUBE_SEARCH_API + query ) ;
        const json = await data.json() ; 
        console.log( json ) ;  
        
    }
  return (

    <div className='flex justify-between p-2 m-2 shadow-lg '>
        <div className="flex w-1/5 cursor-pointer" >
            <img onClick={()=> toogleMenuHandler()}                
             className='w-12 h-10 '
                 src="https://static.vecteezy.com/system/resources/previews/021/190/402/original/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg"
            />
            <a href="/">
                <img className="w-35 h-12 mx-2"
                    src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500"
                />
            </a>
            
        </div>
        <div className="w-3/5 flex justify-center">
            <input className="p-4 w-1/2 border-2 border-e-0 border-gray-400 rounded-l-full" type="text" 
               value={query} onChange = {(e)=> setQuery( e.target.value ) } 
            />
            <button  className="border  border-gray-400 p-2 bg-gray-100 rounded-r-full" >🍳</button>
        </div>
        <div className="w-1/5">
            <img className='w-10 h-8'
             src="https://static.vecteezy.com/system/resources/thumbnails/008/442/086/small/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"
             />
        </div>

    </div>
  )
}

export default Header