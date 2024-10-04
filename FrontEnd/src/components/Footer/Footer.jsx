import React from 'react';
import './Footer.css';  // Import the CSS file for the footer styles
import InstagramIcon from "../../assets/instagram.png"
import EmailIcon from "../../assets/email.png";  // Import Email icon
import MadeInSaudiIcon from "../../assets/saudi.png";  // Import "Made in Saudi" icon

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* About Us Section */}
                <div className="footer-about">
                    <h4>About Us</h4>
                    <p>SkinWhisper is an innovative skincare website that assists users in finding personalized skincare routines and suitable products based on their skin type and concerns.</p>
                    
                    <div className="footer-links">
                        <p>Privacy Policy</p>
                        <p>Terms of Use</p>
                    </div>
                </div>

                {/* Contact Us Section with Saudi Icon */}
                <div className="footer-center">
                    <h4>Contact Us</h4>
                    <div className="footer-social">
                        <img src={InstagramIcon} alt="Instagram" className="social-icon" />
                        <img src={EmailIcon} alt="Email" className="social-icon" />
                    </div>
                    {/* Made in Saudi Icon below Contact Us */}
                    <div className="footer-made-in-saudi">
                        <img src={MadeInSaudiIcon} alt="Made in Saudi" className="made-in-saudi-icon" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
