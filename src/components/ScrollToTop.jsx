import React          from 'react';
import { withRouter } from 'react-router';

import debounce       from '../helpers/debounce.js';
import styles         from './ScrollToTop.module.scss';

const BODYELEMENT = document.getElementsByTagName("BODY")[0];

const hasClass = (haystack, needle) => haystack.indexOf(needle) > -1;

const addClass = (element, classToAdd) => {
    const classString = element.className;

    const newClass = !hasClass(classString, classToAdd) ? 
        classString.concat(' ').concat(classToAdd) :
        classString;
    
    return element.className = newClass;
}

const removeClass = (element, classToRemove) => {
    const classString = element.className;

    const newClass = hasClass(classString, classToRemove) ? 
        classString.replace(classToRemove, '') :
        classString;
    
    return element.className = newClass;
}

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
        const link = document.querySelector('[data-scrolltarget]');

        const scrolledPastIntro = window.scrollY || window.scrollTop || document.getElementsByTagName("html")[0].scrollTop > 1000;
        
        scrolledPastIntro ? 
            addClass(link, styles.scrollToTopLink_Visible) :
            removeClass(link, styles.scrollToTopLink_Visible);

    }, 250);
    
    scrollToTop(fadeIn = false) {
        const addFadeClass = fadeIn ? 
        styles.bodyUpdating : 
        '';
        
        Promise.resolve()
            .then(() => {
                addClass(BODYELEMENT, addFadeClass);
            })
            .then(x => new Promise(resolve => setTimeout(() => resolve(x), 250)))
            .then(() => {
                const height = window.innerHeight;
                const scrollTop = height + 35;

                document.body.scrollTop = document.documentElement.scrollTop = scrollTop;
            })
            .then(x => new Promise(resolve => setTimeout(() => resolve(x), 750)))
            .then(() => {
                removeClass(BODYELEMENT, addFadeClass);
            });
    }
    
    render = () => <div className={styles.scrollToTopLink} data-scrolltarget onClick={this.scrollToTop} />;
});

export default ScrollToTop;