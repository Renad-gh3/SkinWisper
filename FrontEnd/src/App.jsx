import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx';
import HomePage from "./components/pages/HomePage.jsx";
import FullSkinType from "./components/pages/fullskintype.jsx";
import ProblemPage from './components/pages/problemPage.jsx';
import Footer from './components/Footer/Footer.jsx';
import './App.css';
import ContactUs from './components/pages/ContactUs.jsx'; 
import LoginPopUp from './components/LoginPopUp/LoginPopUp.jsx';
import Display from './components/pages/Display.jsx'; // Import Display correctly
import StoreContextProvider from './components/pages/StoreContext.jsx';
//import prodect from './components/pages/product.jsx';
//import ExploreMenuItem from './components/pages/ExploreMenuItem.jsx';
import Cart from './components/pages/Cart.jsx'
import PlaceOrder from './components/pages/PlaceOrder.jsx';
const App = () => {
  const [activeSection, setActiveSection] = useState('home'); //not sure who add this, maybe me (samar)

  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    const scrollPosition = window.scrollY + window.innerHeight / 2;

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

  
  const [showLogin, setShowLogin] = useState(false);

  return (
    <StoreContextProvider> 
      <Router>
        {showLogin && <LoginPopUp setShowLogin={setShowLogin} />}
        <div className='app'>
          <Navbar setShowLogin={setShowLogin} activeSection={activeSection} />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/fullskintype' element={<FullSkinType />} />
            <Route path='/product' element={<Display />} />
            <Route path='/problemPage' element={<ProblemPage />} /> 
            <Route path='/contact-us' element={<ContactUs />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/order' element={<PlaceOrder />} />
         
            
          </Routes>
          <Footer id="footer" /> 
        </div>
      </Router>
    </StoreContextProvider>
  );
};

export default App;

