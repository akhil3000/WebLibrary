import React from 'react'
import MenuTitle from '../MenuTitle'
import './CSFundamentals.css'
const Java = () => {
  return (
    <div className="menuitem">
     <MenuTitle title="Introduction To Java Programming" url="https://www.youtube.com/playlist?list=PLLOxZwkBK52BaOQCJrVvkc97uzeMsx9TT"/>
     <MenuTitle title="Java Tutorial" url="https://www.javatpoint.com/java-tutorial"/>
     <MenuTitle title="Java Programs Practice" url="https://www.javatpoint.com/java-programs"/>
     <div className="hii">
       You can start learning Web Development Basics and Front End Development from Web Development Module Parallelly Before going Further
       </div>
     <MenuTitle title="Java Backend Development RoadMap" url="https://www.javabrains.io/pages/complete-java-backend-learning-path"/>
     <MenuTitle title="Java Backend Development Resources" url="https://www.youtube.com/@Java.Brains/playlists"/> 
     <MenuTitle title="Java Backend Development Project Course" url="https://www.udemy.com/course/spring-boot-and-spring-framework-tutorial-for-beginners/"/>
    </div>
  )
}

export default Java