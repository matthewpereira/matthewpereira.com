import React        from 'react';
import {withRouter} from 'react-router';
import $            from 'jquery';
import styles       from './index.scss';

const body = $("html, body");

// Scroll restoration based on
// https://reacttraining.com/react-router/web/guides/scroll-restoration.
const ScrollToTop = withRouter(class ScrollToTopWithoutRouter extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
        const introHeight = $('[data-reactroot]')
            .children()
            .children('div:nth-of-type(2)')
            .innerHeight();

        body.addClass(styles.bodyUpdating)
            .animate({
                scrollTop: introHeight + 35
            }, 1000, 'swing', function() {
                body.removeClass(styles.bodyUpdating); 
            });
        }
  }

  render() {
    return null;
  }
});

export default ScrollToTop;