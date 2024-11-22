import React from "react";
import './footer.css'
import footer_logo from '../../assets/7fno_logo.svg'
import user from '../../assets/user_icon.svg'

const Footer = ()=>{
    return (
        <div  className="footer">
            <div className="footer-top">
                <div className="footer-top-left">
                    <img src={footer_logo} alt="" />
                    <p>I'm Front End Developer From Egypt with Experience in AI especially NLP</p>
                </div>
                <div className="footer-top-right">
                    <div className="footer-email" tabindex="0">
                        <img src={user} alt="" />
                        <input type="email" placeholder="Enter Your Email" />
                    </div>


                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <div className="footer-bottom-left">
                © 2024 7fno . All rights reserved


                </div>
                <div className="footer-bottom-right">
                    <p>Terms of services</p>
                    <p>Privacy Policy</p>
                    <p>Connect with me</p>
                </div>
            </div>
        </div>
    )
}

export default Footer