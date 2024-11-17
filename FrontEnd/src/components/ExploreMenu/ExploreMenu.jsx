import React from 'react';
import './ExploreMenu.css'; 
import { menu_list } from '../../assets/assets'; 

const ExploreMenu = ({category,setCategory}) => {

    return (
        <div className="explore-menu" id='explore-menu'>
            <h1>Discover Your Skin Type</h1>
            <p className="explore-menu-text">Select your skin type to unlock the perfect skincare routine for you</p>
            <div className="explore-menu-list">
                {menu_list.map((item, index) => (
                    <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)}key={index} className="explore-menu-list-item">
                        <img className={`circular-image ${category === item.menu_name ? "active" : ""}`}  src={item.menu_image} alt={item.menu_name} />
                        <p className="menu-item-name">{item.menu_name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ExploreMenu;

















