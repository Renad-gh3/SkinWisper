import React from 'react';
import HomePage from "./components/pages/HomePage.jsx";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FullSkinType from "./components/pages/fullskintype.jsx";
import ProblemPage from './components/pages/problemPage.jsx';
import Navbar from './components/Navbar/Navbar.jsx';

const App = () => {
  return (
    <Router>
      <div className='app'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/fullskintype' element={<FullSkinType />} />
          <Route path='/problemPage' element={<ProblemPage />} /> {/* Corrected line */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;





