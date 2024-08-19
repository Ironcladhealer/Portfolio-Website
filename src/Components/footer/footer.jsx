import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <>
    <footer className='footer'>
        <div className='foooter__container'>
            <h1 className='footer__title'>صائم رضا</h1>

            <ul className='footer__list'>
                <li>
                    <a href='#about' className='footer__link'>About</a>
                </li>

                <li>
                    <a href='#skills' className='footer__link'>Skills</a>
                </li>

                <li>
                    <a href='#education' className='footer__link'>Education</a>
                </li>
            </ul>

            <div className='footer__social'>
                <a href='https://medium.com/@Saim.R' className='footer__social-icon' target={"_blank"}>
                    <i class='bx bxl-medium' ></i>
                </a>
                <a href='https://www.linkedin.com/in/saim-raza-933a74267/' className='footer__social-icon' target={"_blank"}>
                    <i class='bx bxl-linkedin' ></i>
                </a>
                <a href='https://www.instagram.com/isaim.r/' className='footer__social-icon' target={"_blank"}>
                    <i className='bx bxl-instagram'></i>
                </a>
            </div>
                    </div>
    </footer>
    </>
  )
}

export default Footer