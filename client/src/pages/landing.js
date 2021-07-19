import React from 'react'
import { Link } from "react-router-dom";
function landing() {
    return (
        <div className='home'>
            <div className='home_content'>
                <h3>Welcome to memories!!</h3>
                <h4>Create a new account  <Link to={'/signup'}>SignUp</Link></h4>
                <h4>Or</h4>
                <h4> <Link to='/login'> Login</Link></h4>

            </div>
            
        </div>
    )
}

export default landing
