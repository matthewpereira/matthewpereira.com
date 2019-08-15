import React  from 'react';
import styles from '../scss/index.scss';

// Preload the first image in the next set when the user reaches the pagination component
const PreloadImage = ({ image }) => {
    return (
        <img
            alt="-"
            src={image.link}
            className={styles.image}
            style={{
                height: 0, 
                width: 0, 
                opacity: 0
            }}
        />
    );
}

export default PreloadImage;