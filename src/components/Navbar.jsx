import React from 'react'
import {Link} from "react-router-dom";
import WebDevlopment from './WebDevelopment/WebDevlopment';
import DSA from './DSA/DSA'
import DataScience from './DataScience/DataScience';
import CSFundamentals from './CSFundamentals/CSFundamentals';
import Contribute from './Contribute';

import AboutUs from './AboutUs';
import MyCourses from './MyCourses';
import "./Navbar.css"
const Navbar = () => {
  return <nav>
    <Link to="/" className="title">
      WebLibrary
    </Link>
    <ul>
        <li>
          <Link to="/WebDevlopment">
          Web Development
          </Link>
          </li>
        <li>
          <Link to="/DataScience">
          Data Science
          </Link>
        </li>
        <li>
          <Link to="/DSA">
          DSA
          </Link>
          </li>
        <li>
          <Link to="/CSFundamentals">
          CS Fundamentals
          </Link>
          </li>
          <li>
          <Link to="/MyCourses">
           My Courses
          </Link>
          </li>
        <li>
          <Link to="/Contribute">
          Contribute
          </Link>
          </li>
        <li>
          <Link to="/AboutUs">
          About Us
          </Link>
          </li>
        
    </ul>
  </nav>
    
  
}

export default Navbar