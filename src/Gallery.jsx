import React, { PropTypes }    from 'react';
import styles   from './index.scss';
import GalleryImage from './GalleryImage.jsx';

const Gallery = ({ images, captions }) => {
  return (
    <div className={styles.gallery} data-captions={captions}>
      {images.map((image, index) => <GalleryImage key={index} image={image} index={index} />)}
    </div>
  )
}

Gallery.propTypes = {
  images: PropTypes.array.isRequired,
}

export default Gallery;
