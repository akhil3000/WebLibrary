import React from 'react'
import './WebDevelopment.css'
import MenuTitle from '../MenuTitle'
const NextJs = () => {
  return (
    <div className="menuitem">
        <MenuTitle title="Next Js Basics" url="https://www.youtube.com/playlist?list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI"/>
        <MenuTitle title="Next Js Complete Tutorial" url="https://www.udemy.com/course/next-js-the-complete-developers-guide/?couponCode=ST14MT32124"/>
        <MenuTitle title="Next Js Projects" url="https://www.youtube.com/@codewithantonio/playlists"/>
        <MenuTitle title="Next Js Documentation" url="https://nextjs.org/docs/app/building-your-application/routing"/>
    </div>
  )
}

export default NextJs