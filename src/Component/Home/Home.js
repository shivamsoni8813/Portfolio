import React, { useContext } from 'react'
import './Home.css'
import Github from '../images/github.png'
import Instagram from '../images/instagram.png'
import Linkedin from '../images/linkedin.png'
import ProfileImg from '../images/secoundPic.jpg'
import { colorContext } from '../Context/Context'
import { Link } from 'react-scroll'
const Home = () => {
  let colors = useContext(colorContext)
  let dark = colors.state.darkMode
  return (
    <div className="home" id='Navbar'>
      <div className="homeContainer d-flex">

        <div className="left">
          <div className="leftWrapper">
            <div className="leftHeading">
              <h2 className='upperHeading'>Hy! I Am</h2>
              <h1 className='nameHeading'>Shivam Soni</h1>
              <p className='aboutme'>Frontend Developer with highlevel of skills and knowledge in web designing and development.</p>
              <p className='aboutme'>producting quality work.</p>
              <Link smooth={true} spy={true} to="GetInTouch" >

                <div className="btn btn-warning hireBtn" style={dark ? { color: 'white' } : { color: "black" }}>Hire Me</div>
              </Link>
            </div>
          </div>
          <div className="goToAccounts">
            <a href="https://github.com/shivamsoni8813" target="_blank">
              <img src={Github} className="gitHub mx-3" alt="" />
            </a>
            <a href="https://www.instagram.com/shivamsoni8813/" rel="noreferrer" target={'_blank'}>

              <img src={Instagram} className="gitHub mx-3" alt="" />
            </a>
            <a href="https://www.linkedin.com/in/shivam-soni-6729b1220/" target={'_blank'} rel="noreferrer">

              <img src={Linkedin} className="gitHub mx-3" alt="" />
            </a>
          </div>
        </div>

        <div className="right">
          <div className="rightWrapper">
            <div className="mineimage">
              <div className="backcolor"></div>
              <img src={ProfileImg} className="myImage" alt="" />
            </div>
          </div>
        </div>
      </div>

    </div>

  )
}

export default Home
