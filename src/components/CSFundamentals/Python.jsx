import React from 'react'
import MenuTitle from '../MenuTitle'
import './CSFundamentals.css'
const Python = () => {
  return (
    <div className="menuitem">
    <MenuTitle title="Introduction To Python" url="https://www.youtube.com/playlist?list=PLLOxZwkBK52DmuHRO3UNpqAzDF57FtIxk"/>  
    <MenuTitle title="Python Documentation" url="https://www.w3schools.com/python/"/>
    <MenuTitle title="Python With DSA Level 1" url="https://pynative.com/python-exercises-with-solutions/"/>
    <MenuTitle title="Python With DSA Level 2" url="https://www.programiz.com/dsa"/>

    <MenuTitle title="Python Specialization" url="https://www.coursera.org/specializations/python"/>
    <MenuTitle title="Python Projects Course" url="https://www.udemy.com/course/100-days-of-code/"/>
    <MenuTitle title="Merits And Demerits Of Python" url="https://www.tutorialspoint.com/what-are-the-limitations-of-python"/>
    </div>
  )
}

export default Python