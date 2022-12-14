import React from 'react'
import { Parallax } from "react-parallax";
import bygning from "../assets/zappabygning.jpg";
import SimpleSlider from '../components/SimpleSlider';
import "../style/news.css";


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
      <h3 className='news-header'>nyheder i café zappa</h3>
      <p className='news-text'>Følg med i de seneste udviklinger her i caféen. Alt fra tilbud, nye retter på menuen til events og fede koncepts.
        <br></br>Følg os på Facebook og Instagram for mere info om os!</p>

      <div className='slider'>
        <SimpleSlider options={{
          className: "grid-container",
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          responsive: [
            {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
              swipe: true,
            },
          },
        ],
        }} />

      </div>


    </div>

  )
}

export default News