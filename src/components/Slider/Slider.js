import React, { useEffect, useState } from 'react'
import './Slider.scss'

const Slider = (props) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(()=> {
        if(props.currentIndex){
            setCurrentIndex(props.currentIndex )
        }
    },[props.currentIndex])
    const switchToPrevSlide = () => {
        currentIndex - 1 < 0
            ? setCurrentIndex(props.slides.length - 1)
            : setCurrentIndex(currentIndex - 1)
    }

    const switchToNextSlide = () => {
        currentIndex + 1 > props.slides.length - 1
            ? setCurrentIndex(0)
            : setCurrentIndex(currentIndex + 1)
    }


    return (

        <div className='slider'>
            {
                props.slides.length > 1
                && <button onClick={switchToPrevSlide} className="prev-button">
                    <img src={`${process.env.PUBLIC_URL}/images/arrow-left.png`} alt="arrow left" />
                </button>
            }
            {
                props.slides.map((slide, index) => {
                    return <figure key={index} className={currentIndex === index ? 'active' : ''}>
                        <img src={slide} alt={`${index}`}/>
                    </figure>


                })
            }
            {
                props.slides.length > 1
                && <button onClick={switchToNextSlide} className="next-button">
                    <img src={`${process.env.PUBLIC_URL}/images/arrow-right.png`} alt="arrow right" />
                </button>
            }
        </div>
    )
}

export default Slider
