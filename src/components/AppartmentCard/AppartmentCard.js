import React from 'react'
import { Link } from 'react-router-dom'
import './AppartmentCard.scss'

const AppartmentCard = (props) => {
  const openModalAndSetCurrentIndex = () => {
    props.handleShowModal()
    props.handleSetcurrentIndex(props.currentIndex)
  }  

  return (
    <div className='card'>

      <figure>
        <img src={props.cover} alt={props.title} onClick={openModalAndSetCurrentIndex} />
        <Link to={`/appartment-details/${props.id}`}>
          <figcaption>{props.title}</figcaption>
        </Link>
      </figure>
    </div>
  )
}

export default AppartmentCard
