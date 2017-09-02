import React, { PropTypes } from 'react';
import styles   from './index.scss';
import LazyLoad from 'react-lazyload';

const GalleryImage = ({ image, index }) => {
  return (
    <div className={styles.section}>
      <div className={styles.sidebar}>
          {image.title ? <div
              className={styles.headline}
              data-aos="slide-up"
              data-aos-offset="225"
              >{image.title}</div> : null}
          {image.description ? <div
              className={styles.subtitle}
              data-aos="slide-up"
              data-aos-offset="225"
              >{image.description}</div> : null}
          {image.info ? <div
              className={styles.moreInfo}
              data-aos="slide-up"
              data-aos-offset="225"
              >{image.info}</div> : null}
      </div>
      <LazyLoad height={200} offset={2000}>
          <img
              src={image.link}
              // data-aos="fade-in"
              className={styles.image + ' ' + index}
              ></img>
      </LazyLoad>
    </div>
  )
};

GalleryImage.propTypes = {
  image: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

export default GalleryImage;
