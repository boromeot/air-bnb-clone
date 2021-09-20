import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import LoginFormModal from '../FormModal';
import LoginForm from '../FormModal/LoginForm';
import SignupForm from '../FormModal/SignupForm';
import DropDown from './DropDown';
import NavItem from './NavItem';
import * as sessionActions from '../../store/session';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const logout = () => {
    dispatch(sessionActions.logOut());
  }

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = ([
      <span className='dropdown-item btn' onClick={logout}>Sign Out</span>,
      <span className='dropdown-item btn' onClick={() => history.push('/reservations')}>My reservations</span>,
      <span className='dropdown-item'>{sessionUser.username}</span>,
      <span className='dropdown-item'>{sessionUser.email}</span>
    ]);
  } else {
    sessionLinks = [
      <LoginFormModal className='dropdown-item btn' title='Log in'> <LoginForm /> </LoginFormModal>,
      <LoginFormModal className='dropdown-item btn' title='Sign up'> <SignupForm /> </LoginFormModal>,
    ];
  }

  return (
    <nav className='nav'>
      <NavLink to='/' className='logo'>
        carebnb
      </NavLink>
      <div className='links'>
        <NavLink className='btn host' to='/become-a-host'>Become a host</NavLink>
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
