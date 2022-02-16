import React from "react";

const Modal = ({ children, isOpen, close }) => {
    if (!isOpen) return null;

    return (
        <div className="player-wrapper">
            <button className="btn modal-close" onClick={close}>X</button>
            {children}
        </div>
    );
};

export default Modal;
