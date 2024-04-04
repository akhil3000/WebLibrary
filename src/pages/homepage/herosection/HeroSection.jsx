import React from "react";
import "./HeroSection.css";
import photo4 from "../../../assets/heroimage.png";
import TextSwitcher from "./textswitcher/TextSwitcher";

function HeroSection() {
  const userTypes = [
    "Students",
    "Fresh Graduates",
    "Working Professionals",
    "Professors",
    "Lifelong Learners",
  ];
  const colors = ["#ee9b00", "#FB5607", "#FF006E", "#8338EC", "#3A86FF"];
  return (
    <section className="hero">
      <img src={photo4} alt="hero image" className="heroimage" />

      <div className="content">
        <h1 className="headline">
          <span>The Online Learning Treasure</span> for Self-Taught
          Computer Science Enthusiasts.
        </h1>
        <TextSwitcher
            fixed={"The Premier destination for"}
            switchingList={userTypes}
            switchColors={colors}
          />
        <p className="tagline">Learn Online from Instructors who are Seasoned Sofware Engineers who offer high-quality content and guided pathways.</p>
      </div>
    </section>
  );
}

export default HeroSection;
