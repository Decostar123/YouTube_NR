import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'
import { useSelector } from 'react-redux'
import { useState, useEffect  } from "react" ;
import { useDispatch } from 'react-redux'; 
import {closeMenu , openMenu } from "../utils/appSlice"
// import { useSelector , useDispatch  } from  "react-redux" ; 

 const MainContainer = () => {
  const dispatch = useDispatch()  ; 
  // const isMenuOpen = useSelector( store => store.app.isMenuOpen ) ; 
  const [ width , setWidth ] = useState( window.innerWidth) ; 
  // const isMenuOpen = useSelector( store => store.app.isMenuOpen ) ;
  const isMenuOpen = useSelector( store => store.app.isMenuOpen )  ; 
  console.log( "is Object" , typeof isMenuOpen ) ; 
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
// if( isMenuOpen===true  ){
//   return (
//     <div>
//         "hi"
//     </div>
//   )
// }
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
  // if( isMenuOpen === true ){
  //   console.log(" in the maincontainer" , isMenuOpen ) ; 
  //   return <div>"hi"</div>
  // }
  // else{
  //   console.log(" in the maincontainer" , isMenuOpen ) ; 
  // }
  return (
    
      // isMenuOpen === true ? <div>"hi"</div> : (
        // {width:"88%" , opacity:"0.3" , 
        // backgroundColor:"black"}
        <div className="MainContainer " style={  width > 1280 ? isMenuOpen ? {
          "width":"88%"
        } :{width:"100%"} : 
        isMenuOpen? { "width":"100%" }:{ "width":"100%"} } > 
        
        <ButtonList className="ButtonList"/>
        <VideoContainer  className="flex" classame="VideoContainer flex"/>
        { isMenuOpen && window.innerWidth<=1280 && <div
         onClick={()=>{ dispatch( closeMenu())}} style={{ position:"absolute", top:"4.5rem",width:"82%",  opacity:"0.3", zIndex:"5", width:"100%", height:"125%", backgroundColor:"black"}}>
          hi brither
         </div>
        }
    </div>
      // )
    
    
    // <div style={{width:"88%"}}>.
    // && window.innerWidth > 1280
    // isMenuOpen  ?  {width: "88%"} :
    
  )
}

export default MainContainer