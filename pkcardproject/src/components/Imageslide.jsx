import React from 'react'
import pk1 from '../images/pk1.png'
import pk2 from '../images/pk2.png'
import pk3 from '../images/pk3.png'
import pk4 from '../images/pk4.jpg'
import "./imageslide.css"
function Imageslide() {
  return (
    <div>
        
        <div className='slide-container'>
        <img src={pk4} alt="" />
        <img src={pk1} alt="" />
        <img src={pk2} alt="" />
        <img src={pk3} alt="" />
        
    </div>
    </div>
    
  )
}

export default Imageslide