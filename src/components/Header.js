import React , {useState, useEffect } from 'react'
import "../App.css"
import { useDispatch  } from 'react-redux' ; 
import { toggleMenu } from '../utils/appSlice';

import { YOUTUBE_SEARCH_API} from "../utils/constant"  ; 
// import {toogleMenu} from "../utils/appSlice" ; 

const Header = () => {
    const  [ query , setQuery ] = useState("")  ;    
    const [suggestions , setSuggestions ] = useState([]) ; 
    const [showSuggestions , setShowSuggestions ] = useState( false ) ; 
    const dispatch = useDispatch() ; 
    const toogleMenuHandler = ()=>{
        dispatch( toggleMenu() ) ; 
    }
    useEffect( ()=>{
        console.log( " usEffect ") ; 
        // MAKE AN API CALL AFTER EVERY KEY PRESS 
        //  BUT IF THE DIFFERNCE BETWEEN 2 API CALLS < 200MS -> decline the api call 
        // 
        const timer = setTimeout(()=>{    
                getSuggestions() 
            } ,   200 ) ;  

        return ()=>{
            clearInterval(timer) ; 
        }

    } , [query ] ) ; 
    
    const getSuggestions = async()=>{
        console.log("api call ") ; 
        const data = await fetch(YOUTUBE_SEARCH_API + query ) ;
        const json = await data.json() ;
        setSuggestions(json[1])
        console.log( json ) ;    
    }
  return (

    <div className='flex justify-between p-2 shadow-lg w-[100%] fixed bg-white'  >
        <div className="flex w-1/5 cursor-pointer" >
            <img onClick={()=> toogleMenuHandler()}                
             className='w-12 h-10 '
                 src="https://static.vecteezy.com/system/resources/previews/021/190/402/original/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg"
            />
            <a href="/">
                <img className="w-35 h-12 mx-2"
                    src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500"
                />
            </a>
            
        </div>
        <div className="w-3/5 ">
            <div className="flex justify-center">
                <input className=" fix h-10 p-4 w-1/2 border-2 border-e-0 border-gray-200 rounded-l-full" type="text" 
                 value={query} onChange = {(e)=> setQuery( e.target.value ) } 
                 onFocus={ ()=> setShowSuggestions(true)} 
                 onBlur = {()=> setShowSuggestions(false)}
                 />
                 <button  className="border  border-gray-400 px-2 bg-gray-100 rounded-r-full" >
                 <img className="w-4 h-4 inline-block mr-2 " src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAMAAAC93eDPAAAAZlBMVEX///8AAADx8fHp6en7+/v29vZMTExGRkZPT0+urq5ZWVleXl7e3t69vb3t7e3T09MdHR1UVFSioqKSkpKMjIyDg4PKyspqamoZGRnDw8N9fX2YmJhwcHA0NDQ8PDwmJiYtLS0SEhLPPqNHAAAEAUlEQVR4nO1a4ZqqIBA10dQiNd1cy7J8/5e8CuqCVuvAeOHer/OzXeA4zJwZYBzngw8++Nfhx4QmlMauicVJEp3qsmk2DE15u2YF/XvL+7Ta3zZz3MNT8lfsQfLgyfIDbqdkbQLn8M36HHXkr7e+d6hnxn/cHvfpj2m21n4kogXS+hqdE0pITAil5+gSpJIl1iDgX4QlTud49g9uUQn2CAk6g8M4efnG42j+s1UVLgF3NEGdzb9fhH8Yt+uIaQiyHR1tgbePTpviBWgyfFe+0NOzYQCWVw5uECxX4Pjaj/lCYRANs4EUJ0LkMNjgAByX3LECo+gjEZ4G3RCHQ++JW5X48r4xfDLm8RUoRviec9AqJI5sikY163g7Nv7uqTOoOAN1lfN4bfGtPAHldiyUJ2h3stFyh96MmQaDtsbhW6G4lVxddloMHOfEZrkojY25tugWQF6oHhVfSIkmUfZIn2uSNgPH4bWGQuLOVQfOwD9mDx+X6gW0CMWvidCM0Dp22c11gg5j8h6gMOi9oQHKNFWqEVBnY9VfiXYyYza9wsYECmPegNezoCGEOdAZjUIMd25WMD7wjiJcpXPIkFxNTF6jAqsMq5ZwzgAczKw1JOVplypTuGxGwM760AG/A/pRLL8+UK9KAmDmZzu3Rb0yugK9K8MVpg7QkPhSL/degX3V0SgFlvxDIAVwfv8vKViwEWbd0YKgXEuaANmaCbTqUfQ5oAJtQZqyIFmvVLLcIFuLXrjl4MLNgvIVu4gnCidU80cZGw50FhxrLTjc928ARq84LLjoseC6qx+I4Q3Kl34WXH06MX+ENnkBbME1uA2PARY8idjwMDQ8jym7pMfH6zyPOcT8I+HwVKrEAeepdHwwTuFf4g+9FIBj3HMoP5uXmwFbXXkb2wBAThVtBOx1Oei0UPTY6ZaAYyPJ0i6KbDOFdsYV2ml+N+mTHrDOJ3X3AtJUNHbhPSQO2v4gtFY1l3etVT9diFW8lTgcdTSSQWwwKy+HuVa5RSV8N+v7kDkE2hwmbXa3a1R0bXaka7MrokstNvzVXEX8vcRhp39p4h2m3ZYNazZMJ7+m0bCWu5P9AeN4tqjlUjC4J5PGeAJvA7Tavli7w7zx9Cj9PcA5pvq02r1qv52v4KL7Q4+4dcBj2vTzNk3wugnZle2grdUTtMGQUEp+iTbZH7DOyiB4clyEJprHJ/6gr9UK8OVY1tdqFaBrNRwTrdbO3SqYarURf5BjE/BCgwjZJ5G0GobVtBrCYYXcDYVng1bLOQv3/WshbNBqV44L7Ny9DBN/MKLVclyY0WoL/ME6rVa4wcGAkLsNMRC12hSDH602x8Dh5yxju8DRxqZhBp1Wm2bwwQcfWI8/8BgrmtRQApoAAAAASUVORK5CYII="/>
                 </button>
            </div>
            { suggestions.length !== 0 && showSuggestions && <div className="mt-1 fixed left-[32.5rem] w-[27.75rem] bg-white border border-gray-400 rounded-lg
                             shadow-lg" >
                <ul className="pt-5 pb-3">
                {
                    suggestions.map( ele=>{
                        return ( 
                            <li key={ele} className='py-1 pl-2 font-semibold hover:bg-gray-100 cursor-default'>
                            <img className="w-4 h-4 inline-block mr-2 " src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAMAAAC93eDPAAAAZlBMVEX///8AAADx8fHp6en7+/v29vZMTExGRkZPT0+urq5ZWVleXl7e3t69vb3t7e3T09MdHR1UVFSioqKSkpKMjIyDg4PKyspqamoZGRnDw8N9fX2YmJhwcHA0NDQ8PDwmJiYtLS0SEhLPPqNHAAAEAUlEQVR4nO1a4ZqqIBA10dQiNd1cy7J8/5e8CuqCVuvAeOHer/OzXeA4zJwZYBzngw8++Nfhx4QmlMauicVJEp3qsmk2DE15u2YF/XvL+7Ta3zZz3MNT8lfsQfLgyfIDbqdkbQLn8M36HHXkr7e+d6hnxn/cHvfpj2m21n4kogXS+hqdE0pITAil5+gSpJIl1iDgX4QlTud49g9uUQn2CAk6g8M4efnG42j+s1UVLgF3NEGdzb9fhH8Yt+uIaQiyHR1tgbePTpviBWgyfFe+0NOzYQCWVw5uECxX4Pjaj/lCYRANs4EUJ0LkMNjgAByX3LECo+gjEZ4G3RCHQ++JW5X48r4xfDLm8RUoRviec9AqJI5sikY163g7Nv7uqTOoOAN1lfN4bfGtPAHldiyUJ2h3stFyh96MmQaDtsbhW6G4lVxddloMHOfEZrkojY25tugWQF6oHhVfSIkmUfZIn2uSNgPH4bWGQuLOVQfOwD9mDx+X6gW0CMWvidCM0Dp22c11gg5j8h6gMOi9oQHKNFWqEVBnY9VfiXYyYza9wsYECmPegNezoCGEOdAZjUIMd25WMD7wjiJcpXPIkFxNTF6jAqsMq5ZwzgAczKw1JOVplypTuGxGwM760AG/A/pRLL8+UK9KAmDmZzu3Rb0yugK9K8MVpg7QkPhSL/degX3V0SgFlvxDIAVwfv8vKViwEWbd0YKgXEuaANmaCbTqUfQ5oAJtQZqyIFmvVLLcIFuLXrjl4MLNgvIVu4gnCidU80cZGw50FhxrLTjc928ARq84LLjoseC6qx+I4Q3Kl34WXH06MX+ENnkBbME1uA2PARY8idjwMDQ8jym7pMfH6zyPOcT8I+HwVKrEAeepdHwwTuFf4g+9FIBj3HMoP5uXmwFbXXkb2wBAThVtBOx1Oei0UPTY6ZaAYyPJ0i6KbDOFdsYV2ml+N+mTHrDOJ3X3AtJUNHbhPSQO2v4gtFY1l3etVT9diFW8lTgcdTSSQWwwKy+HuVa5RSV8N+v7kDkE2hwmbXa3a1R0bXaka7MrokstNvzVXEX8vcRhp39p4h2m3ZYNazZMJ7+m0bCWu5P9AeN4tqjlUjC4J5PGeAJvA7Tavli7w7zx9Cj9PcA5pvq02r1qv52v4KL7Q4+4dcBj2vTzNk3wugnZle2grdUTtMGQUEp+iTbZH7DOyiB4clyEJprHJ/6gr9UK8OVY1tdqFaBrNRwTrdbO3SqYarURf5BjE/BCgwjZJ5G0GobVtBrCYYXcDYVng1bLOQv3/WshbNBqV44L7Ny9DBN/MKLVclyY0WoL/ME6rVa4wcGAkLsNMRC12hSDH602x8Dh5yxju8DRxqZhBp1Wm2bwwQcfWI8/8BgrmtRQApoAAAAASUVORK5CYII="/>
                               {ele}</li>
                        )
                    })
                }
                
                </ul>
            </div>}
        </div>
        <div className="w-1/5">
            <img className='w-10 h-8'
             src="https://static.vecteezy.com/system/resources/thumbnails/008/442/086/small/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"
             />
        
        </div>

    </div>
  )
}

export default Header