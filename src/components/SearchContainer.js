import React from 'react'

const SearchContainer = ({info}) => {
  return (

    <div className="flex cursor-pointer ">
        <div className="m-2 p-2">
        <img className="rounded-lg" src={info.snippet.thumbnails.medium.url} />
        </div>
        <div className="m-2 p-2 ">
            <h1 className="font-bold pb-2">{info.snippet.title}</h1>
            <p>{info.snippet.description}</p>
        </div>
        {/* {console.log( info )} */}
    </div>
  )
}

export default SearchContainer