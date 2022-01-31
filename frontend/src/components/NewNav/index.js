import React from "react";
import AirbnbNavLogo from "../SVGs/AirbnbNavLogo";
import Globe from "../SVGs/Globe";
import './Nav.css';

const Nav = () => {
  return (
    <header className="new-nav">
      <div className="nav-container">
        <div className="nav-logo-container"> {/* 1 */}
          <a href='/' className="nav-logo">
            <AirbnbNavLogo style={{height: '32px', width: '102px', fill: 'white'}} />
          </a>
        </div>
        <div className="nav-search"></div> {/* 2 */}
        <div className="nav-buttons-container"> {/* 3 */}
          <nav className="nav-host-container">
            <div className="nav-switch-host-container">
              <a className="nav-switch-host-link">
                <div className="nav-switch-host">Switch to hosting</div>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Nav;
