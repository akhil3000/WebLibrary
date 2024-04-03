import React from "react";
import { Link } from "react-router-dom";
import NavBarItem from "./NavBarItem";
import NavBarDropDownItems from "./NavBarDropDownItems";
import burgerMenu from '../../assets/burger_menu.svg';

import "./Navbar.css";

const Navbar = ({isMobile = false, isOpen, onOpenClick, data}) => {
  return (
    <nav className={`${isMobile ? 'mobile':''} ${isOpen ? 'open': ''}`}>
      {!isMobile && <button className="burgerMenu" onClick={onOpenClick}><img src={burgerMenu}/></button>}
      <Link to="/" className="title">
        FamousITCourses<span>.com</span>
      </Link>
      <ul className="nav-menu">
        <NavBarItem isMobile={isMobile} key={"Topics"} title={"Topics"}>
          {
            data.map((topic)=> {
              return <NavBarDropDownItems key={topic.title} linkTo={topic.path} text={topic.title}></NavBarDropDownItems>
            })
          }
        </NavBarItem>
        <NavBarItem isMobile={isMobile}  key={"/MyCourses"} linkTo={"/MyCourses"} title={"My Courses"}></NavBarItem>
        <NavBarItem isMobile={isMobile}  key={"/contribute"} linkTo={"/contribute"} title={"Contribute"}></NavBarItem>
        <NavBarItem isMobile={isMobile}  key={"/aboutus"} linkTo={"/aboutus"} title={"About Us"}></NavBarItem>
      </ul>
    </nav>
  );
};

export default Navbar;
