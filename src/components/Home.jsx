import React from 'react'
import "./Home.css"
import photo from "../assets/library.png"
import ImageSlider from './ImageSlider'
const Home = () => {
  return (
    <div>
     <img src={photo} alt="library" className="librarypic"/>   
     <div className="heading">
      <h2>Welcome To WebLibrary</h2>
      <h2>Making Online learning simplified</h2>
      <h2>The Online learning Treasure for Self-Taught Computer Science Enthusiasts</h2>
      
     
     </div>
    
    </div>
  )
}

export default Home