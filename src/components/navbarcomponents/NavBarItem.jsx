import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import "./NavBarItem.css";
import { Link, useLocation } from "react-router-dom";
import arrowUp from "../../assets/arrow_up.svg";
import arrowDown from "../../assets/arrow_down.svg";

const NavBarItem = ({ isMobile, title, children, linkTo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const dropDownContainerRef = useRef(null);
  const location = useLocation();

  useEffect(()=> {
    setIsOpen(false);
  }, [location])
  const handleFocus = () => {
    if (isMobile) return;
    setIsFocused(true);
  };
  const handleBlur = () => {
    if (isMobile) return;

    setIsFocused(false);
    toggleDropdownHeight();
  };
  const toggleOpen = () => {
    console.log(`Toggling isOpen: ${isOpen}`);
    setIsOpen(!isOpen);
  };

  const toggleDropdownHeight = useCallback(() => {
    if(dropDownContainerRef.current == null) {
      return
    }
    const scrollHeight = dropDownContainerRef.current.children[0].scrollHeight;
    if (isFocused || isOpen) {
      dropDownContainerRef.current.style.height =  `calc(${scrollHeight}px${isMobile ? "":" + 2.5rem"})`;
    } else {
      dropDownContainerRef.current.style.height = "0";
    }
  });
  
  useLayoutEffect(()=> {
    if(dropDownContainerRef.current == null) return
    toggleDropdownHeight();
  }, [isOpen, dropDownContainerRef, toggleDropdownHeight])
  return (
    <li className="nav-item">
      <div
        className={`nav-item-title ${isOpen ? "open" : ""}`}
        onMouseEnter={() => {
          if (children && isMobile) {
            setIsOpen(true);
            toggleDropdownHeight();
          }
        }}
        onMouseLeave={() => {
          if (children && isMobile) {
            setIsOpen(false);    
            toggleDropdownHeight();
          }
        }}
      >
        {!children && (
          <Link to={linkTo}>
            <button onFocus={handleFocus} onBlur={handleBlur}>
              {title}
            </button>
          </Link>
        )}
        {children && (
          <>
            <button
              onFocus={handleFocus}
              onBlur={handleBlur}
              onClick={toggleOpen}
            >
              {title}{" "}
              <span className="dropdown-icon">
                <img src={isOpen ? arrowUp : arrowDown} alt="arrow"/>
              </span>
            </button>
          </>
        )}
      </div>
      {children && (
        <div
          ref={dropDownContainerRef}
          className={`dropdown-menu-container ${
            isOpen || isFocused ? "open" : ""
          }`}
          onMouseEnter={() => {
            setIsOpen(true);
          }}
          onMouseLeave={() => {
            setIsOpen(false);
          }}
        >
          <ul className="dropdown-menu">
            {React.Children.map(children, (child, index) => (
              <li key={index} className="dropdown-item">
                {child}
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
};

export default NavBarItem;
