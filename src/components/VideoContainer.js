import React from 'react'
import {useEffect , useState } from "react" ; 
import {YOUTUBE_VIDEOS_API} from "../utils/constant"
import VideoCard,{AdVideoCard} from './VideoCard';

import {Link} from "react-router-dom" ; 
const VideoContainer = () => {
  const [videos, setVideos] = useState(null) ; 
  useEffect(()=>{
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
   
        <div className="flex flex-wrap">
        {/* MAKE IT WORK FOR ONE, THEN SCALE IT */}
        <AdVideoCard info={videos[0]} />
        { videos.map( video =>{
         return ( <Link to = {"/watch?v=" + video.id  }>
            <VideoCard key={video.id} info={video} />
          </Link>
         )
          
        }

        )}
        </div>
    
    
  )
}

export default VideoContainer