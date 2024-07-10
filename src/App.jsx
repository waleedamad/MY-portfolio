import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import MainPage from "./components/mainPage/MainPage";
import AboutMe from "./components/AboutMe/AboutMe";
import MySkills from "./components/skills/MySkills";
import MyProjects from "./components/projects/MyProjects";
import ContactUs from "./components/contactPage/ContactUs";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/skills" element={<MySkills />} />
        <Route path="/projects" element={<MyProjects />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
