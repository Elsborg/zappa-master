import React from 'react'
import { Parallax } from "react-parallax";
import kunst from "../assets/kunst.jpg";
import PhotoGallery from './PhotoGallery';


//This is the gallery page which contains pictures of Café Zappa and their food.
//A photogalley component is imported which displays the images in a grid like format and is responsive.
//A parallax is rendered at the top with react-parallax package.

const insideStyles = {
    color: "white",
    padding: 20,
    fontSize: 32,
    textTransform: "uppercase",
    fontFamily: "'KoHo', 'sans-serif;'",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)"
  };

const Gallery = () => {
  return (
    <div name='galleri'>
      <Parallax bgImage={kunst} keepImg strength={250}>
      <div style={{ height: 300 }}>
        <div style={insideStyles}>galleri</div>
      </div>
    </Parallax>
      
        <div><PhotoGallery /></div>

    </div>
  )
}

export default Gallery