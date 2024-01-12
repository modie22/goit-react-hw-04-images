import Modal from '../Modal/Modal';
import { useState } from 'react';
import css from './ImageGalleryItem.module.css'

function ImageGalleryItem ({item}) {

  const [shownModal,setShownModal]= useState(false);
  const onModal = () => {
    setShownModal(state=>!state)
  };
  
    const { webformatURL } = item;
    return (
      <li className={css.imageGalleryItem}>
        <img
          onClick={onModal}
          className={css.imageGalleryItemImage}
          src={webformatURL}
          alt="img"
        />
        {shownModal && <Modal onClose={onModal} image={item} />}
      </li>
    );
  
}

export default ImageGalleryItem;

/* class ImageGalleryItem extends Component {
  state = {
    shownModal: false,
  };
  onModal = () => {
    this.setState(({ shownModal }) => ({ shownModal: !shownModal }));
  };
  render() {
    const { item } = this.props;
    const { webformatURL } = item;
    return (
      <li className={css.imageGalleryItem}>
        <img
          onClick={this.onModal}
          className={css.imageGalleryItemImage}
          src={webformatURL}
          alt="img"
        />
        {this.state.shownModal && <Modal onClose={this.onModal} image={item} />}
      </li>
    );
  }
}

export default ImageGalleryItem;
 */