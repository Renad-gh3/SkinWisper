import React from 'react'
import './ExploreMenuItem.css';
import { skincareMenu } from '../../assets/assets';

const ExploreMenuItem = ({ category, setCategory }) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Discover Our Skincare Collection</h1>
      <p className='explore-menu-text'>
        Choose from a luxurious selection of skincare products, crafted to meet your skin
         unique needs for lasting beauty and radiant glow!
      </p>

      <div className="explore-menu-list">
        {skincareMenu.map((item, index) => (
          <div
            onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)}
            key={index}
            className="explore-menu-list-item"
          >
            <p className="menu-item-name">{item.menu_name}</p>
            <img
              className={`circular-image ${category === item.menu_name ? "active" : ""}`} src={item.menu_image} alt={item.menu_name}
            />
          </div>
        ))}

      </div>
    </div>
  );
};

export default ExploreMenuItem;