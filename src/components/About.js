import React from 'react'
import { Parallax } from "react-parallax";
import omos from "../assets/about.jpg";
import "../style/about.css";

//The about page with a parallax at the top of this page and text about Café Zappa is rendered here.

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

const About = () => {
  return (
    <div className='om café zappa'>
      <Parallax bgImage={omos} keepImg strength={250}>
        <div style={{ height: 300 }}>
          <div style={insideStyles}>om café zappa</div>
        </div>
      </Parallax>
      <h3 className='about-header'>CAFÈ ZAPPA <br></br><br></br>
      EST. JANUAR 2022 <br></br><br></br>
       GRØNNEGADE · HORSENS. <br></br>
       </h3>
      <p className='about-text'>I hjertet af Horsens finder du Café Zappa. En Café med stor kærlighed til mad og med en vision om at lave et alternativ til de eksisterende Caféer i byen. Et sted hvor maden altid er frisklavet, og hvor råvarerne er af høj kvalitet, med god smag og til en god pris. Et sted i byen som er tæt på dig. Et sted, hvor vi kan mødes og hvor du med god samvittighed kan tage din familie og dine børn med. En moderne Café med kvalitetsburgere, tapas, steak og andre skønne retter der kan forkæle dine smagsløg. <br></br><br></br>
        Hos Café Zappa elsker vi mad – derfor går vi ikke på kompromis med kvaliteten og smagsoplevelsen. Vi elsker at lave maden fra bunden og du vil derfor også opleve at mange af vores retter er hjemmelavet, som for eksempel vores hjemmebagte brød og diverse af vore dips. Vores passion for mad afspejler sig i, at vi hele tiden udvikler på vores menu og arbejder på at gøre den endnu bedre.<br></br><br></br>
        Vi er af den overbevisning, at det er de små ting, der gør en stor forskel. <br></br><br></br>
        Vi laver cafémad, som smager himmelsk – og uanset om du spiser den i vores restaurant eller vælger at få din mad som takeaway, så sørger vi altid for at krydder den med vores karakteristiske Café Zappa-stemning. <br></br>Café Zappa – Food made with love ♡</p><br></br><br></br>

    </div>
  )
}

export default About