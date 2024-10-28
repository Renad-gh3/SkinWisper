import React from 'react';
import HomePage from "./components/pages/HomePage.jsx";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FullSkinType from "./components/pages/fullskintype.jsx";
import ProblemPage from './components/pages/problemPage.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import prodect from './components/pages/product.jsx';
import ExploreMenuItem from './components/pages/ExploreMenuItem.jsx';
import Display from './components/pages/Display.jsx';
import StoreContextProvider from './components/pages/StoreContext.jsx';
const App = () => {
  return (
    <StoreContextProvider>
    <Router>
      <div className='app'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/product' element={<Display/>} />
          <Route path='/fullskintype' element={<FullSkinType />} />
          <Route path='/problemPage' element={<ProblemPage />} /> {/* Corrected line */}
        </Routes>
      </div>
    </Router>
     </StoreContextProvider>
  );
}

export default App;