import React from 'react'
import { Link } from 'react-router-dom'
// import { BsArrowDownCircleFill } from "react-icons/bs"
import "./login.css"
import Navbar from '../../Navbar/Navbar'

const Login = () => {
  return (
    <div className='Container'>
        <Navbar />
        <div className='mainFormContainer'>
          {/* <div className='formTitle'> */}
          <div className='formHeading'>
            <h1 className='w-900'>Login</h1>
            <p>Please enter your details below</p>
          </div>
          <form>
            <legend className='formTitle'>
            <input className='inputContainer' type='email' placeholder='Email' />
            <input className='inputContainer' type='password' placeholder='Password' />
            <div className='leftContainer'>
            <Link to='/resetpassword'>
              <p className='left'>Forgot Password</p>
            </Link>
            </div>
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

export default Login