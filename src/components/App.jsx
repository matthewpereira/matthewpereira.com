import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router';

import HomeWrapper from '../views/HomeWrapper.jsx';
import AboutWrapper from '../views/AboutWrapper.jsx';

import getGalleryImages from './getGalleryImages.jsx';
import validateAlbum from '../helpers/validateAlbum.js';

const DEFAULTGALLERY = '6Hpyr';

const formatTitle = title => title && title !== 'Matthew Pereira' ?
    `${title} - Matthew Pereira` :
    'Matthew Pereira';

const App = (props) => {
    document.getElementById('app').classList.remove("app__loading");

    const [galleryObject, setGalleryObject] = useState({});
    const [aboutVisible, setAboutVisible] = useState(false);

    useEffect(() => {

        let counter = 0;

        async function getGalleryObject(props) {
            // Backwards compatibility for ?something paths
            const albumCode = Object.keys(props.match.params).length ?
                props.match.params.albumId :
                props.location.search.slice(1);

            if (counter === 0) {
                counter = 1;

                if (!validateAlbum(albumCode) || albumCode === DEFAULTGALLERY) {
                    props.history.push('/');

                    return setGalleryObject(await getGalleryImages(DEFAULTGALLERY));
                }

                return setGalleryObject(await getGalleryImages(albumCode));
            }

        }

        setGalleryObject(getGalleryObject(props).then(data => data));

    }, [])

    const onScrollClick = (event, direction = 'forward') => {
        const height = window.innerHeight;
        const scrollTop = (direction === 'forward') ? height + 35 : - height + 35;

        document.body.scrollTop = document.documentElement.scrollTop = scrollTop;
    };

    const handleAboutClick = () => {
        setAboutVisible(!aboutVisible);
    }

    if (aboutVisible) {
        return (
            <AboutWrapper
                aboutVisible
                handleAboutClick={handleAboutClick}
            />
        );
    }

    return (
        <HomeWrapper
            galleryObject={galleryObject}
            onScrollClick={onScrollClick}
            handleAboutClick={handleAboutClick}
        />
    );
}

export default withRouter(App);
