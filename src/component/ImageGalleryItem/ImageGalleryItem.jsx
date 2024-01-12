
import s from './ImageGalleryItem.module.css';

function ImageGalleryItem({ picture, onOpenPicture }) {
  return (
    <li
      className={s.item}
      onClick={() => {
        onOpenPicture(picture);
      }}
    >
      <img src={picture.webformatURL} alt={picture.tags} className={s.image} />
    </li>
  );
}

export default ImageGalleryItem;
