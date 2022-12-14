import '../style/footer.css'



const Footer = () => {
    return (
        <div className="footer-flex">
            <div className="findos">
                <h2 className='footer-header'>find os</h2>
                <div className='footer-content'>
                <p>Café Zappa</p>
                <p>Grønnegade 11</p>
                <p>8700 Horsens</p>
                </div>
            </div>
            <div className="kontakt">
                <h2 className='footer-header'>kontakt</h2>
                <div className='footer-content'>
                <a href='tel:+4591878646' style={{textDecoration: 'none'}}> <p>Tlf: +45 91 87 86 46</p></a>
                <a href='mailto:kontakt@cafezappa.dk' style={{textDecoration: 'none'}}><p>E-mail: kontakt@cafezappa.dk</p></a>
                </div>
            </div>
            <div className="åbningstider">
                <h2 className='footer-header'>åbningstider</h2>
                <div className='footer-content'>
            <p>Mandag - Onsdag: 16:00 - 22:00</p>
            <p>Torsdag: 10:00 - 22:00</p>
            <p>Fredag - Lørdag: 10:00 - 02:00</p>
            <p>Søndag: 10:00 - 20:00</p>
            </div>
            </div>
        </div>
    )
  }
  
  export default Footer