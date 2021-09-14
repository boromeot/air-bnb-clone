import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import './Form.css';

function LoginFormModal({ className, title, children }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <span onClick={() => setShowModal(true) } className={className}>{title}</span>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          {children}
        </Modal>
      )}
    </>
  );
}

export default LoginFormModal;
