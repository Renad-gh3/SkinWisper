
/*import React from 'react';
import './Header.css';  // Import the CSS file for styles
import headerImage from "../../assets/header1.png";  // Import the image

const Header = () => {
    return (
        <header className="header" style={{ backgroundImage: `url(${headerImage})` }}>
            <div className="header-container">
                {}
                <div className="header-text">
                    <h1>Discover Your Skin Type!</h1>
                    <p>Take Our Quick Test Now</p>
                    <button className="get-started-button">GET STARTED</button>
                </div>
            </div>
        </header>
    );
};

export default Header;*/
import React from 'react';
import './Header.css';  // Import the CSS file for styles
import headerImage from "../../assets/headerSkin.png";  // Ensure this is the correct path to the image

const Header = () => {
    return (
        <header className="header" style={{ backgroundImage: `url(${headerImage})` }}>
            <div className="header-overlay">
                <div className="header-content">
                    <h1>Discover Your Skin Type!</h1>
                    <p>Take Our Quick Test Now</p>
                    <button className="get-started-button">GET STARTED</button>
                </div>
            </div>
        </header>
    );
};

export default Header;
