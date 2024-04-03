import React from "react";
import "./FeatureCard.css";

function FeatureCard({ image, title, description }) {
  return (
    <div className="feature-card">
      <img src={image} className="feature-image" />
      <div className="feature-content">
        <p className="feature-title">{title}</p>
        <p className="feature-description">{description}</p>
      </div>
    </div>
  );
}

export default FeatureCard;
