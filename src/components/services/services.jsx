import React from 'react'
import './services.css'
import theme from '../../assets/theme_pattern.svg'
import Services_data from '../../assets/services_data'
import arrow from '../../assets/arrow_icon.svg'


const Services = ()=>{
    return (
<div id='services' className='services'>
    <div className='title'>
        <h1>Services</h1>
        <img src={theme} alt="" />
    </div>

    <div className='services-boxes'>
    {Services_data.map((service, index) => (
        <div key={index} className='services-box'>

            <h4>{service.s_no}</h4>
            <h3>{service.s_name}</h3>
            <p>{service.s_desc}</p>

            {/* <div className='read-more'>
                <h5>{'Read More'}</h5>
                <img src={arrow} alt="arrow" />
            </div> */}
        </div>
    ))}
</div>

</div>
    )
}
export default Services