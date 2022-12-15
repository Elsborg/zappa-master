import React from 'react';
import { Parallax } from "react-parallax";
import bord from "../assets/bordbooking.jpg";
import BookingForm from './BokkingForm';






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
        <p style={{textAlign: 'center', marginTop: '2rem', fontWeight: '200', fontSize: '14px'}}>Her kan du bestille et bord hos Café Zappa, du udfylder blot formen og bordet er bestilt.</p>

        <div>
         <BookingForm />
        </div>


    </div>
  )
}

export default Booking