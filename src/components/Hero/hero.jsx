import React from 'react'
import './hero.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'


const Hero = ()=>{
    return(
        <div id='home' className='hero'>

            <h1><span>I'm Mohamed Elhefnawy  </span> Frontend Developer</h1>
            <div className='hero-action'>

                <div className='hero-connect'>
                    <AnchorLink className='anchor' href='#contact' offset={50}>
                    Connect with me </AnchorLink>
                </div>
                <div className='resume'>
                    <a className='anchor' href='https://drive.google.com/file/d/14Ey5fy7Yq7V15j65qkX8NCuIjQRDOLK3/view?usp=drive_link' target="_blank" rel="noopener noreferrer" >
                         My Resume
                     </a>
                </div>
            </div>
        </div>



    )
}
export default Hero