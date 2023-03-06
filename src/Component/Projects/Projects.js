import React, { useContext } from 'react'
import './Projects.css'
import {colorContext} from '../Context/Context'
const Projects = () => {
    let colors = useContext(colorContext)
    let dark = colors.state.darkMode
    return (
        <div>
            <div className="projectContainer" id='Projects'>
                <div className="projectWrapper" data-aos="fade-up" data-aos-offset="400">

                    <h1 className='text-center projectHead'>My Projects</h1>
                    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="https://media.istockphoto.com/id/1259086543/photo/crm-customer-relationship-management-for-business-sales-marketing-system-concept.jpg?s=612x612&w=0&k=20&c=bUpNVD1iOkCFk7mgCmL33upBEKy5yJoWUCJRwMnbPuk=" className="cimg d-block w-50" alt="..." />
                                
                                <div className="projectInfo">
                                    <h5 className= {dark ? `text-white`:"text-black"}>Customer Relationship Managment App</h5>
                                    <p className= {dark ? `text-white`:"text-black"}>HTML,CSS,JavaScript,ReactJs,BootStrap And PrimeReact...</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWN8ZW58MHx8MHx8&w=1000&q=80" className="cimg d-block w-50" alt="..." />
                                
                                <div className="projectInfo">
                                    <h5 className= {dark ? `text-white`:"text-black"}>Music App</h5>
                                    <p className= {dark ? `text-white`:"text-black"}>HTML,CSS,JavaScript And FontAwesome...</p>

                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src="https://www.americanactionforum.org/wp-content/uploads/2022/06/Crypto-Tracker-Preview-v2.png" className=" cimg d-block w-50" alt="..." />
                               
                                <div className="projectInfo">
                                    <h5 className= {dark ? `text-white`:"text-black"}>Crypto Tracker</h5>
                                    <p className= {dark ? `text-white`:"text-black"}>HTML,CSS,JavaScript,Bootstrap,ReactJs,ChartJs,Aos...</p>

                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src="https://thumbs.dreamstime.com/b/e-commerce-1949630.jpg" className="cimg d-block w-50" alt="..." />                              
                                <div className="projectInfo">
                                    <h5 className= {dark ? `text-white`:"text-black"}>E-Commerce</h5>
                                    <p className= {dark ? `text-white`:"text-black"}>HTML,CSS,JavaScript,Bootstrap,FontAwesome,ReactJs...</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src="https://media.istockphoto.com/id/1264074047/vector/breaking-news-background.jpg?s=612x612&w=0&k=20&c=C5BryvaM-X1IiQtdyswR3HskyIZCqvNRojrCRLoTN0Q=" className="cimg d-block w-50" alt="..." />
                            
                                <div className="projectInfo">
                                    <h5 className={dark ? `text-white`:"text-black"}>News App</h5>
                                    <p className={dark ? `text-white`:"text-black"}>HTML,CSS,JavaScript,Bootstrap,FontAwesome,ReactJs...</p>

                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src="https://images.unsplash.com/photo-1611262588024-d12430b98920?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5zdGFncmFtJTIwbG9nb3xlbnwwfHwwfHw%3D&w=1000&q=80" className="cimg d-block w-50" alt="..." />
                            
                                <div className="projectInfo">
                                    <h5 className={dark ? `text-white`:"text-black"}>Instagram App</h5>
                                    <p className={dark ? `text-white`:"text-black"}>HTML,CSS,JavaScript,Bootstrap,FontAwesome,ReactJs...</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                            
                                <img src="https://wallpaperaccess.com/full/1684793.png" className="cimg d-block w-50" alt="..." />
                                <div className="projectInfo">
                                    <h5 className={dark ? `text-white`:"text-black"}>Google Search App</h5>
                                    <p className={dark ? `text-white`:"text-black"}>HTML,CSS,JavaScript,Bootstrap,FontAwesome,ReactJs...</p>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Projects
