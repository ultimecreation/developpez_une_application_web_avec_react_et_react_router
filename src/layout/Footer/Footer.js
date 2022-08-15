import React from 'react'
import './Footer.scss'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer__logo">
        <img src={`${process.env.PUBLIC_URL}/images/LOGO_white.svg`} alt="footer logo" />
      </div>
      <p>&copy; 2020 Kasa. All rights reserved</p>
    </div>
  )
}

export default Footer
