import React from 'react'
import { Link } from 'react-router-dom'
import { BsFillCalendar2EventFill, BsPersonFill } from 'react-icons/bs'
import '../dashboard.css'

const HeaderDashboard = () => {
  return (
    <>
        <div className='navbar-col-1 logo'>
            <div className='dashHeader-col-1'>
                <Link to="/">
                    <img className='siteLogo dashLogo' src='img/dashLogo.png' alt='fatherchow-logo' />
                </Link>
                <div className='contactContainer'>
                    <BsFillCalendar2EventFill />
                    <p>For enquiries<span><b>  +234 6566 2098</b></span></p>
                </div>
            </div>
            <BsPersonFill  className='personIcon'/>
            {/* <h2>LOGO</h2> */}
        </div>
    </>
  )
}

export default HeaderDashboard