import React, { PropTypes } from 'react';
import LazyLoad             from 'react-lazyload';
import styles               from '../scss/index.scss';

import { emojify } from 'react-emojione';

const ecfg = {
    convertShortnames: true,
    convertUnicode: true,
    convertAscii: true,
    style: {
        height: 24,
        top: -1,
    }
};

const GalleryImage = ({ image, index, sequence, type, width, height }) => {
    // Detect youtube videos
    if (image.description && image.description.indexOf('youtube') > -1) {
        return (
            <div>
                <div className={styles.sidebar}>
                </div>
                <div 
                    className={styles.embedContainer}
                >
                    <iframe
                        width="1280"
                        height="720"
                        src={image.description.split(' ').join('')}
                        frameBorder="0" 
                        data-allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                    />
                </div>
            </div>
        )
    }

    // Detect imgur videos
    if (type.indexOf('video') > -1) {
        return (
            <div className={styles.section}>
                <div className={styles.sidebar}>
                    {image.title ? <div className={styles.headline}>{emojify(image.title, ecfg)}</div> : null}
                    {image.description ? <div className={styles.subtitle}>{emojify(image.description, ecfg)}</div> : null}
                    {image.info ? <div className={styles.moreInfo}>{emojify(image.info, ecfg)}</div> : null}
                </div>
                <video width={width || 640} height={height || 480} className={styles.video} autoPlay="true" controls="true" loop="true">
                    <source src={image.link} type="video/mp4" />
                </video>
            </div>
        );
    }
    // JPG and GIFs
    return (
        <div className={styles.section}>
            <div className={styles.sidebar}>
                {image.title ? <div className={styles.headline}>{emojify(image.title, ecfg)}</div> : null}
                {image.description ? <div className={styles.subtitle}>{emojify(image.description, ecfg)}</div> : null}
                {image.info ? <div className={styles.moreInfo}>{emojify(image.info, ecfg)}</div> : null}
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
