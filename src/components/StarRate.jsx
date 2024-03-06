import {React,useState} from 'react'
import {FaStar} from "react-icons/fa";
const StarRate = () => {
    const[rating,setRating]=useState(null);
    const[rateColor,setRateColor]=useState(null);
  return (
    <>
       {[...Array(5)].map((star,index)=>{
        const currentRate=index+1;

        return(
            <>
            <label>
            <input type="radio" name="rate"
            value={currentRate}
            onClick={()=>setRating(currentRate)}
            />
            <FaStar
            size={25}
            color={currentRate<=(rateColor||rating)?"yellow":"white"}
            />
            </label>
            </>
        )
        }
       )
       
       
       }
    </>
  )
}

export default StarRate