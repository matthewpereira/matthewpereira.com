import React  from 'react';

// Preload the first image in the next set when the user reaches the pagination component
const PreloadImage = ({ image }) => (
    <img
        alt="Preloading..."
        key={image.id}
        src={image.link}
        style={{
            height: 1, 
            width: 1, 
            opacity: 0.1,
            position: 'absolute',
            left: -1,
            bottom: -100
        }}
    />
);

export default PreloadImage;