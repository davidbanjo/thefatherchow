import React from 'react'
import "../../styles/about.css"

const About = () => {
  return (
    <div className='aboutContainer'>
        <div className='aboutSubContainer heroSubContainer'>
            <div className="ownerProfile">
                <div className='ownerImage'>
                    <img src="" alt='' />
                </div>
                <div className='profileDetails'>
                    <div className='sectionTitle'><h2>About Us</h2></div>
                    <div className="ownerName"><h3>Olayemi Tomiwa Samson MD, <br />TheFatherChow.</h3></div>
                </div>
            </div>
            <div className='sectionContent'>
                <p>The Father Chow is a newly introduced company that specializes in the production of the best and tastiest sandwich made with the best quality bread with natural egg ingredients</p>
            </div>
            <div className='sectionLogoArea'>
                <img className='sectionLogo' src='img/logo.png' alt='fatherchow-logo' />
            </div>
        </div>
    </div>
  )
}

export default About