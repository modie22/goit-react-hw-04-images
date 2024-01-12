import css from './Modal.module.css';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

const ModalRoot = document.querySelector('#ModalRoot');

function Modal ({onClose,image}) {

  const keyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };
  const onOverlayClose = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };
  useEffect(()=>{
    window.addEventListener('keydown',  keyDown);
    return () => {window.removeEventListener('keydown', keyDown);}
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])


    const { largeImageURL } = image;
    return createPortal(
      <div onClick={onOverlayClose} className={css.overlay}>
        <div className={css.modal}>
          <img src={largeImageURL} alt="img" />
        </div>
      </div>,
      ModalRoot
    );
  
}

export default Modal;

/* 
class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.keyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.keyDown);
  }

  keyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  onOverlayClose = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    const { largeImageURL } = this.props.image;
    return createPortal(
      <div onClick={this.onOverlayClose} className={css.overlay}>
        <div className={css.modal}>
          <img src={largeImageURL} alt="img" />
        </div>
      </div>,
      ModalRoot
    );
  }
}

export default Modal;
 */