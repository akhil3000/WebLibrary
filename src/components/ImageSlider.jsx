import React, { useState, useEffect } from "react";
import image1 from "../assets/WebDevelopment.jpg"
import image2 from "../assets/DataScience.jpg"
import image3 from "../assets/DSA2.png"
import image4 from "../assets/Csfundamentals.jpg"
import 'react-slideshow-image/dist/styles.css'
import {Fade,Zoom,Slide} from 'react-slideshow-image'
const slideImages=[
    {
       url:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fedeeu.education%2Fimagesets%2Fsubjectimages600%2Fcomputerscience.png&tbnid=QBAyG4CjcZqCMM&vet=12ahUKEwiIsr2Ft_ODAxWctGMGHS_rCC0QMygGegQIARB_..i&imgrefurl=https%3A%2F%2Fedeeu.education%2Fsubject%2Fcomputerscience&docid=tBMi_NtYGFBU5M&w=600&h=360&q=computer%20science%20logo%20wallpaper&hl=en-GB&ved=2ahUKEwiIsr2Ft_ODAxWctGMGHS_rCC0QMygGegQIARB_"
    },
    {
       url:"https://picsum.photos/seed/img2/600/400"
    },
    {
       url:"https://picsum.photos/seed/img3/600/400"
    }
    
]

const divStyle={
    display:'flex',
    alignItems:'center',
    alignContent:'center',
    justifyContent:"center",
    height:"400px",
    width:"400px",
    backgroundSize:'cover',
    
    
}

const ImageSlider=()=>{
return(
    <div className="slide-container">
   
     <Fade>
        {slideImages.map((image,index)=>(
           <div key={index}>
              <div style={{...divStyle, backgroundImage:`url(${image.url})`}}>

              </div>
           </div> 
        ))
        }
     </Fade>
    </div>
)
}
export default ImageSlider;