import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import './Form.css';

function LoginFormModal({ className, title, children }) {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = e => {
    e.stopPropagation();
    setShowModal(prev => !prev);
  }

  return (
    <>
      <span onClick={ toggleModal } className={className}>{title}</span>
      {showModal && (
        <Modal onClose={ toggleModal }>
          {children}
        </Modal>
      )}
    </>
  );
}

export default LoginFormModal;
