import React from 'react'
import "./Education.css"
import Degree from './degree'

const Education = () => {
  return (
    <>
    <section className='education` section' id='education'>
    <h2 className="section__title">Education</h2>
    <span className="section__subtitle">My academic background</span>
        <div className="education__container container grid">
            <div className="education__data">
                <Degree/>
                <p className="education__description">
                I have completed web development courses through CodewithMosh and FreeCodeCamp, and I am currently pursuing a Bachelor's degree in Mechatronics Engineering.
                </p>
            </div>
        </div>
    </section>
    </>
  )
}

export default Education