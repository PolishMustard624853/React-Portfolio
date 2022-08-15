import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
import Certification from '../../../img/certification.jpg'

const Experience = () => {
  return (
    <section id='experience'>
      <h1>My Experience</h1>
          <section>
            <div className='e-card bg'>
                <img src={Certification} alt="" className='e-img' />
            </div>
          </section>
      
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h2>HTML</h2>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h2>CSS</h2>

              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h2>JavaScript</h2>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h2>Bootstrap</h2>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h2>React</h2>
              </div>
            </article>
          </div>
        </div>
        {/* END OF FRONTEND */}
        
        <div className="experience__backend">
        <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h2>Node JS</h2>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h2>MongoDB</h2>

              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h2>MySQL</h2>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience