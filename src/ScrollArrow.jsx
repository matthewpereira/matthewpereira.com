import styles from './index.scss';
import React from 'react';
import $ from 'jquery';
import ScrollSVG from './ScrollSVG.jsx'

const body = $("html, body");
/*
 TODO: Instead of hard-coding this function, could you pass the scrollclick function as a prop?
 That way, you can re-use this component later with a different behavior.
*/

const ScrollArrow = (props) => {
    if (!props.show) {
        return null;
    }
    
    const onScrollClick = () => {
        var height = $('[data-reactroot]').children().children('div:nth-of-type(2)').innerHeight();
        
        body.animate({
            scrollTop: height + 35
        }, 750, 'swing');
    };

    return (
        <div className={styles.scrollIcon} onClick={onScrollClick}>
            <div className={styles.scrollArrows}>
                <ScrollSVG/>
                <ScrollSVG/>
                <ScrollSVG/>
            </div>
        </div>
    )
}

export default ScrollArrow;
