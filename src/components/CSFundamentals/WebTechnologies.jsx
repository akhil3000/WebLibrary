import React from 'react'
import './CSFundamentals.css'
import MenuTitle from '../MenuTitle'
const WebTechnologies = () => {
  return (
    <div className="menuitem">
      <MenuTitle title="What is Front End" url="https://www.youtube.com/watch?v=WG5ikvJ2TKA"/>
      <MenuTitle title="What is BackEnd" url="https://www.youtube.com/watch?v=XBu54nfzxAQ&t=1s"/>
      <MenuTitle title="Web Development Basics" url="https://www.udemy.com/course/the-complete-web-development-bootcamp/"/>
      <MenuTitle title="Web Development Documentation" url="https://www.w3schools.com/"/>
    </div>
  )
}

export default WebTechnologies
