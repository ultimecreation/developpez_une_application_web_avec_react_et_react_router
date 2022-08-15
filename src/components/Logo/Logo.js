import React from 'react'
import { Link } from 'react-router-dom'
import './Logo.scss';

const Logo = () => {
  return (
    <Link to="/" >
      <div className='logo'>
        <img src={`${process.env.PUBLIC_URL}/images/LOGO.svg`} alt="logo" />
      </div>
    </Link>
  )
}

export default Logo
