import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import s from './Modal.module.css';

const rootModal = document.querySelector('#rootModal');

function Modal({ onClose, children }) {
  useEffect(() => {
    window.addEventListener('keydown', handleKeydown);
    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleKeydown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const handleOverlayClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <div className={s.overlay} onClick={handleOverlayClick}>
      <div className={s.modal}> {children}</div>
    </div>,
    rootModal,
  );
}

export default Modal;
