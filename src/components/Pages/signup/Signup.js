import React from 'react'
import { Link } from 'react-router-dom'
import './signup.css'
import Navbar from '../../Navbar/Navbar'

const Signup = () => {
  return (
    <div className='Container'>
        <Navbar />
        <div className='mainFormContainer'>
          {/* <div className='formTitle'> */}
          <div className='formHeading'>
            <h1 className='w-900'>Sign up</h1>
            <p>Please provide the correct information</p>
          </div>
          <form className='signupForm'>
            <legend className='formTitle'>
            <input className='inputContainer' type='text' placeholder='Full Name' />
            <input className='inputContainer' type='number' placeholder='Phone Number' />
            <input className='inputContainer' type='email' placeholder='Email' />
            <input className='inputContainer' type='date' placeholder='Date Of Birth(DD/MM)' />
            <div className='leftContainer'>
              <p className='left'>So we can celebrate with you</p>
            </div>
            <input className='inputContainer' type='password' placeholder='Create Password' />
            </legend>
            <input className='primaryBtn loginBtn' type='submit' value="Login" />
          </form>
          <p>Already have an account?<span>  </span>  
            <Link to="/signup">
              SignUp
            </Link>
          </p>
        </div>
        <div className='heroImg loginImg'></div>
    </div>
  )
}

export default Signup