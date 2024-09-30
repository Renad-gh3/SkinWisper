import './Home.css';
import Box1 from "../../assets/Box1.png";
import Box2 from "../../assets/Box2.png";
import Box3 from "../../assets/Box3.png";
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom'; //Must npm install

const HomePage = () => {
  return (
    <div>
      <div className= 'navbar'>
        <Navbar/>
      </div>
      <section className="quick-select">
        <div className="box-container">
          <div className="box">
            <Link to = {"/fullskintype"}>
              <img src={Box1} width="100%" height="80%" /> 
            </Link>
          </div>
          <div className="box-1">
            <a href=''>
              <img src={Box2} width="85%" />
            </a>
          </div>
          <div className="box-3">
            <nav>
              <a href=''> 
                <img src={Box3} width="75%"/>
              </a>
           </nav>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
