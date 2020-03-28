import React from 'react'
import { Link } from 'react-scroll'
import '../Styles/Nav.css'

// import {Route, NavLink, Switch} from 'react-router-dom'



class Nav extends React.Component {

    render() {
        return (
            <>
                <nav>
                <div className="logo"> VSDV <br></br> REALTY </div>


                    <div className="nav-right">
                        <Link
                            activeClass="active"
                            to="team"
                            spy={true}
                            smooth={true}
                            // offset={-85}
                            duration={500}
                        > Team</Link>
                        <Link
                            activeClass="active"
                            className= 'work-link'
                            to="listings"
                            spy={true}
                            smooth={true}
                            offset={-150}
                            duration={500}
                        > Listings</Link>
                        <Link
                            activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            // offset={-70}
                            duration={500}
                        > Contact Us</Link>
                    </div>
                  

                </nav>


            </>
        )
    }
}
export default Nav