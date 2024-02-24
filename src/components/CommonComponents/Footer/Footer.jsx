import React from "react";
import {
  BsDiscord,
  BsHeartFill,
  BsLinkedin,
  BsYoutube,
  BsTelegram,
} from "react-icons/bs";
import { FaCopyright } from "react-icons/fa6";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-title">
          <FaCopyright />
          Web Library
        </div>
        <div className="made-in-india">
          <p>
            Made with <BsHeartFill className="heart-icon" /> in India
          </p>
        </div>
        <div className="social-icons">
          <a href="#" target="__blank">
            <BsDiscord className="icons" />
          </a>
          <BsLinkedin className="icons" />
          <BsYoutube className="icons" />
          <BsTelegram className="icons" />
        </div>
      </footer>
    </>
  );
};
export default Footer;
