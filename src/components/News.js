import React from 'react'
import { Parallax } from "react-parallax";
import bygning from "../assets/zappabygning.jpg";
import '../style/news.css'
import SimpleSlider from './SimpleSlider';


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

const News = () => {
  return (
    <div className='nyheder'>
      <Parallax bgImage={bygning} keepImg strength={250}>
      <div style={{ height: 300 }}>
        <div style={insideStyles}>nyheder</div>
      </div>
    </Parallax>

    <SimpleSlider options={{
                     infinite: true,
                     slidesToShow: 3,
                     slidesToScroll: 1
                }}>
    </SimpleSlider>
   
    </div>
  )
}

export default News