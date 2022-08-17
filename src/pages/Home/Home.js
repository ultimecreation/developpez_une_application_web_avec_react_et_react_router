import './Home.scss'
import React, { useContext } from 'react'
import Footer from '../../layout/Footer/Footer'
import Header from '../../layout/Header/Header'
import {AppartmentsContext} from '../../context/AppartmentsContext'
import AppartmentCard from '../../components/AppartmentCard/AppartmentCard'

const Home = () => {
    const appartmentsContext = useContext(AppartmentsContext)
    const {appartments} = appartmentsContext

    console.log(appartments)
    return (
        <div className='container'>
            <Header />
            <div className="appartment-container">
                { appartments.map(appartment => {
                   return <AppartmentCard 
                            id={appartment.id}
                            title={appartment.title} 
                            cover={appartment.cover}
                        />
                   
                })
                }
                </div>
            <Footer />
        </div>
    )
}

export default Home
