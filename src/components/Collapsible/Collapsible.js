import React, { useState } from 'react'
import './Collapsible.scss'

const Collapsible = (props) => {
    const [isOpen, setIsOpen] = useState(false)
    const [icon, setIcon] = useState({
        src: `${process.env.PUBLIC_URL}/images/arrow-bottom.png`,
        alt: "arrow bottom"
    })


    const handleToggle = () => {
        setIsOpen(!isOpen)
        isOpen === false
            ? setIcon({
                src: `${process.env.PUBLIC_URL}/images/arrow-top.png`,
                alt: "arrow top"
            })
            : setIcon({
                src: `${process.env.PUBLIC_URL}/images/arrow-bottom.png`,
                alt: "arrow bottom"
            })
    }

    return (
        <div className='collapsible'>
            <button onClick={handleToggle}>
                <span>{props.buttonTitle}</span>
                <span><img src={icon.src} alt={icon.alt} /></span>
            </button>
            <div className="content">
                {
                    typeof props.content === 'string'
                    && <p className={isOpen === true ? 'open' : 'close'}>{props.content}</p>
                }
                {
                    typeof props.content === 'object'
                    && <ul className={isOpen === true ? 'open' : 'close'}>
                        {props.content.map((item, index) => {
                            return <li key={index}>{item}</li>
                        })}
                    </ul>


                }
            </div>


        </div>
    )
}

export default Collapsible
