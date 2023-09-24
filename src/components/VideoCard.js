import { useSelector} from "react-redux" ; 
import { Link } from "react-router-dom";

const VideoCard = ({info, videoID})=>{
    const isMenuOpen = useSelector( state => state.app.isMenuOpen ) ; 
    console.log( isMenuOpen , "menu") ; 
    // console.log( info ) ;  
    const {snippet, statistics } = info 
    const { channelTitle , title ,  thumbnails } = snippet ; 
    // console.log( snippet ) ; 
    // className={ "p-2 m-2 shadow-lg w-[19rem]"   }
    const width = isMenuOpen ? "w-[19rem]":"w-[17rem]"
    // const width = "" ; 
        // const styles =  
        
    return  ( 
    
       

        <div className={ "p-2 m-2 shadow-lg w-80 grow "} >
             

             <Link to = {"/watch?v=" + videoID  } classsName="Link flex ">

             <img className="rounded-lg mx-auto w-[100%]" src={thumbnails.medium.url}  />
             <ul>
                <li className="font-bold py-2">{title}</li>
                <li>{channelTitle}</li>
                <li>Views: {statistics.viewCount}</li>
            </ul>

             </Link>
             

           
        
        </div>

        
   )
}


// HIGHER ORDER COMPONENT 
// need it if i want to do some small modification , esample ideocard with a border 
export const AdVideoCard  = (  {info})=>{
    // whenever I call this functional componenet by doing < Componenent/> 
    // the required paramter will be recieved in this funcion argyment 
    //  see a component is basically a function at the end of day 
    return   ( <div className="p-2 m-2 border-2 border-red-900">
        <VideoCard info={info} />
      </div>
      )
}
export default VideoCard ; 