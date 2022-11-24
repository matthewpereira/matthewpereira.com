import IMGUR_AUTHORIZATION from '../env';

const DEFAULTGALLERY = '6Hpyr';

const IN_CASE_OF_ERROR = {
	"data": {
		"id": "6Hpyr",
		"images": [],
	}
}

const styleCaptions = albumId => {
    return (!albumId || albumId === DEFAULTGALLERY) ?
        'right' :
        'bottom';
};

const getGalleryImages = async (albumId) => { 
    const details = {
        headers: {
            'Authorization': IMGUR_AUTHORIZATION
        }
    }

    return await fetch(`https://api.imgur.com/3/album/${albumId}`, details)
        .then(data => data.json())
        .then(data => hydrateGalleryState(data))
        .catch(error => {
            console.error("Abort, abort!", error);
            hydrateGalleryState(IN_CASE_OF_ERROR, albumId);
        });
}

const hydrateGalleryState = (data, albumId) => {
    const captions = styleCaptions(data.data.id);
    const loadedImages = data.data.images;
    const description = data.data.description || '';

    const albumName = data.data.title || 'Matthew Pereira';

    return {
        albumName,
        captions,
        description, 
        loadedImages, 
    }
}

export default getGalleryImages;
