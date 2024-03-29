import React from "react";
import {
  BsDiscord,
  BsHeartFill,
  BsLinkedin,
  BsYoutube,
  BsTelegram,
} from "react-icons/bs";
import { FaCopyright } from "react-icons/fa6";
import "./Home.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-title">
          <FaCopyright />
          FamousITCourses.com
        </div>
        <div className="made-in-india">
          <p>
            Made with <BsHeartFill className="heart-icon" /> in India
          </p>
        </div>
        <div className="social-icons">
          <a href="https://discord.gg/UJ885hqDPd" target="__blank">
            <BsDiscord className="icons" />
          </a>
          <a href="https://www.linkedin.com/in/akhil-polisetty-b09b8b192/" target="__blank">
          <BsLinkedin className="icons" />
          </a>
          <a href="https://t.me/+4tZnvg47-akyNzY1" target="__blank">
          <BsTelegram className="icons" />
          </a>
          <a href="https://www.youtube.com/@akhilpolisetty" target="__blank">
          <BsYoutube className="icons" />
          </a>
        </div>
      </footer>
    </>
  );
};
export default Footer;
