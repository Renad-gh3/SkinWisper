import React from 'react';
import './ContactUs.css'; 
import InstagramIcon from "../../assets/instagram.png";
import EmailIcon from "../../assets/email.png";

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <h1 className="contact-us-title">Contact Us</h1>
      <p className="contact-us-description">
        We would love to hear from you! Please reach out to us through our social media.
      </p>
      <div className="about-us-container">
        <h2 className="about-us-title">About Us</h2>
        <p className="about-us-description">
          SkinWhisper is an innovative skincare website that assists users in finding personalized skincare routines and suitable products based on their skin type and concerns.
        </p>
      </div>
      <div className="social-media-icons">
          <div className="social-media-item">
              <img src={InstagramIcon} alt="Instagram" className="social-icon" />
              <span className="social-media-name">Instagram</span>
          </div>
          <div className="social-media-item">
              <img src={EmailIcon} alt="Email" className="social-icon" />
              <span className="social-media-name">Email</span>
          </div>
      </div>
      <div className="footer-links">
        <span className="footer-link">Privacy Policy</span>
        <span className="footer-link">Terms of Use</span>
      </div>
    </div>
  );
};

export default ContactUs;
