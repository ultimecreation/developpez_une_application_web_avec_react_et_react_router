import './Home.scss'
import React, { useContext, useState } from 'react'
import Footer from '../../layout/Footer/Footer'
import Header from '../../layout/Header/Header'
import { AppartmentsContext } from '../../context/AppartmentsContext'
import AppartmentCard from '../../components/AppartmentCard/AppartmentCard'
import Modal from '../../components/Modal/Modal'

const Home = () => {
    const appartmentsContext = useContext(AppartmentsContext)
    const { appartments } = appartmentsContext

    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(0)

    const slides = appartments.reduce((accumulator,currentAppartment) => {
        accumulator.push(currentAppartment.cover)
        return accumulator
    },[])
    
    const showModal = () => {
        setModalIsOpen(true);
    };

    const hideModal = () => {
        setModalIsOpen(false);
    };
    return (
        <div className='container home'>
            <Header imgSource={`${process.env.PUBLIC_URL}/images/background.png`}/>
            <div className="appartment-container">
                {appartments.map((appartment,index) => {
                    return <AppartmentCard
                        id={appartment.id}
                        title={appartment.title}
                        cover={appartment.cover}
                        handleShowModal={showModal}
                        currentIndex={index}
                        handleSetcurrentIndex={setCurrentIndex}
                        key={index}
                    />

                })
                }
            </div>
            <Footer />
            <Modal show={modalIsOpen} handleClose={hideModal} items={slides} currentIndex={currentIndex}/>
        </div>
    )
}

export default Home
