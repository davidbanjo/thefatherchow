import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div>
        <h1>404</h1>
        <p>Sorry, The page you're looking for doesn't exist!</p>
        <Link to='/'>
            Return to Homepage
        </Link>
    </div>
  )
}

export default Error