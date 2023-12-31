import React from 'react'
import {useEffect , useState } from "react" ; 
import {YOUTUBE_VIDEOS_API} from "../utils/constant"
import VideoCard,{AdVideoCard} from './VideoCard';
import {openMenu} from "../utils/appSlice" ; 
import {useDispatch , useSelector } from "react-redux" ;
import { Link } from 'react-router-dom';
// import LiveChat from './LiveChat'; 
// import {Link} from "react-router-dom" ; 
const VideoContainer = () => {
  const dispatch = useDispatch( ) ; 
  const isMenuOpen = useSelector( store => store.app.isMenuOpen ) ; 
  const [videos, setVideos] = useState(null) ; 
  useEffect(()=>{
      dispatch(openMenu())
      getVideos() ; 
      async function  getVideos(){
      const data = await fetch(YOUTUBE_VIDEOS_API) ; 
      const json = await data.json() ; 
      setVideos( json.items )
      // console.log( json.items ) ;

    }
  } , [] )  ;
  if( videos === null ){
    return <h1>SEARCHING IS ON THE WAY OR YOU </h1>
  }
  // const Ad = AdVideoCard() ; 
  return (
   
        <div className="flex flex-wrap " style={window.innerWidth<=1280 && isMenuOpen ? { 
           overflow :"hidden" , height:"100vh"
        } :{}} >
        {/* MAKE IT WORK FOR ONE, THEN SCALE IT */}
        {/* <AdVideoCard info={videos[0]} /> */}
        { videos.map( video =>{
         return ( 
         
                    <VideoCard info={video} videoID = {video.id} key={video.id}  />
                 
         )
          
        }

        )}
        </div>
    
    
  )
}

export default VideoContainer