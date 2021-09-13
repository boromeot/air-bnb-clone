import { NavLink } from "react-router-dom"

const DropDownItem = ({ children }) => {
  return (
    <NavLink to='#' className='dropdown-item'>
      {children}
    </NavLink>
  )
}

const DropDown = ({ links }) => {
  return (
    <div className='dropdown'>
      {links.map(link => (
        <DropDownItem>
          {link}
        </DropDownItem>
      ))}
    </div>
  )
}

export default DropDown;
