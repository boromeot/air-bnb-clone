import React from "react";
import AirbnbNavLogo from "../SVGs/AirbnbNavLogo";
import Globe from "../SVGs/Globe";
import './Nav.css';

const Nav = () => {
  return (
    <header className="new-nav">
      <div className="nav-container">
        <div className="nav-logo-container">
          <a href='/' className="nav-logo">
            <AirbnbNavLogo style={{height: '32px', width: '102px', fill: 'white'}} />
          </a>
        </div>
        <div className="nav-search"></div>
        <div className="nav-buttons-container">
          <div className="nav-host-container">
            <a href='/' className="nav-host-link">
              <div className="nav-switch-hosting">Switch to hosting</div>
            </a>
            <div className="nav-globe">
              <button className="nav-globe-button"><Globe /></button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Nav;
