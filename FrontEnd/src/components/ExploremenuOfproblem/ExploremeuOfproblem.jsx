/*import React from "react";
import "./ExploremenuOfproblem.css";
import { menu_problem } from "../../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="menu_problem" id="menu_problem">
      <h1>Discover Your Problem</h1>
      <p className="explore-menu-text">
        Select your skin problem type to unlock the perfect treatment for you
      </p>
      <div className="explore-menu_problem">
        {menu_problem.map((item, index) => (
          <div
            onClick={() =>
              setCategory((prev) =>
                prev === item.menu_name ? "All" : item.menu_name
              )
            }
            key={index}
            className="explore-menu_problem-item"
          >
            <p className="menu-item-name">{item.menu_name}</p>
            <img
              className={`circular-image ${
                category === item.menu_name ? "active" : ""
              }`}
              src={item.menu_image}
              alt={item.menu_name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreMenu;*/

import React from "react";
import "./ExploremenuOfproblem.css";
import { menu_problem } from "../../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="menu_problem" id="menu_problem">

      <h1 className="menu-title">Discover Your problem Type</h1>
      <p className="menu-description">
        Select your problem type to unlock the perfect treatment routine for you.

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
