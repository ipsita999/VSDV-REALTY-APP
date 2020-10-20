import React from 'react'
// import Nav from './Components/Nav'
import Team from './Components/Team'
import Contact from './Components/Contact'
import Hero from './Components/Hero'
import Residential from './Components/Residential'
import Listings from './Components/Listings'
import './Styles/Container.css'

const Container = () => {




    return (
        <div className='main--container'>
            <Hero/>
            <Team/>
            <Residential/>
             <Listings/>
            <Contact />
        </div>
    )
}

export default Container