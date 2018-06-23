import React        from 'react';
import {withRouter} from 'react-router';
import $            from 'jquery';

import debounce     from '../helpers/debounce.js';
import styles       from '../scss/index.scss';

const body = $("html, body");

// Scroll restoration based on
// https://reacttraining.com/react-router/web/guides/scroll-restoration.
const ScrollToTop = withRouter(class ScrollToTopWithoutRouter extends React.Component {
    componentWillMount() {
        window.addEventListener('scroll', this.toggleScrollToTopLink());
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.toggleScrollToTopLink());
    }
    
    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            this.scrollToTop(true);
        }
    }

    toggleScrollToTopLink = () => debounce(function() {
        const link = $('[data-scrolltarget]');

        const scrolledPastIntro = $(window).scrollTop() > 1000;
        
        return (scrolledPastIntro) ? 
            $(link).addClass(styles.scrollToTopLink_Visible) :
            $(link).removeClass(styles.scrollToTopLink_Visible);
    }, 250);
    
    
    scrollToTop(fadeIn = false) {
        const introHeight = $('[data-reactroot]')
            .children()
            .children('div:nth-of-type(2)')
            .innerHeight();
    
        const addFadeClass = fadeIn === true ? styles.bodyUpdating : '';

        return body.addClass(addFadeClass)
            .animate({
                scrollTop: introHeight + 30
            }, 1000, 'swing', () => body.removeClass(addFadeClass)
        );
    }
    
    render() {
        return <div className={styles.scrollToTopLink} data-scrollTarget onClick={this.scrollToTop} />
    }
});

export default ScrollToTop;