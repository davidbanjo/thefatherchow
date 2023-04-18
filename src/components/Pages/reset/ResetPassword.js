import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../Navbar/Navbar'

const ResetPassword = () => {
  return (
    <div className='Container'>
        <Navbar />
        <div className='mainFormContainer'>
          {/* <div className='formTitle'> */}
          <div className='formHeading'>
            <h1 className='w-900'>Reset Password</h1>
            <p>Please enter your details below</p>
          </div>
          <form>
            <legend className='formTitle'>
            <input className='inputContainer' type='email' placeholder='Email' />
            </legend>
            <input className='primaryBtn loginBtn' type='submit' value="Reset Password" />
          </form>
          <p>Already have an account?<span>  </span>  
            <Link to="/signup">
              Log In
            </Link>
          </p>
        </div>
        <div className='heroImg loginImg'></div>
    </div>
  )
}

export default ResetPassword