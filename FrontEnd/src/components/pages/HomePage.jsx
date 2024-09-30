import './Home.css';
import Box1 from'/Users/dode86/Desktop/skinWhisper_project/SkinWisper/FrontEnd/src/assets/Box1.png';
import Box2 from'/Users/dode86/Desktop/skinWhisper_project/SkinWisper/FrontEnd/src/assets/Box2.png';
import Box3 from'/Users/dode86/Desktop/skinWhisper_project/SkinWisper/FrontEnd/src/assets/Box3.png';
import Navbar from '../Navbar/Navbar';

const HomePage = () => {

  return (
    <div>

 <div className= 'navbar'>
 <Navbar/>
    </div>

    <section className="quick-select">
        <div className="box-container">
          <div className="box">
          <a href=''><p></p>
            <img src={Box1} width="100%" height="80%" alt="Shopping image"/> </a>
          </div>

          <div className="box-1">
          <a href=''><img src={Box2} width="85%" alt="Shopping image" /></a>

          </div>

          <div className="box-3">
            <nav>
              <a href=''> <img src={Box3} width="75%" alt="Shopping image" /> </a>

           </nav>
          </div>
        </div>
      </section>

    </div>
  );
}

export default HomePage;
