import React,{useState} from 'react'
import './button.css'
import { Link } from 'react-router-dom'
const Homecard = ({path,title}) => {
  return (
    <div>
    <Link to={path}>
     <button className="a1">{title}
     <button className="a2">Bookmark Course</button>
     </button>
      </Link>
    </div>
  )
}

export default Homecard