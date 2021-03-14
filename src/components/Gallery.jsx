import React          from 'react';
import { withRouter } from 'react-router';

import GalleryImage   from './GalleryImage.jsx';
import Pagination     from './Pagination.jsx';
import ScrollToTop    from './ScrollToTop';
import PreloadImage   from './PreloadImage';

import styles         from './Gallery.module.scss';

const IMAGES_PER_PAGE = 50;  

const sliceToIndex = (images, index) => images.slice(index, index + 1);

const Gallery = ({ images, captions, location }) => {
    if (!images || !images.length) {
        return null;
    }
  
    const hash = location.hash.replace(/#/, '');
    const pageNumber = hash.length && hash > 0 ? hash : 1;

    let currentImages = images;
    let preloadImages = [];

    // Split big lots of images, and use page numbers to choose which set to display
    if (images.length > IMAGES_PER_PAGE) {
        const start = 0 + pageNumber * IMAGES_PER_PAGE - IMAGES_PER_PAGE;

        currentImages = images.slice(start, start + IMAGES_PER_PAGE);
        
        const laterImagesToPreload = (images.length > start + IMAGES_PER_PAGE);
        const earlierImagesToPreload = (start !== 0);

        if (laterImagesToPreload) {
            preloadImages.push(...[
                sliceToIndex(images, start + IMAGES_PER_PAGE)[0], 
            ]);
        }

        if (earlierImagesToPreload) {
            preloadImages.push(...[
                sliceToIndex(images, start - 1)[0]
            ]);
        }
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
            {preloadImages ? 
                preloadImages.map((image, index) => <PreloadImage key={index} image={image} />) :
                null
            }
            <Pagination pageCount={pageCount} currentPage={pageNumber} />
            <ScrollToTop />
        </div>
    )
}

export default withRouter(Gallery);
