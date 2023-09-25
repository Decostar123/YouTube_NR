import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'
import { useSelector } from 'react-redux'
import { useState, useEffect  } from "react" ; 
// import { useSelector , useDispatch  } from  "react-redux" ; 

 const MainContainer = () => {
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

        <div className="MainContainer " style={  isMenuOpen && (width > 1280) ? {width:"88%"} : {width: "100%" } } > 
        <ButtonList className="ButtonList"/>
        <VideoContainer  className="flex" classame="VideoContainer flex"/>
    </div>
      // )
    
    
    // <div style={{width:"88%"}}>.
    // && window.innerWidth > 1280
    // isMenuOpen  ?  {width: "88%"} :
    
  )
}

export default MainContainer