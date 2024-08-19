import React from 'react'
import "./skills.css"
import WebDev from './webDev'
import Robotics from './Robotics'

const Skills = () => {
  return (
    <>
    <section className='skills section' id='skills'>
    <h2 className="section__title">Skills</h2>
    <span className="section__subtitle">My technical level</span>

    <div className="skills__container container grid">
        <WebDev/>
        <Robotics/>
    </div>
    </section>
    </>
  )
}

export default Skills