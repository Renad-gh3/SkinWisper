import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx"; // Import Navbar
import HomePage from "./components/pages/HomePage.jsx";
import FullSkinType from "./components/pages/fullskintype.jsx";
import ProblemPage from "./components/pages/problemPage.jsx";
import Footer from "./components/Footer/Footer.jsx"; // Import Footer
//import LoginPopUp from './components/LoginPopUp/LoginPopUp.jsx';
import "./App.css";
//import ShopPage from './pages/ShopPage'; here when dana finishes making The shopping page
//import SkinTestPage from './pages/SkinTestPage'; Also here when in stage 3
import ContactUs from "./components/pages/ContactUs.jsx";
import LoginPopUp from "./components/LoginPopUp/LoginPopUp.jsx";

const App = () => {
  const [activeSection, setActiveSection] = useState("home");

  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    const scrollPosition = window.scrollY + window.innerHeight / 2; // Middle of the screen

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        setActiveSection(section.id);
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const [showLogin, setShowLogin] = useState("false");

  return (
    <Router>
      {showLogin ? <LoginPopUp setShowLogin={setShowLogin} /> : <></>}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} activeSection={activeSection} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/fullskintype" element={<FullSkinType />} />
          <Route path="/problemPage" element={<ProblemPage />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
        <Footer id="footer" />
      </div>
    </Router>
  );
};

export default App;
