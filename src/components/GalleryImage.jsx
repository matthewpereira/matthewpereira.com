import React, { PropTypes } from 'react';
import LazyLoad             from 'react-lazyload';
import styles               from '../scss/index.scss';

const GalleryImage = ({ image, index, sequence, type, width, height }) => {
    // Detect videos
    if (type.indexOf('video') > -1) {
        return (
            <div className={styles.section}>
                <div className={styles.sidebar}>
                    {image.title ? <div className={styles.headline}>{image.title}</div> : null}
                    {image.description ? <div className={styles.subtitle}>{image.description}</div> : null}
                    {image.info ? <div className={styles.moreInfo}>{image.info}</div> : null}
                </div>
                <video width={width || 640} height={height || 480} className={styles.video} autoPlay="true" loop="true">
                    <source src={image.link} type="video/mp4" />
                </video>
            </div>
        );
    }
    // JPG and GIFs
    return (
        <div className={styles.section}>
            <div className={styles.sidebar}>
                {image.title ? <div className={styles.headline}>{image.title}</div> : null}
                {image.description ? <div className={styles.subtitle}>{image.description}</div> : null}
                {image.info ? <div className={styles.moreInfo}>{image.info}</div> : null}
            </div>
            <LazyLoad height={window.innerHeight} offset={3000}>
                <img
                    src={image.link}
                    className={styles.image + ' ' + index}
                />
            </LazyLoad>
        </div>
    )
};

GalleryImage.propTypes = {
    image: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
};

export default GalleryImage;
