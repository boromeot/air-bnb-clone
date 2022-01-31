import React from "react";
import AirbnbNavLogo from "../SVGs/AirbnbNavLogo";
import './Nav.css';

const Nav = () => {
  return (
    <header className="new-nav">
      <div className="nav-container">
        <div className="">
          <a className="nav-logo">
            <div>
              <AirbnbNavLogo style={{height: '32px', width: '102px'}} />
            </div>
          </a>
        </div>
      </div>
    </header>
  )
}

export default Nav;
