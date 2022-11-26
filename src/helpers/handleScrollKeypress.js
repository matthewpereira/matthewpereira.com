const findAmountToScroll = (gallerySectionHeight) => {
    // Find current scroll distance from top of doc
    const currentScrollTop = document.documentElement.scrollTop || document.body.scrollTop;

    // Intro section is 100vh
    const introSectionHeight = window.innerHeight;

    // Gallery sections are 110vh
    const firstGallerySectionHeight = window.innerHeight * 1.1 + 50;

    // Find number of gallery sections between first section and current position
    const scrollMultiplier = Math.round(currentScrollTop / ((window.innerHeight * 1.1 ) + 50)) - 1;

    // If at the top of the doc, just move one screen down
    if (currentScrollTop < introSectionHeight + 10) {
        return introSectionHeight;
    }

    // If at the start of the gallery, add height of first gallery section
    if (
        currentScrollTop > introSectionHeight && 
        currentScrollTop < introSectionHeight + firstGallerySectionHeight
        ) {
        return introSectionHeight + firstGallerySectionHeight;
    }

    // Otherwise, add the whole gallery height as well
    if (currentScrollTop > introSectionHeight + firstGallerySectionHeight) {
        const galleryHeight = gallerySectionHeight * scrollMultiplier;
        
        return introSectionHeight + firstGallerySectionHeight + galleryHeight;
    }
}

const scrollToTarget = (newScrollTop) => document.body.scrollTop = document.documentElement.scrollTop = newScrollTop;

const handleScrollKeypress = (event) => {
    const gallerySectionHeight = window.innerHeight * 1.1 + 50;
    
    const amountToScroll = findAmountToScroll(gallerySectionHeight)

    if (event.code === "ArrowDown") {
        scrollToTarget(amountToScroll - 10);
    }
    if (event.code === "ArrowUp") {
        scrollToTarget(amountToScroll - gallerySectionHeight - gallerySectionHeight + 90);
    }

}

export default handleScrollKeypress;