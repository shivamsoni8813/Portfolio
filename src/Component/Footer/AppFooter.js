import React, { useContext } from 'react'
import './AppFooter.css'
import Github from '../images/github.png'
// import Pic from '../images/footer.webp'
import Instagram from '../images/instagram.png'
import Linkedin from '../images/linkedin.png'
import { colorContext } from '../Context/Context'

const AppFooter = () => {
  let colors =  useContext(colorContext)
  let dark = colors.state.darkMode
  return (
    <div>
      <div className="footer">
        <img src="https://img.freepik.com/free-vector/paper-style-smooth-background_52683-63751.jpg" alt="" className='footerimg' />
        <div className="content">

          <p className='footerText text-center' data-aos="fade-right">shek.soni.1212@gmail.com</p>
          <p className='footerContact' style={dark ? {color:"white"}:{color:"black"}}>My Contatc No. -: 9587763898</p>
          <div className="goToAccount" data-aos="fade-left">
            <a href="https://github.com/shivamsoni8813" target="_blank">
              <img src={Github} className="gitHub1 mx-2" alt="" />
            </a>
            <a href="https://www.instagram.com/shivamsoni8813/" rel="noreferrer" target={'_blank'}>

              <img src={Instagram} className="insta2 mx-2" alt="" />
            </a>
            <a href="https://www.linkedin.com/in/shivam-soni-6729b1220/" target={'_blank'} rel="noreferrer">

              <img src={Linkedin} className="linkedIn3 mx-2" alt="" />
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default AppFooter
