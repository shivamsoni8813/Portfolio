import React, { useContext } from 'react'
import './Services.css'
import Resume from '../images/front.pdf'
import SkillsRate from '../SkillsRating/SkillsRate'
import { colorContext } from '../Context/Context'

const Services = () => {

    let context = useContext(colorContext)
    let dark = context.state.darkMode
    console.log("service",dark)
    return (
        <div>
            <div className="sevices d-flex" id='Services'>

                <div className="left" style={{marginTop:"8rem"}}>
                    <div className="leftHeading" >
                        <h2 className='upperHeading'>My Awsome</h2>
                        <h1 className='nameHeading'>Services</h1>
                        <p className='aboutme'>Frontend Developer with highlevel of skills and knowledge in web designing and development.producting quality work</p>
                        <a href={Resume} download>

                        <div className="btn btn-warning hireBtn" style={dark ? {color:"white"}: {color:"black"}}>Download CV</div>
                        </a>

                    </div>
                </div>
                <div className="right">
                    <div className="cardWraper">


                        <div className="card webCard" data-aos="fade-left"  data-aos-offset="400"  data-aos-duration="1000" style={{width: "15rem"}}>
                            <img src="https://png.pngtree.com/element_our/sm/20180111/sm_5a57b98c83454.jpg" className="card-img-top" alt="..."/>
                                <div className="card-body" >
                                    <h5 className="card-title text-center"style={{color:"black"}}>Frontend Development</h5>
                                    <p className="card-text text-center"style={{color:"black"}}>HTML,CSS,Javascript,ReactJs,Redux,BootStrap,PrimeReact,AOS,Git,GitHub</p>
                                </div>
                        </div>
                        <div className="card webCard1" data-aos="fade-right"  data-aos-offset="400"  data-aos-duration="2000" style={{width: "15rem"}}>
                            <img src="https://png.pngtree.com/element_our/sm/20180111/sm_5a57b98c83454.jpg" className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title text-center"style={{color:"black"}}>Programing & DSA</h5>
                                    <p className="card-text text-center"style={{color:"black"}}>JavaScript</p>
                                </div>
                        </div>
                        <div className="card webCard3" data-aos="fade-left"  data-aos-offset="400"  data-aos-duration="1000" style={{width: "15rem"}}>
                            <img src="https://png.pngtree.com/element_our/sm/20180111/sm_5a57b98c83454.jpg" className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title text-center" style={{color:"black"}}>Web Designing</h5>
                                    <p className="card-text text-center" style={{color:"black"}}>Css, Css3, BootStrap, PrimeReact, FontAwesome And AOS. </p>
                                </div>
                        </div>



                    </div>

                </div>
            </div>

        </div>
    )
}

export default Services
