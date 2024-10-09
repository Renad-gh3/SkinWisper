// TestHeader.js

// TestHeader.js
import React from 'react';
import './TestHeader.css';
import headerImage from '../../assets/problemHeader.png';

const TestHeader = () => {
  return (
    <header className="header" style={{ backgroundImage: `url(${headerImage})` }}>
      <div className="header-container">
        <div className="header-text">
          <h1>Uncover your skincare challenges!</h1>
          <p>Take Our Quick Test Now</p>
          <button className="get-started-button">GET STARTED</button>
        </div>
      </div>
    </header>
  );
};

export default TestHeader;





