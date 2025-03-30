import React from 'react'
import capy1 from "../images/capy1.jpg";
import capy2 from "../images/capy2.jpeg";
import capy3 from "../images/capy3.jpg";
import capy4 from "../images/capy4.jpg";
import capy5 from "../images/capy5.jpg";
import capy6 from "../images/capy6.png";
import capy7 from "../images/capy7.jpg";
import "./imageslide.css"
function Imageslide() {
  return (
    <div>
        
        <div className='slide-container'>
        <img src={capy6} alt="" />
        <img src={capy5} alt="" />
        <img src={capy3} alt="" />
        <img src={capy1} alt="" />
        
    </div>
    </div>
    
  )
}

export default Imageslide