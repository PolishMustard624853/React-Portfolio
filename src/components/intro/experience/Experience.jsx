import React from 'react'
import './experience.css'
import Certification from '../../../img/certification.jpg'
import Js from '../../../assets/javascript.svg'
import Ri from '../../../assets/Ri.png'
import Html from '../../../assets/html.png'
import Node from '../../../assets/node.svg'
import Mongo from '../../../assets/mongo.png'
import mySql from '../../../assets/mysql.png'
import Css from '../../../assets/css.png'
import Bs from '../../../assets/bootstrap.png'

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
          <h3 icon="fa-regular fa-bracket-curly">Frontend Development</h3>
                  <div className="experience__content">
            <article className='experience__details'>
              <img src={Html} className='experience__details-icon' />
              <div>
                <h2>HTML</h2>
              </div>
            </article>
            <article className='experience__details'>
            <img src={Css} className='experience__details-icon' />
              <div>
                <h2>CSS</h2>

              </div>
            </article>
            <article className='experience__details'>
            <img src={Js} className='experience__details-icon' />
              <div>
                <h2>JavaScript</h2>
              </div>
            </article>
            <article className='experience__details'>
            <img src={Bs} className='experience__details-icon' />
              <div>
                <h2>Bootstrap</h2>
              </div>
            </article>
            <article className='experience__details'>
              <img src={Ri} className='experience__details-icon' />
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
            <img src={Node} className='experience__details-icon' />
              <div>
                <h2>Node.Js</h2>
              </div>
            </article>
            <article className='experience__details'>
            <img src={Mongo} className='experience__details-icon' />
              <div>
                <h2>MongoDB</h2>

              </div>
            </article>
            <article className='experience__details'>
            <img src={mySql} className='experience__details-icon' />
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