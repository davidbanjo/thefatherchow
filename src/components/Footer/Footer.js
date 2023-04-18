import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footerSubContainer '>
            <h2 className='footerCTA'>Won't you rather Buy</h2>
            <div className='orderButtons' >
                <button className='secondaryBtn navBtn'><b>Delivery</b></button>
                <p>Or</p>
                <button className='secondaryBtn navBtn'><b>Pickup</b></button>
            </div>
        </div>
    </div>
  )
}

export default Footer