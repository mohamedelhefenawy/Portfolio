
import React, { useState , useRef } from "react";
import './navbar.css';
import logo from '../../assets/7fno_logo.svg';
import underline from '../../assets/nav_underline.svg';
import open from '../../assets/menu_open.svg'
import close from '../../assets/menu_close.svg'
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  const [menu, setMenu] = useState('home'); 

  const menuRef = useRef()

  const openmenu = ()=>{
    menuRef.current.style.right = '0'
  }

  const closemenu = ()=>{
    menuRef.current.style.right = '-350px'
  }

  return (
    <div className="navbar">
      <img src={logo} alt="Logo"  />
      <img src={open} onClick={openmenu} alt="" className="open" />

      <ul ref={menuRef}>
      <img src={close} onClick={closemenu} alt=""  className="close"/>
        <li className="first-one">
            <AnchorLink className="anchor" href="#home">
          <p  onClick={() => setMenu('home')}>Home</p></AnchorLink>
          {menu === 'home' && <img src={underline} alt="Underline" />}
        </li>
        <li>
        <AnchorLink className="anchor" href="#about" offset={50}>
          <p onClick={() => setMenu('about')}>About</p></AnchorLink>
          {menu === 'about' && <img src={underline} alt="Underline" />}
        </li>
        <li>
        <AnchorLink className="anchor" href="#services" offset={50}>
          <p onClick={() => setMenu('services')}>Services</p> </AnchorLink>
          {menu === 'services' && <img src={underline} alt="Underline" />}
        </li>
        <li>
        <AnchorLink className="anchor" href="#work" offset={50}>
          <p onClick={() => setMenu('work')}>Portfolio</p> </AnchorLink>
          {menu === 'work' && <img src={underline} alt="Underline" />}
        </li>
        <li>
        <AnchorLink className="anchor" href="#contact" offset={50}>
          <p onClick={() => setMenu('contact')}>Contact</p> </AnchorLink>
          {menu === 'contact' && <img src={underline} alt="Underline" />}
        </li>
      </ul>

      <div className="nav-con"><AnchorLink className="anchor" href="#contact" offset={50}>Contact with me </AnchorLink></div>
    </div>
  );
};

export default Navbar;
