import React , {useState} from "react";
import Navbar from "./components/navbar/navbar";
import Hero from './components/Hero/hero'
import About from './components/About/about'
import Services from './components/services/services'
import Work from './components/Work/work'
import Contact from "./components/Contact/contact";
import Footer from './components/Footer/footer'

const App = ()=>{
return (


<div>


<Navbar/>
<Hero/>
<About/>
<Services/>
<Work/>
<Contact/>
<Footer/>

</div>
)
}
export default App