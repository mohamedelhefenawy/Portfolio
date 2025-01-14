import React  from "react";
import './about.css'
import theme from '../../assets/theme_pattern.svg'



const About = () =>{
    return(
<div id="about" className="about">
<div className="title">

    <h1>About me</h1>
    <img src={theme}alt="" />
</div>

<div className="about-skills">
    <div className="about-skill"><p>Html & CSS</p> <hr style={{width:'70%'}} /></div>
    <div className="about-skill"><p>Java script</p> <hr style={{width:'65%'}} /></div>
    <div className="about-skill"><p>React</p> <hr style={{width:'90%'}} /></div>
    <div className="about-skill"><p>Next JS</p> <hr style={{width:'90%'}} /></div>
    <div className="about-skill"><p>BootStrap</p> <hr style={{width:'50%'}} /></div>
    <div className="about-skill"><p>Tailwind</p> <hr style={{width:'85%'}} /></div>
    <div className="about-skill"><p>Python</p> <hr style={{width:'65%'}} /></div>
    <div className="about-skill"><p>Machine Learning & NLP </p> <hr style={{width:'75%'}} /></div>

</div>
<div className="about-achievements">
<div className="about-achievement">

    <h1>1+</h1>
    <p>Years of experience in Frontend</p>

</div>
<hr />
<div className="about-achievement">

    <h1>5+</h1>
    <p>Project Completed</p>

</div>
<hr />

</div>
</div>


    )
}
export default  About