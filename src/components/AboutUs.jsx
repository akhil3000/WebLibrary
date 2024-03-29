import React from 'react'
import './Home.css';
import Photo1 from '../assets/Akhil.jpeg'
const AboutUs = () => {
  return (
    <div className="contentPosition">
      <img src={Photo1} alt="Akhil Polisetty" className="photo1"/> 
      <h1>Akhil Polisetty</h1>
      <div className="about">
      <h3>Technology Moves at the Speed of light so we reglarly update courses and resources in this blog</h3>
      <h3>We Picked One of the best resources Still there are so many best resources outside we just simplify your learning</h3>
      <h3>All Youtube Playlists and articles are free,For Coursera and Edx You can freely audit each course in Specialization</h3>
      <h3>Each Udemy course is costs of 400-500 rupess,And Other Private paid courses mention in this blog are also well worthy</h3>
     </div>
     <div className="Author">
      <h3>All Curricullums Are Designed And Crafted By Akhil Polisetty</h3> 
      <h3>JNTUK 2022 CS Grad</h3>
      <h3>Scaler Academy 2024 Grad</h3>
      <h3>FullStackWebDeveloper,DataScience & Web 3 Enthusiast</h3>
      <h3>gmail:akhilpolisetty456@gmail.com</h3>
       </div>
    </div>
  )
}

export default AboutUs