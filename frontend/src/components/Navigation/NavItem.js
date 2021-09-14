import { NavLink } from "react-router-dom"
import { useState,  } from "react";

const NavItem = ({ items, className, children }) => {
  const [dropDown, setDropDown] = useState(false);
  return (
    <div class={className}>
      <NavLink
        to='#'
        className='flex-center'
        onClick={() => setDropDown(prev => !prev)}
      >
        {items.map(item => (
          item
        ))}
      </NavLink>
      {dropDown && children}
    </div>
  )
}

export default NavItem;
