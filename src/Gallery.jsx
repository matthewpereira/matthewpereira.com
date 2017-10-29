import React, { PropTypes }    from 'react';
import styles   from './index.scss';
import GalleryImage from './GalleryImage.jsx';

const Gallery = ({ images, captions }) => {
  return (
    <div className={styles.gallery} data-captions={captions}>
      {images.map((image, index) => {
        let sequence;
        
        if (image.title && image.title.indexOf('#') > -1) {
          const current = image.title.substr(1,1);
          const total = image.title.substr(3,1);
          
          if (current === '1') {
            sequence = 'start';
          } else if (current === total) {
            sequence = 'end';
          } else {
            sequence = 'middle';
          }
          image.title = image.title.replace(/.{4}/, '')
        }
        
        return <GalleryImage key={index} image={image} index={index} sequence={sequence} type={image.type} />
      })}
    </div>
  )
}

Gallery.propTypes = {
  images: PropTypes.array.isRequired,
}

export default Gallery;
