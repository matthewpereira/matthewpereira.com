import React            from 'react';
import $                from 'jquery';
import { withRouter }   from 'react-router';

import Email            from './Email.jsx';
import Intro            from './Intro.jsx';
import Gallery          from './Gallery.jsx';
import ScrollArrow      from './ScrollArrow.jsx';

import allowedAlbums    from '../allowedAlbums.js';

const DEFAULTGALLERY = '6Hpyr';
const BODYELEMENT = $("html, body");

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: 'mail@matthewpereira.com',
            title: '',
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

    validateAlbum = (albumId) => allowedAlbums.indexOf(albumId) > -1;

    fetchImagesFromImgur(albumId) {
        let self = this;
        let loadedImages = [];
        let title = '';
        let description = '';
        let captions = albumId !== DEFAULTGALLERY ? 'bottom' : 'right';
        
        $.ajax({
            url: `https://api.imgur.com/3/album/${albumId}`,
            headers: {
                'Authorization': '***REMOVED***'
            },
            type: 'GET',
            dataType: 'json',
            success: function(data) {
                title = data.data.title ? data.data.title : 'Matthew Pereira';
                loadedImages = data.data.images;
                description = data.data.description || '';
                document.title = title !== 'Matthew Pereira' ? title + ' - Matthew Pereira' : title;
            },
            error: function() {
                console.log("Abort, abort!");
            }
        }).done(function() {
            self.setState({
                loadedImages,
                title,
                description,
                captions
            });
        });
    }

    onScrollClick = () => {
        var height = $('[data-reactroot]').children().children('div:nth-of-type(2)').innerHeight();
        
        BODYELEMENT.animate({
            scrollTop: height + 35
        }, 500, 'swing');
    };

    render() {
		return (
            <div>
                <Email email={this.state.email} />
                <Intro
                    title={this.state.title}
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
}

export default withRouter(App);