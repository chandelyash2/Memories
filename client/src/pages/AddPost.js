import React from 'react'

function AddPost({addPost,setAddPost}) {
    return (
        addPost?( 
        
        <div className='content'>
            
         <div className='modal_content'>
         <span onClick={()=>{
                    setAddPost((prevDisplay)=>!prevDisplay)
                }}>X</span>
            
            <div className='content_body'>
<form>
    <input type='text' placeholder='Creator'/>
    <input type='text' placeholder='Title'/>
    <input type='text' placeholder='message'/>
  <div>
  <input type="file"  />
              
  </div>
    <button type='submit'>Submit</button>
</form>
            </div>
         </div>
          
        </div>):null
       
    )
}

export default AddPost
