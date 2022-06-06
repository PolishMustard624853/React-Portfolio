import React from 'react'
import './about.css'
import Neb from '../../../img/eagleNebula.jpg'
import Bub from '../../../img/bubbleNebula.jpg'

const About = () => {
  return (
    <div className='i'>
    <div className='a'>
        <div className='a-left'>
            <div className='a-card bg'>
              <img src={Bub} alt="" />
            </div>
            <div className='a-card'>
              <img src={Neb} alt="" className='i-img' />
            </div>
        </div>
        <div className='a-right'>
        <h1 className='a-title'>About Me</h1>

        <p className='a-sub'>
        I am a front end Web Developer UI/UX Designer using programs such as HTML, CSS, JavaScript &amp; React.

        </p>
        <p className='a-desc'>
        “I am enough of an artist to draw freely upon my imagination. Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.”
        <p>― Albert Einstein</p>
        </p>
        </div>
        </div>
    </div>
  )
}

export default About