import React from 'react'
import './Header.scss'

const Header = () => {
  return (
    <div className='header'>
      <figure>
        <div className="overlay">
          <img src={`${process.env.PUBLIC_URL}/images/background.png`} alt="" />
        </div>
        <figcaption>Chez vous, partout et ailleurs</figcaption>
      </figure>
    </div>
  )
}

export default Header
