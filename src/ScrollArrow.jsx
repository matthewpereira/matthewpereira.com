import styles from './index.scss';
import React from 'react';
import $ from 'jquery';
import ScrollSVG from './ScrollSVG.jsx'

/*
 TODO: Instead of hard-coding this function, could you pass the scrollclick function as a prop?
 That way, you can re-use this component later with a different behavior.
*/

const ScrollArrow = () => {
    const onScrollClick = () => {
        var height = $('[data-reactroot]').children('div:nth-of-type(2)').innerHeight();
        console.log(height);
        $("html, body").animate({
            scrollTop: height
        }, 1000, 'swing');
    };

    return (
        <div className={styles.scrollIcon} data-aos="fade-in-long" data-aos-offset="-300" onClick={onScrollClick}>
            <div className={styles.scrollArrows}>
                <ScrollSVG/>
                <ScrollSVG/>
                <ScrollSVG/>
            </div>
        </div>
    )
}

export default ScrollArrow;
