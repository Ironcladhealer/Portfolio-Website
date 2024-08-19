import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./contact.css"

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_xiyaezc', 'template_osi6obh', form.current, {
          publicKey: 'WgmAfkM3Y6Ov2MuEA',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };

  return (
    <>
    <section className="contact section" id="contact">
    <h2 className="section__title">Get in Touch</h2>
    <span className="section__subtitle">Contact me</span>

    <div className="contact__container container grid">
        <div className="contact__contect">
            <h3 className="contact__title">Talk to me</h3>
            <div className="contact__info">
                <div className="contact__card">
                    <i className='bx bx-mail-send contact__card-icon'></i>

                    <h3 className="contact__card-title">Email</h3>
                    <span className="contact__card-data">saimrak786@gmail.com</span>

                    <a href='mailto:saimrak786@gmail.com' target={"_blank"} className='contact__button'>Write me {" "}
                        <i className='bx bx-right-arrow-alt contact__button-icon'></i>
                    </a>
                </div>

                <div className="contact__card">
                    <i className='bx bxl-whatsapp contact__card-icon'></i>

                    <h3 className="contact__card-title">WhatsApp</h3>
                    <span className="contact__card-data">+92(313)4594656</span>

                    <a href='https://wa.me/923134594656' target={"_blank"} className='contact__button'>Write me {" "}
                        <i className='bx bx-right-arrow-alt contact__button-icon'></i>
                    </a>
                </div>

                <div className="contact__card">
                    <i className='bx bxl-instagram contact__card-icon'></i>

                    <h3 className="contact__card-title">Instagram</h3>
                    <span className="contact__card-data">isaim.r</span>

                    <a href='https://www.instagram.com/isaim.r' target={"_blank"} className='contact__button'>Write me {" "}
                        <i className='bx bx-right-arrow-alt contact__button-icon'></i>
                    </a>
                </div>
            </div>
        </div>

        <div className="contact__contect">
            <h3 className="contact__title">Write me your project</h3>
            <form className='contact__form' ref={form} onSubmit={sendEmail}>
                <div className='contact__form-div'>
                    <label className='contact__form-tag'>Name</label>
                    <input className='contact__form-input' type='text' name='name' placeholder='Insert your name'/>
                </div>

                <div className='contact__form-div'>
                    <label className='contact__form-tag'>Mail</label>
                    <input className='contact__form-input' type='text' name='mail' placeholder='Insert your mail'/>
                </div>

                <div className='contact__form-div contact__form-area'>
                    <label className='contact__form-tag'>Project</label>
                    <textarea rows="10" cols="30" name='project' className='contact__form-input' placeholder='Write your project'/>
                </div>

                <button className='button button--flex'>
            Send message
            <i class="uil uil-message"></i>
        </button>
            </form>
        </div>
    </div>
    </section>
    </>
  )
}

export default Contact