import React from 'react'
import './button.css';
import StarRate from './StarRate';
const MenuTitle = ({title,url}) => {
  return (
    <button className="MenuItem"> {<a href={url}>{title}</a>}
    <div>
    <StarRate/>
  </div>
    </button>
  )
}

export default MenuTitle