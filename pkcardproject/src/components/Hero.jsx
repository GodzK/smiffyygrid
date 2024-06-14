import React from 'react'
import "./Hero.css"
import pkremove from '../images/pkremove.png'
function Hero() {
  return (
    <div className='Hero-container'>
        <div className="hero-sec">
       <p>Hi My Name is Phakaphol Dherachaisuphakij. from Borntodev devinit#2 Frontend developer Section</p>
        </div>
        <div className="hero-sec">
<img src={pkremove} alt="" className='pkremove'/>
        </div>
        <div className="hero-sec">
       <button className='button-hero'>The chosen one</button>
        </div>
    </div>
  )
}

export default Hero