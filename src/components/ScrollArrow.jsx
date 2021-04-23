import React     from 'react';
import ScrollSVG from './ScrollSVG.jsx'

import styles    from './ScrollArrow.module.scss';

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
