import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'
import { useSelector } from 'react-redux'
import { useState, useEffect  } from "react" ; 
 const MainContainer = () => {
  const [ width , setWidth ] = useState( window.innerWidth) ; 
  const isMenuOpen = useSelector( state => state.app.isMenuOpen ) ;
  const handleResize = ()=>{        
    setWidth(window.innerWidth) ; 
    console.log( width  )  ; 
  }
useEffect( ()=>{
    window.addEventListener( 'resize' , handleResize )  ; 

     return ()=>{
      window.removeEventListener('resize' , handleResize ) ;    
     }

} , [] ) ; 
  // console.log( ",aim conainer" , isMenuOpen) ; 

  // if( !isMenuOpen ){
  //   console.log( " not open width is 100 ") ; 

  //   return ( 
  //     <div style={{width:"100%"}}> 
  //       <ButtonList />
  //       <VideoContainer />
  //     </div>
  //   ) 
   
  // }
  return (
    
    // <div style={{width:"88%"}}>.
    // && window.innerWidth > 1280
    // isMenuOpen  ?  {width: "88%"} :
    <div className="MainContainer " style={  isMenuOpen && (width > 1280) ? {width:"88%"} : {width: "100%"} } > 
        <ButtonList className="ButtonList"/>
        <VideoContainer  className="flex" classame="VideoContainer flex"/>
    </div>
  )
}

export default MainContainer