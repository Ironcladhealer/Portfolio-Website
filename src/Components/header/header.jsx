import React from 'react';
import { useState } from 'react';
import "./header.css";

const Header = () => {
    const [toogle, showMenu]=useState(false)
  return (
    <>
    <header className="header">
        <nav className="nav container">
        <a className="nav__logo" href="index.html">صائم رضا</a>

<div className={toogle ? "nav__menu show-menu" : "nav__menu"}>
    <ul className="nav__list">
        <li className="nav__item">
            <a className="nav__link active-link" href="#home">
                <i className="uil uil-estate nav__icon"></i> Home
            </a>    
        </li>
        <li className="nav__item">
            <a className="nav__link" href="#about">
                <i className="uil uil-user nav__icon"></i> About
            </a>    
        </li>
        <li className="nav__item">
            <a className="nav__link" href="#skills">
                <i className="uil uil-file-alt nav__icon"></i> Skills
            </a>    
        </li>
        <li className="nav__item">
            <a className="nav__link" href="#education">
            <i class="uil uil-graduation-cap nav__icon"></i>  Education  
            </a>    
        </li>       
        <li className="nav__item">
            <a className="nav__link" href="#contact">
                <i className="uil uil-message nav__icon"></i>  Contact  
            </a>    
        </li>             
    </ul>
<i className="uil uil-times nav__close" onClick={() => showMenu(!toogle)}></i> 
</div>
<div className="nav__toggle" onClick={() => showMenu(!toogle)}>
    <i className='uil uil-apps'></i>
</div>
        </nav>
    </header>
    </>
  )
}

export default Header