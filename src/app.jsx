import 'bootstrap/dist/css/bootstrap.min.css';
import styles           from './index.scss';
import React            from 'react';
import Email            from './Email.jsx';
import Intro            from './Intro.jsx';
import Gallery          from './Gallery.jsx';
import ScrollArrow      from './ScrollArrow.jsx';
import $                from 'jquery';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showScroll: true,
            email: 'mail.matthewpereira.com',
            selectedImages: [],
            fetched: false
        };
        this.handleScroll = this.handleScroll.bind(this);
        this.fetchFromImgur = this.fetchFromImgur.bind(this);
    }

    fetchFromImgur(albumID) {
        var self = this;
        if (!self.state.fetched) {
            let images = [];
            
            $.ajax({
                url: "https://api.imgur.com/3/album/" + albumID + "/images",
                headers: {
                    'Authorization': '***REMOVED***'
                },
                type: 'GET',
                dataType: 'json',
                success: function(data) {
                    images = data.data;
                },
                error: function() {
                    console.log("Abort, abort!");
                }
            }).done(function() {
                self.setState({
                    selectedImages: images,
                    fetched: true
                });
            });
        }
    }
    componentDidMount() {
        this.fetchFromImgur('6Hpyr');
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUpdate() {
        
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
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
				<Intro/>
                { this.state.showScroll ? <ScrollArrow /> : null }
				<Gallery images={this.state.selectedImages} />
            </div>
        )
    }
}
