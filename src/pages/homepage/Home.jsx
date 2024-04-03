import React from "react";
import "./Home.css";

import HeroSection from "./herosection/HeroSection";
import FeatureSection from "./featuresection/FeatureSection";
import QuoteSection from "./quotesection/QuoteSection";

const Home = () => {
  return (
    <>
      <HeroSection/>
      <FeatureSection/>
      <QuoteSection/>
    </>
  );
};

export default Home;
