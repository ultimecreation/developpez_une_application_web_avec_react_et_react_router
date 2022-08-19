import React from 'react'
import Slider from '../Slider/Slider';
import './Modal.scss'

const Modal = ({ handleClose, show, items , currentIndex}) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          <Slider slides={items} currentIndex={currentIndex}/>
          <button type="button" className="close-btn" onClick={handleClose}>
            X
          </button>
        </section>
      </div>
    );
  };

export default Modal
