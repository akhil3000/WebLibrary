import React from 'react'
import './WebDevelopment.css';
import photo1 from './images/Fullstack.png';
import photo2 from './images/Technlogies.png';
const WebPrerequitises = () => {
  return (
    <>
    <section className="title">
      <div className="images">
      <img src={photo1} className="FSDWorkflow"/>
      
      </div>
      <h1>FullStack Architecture</h1>
    </section>


    <section className="content">
    <h4>Every three seconds a new website is built. The average reading speed can range between 200 to 250 words per minute.</h4> 
    <h4>Assuming you can read up to 300 words per minute then by the time you finish reading this article about 240 websites can be created.</h4> 
   <h4> Globally, 71% of businesses have a website in 2023. More than 28% of businesses conduct their online activities and more than</h4> 
    <h4>43% of small businesses are planning to invest in their website performance.</h4>
   <h4>According to GoDaddy Data Observatory India 2023, it shows that 55% of small businesses have been launched in the last five years and 62% of</h4> 
   <h4> Indian small businesses have a website,e-commerce platform or an online store as their main source of sales channel to grow their business.</h4> 
   <h4>In the past five years, 83% of small businesses started selling online and 65% of small businesses make up to 50% of revenue from online sales.</h4> 
   <h4>Mobile phones are still 46% of the relevant mode for most people in India.</h4> 
    </section>

    <section className="prerequitises">
     <img src={photo2} className="Technologies"/>
     <h4>The Prerequises To learn Web Development is:</h4>
     <ul>
      <li><h4>1.Knowledge Of Any Object Oriented Language with DSA skill</h4></li>
      <li><h4>2.Creativity</h4></li>
      <li><h4>3.Problem Solving Skill</h4></li>
      <li><h4>4.CS Fundmentals is Not mandatory But Good to have</h4></li>
     </ul>
    </section>
    </>
  )
}

export default WebPrerequitises