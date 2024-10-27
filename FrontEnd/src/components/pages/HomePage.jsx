import React from 'react'
import './Home.css';
import Box1 from "../../assets/Box1.png";
import Box2 from "../../assets/Box2.png";
import Box3 from "../../assets/Box3.png";
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="homepage-container">
      <section className="quick-select">
        <div className="box-container">
          <div className="box">
            <Link to="/fullskintype">
              <img src={Box1} width="100%" height="80%" alt="Full Skin Type" />
            </Link>
          </div>

          <div className="box-1">
            <a href=''>
              <img src={Box2} width="85%" alt="Feature Box 2" />
            </a>
          </div>

          <div className="box-3">
            <Link to="/problemPage">
              <img src={Box3} width="75%" alt="Skin Problem" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
