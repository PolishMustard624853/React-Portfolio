import React from 'react'
import './intro.css'
import Me from '../../img/me.jpg'


const Intro = () => {
  return (
    <section id='intro'>
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
                <div className='i-title-item'>React</div>
                <div className='i-title-item'>JavaScript</div>
              </div>
            </div>

            <br />
            <p className='i-desc'>
            “Two things are infinite: the universe and human stupidity; 
            and I'm not sure about the universe.” ― Albert Einstein
            </p>
          </div>
        </div>
        <div className='i-right'>
          <div className='i-bg'>
          </div>
          <img src={Me} alt='' className='i-img' />
        </div>
    </div>
    </section>
  )
}

export default Intro