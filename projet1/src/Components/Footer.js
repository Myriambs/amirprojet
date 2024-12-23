import React from 'react'
import './Styles/FooterStyle.css'

const footer = () => {
  return (
    <footer className="footer">
  <div className="footer-icons">
    <a href="https://www.instagram.com/loconada.tn/"  aria-label="Instagram" className="footer-icon">
      <img src="https://img.icons8.com/ios-filled/50/ffffff/instagram-new.png" alt="Instagram"/>
    </a>
    <a href="tel:+216 54 594 988" aria-label="Phone" className="footer-icon">
      <img src="https://img.icons8.com/ios-filled/50/ffffff/phone.png" alt="Phone"/>
    </a>
    <a href="https://www.facebook.com"  aria-label="Facebook" className="footer-icon">
      <img src="../../assets/ija.png" alt="Facebook"/>
    </a>
  </div>
</footer>
  )
}

export default footer