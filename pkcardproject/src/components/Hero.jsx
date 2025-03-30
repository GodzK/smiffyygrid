import React from 'react'
import "./Hero.css"
import pkremove from '../images/pkremove.png'
import Capybara from "../assets/capybara.png"
import Capyhero from "../images/capyhero.png"
function Hero() {
  return (
    <div className='Hero-container'>
        <div className="hero-sec">
       <p>Hi My Name is Phakaphol Dherachaisuphakij i love to play football and i want to be frontend developer inthe future</p>
       <p>Birth day 21/09/2548</p>
       <p>Extrovert</p>
       <button className='button-hero'><a href="https://www.youtube.com/watch?v=pPa1d5cC8M4&list=RDpPa1d5cC8M4&start_radio=1">Favorite song</a></button>
        </div>
        <div className="hero-sec">
<img src={pkremove} alt="" className='pkremove'/>
        </div>
        <div className="hero-sec">
       
        <img src={Capybara} alt="" className='image-rotate' />
        <img src={Capybara} alt="" className='image-rotate' />
        </div>
    </div>
  )
}

export default Hero