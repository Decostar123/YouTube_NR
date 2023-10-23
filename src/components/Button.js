import { Link } from "react-router-dom";
const Button = ({name , ind })=>{
    
    return (
        <div >
            <Link to = { ind ===0 ? "/" : "/results?search_query=" + name } >

            <button className=" hover:bg-black hover:text-white whitespace-nowrap px-5 py-2 m-2 bg-gray-200 rounded-lg">{name}</button>
            </Link>
            
        </div>
    )
}
export default Button ; 