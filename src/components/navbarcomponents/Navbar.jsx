import React from "react";
import { Link } from "react-router-dom";
import NavBarItem from "./NavBarItem";
import burgerMenu from "../../assets/burger_menu.svg";

import "./Navbar.css";

const Navbar = ({ isMobile = false, isOpen, onOpenClick, data }) => {
  return (
    <nav className={`${isMobile ? "mobile" : ""} ${isOpen ? "open" : ""}`}>
      {!isMobile && (
        <button className="burgerMenu" onClick={onOpenClick}>
          <img src={burgerMenu} alt="options" />
        </button>
      )}
      <Link to="/" className="title">
        FamousITCourses<span>.com</span>
      </Link>
      <ul className="nav-menu">
        {data.map((topic) => {
          return (
            <NavBarItem
              isMobile={isMobile}
              key={topic.path}
              linkTo={topic.path}
              title={topic.shortTitle}
            ></NavBarItem>
          );
        })}
        <NavBarItem
          isMobile={isMobile}
          key={"/aboutus"}
          linkTo={"/aboutus"}
          title={"About Us"}
        ></NavBarItem>
      </ul>
    </nav>
  );
};

export default Navbar;
