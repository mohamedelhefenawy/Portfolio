import './work.css'
import theme from '../../assets/theme_pattern.svg'
import Works from '../../assets/mywork_data'
import arrow from '../../assets/arrow_icon.svg'


const Work = ()=>{
    return(
        <div id='work' className='Work'>
            <div className='title'>
                <h1>
                    My Work
                </h1>
                <img src = {theme} alt="" />
            </div>
            <div className='work-container'>
            {Works.map((work , index)=>(
                <a href={work.link} key={index} target ='_blank' >
                     <img  src={work.w_img} alt=""  />
                </a>
                
               
                    
                
            ))}
            </div>
            {/* <div className='show'>
                <p>Show More</p>
                <img src={arrow} alt="" />
            </div> */}
        </div>
    )
}
export default Work