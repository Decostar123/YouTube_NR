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
  //  <div onClick={()=>{ dispatch( closeMenu())}} className="outerSideBar max-xl:z-1 max-xl:absolute
  //   " style={ window.innerWidth <=1280? { width :"100%" , height:"1" , opacity:"1"  ,
  //                            zIndex:"6" }:
  //  { width:"12%" }} >
    <div className="py-5 px-3 shadow-lg text-base max-md:text-sm max-sm:text-[0.5rem]" 
    style={ window.innerWidth <=1280? {width:"18%" , backgroundColor:"white", zIndex:"6" } :{width:"18%", paddingLeft:"50px"} } >
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
  //  </div>
  )
}

export default Sidebar