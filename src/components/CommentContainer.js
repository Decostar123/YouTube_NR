import { PROFILE_URL } from '../utils/constant';
const commentData = [ {
    name : "Anil", 
    text : "lorem-55" , 
    replies : [ 
      {
        name : "Aakash" , 
        text : "lorem-33",
        replies : []  
      }

    ]
  } , {
    name : "Rohit" , 
    text : "wwwwwww wwwww wwwwwww eeeeeeeeeeee rrrrrrr qqqq " , 
    replies : [ 
      
    ]
  }, {
      name : "Rahul" , 
      text : "aaaaa aaaaaaaaaaaaaa aaaa aaa aaaaaaaa aaaaaaa " , 
      replies : [
        {
          name : "Manoj" , 
          text : "lorem-55", 
          replies : [

            {
              name : "Anil", 
              text : "lorem-55" , 
              replies : [ 
                {
                  name : "Aakash" , 
                  text : "lorem-33",
                  replies : []  
                }
          
              ]
            } , {
              name : "Rohit" , 
              text : "wwwwwww wwwww wwwwwww eeeeeeeeeeee rrrrrrr qqqq " , 
              replies : [ 
                
              ]
            }, {
                name : "Rahul" , 
                text : "aaaaa aaaaaaaaaaaaaa aaaa aaa aaaaaaaa aaaaaaa " , 
                replies : [
                  {
                    name : "Manoj" , 
                    text : "lorem-55", 
                    replies : [] 
                  }
                ]
              }












          ] 
        }
      ]
    } ] ; 


// THIS COMPONENT IS BEING USED AGAIN AND AGAIN 
// comment simply give the foramt from the object 
const Comment = ({data})=>{

        // {console.log( " the individual comment i sbeing called ") }
        return <div className="flex shadow-sm p-2 mb-1 bg-gray-200">
          <img className="w-12 h-12  bg-black rounded-[100%]" src={PROFILE_URL}/>
          <div className="px-3" >
            <p className='font-bold'>name : {data.name}</p>
            <p>text : {data.text}</p>  
                      
          </div>
        </div>
    }

// I WILL PASS A COMMENT LIST ( ARRAY) INSIDE IT AND IT WILL RENDER A LIST ( COMPONENET  )
// MY OPINION IS THAT  RECURSION WILL BE USED HERE 



// THIS IS LIKE THE STARTING POINT OF THE RECURSION, 
// BASICALLY THIS GIVES THE ARRAY AND THAT COMMENT  PART ONLY GRABS THE 
// OBJECT AND THE  NAME AND TEXT SECTION ONLY FOR ALL THE OTHER COMPONENTS 
// CALLL THAT PART AGAAIN WITH MY INNER ARRA YSECTINO AND ONE ENTRY HA
const CommentList = ({comments})=>{
  return <div>
    {
      comments.map(( ele, ind ) => 
      <div>
      {console.log( " the index was " , ind )}
        <Comment key={ind} data={ele} />
        <div className="pl-5 border  border-l-black" >
          <CommentList key={ind} comments={ele.replies} />
        </div>
      </div> )
    }
  </div>
}

const CommentContainer = ()=>{    
        return (
            <div className="m-5 p-2 ">
                <h1 className="text-2xl font-bold pb-2">Comments</h1>
                {/* <Comment data={commentData[0]} /> */}
                <CommentList comments = {commentData} />
              {/* MY REPLIES WILL BE BELOW THE COMMENTS  */}
            </div>
        )

}
export default CommentContainer ; 