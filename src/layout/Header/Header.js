import React from 'react'
import './Header.scss'

const Header = (props) => {
  return (
    <div className='header'>
      <figure>
        <div className="overlay">
          <img src={props.imgSource} alt="" />
        </div>
        <figcaption>
          {props.imgFigCaption 
            ? <>{props.imgFigCaption}</>
            : <>
              <span>Chez vous,</span>{' '}
              <span> partout et ailleurs</span>
            </>
          }</figcaption>
      </figure>
    </div>
  )
}

export default Header
