import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
//import photo4 from "../assets/heroimage.png"
const MyLazyLoadedImage = ({ src, alt,className }) => {
  return (
    <LazyLoadImage
    src={src}
    alt={alt}
    className={className}
    // the source of the image
    // alternative text for the image
    effect="blur" // effect used when the image is loading (optional)
    height="auto" // height of the image (optional)
    width="100%"
    />
  )
}

export default MyLazyLoadedImage