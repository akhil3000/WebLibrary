import React,{useState} from 'react'
import './button.css'
import { Link } from 'react-router-dom'
import {useSelector} from "react-redux";
import { addItem } from '../utils/cartSlice';
import { useDispatch } from 'react-redux';
const Homecard = ({path,title}) => {
  const cartItems=useSelector(store=>store.cart.items);
  const dispatch=useDispatch();
  const handleAddItem = () =>{
    dispatch(addItem("Grapes"));
  }
  return (
    <div>
    <Link to={path}>
     <button className="a1">{title}
     {<button className="a2" onClick={()=>handleAddItem()}>Bookmark Course </button>}
     </button>
      </Link>
    </div>
  )
}

export default Homecard