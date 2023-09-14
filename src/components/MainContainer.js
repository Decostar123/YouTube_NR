import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'
import { useSelector } from 'react-redux'

const MainContainer = () => {
  const isMenuOpen = useSelector( state => state.app.isMenuOpen ) ; 
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
    <div> 
        <ButtonList />
        <VideoContainer />
    </div>
  )
}

export default MainContainer