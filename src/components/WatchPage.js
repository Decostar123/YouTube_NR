import React , {useEffect} from 'react'

import { closeMenu } from '../utils/appSlice';
import {useDispatch} from "react-redux" ; 
import {useSearchParams} from "react-router-dom"

import { PROFILE_URL } from '../utils/constant';
import CommentContainer from './CommentContainer';
import MyComment from './MyComment';
import LiveChat from './LiveChat';

const WatchPage = () => {
  // const state = useSelector( state => state.app.isMenuOpen ) ; 
  const [searchParams, setSearchParams] = useSearchParams() ;
  
  console.log( searchParams.get("v") ) ; 
  const dispatch = useDispatch() ; 
  useEffect(()=>{
      dispatch( closeMenu( ))  
  } , [] )
  return (
    <div className=" w-[100%] flex-col items-center  ">
      <div  className="px-5 w-[100%] flex">
        <iframe width="75%" 
        height="600" 
        src={"https://www.youtube.com/embed/" + searchParams.get("v")  } 
        title="YouTube video player" 
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullScreen>
        </iframe>
        <div className="w-[25%] h-[600px] m-0.5  border-2 border-black rounded-lg" >
          <div className="w-full h-[520px] 
          overflow-y-scroll flex flex-col-reverse">
          <LiveChat className="w-full  " />
          </div>
          <div className="h-[80px]">
          <MyComment />
          </div>
        </div>
       
     </div>

     <div className="w-[75%] ">
       <CommentContainer/>
     </div>
    </div>
   
  )
}

export default WatchPage