import React, { useContext } from 'react'
import { colorContext } from '../Context/Context'
import './Toggle.css'

const Toggle = () => {
  let colors = useContext(colorContext)
  let dark = colors.state.darkMode
  const handleClick =()=>{
    colors.dispatch({type:"toggle"})
  }
  return (
    <div>
      <div className="toggleImgae " onClick={()=>handleClick()}>
        <img src="https://cdn-icons-png.flaticon.com/512/831/831682.png" className='sunImage mx-1' alt="" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSllUN8iLQVWADsayoy2XlKz_3RGAgC0voOsA&usqp=CAU" className='moon' alt="" />
        <div className="togling" style={dark ? {left:"2.1rem"}: {right:"2.1rem"}}></div>
      </div>
    </div>
  )
}   

export default Toggle
