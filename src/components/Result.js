import React from 'react'
import {useSearchParams} from "react-router-dom"
import { useState , useEffect } from "react"  ; 
import SearchContainer from './SearchContainer';
import { Link } from 'react-router-dom';
const Result = () => {
  const[ searchResult , setSearchResult] = useState([]) ; 
  const [searchParams, setSearchParams] = useSearchParams() 

  useEffect(()=>{
    console.log(searchParams.get('search_query') ) ; 
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${searchParams.get('search_query')}&type=video&key=AIzaSyCivFbfJhLrlYejRLPJJh8qnqqtEaSpXkQ`).
    then( res => res.json())
    .then( res => {
      setSearchResult( res.items  ) ; 
      console.log( res.items  ) ; 
      // console.log( searchResult )
    })
  } , [] )
if( searchResult.length === 0 ){
  return <div>nothing got </div>
}
  return (
    <div className="w-80%
    ">
      {
        
        searchResult.map( ele => 
          <Link  to={"/watch?v=" + ele.id.videoId}>
            <SearchContainer key={ele} info={ele}/>
          </Link>
        
        
         )
      }
    </div>
  )
}

export default Result