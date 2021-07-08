import React from 'react'
import '../css/signup.css'
function SignUp() {
    return (
        <div className='sign_up'>
            <div className='signUp_bottom'>
             <h2 className='signUp_bottom_h2'>
                 SignUp 
             </h2>
             <img className='img_logo' src='/images/logo.jpg' alt ='null' />
             <form className='form_grid'>
                 <div className='form_col'>
                     <input placeholder='Enter your Name'/>
                 </div>
                 <div className='form_col'>
                     <input placeholder='Enter your Email'/>
                 </div>
                 <div className='form_col'>
                     <input placeholder='Enter your Password'/>
                 </div>
                 <div className='submit'>
                     <button>SignUp</button>
                 </div>
             </form>
            </div>
            
        </div>
    )
}

export default SignUp
