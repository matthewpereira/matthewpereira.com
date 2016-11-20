import 'bootstrap/dist/css/bootstrap.min.css';
import styles       from './index.scss';
import React        from 'react';
import Intro        from './Intro.jsx';
import Gallery      from './Gallery.jsx';
import selectedImages from './selectedImages.js';
import ScrollArrow  from './ScrollArrow.jsx';
import $            from 'jquery';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showScroll: true};
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll(event) {
        let scrollTop = event.srcElement.body.scrollTop;

        if(scrollTop > 500){
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
				<Intro/>
                { this.state.showScroll ? <ScrollArrow />: null }
				<Gallery images={selectedImages} />
            </div>
        )
    }
}
