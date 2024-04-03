import React from 'react'
import './NavBarDropDownItems.css';
import { Link } from 'react-router-dom';

function NavBarDropDownItems({text, linkTo}) {
  return (
    <Link to={linkTo}><button className="nav-dd-item">{text}</button></Link>
  )
}

export default NavBarDropDownItems