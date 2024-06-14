import React from 'react'
import "./Nav.css"
function Nav() {
  return (
    <div className='header'>
        <div className='header-logo'>
            <h1>Hi</h1>
        </div>
        <div>
            <ul className='header-menu'>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Portfolio</li>
                <li>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Nav