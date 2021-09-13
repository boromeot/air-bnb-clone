import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <NavLink to="/signup">Sign Up</NavLink>
      </>
    );
  }

  return (
    <div className='nav'>
      <div className='logo'>
        logo
      </div>
      <div className='search'>
        search
      </div>
      <div className='links'>
        <NavLink className='btn' to>Become a host</NavLink>
        <NavLink className='btn' to>
          <i class="fas fa-globe"></i>
        </NavLink>
        <div className='profile'>
          <i class="fas fa-bars bars"></i>
          <i class="fas fa-user-circle fa-2x"></i>
        </div>
        {isLoaded && sessionLinks}
      </div>
    </div>
  );
}

export default Navigation;
