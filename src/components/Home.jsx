import React from "react";
import "./Home.css";
import photo1 from '../assets/ContinuousGrowth.png'
import photo2 from '../assets/Diversepaths.png'
import photo3 from '../assets/qualitycontent.png'
import photo4 from '../assets/heroimage.png'
import photo5 from '../assets/Csfundametnals.jpg'
const Home = () => {
  return (
    <>
    <section className="home">
       <div className="heroimage">
       <img src={photo4} className="heroimage"/>
      </div>
      <div className="heading">
        <h1 className="Header">FamousItCourses.com</h1>
        <h3 className="desc1">The Online learning Treasure for Self-Taught Computer Science Enthusiasts</h3>
        <h3 className="desc2">Premier destination for  Students,Fresh Graduates,Working Professionals,Professors and Lifelong Learners</h3>
        <h3 className="desc2">Learn from the Instructors Who are Software Engineers,Online with High quality content and guided pathways</h3>
      </div>
    </section>
    
    <section className="featuresbox">
    <h2 className="why">Why Explore With Us</h2>
      <div className="features" >
      <div className="box1">
      <img src={photo2} className="featureimage"/>
      <h2>Diverse Learning Paths</h2>
      <h4>Our curated resources cover a wide array of</h4> 
      <h4>Topics, including Web Development,DSA</h4> 
      <h4>Data Science & CS Fundamentals</h4> 
      <h4>No matter where your interests</h4> 
      <h4>Lie or what your current skill level is, there's</h4> 
      <h4>Something here for everyone.</h4>
      </div>

      <div className="box2">
      <img src={photo3} className="featureimage"/>
      <h2>Quality Content</h2>
      <h4>We handpick the finest Resources from across the Internet</h4> 
      <h4>Ensuring that you receive Top Notch content that is </h4>
      <h4>Relevant Up-to-date & Reliable</h4>
      </div>

     <div className="box3">
     <img src={photo1} className="featureimage"/>
     <h2>Continuous Growth</h2>
     <h4>Earning doesn't stop once you've mastered</h4> 
     <h4>The basics. Stay ahead of the curve and </h4>
     <h4>Continous Growth as a Software Engineer with</h4> 
     <h4>Our Advanced Resources, Cutting-Edge</h4> 
     <h4>Technologies, and expert insights into industry</h4> 
     <h4> Trends and Best Practices.</h4>
     </div>
      </div>
    </section>


    <section className="Quotation">
    <h1>Access to quality online learning is an important step in helping people</h1>
   <h1>future-proof their skills and seek new opportunities for growth and development.</h1>

    <h1 className="org">~ World Economic Forum</h1>
    </section>
    </>
  );
};

export default Home;
