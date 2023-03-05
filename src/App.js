import React, { useContext } from 'react'
import { colorContext } from './Component/Context/Context'
import AppFooter from './Component/Footer/AppFooter'
import GetInTouch from './Component/GetInTouch/GetInTouch'
import Home from './Component/Home/Home'
import Navbar from './Component/Navbar/Navbar'
import Projects from './Component/Projects/Projects'
import Services from './Component/Services/Services'
import SkillsRate from './Component/SkillsRating/SkillsRate'
const App = () => {
  let colors = useContext(colorContext);
  let dark = colors.state.darkMode;
  return (
    <div className='App' style={{
      background: dark ?"black":"",
      color : dark ? "white": "",
    }}>
      <Navbar/>
      <Home/>
      <Services/>
      <SkillsRate/>
      <Projects/>
      <GetInTouch/>
      <AppFooter/>
    </div>
  )
}

export default App
