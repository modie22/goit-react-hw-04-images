import s from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem';

function ImageGallery({ gallery, onOpenPicture }) {
  return (
    <ul className={s.gallery}>
      {gallery.map(picture => (
        <ImageGalleryItem
          key={picture.id}
          picture={picture}
          onOpenPicture={onOpenPicture}
        />
      ))}
    </ul>
  );
}


export default ImageGallery;
