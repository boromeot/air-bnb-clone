import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import DropDown from './DropDown';
import NavItem from './NavItem';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);
  const [dropDown, setDropDown] = useState(false);

  let sessionLinks;
  let profileMenu;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
    profileMenu = <DropDown />
  } else {
    sessionLinks = [
        <LoginFormModal />,
        <NavLink to="/signup">Sign Up</NavLink>
    ];
    profileMenu = <DropDown links={sessionLinks}/>
  }

  const toggleDropdown = (e) => {
    e.preventDefault();
    setDropDown(prevDropDown => !prevDropDown);
  }

  return (
    <nav className='nav'>
      <div className='logo'>
        logo
      </div>
      <div className='search'>
        search
      </div>
      <div className='links'>
        <NavLink className='btn' to='/host/homes'>Become a host</NavLink>
        <NavLink className='btn' to>
          <i class="fas fa-globe"></i>
        </NavLink>
        <NavItem
          items={[<i class="fas fa-bars bars"></i>,<i class="fas fa-user-circle fa-2x"></i>]}
          className='profile'
        >
          <DropDown links={sessionLinks}/>
        </NavItem>
      </div>
    </nav>
  );
}

export default Navigation;
