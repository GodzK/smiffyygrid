import React from "react";
import "./story.css";
import pk4 from "../images/pk4.jpg"
import pk2 from "../images/pk2.png"
import capyyy from "../images/capyyyy.png"
import work from "../images/capywork.jpeg"
function story() {
  return (
    <div className="story">
      <div className="story-header">
        <h1>Story about my self</h1>
      </div>

        <div className="substory">
        <div className="pic1">
            <img src={capyyy} alt="" />
        </div>
        <div className="item1">
          <h1>Food i Like</h1>
            <p>Pizza</p>
            <p>Burger</p>
            <p>Spaghetti</p>  
            <h1>สิ่งที่ชอบ</h1>
            <p>football</p>
            <p>Game</p>
            <p>Coding</p>
            <h1>สิ่งที่เกีลียด</h1>
            <p>คนขี้เกียจ</p>
            <p>คนเห็นเเก่ตัว</p>
            <p>คนไม่ตรงต่อเวลา</p>
            </div>
          
        </div>
      <div className="substory2">
         <div className="pic2">
  <a href="https://www.instagram.com/pk._tcsk/" target="blank"><img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNW8yY3ZtcjZ6eHNzbWhpOW1xOTFlaG91M3FkYWg4emJxY2o1b25ndiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/bnl7xKaEXMLhI475je/giphy.gif" alt="" className="capybigpic" /></a>
        </div>
        <div className="item2">
         <h1>know Me More</h1>
         <p>Link to My Instagram</p>
         <a href="https://www.instagram.com/pk._tcsk/">Instagram</a>
         <p>Link to My Facebook</p><a href="https://www.facebook.com/phakaphol.dherachaisuphakij/">Facebook</a>
         <p>Link to My Linkedin</p><a href="https://www.linkedin.com/in/phakaphol-dherachaisuprakij-1092ab256/">Linkedin</a>
         </div>
      </div>
      <div className="substory2">
         <div className="pic2">
   <img src={work} alt="" className="capybigpic" />
        </div>
        <div className="item2">
         <h1>DM for Work</h1>
         <h1>Tel : 999.999.9999</h1>
         <h1>Thailand</h1>
         <button>A delightful button</button>
         
      </div>
      </div>
      
    </div>
  );
}

export default story;
