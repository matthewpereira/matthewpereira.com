import React               from 'react';
import { withRouter }      from 'react-router';

import AboutPage           from './AboutPage.jsx';
import AlbumList           from './AlbumList.jsx';
import SidebarButton       from './SidebarButton.jsx';
import Gallery             from './Gallery.jsx';
import Intro               from './Intro.jsx';
import ScrollArrow         from './ScrollArrow.jsx';

import allowedAlbums       from '../allowedAlbums.js';

import IMGUR_AUTHORIZATION from '../env';

import styles from './App.module.scss';

const DEFAULTGALLERY = '6Hpyr';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: 'mailto:mail@matthewpereira.com',
            albumName: '',
            description: '',
            loadedImages: [],
            captions: false,
            aboutVisible: false
        };

        this.onScrollClick        = this.onScrollClick.bind(this);
        this.fetchImagesFromImgur = this.fetchImagesFromImgur.bind(this);
        this.validateAlbum        = this.validateAlbum.bind(this);
        this.handleAboutClick     = this.handleAboutClick.bind(this);
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
        const height = window.innerHeight;
        const scrollTop = height - 35;

        document.body.scrollTop = document.documentElement.scrollTop = scrollTop;
    };

    handleAboutClick = () => {
        this.setState({
            aboutVisible: !this.state.aboutVisible
        });
    }

    render = () => this.state.aboutVisible ? (
        <div>
            <div className={styles.sidebar}>
                <SidebarButton 
                    hyperlink={this.state.email}
                    label="EMAIL"
                    target="_blank" 
                />
                <SidebarButton 
                    onClick={this.handleAboutClick}
                    label="PHOTOGRAPHY"
                />
            </div>
            <AboutPage 
                handleClick={this.handleAboutClick}
                visible={this.state.aboutVisible} 
            />
        </div>
        ) : (
        <div>
            <AlbumList allowedAlbums={allowedAlbums} />
            <div className={styles.sidebar}>
                <SidebarButton 
                    hyperlink={this.state.email}
                    label="EMAIL"
                    target="_blank" 
                />
                <SidebarButton 
                    onClick={this.handleAboutClick}
                    label="ABOUT"
                />
            </div>
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
