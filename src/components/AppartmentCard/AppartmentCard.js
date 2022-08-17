import React from 'react'
import { Link } from 'react-router-dom'
import  './AppartmentCard.scss'

const AppartmentCard = (props) => {
  return (
    <div className='card'>
      <Link to={props.id}>
        <figure>
            <img src={props.cover} alt={props.title} />
            <figcaption>{props.title}</figcaption>
        </figure>
      </Link>
    </div>
  )
}

export default AppartmentCard
