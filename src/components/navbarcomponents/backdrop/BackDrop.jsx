import React from 'react'
import './BackDrop.css';

function BackDrop({isOpen, onClick}) {
  return (
    <div className={`backdropLayer ${isOpen ? 'open':''}`} onClick={onClick}></div>
  )
}

export default BackDrop