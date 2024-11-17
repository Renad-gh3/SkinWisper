
import React from 'react';
import './TestHeader.css';  // Import the CSS file for styles
import headerImage from "../../assets/problemHeader.png";  // Make sure this is the correct path to your image

const TestHeader = () => {
    return (
        <header className="test-header" style={{ backgroundImage: `url(${headerImage})` }}>
            <div className="test-header-overlay">
                <div className="test-header-content">
                    <h1>Uncover Your Skincare Challenges!</h1>
                    <p>Take Our Quick Test Now</p>
                    <button className="get-started-button">GET STARTED</button>
                </div>
            </div>
        </header>
    );
};

export default TestHeader;





