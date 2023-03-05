import React, { useContext } from 'react'
import { Link } from 'react-scroll'
import { colorContext } from '../Context/Context'
import Toggle from '../Utiles/Toggle'
import './Navbar.css'
const Navbar = () => {
    let colors = useContext(colorContext)
    let dark = colors.state.darkMode
    return (<>
        <nav className="navbar navbar-expand-lg bg-body-tertiary navbar bg-dark" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Shivam Soni</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarNav">
                    <ul className="navbar-nav">
                        <Link spy={true} to="Navbar" smooth={true} activeClass="activeClass">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                        </Link>
                        <Link spy={true} to="Services" smooth={true} activeClass="activeClass">


                            <li className="nav-item">
                                <a className="nav-link active   " href="Home.js">CV</a>
                            </li>
                        </Link>
                        <Link spy={true} to="Projects" smooth={true} activeClass="activeClass">


                            <li className="nav-item">
                                <a className="nav-link active   " href="Home.js">Projects</a>
                            </li>
                        </Link>

                    </ul>
                    <div className="toggler">
                        <Toggle />
                    </div>

                </div>
                    <Link spy={true} to="GetInTouch" smooth={true} activeClass="activeClass">
                        <a href="Contact.js"><button className='contactBtn' style={dark ? { color: "white" } : { color: "black" }}>Contact Me</button></a>
                    </Link>


            </div>
        </nav>
    </>
    )
}

export default Navbar
