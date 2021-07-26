import React,{useState} from 'react'
import '../css/AddPost.css'
import { FaWindowClose } from 'react-icons/fa';


function AddPost({addPost,setAddPost}) {
  const[fileName,setFileName]=useState('')
  const[message,setMessage]=useState('')
  const[tags,setTags]=useState('')
    // const [fileName,setFileName] = useState('')
// const user = localStorage.getItem('userName')



        const handleSubmit =async (e)=>{
            e.preventDefault()
            const formData =new FormData()
            formData.append("message",message)
            formData.append("tags",tags)
            formData.append("postedImage",fileName)
           console.log(formData)
            const result=   await fetch(
                `http://localhost:5000/posts/createPost`,
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(formData),
                }
              ).then((response) => response.json())
              if(result.status==='ok'){
                  alert('data submitted')
                  setAddPost((prevDisplay)=>!prevDisplay)
              }
              else{
                  alert(result.error)
              }
        }
     
         
        
    
    return (
        addPost?( 
        
        <div className='content'>
            
         <div className='modal_content'>
         <span onClick={()=>{
                    setAddPost((prevDisplay)=>!prevDisplay)
                }}><FaWindowClose/></span>
            
            <div className='content_body'>
<form className='formGrid' onSubmit={handleSubmit} encType="multipart/form-data">

    <input type='text' placeholder='Message'  onChange={(e)=>{
        setMessage(e.target.value)
    }}/>
    <input  type='text' placeholder='Tags'  style={{border:'none',borderBottom:'1px solid black'}} onChange={(e)=>{
        setTags(e.target.value)
    }}/>

  <input type="file" filename='postedImage' onChange={(e)=>{
      setFileName(
       e.target.files[0]
      )
  }} />
              

    <button type='submit'>Submit</button>
</form>
            </div>
         </div>
          
        </div>):null
       
    )
}

export default AddPost
