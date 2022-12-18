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

// This component represents a page for displaying the restaurant's menu. It imports the necessary dependencies, including
// the 'react-parallax' library for creating a parallax scrolling effect, and the 'menu.css' file for styling. It also 
// imports image files and PDF files for the different menus.

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

// This object contains styles for the text that appears over the parallax image at the top of the page.



const Menu = () => {
  // Declare state variables for the PDF modal and the PDF file to be displayed in the modal
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [pdfFile, setPdfFile] = React.useState('');

   // These functions handle clicks on the menu images. They set the state variables for the PDF modal and the PDF file to be
  // displayed in the modal.
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
 
  // The component is rendered, with the parallax image at the top and four menu images below it. Each menu image is
  // clickable and will open the PDF modal when clicked.
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