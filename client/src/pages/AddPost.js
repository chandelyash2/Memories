import React,{useState} from 'react'
import '../css/AddPost.css'
import { FaWindowClose } from 'react-icons/fa';


function AddPost({addPost,setAddPost}) {
    const [form,setForm] = useState({
        Creator:'',
        Title:'',
        Message:'',
       
    })
    // const [fileName,setFileName] = useState('')

    const formData ={
        creator:form.Creator,
        title:form.title,
        message:form.Message,
       
    }
    const handleChange=(e)=>{
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    }
        const handleSubmit =(e)=>{
            e.preventDefault()
            console.log(formData)
            postedData()
        }
        const postedData =async ()=>{
         await fetch(
            `http://localhost:5000/posts/createPost`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(formData),
            }
          ).then((response) => response.json());
         
        }
    
    return (
        addPost?( 
        
        <div className='content'>
            
         <div className='modal_content'>
         <span onClick={()=>{
                    setAddPost((prevDisplay)=>!prevDisplay)
                }}><FaWindowClose/></span>
            
            <div className='content_body'>
<form className='formGrid' onSubmit={handleSubmit} encType='multipart/formData'>
    <input type='text' placeholder='Creator' name='Creator' onChange={handleChange}/>
    <input type='text' placeholder='Title' name='Title' onChange={handleChange}/>
    <input type='text' placeholder='Message' name='Message' onChange={handleChange}/>
    <input  type='text' placeholder='Tags' name='Tags' style={{border:'none',borderBottom:'1px solid black'}} onChange={handleChange}/>
  {/* <div className='img_upload'>
  <input type="file" filename='fileImage' onChange={(e)=>{
      setFileName(
       e.target.files[0]
      )
  }} />
              
  </div> */}
    <button type='submit'>Submit</button>
</form>
            </div>
         </div>
          
        </div>):null
       
    )
}

export default AddPost
