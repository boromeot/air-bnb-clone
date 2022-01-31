import React from "react";
import AirbnbNavLogo from "../SVGs/AirbnbNavLogo";
import './Nav.css';

const Nav = () => {
  return (
    <header className="new-nav">
      <div className="nav-container">
        <a href='/' className="nav-logo">
          <div>
            <AirbnbNavLogo style={{height: '32px', width: '102px', fill: 'white'}} />
          </div>
        </a>
        <div></div>
        <div className="nav-buttons-container">
          <div className="nav-host-container">
            <a href='/' className="nav-host-link">Switch to hosting</a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Nav;
