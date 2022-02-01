import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import * as sessionActions from "../../store/session";
import LoginFormModal from "../FormModal";
import LoginForm from "../FormModal/LoginForm";
import SignupForm from '../FormModal/SignupForm';
import DropDown from '../Navigation/DropDown';


import AirbnbNavLogo from "../SVGs/AirbnbNavLogo";
import Globe from "../SVGs/Globe";
import HamburgerLines from "../SVGs/HamburgerLines";
import './Nav.css';

const Nav = () => {
  const sessionUser = useSelector(state => state.session.user);
  const dispatch =useDispatch();
  const history = useHistory();
  const [showDropDown, setShowDropDown] = useState(false);

  const logout = () => {
    dispatch(sessionActions.logOut());
  }

  let sessionLinks;

  if (sessionUser) {
    sessionLinks = [
      <span className='dropdown-item btn' onClick={logout}>Sign Out</span>,
      <span className='dropdown-item btn' onClick={() => history.push('/reservations')}>My reservations</span>,
      <span className='dropdown-item'>{sessionUser.username}</span>,
      <span className='dropdown-item'>{sessionUser.email}</span>
    ]
  } else {
    sessionLinks = [
      <LoginFormModal className='dropdown-item btn' title='Log in'> <LoginForm /> </LoginFormModal>,
      <LoginFormModal className='dropdown-item btn' title='Sign up'> <SignupForm /> </LoginFormModal>,    ]
  }


  return (
    <header className="new-nav">
      <div className="nav-container">
        <div className="nav-logo-container"> {/* 1 */}
          <NavLink to='/' className="nav-logo">
            <AirbnbNavLogo style={{height: '32px', width: '102px', fill: 'white'}} />
          </NavLink>
        </div>
        <div className="nav-search"></div> {/* 2 */}
        <div className="nav-buttons-container"> {/* 3 */}
          <nav className="nav-host-container">
            <div className="nav-switch-host-container">
              <NavLink className="nav-switch-host-link" to="/become-a-host">
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
            <div className="nav-profile-container"
              onClick={() => setShowDropDown(prev => !prev)}
            >
              <button className="nav-profile-buttons">
                <div className="nav-hamburger-container">
                  <HamburgerLines className='icon-16 fill-black' viewBox='0 0 32 32' style={{stroke: 'currentcolor', strokeWidth: '3px'}}/>
                </div>
                <div className="nav-profile-icon-container">
                  <img className="nav-profile-icon" src='https://a0.muscache.com/defaults/user_pic-50x50.png?v=3' alt="" />
                </div>
              </button>
              {showDropDown && <DropDown links={sessionLinks} />}
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Nav;
