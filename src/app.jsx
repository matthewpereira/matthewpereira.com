import 'bootstrap/dist/css/bootstrap.min.css';
import styles           from './index.scss';
import React            from 'react';
import Email            from './Email.jsx';
import Intro            from './Intro.jsx';
import Gallery          from './Gallery.jsx';
import ScrollArrow      from './ScrollArrow.jsx';
import $                from 'jquery';

const DEFAULTGALLERY = '6Hpyr';

const debounce = (func, wait, immediate) => {
	var timeout;
	return function() {
		var context = this, args = arguments;
		clearTimeout(timeout);
		timeout = setTimeout(function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		}, wait);
		if (immediate && !timeout) func.apply(context, args);
	};
}

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showScroll: true,
            email: 'mail@matthewpereira.com',
            title: 'Matthew Pereira',
            description: 'Toronto, Canada',
            selectedImages: [],
            captions: false,
        };

        this.handleScroll = this.handleScroll.bind(this);
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
                title = data.data.title;
                selectedImages = data.data.images;
                description = data.data.description;
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
        window.addEventListener('scroll', debounce(this.handleScroll));
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', debounce(this.handleScroll));
    }

    handleScroll(event) {
        let scrollTop = event.srcElement.body.scrollTop;

        if (scrollTop > window.innerHeight) {
            this.setState({
              showScroll: false
            });
        } else {
            this.setState({
              showScroll: true
            });
        }
    }

	render() {
		return (
			<div>
                <Email email={this.state.email} />
				<Intro
                    title={this.state.title}
                    description={this.state.description}
                />
                { this.state.showScroll ? <ScrollArrow /> : null }
				<Gallery images={this.state.selectedImages} captions={this.state.captions} />
            </div>
        )
    }
}
