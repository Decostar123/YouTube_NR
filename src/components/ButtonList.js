import React from 'react'
import Button from './Button'
 import { useState } from 'react'
 import { subjects } from '../utils/constant'
const ButtonList = () => {
  // buttonList IS BASICALLY COLLECTIONS OF BUTTONS AND FOR THAT FORST WE NEED TO MAKE 
  // BUTTOND COMPONENY AND A
  const [ind , setInd ] = useState(0)  ; 
  
  if( window.innerWidth <=768
      ) return null ; 
  return (
    <div className= "flex justify-between w-50  pl-2 pr-3 cursor-pointer  " >
    {ind != 0 && <div className="w-[5rem] h-4 py-2  "
     onClick={()=>{ 
      console.log( ind , ind -1 , "1111"  ) ; 
      setInd(ind -1 ) ; 
    }}>
    <img width="30px" height="30px" className="pt-[4px]  " src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAeFBMVEX///8AAAD19fWkpKT7+/vW1tZXV1fa2trx8fHJycnAwMDr6+t7e3ve3t7i4uL4+Pg7OzuWlpawsLBiYmIJCQmKiop0dHRsbGzHx8dISEjQ0NASEhIpKSlcXFxOTk4tLS00NDSpqamampqEhIQeHh4ZGRm5ubk/Pz8VwH3/AAAET0lEQVR4nO2dWVICQRBEuxEEHRFUFhERUJT739AAA1SY7K8iKuZ15wkqY0QeWcuEUFRUVFRUVNQA9TvdlncNF9T9JO60+vIu5FIax4OGPe9aLqJJ/NWI+Ke6iH818y7HXrP4X7feBRmrtToxGN+8S7JV7/PUYIyoT+L9ub8YO95VGapbZzA+e5dlp5tag6Bn+FVvkPM5XAuDC+/CrPQgDMYX78qM9KEMTrwrM9JUGaRA20IZvPauzEhvyuDUuzIbtc9Q9KA779JsVIeiP3rwLs1G1UgZvPIuzUb1KLoTJKN5kQZvvEuz0a00CMHtR2nw3rs0G70rf/PKuzQbjZXBV8jvpTtlcNj2Ls1G+aLok3dlNuKj6KsyOPYuzUaV8kdB0b40+Ohdmo00ikJ6MBmjaN+7NBtdSYN4FIX06yfK4NC7MiM9KYOU1oREUUhwr1H0w7s0G7UkiuJT0bV3aTbSKFpS0WboWRrEoygkFZUoOoeQmkTRJT0VpTToJYriU1FKg36rDFJS0Y0y+O5dmo3wDfraYdi98CgKGYjNOBXFoyg9FV0OvEuzEb5BL1GUsvyCR9GhMghBUZ2KUhr0c2WwoGgz1JEGISiKT0XVXlZB0aZI7mVt6KnoFoKici+LkopeK4OUWdHTEwFHUVB0qQxCGvS9fFEUMiuqURTSoC+paNOFR9GyttR0lQZ900VPRflrS3QUxc+KahSFrC3hU9F8UZSytiSfIGVWtKUMUlBUwjYFRUMQBiGpaJDHciAoulN9KgNB0b1qHVJWB/fiP0NBpKDPYRv/v1S2CSkDa4kmBYZpdLeesk6fsEj5bZH6+QQ5a5EaDKLc+1VHtyMmp0lFUZC2b6qzDclLQ6jk1VgMpLblhAnkiEc4f5HIURxIlWcPOZAq7wWtMJAqL+FzIFWekB1hIBV/ey01E4WBVPwNxNRJdch1pCwgVb/aAAOp529KO6hAaoOUAaTKlZIhZD89MWz6iYFUmaRyIHWtLHIgNYMkNWtI5SSp8jQU5PZV6rwX5JRuCIMCqQTJTQzKLchUkoqBVJmkbjCQKpNUyqx0KkntepdmpayTVMjeSQZvBErdL80AUjFJqr4jTNnD5L8hL2QBqXLlmwOpMknlQCp+3y0LSNV7pxlAKiZJ1b1wTLtf7/BD7mWlrtNiklR9YZiTpMrTfJwNP9kLn2EGNiWkUg4vZdEL15CKSVIz6IVrSIXcxM6jFy4tcgY2ZZLKgVTZC+esvmeQpEpI5ZyC0ZDqXZmZ9FYRH1I5M6kZQCr+0nJq9R1yLTsFqZh2fw6QKnvhGEgdyNV3TJLKP7uc2CrKAFK33pWZSbf7MWGxhFRO5L9WFjF0I5NUzn8bCamYwRt5nwkzsREUpGKy8J1q7zNhGhp71UEqJrb50flb3DjZ20GnSSpmqOhXE/gjDP+T1A3o2/CP1keDnGnpE1XjfQNuyvqiOFGrwiTfRUVFRUVFXvoGts02HmQrH+EAAAAASUVORK5CYII="/>
    </div>}
      
     <div className="flex overflow-x-hidden">
     {
      subjects.map( ( ele ,i )   => {
        if( i < ind ) return null ; 
        return <Button name={ele} ind = {i} /> 
      } )
     }
     
     </div>

        { 
          ind != subjects.length && <div className="w-[5rem] h-4 py-2 cursor-pointer "
           onClick={()=>{
            console.log( ind , ind + 1  , "2222") ; 
            setInd( (ind + 1)%subjects.length  ) ; 
           }}>
          <img  width="30px" height="30px" className="pt-[4px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFHnaY8q8o_n3qjKoSGA27zd9XwOR8hnHrIg&usqp=CAU"/>
        </div>
        }
      
    </div>
  )
}

export default ButtonList