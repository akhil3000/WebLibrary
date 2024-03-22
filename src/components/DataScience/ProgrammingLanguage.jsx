import React from 'react'
import './DataScience.css'
import MenuTitle from '../MenuTitle'
const ProgrammingLanguage = () => {
  return (
    <div className="menuitem">
    <MenuTitle title="Introduction To Python" url="https://www.youtube.com/playlist?list=PLLOxZwkBK52DmuHRO3UNpqAzDF57FtIxk"/>  
    <MenuTitle title="Python Documentation" url="https://www.w3schools.com/python/"/>
    <MenuTitle title="Python With DSA Level 1" url="https://pynative.com/python-exercises-with-solutions/"/>
    <MenuTitle title="Python With DSA Level 2" url="https://www.programiz.com/dsa"/>
    </div>
  )
}

export default ProgrammingLanguage