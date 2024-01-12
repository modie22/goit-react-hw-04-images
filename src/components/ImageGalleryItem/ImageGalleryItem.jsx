import Modal from '../Modal/Modal';
import { Component } from 'react';
import css from './ImageGalleryItem.module.css'

class ImageGalleryItem extends Component {
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

