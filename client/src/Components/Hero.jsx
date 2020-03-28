import React from 'react'
import Nav from './Nav'
// import TextLoop from "react-text-loop";
import '../Styles/Hero.css'

const Hero = () => {

    return (
        <div className = "hero-container">
     

            <Nav/>
     
            <div className='header'>

                <h1>We are VSDV Realty. The best agency in New Jersey, New York, and Pennsylvania.</h1>
           
            </div>
        
        </div>
    );

}
export default Hero