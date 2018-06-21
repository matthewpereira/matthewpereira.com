import 'bootstrap/dist/css/bootstrap.min.css';
import styles           from './index.scss';

import React            from 'react';
import $                from 'jquery';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Email            from './Email.jsx';
import Intro            from './Intro.jsx';
import Gallery          from './Gallery.jsx';
import ScrollArrow      from './ScrollArrow.jsx';
import ScrollToTop      from './ScrollToTop.jsx';
import allowedAlbums    from './allowedAlbums.js';

const DEFAULTGALLERY = '6Hpyr';

import { withRouter } from "react-router";

const AppRouter = () => {
    return (
        <Router>
            <div>
                <ScrollToTop />
                <Route 
                    path={`/:albumId`}
                    component={App}
                />
                <Route 
                    exact
                    path={`/`}
                    component={App}
                />
            </div>
        </Router>
    )
}

export default AppRouter;

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: 'mail@matthewpereira.com',
            title: '',
            description: '',
            loadedImages: [],
            captions: false,
        };

        this.fetchImagesFromImgur = this.fetchImagesFromImgur.bind(this);
        this.validateAlbum = this.validateAlbum.bind(this);
    }

    validateAlbum = (albumId) => allowedAlbums.indexOf(albumId) > -1;

    fetchImagesFromImgur(albumId) {
        const id = albumId && this.validateAlbum(albumId) ? albumId : DEFAULTGALLERY;

        let self = this;
        let loadedImages = [];
        let title = '';
        let description = '';
        let captions = albumId ? 'bottom' : 'right';
        
        $.ajax({
            url: `https://api.imgur.com/3/album/${id}`,
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

    componentWillMount() {
        // Backwards compatibility for ?something paths
        const currentAlbum = Object.keys(this.props.match.params).length ?
            this.fetchImagesFromImgur(this.props.match.params.albumId) :
            this.props.location.search.slice(1);
        
        this.fetchImagesFromImgur(currentAlbum);
    }

    render() {
		return (
            <div>
                <Email email={this.state.email} />
                <Intro
                    title={this.state.title}
                    description={this.state.description}
                />
                <ScrollArrow show={this.state.loadedImages.length} />
                <Gallery 
                    images={this.state.loadedImages} 
                    captions={this.state.captions} 
                />
            </div>
        );
    }
}