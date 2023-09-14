import React from 'react'
import { useSelector } from 'react-redux' 
import {Link} from "react-router-dom"
const Sidebar = () => {
  const isMenuOpen = useSelector( store => store.app.isMenuOpen )  ; 
  // EARLY
  if( isMenuOpen === false ){
    return null 
  }
  console.log( isMenuOpen)
  return (
   <div className="py-5 px-10 shadow-lg " style={ { width:"12%" }}>
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