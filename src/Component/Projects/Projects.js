import React from 'react'
import './Projects.css'
const Projects = () => {
    return (
        <div>
            <div className="projectContainer" id='Projects'>
                <div className="projectWrapper" data-aos="fade-up">

                    <h1 className='text-center projectHead'>My Projects</h1>
                    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="https://media.istockphoto.com/id/1259086543/photo/crm-customer-relationship-management-for-business-sales-marketing-system-concept.jpg?s=612x612&w=0&k=20&c=bUpNVD1iOkCFk7mgCmL33upBEKy5yJoWUCJRwMnbPuk=" className="cimg d-block w-50" alt="..." />
                                
                                <div className="projectInfo">
                                    <h5>Customer Relationship Managment App</h5>
                                    <p>HTML,CSS,JavaScript,ReactJs,BootStrap And PrimeReact...</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWN8ZW58MHx8MHx8&w=1000&q=80" className="cimg d-block w-50" alt="..." />
                                
                                <div className="projectInfo">
                                    <h5 className='musichead'>Music App</h5>
                                    <p>HTML,CSS,JavaScript And FontAwesome...</p>

                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src="https://www.americanactionforum.org/wp-content/uploads/2022/06/Crypto-Tracker-Preview-v2.png" className=" cimg d-block w-50" alt="..." />
                               
                                <div className="projectInfo">
                                    <h5>Crypto Tracker</h5>
                                    <p>HTML,CSS,JavaScript,Bootstrap,ReactJs,ChartJs,Aos...</p>

                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src="https://thumbs.dreamstime.com/b/e-commerce-1949630.jpg" className="cimg d-block w-50" alt="..." />                              
                                <div className="projectInfo">
                                    <h5>E-Commerce</h5>
                                    <p>HTML,CSS,JavaScript,Bootstrap,FontAwesome,ReactJs...</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src="https://media.istockphoto.com/id/1264074047/vector/breaking-news-background.jpg?s=612x612&w=0&k=20&c=C5BryvaM-X1IiQtdyswR3HskyIZCqvNRojrCRLoTN0Q=" className="cimg d-block w-50" alt="..." />
                            
                                <div className="projectInfo">
                                    <h5 className='text-black'>News App</h5>
                                    <p className='text-black'>HTML,CSS,JavaScript,Bootstrap,FontAwesome,ReactJs...</p>

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
