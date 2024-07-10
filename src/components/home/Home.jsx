import React from 'react'
import Navbar from '../navbar/Navbar'
import MainPage from '../mainPage/MainPage'
import AboutMe from '../AboutMe/AboutMe'
import MySkills from '../skills/MySkills'
import MyProjects from '../projects/MyProjects'
import ContactUs from '../contactPage/ContactUs'
import Footer from '../footer/Footer'

function Home() {
  return (
    <>
    
    <MainPage/>
    <AboutMe/>
    <MySkills/>
    <MyProjects/>
    <ContactUs/>
    
    </>
  )
}

export default Home