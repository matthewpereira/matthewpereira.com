import styles    from './index.scss';
import React     from 'react';
import $         from 'jquery';
import ScrollSVG from './ScrollSVG.jsx'

export default class ScrollArrow extends React.Component {

    onScrollClick() {
        // document.body.scrollTop = window.innerHeight;
        var height = $('[data-reactroot]').children('div:first-of-type').innerHeight();
        $("html, body").animate({scrollTop:height}, 1000, 'swing');
    }

    render() {
        return (
            <div className={styles.scrollIcon} data-aos="fade-in-long" data-aos-offset="-300" onClick={this.onScrollClick}>
                <div className={styles.scrollArrows}>
                    <ScrollSVG/>
                    <ScrollSVG/>
                    <ScrollSVG/>
                </div>
            </div>
        )
    }
}
