import React, { useState } from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom';

const Navbar = () => {

  const [hasBorder, setHasBorder] = useState(false);

  const handleClick = ({ id }) => {
    setHasBorder(!hasBorder);
  }

  return (
    <div className='navbarContainer fc_navbar'>
        <div className='navbar-col-1'>
          <Link to="/">
              <img className='siteLogo' src='img/logo.png' alt='fatherchow-logo' />
            </Link>
            {/* <h2>LOGO</h2> */}
        </div>
        <div className='navbar-col-2'>
            <ul className='navItems'>
                <li className='navItem' id="1" onClick={handleClick} style={{ borderBottom: hasBorder ? '2px solid black' : 'none' }}>About</li>
                <li className='navItem' id="2" onClick={handleClick} style={{ borderBottom: hasBorder ? '2px solid black' : 'none' }}>Contact</li>
                <li className='navItem' onClick={handleClick} style={{ borderBottom: hasBorder ? '2px solid black' : 'none' }}>Settings</li>
                <li className='navItem' onClick={handleClick} style={{ borderBottom: hasBorder ? '2px solid black' : 'none' }}>Coming Soon</li>
            </ul>
            <Link to="/login">
              <button className='primaryBtn navBtn'>Login</button>
            </Link>
        </div>

    </div>
  )
}

export default Navbar