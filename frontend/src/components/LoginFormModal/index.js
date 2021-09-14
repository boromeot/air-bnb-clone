import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';
import './LoginForm.css';

function LoginFormModal({ className }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <span onClick={() => setShowModal(true) } className={className}>Log In</span>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <LoginForm />
        </Modal>
      )}
    </>
  );
}

export default LoginFormModal;
