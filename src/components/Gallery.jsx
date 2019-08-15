import React          from 'react';
import { withRouter } from 'react-router';

import GalleryImage   from './GalleryImage.jsx';
import Pagination     from './Pagination.jsx';
import ScrollToTop    from './ScrollToTop';
import PreloadImage   from './PreloadImage';

import styles         from '../scss/index.scss';

const IMAGES_PER_PAGE = 50;  

const Gallery = ({ images, captions, location }) => {
    if (!images.length) {
        return null;
    }
  
    const hash = location.hash.replace(/#/, '');
    const pageNumber = hash.length && hash > 0 ? hash : 1;

    let currentImages = images;
    let preloadImage = [];

    // Split big lots of images, and use page numbers to choose which set to display
    if (images.length > IMAGES_PER_PAGE) {
        let start = 0 + pageNumber * IMAGES_PER_PAGE - IMAGES_PER_PAGE;

        currentImages = images.slice(start, start + IMAGES_PER_PAGE);
        preloadImage = images.slice(start + IMAGES_PER_PAGE, start + IMAGES_PER_PAGE + 1);
    }

    const pageCount = Math.ceil(images.length / IMAGES_PER_PAGE);
    
    return (
        <div className={styles.gallery} >
            {currentImages.map((image, index) => 
                <GalleryImage
                    key={index}
                    image={image}
                    index={index}
                    type={image.type}
                    width={image.width}
                    height={image.height}
                    captions={captions}
                />
            )}
            {preloadImage.length ? <PreloadImage image={preloadImage[0]} /> : null}
            <Pagination pageCount={pageCount} currentPage={pageNumber} />
            <ScrollToTop />
        </div>
    )
}

export default withRouter(Gallery);
