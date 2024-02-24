import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";
import Modal from "../Modal/Modal";
const Navbar = () => {
  const [showModal, setShowModal] = useState(false);

  window.onscroll = () => {
    if (window.pageYOffset > 50) {
      document.getElementById("navbar").classList.add("scroll-animation");
    } else {
      document.getElementById("navbar").classList.remove("scroll-animation");
    }
  };

  return (
    <nav id="navbar" className="navbar">
      <div className="logo">
        <p>
          <span>Web</span>Library
        </p>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/WebDevlopment">Web Development</Link>
        </li>
        <li>
          <Link to="/DataScience">Data Science</Link>
        </li>
        <li>
          <Link to="/DSA">DSA</Link>
        </li>
        <li>
          <Link to="/CSFundamentals">CS Fundamentals</Link>
        </li>
        <li>
          <Link to="/MyCourses">My Courses</Link>
        </li>
        <li>
          <Link to="/Contribute">Contribute</Link>
        </li>
        <li>
          <Link to="/AboutUs">About Us</Link>
        </li>
      </ul>
      <div className="auth-buttons">
        <button onClick={() => setShowModal(true)}>Sign in</button>
        <button>Sign up</button>
      </div>

      {showModal && <Modal closeModal={setShowModal} />}
    </nav>
  );
};

export default Navbar;
