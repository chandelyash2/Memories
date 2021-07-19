import React,{useState,useEffect} from "react";
import "../css/Homepage.css";
import { Link } from "react-router-dom";
import AddPost from './AddPost'
import { FaUserAlt,FaSignOutAlt} from 'react-icons/fa';


function Homepage() {
  const [postedData,setPostedData] = useState([])
const[addPost,setAddPost] = useState(false)
  useEffect(() => {
data()
  },[])

  const data= async()=>{
    await fetch("http://localhost:5000/posts", {
      method: "GET",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
    })
      .then((res) => res.json())
      .then((data) => setPostedData(data));

  }
console.log(postedData)

  return (
    <div className="home">
      <div className="home_content">
        < div className="home_nav">
          <div className='right'>
            <img src="/images/logo.jpg" alt="" />
          </div>
          <div className='middle'>
            <Link style={{ fontSize: '1.2rem', fontWeight: '600', textDecoration: 'none' }}><FaUserAlt style={{marginRight:'0.5rem'}}/>Profile</Link>

          </div>
          <div className='left'><Link style={{ fontSize: '1.2rem', fontWeight: '600', textDecoration: 'none' }}><FaSignOutAlt style={{marginRight:'0.5rem'}}/>LogOut</Link></div>

        </div>
        <div className='home_middle'>
          <div className='middle_button'><button onClick={()=>{
            setAddPost((prevDisplay)=>!prevDisplay)
          }}> Add Post
          </button></div>
        </div>
        <div className='home_body'>
          <div className='body_content'>
            <ul>
            <div className='content_row'>
            {postedData.map((d)=>(
              <li style={{listStyle:'none'}}>
              <div className='card'>
              <div className='main_content'>
              
                  <>
                <div className='first_column'>
 <img src={`/uloads/${d.file}`} alt='file'/>
                </div>
                <div className='column'>
                  <span className='column_left'>  <h4>{d.creator}</h4></span>
                
                 <span className='column_right'><h5>{d.createdAt}</h5></span> 
                     
                </div>
               <div className='column'><span>
                    <p>{d.tags}</p>
                  </span>
                  </div>
                  <div className='column'><span>
                    <h3>{d.title}</h3>
                  </span></div>
                  <div className='column'>
                  <span>
                    <p>{d.message}</p>
                  </span>
                  </div>
                  <div className='column'>
                 
                    <span className='column_left' style={{cursor:'pointer'}}>
                      <p>like:{d.likeCount}</p>
                    </span>
                    <span className='column_right'>
                      <p>comment</p>
                    </span>
                </div>
                </>
       
              </div>
              
              </div>
              </li>   
                      ))
                    }
             
            </div>
            </ul>
          </div>
        </div>
      </div>
      <AddPost addPost={addPost}
      setAddPost={setAddPost}/>
    </div>
  )
}

export default Homepage;
