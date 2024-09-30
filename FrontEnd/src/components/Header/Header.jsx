
import React from 'react';
import './Header.css';  // Import the CSS file for styles
import headerImage from '/Users/dode86/Desktop/skinWhisper_project/SkinWisper/FrontEnd/src/assets/header1.png';  // Import the image

const Header = () => {
    return (
        <header className="header" style={{ backgroundImage: `url(${headerImage})` }}>
            <div className="header-container">
                {/* Right Text Section */}
                <div className="header-text">
                    <h1>Discover Your Skin Type!</h1>
                    <p>Take Our Quick Test Now</p>
                    <button className="get-started-button">GET STARTED</button>
                </div>
            </div>
        </header>
    );
};

export default Header;
