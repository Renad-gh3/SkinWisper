import "./Home.css";
import Box1 from "../../assets/Box1.png";
import Box2 from "../../assets/Box2.png";
import Box3 from "../../assets/Box3.png";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <div className="navbar">
        <Navbar />
      </div>
      <section className="quick-select">
        {/* Full Skin Type Link for Box 1 */}
        <div className="box box-1">
          <Link to="/fullskintype">
            <img src={Box1} alt="Full Skin Type" />
          </Link>
        </div>

        {/* Box 2 (not linked) */}
        <div className="box box-2">
          <a href="">
            <img src={Box2} alt="Feature Box 2" />
          </a>
        </div>

        {/* Skin Problem Link for Box 3 */}
        <div className="box box-3">
          <Link to="/problemPage">
            <img src={Box3} alt="Skin Problem" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
