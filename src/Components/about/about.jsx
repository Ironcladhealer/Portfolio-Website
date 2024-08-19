import React from "react";
import "./about.css";
import AboutImg from "../../assets/Untitled-design.png";
import CV from "../../assets/Robotics-CV.pdf"
import Info from "./info";


const About = () => {
    return(
        <>
        <section className="about__section" id="about">
            <h2 className="section__title">About</h2>
            <span className="section__subtitle">My introduction</span>
            
            <div className="about__container container grid">
                <img src={AboutImg} alt="" className="about__img"/>
            
                <div className="about__data">
                <Info />
                    <p className="about__description">I am a full-stack web developer and robotics engineer with experience in web and robotics software and technologies, passionate about AI, automation, and innovative solutions.</p>
                    <a download="" href={CV} className="button button--flex">Download CV!
                    </a>
                </div>
            </div>
        </section>
        </>
    )
}

export default About