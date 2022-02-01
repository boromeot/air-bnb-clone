import React from "react";
import { NavLink } from "react-router-dom";
import AirbnbNavLogo from "../SVGs/AirbnbNavLogo";
import Globe from "../SVGs/Globe";
import HamburgerLines from "../SVGs/HamburgerLines";
import './Nav.css';

const Nav = () => {
  return (
    <header className="new-nav">
      <div className="nav-container">
        <div className="nav-logo-container"> {/* 1 */}
          <NavLink to='#' className="nav-logo">
            <AirbnbNavLogo style={{height: '32px', width: '102px', fill: 'white'}} />
          </NavLink>
        </div>
        <div className="nav-search"></div> {/* 2 */}
        <div className="nav-buttons-container"> {/* 3 */}
          <nav className="nav-host-container">
            <div className="nav-switch-host-container">
              <NavLink className="nav-switch-host-link" to="#">
                <div className="nav-switch-host">Switch to hosting</div>
              </NavLink>
              <div className="nav-globe-container">
                <button className="nav-globe-button">
                  <div className="nav-globe-svg-container">
                    <Globe className='icon-16 fill-white' viewBox='0 0 16 16' />
                  </div>
                </button>
              </div>
            </div>
            <div className="nav-profile-container">
              <button className="nav-profile-buttons">
                <div className="nav-hamburger-container">
                  <HamburgerLines className='icon-16 fill-black' viewBox='0 0 32 32' style={{stroke: 'currentcolor', strokeWidth: '3px'}}/>
                </div>
                <div className="nav-profile-container">
                  <img className="nav-profile-icon" src='https://a0.muscache.com/defaults/user_pic-50x50.png?v=3' alt="" />
                </div>
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Nav;
