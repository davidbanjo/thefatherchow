import React from 'react'
import '../../styles/hero.css'
import { BsArrowDownCircleFill } from "react-icons/bs"

const Hero = () => {
  return (
    <div className='heroContainer'>
        <div className='heroSubContainer'>
            <div className='heroDetails'>
                <div className='heroDetailsTop'>
                    <img className='heroLogo' src='img/fullLogo.png' alt=''/>
                    <p className='heroDesc'><i>E bi n pami, who is Hungry. <span className='highlightedText'>Won't you Rather buy?</span></i></p>
                </div>
                <div className='heroDetailsBottom'>
                <h1>PLACE YOUR ORDER</h1>
                    <div className='orderButtons' >
                        <button className='secondaryBtn navBtn'><b>Delivery</b></button>
                        <p>Or</p>
                        <button className='secondaryBtn navBtn'><b>Pickup</b></button>
                    </div>
                </div>
                <div className='arrowDownContainer'>
                    <BsArrowDownCircleFill className='arrowDown' />
                </div>
            </div>
            <div className='heroImg'></div>
        </div>
    </div>
  )
}

export default Hero