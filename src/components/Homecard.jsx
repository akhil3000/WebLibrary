import React,{useState} from 'react'
import './button.css'
import { Link } from 'react-router-dom'
import {useSelector} from "react-redux";
import { addItem } from '../utils/cartSlice';
import { useDispatch } from 'react-redux';
import photo from "../assets/Csfundametnals.jpg"
const Homecard = ({path,title}) => {
  const cartItems=useSelector(store=>store.cart.items);
  const dispatch=useDispatch();
  const handleAddItem = () =>{
    dispatch(addItem("Grapes"));
  }
  return (
    <div className="cardDimensions">
    <Link to={path}>
     
     <img class="imageDimensions" src={photo} alt="Subject image"></img>
     {title}
      </Link>
    </div>
  )
}

export default Homecard