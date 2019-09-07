import React               from 'react';
import { withRouter }      from 'react-router';

import AlbumList           from './AlbumList.jsx';
import Email               from './Email.jsx';
import Gallery             from './Gallery.jsx';
import Intro               from './Intro.jsx';
import ScrollArrow         from './ScrollArrow.jsx';

import allowedAlbums       from '../allowedAlbums.js';

import styles              from '../scss/index.scss';

import IMGUR_AUTHORIZATION from '../env';

const DEFAULTGALLERY = '6Hpyr';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: 'mail@matthewpereira.com',
            albumName: '',
            description: '',
            loadedImages: [],
            captions: false,
        };

        this.onScrollClick        = this.onScrollClick.bind(this);
        this.fetchImagesFromImgur = this.fetchImagesFromImgur.bind(this);
        this.validateAlbum        = this.validateAlbum.bind(this);
    }

    componentWillMount() {
        document.getElementById('app').classList.remove("app__loading");
        
        // Backwards compatibility for ?something paths
        const albumCode = Object.keys(this.props.match.params).length ?
            this.props.match.params.albumId :
            this.props.location.search.slice(1);
        
        if (!this.validateAlbum(albumCode)) {
            this.props.history.push('/');

            return this.fetchImagesFromImgur(DEFAULTGALLERY);
        }
        
        this.fetchImagesFromImgur(albumCode);
    }
    
    validateAlbum = albumId => Object.values(allowedAlbums).indexOf(albumId) > -1;

    styleCaptions = albumId => albumId !== DEFAULTGALLERY ? 'bottom' : 'right';

    formatTitle = title => title ? 
		`${title} - Matthew Pereira` : 
		'Matthew Pereira';


    hydrateGalleryState = (data, albumId) => {
            const captions = this.styleCaptions(albumId);
            const loadedImages = data.data.images;
            const description = data.data.description || '';
	
	    document.title = this.formatTitle(data.data.title);    
	    
	    const albumName = data.data.title || 'Matthew Pereira';

    	    this.setState({
	        loadedImages,
	        albumName,
	        description,
	        captions
	    });
	}

    fetchImagesFromImgur(albumId) {
        const details = { 
            headers: {
                'Authorization': IMGUR_AUTHORIZATION
            }
        }

        fetch(`https://api.imgur.com/3/album/${albumId}`, details)
            .then(data => data.json())
            .then(data => this.hydrateGalleryState(data, albumId))
            .catch(error => {
                console.error("Abort, abort!", error);
            });
    }

    onScrollClick = () => {
        const height = document.getElementsByClassName(styles.intro)[0].scrollHeight;
        const scrollTop = height + 35;

        document.body.scrollTop = document.documentElement.scrollTop = scrollTop;
    };

    render = () => (
        <div>
            <AlbumList allowedAlbums={allowedAlbums} />
            <Email email={this.state.email} />
            <Intro
                title={this.state.albumName}
                description={this.state.description}
            />
            <ScrollArrow 
                show={this.state.loadedImages.length}
                onClick={this.onScrollClick} />
            <Gallery 
                images={this.state.loadedImages} 
                captions={this.state.captions} 
            />
        </div>
    );
}

export default withRouter(App);
