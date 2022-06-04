import React from 'react'
import './intro.css'
import Me from '../../img/me.jpg'

const Intro = () => {
  return (
    <div className='i'>
        <div className='i-left'>
          <div className='i-left-wrapper'>
            <h2 className='i-intro'>Welcome! My name is </h2>
            <h1 className='i-name'>Connor Semb</h1>
            <div className='i-title'>
              <div className='i-title-wrapper'>
                <div className='i-title-item'>Front-End Web Developer</div>
                <div className='i-title-item'>UI/UX Designer</div>
                <div className='i-title-item'>HTML/CSS</div>
                <div className='i-title-item'>React Designer</div>
                <div className='i-title-item'>JavaScript Manipulator</div>
              </div>
            </div>
            <div className="i-desc">
              I am a front end Web Developer UI/UX Designer using programs such as HTML/CSS, JavaScript &amp; React.
            </div>
          </div>
        </div>
        <div className='i-right'>
          <div className="--bg"></div>
          <img src={Me} alt='' className='i-img' />
        </div>
    </div>
  )
}

export default Intro