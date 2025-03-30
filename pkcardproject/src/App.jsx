import "./App.css";
import capy1 from "./images/capy1.jpg";
import capy2 from "./images/capy2.jpeg";
import capy3 from "./images/capy3.jpg";
import capy4 from "./images/capy4.jpg";
import capy5 from "./images/capy5.jpg";
import capy6 from "./images/capy6.png";
import capy7 from "./images/capy7.jpg";
import Navbar from "./components/Nav"
import Hero from "./components/Hero";
import Imageslide from "./components/Imageslide";
import Story from "./components/story"
import Footer from "./components/Footer";
function App() {
  return (
    <>
    <div className="container">
       <Navbar />
       <Hero />
       <div className="slider" >
        <div className="list">
        <div className="item" style={{ "--position": 1 }}>
            <img src={capy1} alt="" />
          </div>
          <div className="item" style={{ "--position": 2 }}>
            <img src={capy2} alt="" />
          </div>
          <div className="item" style={{ "--position": 3 }}>
            <img src={capy3} alt="" />
          </div>
          <div className="item" style={{ "--position": 4 }}>
            <img src={capy4} alt="" />
          </div>
          <div className="item" style={{ "--position": 5 }}>
            <img src={capy5} alt="" />
          </div>
          <div className="item" style={{ "--position": 6 }}>
            <img src={capy6} alt="" />
          </div>
          <div className="item" style={{ "--position": 7 }}>
            <img src={capy7} alt="" />
          </div>
        </div>
      </div>
     <Imageslide/>
    </div>
     <Story/>
     <Footer/>
    </>
  );
}

export default App;
