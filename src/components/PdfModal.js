import React, { useState } from 'react';
import  Modal  from 'react-modal';
import { AiOutlineCloseCircle, AiOutlineZoomIn, AiOutlineZoomOut } from 'react-icons/ai'
import { Document, Page,  pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      overflow: 'auto',
    },
    width: '300px'
  };

  const pagination = {
    display : 'flex',
    justifyContent : 'space-evenly',
    paddingTop: '10px',
    fontSize: '12px'
  }


const PdfModal = ({ isOpen, onRequestClose, pdfSrc }) => {
    const [scale, setScale] = useState(1);
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    const handleZoomIn = () => {
    setScale(scale + 0.1);
    };

    const handleZoomOut = () => {
    setScale(scale - 0.1);
    };

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setPageNumber(1);
      }
    
      function changePage(offset) {
        setPageNumber(prevPageNumber => prevPageNumber + offset);
      }
    
      function previousPage() {
        changePage(-1);
      }
    
      function nextPage() {
        changePage(1);
      }
    

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      ariaHideApp={false}
      style={customStyles}
    >
        <div className='pdfbuttons-container'>
        <div className='pdf-buttons'>
        <AiOutlineZoomIn onClick={handleZoomIn} size={30} style={{color: 'white', cursor: 'pointer'}} />
        <input className='percentage-input' type="text" value={`${(scale * 100).toFixed(0)}%`} readOnly/>
        <AiOutlineZoomOut onClick={handleZoomOut} size={30} style={{color: 'white', cursor: 'pointer'}} />
        </div>
        <AiOutlineCloseCircle onClick={onRequestClose} size={30} style={{color: 'white', cursor: 'pointer'}} />
        </div>

      <Document
        file={pdfSrc}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} scale={scale} renderTextLayer={false} renderAnnotationLayer={false} />
      </Document>
      <div style={pagination}>
        <button
          type="button"
          disabled={pageNumber <= 1}
          onClick={previousPage}
        >
          Previous
        </button>
        <p style={{color: 'black'}}>
          Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
        </p>
        <button
          type="button"
          disabled={pageNumber >= numPages}
          onClick={nextPage}
        >
          Next
        </button>
      </div>
    </Modal>
  );
};


export default PdfModal
