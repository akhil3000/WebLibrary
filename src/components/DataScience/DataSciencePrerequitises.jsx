import React from 'react'
import './DataScience.css'
import MenuTitle from '../MenuTitle'
import photo1 from "./images/AI.png";
import photo2 from "./images/DataScience.jpg"
const DataSciencePrerequitises = () => {
  return (
    <>
   <section className="images">
   
   <img src={photo2} className="DataScience"/>
   </section>
   <section className="content">
  
   <h4>Data science is the study of data to extract meaningful insights for business. It is a multidisciplinary approach that combines principles</h4> 
   <h4>and practices from the fields of mathematics, statistics, artificial intelligence, and computer engineering to</h4> 
   <h4>analyze large amounts of data. This analysis helps data scientists to ask and answer questions like what happened, why it happened,</h4> 
   <h4>what will happen, and what can be done with the results.</h4>
   <h4>Data science is important because it combines tools, methods, and technology to generate meaning from data.</h4>
   <h4>Modern organizations are inundated with data; there is a proliferation of devices that can automatically collect and store information.</h4>
   <h4>Online systems and payment portals capture more data in the fields of e-commerce, medicine, finance, and every other aspect of human life.</h4> 
   <h4>We have text, audio, video, and image data available in vast quantities.</h4>   
   </section>
   <section className="prerequitises">
   <img src={photo1} className="AI"/>
   <h4>The Prerequises To learn Data Sciece are:</h4>
     <ul>
      <li><h4>1.Knowledge Of Any Object Oriented Language with DSA skill</h4></li>
      <li><h4>2.Knoweldge of 12th Class Mathematics like Linear Algebra,Statistics,Caluclus</h4></li>
      <li><h4>3.Problem Solving Skill & Analytical Thinking</h4></li>
      <li><h4>4.Knowledge of CS Fundmentals is Must and Should</h4></li>
      <li><h4>5.Web Application Knoweldge is Not Mandatory But Good To have</h4></li>
     </ul>
   </section>
    </>
  )
}

export default DataSciencePrerequitises