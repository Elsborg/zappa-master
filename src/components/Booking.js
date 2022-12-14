import React from 'react';
import { Parallax } from "react-parallax";
import bord from "../assets/bordbooking.jpg";





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

const Booking = () => {

  return (
    <div className='book bord'>
      <Parallax bgImage={bord} keepImg strength={250}>
      <div style={{ height: 300 }}>
        <div style={insideStyles}>Book Bord</div>
      </div>
    </Parallax>
        <h2>Lorem Ipsum</h2>


    </div>
  )
}

export default Booking