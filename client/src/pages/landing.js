import React from 'react'
import '../css/Landing.css'
import { Link } from "react-router-dom";
function landing() {
    return (
        <div className='home'>
            <div className='home_contentt'>
            <img style={{margin:'2rem',opacity:'.9'}} className="img_logo" src="/images/logo.jpg" alt="null" />

                <h1 className='welcome_content'>Welcome to memories!!</h1>
                <h3 className='create_account'>Create a new account  <Link style={{textDecoration:'none',color: 'cadetblue'}}  to={'/signup'}>SignUp</Link></h3>
                <h2 style={{ fontSize:'2rem',   color: 'blueviolet'}}>Or</h2>
                <h3 style={{ fontSize:'2rem'}}> <Link style={{textDecoration:'none',color: 'cadetblue'}} to='/login'> Login</Link></h3>

            </div>
            
        </div>
    )
}

export default landing
