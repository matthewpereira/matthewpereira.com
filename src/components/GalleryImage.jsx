import React                from 'react';
import LazyLoad             from 'react-lazyload';
import Section              from './Section.jsx';
import styles               from './GalleryImage.module.scss';

import parseStringForLinks  from '../helpers/textLinks';

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

const GalleryImage = ({ image, index, type, width, height, captions }) => {
    // Detect youtube videos
    if (image.description && image.description.indexOf('youtube') > -1) {
        return (
            <Section type="youtube">
                <div className={styles.sidebar}>
                </div>
                <div 
                    className={styles.embedContainer}
                >
                    <iframe
                        title="Video"
                        width="1280"
                        height="720"
                        src={image.description.split(' ').join('')}
                        frameBorder="0" 
                        data-allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                    />
                </div>
            </Section>
        )
    }

    // Detect imgur videos
    if (type.indexOf('video') > -1) {
        return (
            <Section type="video" captions={captions}>
                <div className={styles.sidebar + ' ' + styles[captions]}>
                    {image.title ? <div className={styles.headline}>{emojify(image.title, ecfg)}</div> : null}
                    {image.description ? <div className={styles.subtitle}>{emojify(image.description, ecfg)}</div> : null}
                    {image.info ? <div className={styles.moreInfo}>{emojify(image.info, ecfg)}</div> : null}
                </div>
                <video width={width || 640} height={height || 480} className={styles.galleryVideo} autoPlay="true" controls="true" loop="true">
                    <source src={image.link} type="video/mp4" />
                </video>
            </Section>
        );
    }
    // JPG and GIFs
    return (
        <Section type="image" captions={captions}>
            <div className={styles.sidebar + ' ' + styles[captions]}>
                {image.title ? <div className={styles.headline}>{emojify(image.title, ecfg)}</div> : null}
                {image.description ? <div className={styles.subtitle}>{parseStringForLinks(emojify(image.description, ecfg))}</div> : null}
                {image.info ? <div className={styles.moreInfo}>{emojify(image.info, ecfg)}</div> : null}
            </div>
            <LazyLoad height={window.innerHeight} offset={3000}>
                <img
                    alt="-w"
                    src={image.link}
                    className={styles.galleryImg + ' ' + index}
                />
            </LazyLoad>
        </Section>
    )
};

export default GalleryImage;
