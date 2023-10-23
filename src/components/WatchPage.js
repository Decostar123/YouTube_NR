import React , {useEffect , useState } from 'react'

import { closeMenu } from '../utils/appSlice';
import {useDispatch , useSelector} from "react-redux" ; 
import {useSearchParams} from "react-router-dom"

import { PROFILE_URL } from '../utils/constant';
import CommentContainer from './CommentContainer';
import MyComment from './MyComment';
import LiveChat from './LiveChat';
import ResponsiveLiveChat from "./ResponsiveLiveChat" ; 

const WatchPage = () => {
  // const state = useSelector( state => state.app.isMenuOpen ) ; 
  const [showLiveChat , setShowLiveChat] = useState(false) ; 
  const [searchParams, setSearchParams] = useSearchParams() ;
  const isMenuOpen = useSelector( store => store.app.isMenuOpen  ) ; 

  
  console.log( searchParams.get("v") ) ; 
  const dispatch = useDispatch() ; 
  useEffect(()=>{
      dispatch( closeMenu( ))  
  } , [] )
  return (
    <div  style={ isMenuOpen && window.innerWidth<=1280 ? { height:"100vh", overflow:"hidden"}:{}} className=" w-[100%] flex-col items-center watchPage ">
      
      { isMenuOpen && window.innerWidth<=1280 && <div
         onClick={()=>{ dispatch( closeMenu())}} style={{
          position:"absolute", top:"4.5rem", 
           width:"82%",  opacity:"0.3", zIndex:"5", width:"100%", height:"125%", backgroundColor:"black"}}>
          hi brither
         </div>}
      <div  className="px-5 w-[100%] flex" style={window.innerWidth<=1280 ? {justifyContent:"center"}:{}}>
        <iframe width="75%" 
        height="600" 
        src={"https://www.youtube.com/embed/" + searchParams.get("v")  } 
        title="YouTube video player" 
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullScreen>
        </iframe>
        {/* {window.ineer} */}
        {window.innerWidth > 1280 && 
          <div className="w-[25%] h-[600px] m-0.5  border-2 border-black rounded-lg" >
          <div className="w-full h-[520px] 
          overflow-y-scroll flex flex-col-reverse">
          <LiveChat className="w-full  " />
          </div>
          <div className="h-[80px]">
          <MyComment />
          </div>
        </div>
        }
       
       
     </div>
     {
      window.innerWidth<=1280&&
      <div className={"w-[95%] mt-[1rem] mx-auto  border-2 border-gray-100 rounded-lg" +
                    "h-[336px]"}>
          <div className=" p-2 flex justify-between" onClick={()=> setShowLiveChat(!showLiveChat)}>
            <div>
             {  showLiveChat ? "Hide Live Chat" :"Show Live Chat"}
            </div>
            <div className="m-2">
              <img height="10px" width="10px" src={showLiveChat?"https://cdn-icons-png.flaticon.com/512/566/566094.png":"https://static.thenounproject.com/png/2335649-200.png" }/>
            </div>
          </div>
          { showLiveChat && <div  className="w-[full] h-[220px] 
              overflow-y-scroll flex flex-col-reverse">
          <ResponsiveLiveChat className="w-full"/> 
          </div>}
          {showLiveChat && <div className="h-[80px]">
          <MyComment />
          </div>
          }
      </div>
      
     }

     <div className={window.innerWidth<=1280 ? "w-[100%]":"w-[75%] "}>
       <CommentContainer/>
     </div>
    </div>
   
  )
}

export default WatchPage