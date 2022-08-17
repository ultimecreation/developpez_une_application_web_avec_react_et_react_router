import React from 'react'
import { Link } from 'react-router-dom'
import './AppartmentCard.scss'

const AppartmentCard = (props) => {
  return (
    <div className='card'>

      <figure>
        <img src={props.cover} alt={props.title} />
        <Link to={`/appartment-details/${props.id}`}>
          <figcaption>{props.title}</figcaption>
        </Link>
      </figure>
    </div>
  )
}

export default AppartmentCard
