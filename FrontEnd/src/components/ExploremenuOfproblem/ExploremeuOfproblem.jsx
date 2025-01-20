import React from "react";
import "./ExploremenuOfproblem.css";
import { menu_problem } from "../../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="menu_problem" id="menu_problem">
      <h1 className="menu-title">Discover Your problem Type</h1>
      <p className="menu-description">
        Select your problem type to unlock the perfect treatment routine for
        you.
      </p>
      <div className="horizontal-scroll-container">
        <div className="menu-circular-container">
          {menu_problem.map((item, index) => (
            <div
              key={index}
              className={`menu-item ${
                category === item.menu_name ? "active" : ""
              }`}
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
            >
              <img
                className={`menu-image ${
                  category === item.menu_name ? "active" : ""
                }`}
                src={item.menu_image}
                alt={item.menu_name}
              />
              <p className="menu-item-name">{item.menu_name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreMenu;
