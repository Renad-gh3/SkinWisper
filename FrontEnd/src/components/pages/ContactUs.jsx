import React from 'react';
import backgroundImage from '/src/assets/about.png'; 
import emailIcon from '/src/assets/email.png'; 
import locationIcon from '/src/assets/location.png'; 
import instagramIcon from '/src/assets/instagram.png'; 
import linkedinIcon from '/src/assets/linkedin.png'; 
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div>
      {/* About Us Section */}
      <header className="about-header" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="about-overlay">
          <h1 className="about-title">About Us</h1>
          <p className="about-description">
            SkinWhisper is an innovative skincare website that assists users in finding personalized skincare routines and suitable products based on their skin type and concerns. We are dedicated to providing high-quality, effective solutions tailored to meet the unique needs of each individual.
          </p>
        </div>
      </header>

      {/* Contact Us Section */}
      <section className="contact-us-section">
        <h2 className="contact-title">Contact Us</h2>
        <div className="contact-cards">
          <div className="contact-card">
            <div className="contact-bubble">
              <img src={emailIcon} alt="Email Icon" className="contact-icon" />
            </div>
            <p className="contact-label">Email</p>
            <p className="contact-detail">skinWhisper@gmail.com</p>
          </div>
          <div className="contact-card">
            <div className="contact-bubble">
              <img src={locationIcon} alt="Location Icon" className="contact-icon" />
            </div>
            <p className="contact-label">Location</p>
            <p className="contact-detail">Jeddah, Saudi Arabia</p>
          </div>
          <div className="contact-card">
            <div className="contact-bubble">
              <img src={instagramIcon} alt="Instagram Icon" className="contact-icon" />
            </div>
            <p className="contact-label">Instagram</p>
            <p className="contact-detail">@SkinWhisper</p>
          </div>
        </div>
      </section>

      <section className="team-section">
  <h2 className="team-title">Our Team</h2>
  <div className="team-cards">
    <div className="team-card">
      <h3 className="team-name">Dana Almoraie</h3>
      <a
        href="https://www.linkedin.com/in/dana-almoraie-775277247"
        target="_blank"
        rel="noopener noreferrer"
        className="team-link"
      >
        LinkedIn Profile
      </a>
    </div>
    <div className="team-card">
      <h3 className="team-name">Renad Alghamdi</h3>
      <a
        href="https://www.linkedin.com/posts/renad-alghamdi-621767249"
        target="_blank"
        rel="noopener noreferrer"
        className="team-link"
      >
        LinkedIn Profile
      </a>
    </div>
    <div className="team-card">
      <h3 className="team-name">Jood Falatah</h3>
      <a
        href="https://www.linkedin.com/in/jood-falatah-88623a276"
        target="_blank"
        rel="noopener noreferrer"
        className="team-link"
      >
        LinkedIn Profile
      </a>
    </div>
    <div className="team-card">
      <h3 className="team-name">Sadeen Alamoudi</h3>
      <a
        href="https://www.linkedin.com/in/sadeen-alamoudi-1904072b4/"
        target="_blank"
        rel="noopener noreferrer"
        className="team-link"
      >
        LinkedIn Profile
      </a>
    </div>
    <div className="team-card">
      <h3 className="team-name">Samar Albokhari</h3>
      <a
        href="https://www.linkedin.com/in/samar-albukhari-715871338?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
        target="_blank"
        rel="noopener noreferrer"
        className="team-link"
      >
        LinkedIn Profile
      </a>
    </div>
    <div className="team-card">
      <h3 className="team-name">Rola Allahibi</h3>
      <a
        href="https://www.linkedin.com/in/rola-allahibi-14a397339/"
        target="_blank"
        rel="noopener noreferrer"
        className="team-link"
      >
        LinkedIn Profile
      </a>
    </div>
  </div>
</section>

    </div>
  );
};

export default ContactUs;
