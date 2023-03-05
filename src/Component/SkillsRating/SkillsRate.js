import React from 'react'
import CircularProgressBar from '../Utiles/CircularProgressBar';

import './SkillRate.css'
const SkillsRate = () => {
    const percentage = 66;
    return (
        <div>
            <div className="skill">
                    <h1 className='text-center py-3'>MY Skills</h1>
                <div className="skillWrapper d-flex" data-aos="fade-left">
                    <div className="bar text-center" >
                    <CircularProgressBar lang1={75} />
                    <span className='barClass text-danger mx-3'>HTML</span>
                    </div>

                    <div className="bar">
                    <CircularProgressBar lang2={75}/>
                    <span className='barClass text-primary mx-4'>CSS</span>
                    </div>

                    <div className="bar">
                    <CircularProgressBar lang3={65}/>
                    <span className='barClass text-success'>JavaScript</span>
                    </div>

                    <div className="bar">
                    <CircularProgressBar lang4={75}/>
                    <span className='barClass text-black mx-2'>ReactJs</span>
                    </div>

                    <div className="bar">
                    <CircularProgressBar lang5={60}/>
                    <span className='barClass mx-3'>Redux</span>
                    </div>

                  
                </div>
            </div>
        </div>
    )
}

export default SkillsRate
