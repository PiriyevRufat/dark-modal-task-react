import React from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, children }) => {
  const handleModalClick = () => {
    onClose();
  };
  if (!isOpen) return null;
  return (
    <div className="modal-overlay" onClick={handleModalClick}>
      <div className="modal-content">
        <button className="close" onClick={onClose}>×</button>
        {children}
      </div>
    </div>
  );
};
export default Modal;
