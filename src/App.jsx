import React from 'react'
import './App.css'
import Header from './Components/header/header'
import Home from './Components/home/home'
import About from './Components/about/about'
import Skills from './Components/skills/skills'
import Education from './Components/education/Education'
import Contact from './Components/contact/Contact'
import Footer from './Components/footer/footer'

function App() {

  return (
    <>
    <Header/>
    <main className='main'>
      <Home />
      <About />
      <Skills />
      <Education />
      <Contact />
    </main>
    <Footer />
    </>
      )
}

export default App
