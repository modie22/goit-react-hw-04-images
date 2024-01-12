import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css'

function ImageGallery({ items }) {
  return (
    <>
      <ul className={css.imageGallery}>
        {items.map(item => (
          <ImageGalleryItem key={item.id} item={item} />
        ))}
      </ul>
    </>
  );
}

export default ImageGallery;
