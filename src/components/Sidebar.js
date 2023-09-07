import React from 'react'

const Sidebar = () => {
  return (
   <div className="p-5 shadow-lg w-40">
   <ul>
      <li>Homes</li>
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