import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import Collapsible from '../../components/Collapsible/Collapsible'
import Slider from '../../components/Slider/Slider'
import { AppartmentsContext } from '../../context/AppartmentsContext'
import NotFound from '../NotFound/NotFound'
import './AppartmentDetails.scss'

const AppartmentDetails = () => {
    const { id } = useParams()
    const appartmentsContext = useContext(AppartmentsContext)
    const { getAppartmentById } = appartmentsContext
    const appartment = getAppartmentById(id)

    if(!appartment) return <NotFound/>
   
    return (
        <div className='appartment-details container'>
            <header>
                <Slider slides={appartment.pictures} />
                
            </header>
            <section>
                <div className="infos">
                <p className="location">{appartment.location}</p>
                <ul className="tags">
                    {appartment.tags.map((tag,index) => {
                        return <li key={index}>{tag}</li>
                    })}
                </ul>
                </div>
                <div className="rating-and-host">
                    <ul className="rating">
                        {[...Array(5)].map((star, index) => {

                            // full star
                            if (index + 1 <= appartment.rating) {
                                return <li key={index} ><img src={`${process.env.PUBLIC_URL}/images/star-full.png`} alt="star full" /></li>
                            }

                            // empty star
                            return <li key={index} ><img src={`${process.env.PUBLIC_URL}/images/star-empty.png`} alt="star empty" /></li>
                        })}
                    </ul>

                    <div className="host">
                        <figure>
                            <img src={appartment.host.picture} alt={appartment.host.name} />
                            <figcaption>
                                <span>{appartment.host.name.split(' ')[0]}</span>{' '}
                                <span>{appartment.host.name.split(' ')[1]}</span>
                            </figcaption>
                        </figure>
                    </div>

                </div>
            </section>

            <section className="description-and-equipments">
                <Collapsible buttonTitle="Description" content={appartment.description} />
                <Collapsible buttonTitle="Équipements" content={appartment.equipments} />
            </section>
        </div>
    )
}

export default AppartmentDetails
