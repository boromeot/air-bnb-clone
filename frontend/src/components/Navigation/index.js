import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import DropDown from './DropDown';
import NavItem from './NavItem';
import * as sessionActions from '../../store/session';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(sessionActions.logOut());
  }

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = ([
      <a className='dropdown-item btn' onClick={logout}>Sign Out</a>,
      <span className='dropdown-item'>{sessionUser.username}</span>,
      <span className='dropdown-item'>{sessionUser.email}</span>
    ]);
  } else {
    sessionLinks = [
        <LoginFormModal className='dropdown-item btn'/>,
        <NavLink to="/signup" className='dropdown-item'>Sign Up</NavLink>
    ];
  }

  return (
    <nav className='nav'>
      <NavLink to='/' className='logo'>
        carebnb
      </NavLink>
      <div className='search'>
        search
      </div>
      <div className='links'>
        <NavLink className='btn host' to='/host/homes'>Become a host</NavLink>
        <NavLink className='btn' to>
          <i class="fas fa-globe"></i>
        </NavLink>
        <NavItem
          items={[<i class="fas fa-bars bars"></i>,<i class="fas fa-user-circle fa-2x"></i>]}
          className='profile'
        >
          {isLoaded && <DropDown links={sessionLinks}/>}
        </NavItem>
      </div>
    </nav>
  );
}

export default Navigation;
