import styles   from './index.scss';
import React, { PropTypes }    from 'react';
import LazyLoad from 'react-lazyload';

const Gallery = ({ images }) => {
  const makeImage = (image, index) => {
    return (
      <div className={styles.section} key={'gallery' + index} >
        <div className={styles.sidebar}>
            <div
                className={styles.headline}
                data-aos="slide-up"
                data-aos-offset="200"
                >{image.title}</div>
            <div
                className={styles.subtitle}
                data-aos="slide-up"
                data-aos-offset="200"
                >{image.subtitle}</div>
            <div
                className={styles.moreInfo}
                data-aos="slide-up"
                data-aos-offset="200"
                >{image.info}</div>
        </div>
        <LazyLoad height={200} offset={300}>
            <img
                src={image.src}
                data-aos="fade-in"
                className={styles.image + ' ' + index}
                ></img>
        </LazyLoad>
      </div>
    )
  };

  return (
    <div className={styles.gallery}>
      {images.map(makeImage)}
    </div>
  )
}

Gallery.propTypes = {
  images: PropTypes.array.isRequired,
}

export default Gallery;
