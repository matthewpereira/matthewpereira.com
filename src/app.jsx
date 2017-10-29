import 'bootstrap/dist/css/bootstrap.min.css';
import styles           from './index.scss';
import React            from 'react';
import Email            from './Email.jsx';
import Intro            from './Intro.jsx';
import Gallery          from './Gallery.jsx';
import ScrollArrow      from './ScrollArrow.jsx';
import $                from 'jquery';

const DEFAULTGALLERY = '6Hpyr';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: 'mail@matthewpereira.com',
            title: '',
            description: '',
            selectedImages: [],
            captions: false,
        };

        this.fetchImagesFromImgur = this.fetchImagesFromImgur.bind(this);
    }

    fetchImagesFromImgur(albumID) {
        var self = this;
        let selectedImages = [];
        let title = '';
        let description = '';
        let captions = albumID ? 'bottom' : 'right';

        $.ajax({
            url: "https://api.imgur.com/3/album/" + (albumID || DEFAULTGALLERY),
            headers: {
                'Authorization': '***REMOVED***'
            },
            type: 'GET',
            dataType: 'json',
            success: function(data) {
                title = data.data.title ? data.data.title : 'Matthew Pereira';
                selectedImages = data.data.images;
                description = data.data.description ? data.data.description : '';
                document.title = data.data.title ? data.data.title : 'Matthew Pereira';
            },
            error: function() {
                console.log("Abort, abort!");
            }
        }).done(function() {
            self.setState({
                selectedImages,
                title,
                description,
                captions
            });
        });
    }

    componentDidMount() {
        this.fetchImagesFromImgur(window.location.search.substr(1, window.location.search.length));
    }

	render() {
		return (
			<div>
                <Email email={this.state.email} />
				<Intro
                    title={this.state.title}
                    description={this.state.description}
                />
                { this.state.selectedImages.length ? <ScrollArrow /> : null }
				<Gallery images={this.state.selectedImages} captions={this.state.captions} />
            </div>
        )
    }
}
