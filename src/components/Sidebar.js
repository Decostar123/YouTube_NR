import React from 'react'
import { useEffect } from 'react'
import { useSelector ,useDispatch  } from 'react-redux' 
import {Link} from "react-router-dom"
import {closeMenu , openMenu } from "../utils/appSlice"
const Sidebar = () => {
  const dispatch = useDispatch() ; 
  const isMenuOpen = useSelector( store => store.app.isMenuOpen )  ; 
  // EARLY
  const handleResize = ()=>{
        
    const width = window.innerWidth ; 
    if( width <= 1280 ){
        
        console.log(  " window i being resized less " , isMenuOpen )
          dispatch( closeMenu())  ;
    }
    if( width >= 1281 ){
        console.log(  " window i being resized more  " , isMenuOpen )
         dispatch( openMenu()  )  ; 
    }
}
useEffect( ()=>{
    window.addEventListener( 'resize' , handleResize ) 
     console.log( " window useEffect ")

     return ()=>{
      window.removeEventListener('resize' , handleResize ) ;    
     }

} , [] )
  if( isMenuOpen === false ){
    return null 
  }
  console.log( isMenuOpen)
  return (
   <div className="py-5 px-10 shadow-lg max-xl:bg-orange-500
    max-xl:z-10  max-xl:absolute " style={ { width:"12%" }}>
   <ul>
      <li><Link to= "/" className="cursor-pointer">Homes</Link></li>
      <li>Shorts</li>
      <li>Videos</li>
      <li>Live</li>
    </ul>
    <div className="border-t-2  border-gray-300 border-solid h-1 my-5">
      
    </div>
   <h1 className="font-bold">Subscriptions</h1>
    <ul>
      <li>Music</li>
      <li>Sports</li>
      <li>Gaming</li>
      <li>Movies</li>
    </ul>
    <h1 className="font-bold pt-5">Watch Later</h1>
    <ul>
      <li>Music</li>
      <li>Sports</li>
      <li>Gaming</li>
      <li>Movies</li>
    </ul>
   </div>
  )
}

export default Sidebar