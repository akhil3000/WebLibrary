import React from "react";
import "./FeatureSection.css";
import continuousGrowthImage from "../../../assets/ContinuousGrowth.png";
import diversePathsImage from "../../../assets/Diversepaths.png";
import qualityContentImage from "../../../assets/qualitycontent.png";
import FeatureCard from "./featurecard/FeatureCard";

function FeatureSection() {
  const featuresData = [
    {
      title: "Diverse Learning Paths",
      description:
        "Our curated resources cover a wide array of topics, including web development, data science, DSA, and CS fundamentals. No matter where your interests lie or what your current skill level is, there's something here for everyone.",
      image: diversePathsImage,
    },
    {
      title: "Quality Content",
      description:
        "We handpick the finest resources from across the internet, ensuring that you receive top-notch content that is relevant, up-to-date, and reliable.",
      image: qualityContentImage,
    },
    {
      title: "Continuous Growth",
      description:
        "Learning doesn't stop once you've mastered the basics. Stay ahead of the curve and experience continuous growth as a software engineer with our advanced resources, cutting-edge technologies, and expert insights into industry trends and best practices.",
      image: continuousGrowthImage,
    },
  ];
  return (
    <section className="features-section">
      <div className="features-content">
        <h2 className="features-title">Why Explore with Us?</h2>
        <div className="features">
          {featuresData.map((feature) => (
            <FeatureCard {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeatureSection;
