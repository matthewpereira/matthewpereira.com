import styles from './index.scss';
import React from 'react';
import $ from 'jquery';
import ScrollSVG from './ScrollSVG.jsx'

const ScrollArrow = (props) => {
    if (!props.show) {
        return null;
    }
    
    return (
        <div className={styles.scrollIcon} onClick={props.onClick}>
            <div className={styles.scrollArrows}>
                <ScrollSVG/>
                <ScrollSVG/>
                <ScrollSVG/>
            </div>
        </div>
    )
}

export default ScrollArrow;
