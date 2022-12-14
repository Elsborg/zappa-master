import React from 'react'
import { Parallax } from "react-parallax";
import imageDemo from "../assets/cover.jpg";
import pdf from '../assets/zappabrunch.pdf';
import pdf2 from '../assets/zappatapas.pdf';
import pdf3 from '../assets/zappaallday.pdf';
import pdf4 from '../assets/zappadrinks.pdf';
import ModalPdf from '../components/PdfModal';
import '../style/menu.css'
import brunch from '../assets/brunch.png'
import tapas from '../assets/tapas.jpg'
import burger from '../assets/burger.jpg'
import drinks from '../assets/drinks.png'





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



const Menu = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [pdfFile, setPdfFile] = React.useState('');


  const handleClickBrunch = () => {
    setIsModalOpen(true)
    setPdfFile(pdf);
  }

  const handleClickTapas = () => {
    setIsModalOpen(true)
    setPdfFile(pdf2);
  }

  const handleClickAllday = () => {
    setIsModalOpen(true)
    setPdfFile(pdf3);
  }

  const handleClickDrinks = () => {
    setIsModalOpen(true)
    setPdfFile(pdf4);
  }
 
 
  return (
    <div name='menu'>
      <Parallax bgImage={imageDemo} keepImg strength={250}>
      <div style={{ height : 300 }}>
        <div style={insideStyles}>Menu</div>
      </div>
    </Parallax>
        <h2 className='menu-heading'>Gå på opdagelse i vores menuer</h2>
        <p className='menu-paragraph'>
          Smag på vores lækre retter, der er lavet med et asiatisk og mellemøstligt twist,
          mens du stadig har mulighed for vestlige klassikere. Vores menuer er skabt
          ud fra tapas konceptet, som de eneste i Horsens.
        </p>

        
          <div className='menuImg-flex'>
            <div className='menuImg-container'>
          <img src={brunch} onClick={() => handleClickBrunch()} className="menu-image" alt='brunch menu' />
          <div className='bottom-left'>
            <h3 className='menuImg-heading'>brunch</h3>
            <p className='menuImg-para'>Torsdag til søndag fra 10:00 - 14:00</p>
          </div>

          </div>
        
          <div className='menuImg-container'>
          <img src={tapas} onClick={() => handleClickTapas()} className="menu-image" alt='brunch menu' />
          <div className='bottom-left'>
            <h3 className='menuImg-heading'>tapas</h3>
            <p className='menuImg-para'>Alle dage fra 16:00 - 21:30</p>
          </div>
          </div>

          </div>
          <div className='menuImg-flex'>
          <div className='menuImg-container'>
          <img src={burger} onClick={() => handleClickAllday()} className="menu-image" alt='brunch menu' />
          <div className='bottom-left'>
            <h3 className='menuImg-heading'>Dag og aften menu</h3>
            <p className='menuImg-para'>Alle dage fra 10:00 - 14:00</p>
          </div>
          </div>


          <div className='menuImg-container'>
          <img src={drinks} onClick={() => handleClickDrinks()} className="menu-image" alt='brunch menu' />
          <div className='bottom-left'>
            <h3 className='menuImg-heading'>drinkskort</h3>
            <p className='menuImg-para'>Alle dage - gælder hele dagen</p>
          </div>
          </div>
          </div>

          <div>
      
      
      <ModalPdf
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        pdfSrc={pdfFile}
      />
    </div>
        


        </div>
       
        
      

    
    
  )
}

export default Menu