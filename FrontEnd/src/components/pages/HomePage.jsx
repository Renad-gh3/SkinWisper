
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const images = [
  {
    src: 'src/assets/h1.png',
    alt: 'Glow Like Never Before',
    link: '/fullskintype',
    description: 'Discover the skincare routine tailored just for you!',
  },
  {
    src: 'src/assets/header3.png',
    alt: 'Perfect Skin Match',
    link: '/product',
    description: 'Discover products that work for your skin.',
  },
  {
    src: 'src/assets/header2.png',
    alt: 'Say Goodbye to Dryness',
    link: '/problemPage',
    description: 'Quench your skin’s thirst with hydrating solutions.',
  },
];

const serviceImages = [
  {
    src: 'src/assets/problemS.jpg',
    titleAbove: 'Problem Type',
    link: '/problemPage',
  },
  {
    src: 'src/assets/productS.jpg',
    titleAbove: 'Our Products',
    link: '/product',
  },
  {
    src: 'src/assets/skincareS.jpg',
    titleAbove: 'Skin Type',
    link: '/fullskintype',
  },
];

const specialFeatures = [
  {
    icon: 'src/assets/quality.png',
    title: 'High Quality',
    description: 'We provide the best quality tailored to your needs.',
  },
  {
    icon: 'src/assets/money.png',
    title: 'Affordable',
    description: 'Our products are priced competitively.',
  },
  {
    icon: 'src/assets/cream.png',
    title: 'Product Recommendations',
    description: 'Our formulas use natural products that are safe and effective.',
  },
];

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000); // Duration between slides
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleImageClick = () => {
    navigate(images[currentIndex].link);
  };

  return (
    <div className="homepage-container">
      <div className="carousel">
        <button className="carousel-button left" onClick={prevSlide}>
          &lt;
        </button>
        <div className="carousel-image-wrapper" onClick={handleImageClick}>
          <img
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            className="carousel-image"
          />
          <div className="carousel-text">
            <h2>{images[currentIndex].alt}</h2>
            <p>{images[currentIndex].description}</p>
            <button onClick={handleImageClick} className="learn-more-button">
              Learn More
            </button>
          </div>
        </div>
        <button className="carousel-button right" onClick={nextSlide}>
          &gt;
        </button>
      </div>
      <div className="carousel-indicators">
  {images.map((_, index) => (
    <span
      key={index}
      className={`indicator ${currentIndex === index ? 'active' : ''}`}
      onClick={() => setCurrentIndex(index)}
    ></span>
  ))}
</div>


      <h2 className="services-title">Discover Our Services</h2>

      <div className="our-services">
        {serviceImages.map((service, index) => (
          <div key={index} className="service-card" onClick={() => navigate(service.link)}>
            <div className="service-title-above">{service.titleAbove}</div>
            <img src={service.src} alt={service.titleAbove} className="service-image" />
          </div>
        ))}
      </div>

      <div className="special-section">
        <h2>What's Special About SkinWhisper</h2>
        <div className="special-features">
          {specialFeatures.map((feature, index) => (
            <div key={index} className="feature-card">
              <img src={feature.icon} alt={feature.title} className="feature-icon" />
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
