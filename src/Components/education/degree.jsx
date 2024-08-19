import React from 'react'

const Degree = () => {
  return (
    <>
    <div className="education__info grid">
        <div className="education__box">
        <i className="uil uil-university"></i>
            <h3 className="education__title">NUST</h3>
            <span className="education__subtitle">BE Mechatronics Engineering</span>
        </div>

        <div className="education__box">
        <i className="uil uil-brackets-curly"></i>
            <h3 className="education__title">Code with Mosh</h3>
            <span className="education__subtitle">Frontend Development</span>
        </div>

        <div className="education__box">
        <i className="uil uil-youtube"></i>
            <h3 className="education__title">Free Code Camp</h3>
            <span className="education__subtitle">Backend Development</span>
        </div>

    </div>
    </>
  )
}

export default Degree