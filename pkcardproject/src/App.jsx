import "./App.css";
import ba1 from "./images/ba1.png";
import ba2 from "./images/ba2.png";
import ba3 from "./images/ba3.png";
import ba4 from "./images/ba4.png";
import ba5 from "./images/ba5.png";
import ba6 from "./images/ba6.png";
import ba7 from "./images/ba7.png";
import Navbar from "./components/Nav"
import Hero from "./components/Hero";
import Imageslide from "./components/Imageslide";
import Story from "./components/story"
function App() {
  return (
    <>
    <div className="container">
       <Navbar />
       <Hero />
       <div className="slider" >
        <div className="list">
        <div className="item" style={{ "--position": 1 }}>
            <img src={ba1} alt="" />
          </div>
          <div className="item" style={{ "--position": 2 }}>
            <img src={ba2} alt="" />
          </div>
          <div className="item" style={{ "--position": 3 }}>
            <img src={ba3} alt="" />
          </div>
          <div className="item" style={{ "--position": 4 }}>
            <img src={ba4} alt="" />
          </div>
          <div className="item" style={{ "--position": 5 }}>
            <img src={ba5} alt="" />
          </div>
          <div className="item" style={{ "--position": 6 }}>
            <img src={ba6} alt="" />
          </div>
          <div className="item" style={{ "--position": 7 }}>
            <img src={ba7} alt="" />
          </div>
        </div>
      </div>
     <Imageslide/>
    </div>
     <Story/>
    </>
  );
}

export default App;
