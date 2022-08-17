import React from 'react'
import './Header.scss'

const Header = () => {
  return (
    <div className='header'>
      <figure>
        <div className="overlay">
          <img src={`${process.env.PUBLIC_URL}/images/background.png`} alt="" />
        </div>
        <figcaption><span>Chez vous,</span>{' '}<span> partout et ailleurs</span></figcaption>
      </figure>
    </div>
  )
}

export default Header
