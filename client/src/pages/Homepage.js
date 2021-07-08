import React from "react";
import "../css/Homepage.css";
import { Link } from "react-router-dom";
function Homepage() {
  return (
    <div className="home">
      <div className="home_content">
        < div className="home_nav">
            <div className='right'>
            <img src="/images/logo.jpg" alt="" />
            </div>
      <div className='middle'>
          <Link style={{fontSize:'1.2rem',fontWeight:'600',textDecoration:'none'}}>Profile</Link>
          
      </div>
      <div className='left'><Link style={{fontSize:'1.2rem',fontWeight:'600',textDecoration:'none'}}>LogOut</Link></div>
  
        </div>
        <div className='home_body'>
            <div className='body_content'>
                <div className='content_row'>
                    <div className='card'>
                        saaa
                    </div>
                    <div className='card'>
                        saaa
                    </div>
                    <div className='card'>
                        saaa
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage;
